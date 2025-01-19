import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Briefcase, Shield, Building } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PortsmouthBusinessBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Business Packages",
      content: "Compare dedicated business broadband solutions.",
      linkText: "View packages",
      linkHref: "#business-packages"
    },
    {
      title: "Service Level",
      content: "Premium support and guaranteed uptime.",
      linkText: "Learn more",
      linkHref: "#service-level"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portsmouth Business Broadband | Compare Commercial Internet</title>
        <meta 
          name="description" 
          content="Find the best business broadband in Portsmouth. Compare commercial packages with dedicated support. Get reliable, high-speed internet for your business."
        />
      </Helmet>

      <CitystyleHero
        title="Portsmouth Business Broadband"
        subtitle="Compare dedicated business broadband solutions with premium support and guaranteed uptime. Perfect for Portsmouth businesses of all sizes."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth business broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Business-Grade Solutions"
          subtitle="Enterprise connectivity for Portsmouth businesses"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Ultra-fast business connectivity"
          />
          <CitystyleFeatureCard
            icon={Briefcase}
            title="Business Support"
            description="24/7 dedicated assistance"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Security"
            description="Enhanced security features"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Scalable"
            description="Grow with your business"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthBusinessBroadband;