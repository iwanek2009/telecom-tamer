import { Building2, Wifi, PoundSterling, Landmark, MapPin, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const LondonCard = () => {
  const sections = [
    {
      title: "Main City Coverage",
      items: [
        <Link to="/local/london">London Broadband Deals | Compare Internet Packages 2024</Link>,
        <Link to="/local/fibre-london">Fibre Broadband London | Ultra-Fast Internet Providers</Link>,
        <Link to="/local/london-tv">London TV & Broadband Bundles | Best Entertainment Packages</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "Central London",
      items: [
        <Link to="/local/central-london">Central London Broadband | City Internet Providers</Link>,
        <Link to="/local/zone1-london">Zone 1 London Broadband Deals | Compare Fast Internet</Link>,
        <Link to="/local/west-end">West End Broadband Packages | Entertainment District Deals</Link>
      ],
      icon: <Landmark className="w-5 h-5 text-primary" />
    },
    {
      title: "North London",
      items: [
        <Link to="/local/north-london">North London Broadband | Compare Local Providers</Link>,
        <Link to="/local/islington">Islington Internet Deals | Broadband Packages</Link>,
        <Link to="/local/camden">Camden Broadband Offers | Fast Internet Deals</Link>,
        <Link to="/local/finsbury-park">Finsbury Park Internet | Local Broadband Providers</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "South London",
      items: [
        <Link to="/local/south-london">South London Broadband | Best Internet Packages</Link>,
        <Link to="/local/brixton">Brixton Internet Deals | Compare Local Providers</Link>,
        <Link to="/local/greenwich">Greenwich Broadband | Fast Fibre Packages</Link>,
        <Link to="/local/croydon">Croydon Internet Offers | Home Broadband Deals</Link>
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Specialized Packages",
      items: [
        <Link to="/local/student-london">Student Broadband London | University Area Deals</Link>,
        <Link to="/local/business-london">Business Broadband London | Commercial Internet Solutions</Link>,
        <Link to="/local/gaming-london">London Gaming Broadband | Low Latency Internet</Link>,
        <Link to="/local/wfh-london">Work From Home London | Remote Working Internet</Link>
      ],
      icon: <Network className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Providers",
      items: [
        "Community Fibre London | Local Network Deals",
        "Hyperoptic London | Full Fibre Packages",
        "Virgin Media London | Cable Internet Offers",
        "BT London Broadband | Fibre Internet Deals",
        "G.Network London | Pure Fibre Broadband"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            London Broadband
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

export default LondonCard;