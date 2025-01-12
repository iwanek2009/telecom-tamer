import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const StickeeWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const initializeWidget = () => {
      // Clear existing widgets and scripts
      const existingScripts = document.querySelectorAll('script[src*="stickee"]');
      existingScripts.forEach(script => script.remove());

      if (widgetRef.current) {
        widgetRef.current.innerHTML = '<div data-stickee-widget-id="smartfony-90" data-filters=\'{"families":[1971]}\'>Loading...</div>';
      }

      // Create and load new script
      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        if ((window as any).StickeeLoader) {
          (window as any).StickeeLoader.load();
        }
      };
      script.onerror = (error) => {
        console.error('Error loading Stickee widget:', error);
        if (widgetRef.current) {
          widgetRef.current.innerHTML = '<div class="text-center p-4">Unable to load comparison widget. Please refresh the page.</div>';
        }
      };
      document.body.appendChild(script);
    };

    // Initialize on mount and route changes
    initializeWidget();

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[src*="stickee"]');
      scripts.forEach(script => script.remove());
    };
  }, [location]); // Re-initialize when location changes

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