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

    // Function to handle navigation
    const handleNavigation = () => {
      // Force page reload when navigating
      window.location.reload();
    };

    // Check if this is a navigation (not initial load)
    if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_NAVIGATE) {
      handleNavigation();
      return;
    }

    // Initial load setup
    initializeWidget();

    // Add navigation event listeners
    window.addEventListener('popstate', handleNavigation);
    
    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleNavigation);
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