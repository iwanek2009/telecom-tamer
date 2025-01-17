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
import LondonTVBroadband from "@/pages/LondonTVBroadband";
import BTLondonBroadband from "@/pages/BTLondonBroadband";

export const londonRoutes = [
  { path: "/local/london", element: <LondonBroadband /> },
  { path: "/local/fibre-broadband-london", element: <FibreBroadbandLondon /> },
  { path: "/local/south-london", element: <SouthLondonBroadband /> },
  { path: "/local/north-london", element: <NorthLondonBroadband /> },
  { path: "/local/brixton", element: <BrixtonBroadband /> },
  { path: "/local/greenwich", element: <GreenwichBroadband /> },
  { path: "/local/croydon", element: <CroydonBroadband /> },
  { path: "/local/central-london", element: <CentralLondonBroadband /> },
  { path: "/local/zone1-london", element: <Zone1LondonBroadband /> },
  { path: "/local/west-end", element: <WestEndBroadband /> },
  { path: "/local/student-london", element: <StudentBroadbandLondon /> },
  { path: "/local/business-london", element: <BusinessBroadbandLondon /> },
  { path: "/local/gaming-london", element: <GamingBroadbandLondon /> },
  { path: "/local/wfh-london", element: <WorkFromHomeLondon /> },
  { path: "/local/islington", element: <IslingtonBroadband /> },
  { path: "/local/camden", element: <CamdenBroadband /> },
  { path: "/local/finsbury-park", element: <FinsburyParkBroadband /> },
  { path: "/local/community-fibre", element: <CommunityFibreLondon /> },
  { path: "/local/virgin-media", element: <VirginMediaLondon /> },
  { path: "/local/g-network", element: <GNetworkLondon /> },
  { path: "/local/tv-broadband", element: <LondonTVBroadband /> },
  { path: "/local/bt-london", element: <BTLondonBroadband /> },
];