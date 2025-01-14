export const loadStickeeScript = () => {
  return new Promise((resolve, reject) => {
    // Check if script already exists
    if (document.querySelector('script[src*="stickeebroadband"]')) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).StickeeLoader) {
        resolve(true);
      } else {
        reject(new Error('StickeeLoader not found after script load'));
      }
    };

    script.onerror = () => {
      reject(new Error('Failed to load Stickee script'));
    };

    document.body.appendChild(script);
  });
};

export const cleanupStickeeScript = () => {
  // Only remove the widget containers, keep the script
  const widgets = document.querySelectorAll('[data-stickee-widget-id]');
  widgets.forEach(widget => {
    if (widget.parentNode) {
      widget.parentNode.removeChild(widget);
    }
  });
};
