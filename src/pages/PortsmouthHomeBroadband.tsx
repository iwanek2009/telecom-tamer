import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PortsmouthHomeBroadband = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband Bundles",
      content: "Get the best value with combined TV and internet packages.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Available Providers",
      content: "Compare home packages from major providers in Portsmouth.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portsmouth Home Broadband | Compare TV & Internet Bundles</title>
        <meta 
          name="description" 
          content="Find the best broadband and TV bundles in Portsmouth. Compare complete home packages from leading providers. Get fast internet with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="Home Broadband & TV in Portsmouth"
        subtitle="Find the perfect home entertainment package. Compare broadband and TV bundles from leading providers."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth home broadband and TV packages"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Complete Home Entertainment"
          subtitle="Get everything you need for your Portsmouth home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Internet"
            description="High-speed broadband for all your devices"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Premium TV"
            description="Access to hundreds of channels and on-demand content"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Home Phone"
            description="Optional landline services with great call packages"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthHomeBroadband;