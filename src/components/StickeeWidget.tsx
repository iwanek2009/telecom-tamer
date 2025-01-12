import React, { useEffect, useRef } from 'react';

const StickeeWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeWidget = () => {
      // Clear existing widgets and scripts
      const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      existingScripts.forEach(script => script.remove());

      if (widgetRef.current) {
        widgetRef.current.innerHTML = '<div data-stickee-widget-id="smartfony-90" data-filters=\'{"families":[1971]}\'>Loading...</div>';
      }

      // Create and load new script
      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.async = true;
      script.onload = () => {
        setTimeout(() => {
          if ((window as any).StickeeLoader) {
            (window as any).StickeeLoader.load();
          }
        }, 100);
      };
      document.body.appendChild(script);
    };

    // Initialize on mount
    initializeWidget();

    // Add event listener for route changes
    window.addEventListener('popstate', initializeWidget);
    window.addEventListener('pushstate', initializeWidget);
    
    // Add custom event for manual reload
    const reloadEvent = new Event('reloadStickeeWidget');
    window.addEventListener('reloadStickeeWidget', initializeWidget);

    return () => {
      window.removeEventListener('popstate', initializeWidget);
      window.removeEventListener('pushstate', initializeWidget);
      window.removeEventListener('reloadStickeeWidget', initializeWidget);
    };
  }, []);

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