import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BTSouthampton = () => {
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
        <title>BT Broadband Southampton | Compare Internet Packages</title>
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
          title="Key Benefits of BT Broadband in Southampton"
          subtitle="Looking for reliable BT broadband in Southampton? Discover comprehensive packages, exclusive deals, and everything you need to know about getting connected with the UK's largest broadband provider."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Full Fibre Coverage"
            description="Access ultrafast speeds up to 900Mbps across Southampton's expanding full fibre network"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Smart Hub Technology"
            description="Enjoy whole-home coverage with BT's advanced Wi-Fi hardware and Complete Wi-Fi guarantee"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Entertainment Extras"
            description="Bundle your connection with BT Sport, NOW TV, and premium streaming services"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["BT"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTSouthampton;
