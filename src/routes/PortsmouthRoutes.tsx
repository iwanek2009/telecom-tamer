import { Route } from "react-router-dom";
import PortsmouthBroadband from "@/pages/PortsmouthBroadband";
import FibrePortsmouthBroadband from "@/pages/FibrePortsmouthBroadband";
import PortsmouthHomeBroadband from "@/pages/PortsmouthHomeBroadband";
import SouthseaBroadband from "@/pages/SouthseaBroadband";
import OldPortsmouthBroadband from "@/pages/OldPortsmouthBroadband";

export const PortsmouthRoutes = [
  <Route key="portsmouth" path="/portsmouth" element={<PortsmouthBroadband />} />,
  <Route key="fibre-portsmouth" path="/portsmouth/fibre-broadband" element={<FibrePortsmouthBroadband />} />,
  <Route key="portsmouth-home" path="/portsmouth/home-broadband" element={<PortsmouthHomeBroadband />} />,
  <Route key="southsea" path="/portsmouth/southsea" element={<SouthseaBroadband />} />,
  <Route key="old-portsmouth" path="/portsmouth/old-portsmouth" element={<OldPortsmouthBroadband />} />,
];