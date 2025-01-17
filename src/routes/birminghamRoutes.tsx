import BirminghamBroadband from "@/pages/BirminghamBroadband";
import FibreBroadbandBirmingham from "@/pages/FibreBroadbandBirmingham";
import BirminghamTVBroadband from "@/pages/BirminghamTVBroadband";
import BirminghamCityCentreBroadband from "@/pages/BirminghamCityCentreBroadband";

export const birminghamRoutes = [
  { path: "/local/birmingham", element: <BirminghamBroadband /> },
  { path: "/local/fibre-broadband-birmingham", element: <FibreBroadbandBirmingham /> },
  { path: "/local/birmingham-tv-broadband", element: <BirminghamTVBroadband /> },
  { path: "/local/birmingham-city-centre", element: <BirminghamCityCentreBroadband /> },
];