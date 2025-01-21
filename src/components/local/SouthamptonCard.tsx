import { Building2, Wifi, PoundSterling } from 'lucide-react';
import { Link } from 'react-router-dom';

const SouthamptonCard = () => {
  const sections = [
    {
      title: "City-Wide Deals",
      items: [
        <Link to="/southampton">Southampton Broadband Deals | Compare Internet Providers</Link>,
        <Link to="/southampton/fibre">Fibre Broadband Southampton | Fast Internet Packages</Link>,
        <Link to="/southampton/tv">Broadband & TV Deals Southampton | Best Home Bundles</Link>,
        <Link to="/southampton/ocean-village">Ocean Village Broadband | Compare Internet Providers</Link>,
        <Link to="/southampton/shirley">Shirley Internet Deals | Southampton Broadband Offers</Link>,
        <Link to="/southampton/bitterne">Bitterne Broadband Packages | Compare Local Providers</Link>,
        <Link to="/southampton/portswood">Portswood Internet Deals | Student Broadband Offers</Link>,
        <Link to="/southampton/bassett">Bassett Broadband Deals | Local Internet Packages</Link>
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "Popular Services",
      items: [
        <Link to="/southampton/virgin-media">Virgin Media Broadband Southampton</Link>,
        <Link to="/southampton/bt">BT Broadband Southampton</Link>,
        <Link to="/southampton/sky">Sky Broadband Southampton</Link>
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    },
    {
      title: "Special Offers",
      items: [
        <Link to="/southampton/student">Student Broadband Deals Southampton</Link>,
        <Link to="/southampton/no-contract">No Contract Broadband Southampton</Link>,
        <Link to="/southampton/cheap">Cheap Broadband Southampton</Link>
      ],
      icon: <PoundSterling className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#F0FCFD] to-[#E5F9FA] backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-[#3FC1C9]/20 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Southampton Broadband
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

export default SouthamptonCard;