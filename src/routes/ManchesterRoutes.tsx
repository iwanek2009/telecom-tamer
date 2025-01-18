import { Route } from "react-router-dom";
import ManchesterBroadband from "@/pages/ManchesterBroadband";
import ManchesterCityCentreBroadband from "@/pages/ManchesterCityCentreBroadband";
import FibreBroadbandManchester from "@/pages/FibreBroadbandManchester";
import ManchesterTVBroadband from "@/pages/ManchesterTVBroadband";
import DidsburyBroadband from "@/pages/DidsburyBroadband";
import ChorltonBroadband from "@/pages/ChorltonBroadband";
import WithingtonBroadband from "@/pages/WithingtonBroadband";
import PrestwichBroadband from "@/pages/PrestwichBroadband";
import NorthernQuarterBroadband from "@/pages/NorthernQuarterBroadband";
import DeansgateInternetBroadband from "@/pages/DeansgateInternetBroadband";
import SalfordBroadband from "@/pages/SalfordBroadband";
import TraffordBroadband from "@/pages/TraffordBroadband";
import StockportBroadband from "@/pages/StockportBroadband";
import BoltonBroadband from "@/pages/BoltonBroadband";
import SpinningfieldsBroadband from "@/pages/SpinningfieldsBroadband";
import FallowfieldBroadband from "@/pages/FallowfieldBroadband";
import OxfordRoadBroadband from "@/pages/OxfordRoadBroadband";
import RusholmeBroadband from "@/pages/RusholmeBroadband";
import VictoriaParkBroadband from "@/pages/VictoriaParkBroadband";
import VirginMediaManchester from "@/pages/VirginMediaManchester";
import BTManchester from "@/pages/BTManchester";
import HyperopticManchester from "@/pages/HyperopticManchester";
import CityFibreManchester from "@/pages/CityFibreManchester";

export const ManchesterRoutes = [
  <Route key="manchester" path="/manchester" element={<ManchesterBroadband />} />,
  <Route key="manchester-city-centre" path="/manchester/city-centre" element={<ManchesterCityCentreBroadband />} />,
  <Route key="fibre-manchester" path="/manchester/fibre-manchester" element={<FibreBroadbandManchester />} />,
  <Route key="manchester-tv" path="/manchester/manchester-tv" element={<ManchesterTVBroadband />} />,
  <Route key="didsbury" path="/manchester/didsbury" element={<DidsburyBroadband />} />,
  <Route key="chorlton" path="/manchester/chorlton" element={<ChorltonBroadband />} />,
  <Route key="withington" path="/manchester/withington" element={<WithingtonBroadband />} />,
  <Route key="prestwich" path="/manchester/prestwich" element={<PrestwichBroadband />} />,
  <Route key="northern-quarter" path="/manchester/northern-quarter" element={<NorthernQuarterBroadband />} />,
  <Route key="deansgate" path="/manchester/deansgate" element={<DeansgateInternetBroadband />} />,
  <Route key="salford" path="/local/salford" element={<SalfordBroadband />} />,
  <Route key="trafford" path="/local/trafford" element={<TraffordBroadband />} />,
  <Route key="stockport" path="/local/stockport" element={<StockportBroadband />} />,
  <Route key="bolton" path="/local/bolton" element={<BoltonBroadband />} />,
  <Route key="spinningfields" path="/manchester/spinningfields" element={<SpinningfieldsBroadband />} />,
  <Route key="fallowfield" path="/manchester/fallowfield" element={<FallowfieldBroadband />} />,
  <Route key="oxford-road" path="/manchester/oxford-road" element={<OxfordRoadBroadband />} />,
  <Route key="rusholme" path="/manchester/rusholme" element={<RusholmeBroadband />} />,
  <Route key="victoria-park" path="/manchester/victoria-park" element={<VictoriaParkBroadband />} />,
  <Route key="virgin-media-manchester" path="/manchester/virgin-media" element={<VirginMediaManchester />} />,
  <Route key="bt-manchester" path="/manchester/bt" element={<BTManchester />} />,
  <Route key="hyperoptic-manchester" path="/manchester/hyperoptic" element={<HyperopticManchester />} />,
  <Route key="cityfibre-manchester" path="/manchester/cityfibre" element={<CityFibreManchester />} />,
];