import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <Link to="/" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb]">
              Home
            </Link>
            <Link to="/mobile" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb]">
              Mobile
            </Link>
            <Link to="/broadband" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb]">
              Broadband
            </Link>
            <Link to="/sim" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md transition-all duration-200 hover:bg-[#eafafb]">
              Sim Only
            </Link>
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
              <Link 
                to="/" 
                className="block text-gray-600 hover:text-primary hover:bg-[#eafafb] px-3 py-2 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/mobile" 
                className="block text-gray-600 hover:text-primary hover:bg-[#eafafb] px-3 py-2 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Mobile
              </Link>
              <Link 
                to="/broadband" 
                className="block text-gray-600 hover:text-primary hover:bg-[#eafafb] px-3 py-2 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Broadband
              </Link>
              <Link 
                to="/sim" 
                className="block text-gray-600 hover:text-primary hover:bg-[#eafafb] px-3 py-2 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sim Only
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};