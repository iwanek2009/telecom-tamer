import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import SouthamptonCard from '@/components/local/SouthamptonCard';
import PortsmouthCard from '@/components/local/PortsmouthCard';
import LondonCard from '@/components/local/LondonCard';
import BirminghamCard from '@/components/local/BirminghamCard';
import ManchesterCard from '@/components/local/ManchesterCard';
import LiverpoolCard from '@/components/local/LiverpoolCard';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

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

  const cards = [
    { 
      component: LondonCard, 
      title: 'London',
      topics: [
        'Central London', 'North London', 'South London', 'Student Broadband',
        'Business Broadband', 'Gaming Broadband', 'Work From Home',
        'Virgin Media', 'Hyperoptic', 'BT', 'G.Network'
      ]
    },
    { 
      component: BirminghamCard, 
      title: 'Birmingham',
      topics: [
        'City Centre', 'Jewellery Quarter', 'Digbeth', 'Aston',
        'Moseley', 'Edgbaston', 'Harborne', 'Kings Heath',
        'Selly Oak', 'Erdington', 'Perry Barr',
        'Virgin Media', 'BT', 'Hyperoptic', 'CityFibre'
      ]
    },
    { 
      component: ManchesterCard, 
      title: 'Manchester',
      topics: [
        'City Centre', 'Northern Quarter', 'Deansgate', 'Spinningfields',
        'Fallowfield', 'Oxford Road', 'Rusholme', 'Victoria Park',
        'Didsbury', 'Chorlton', 'Withington', 'Prestwich',
        'Virgin Media', 'BT', 'Hyperoptic', 'CityFibre'
      ]
    },
    {
      component: LiverpoolCard,
      title: 'Liverpool',
      topics: [
        'City Centre', 'Liverpool ONE', 'Albert Dock', 'Baltic Triangle',
        'University District', 'Edge Hill', 'Kensington', 'Hope Campus',
        'Allerton', 'Mossley Hill', 'Childwall', 'Woolton',
        'Wirral', 'Bootle', 'Crosby', 'Kirkby',
        'Virgin Media', 'BT', 'Hyperoptic', 'CityFibre'
      ]
    },
    { 
      component: SouthamptonCard, 
      title: 'Southampton',
      topics: [
        'Ocean Village', 'Bassett', 'Shirley', 'Bitterne',
        'Portswood', 'Virgin Media', 'BT Fibre', 'Sky Broadband',
        'Student Broadband', 'No Contract Broadband'
      ]
    },
    { 
      component: PortsmouthCard, 
      title: 'Portsmouth',
      topics: [
        'Southsea', 'Old Portsmouth', 'North End', 'Fratton',
        'Milton', 'Student Broadband', 'Naval Base', 'Business Broadband',
        'Virgin Media', 'BT', 'Sky', 'Toob'
      ]
    }
  ];

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.topics.some(topic => 
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

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

      <BStyleContent>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search by city or area (e.g. London, Southsea, Student Broadband)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
            
            <div className="flex flex-col gap-8">
              {filteredCards.map((card, index) => {
                const CardComponent = card.component;
                return <CardComponent key={index} />;
              })}
            </div>
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default LocalBroadband;