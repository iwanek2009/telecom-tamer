import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface StickeeWidgetProps {
  widgetId: string;
  filters?: Record<string, unknown>;
}

const StickeeWidget = ({ widgetId, filters }: StickeeWidgetProps) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const initWidget = () => {
    console.log('Initializing widget...');
    // Reset container content
    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <div 
          data-stickee-widget-id="${widgetId}"
          data-filters='${filters ? JSON.stringify(filters) : ""}'
        >Loading...</div>
      `;
    }
    
    // Load script and initialize
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.crossOrigin = 'anonymous'; // Add CORS header
    script.defer = true;
    
    script.onload = () => {
      if ((window as any).StickeeLoader) {
        try {
          console.log('Attempting to load StickeeLoader...');
          setTimeout(() => {
            (window as any).StickeeLoader.load();
            console.log('Widget loaded successfully');
          }, 1000); // Increased timeout for better reliability
        } catch (error) {
          console.error('Error loading widget:', error);
        }
      } else {
        console.error('StickeeLoader not found in window object');
      }
    };

    script.onerror = (error) => {
      console.error('Error loading Stickee script:', error);
    };
    
    // Remove any existing Stickee scripts
    document.querySelectorAll('script[src*="stickeebroadband"]')
      .forEach(s => s.remove());
      
    // Add new script
    document.body.appendChild(script);
  };

  useEffect(() => {
    initWidget();

    // Handle visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        initWidget();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('popstate', initWidget);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('popstate', initWidget);
    };
  }, [location.pathname, widgetId, filters]); // Added dependencies

  return (
    <div className="container mx-auto px-4 py-8">
      <div ref={containerRef}>
        <div 
          data-stickee-widget-id={widgetId}
          data-filters={filters ? JSON.stringify(filters) : undefined}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;