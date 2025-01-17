import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { mainRoutes } from "./routes/mainRoutes";
import { broadbandRoutes } from "./routes/broadbandRoutes";
import { localRoutes } from "./routes/localRoutes";
import { londonRoutes } from "./routes/londonRoutes";
import { birminghamRoutes } from "./routes/birminghamRoutes";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate(window.location.pathname);
    };

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
          window.history.pushState({}, '', href);
          navigate(href);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, [navigate]);

  return (
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
      {birminghamRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;