import { Building2, Wifi, PoundSterling, Landmark, MapPin, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const BirminghamCard = () => {
  const sections = [
    {
      title: "Main City Pages",
      items: [
        <Link to="/local/birmingham">Birmingham Broadband Deals | Compare Internet Packages</Link>,
        <Link to="/local/fibre-birmingham">Fibre Broadband Birmingham | Fast Internet Providers</Link>,
        <Link to="/local/birmingham-tv">Birmingham TV & Broadband | Complete Home Packages</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "City Centre",
      items: [
        <Link to="/local/city-centre-birmingham">Birmingham City Centre Broadband | Business District Deals</Link>,
        <Link to="/local/jewellery-quarter">Jewellery Quarter Internet | Creative Quarter Broadband</Link>,
        <Link to="/local/digbeth">Digbeth Broadband Deals | Digital Quarter Internet</Link>
      ],
      icon: <Landmark className="w-5 h-5 text-primary" />
    },
    {
      title: "Inner City Areas",
      items: [
        <Link to="/local/aston">Aston Broadband Packages | Local Internet Deals</Link>,
        <Link to="/local/bordesley">Bordesley Internet Offers | Home Broadband Deals</Link>,
        <Link to="/local/small-heath">Small Heath Broadband | Family Internet Packages</Link>,
        <Link to="/local/ladywood">Ladywood Internet Deals | Compare Local Providers</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Residential Areas",
      items: [
        <Link to="/local/moseley">Moseley Broadband | Residential Internet Packages</Link>,
        <Link to="/local/edgbaston">Edgbaston Internet Deals | Premium Broadband Services</Link>,
        <Link to="/local/harborne">Harborne Broadband Offers | Home Internet Solutions</Link>,
        <Link to="/local/kings-heath">Kings Heath Internet | Family Broadband Packages</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Student Areas",
      items: [
        <Link to="/local/selly-oak">Selly Oak Broadband | Student Internet Deals</Link>,
        <Link to="/local/erdington">Erdington Internet Packages | Student Accommodation Deals</Link>,
        <Link to="/local/perry-barr">Perry Barr Broadband | University Area Internet</Link>
      ],
      icon: <Network className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Providers",
      items: [
        "Virgin Media Birmingham | Latest Local Offers",
        "BT Birmingham Deals | Fibre Broadband Packages",
        "Hyperoptic Birmingham | Full Fibre Internet",
        "CityFibre Birmingham | Pure Fibre Broadband"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Birmingham Broadband
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

export default BirminghamCard;