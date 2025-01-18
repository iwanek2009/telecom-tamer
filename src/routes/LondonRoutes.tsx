import { Route } from "react-router-dom";
import LondonBroadband from "@/pages/LondonBroadband";
import FibreBroadbandLondon from "@/pages/FibreBroadbandLondon";
import SouthLondonBroadband from "@/pages/SouthLondonBroadband";
import NorthLondonBroadband from "@/pages/NorthLondonBroadband";
import BrixtonBroadband from "@/pages/BrixtonBroadband";
import GreenwichBroadband from "@/pages/GreenwichBroadband";
import CroydonBroadband from "@/pages/CroydonBroadband";
import CentralLondonBroadband from "@/pages/CentralLondonBroadband";
import Zone1LondonBroadband from "@/pages/Zone1LondonBroadband";
import WestEndBroadband from "@/pages/WestEndBroadband";
import StudentBroadbandLondon from "@/pages/StudentBroadbandLondon";
import BusinessBroadbandLondon from "@/pages/BusinessBroadbandLondon";
import GamingBroadbandLondon from "@/pages/GamingBroadbandLondon";
import WorkFromHomeLondon from "@/pages/WorkFromHomeLondon";
import IslingtonBroadband from "@/pages/IslingtonBroadband";
import CamdenBroadband from "@/pages/CamdenBroadband";
import FinsburyParkBroadband from "@/pages/FinsburyParkBroadband";
import CommunityFibreLondon from "@/pages/CommunityFibreLondon";
import VirginMediaLondon from "@/pages/VirginMediaLondon";
import GNetworkLondon from "@/pages/GNetworkLondon";
import HyperopticLondon from "@/pages/HyperopticLondon";
import LondonTVBroadband from "@/pages/LondonTVBroadband";
import BTLondonBroadband from "@/pages/BTLondonBroadband";

export const LondonRoutes = [
  <Route key="london" path="/local/london" element={<LondonBroadband />} />,
  <Route key="fibre-london" path="/local/fibre-broadband-london" element={<FibreBroadbandLondon />} />,
  <Route key="south-london" path="/local/south-london" element={<SouthLondonBroadband />} />,
  <Route key="north-london" path="/local/north-london" element={<NorthLondonBroadband />} />,
  <Route key="brixton" path="/local/brixton" element={<BrixtonBroadband />} />,
  <Route key="greenwich" path="/local/greenwich" element={<GreenwichBroadband />} />,
  <Route key="croydon" path="/local/croydon" element={<CroydonBroadband />} />,
  <Route key="central-london" path="/local/central-london" element={<CentralLondonBroadband />} />,
  <Route key="zone1-london" path="/local/zone1-london" element={<Zone1LondonBroadband />} />,
  <Route key="west-end" path="/local/west-end" element={<WestEndBroadband />} />,
  <Route key="student-london" path="/local/student-london" element={<StudentBroadbandLondon />} />,
  <Route key="business-london" path="/local/business-london" element={<BusinessBroadbandLondon />} />,
  <Route key="gaming-london" path="/local/gaming-london" element={<GamingBroadbandLondon />} />,
  <Route key="wfh-london" path="/local/wfh-london" element={<WorkFromHomeLondon />} />,
  <Route key="islington" path="/local/islington" element={<IslingtonBroadband />} />,
  <Route key="camden" path="/local/camden" element={<CamdenBroadband />} />,
  <Route key="finsbury-park" path="/local/finsbury-park" element={<FinsburyParkBroadband />} />,
  <Route key="community-fibre" path="/local/community-fibre" element={<CommunityFibreLondon />} />,
  <Route key="virgin-media-london" path="/local/virgin-media" element={<VirginMediaLondon />} />,
  <Route key="g-network" path="/local/g-network" element={<GNetworkLondon />} />,
  <Route key="hyperoptic-london" path="/local/hyperoptic" element={<HyperopticLondon />} />,
  <Route key="tv-broadband-london" path="/local/tv-broadband" element={<LondonTVBroadband />} />,
  <Route key="bt-london" path="/local/bt-london" element={<BTLondonBroadband />} />,
];