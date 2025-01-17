import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BTLondonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "BT Network Coverage",
      content: "BT's network covers most of London, offering speeds up to 900Mbps through their full fibre infrastructure.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Fibre Packages",
      content: "Compare BT's range of fibre packages, from basic broadband to ultrafast full fibre connections.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Installation & Setup",
      content: "Professional installation available within 2 weeks in most London areas, with some locations eligible for quick start self-install.",
      linkText: "Learn more",
      linkHref: "#installation"
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
        subtitle="Compare the best BT fibre packages available in London. Find reliable connections from the UK's largest broadband provider."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband coverage in London"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose BT Broadband?"
          subtitle="Get connected with the UK's most trusted broadband provider"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Fibre Speeds"
            description="Access speeds up to 900Mbps with BT's full fibre network"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Service"
            description="Backed by the UK's largest broadband infrastructure"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Quick Setup"
            description="Professional installation or self-setup options available"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": [2]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTLondonBroadband;