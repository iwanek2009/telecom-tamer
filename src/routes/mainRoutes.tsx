import Index from "@/pages/Index";
import Mobile from "@/pages/Mobile";
import About from "@/pages/About";
import SimOnly from "@/pages/SimOnly";
import InternetUK from "@/pages/InternetUK";
import CstylePage from "@/pages/CstylePage";

export const mainRoutes = [
  { path: "/", element: <Index /> },
  { path: "/mobile", element: <Mobile /> },
  { path: "/about", element: <About /> },
  { path: "/sim", element: <SimOnly /> },
  { path: "/internet-uk", element: <InternetUK /> },
  { path: "/cstyle", element: <CstylePage /> },
];