interface StickeeLoader {
  load: () => void;
}

declare global {
  interface Window {
    StickeeLoader?: StickeeLoader;
  }
}

export {};