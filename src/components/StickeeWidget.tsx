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
    console.log('Location or widget ID changed, reinitializing...');
    
    // Remove any existing scripts
    const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
    existingScripts.forEach(script => script.remove());

    // Create fresh script element
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;

    // Initialize widget after script loads
    script.onload = () => {
      console.log('Script loaded, initializing widget...');
      if ((window as any).StickeeLoader) {
        setTimeout(() => {
          (window as any).StickeeLoader.load();
          console.log('Widget initialized');
        }, 100);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = 'Loading...';
      }
      script.remove();
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