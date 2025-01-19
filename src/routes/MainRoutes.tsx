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
];