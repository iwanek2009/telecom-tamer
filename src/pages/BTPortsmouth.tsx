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
          subtitle="BT Broadband stands out as a top choice for families and professionals in Portsmouth. With industry-leading speeds, unlimited data, and advanced security tools, BT offers everything you need for a worry-free online experience."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Superfast Fibre Speeds"
            description="Enjoy fibre broadband with speeds up to 900Mbps. Perfect for streaming, gaming, and working from home without interruptions or buffering."
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Unlimited Data on Every Plan"
            description="Stream, browse, and download as much as you like. All BT packages include unlimited data with no hidden restrictions."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Built-In Security Features"
            description="Protect your devices and family with BT's advanced security tools, including Parental Controls and antivirus protection."
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