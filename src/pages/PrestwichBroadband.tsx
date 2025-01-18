import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PrestwichBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Home Packages",
      content: "Explore broadband packages designed for homes in Prestwich, with options for every household need.",
      linkText: "View home deals",
      linkHref: "#home-deals"
    },
    {
      title: "Local Coverage",
      content: "Check availability and compare deals from major providers serving the Prestwich area.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Installation",
      content: "Quick and professional installation available, with most providers offering setup within 2 weeks.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Prestwich Internet | Compare Home Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Prestwich. Find home internet packages from top providers. Get fast, reliable connection for your household needs."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Prestwich"
        subtitle="Find the perfect home internet package in Prestwich. Compare deals from leading providers for reliable broadband."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Prestwich area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Prestwich Broadband Deals?"
          subtitle="Get the perfect internet package for your Prestwich home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Reliable connections for streaming and working from home"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Friendly"
            description="Packages designed for residential properties"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="Local Service"
            description="Dedicated coverage across Prestwich area"
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

export default PrestwichBroadband;