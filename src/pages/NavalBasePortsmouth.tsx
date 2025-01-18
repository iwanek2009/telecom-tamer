import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Ship, Clock, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const NavalBasePortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Service Personnel Deals",
      content: "Special packages designed for military personnel.",
      linkText: "View deals",
      linkHref: "#service-deals"
    },
    {
      title: "Flexible Contracts",
      content: "Short-term options available for service personnel.",
      linkText: "Learn more",
      linkHref: "#contracts"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Naval Base Portsmouth | Service Personnel Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals near Portsmouth Naval Base. Find flexible packages perfect for service personnel. Get reliable internet with short-term contract options."
        />
      </Helmet>

      <CitystyleHero
        title="Naval Base Portsmouth Broadband"
        subtitle="Find flexible broadband deals perfect for service personnel. Compare packages with short-term contracts and military discounts."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth Naval Base broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Broadband for Service Personnel"
          subtitle="Tailored packages for military life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Connection"
            description="Reliable speeds for all your needs"
          />
          <CitystyleFeatureCard
            icon={Ship}
            title="Military Friendly"
            description="Special rates for service personnel"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Terms"
            description="Short-term contracts available"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Secure Service"
            description="Protected and reliable connection"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default NavalBasePortsmouth;