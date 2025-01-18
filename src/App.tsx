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
import FibreBroadbandSouthampton from "./pages/FibreBroadbandSouthampton";
import SouthamptonBroadband from "./pages/SouthamptonBroadband";
import BroadbandTVSouthampton from "./pages/BroadbandTVSouthampton";
import LiverpoolBroadband from "./pages/LiverpoolBroadband";
import FibreBroadbandLiverpool from "./pages/FibreBroadbandLiverpool";
import AllertonBroadband from "./pages/AllertonBroadband";
import LondonBroadband from "./pages/LondonBroadband";
import FibreBroadbandLondon from "./pages/FibreBroadbandLondon";
import SouthLondonBroadband from "./pages/SouthLondonBroadband";
import BrixtonBroadband from "./pages/BrixtonBroadband";
import GreenwichBroadband from "./pages/GreenwichBroadband";
import CroydonBroadband from "./pages/CroydonBroadband";
import CentralLondonBroadband from "./pages/CentralLondonBroadband";
import Zone1LondonBroadband from "./pages/Zone1LondonBroadband";
import WestEndBroadband from "./pages/WestEndBroadband";
import StudentBroadbandLondon from "./pages/StudentBroadbandLondon";
import BusinessBroadbandLondon from "./pages/BusinessBroadbandLondon";
import GamingBroadbandLondon from "./pages/GamingBroadbandLondon";
import WorkFromHomeLondon from "./pages/WorkFromHomeLondon";
import NorthLondonBroadband from "./pages/NorthLondonBroadband";
import IslingtonBroadband from "./pages/IslingtonBroadband";
import CamdenBroadband from "./pages/CamdenBroadband";
import FinsburyParkBroadband from "./pages/FinsburyParkBroadband";
import CommunityFibreLondon from "./pages/CommunityFibreLondon";
import VirginMediaLondon from "./pages/VirginMediaLondon";
import GNetworkLondon from "./pages/GNetworkLondon";
import LondonTVBroadband from "./pages/LondonTVBroadband";
import BTLondonBroadband from "./pages/BTLondonBroadband";
import CstylePage from "./pages/CstylePage";
import BirminghamBroadband from "./pages/BirminghamBroadband";
import FibreBroadbandBirmingham from "./pages/FibreBroadbandBirmingham";
import BirminghamTVBroadband from "./pages/BirminghamTVBroadband";
import BirminghamCityCentreBroadband from "./pages/BirminghamCityCentreBroadband";
import JewelleryQuarterBroadband from "./pages/JewelleryQuarterBroadband";
import DigbethBroadband from "./pages/DigbethBroadband";
import AstonBroadband from "./pages/AstonBroadband";
import HyperopticLondon from "./pages/HyperopticLondon";
import SmallHeathBroadband from "./pages/SmallHeathBroadband";

import ManchesterBroadband from "./pages/ManchesterBroadband";
import ManchesterCityCentreBroadband from "./pages/ManchesterCityCentreBroadband";
import FibreBroadbandManchester from "./pages/FibreBroadbandManchester";
import ManchesterTVBroadband from "./pages/ManchesterTVBroadband";
import DidsburyBroadband from "./pages/DidsburyBroadband";
import ChorltonBroadband from "./pages/ChorltonBroadband";
import WithingtonBroadband from "./pages/WithingtonBroadband";
import PrestwichBroadband from "./pages/PrestwichBroadband";

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
            <Route path="/broadband/cheap-broadband-deals" element={<CheapBroadbandDeals />} />
            <Route path="/broadband/100mbps" element={<Broadband100Mbps />} />
            <Route path="/broadband/home-phone" element={<BroadbandHomePhone />} />
            <Route path="/broadband/ultrafast" element={<UltrafastBroadband />} />
            <Route path="/broadband/local" element={<LocalBroadband />} />
            <Route path="/local/fibre-broadband-southampton" element={<FibreBroadbandSouthampton />} />
            <Route path="/local/southampton" element={<SouthamptonBroadband />} />
            <Route path="/local/southampton-broadband-tv" element={<BroadbandTVSouthampton />} />
            <Route path="/local/liverpool" element={<LiverpoolBroadband />} />
            <Route path="/local/fibre-broadband-liverpool" element={<FibreBroadbandLiverpool />} />
            <Route path="/local/allerton" element={<AllertonBroadband />} />
            <Route path="/local/london" element={<LondonBroadband />} />
            <Route path="/local/fibre-broadband-london" element={<FibreBroadbandLondon />} />
            <Route path="/local/south-london" element={<SouthLondonBroadband />} />
            <Route path="/local/north-london" element={<NorthLondonBroadband />} />
            <Route path="/local/brixton" element={<BrixtonBroadband />} />
            <Route path="/local/greenwich" element={<GreenwichBroadband />} />
            <Route path="/local/croydon" element={<CroydonBroadband />} />
            <Route path="/local/central-london" element={<CentralLondonBroadband />} />
            <Route path="/local/zone1-london" element={<Zone1LondonBroadband />} />
            <Route path="/local/west-end" element={<WestEndBroadband />} />
            <Route path="/local/student-london" element={<StudentBroadbandLondon />} />
            <Route path="/local/business-london" element={<BusinessBroadbandLondon />} />
            <Route path="/local/gaming-london" element={<GamingBroadbandLondon />} />
            <Route path="/local/wfh-london" element={<WorkFromHomeLondon />} />
            <Route path="/local/islington" element={<IslingtonBroadband />} />
            <Route path="/local/camden" element={<CamdenBroadband />} />
            <Route path="/local/finsbury-park" element={<FinsburyParkBroadband />} />
            <Route path="/local/community-fibre" element={<CommunityFibreLondon />} />
            <Route path="/local/virgin-media" element={<VirginMediaLondon />} />
            <Route path="/local/g-network" element={<GNetworkLondon />} />
            <Route path="/local/hyperoptic" element={<HyperopticLondon />} />
            <Route path="/local/tv-broadband" element={<LondonTVBroadband />} />
            <Route path="/local/bt-london" element={<BTLondonBroadband />} />
            <Route path="/local/birmingham" element={<BirminghamBroadband />} />
            <Route path="/local/fibre-broadband-birmingham" element={<FibreBroadbandBirmingham />} />
            <Route path="/local/birmingham-tv-broadband" element={<BirminghamTVBroadband />} />
            <Route path="/local/birmingham-city-centre" element={<BirminghamCityCentreBroadband />} />
            <Route path="/about" element={<About />} />
            <Route path="/sim" element={<SimOnly />} />
            <Route path="/internet-uk" element={<InternetUK />} />
            <Route path="/cstyle" element={<CstylePage />} />
            <Route path="/local/jewellery-quarter" element={<JewelleryQuarterBroadband />} />
            <Route path="/local/digbeth" element={<DigbethBroadband />} />
            <Route path="/local/aston" element={<AstonBroadband />} />
            <Route path="/local/small-heath" element={<SmallHeathBroadband />} />
            <Route path="/manchester" element={<ManchesterBroadband />} />
            <Route path="/manchester/city-centre" element={<ManchesterCityCentreBroadband />} />
            <Route path="/manchester/fibre-manchester" element={<FibreBroadbandManchester />} />
            <Route path="/manchester/manchester-tv" element={<ManchesterTVBroadband />} />
            <Route path="/manchester/didsbury" element={<DidsburyBroadband />} />
            <Route path="/manchester/chorlton" element={<ChorltonBroadband />} />
            <Route path="/manchester/withington" element={<WithingtonBroadband />} />
            <Route path="/manchester/prestwich" element={<PrestwichBroadband />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;