import FibreBroadbandSouthampton from "@/pages/FibreBroadbandSouthampton";
import SouthamptonBroadband from "@/pages/SouthamptonBroadband";
import BroadbandTVSouthampton from "@/pages/BroadbandTVSouthampton";
import LiverpoolBroadband from "@/pages/LiverpoolBroadband";
import FibreBroadbandLiverpool from "@/pages/FibreBroadbandLiverpool";
import AllertonBroadband from "@/pages/AllertonBroadband";
import JewelleryQuarterBroadband from "@/pages/JewelleryQuarterBroadband";
import DigbethBroadband from "@/pages/DigbethBroadband";

export const localRoutes = [
  { path: "/local/fibre-broadband-southampton", element: <FibreBroadbandSouthampton /> },
  { path: "/local/southampton", element: <SouthamptonBroadband /> },
  { path: "/local/southampton-broadband-tv", element: <BroadbandTVSouthampton /> },
  { path: "/local/liverpool", element: <LiverpoolBroadband /> },
  { path: "/local/fibre-broadband-liverpool", element: <FibreBroadbandLiverpool /> },
  { path: "/local/allerton", element: <AllertonBroadband /> },
  { path: "/local/jewellery-quarter", element: <JewelleryQuarterBroadband /> },
  { path: "/local/digbeth", element: <DigbethBroadband /> },
];