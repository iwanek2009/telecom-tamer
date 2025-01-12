import React, { useEffect } from 'react';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  useEffect(() => {
    // Initialize widget when component mounts
    if ((window as any).StickeeLoader) {
      (window as any).StickeeLoader.load();
    }

    // Setup interval to check and reinitialize if needed
    const interval = setInterval(() => {
      const widgetElement = document.querySelector(`[data-stickee-widget-id="${widgetId}"]`);
      if (widgetElement && widgetElement.innerHTML === 'Loading...') {
        if ((window as any).StickeeLoader) {
          (window as any).StickeeLoader.load();
        }
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [widgetId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div data-stickee-widget-id={widgetId} data-filters={filters ? JSON.stringify(filters) : undefined}>
        Loading...
      </div>
    </div>
  );
};

export default StickeeWidget;