import { Building2, Wifi, MapPin, Signal, House, University } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiverpoolCard = () => {
  const sections = [
    {
      title: "Main City Pages",
      items: [
        <Link to="/local/liverpool">Liverpool Broadband Deals | Compare Internet Packages</Link>,
        <Link to="/local/fibre-liverpool">Fibre Broadband Liverpool | Fast Internet Providers</Link>,
        <Link to="/local/liverpool-tv">Liverpool TV & Internet | Complete Home Packages</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "City Centre",
      items: [
        <Link to="/local/city-centre-liverpool">Liverpool City Centre Broadband | Urban Internet Deals</Link>,
        <Link to="/local/liverpool-one">Liverpool ONE Area Broadband | Shopping District Internet</Link>,
        <Link to="/local/albert-dock">Albert Dock Internet | Waterfront Broadband Packages</Link>,
        <Link to="/local/baltic-triangle">Baltic Triangle Broadband | Creative Quarter Internet</Link>
      ],
      icon: <House className="w-5 h-5 text-primary" />
    },
    {
      title: "Student Areas",
      items: [
        <Link to="/local/university-district">University District Broadband | Student Internet Deals</Link>,
        <Link to="/local/edge-hill">Edge Hill Internet Packages | Student Area Broadband</Link>,
        <Link to="/local/kensington">Kensington Broadband | Student Housing Internet</Link>,
        <Link to="/local/hope-campus">Hope Campus Internet | Student Accommodation Deals</Link>
      ],
      icon: <University className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Residential Areas",
      items: [
        <Link to="/local/allerton">Allerton Broadband | Home Internet Packages</Link>,
        <Link to="/local/mossley-hill">Mossley Hill Internet | Family Broadband Deals</Link>,
        <Link to="/local/childwall">Childwall Broadband | Residential Internet Solutions</Link>,
        <Link to="/local/woolton">Woolton Internet Packages | Local Broadband Offers</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Greater Liverpool Areas",
      items: [
        <Link to="/local/wirral">Wirral Broadband | Peninsula Internet Deals</Link>,
        <Link to="/local/bootle">Bootle Internet Packages | Local Broadband Offers</Link>,
        <Link to="/local/crosby">Crosby Broadband | Coastal Area Internet</Link>,
        <Link to="/local/kirkby">Kirkby Internet Deals | Merseyside Broadband</Link>
      ],
      icon: <Signal className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Providers",
      items: [
        "Virgin Media Liverpool | Cable Internet Deals",
        "BT Liverpool | Fibre Broadband Packages",
        "Hyperoptic Liverpool | Full Fibre Internet",
        "CityFibre Liverpool | Pure Fibre Broadband"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Liverpool Broadband
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
                    {typeof item === 'string' ? item : item}
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

export default LiverpoolCard;