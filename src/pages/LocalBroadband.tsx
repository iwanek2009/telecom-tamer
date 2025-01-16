import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import SouthamptonCard from '@/components/local/SouthamptonCard';
import PortsmouthCard from '@/components/local/PortsmouthCard';
import LondonCard from '@/components/local/LondonCard';
import BirminghamCard from '@/components/local/BirminghamCard';
import ManchesterCard from '@/components/local/ManchesterCard';
import { Helmet } from 'react-helmet';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from 'react';

const heroAccordionItems = [
  {
    title: "Why compare local broadband deals?",
    content: "Different providers offer varying speeds and packages depending on your location. Local comparison ensures you get the best deal available in your area.",
  },
  {
    title: "How to check availability?",
    content: "Enter your postcode to see which providers and packages are available at your address. We'll show you the best local deals and speeds.",
  },
  {
    title: "What affects local broadband availability?",
    content: "Infrastructure, distance from the exchange, and local competition all affect broadband availability and speeds in your area.",
  }
];

const LocalBroadband = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterContent = (content: JSX.Element) => {
    const contentText = content.type.name.toLowerCase();
    return contentText.includes(searchQuery.toLowerCase());
  };

  const cityCards = [
    <LondonCard key="london" />,
    <BirminghamCard key="birmingham" />,
    <ManchesterCard key="manchester" />,
    <SouthamptonCard key="southampton" />,
    <PortsmouthCard key="portsmouth" />
  ];

  const filteredCards = cityCards.filter(filterContent);

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Compare Local Broadband Deals | UK Cities Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in your city. Compare local internet providers, speeds and prices across major UK cities. Get exclusive regional offers and packages."
        />
      </Helmet>

      <BStyleHero
        title="Local Broadband Deals in Major UK Cities"
        subtitle="Find and compare the best broadband deals available in your area"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="City broadband comparison"
        accordionItems={heroAccordionItems}
      />

      <div className="container mx-auto px-4 -mt-12 relative z-10 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm border border-gray-100">
          <div className="flex items-center gap-4 bg-gray-50 rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <Input
              type="text"
              placeholder="Search for a city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      <BStyleContent>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="flex flex-col gap-8">
              {filteredCards}
            </div>
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default LocalBroadband;