import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Bolt, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const NoContractBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Flexible Options",
      content: "Choose from monthly rolling contracts with no long-term commitment.",
      linkText: "View options",
      linkHref: "#options"
    },
    {
      title: "Quick Installation",
      content: "Get connected quickly with minimal setup time.",
      linkText: "Check availability",
      linkHref: "#availability"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>No Contract Broadband Southampton | Flexible Internet</title>
        <meta 
          name="description" 
          content="Looking for contract-free broadband in Southampton? Compare flexible internet packages with no long-term commitment. Perfect for short-term residents."
        />
      </Helmet>

      <CitystyleHero
        title="No Contract Broadband Southampton"
        subtitle="Flexible internet solutions with no long-term commitment"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Flexible broadband options in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Benefits of No Contract Broadband"
          subtitle="Enjoy complete flexibility with your internet connection"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="No Lock-in"
            description="Cancel or change your package anytime"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Same Speed"
            description="Full service quality without long contracts"
          />
          <CitystyleFeatureCard
            icon={Bolt}
            title="Quick Setup"
            description="Get connected within days"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Flexible Living"
            description="Perfect for temporary residents"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default NoContractBroadbandSouthampton;