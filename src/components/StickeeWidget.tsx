import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const StickeeWidget = () => {
  const location = useLocation();

  useEffect(() => {
    let isSubscribed = true;
    
    const loadStickee = () => {
      if (!isSubscribed) return;

      // First clear any existing widgets
      const container = document.getElementById('stickee-container');
      if (container) {
        container.innerHTML = '<div data-stickee-widget-id="smartfony-90" data-filters=\'{"families":[1971]}\'>Loading...</div>';
      }

      // Remove any existing Stickee scripts
      const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      existingScripts.forEach(script => script.remove());

      // Create and add new script
      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.async = true;
      script.onload = () => {
        if (!isSubscribed) return;
        if ((window as any).StickeeLoader) {
          (window as any).StickeeLoader.load();
        }
      };
      document.body.appendChild(script);
    };

    loadStickee();

    return () => {
      isSubscribed = false;
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, [location]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div id="stickee-container">
        <div data-stickee-widget-id="smartfony-90" data-filters='{"families":[1971]}'>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;