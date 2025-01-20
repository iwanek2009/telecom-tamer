import { Route } from "react-router-dom";
import Index from "@/pages/Index";
import Mobile from "@/pages/Mobile";
import Broadband from "@/pages/Broadband";
import About from "@/pages/About";
import SimOnly from "@/pages/SimOnly";
import InternetUK from "@/pages/InternetUK";
import FibreBroadband from "@/pages/FibreBroadband";
import CheapBroadbandDeals from "@/pages/CheapBroadbandDeals";
import Broadband100Mbps from "@/pages/Broadband100Mbps";
import BroadbandHomePhone from "@/pages/BroadbandHomePhone";
import UltrafastBroadband from "@/pages/UltrafastBroadband";
import LocalBroadband from "@/pages/LocalBroadband";
import Blog from "@/pages/Blog";
import BlogPostPage from "@/pages/BlogPostPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SouthamptonBroadband from "@/pages/SouthamptonBroadband";
import FibreBroadbandSouthampton from "@/pages/FibreBroadbandSouthampton";
import BroadbandTVSouthampton from "@/pages/BroadbandTVSouthampton";
import OceanVillageBroadband from "@/pages/OceanVillageBroadband";
import ShirleyBroadband from "@/pages/ShirleyBroadband";
import BitterneBroadband from "@/pages/BitterneBroadband";
import PortswoodBroadband from "@/pages/PortswoodBroadband";
import VirginMediaSouthampton from "@/pages/VirginMediaSouthampton";
import BTBroadbandSouthampton from "@/pages/BTBroadbandSouthampton";
import SkyBroadbandSouthampton from "@/pages/SkyBroadbandSouthampton";
import StudentBroadbandSouthampton from "@/pages/StudentBroadbandSouthampton";
import NoContractBroadbandSouthampton from "@/pages/NoContractBroadbandSouthampton";
import CheapBroadbandSouthampton from "@/pages/CheapBroadbandSouthampton";
import BassettBroadband from "@/pages/BassettBroadband";

export const MainRoutes = [
  <Route key="index" path="/" element={<Index />} />,
  <Route key="mobile" path="/mobile" element={<Mobile />} />,
  <Route key="broadband" path="/broadband" element={<Broadband />} />,
  <Route key="about" path="/about" element={<About />} />,
  <Route key="sim" path="/sim" element={<SimOnly />} />,
  <Route key="internet-uk" path="/internet-uk" element={<InternetUK />} />,
  <Route key="fibre-broadband" path="/broadband/fibre-broadband" element={<FibreBroadband />} />,
  <Route key="cheap-broadband" path="/broadband/cheap-broadband-deals" element={<CheapBroadbandDeals />} />,
  <Route key="100mbps" path="/broadband/100mbps" element={<Broadband100Mbps />} />,
  <Route key="home-phone" path="/broadband/home-phone" element={<BroadbandHomePhone />} />,
  <Route key="ultrafast" path="/broadband/ultrafast" element={<UltrafastBroadband />} />,
  <Route key="local" path="/broadband/local" element={<LocalBroadband />} />,
  <Route key="blog" path="/blog" element={<Blog />} />,
  <Route key="blog-post" path="/blog/post/:id" element={<BlogPostPage />} />,
  <Route key="privacy" path="/privacy" element={<PrivacyPolicy />} />,
  <Route key="southampton" path="/southampton" element={<SouthamptonBroadband />} />,
  <Route key="southampton-fibre" path="/southampton/fibre" element={<FibreBroadbandSouthampton />} />,
  <Route key="southampton-tv" path="/southampton/tv" element={<BroadbandTVSouthampton />} />,
  <Route key="southampton-ocean-village" path="/southampton/ocean-village" element={<OceanVillageBroadband />} />,
  <Route key="southampton-shirley" path="/southampton/shirley" element={<ShirleyBroadband />} />,
  <Route key="southampton-bitterne" path="/southampton/bitterne" element={<BitterneBroadband />} />,
  <Route key="southampton-portswood" path="/southampton/portswood" element={<PortswoodBroadband />} />,
  <Route key="southampton-virgin" path="/southampton/virgin-media" element={<VirginMediaSouthampton />} />,
  <Route key="southampton-bt" path="/southampton/bt" element={<BTBroadbandSouthampton />} />,
  <Route key="southampton-sky" path="/southampton/sky" element={<SkyBroadbandSouthampton />} />,
  <Route key="southampton-student" path="/southampton/student" element={<StudentBroadbandSouthampton />} />,
  <Route key="southampton-no-contract" path="/southampton/no-contract" element={<NoContractBroadbandSouthampton />} />,
  <Route key="southampton-cheap" path="/southampton/cheap" element={<CheapBroadbandSouthampton />} />,
  <Route key="southampton-bassett" path="/southampton/bassett" element={<BassettBroadband />} />,
];