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
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).StickeeLoader) {
        (window as any).StickeeLoader.load();
      }
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

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
        <div data-stickee-widget-id="smartfony-90" data-filters='{"families":[1971]}'>
          Loading...
        </div>
      </div>
    </div>
  );
};

export default StickeeWidget;