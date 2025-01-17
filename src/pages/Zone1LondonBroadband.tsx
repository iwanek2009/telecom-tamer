import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { WifiHigh, MapPin, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const Zone1LondonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Premium Coverage",
      content: "Zone 1 London benefits from extensive full-fibre coverage with speeds up to 1Gbps through providers like Virgin Media, BT, Hyperoptic and Community Fibre.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "City-Centre Providers",
      content: "Compare deals from major providers and specialist city-centre ISPs offering tailored packages for Zone 1 properties.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Rapid Installation",
      content: "Many providers offer priority installation in Zone 1, with some providing same-day or next-day setup for eligible addresses.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Zone 1 London Broadband | Compare Fast Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in London Zone 1. Find ultra-fast internet packages from leading providers. Perfect for city apartments & busy households."
        />
      </Helmet>

      <CitystyleHero
        title="Zone 1 London Broadband Deals"
        subtitle="Find the fastest internet packages from leading providers in London Zone 1. Get reliable connections perfect for city living and modern workspaces."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="London Zone 1 cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Zone 1 London Broadband Deals?"
          subtitle="Get the perfect internet package for your Zone 1 London property"
        >
          <CitystyleFeatureCard
            icon={WifiHigh}
            title="Premium Speeds"
            description="Access ultra-fast internet with speeds up to 1Gbps in Zone 1 areas"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="Central Coverage"
            description="Comprehensive network coverage across all Zone 1 districts"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Apartment-Ready"
            description="Tailored solutions for city apartments and modern developments"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default Zone1LondonBroadband;