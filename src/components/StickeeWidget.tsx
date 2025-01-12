import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const location = useLocation();

  useEffect(() => {
    // Function to initialize the widget
    const initializeWidget = () => {
      if ((window as any).StickeeLoader) {
        try {
          console.log('Initializing Stickee widget...');
          (window as any).StickeeLoader.load();
        } catch (error) {
          console.error('Error initializing widget:', error);
        }
      }
    };

    // Function to check and initialize widget
    const checkAndInitialize = () => {
      // Add timestamp to URL to force widget refresh
      const url = new URL(window.location.href);
      url.searchParams.set('refresh', Date.now().toString());
      window.history.replaceState({}, '', url);

      // Set up interval to check for StickeeLoader
      const interval = setInterval(() => {
        if ((window as any).StickeeLoader) {
          clearInterval(interval);
          initializeWidget();
        }
      }, 100);

      // Clear interval after 5 seconds if widget hasn't loaded
      setTimeout(() => clearInterval(interval), 5000);

      return interval;
    };

    // Initial check and setup
    const interval = checkAndInitialize();

    // Add popstate event listener for browser navigation
    window.addEventListener('popstate', initializeWidget);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('popstate', initializeWidget);
    };
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