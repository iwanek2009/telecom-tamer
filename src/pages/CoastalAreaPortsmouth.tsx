import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, MapPin, Building, Waves } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const CoastalAreaPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Check broadband availability in your coastal area.",
      linkText: "Check coverage",
      linkHref: "#coverage"
    },
    {
      title: "Best Deals",
      content: "Compare the latest offers from local providers.",
      linkText: "View deals",
      linkHref: "#deals"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Coastal Area Portsmouth | Compare Local Internet Providers</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Portsmouth's coastal areas. Find reliable packages from leading providers. Get fast internet perfect for seaside living."
        />
      </Helmet>

      <CitystyleHero
        title="Coastal Area Portsmouth Broadband"
        subtitle="Find the perfect broadband package for coastal living. Compare reliable deals from leading providers in Portsmouth's seaside areas."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth coastal area broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Coastal Connectivity"
          subtitle="Internet solutions for seaside locations"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Reliable coastal connections"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="Local Coverage"
            description="Serving all coastal areas"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Home Ready"
            description="Perfect for coastal properties"
          />
          <CitystyleFeatureCard
            icon={Waves}
            title="Weather Ready"
            description="Built for coastal conditions"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default CoastalAreaPortsmouth;