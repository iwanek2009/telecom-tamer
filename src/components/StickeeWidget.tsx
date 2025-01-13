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
  const maxRetries = 10;
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
          // Add a small delay for mobile devices
          setTimeout(() => {
            if (mounted) {
              (window as any).StickeeLoader.load();
              setRetryCount(0); // Reset retry count on successful load
            }
          }, isMobile ? 500 : 0);
        } catch (error) {
          console.error('Error initializing widget:', error);
          handleRetry();
        }
      } else if (retryCount < maxRetries) {
        console.warn(`StickeeLoader not found. Attempt ${retryCount + 1} of ${maxRetries}`);
        handleRetry();
      } else {
        toast({
          variant: "destructive",
          title: "Widget Load Error",
          description: "Unable to load comparison widget. Please refresh the page.",
        });
      }
    };

    const handleRetry = () => {
      if (mounted && retryCount < maxRetries) {
        timeoutId = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initializeWidget();
        }, isMobile ? 1500 : 1000); // Longer delay for mobile
      }
    };

    // Initial load with a slight delay for mobile
    const initialTimer = setTimeout(() => {
      initializeWidget();
    }, isMobile ? 300 : 0);

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
        className={`w-full ${isMobile ? 'overflow-x-auto' : ''}`}
        data-stickee-widget-id={widgetId}
        data-filters={filters ? JSON.stringify(filters) : undefined}
      >
        Loading comparison widget...
      </div>
    </div>
  );
};

export default StickeeWidget;