import { Route } from "react-router-dom";
import LiverpoolBroadband from "@/pages/LiverpoolBroadband";
import FibreBroadbandLiverpool from "@/pages/FibreBroadbandLiverpool";
import AllertonBroadband from "@/pages/AllertonBroadband";

export const OtherCityRoutes = [
  // Liverpool Routes
  <Route key="liverpool" path="/local/liverpool" element={<LiverpoolBroadband />} />,
  <Route key="fibre-liverpool" path="/local/fibre-broadband-liverpool" element={<FibreBroadbandLiverpool />} />,
  <Route key="allerton" path="/local/allerton" element={<AllertonBroadband />} />,
];