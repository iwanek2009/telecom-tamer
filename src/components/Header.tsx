import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                src="/lovable-uploads/d27943bf-1331-495e-8ff8-7f5573c370ad.png"
                alt="Smartfony Logo"
                className="h-8"
              />
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link to="/broadband" className="text-gray-700 hover:text-gray-900">Broadband</Link>
              <Link to="/mobile" className="text-gray-700 hover:text-gray-900">Mobile</Link>
              <Link to="/sim" className="text-gray-700 hover:text-gray-900">Sim Only</Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};