import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Zap, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const HyperopticManchester = () => {
  const heroAccordionItems = [
    {
      title: "Full Fibre",
      content: "True full-fibre connection with speeds up to 1Gbps in selected areas.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "No Speed Drop",
      content: "Consistent speeds even during peak times with dedicated fibre.",
      linkText: "Learn more",
      linkHref: "#speeds"
    },
    {
      title: "Quick Install",
      content: "Fast installation available in Hyperoptic-ready buildings.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Hyperoptic Manchester | Compare Full Fibre Internet</title>
        <meta 
          name="description" 
          content="Compare Hyperoptic full-fibre broadband in Manchester. Find ultra-fast packages with gigabit speeds. Perfect for streaming, gaming & busy households."
        />
      </Helmet>

      <CitystyleHero
        title="Hyperoptic Broadband Manchester"
        subtitle="Compare Hyperoptic's full-fibre broadband packages in Manchester. Get ultra-fast, reliable connectivity with dedicated fibre connection."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Hyperoptic broadband coverage in Manchester"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Hyperoptic in Manchester?"
          subtitle="Experience true full-fibre broadband in your building"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Full Fibre"
            description="True fibre-to-the-premises connection"
          />
          <CitystyleFeatureCard
            icon={Zap}
            title="Fast Speeds"
            description="Up to 1Gbps symmetric speeds available"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Quick Install"
            description="Fast setup in Hyperoptic-ready buildings"
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

export default HyperopticManchester;