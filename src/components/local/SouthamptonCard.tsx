import { Building2, Wifi, PoundSterling } from 'lucide-react';
import { Link } from 'react-router-dom';

const SouthamptonCard = () => {
  const sections = [
    {
      title: "City-Wide Deals",
      items: [
        <Link to="/local/southampton">Southampton Broadband Deals | Compare Internet Providers</Link>,
        <Link to="/local/fibre-broadband-southampton">Fibre Broadband Southampton | Fast Internet Packages</Link>,
        <Link to="/local/southampton-broadband-tv">Broadband & TV Deals Southampton | Best Home Bundles</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Services",
      items: [
        "Virgin Media Broadband Southampton",
        "BT Fibre Southampton",
        "Sky Broadband Southampton"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    },
    {
      title: "Special Offers",
      items: [
        "Student Broadband Deals Southampton",
        "No Contract Broadband Southampton",
        "Cheap Broadband Southampton"
      ],
      icon: <PoundSterling className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Southampton Broadband</h2>
      
      <div className="grid gap-6">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-3">
              {section.icon}
              <h3 className="font-semibold text-gray-800">{section.title}</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="hover:text-primary">
                  {typeof item === 'string' ? item : item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SouthamptonCard;