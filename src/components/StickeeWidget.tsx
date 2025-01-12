import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StickeeWidget = () => {
  const location = useLocation();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Reset widget when location changes
    setKey(prev => prev + 1);
    
    const loadStickee = () => {
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
      script.onload = () => {
        if ((window as any).StickeeLoader) {
          setTimeout(() => {
            (window as any).StickeeLoader.load();
          }, 100);
        }
      };
      document.body.appendChild(script);
    };

    loadStickee();

    return () => {
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, [location, key]);

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