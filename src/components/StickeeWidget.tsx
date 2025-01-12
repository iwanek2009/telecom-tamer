import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const StickeeWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const initializeWidget = () => {
      console.log('Initializing widget...');
      
      // Remove existing scripts
      const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      existingScripts.forEach(script => script.remove());

      // Reset widget container
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '<div data-stickee-widget-id="smartfony-90" data-filters=\'{"families":[1971]}\'>Loading...</div>';
      }

      // Add new script
      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        if ((window as any).StickeeLoader) {
          setTimeout(() => {
            (window as any).StickeeLoader.load();
            console.log('Widget loaded');
          }, 500);
        }
      };
      document.body.appendChild(script);
    };

    // Initialize when location changes
    initializeWidget();

    return () => {
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, [location.pathname]); // Only reinitialize when the path changes

  return (
    <div className="container mx-auto px-4 py-8">
      <div ref={widgetRef} id="stickee-container">
        <div data-stickee-widget-id="smartfony-90" data-filters='{"families":[1971]}'>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;