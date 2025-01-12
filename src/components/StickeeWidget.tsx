import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { RefreshCcw } from 'lucide-react';

const StickeeWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const reloadWidget = () => {
    if ((window as any).StickeeLoader) {
      const container = document.querySelector('[data-stickee-widget-id]');
      if (container) {
        container.innerHTML = 'Loading...';
      }
      (window as any).StickeeLoader.load();
    }
  };

  useEffect(() => {
    const initializeWidget = () => {
      // Remove any existing scripts first
      const existingScripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      existingScripts.forEach(script => script.remove());

      const script = document.createElement('script');
      script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
      script.async = true;
      script.crossOrigin = 'anonymous'; // Add CORS attribute
      
      // Add error handling
      script.onerror = (error) => {
        console.error('Error loading Stickee widget script:', error);
      };
      
      script.onload = () => {
        if ((window as any).StickeeLoader) {
          // Add a small delay to ensure proper initialization
          setTimeout(() => {
            (window as any).StickeeLoader.load();
          }, 500);
        }
      };
      
      document.body.appendChild(script);
    };

    initializeWidget();

    return () => {
      const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
      scripts.forEach(script => script.remove());
    };
  }, [location.pathname]); // Reinitialize when path changes

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-end mb-4">
        <Button 
          onClick={reloadWidget}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <RefreshCcw size={16} />
          Reload Deals
        </Button>
      </div>
      <div ref={widgetRef} id="stickee-container">
        <div 
          data-stickee-widget-id="smartfony-90" 
          data-filters='{"families":[1971]}'
          data-fixed-filters='{"hardware_types":["HANDSET"]}'
        >
          Loading...
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;