import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Function to load script and initialize widget
    const loadScript = () => {
      // Remove any existing scripts first
      const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      existingScripts.forEach(script => script.remove());

      // Create and load new script
      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.defer = true; // Use defer instead of async
      
      script.onload = () => {
        setTimeout(() => {
          if ((window as any).StickeeLoader) {
            try {
              (window as any).StickeeLoader.load();
            } catch (error) {
              console.error('Error loading widget:', error);
            }
          }
        }, 500); // Increased timeout
      };

      document.body.appendChild(script);
      return script;
    };

    const script = loadScript();

    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [location.pathname, widgetId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div 
        ref={containerRef}
        data-stickee-widget-id={widgetId}
        data-filters={filters ? JSON.stringify(filters) : undefined}
      >
        Loading...
      </div>
    </div>
  );
};

export default StickeeWidget;