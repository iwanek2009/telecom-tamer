import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, MapPin, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const MiltonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Milton has excellent broadband coverage with multiple providers offering fast connections.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers serving the Milton area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Milton Internet | Compare Portsmouth Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Milton, Portsmouth. Find local packages from top providers. Get reliable internet perfect for streaming, gaming & working."
        />
      </Helmet>

      <CitystyleHero
        title="Internet Deals in Milton"
        subtitle="Find the perfect internet package for your Milton home. Compare deals from leading providers to get reliable connectivity at great value."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Milton Portsmouth broadband connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Milton Broadband Deals?"
          subtitle="Get the ideal internet package for your Milton location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in eligible areas"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="Local Coverage"
            description="Extensive network coverage across Milton"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default MiltonBroadband;