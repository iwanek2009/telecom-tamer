import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Palette } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const NorthernQuarterBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Creative District Coverage",
      content: "The Northern Quarter enjoys excellent broadband coverage with speeds up to 1Gbps through major providers, perfect for creative businesses and residents.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business & Home Packages",
      content: "Compare specialized packages designed for creative businesses and urban residents in the Northern Quarter.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Quick Installation",
      content: "Most providers offer priority installation in the Northern Quarter, with some providing next-day setup for eligible addresses.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Northern Quarter Broadband | Compare Creative District Internet</title>
        <meta 
          name="description" 
          content="Find the best broadband in Manchester's Northern Quarter. Compare packages perfect for creative businesses & residents. Get reliable speeds for work & home."
        />
      </Helmet>

      <CitystyleHero
        title="Northern Quarter Broadband Deals"
        subtitle="Find the perfect internet package in Manchester's creative hub. Compare high-speed broadband deals ideal for creative businesses and urban living."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Manchester Northern Quarter with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Northern Quarter Broadband Deals?"
          subtitle="Get the perfect internet package for your Northern Quarter property"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 1Gbps in the Northern Quarter area"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="District Coverage"
            description="Comprehensive network coverage across the creative district"
          />
          <CitystyleFeatureCard
            icon={Palette}
            title="Creative Ready"
            description="Perfect for creative businesses, streaming, and remote work"
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

export default NorthernQuarterBroadband;