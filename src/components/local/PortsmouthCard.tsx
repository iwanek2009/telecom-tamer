import { Building2, Wifi, PoundSterling, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortsmouthCard = () => {
  const sections = [
    {
      title: "City-Wide Coverage",
      items: [
        <Link to="/local/portsmouth">Portsmouth Broadband Deals | Compare Local Internet Providers</Link>,
        <Link to="/local/fibre-portsmouth">Fibre Broadband Portsmouth | Fast Internet Packages</Link>,
        <Link to="/local/portsmouth-home">Portsmouth Home Broadband | TV & Phone Bundles</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Areas",
      items: [
        <Link to="/local/southsea">Southsea Broadband Deals | Local Internet Packages</Link>,
        <Link to="/local/old-portsmouth">Old Portsmouth Internet Offers | Compare Broadband Deals</Link>,
        <Link to="/local/north-end">North End Portsmouth Broadband | Home Internet Packages</Link>,
        <Link to="/local/fratton">Fratton Broadband Deals | Compare Local Providers</Link>,
        <Link to="/local/milton">Milton Internet Packages | Portsmouth Broadband Offers</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Specialized Services",
      items: [
        <Link to="/local/student-portsmouth">Student Broadband Portsmouth | University Area Deals</Link>,
        <Link to="/local/naval-base">Naval Base Portsmouth | Broadband For Service Personnel</Link>,
        <Link to="/local/business-portsmouth">Portsmouth Business Broadband | Commercial Internet</Link>,
        <Link to="/local/coastal-portsmouth">Coastal Area Portsmouth | Best Internet Providers</Link>
      ],
      icon: <Landmark className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Providers",
      items: [
        "Virgin Media Portsmouth | Latest Local Deals",
        "BT Broadband Portsmouth | Home Internet Packages",
        "Sky TV & Broadband Portsmouth | Entertainment Bundles",
        "Toob Portsmouth | Full Fibre Internet Deals"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    },
    {
      title: "Featured Locations",
      items: [
        "University of Portsmouth Broadband | Student Accommodation Deals",
        "Portsmouth Historic Dockyard Area | Internet Services",
        "Gunwharf Quays Broadband | Shopping District Internet",
        "Portsmouth City Centre Broadband | Urban Internet Packages"
      ],
      icon: <PoundSterling className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 space-y-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Portsmouth Broadband
      </h2>
      
      <div className="grid gap-8">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-white shadow-sm">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex} 
                  className={`hover:text-primary transition-colors duration-200 ${
                    typeof item === 'string' 
                      ? 'pl-4 border-l-2 border-gray-200' 
                      : 'pl-4 border-l-2 border-primary hover:border-secondary'
                  }`}
                >
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

export default PortsmouthCard;