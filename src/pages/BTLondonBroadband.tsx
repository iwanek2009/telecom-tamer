import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BTLondonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "BT Full Fibre Coverage",
      content: "BT offers extensive fibre coverage across London with speeds up to 900Mbps through their Full Fibre network.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "BT Smart Hub",
      content: "Get the latest BT Smart Hub with Complete Wi-Fi guarantee for whole-home coverage.",
      linkText: "Learn more",
      linkHref: "#smart-hub"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT London Broadband | Compare Fibre Internet Packages</title>
        <meta 
          name="description" 
          content="Compare BT broadband deals across London. Find fibre packages with reliable speeds. Get connected with the UK's largest broadband network."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Deals in London"
        subtitle="Compare the latest BT broadband packages available in London. Find reliable fibre connections with the UK's largest broadband provider."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband coverage in London"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose BT Broadband?"
          subtitle="Get connected with London's most trusted broadband provider"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Complete Wi-Fi"
            description="Guaranteed whole-home coverage with BT's Smart Hub and discs"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Reliable Network"
            description="Connect to the UK's largest and most reliable broadband network"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Fast Speeds"
            description="Access speeds up to 900Mbps with BT Full Fibre"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": [135]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTLondonBroadband;