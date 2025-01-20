import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BTBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Full Fibre",
      content: "Access BT's full fibre network with speeds up to 900Mbps.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "TV Add-ons",
      content: "Explore BT's TV packages and Sport options.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT Fibre Southampton | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best BT broadband deals in Southampton. Compare fibre packages with reliable speeds and optional TV bundles. Perfect for streaming and gaming."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Southampton"
        subtitle="Compare BT's fibre broadband packages in Southampton. Find reliable connections with optional TV bundles."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband coverage in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose BT?"
          subtitle="Experience reliable broadband"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Fibre"
            description="Speeds up to 900Mbps"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Security"
            description="Complete online protection"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="TV Options"
            description="Sport and entertainment"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["BT"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTBroadbandSouthampton;