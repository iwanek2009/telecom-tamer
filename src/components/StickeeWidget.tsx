import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const location = useLocation();

  useEffect(() => {
    const initializeWidget = () => {
      // Check if StickeeLoader is available
      if (window && (window as any).StickeeLoader) {
        try {
          console.log('Initializing Stickee widget...');
          // Initialize with filters if provided
          (window as any).StickeeLoader.load();
        } catch (error) {
          console.error('Error initializing widget:', error);
        }
      } else {
        console.warn('StickeeLoader not found. Retrying...');
        // Retry initialization after a short delay
        setTimeout(initializeWidget, 1000);
      }
    };

    // Function to handle navigation
    const handleNavigation = () => {
      // Force page reload when navigating
      window.location.reload();
    };

    // Initial load setup
    initializeWidget();

    // Add navigation event listeners
    window.addEventListener('popstate', handleNavigation);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, [location.pathname, widgetId, filters]);

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