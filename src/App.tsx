import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Mobile from "./pages/Mobile";
import Broadband from "./pages/Broadband";
import About from "./pages/About";
import SimOnly from "./pages/SimOnly";
import InternetUK from "./pages/InternetUK";
import FibreBroadband from "./pages/FibreBroadband";
import CheapBroadbandDeals from "./pages/CheapBroadbandDeals";
import Broadband100Mbps from "./pages/Broadband100Mbps";
import BroadbandHomePhone from "./pages/BroadbandHomePhone";
import UltrafastBroadband from "./pages/UltrafastBroadband";
import LocalBroadband from "./pages/LocalBroadband";
import SouthamptonBroadband from "./pages/SouthamptonBroadband";

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
            <Route path="/" element={<Index />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/broadband" element={<Broadband />} />
            <Route path="/broadband/fibre-broadband" element={<FibreBroadband />} />
            <Route path="/broadband/home-phone" element={<BroadbandHomePhone />} />
            <Route path="/broadband/ultrafast" element={<UltrafastBroadband />} />
            <Route path="/broadband/local" element={<LocalBroadband />} />
            <Route path="/broadband/southampton" element={<SouthamptonBroadband />} />
            <Route path="/about" element={<About />} />
            <Route path="/sim" element={<SimOnly />} />
            <Route path="/internet-uk" element={<InternetUK />} />
            <Route path="/broadband/cheap-broadband-deals" element={<CheapBroadbandDeals />} />
            <Route path="/broadband/100mbps" element={<Broadband100Mbps />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;