import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Wifi, Tv, GraduationCap, Briefcase, Zap, Home, MapPin } from 'lucide-react';

const SouthamptonCard = () => {
  const categories = [
    {
      title: "City-Wide Deals",
      items: [
        <Link to="/broadband/local">Southampton Broadband Deals | Compare Internet Providers</Link>,
        <Link to="/local/fibre-broadband-southampton">Fibre Broadband Southampton | Fast Internet Packages</Link>,
        "Broadband & TV Deals Southampton | Best Home Bundles"
      ],
      icon: <Building2 className="w-5 h-5 text-primary" />
    },
    {
      title: "Local Areas",
      items: [
        "Ocean Village Broadband | Compare Internet Providers",
        "Bassett Broadband Deals | Local Internet Packages",
        "Shirley Internet Deals | Southampton Broadband Offers",
        "Bitterne Broadband Packages | Compare Local Providers",
        "Portswood Internet Deals | Student Broadband Offers"
      ],
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      title: "Specialized Packages",
      items: [
        "Student Broadband Southampton | University Area Deals",
        "Business Broadband Southampton | Commercial Internet",
        "Full Fibre Southampton | Ultra-Fast Internet Deals",
        "Southampton Family Broadband | TV & Internet Bundles"
      ],
      icon: <GraduationCap className="w-5 h-5 text-primary" />
    },
    {
      title: "Provider Deals",
      items: [
        "Virgin Media Southampton | Latest Local Offers",
        "BT Broadband Southampton | Home Internet Deals",
        "Sky TV & Broadband Southampton | Entertainment Packages",
        "Toob Southampton | Full Fibre Internet Packages"
      ],
      icon: <Wifi className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <Card className="w-full bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-primary" />
          <CardTitle className="text-2xl font-bold text-primary">Southampton Broadband</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center gap-2">
              {category.icon}
              <h3 className="font-semibold text-lg text-primary">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="text-sm text-gray-600 hover:text-primary cursor-pointer transition-colors duration-200 p-2 rounded-md hover:bg-white/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SouthamptonCard;