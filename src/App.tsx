import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { mainRoutes } from "./routes/mainRoutes";
import { broadbandRoutes } from "./routes/broadbandRoutes";
import { localRoutes } from "./routes/localRoutes";
import { londonRoutes } from "./routes/londonRoutes";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const isLocalLink =
        anchor.hostname === window.location.hostname &&
        anchor.getAttribute('href') &&
        !anchor.getAttribute('href')?.startsWith('#');

      if (isLocalLink) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          console.log('Forcing full page reload for:', href);
          window.location.href = href;
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {mainRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {broadbandRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {localRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            {londonRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;