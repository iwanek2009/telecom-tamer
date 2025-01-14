export const loadStickeeScript = () => {
  return new Promise((resolve) => {
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
        (window as any).StickeeLoader.load();
      }
      resolve(true);
    };
    document.body.appendChild(script);
  });
};

export const cleanupStickeeScript = () => {
  // Remove all Stickee scripts
  const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
  scripts.forEach(script => script.remove());

  // Clean up any existing instances
  if ((window as any).StickeeLoader) {
    (window as any).StickeeLoader = undefined;
  }
};