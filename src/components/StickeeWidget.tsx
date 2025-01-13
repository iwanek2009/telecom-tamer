import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StickeeWidget = () => {
  const location = useLocation();
  const isBroadbandPage = location.pathname === '/broadband';

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
      {isBroadbandPage ? (
        <div data-stickee-widget-id="smartfony-91">Loading...</div>
      ) : (
        <div data-stickee-widget-id="smartfony-90" data-filters='{"families":[1971]}'>
          Loading...
        </div>
      )}
    </div>
  );
};

export default StickeeWidget;