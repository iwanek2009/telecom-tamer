import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, MapPin, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const NorthLondonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "North London has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the North London area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>North London Broadband | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in North London. Compare local packages from leading providers. Get fast, reliable internet for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Internet Deals in North London"
        subtitle="Compare the best broadband packages from leading providers in North London. Find reliable connections perfect for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="North London area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our North London Internet Deals?"
          subtitle="Get the perfect broadband package for your North London home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in North London areas"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="Local Coverage"
            description="Extensive network coverage across all North London neighborhoods"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Reliable Service"
            description="Stable connections for uninterrupted streaming and gaming"
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

export default NorthLondonBroadband;