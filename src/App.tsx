import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import Mobile from "./pages/Mobile";
import Broadband from "./pages/Broadband";
import About from "./pages/About";
import SimOnly from "./pages/SimOnly";
import InternetUK from "./pages/InternetUK";
import FibreBroadband from "./pages/FibreBroadband";
import CheapBroadbandDeals from "./pages/CheapBroadbandDeals";
import Broadband100Mbps from "./pages/Broadband100Mbps";

const queryClient = new QueryClient();

const AppContent = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const isLocalLink = 
        anchor.hostname === window.location.hostname &&
        anchor.getAttribute('href') &&
        !anchor.getAttribute('href')?.startsWith('#');

      if (isLocalLink) {
        e.preventDefault();
        window.location.href = anchor.getAttribute('href') || '/';
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/mobile" element={<Mobile />} />
      <Route path="/broadband" element={<Broadband />} />
      <Route path="/broadband/fibre-broadband" element={<FibreBroadband />} />
      <Route path="/about" element={<About />} />
      <Route path="/sim" element={<SimOnly />} />
      <Route path="/internet-uk" element={<InternetUK />} />
      <Route path="/broadband/cheap-broadband-deals" element={<CheapBroadbandDeals />} />
      <Route path="/broadband/100mbps" element={<Broadband100Mbps />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;