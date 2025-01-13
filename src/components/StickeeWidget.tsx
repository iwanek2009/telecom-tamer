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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Browser detection
  const getBrowserInfo = () => {
    const ua = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    const isFirefox = ua.toLowerCase().indexOf('firefox') > -1;
    const isChrome = /chrome|chromium|crios/i.test(ua);
    const isEdge = /edg/i.test(ua);
    const isIE = /msie|trident/i.test(ua);

    return { isSafari, isFirefox, isChrome, isEdge, isIE };
  };

  // Get loading delay based on browser and device
  const getLoadingDelay = () => {
    const { isSafari, isFirefox, isIE } = getBrowserInfo();
    
    if (isMobile) {
      return isSafari ? 3500 : 2500;
    }
    
    if (isSafari) return 3000;
    if (isFirefox) return 2500;
    if (isIE) return 3500;
    
    return 2000; // Default delay for other browsers
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const cleanupWidget = () => {
      if (window && (window as any).StickeeLoader?.cleanup) {
        try {
          console.log('Cleaning up Stickee widget...');
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
          
          const delay = getLoadingDelay();
          console.log(`Using delay of ${delay}ms for widget initialization`);
          
          timeoutRef.current = setTimeout(() => {
            if (mountedRef.current && containerRef.current) {
              (window as any).StickeeLoader.load();
              setRetryCount(0);
              setIsLoading(false);
              console.log('Widget loaded successfully');
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
        const retryDelay = getLoadingDelay();
        timeoutRef.current = setTimeout(() => {
          setRetryCount(prev => prev + 1);
          initializeWidget();
        }, retryDelay);
      }
    };

    // Initial load
    const initialDelay = getLoadingDelay();
    console.log(`Starting widget initialization with ${initialDelay}ms delay`);
    timeoutRef.current = setTimeout(initializeWidget, initialDelay);

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
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