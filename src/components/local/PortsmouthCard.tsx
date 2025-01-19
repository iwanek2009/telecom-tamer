import { Building2, Wifi, PoundSterling, Landmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortsmouthCard = () => {
  const sections = [
    {
      title: "City-Wide Coverage",
      items: [
        <Link to="/portsmouth">Portsmouth Broadband Deals | Compare Local Internet Providers</Link>,
        <Link to="/portsmouth/fibre-broadband">Fibre Broadband Portsmouth | Fast Internet Packages</Link>,
        <Link to="/portsmouth/home-broadband">Portsmouth Home Broadband | TV & Phone Bundles</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Areas",
      items: [
        <Link to="/portsmouth/southsea">Southsea Broadband Deals | Local Internet Packages</Link>,
        <Link to="/portsmouth/old-portsmouth">Old Portsmouth Internet Offers | Compare Broadband Deals</Link>,
        <Link to="/portsmouth/city-centre">Portsmouth City Centre | Urban Internet Packages</Link>,
        <Link to="/portsmouth/gunwharf-quays">Gunwharf Quays Broadband | Shopping District Internet</Link>,
        <Link to="/portsmouth/historic-dockyard">Historic Dockyard Broadband | Maritime Area Internet</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Specialized Services",
      items: [
        <Link to="/portsmouth/student">Student Broadband Portsmouth | University Area Deals</Link>,
        <Link to="/portsmouth/naval-base">Naval Base Portsmouth | Service Personnel Internet</Link>,
        <Link to="/portsmouth/business">Portsmouth Business Broadband | Commercial Internet</Link>,
        <Link to="/portsmouth/coastal">Coastal Area Portsmouth | Seaside Internet Packages</Link>
      ],
      icon: <Landmark className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Providers",
      items: [
        <Link to="/portsmouth/virgin-media">Virgin Media Portsmouth | Latest Local Deals</Link>,
        <Link to="/portsmouth/bt">BT Broadband Portsmouth | Home Internet Packages</Link>,
        <Link to="/portsmouth/sky">Sky TV & Broadband Portsmouth | Entertainment Bundles</Link>,
        "Toob Portsmouth | Full Fibre Internet Deals"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    },
    {
      title: "Featured Locations",
      items: [
        <Link to="/portsmouth/university">University of Portsmouth | Student Accommodation Internet</Link>,
        <Link to="/portsmouth/historic-dockyard">Portsmouth Historic Dockyard | Maritime Area Broadband</Link>,
        <Link to="/portsmouth/gunwharf-quays">Gunwharf Quays | Shopping District Internet</Link>,
        <Link to="/portsmouth/city-centre">City Centre Broadband | Urban Internet Solutions</Link>
      ],
      icon: <PoundSterling className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Portsmouth Broadband
          </h2>
        </div>
        
        <div className="lg:w-3/4 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
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
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortsmouthCard;