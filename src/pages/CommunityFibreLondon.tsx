import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Network, Wifi, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const CommunityFibreLondon = () => {
  const heroAccordionItems = [
    {
      title: "Full Fibre Network",
      content: "Community Fibre offers dedicated full-fibre connections with speeds up to 3Gbps in supported London areas.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Coverage",
      content: "Compare Community Fibre deals available in your London neighborhood, with coverage expanding across the city.",
      linkText: "View coverage",
      linkHref: "#coverage"
    },
    {
      title: "Installation Process",
      content: "Learn about the quick and professional installation process for Community Fibre broadband in your property.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Community Fibre London | Compare Local Network Deals</title>
        <meta 
          name="description" 
          content="Explore Community Fibre broadband deals in London. Compare full-fibre packages with ultra-fast speeds. Get reliable local network connection for your home."
        />
      </Helmet>

      <CitystyleHero
        title="Community Fibre London Deals"
        subtitle="Compare ultra-fast full-fibre broadband packages from London's local network provider. Find reliable connections perfect for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Community Fibre London network infrastructure"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Community Fibre London?"
          subtitle="Get connected with London's dedicated full-fibre network provider"
        >
          <CitystyleFeatureCard
            icon={Network}
            title="Local Network"
            description="London's own full-fibre network built specifically for the city"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 3Gbps with dedicated fibre lines"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="London Coverage"
            description="Expanding network coverage across London boroughs"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"download_speed": {"min":500, "max":1000}}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default CommunityFibreLondon;