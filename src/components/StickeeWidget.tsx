import React, { useEffect } from 'react';

const StickeeWidget = () => {
  useEffect(() => {
    console.log('StickeeWidget mounted');
    
    const loadStickee = () => {
      console.log('Loading Stickee script...');
      return new Promise((resolve) => {
        const script = document.createElement('script');
        // Updated URL to use the correct domain
        script.src = 'https://smartfony.stickeemobiles.co.uk/js/loader.js';
        script.async = true;
        script.onload = () => {
          console.log('Script loaded, checking StickeeLoader...');
          if ((window as any).StickeeLoader) {
            console.log('StickeeLoader found, initializing...');
            try {
              (window as any).StickeeLoader.load();
              console.log('StickeeLoader initialized');
            } catch (error) {
              console.error('Error initializing StickeeLoader:', error);
            }
          } else {
            console.log('StickeeLoader not found');
            // Retry after a short delay if loader is not immediately available
            setTimeout(() => {
              if ((window as any).StickeeLoader) {
                (window as any).StickeeLoader.load();
                console.log('StickeeLoader initialized after delay');
              }
            }, 1000);
          }
          resolve(true);
        };
        script.onerror = (error) => {
          console.error('Error loading Stickee script:', error);
          resolve(false);
        };
        document.body.appendChild(script);
      });
    };

    const existingScripts = document.querySelectorAll('script[src*="stickeemobiles"]');
    console.log('Found existing scripts:', existingScripts.length);
    existingScripts.forEach(script => {
      console.log('Removing script:', script);
      script.remove();
    });

    loadStickee();

    return () => {
      console.log('StickeeWidget unmounting');
      const scripts = document.querySelectorAll('script[src*="stickeemobiles"]');
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