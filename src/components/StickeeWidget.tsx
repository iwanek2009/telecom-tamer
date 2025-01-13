import React, { useEffect, useState, useRef } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    const cleanupWidget = () => {
      if (window && (window as any).StickeeLoader?.cleanup) {
        try {
          (window as any).StickeeLoader.cleanup();
        } catch (error) {
          console.warn('Cleanup warning:', error);
        }
      }
    };

    const initializeWidget = () => {
      if (!mountedRef.current || !containerRef.current) return;

      if (window && (window as any).StickeeLoader) {
        try {
          console.log('Initializing Stickee widget...');
          
          // Clean up existing widget first
          cleanupWidget();
          
          const delay = isSafari ? 3000 : (isMobile ? 2000 : 1000);
          
          timeoutId = setTimeout(() => {
            if (mountedRef.current && containerRef.current) {
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
      if (mountedRef.current && retryCount < maxRetries) {
        const retryDelay = isSafari ? 3000 : (isMobile ? 2500 : 1000);
        timeoutId = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initializeWidget();
        }, retryDelay);
      }
    };

    // Initial load
    const initialDelay = isSafari ? 3000 : (isMobile ? 1500 : 1000);
    timeoutId = setTimeout(initializeWidget, initialDelay);

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (mountedRef.current) {
        cleanupWidget();
      }
      mountedRef.current = false;
    };
  }, [location.pathname, widgetId, filters, retryCount, isMobile, toast]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        ref={containerRef}
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