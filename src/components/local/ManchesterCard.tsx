import { Building2, Wifi, PoundSterling, Landmark, MapPin, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManchesterCard = () => {
  const sections = [
    {
      title: "Main City Pages",
      items: [
        <Link to="/manchester">Manchester Broadband Deals | Compare Internet Packages</Link>,
        <Link to="/manchester/fibre-manchester">Fibre Broadband Manchester | Fast Internet Providers</Link>,
        <Link to="/manchester/manchester-tv">Manchester TV & Internet | Complete Home Bundles</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "City Centre",
      items: [
        <Link to="/local/city-centre-manchester">Manchester City Centre Broadband | Urban Internet Deals</Link>,
        <Link to="/local/northern-quarter">Northern Quarter Broadband | Creative District Internet</Link>,
        <Link to="/local/deansgate">Deansgate Internet Packages | City Living Broadband</Link>,
        <Link to="/local/spinningfields">Spinningfields Broadband | Business District Deals</Link>
      ],
      icon: <Landmark className="w-5 h-5 text-primary" />
    },
    {
      title: "Student Areas",
      items: [
        <Link to="/local/fallowfield">Fallowfield Broadband | Student Internet Packages</Link>,
        <Link to="/local/oxford-road">Oxford Road Corridor Internet | University Area Deals</Link>,
        <Link to="/local/rusholme">Rusholme Broadband | Student Housing Internet</Link>,
        <Link to="/local/victoria-park">Victoria Park Internet | Student Accommodation Deals</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Residential Areas",
      items: [
        <Link to="/manchester/didsbury">Didsbury Broadband | Home Internet Packages</Link>,
        <Link to="/manchester/chorlton">Chorlton Internet | Family Broadband Deals</Link>,
        <Link to="/manchester/withington">Withington Broadband | Residential Internet Solutions</Link>,
        <Link to="/local/prestwich">Prestwich Internet Packages | Home Broadband Deals</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Greater Manchester Areas",
      items: [
        <Link to="/local/salford">Salford Broadband | Media City Internet Deals</Link>,
        <Link to="/local/trafford">Trafford Internet Packages | Local Broadband Offers</Link>,
        <Link to="/local/stockport">Stockport Broadband | Home Internet Solutions</Link>,
        <Link to="/local/bolton">Bolton Internet Deals | Greater Manchester Broadband</Link>
      ],
      icon: <Network className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Providers",
      items: [
        "Virgin Media Manchester | Cable Internet Deals",
        "BT Manchester | Fibre Broadband Packages",
        "Hyperoptic Manchester | Full Fibre Internet",
        "CityFibre Manchester | Pure Fibre Broadband"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Manchester Broadband
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

export default ManchesterCard;