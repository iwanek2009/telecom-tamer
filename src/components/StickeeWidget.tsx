import React, { useEffect, useRef } from 'react';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const initAttempts = useRef(0);
  const maxAttempts = 5;

  const initWidget = () => {
    console.log('Attempting to initialize widget...', widgetId);
    
    if ((window as any).StickeeLoader) {
      (window as any).StickeeLoader.load();
      console.log('Widget initialized successfully');
      return true;
    }
    
    initAttempts.current += 1;
    console.log(`Initialization attempt ${initAttempts.current} of ${maxAttempts}`);
    return false;
  };

  useEffect(() => {
    // Initial initialization
    if (!initWidget()) {
      // If initial load fails, try again every second for up to maxAttempts
      const interval = setInterval(() => {
        if (initWidget() || initAttempts.current >= maxAttempts) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        initWidget();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [widgetId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        data-stickee-widget-id={widgetId}
        data-filters={filters ? JSON.stringify(filters) : undefined}
      >
        Loading...
      </div>
    </div>
  );
};

export default StickeeWidget;