export const loadStickeeScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://whitelabels.stickeebroadband.co.uk/js/loader.js';
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
  const scripts = document.querySelectorAll('script[src*="stickeebroadband"]');
  scripts.forEach(script => script.remove());
};