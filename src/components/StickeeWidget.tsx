import React, { useEffect } from 'react';

const StickeeWidget = () => {
  useEffect(() => {
    console.log('StickeeWidget mounted');
    
    const loadStickee = () => {
      console.log('Loading Stickee script...');
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
        script.onload = () => {
          console.log('Script loaded, checking StickeeLoader...');
          if ((window as any).StickeeLoader) {
            console.log('StickeeLoader found, initializing...');
            (window as any).StickeeLoader.load();
            console.log('StickeeLoader initialized');
          } else {
            console.log('StickeeLoader not found');
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

    const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
    console.log('Found existing scripts:', existingScripts.length);
    existingScripts.forEach(script => {
      console.log('Removing script:', script);
      script.remove();
    });

    loadStickee();

    return () => {
      console.log('StickeeWidget unmounting');
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