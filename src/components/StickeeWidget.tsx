import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const location = useLocation();

  useEffect(() => {
    // Add timestamp to URL to force widget refresh
    const url = new URL(window.location.href);
    url.searchParams.set('refresh', Date.now().toString());
    window.history.replaceState({}, '', url);

    // Initialize widget
    if ((window as any).StickeeLoader) {
      (window as any).StickeeLoader.load();
    }
  }, [location.pathname]);

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