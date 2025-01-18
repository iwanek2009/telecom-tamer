import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BTManchester = () => {
  const heroAccordionItems = [
    {
      title: "Fibre Coverage",
      content: "BT's fibre network covers most of Manchester with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Complete Wi-Fi",
      content: "Get guaranteed Wi-Fi in every room with BT's Complete Wi-Fi.",
      linkText: "Learn more",
      linkHref: "#wifi"
    },
    {
      title: "Phone Packages",
      content: "Add landline calling plans to your broadband package.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT Manchester | Compare Fibre Broadband Packages</title>
        <meta 
          name="description" 
          content="Find the best BT fibre deals in Manchester. Compare broadband packages with reliable speeds. Get connected with the UK's largest broadband network."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Manchester"
        subtitle="Compare BT's fibre broadband packages in Manchester. Get reliable speeds and comprehensive coverage from the UK's largest provider."
        image="/lovable-uploads/f47024ea-50f0-4583-89a7-f5cbc9e3beb9.png"
        imageAlt="BT broadband coverage in Manchester"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose BT in Manchester?"
          subtitle="Get connected with the UK's largest broadband provider"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Complete Wi-Fi"
            description="Guaranteed Wi-Fi coverage in every room"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Security"
            description="Free online protection with BT Web Protect"
          />
          <CitystyleFeatureCard
            icon={Phone}
            title="Phone Packages"
            description="Optional landline calling plans available"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTManchester;