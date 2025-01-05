import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            TeleCompare
          </Link>
          <div className="space-x-6">
            <Link to="/mobile" className="text-gray-600 hover:text-primary transition-colors">
              Mobile
            </Link>
            <Link to="/broadband" className="text-gray-600 hover:text-primary transition-colors">
              Broadband
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};