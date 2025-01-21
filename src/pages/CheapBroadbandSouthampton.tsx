import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Users, Bolt } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const CheapBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Budget-Friendly Options",
      content: "Find affordable broadband packages without compromising on quality.",
      linkText: "View deals",
      linkHref: "#deals"
    },
    {
      title: "Value Packages",
      content: "Compare the best value broadband deals in Southampton.",
      linkText: "Compare now",
      linkHref: "#compare"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Cheap Broadband Southampton | Budget Internet Deals</title>
        <meta 
          name="description" 
          content="Find affordable broadband deals in Southampton. Compare budget-friendly internet packages without compromising on speed or reliability."
        />
      </Helmet>

      <CitystyleHero
        title="Cheap Broadband Southampton"
        subtitle="Affordable internet packages that don't compromise on quality"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Affordable broadband options in Southampton"
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
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default CheapBroadbandSouthampton;