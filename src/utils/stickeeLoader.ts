export const loadStickeeScript = () => {
  return new Promise<boolean>((resolve) => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="stickeebroadband"]');
    if (existingScript) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).StickeeLoader) {
        (window as any).StickeeLoader.load();
      }
      resolve(true);
    };
    script.onerror = () => {
      console.error('Failed to load Stickee script');
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export const cleanupStickeeScript = () => {
  return new Promise<void>((resolve) => {
    const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
    scripts.forEach(script => script.remove());
    
    // Clean up any existing widgets
    const widgets = document.querySelectorAll('[data-stickee-widget-id]');
    widgets.forEach(widget => {
      if (widget.parentNode) {
        widget.parentNode.removeChild(widget);
      }
    });
    
    resolve();
  });
};