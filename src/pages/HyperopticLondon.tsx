import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Zap, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const HyperopticLondon = () => {
  const heroAccordionItems = [
    {
      title: "Full Fibre Coverage",
      content: "Hyperoptic offers dedicated full-fibre connections to buildings across London, with speeds up to 1Gbps for both download and upload.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Installation Process",
      content: "Professional installation included with most packages, typically completed within 5-7 working days once your building is connected.",
      linkText: "Learn more",
      linkHref: "#installation"
    },
    {
      title: "Speed Options",
      content: "Choose from various speed tiers including 50Mbps, 150Mbps, 500Mbps and 1Gbps packages to suit your needs.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Hyperoptic London | Compare Full Fibre Packages</title>
        <meta 
          name="description" 
          content="Compare Hyperoptic full-fibre broadband in London. Find ultra-fast packages with gigabit speeds. Perfect for streaming, gaming & busy households."
        />
      </Helmet>

      <CitystyleHero
        title="Hyperoptic Broadband in London"
        subtitle="Compare ultra-fast full-fibre packages from Hyperoptic. Get symmetrical speeds perfect for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Hyperoptic full-fibre broadband coverage in London"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Hyperoptic Broadband?"
          subtitle="Experience true full-fibre connectivity in London"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Symmetrical Speeds"
            description="Same fast speeds for both download and upload"
          />
          <CitystyleFeatureCard
            icon={Zap}
            title="Ultra-Low Latency"
            description="Perfect for gaming and video calls"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Building Ready"
            description="Dedicated connections to your property"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": [139]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default HyperopticLondon;