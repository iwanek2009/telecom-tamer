import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StickeeWidget = () => {
  const location = useLocation();

  useEffect(() => {
    console.log('Location changed, reloading widget...');
    
    const loadStickee = () => {
      console.log('Loading Stickee script...');
      // Remove any existing widgets
      const existingWidgets = document.querySelectorAll('[data-stickee-widget-id]');
      existingWidgets.forEach(widget => {
        widget.innerHTML = 'Loading...';
      });

      // Create and load new script
      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.onload = () => {
        if ((window as any).StickeeLoader) {
          (window as any).StickeeLoader.load();
        }
      };
      document.body.appendChild(script);
    };

    // Remove existing scripts
    const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
    existingScripts.forEach(script => script.remove());

    // Load new script
    loadStickee();

    return () => {
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, [location]); // Re-run effect when location changes

  return (
    <div className="container mx-auto px-4 py-8">
      <div data-stickee-widget-id="smartfony-90" data-filters='{"families":[1971]}'>
        Loading...
      </div>
    </div>
  );
};

export default StickeeWidget;