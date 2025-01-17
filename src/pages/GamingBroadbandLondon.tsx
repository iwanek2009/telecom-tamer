import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Gamepad2, Wifi, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const GamingBroadbandLondon = () => {
  const heroAccordionItems = [
    {
      title: "Ultra-Low Latency",
      content: "Get the lowest possible ping with dedicated gaming broadband packages optimized for online gaming performance.",
      linkText: "Check latency",
      linkHref: "#latency"
    },
    {
      title: "Gaming Providers",
      content: "Compare specialized gaming packages from providers offering prioritized gaming traffic and stable connections.",
      linkText: "View providers",
      linkHref: "#providers"
    },
    {
      title: "Fast Installation",
      content: "Many providers offer quick installation for gaming broadband, with some providing next-day setup in eligible areas.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>London Gaming Broadband | Compare Low Latency Internet</title>
        <meta 
          name="description" 
          content="Find the best gaming broadband in London. Compare low-latency packages from top providers. Get ultra-fast speeds perfect for online gaming & streaming."
        />
      </Helmet>

      <CitystyleHero
        title="Gaming Broadband Deals in London"
        subtitle="Find the perfect low-latency internet package for gaming. Compare specialized gaming broadband deals from leading providers in London."
        image="/lovable-uploads/1486312338219-ce68d2c6f44d.png"
        imageAlt="Gaming setup with high-speed internet connection"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Gaming Broadband Deals?"
          subtitle="Get the perfect internet package for your gaming needs in London"
        >
          <CitystyleFeatureCard
            icon={Gamepad2}
            title="Gaming Optimized"
            description="Low latency connections perfect for competitive gaming"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Up to 1Gbps symmetric speeds for seamless gaming"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Stable Connection"
            description="Reliable connection with minimal packet loss"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default GamingBroadbandLondon;