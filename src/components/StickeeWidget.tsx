import React, { useEffect } from 'react';

const StickeeWidget = () => {
  useEffect(() => {
    // Function to initialize Stickee
    const initializeStickee = () => {
      if ((window as any).StickeeLoader) {
        console.log('Initializing Stickee widget...');
        // Clear existing widget content first
        const container = document.querySelector('[data-stickee-widget-id]');
        if (container) {
          container.innerHTML = 'Loading...';
        }
        // Reinitialize the widget
        (window as any).StickeeLoader.load();
      } else {
        console.log('StickeeLoader not found');
      }
    };

    // Create and load the Stickee script
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;

    // Add load handler
    script.onload = () => {
      initializeStickee();
    };

    // Add script to document
    document.body.appendChild(script);

    // Add route change listener
    const handleRouteChange = () => {
      setTimeout(initializeStickee, 100); // Small delay to ensure DOM is ready
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      // Cleanup listener and script on component unmount
      window.removeEventListener('popstate', handleRouteChange);
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