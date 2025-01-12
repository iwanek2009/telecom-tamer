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
    
    script.onload = () => {
      if ((window as any).StickeeLoader) {
        setTimeout(() => {
          (window as any).StickeeLoader.load();
          console.log('Widget loaded successfully');
        }, 500);
      }
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
  }, [location.pathname]); // Re-run effect when path changes

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