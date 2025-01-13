import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const location = useLocation();
  const { toast } = useToast();
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 15;
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [widgetContainer, setWidgetContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let mounted = true;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    const initializeWidget = () => {
      if (!mounted || !widgetContainer) return;

      if (window && (window as any).StickeeLoader) {
        try {
          console.log('Initializing Stickee widget...');
          
          // Safely cleanup existing widget
          if ((window as any).StickeeLoader.cleanup) {
            try {
              (window as any).StickeeLoader.cleanup();
            } catch (error) {
              console.warn('Cleanup warning:', error);
            }
          }
          
          // Add longer delay for Safari and mobile
          const delay = isSafari ? 3000 : (isMobile ? 2000 : 1000);
          
          timeoutId = setTimeout(() => {
            if (mounted && widgetContainer) {
              (window as any).StickeeLoader.load();
              setRetryCount(0);
              setIsLoading(false);
            }
          }, delay);
        } catch (error) {
          console.error('Error initializing widget:', error);
          handleRetry();
        }
      } else if (retryCount < maxRetries) {
        console.warn(`StickeeLoader not found. Attempt ${retryCount + 1} of ${maxRetries}`);
        handleRetry();
      } else {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Widget Load Error",
          description: "Unable to load comparison widget. Please refresh the page.",
        });
      }
    };

    const handleRetry = () => {
      if (mounted && retryCount < maxRetries) {
        const retryDelay = isSafari ? 3000 : (isMobile ? 2500 : 1000);
        timeoutId = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initializeWidget();
        }, retryDelay);
      }
    };

    // Initial load with appropriate delay
    const initialDelay = isSafari ? 3000 : (isMobile ? 1500 : 1000);
    timeoutId = setTimeout(() => {
      initializeWidget();
    }, initialDelay);

    // Cleanup
    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      
      // Safely cleanup widget on unmount
      if (window && (window as any).StickeeLoader && (window as any).StickeeLoader.cleanup) {
        try {
          (window as any).StickeeLoader.cleanup();
        } catch (error) {
          console.warn('Cleanup warning:', error);
        }
      }
    };
  }, [location.pathname, widgetId, filters, retryCount, isMobile, widgetContainer]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        ref={setWidgetContainer}
        className={`w-full ${isMobile ? 'min-h-[500px] overflow-x-hidden' : ''}`}
        data-stickee-widget-id={widgetId}
        data-filters={filters ? JSON.stringify(filters) : undefined}
      >
        {isLoading && (
          <div className="flex items-center justify-center h-full min-h-[200px]">
            <p className="text-gray-500">Loading comparison widget...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickeeWidget;