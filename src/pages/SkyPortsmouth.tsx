import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Film, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SkyPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband",
      content: "Compare complete entertainment bundles with fast broadband.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Channel Packages",
      content: "Explore Sky TV packages with premium channels.",
      linkText: "View channels",
      linkHref: "#channels"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Sky TV & Broadband Portsmouth | Compare Entertainment Bundles</title>
        <meta 
          name="description" 
          content="Find the best Sky TV and broadband bundles in Portsmouth. Compare complete entertainment packages. Get fast internet with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="Sky TV & Broadband Portsmouth"
        subtitle="Compare complete entertainment packages from Sky. Find the perfect TV and broadband bundle for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Sky TV and broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Sky?"
          subtitle="Get the ultimate entertainment package"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Broadband"
            description="Reliable superfast internet"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Premium TV"
            description="Extensive channel selection"
          />
          <CitystyleFeatureCard
            icon={Film}
            title="Entertainment"
            description="Movies, sports and more"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Streaming"
            description="Sky Go included"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SkyPortsmouth;