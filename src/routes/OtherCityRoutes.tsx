import { Route } from "react-router-dom";
import FibreBroadbandSouthampton from "@/pages/FibreBroadbandSouthampton";
import SouthamptonBroadband from "@/pages/SouthamptonBroadband";
import BroadbandTVSouthampton from "@/pages/BroadbandTVSouthampton";
import LiverpoolBroadband from "@/pages/LiverpoolBroadband";
import FibreBroadbandLiverpool from "@/pages/FibreBroadbandLiverpool";
import AllertonBroadband from "@/pages/AllertonBroadband";

export const OtherCityRoutes = [
  // Southampton Routes
  <Route key="fibre-southampton" path="/local/fibre-broadband-southampton" element={<FibreBroadbandSouthampton />} />,
  <Route key="southampton" path="/local/southampton" element={<SouthamptonBroadband />} />,
  <Route key="southampton-tv" path="/local/southampton-broadband-tv" element={<BroadbandTVSouthampton />} />,
  
  // Liverpool Routes
  <Route key="liverpool" path="/local/liverpool" element={<LiverpoolBroadband />} />,
  <Route key="fibre-liverpool" path="/local/fibre-broadband-liverpool" element={<FibreBroadbandLiverpool />} />,
  <Route key="allerton" path="/local/allerton" element={<AllertonBroadband />} />,
];