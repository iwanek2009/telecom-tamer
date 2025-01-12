import React, { useEffect } from 'react';

const StickeeWidget = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;

    // Add load handler
    script.onload = () => {
      if ((window as any).StickeeLoader) {
        (window as any).StickeeLoader.load();
      }
    };

    // Add script to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div id="stickee-container">
        <div 
          data-stickee-widget-id="smartfony-90" 
          data-filters='{"families":[1971]}'
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;