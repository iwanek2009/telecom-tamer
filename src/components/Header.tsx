import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

// Define the route structure
const routeStructure = {
  '/': { label: 'Home', subpages: [] },
  '/mobile': { label: 'Mobile', subpages: [] },
  '/broadband': {
    label: 'Broadband',
    subpages: [
      { path: '/broadband/fibre-broadband', label: 'Fibre Broadband' },
      { path: '/broadband/cheap-broadband-deals', label: 'Cheap Broadband Deals' },
      { path: '/broadband/100mbps', label: '100Mbps Broadband' },
      { path: '/broadband/home-phone', label: 'Broadband & Home Phone' },
      { path: '/broadband/ultrafast', label: 'Ultrafast Broadband' }
    ]
  },
  '/sim': { label: 'Sim Only', subpages: [] }
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (path: string) => {
    setOpenSubmenu(openSubmenu === path ? null : path);
  };

  const isSubpage = useMemo(() => {
    return Object.entries(routeStructure).some(([parentPath, { subpages }]) =>
      subpages.some(subpage => subpage.path === location.pathname)
    );
  }, [location.pathname]);

  const renderMenuItem = (path: string, { label, subpages }: typeof routeStructure[keyof typeof routeStructure], isMobile = false) => {
    const hasSubpages = subpages.length > 0;
    const isActive = location.pathname === path || 
      (hasSubpages && subpages.some(subpage => subpage.path === location.pathname));

    return (
      <div key={path} className="relative">
        {hasSubpages ? (
          <button
            onClick={() => toggleSubmenu(path)}
            className={`flex items-center gap-1 ${
              isMobile ? 'w-full text-left' : ''
            } text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb] ${
              isActive ? 'bg-[#eafafb] text-primary' : ''
            }`}
          >
            {label}
            <ChevronDown
              size={16}
              className={`transition-transform ${openSubmenu === path ? 'rotate-180' : ''}`}
            />
          </button>
        ) : (
          <Link
            to={path}
            className={`block text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb] ${
              isActive ? 'bg-[#eafafb] text-primary' : ''
            }`}
            onClick={() => isMobile && setIsMenuOpen(false)}
          >
            {label}
          </Link>
        )}

        {hasSubpages && openSubmenu === path && (
          <div className={`${
            isMobile ? 'pl-4' : 'absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px]'
          }`}>
            {subpages.map(subpage => (
              <Link
                key={subpage.path}
                to={subpage.path}
                className={`block text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb] ${
                  location.pathname === subpage.path ? 'bg-[#eafafb] text-primary' : ''
                }`}
                onClick={() => {
                  if (isMobile) {
                    setIsMenuOpen(false);
                    setOpenSubmenu(null);
                  }
                }}
              >
                {subpage.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/d27943bf-1331-495e-8ff8-7f5573c370ad.png" 
              alt="Smartfony Logo" 
              className="h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {Object.entries(routeStructure).map(([path, config]) =>
              renderMenuItem(path, config)
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 animate-fade-in">
            <div className="py-4 px-4 space-y-4">
              {Object.entries(routeStructure).map(([path, config]) =>
                renderMenuItem(path, config, true)
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};