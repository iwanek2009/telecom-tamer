import { Link } from 'react-router-dom';

const SouthamptonDealsGrid = () => {
  const sections = [
    {
      title: "Popular Deals",
      items: [
        { text: "Southampton Broadband Deals", link: "/southampton" },
        { text: "Fibre Broadband Southampton", link: "/southampton/fibre" },
        { text: "Broadband & TV Deals Southampton", link: "/southampton/tv" }
      ]
    },
    {
      title: "Local Areas",
      items: [
        { text: "Ocean Village Broadband", link: "/southampton/ocean-village" },
        { text: "Shirley Internet Deals", link: "/southampton/shirley" },
        { text: "Bitterne Broadband Packages", link: "/southampton/bitterne" },
        { text: "Portswood Internet Deals", link: "/southampton/portswood" },
        { text: "Bassett Broadband Deals", link: "/southampton/bassett" }
      ]
    },
    {
      title: "Major Providers",
      items: [
        { text: "Virgin Media Broadband Southampton", link: "/southampton/virgin-media" },
        { text: "BT Broadband Southampton", link: "/southampton/bt" },
        { text: "Sky Broadband Southampton", link: "/southampton/sky" }
      ]
    },
    {
      title: "Special Offers",
      items: [
        { text: "Student Broadband Deals Southampton", link: "/southampton/student" },
        { text: "No Contract Broadband Southampton", link: "/southampton/no-contract" },
        { text: "Cheap Broadband Southampton", link: "/southampton/cheap" }
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
      {sections.map((section, index) => (
        <div 
          key={index}
          className="bg-gradient-to-br from-[#F8F9FF] to-[#FFFFFF] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
          <ul className="space-y-3">
            {section.items.map((item, itemIndex) => (
              <li 
                key={itemIndex}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors duration-200"
              >
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <Link 
                  to={item.link}
                  className="hover:underline"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SouthamptonDealsGrid;