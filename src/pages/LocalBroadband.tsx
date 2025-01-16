import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { CitySection } from '@/components/local/CitySection';
import SouthamptonCard from '@/components/local/SouthamptonCard';
import PortsmouthCard from '@/components/local/PortsmouthCard';
import LondonCard from '@/components/local/LondonCard';
import { Helmet } from 'react-helmet';

const cityData = [
  {
    city: "London",
    providers: ["Virgin Media", "BT", "Sky", "Hyperoptic"],
    averageSpeed: "108 Mbps",
    features: [
      "Full fibre coverage in most areas",
      "Multiple provider options",
      "Student-specific deals available"
    ],
    priceRange: "£20-£60 per month",
    installationTime: "1-2 weeks"
  },
  {
    city: "Manchester",
    providers: ["Virgin Media", "BT", "TalkTalk", "Hyperoptic"],
    averageSpeed: "94 Mbps",
    features: [
      "Growing full fibre network",
      "Competitive pricing",
      "Business district coverage"
    ],
    priceRange: "£18-£55 per month",
    installationTime: "1-2 weeks"
  },
  {
    city: "Birmingham",
    providers: ["Virgin Media", "BT", "Sky", "Vodafone"],
    averageSpeed: "86 Mbps",
    features: [
      "Expanding fibre network",
      "Good suburban coverage",
      "Business packages available"
    ],
    priceRange: "£20-£50 per month",
    installationTime: "1-2 weeks"
  }
];

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
            <div className="flex flex-col gap-8">
              <LondonCard />
              <SouthamptonCard />
              <PortsmouthCard />
            </div>
            {cityData.map((city, index) => (
              <CitySection key={index} {...city} />
            ))}
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default LocalBroadband;