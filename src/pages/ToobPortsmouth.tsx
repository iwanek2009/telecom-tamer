import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Zap, Monitor, Download } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const ToobPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Full Fibre",
      content: "Check Toob full-fibre availability in your area.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Gigabit Speeds",
      content: "Compare ultra-fast gigabit packages.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Toob Portsmouth | Compare Full Fibre Internet Deals</title>
        <meta 
          name="description" 
          content="Compare Toob full-fibre broadband in Portsmouth. Find ultra-fast packages with gigabit speeds. Get reliable internet perfect for streaming & gaming."
        />
      </Helmet>

      <CitystyleHero
        title="Toob Full Fibre Portsmouth"
        subtitle="Compare ultra-fast full-fibre packages from Toob. Find reliable gigabit broadband for your Portsmouth home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Toob full-fibre broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Toob?"
          subtitle="Experience next-generation broadband"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Full Fibre"
            description="Pure fibre to your home"
          />
          <CitystyleFeatureCard
            icon={Zap}
            title="Gigabit Speeds"
            description="Ultra-fast 900Mbps+"
          />
          <CitystyleFeatureCard
            icon={Monitor}
            title="Low Latency"
            description="Perfect for gaming"
          />
          <CitystyleFeatureCard
            icon={Download}
            title="Symmetric"
            description="Same upload & download"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ToobPortsmouth;