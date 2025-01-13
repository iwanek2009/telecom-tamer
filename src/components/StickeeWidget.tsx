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
  const maxRetries = 5; // Reduced from 10 to 5
  const isMobile = useIsMobile();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let mounted = true;

    const initializeWidget = () => {
      if (!mounted) return;

      if (window && (window as any).StickeeLoader) {
        try {
          console.log('Initializing Stickee widget...');
          (window as any).StickeeLoader.cleanup();
          
          const delay = isMobile ? 3000 : 1000; // Increased delay for mobile
          
          setTimeout(() => {
            if (mounted) {
              console.log('Loading Stickee widget with ID:', widgetId);
              (window as any).StickeeLoader.load();
              setRetryCount(0);
            }
          }, delay);
        } catch (error) {
          console.error('Error initializing widget:', error);
          handleRetry();
        }
      } else if (retryCount < maxRetries) {
        console.log(`Waiting for StickeeLoader... Attempt ${retryCount + 1} of ${maxRetries}`);
        handleRetry();
      } else {
        console.error('StickeeLoader failed to load after maximum retries');
        toast({
          variant: "destructive",
          title: "Widget Load Error",
          description: "Unable to load comparison widget. Please refresh the page.",
        });
      }
    };

    const handleRetry = () => {
      if (mounted && retryCount < maxRetries) {
        const retryDelay = isMobile ? 3000 : 1500;
        timeoutId = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initializeWidget();
        }, retryDelay);
      }
    };

    // Initial load
    const initialDelay = isMobile ? 2000 : 500;
    const initialTimer = setTimeout(() => {
      console.log('Initial widget load attempt...');
      initializeWidget();
    }, initialDelay);

    // Cleanup
    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (initialTimer) clearTimeout(initialTimer);
      if (window && (window as any).StickeeLoader) {
        try {
          (window as any).StickeeLoader.cleanup();
        } catch (error) {
          console.error('Error cleaning up StickeeLoader:', error);
        }
      }
    };
  }, [location.pathname, widgetId, filters, retryCount, isMobile]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        className={`w-full ${isMobile ? 'min-h-[600px]' : 'min-h-[500px]'} relative`}
        data-stickee-widget-id={widgetId}
        data-filters={filters ? JSON.stringify(filters) : undefined}
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Loading comparison widget...</p>
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;