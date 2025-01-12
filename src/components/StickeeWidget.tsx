import React, { useEffect, useRef } from 'react';
import { useNavigate, useLocation, UNSAFE_NavigationContext } from 'react-router-dom';

const StickeeWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigationContext = React.useContext(UNSAFE_NavigationContext);

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

    // Listen for navigation
    const unlisten = navigationContext.navigator.listen(() => {
      console.log('Navigation occurred');
      initializeWidget();
    });

    // Initial load
    initializeWidget();

    return () => {
      unlisten();
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, [navigationContext.navigator, location]);

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