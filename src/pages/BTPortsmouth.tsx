import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Phone, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BTPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "BT Coverage",
      content: "Check BT broadband availability in your area of Portsmouth.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Package Options",
      content: "Compare BT broadband and phone packages.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT Portsmouth | Compare Home Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best BT broadband deals in Portsmouth. Compare reliable packages from the UK's largest network. Get fast internet for your home."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Portsmouth"
        subtitle="Compare reliable broadband packages from BT. Find the perfect internet deal for your Portsmouth home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose BT Broadband?"
          subtitle="Get connected with the UK's largest provider"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Fibre"
            description="Superfast fibre broadband options"
          />
          <CitystyleFeatureCard
            icon={Phone}
            title="Phone Lines"
            description="Includes landline services"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Security"
            description="Complete online protection"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Coverage"
            description="Extensive network coverage"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTPortsmouth;