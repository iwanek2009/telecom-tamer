import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Gamepad, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const VirginMediaPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Cable Coverage",
      content: "Check Virgin Media cable availability in your area of Portsmouth.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Bundle Deals",
      content: "Compare TV, broadband and phone packages from Virgin Media.",
      linkText: "View bundles",
      linkHref: "#bundles"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Virgin Media Portsmouth | Compare Cable Internet Deals</title>
        <meta 
          name="description" 
          content="Compare Virgin Media broadband deals in Portsmouth. Find ultra-fast cable packages for your area. Get reliable speeds for streaming, gaming & working."
        />
      </Helmet>

      <CitystyleHero
        title="Virgin Media Portsmouth Deals"
        subtitle="Compare ultra-fast cable broadband packages from Virgin Media. Find the perfect bundle for your Portsmouth home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Virgin Media broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Virgin Media?"
          subtitle="Get connected with cable broadband in Portsmouth"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Ultra-fast cable broadband up to 1.1Gbps"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="TV Bundles"
            description="Combine with premium TV channels"
          />
          <CitystyleFeatureCard
            icon={Gamepad}
            title="Gaming Ready"
            description="Low latency for online gaming"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable"
            description="Stable cable network connection"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default VirginMediaPortsmouth;