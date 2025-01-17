import Broadband from "@/pages/Broadband";
import FibreBroadband from "@/pages/FibreBroadband";
import CheapBroadbandDeals from "@/pages/CheapBroadbandDeals";
import Broadband100Mbps from "@/pages/Broadband100Mbps";
import BroadbandHomePhone from "@/pages/BroadbandHomePhone";
import UltrafastBroadband from "@/pages/UltrafastBroadband";
import LocalBroadband from "@/pages/LocalBroadband";

export const broadbandRoutes = [
  { path: "/broadband", element: <Broadband /> },
  { path: "/broadband/fibre-broadband", element: <FibreBroadband /> },
  { path: "/broadband/cheap-broadband-deals", element: <CheapBroadbandDeals /> },
  { path: "/broadband/100mbps", element: <Broadband100Mbps /> },
  { path: "/broadband/home-phone", element: <BroadbandHomePhone /> },
  { path: "/broadband/ultrafast", element: <UltrafastBroadband /> },
  { path: "/broadband/local", element: <LocalBroadband /> },
];