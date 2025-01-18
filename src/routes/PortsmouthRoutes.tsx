import { Route } from "react-router-dom";
import PortsmouthBroadband from "@/pages/PortsmouthBroadband";
import FibrePortsmouthBroadband from "@/pages/FibrePortsmouthBroadband";
import PortsmouthHomeBroadband from "@/pages/PortsmouthHomeBroadband";
import SouthseaBroadband from "@/pages/SouthseaBroadband";
import OldPortsmouthBroadband from "@/pages/OldPortsmouthBroadband";
import UniversityPortsmouthBroadband from "@/pages/UniversityPortsmouthBroadband";
import HistoricDockyardBroadband from "@/pages/HistoricDockyardBroadband";
import GunwharfQuaysBroadband from "@/pages/GunwharfQuaysBroadband";
import PortsmouthCityCentreBroadband from "@/pages/PortsmouthCityCentreBroadband";
import StudentBroadbandPortsmouth from "@/pages/StudentBroadbandPortsmouth";
import NavalBasePortsmouth from "@/pages/NavalBasePortsmouth";
import PortsmouthBusinessBroadband from "@/pages/PortsmouthBusinessBroadband";
import CoastalAreaPortsmouth from "@/pages/CoastalAreaPortsmouth";
import VirginMediaPortsmouth from "@/pages/VirginMediaPortsmouth";
import BTPortsmouth from "@/pages/BTPortsmouth";
import SkyPortsmouth from "@/pages/SkyPortsmouth";
import ToobPortsmouth from "@/pages/ToobPortsmouth";

export const PortsmouthRoutes = [
  <Route key="portsmouth" path="/portsmouth" element={<PortsmouthBroadband />} />,
  <Route key="fibre-portsmouth" path="/portsmouth/fibre-broadband" element={<FibrePortsmouthBroadband />} />,
  <Route key="portsmouth-home" path="/portsmouth/home-broadband" element={<PortsmouthHomeBroadband />} />,
  <Route key="southsea" path="/portsmouth/southsea" element={<SouthseaBroadband />} />,
  <Route key="old-portsmouth" path="/portsmouth/old-portsmouth" element={<OldPortsmouthBroadband />} />,
  <Route key="university" path="/portsmouth/university" element={<UniversityPortsmouthBroadband />} />,
  <Route key="historic-dockyard" path="/portsmouth/historic-dockyard" element={<HistoricDockyardBroadband />} />,
  <Route key="gunwharf-quays" path="/portsmouth/gunwharf-quays" element={<GunwharfQuaysBroadband />} />,
  <Route key="city-centre" path="/portsmouth/city-centre" element={<PortsmouthCityCentreBroadband />} />,
  <Route key="student" path="/portsmouth/student" element={<StudentBroadbandPortsmouth />} />,
  <Route key="naval-base" path="/portsmouth/naval-base" element={<NavalBasePortsmouth />} />,
  <Route key="business" path="/portsmouth/business" element={<PortsmouthBusinessBroadband />} />,
  <Route key="coastal" path="/portsmouth/coastal" element={<CoastalAreaPortsmouth />} />,
  <Route key="virgin-media" path="/portsmouth/virgin-media" element={<VirginMediaPortsmouth />} />,
  <Route key="bt" path="/portsmouth/bt" element={<BTPortsmouth />} />,
  <Route key="sky" path="/portsmouth/sky" element={<SkyPortsmouth />} />,
  <Route key="toob" path="/portsmouth/toob" element={<ToobPortsmouth />} />,
];