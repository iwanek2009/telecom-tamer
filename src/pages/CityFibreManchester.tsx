import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Network, ArrowUpDown } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const CityFibreManchester = () => {
  const heroAccordionItems = [
    {
      title: "Pure Fibre",
      content: "CityFibre's dedicated full-fibre network across Manchester.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Symmetric Speeds",
      content: "Same upload and download speeds for better performance.",
      linkText: "Learn more",
      linkHref: "#speeds"
    },
    {
      title: "Network Build",
      content: "Expanding network coverage across Manchester areas.",
      linkText: "Coverage info",
      linkHref: "#coverage"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>CityFibre Manchester | Compare Pure Fibre Broadband</title>
        <meta 
          name="description" 
          content="Explore CityFibre pure fibre broadband in Manchester. Compare ultra-fast packages with dedicated fibre connection. Get reliable speeds for your home."
        />
      </Helmet>

      <CitystyleHero
        title="CityFibre Broadband Manchester"
        subtitle="Compare CityFibre's pure fibre broadband packages in Manchester. Get ultra-fast, reliable connectivity with dedicated fibre infrastructure."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="CityFibre broadband coverage in Manchester"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose CityFibre in Manchester?"
          subtitle="Experience next-generation pure fibre broadband"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Pure Fibre"
            description="Dedicated full-fibre infrastructure"
          />
          <CitystyleFeatureCard
            icon={Network}
            title="Coverage"
            description="Expanding network across Manchester"
          />
          <CitystyleFeatureCard
            icon={ArrowUpDown}
            title="Symmetric"
            description="Same upload and download speeds"
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

export default CityFibreManchester;