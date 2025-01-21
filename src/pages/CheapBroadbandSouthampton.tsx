import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Bolt } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import SouthamptonDealsGrid from '@/components/local/SouthamptonDealsGrid';

const CheapBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Save on Monthly Bills",
      content: "Find the most affordable broadband deals in Southampton without compromising on speed.",
      linkText: "View deals",
      linkHref: "#deals"
    },
    {
      title: "Compare Providers",
      content: "Compare prices and packages from major providers to find the best value.",
      linkText: "Start comparing",
      linkHref: "#compare"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Cheap Broadband Southampton | Compare Affordable Internet Deals</title>
        <meta 
          name="description" 
          content="Find the best cheap broadband deals in Southampton. Compare affordable internet packages and save on your monthly bills without compromising on speed."
        />
      </Helmet>

      <CitystyleHero
        title="Cheap Broadband Deals Southampton"
        subtitle="Find affordable internet packages without compromising on speed"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Affordable broadband deals in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Cheap Broadband Deals in Southampton: Save Money Without Sacrificing Speed"
          subtitle="Find affordable, high-speed broadband in Southampton! Compare deals, check postcode availability, and switch to save."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Budget-Friendly Plans"
            description="Deals from £16/month with no hidden fees"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Full Fibre Speeds"
            description="Stream, work, and game smoothly with 50–500Mbps"
          />
          <CitystyleFeatureCard
            icon={Bolt}
            title="Flexible Contracts"
            description="Choose 12-month deals or rolling monthly plans"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <SouthamptonDealsGrid />
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default CheapBroadbandSouthampton;