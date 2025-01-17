import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { MapPin, Wifi, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const CentralLondonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Ultra-Fast Coverage",
      content: "Central London enjoys extensive fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT, Hyperoptic and Community Fibre.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "City Providers",
      content: "Compare deals from major providers and local specialists serving Central London's unique connectivity needs.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Quick Installation",
      content: "Most providers offer priority installation in Central London, with some offering next-day setup in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Central London Broadband | Compare City Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Central London. Compare city internet packages from top providers. Get ultra-fast speeds for city living, streaming & working."
        />
      </Helmet>

      <CitystyleHero
        title="Central London Broadband Deals"
        subtitle="Compare the fastest internet packages from leading providers in Central London. Find reliable connections perfect for city living, streaming, and remote work."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Central London cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Central London Broadband Deals?"
          subtitle="Get the perfect internet package for your Central London home or business"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Central London areas"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="City Coverage"
            description="Extensive network coverage across all Central London districts"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Business Ready"
            description="Perfect for home working, streaming, and business connectivity"
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

export default CentralLondonBroadband;