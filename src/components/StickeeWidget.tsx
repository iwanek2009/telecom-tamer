import React, { useEffect } from 'react';

const StickeeWidget = () => {
  useEffect(() => {
    // Function to load Stickee script
    const loadStickee = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
        script.onload = () => {
          if ((window as any).StickeeLoader) {
            (window as any).StickeeLoader.load();
          }
          resolve(true);
        };
        document.body.appendChild(script);
      });
    };

    // Remove any existing Stickee scripts
    const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
    existingScripts.forEach(script => script.remove());

    // Load new script
    loadStickee();

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, []); 

  return (
    <div className="container mx-auto px-4 py-8">
      <div data-stickee-widget-id="smartfony-90" data-filters='{"families":[1971]}'>
        Loading...
      </div>
    </div>
  );
};

export default StickeeWidget;