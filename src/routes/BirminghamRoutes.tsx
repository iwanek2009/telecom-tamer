import { Route } from "react-router-dom";
import BirminghamBroadband from "@/pages/BirminghamBroadband";
import FibreBroadbandBirmingham from "@/pages/FibreBroadbandBirmingham";
import BirminghamTVBroadband from "@/pages/BirminghamTVBroadband";
import BirminghamCityCentreBroadband from "@/pages/BirminghamCityCentreBroadband";
import JewelleryQuarterBroadband from "@/pages/JewelleryQuarterBroadband";
import DigbethBroadband from "@/pages/DigbethBroadband";
import AstonBroadband from "@/pages/AstonBroadband";

export const BirminghamRoutes = [
  <Route key="birmingham" path="/local/birmingham" element={<BirminghamBroadband />} />,
  <Route key="fibre-birmingham" path="/local/fibre-broadband-birmingham" element={<FibreBroadbandBirmingham />} />,
  <Route key="birmingham-tv" path="/local/birmingham-tv-broadband" element={<BirminghamTVBroadband />} />,
  <Route key="birmingham-city-centre" path="/local/birmingham-city-centre" element={<BirminghamCityCentreBroadband />} />,
  <Route key="jewellery-quarter" path="/local/jewellery-quarter" element={<JewelleryQuarterBroadband />} />,
  <Route key="digbeth" path="/local/digbeth" element={<DigbethBroadband />} />,
  <Route key="aston" path="/local/aston" element={<AstonBroadband />} />,
];