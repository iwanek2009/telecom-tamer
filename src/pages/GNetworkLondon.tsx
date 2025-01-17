import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Network, WifiHigh, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const GNetworkLondon = () => {
  const heroAccordionItems = [
    {
      title: "Pure Fibre Network",
      content: "G.Network builds and operates its own dedicated fibre network across London, delivering ultra-reliable broadband directly to your home.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "London Coverage",
      content: "Compare G.Network packages available in your London neighborhood, with expanding coverage across the city.",
      linkText: "View coverage",
      linkHref: "#coverage"
    },
    {
      title: "Installation Process",
      content: "Learn about G.Network's installation process and what to expect when getting connected to pure fibre broadband.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>G.Network London | Compare Pure Fibre Broadband</title>
        <meta 
          name="description" 
          content="Explore G.Network pure fibre broadband in London. Compare ultra-fast packages with dedicated fibre connection. Get reliable speeds for your London home."
        />
      </Helmet>

      <CitystyleHero
        title="G.Network London Broadband"
        subtitle="Compare pure fibre broadband packages from G.Network. Experience ultra-fast speeds and reliable connectivity through London's dedicated fibre network."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="G.Network pure fibre broadband connectivity in London"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose G.Network Broadband?"
          subtitle="Experience the benefits of pure fibre connectivity in London"
        >
          <CitystyleFeatureCard
            icon={Network}
            title="Pure Fibre Network"
            description="Dedicated fibre network built specifically for London"
          />
          <CitystyleFeatureCard
            icon={WifiHigh}
            title="Ultra-Fast Speeds"
            description="Symmetric speeds up to 900Mbps for downloads and uploads"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Reliable Connection"
            description="Consistent performance through dedicated infrastructure"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": [156]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default GNetworkLondon;