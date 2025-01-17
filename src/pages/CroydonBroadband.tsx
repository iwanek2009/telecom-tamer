import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const CroydonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Croydon has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Croydon area.",
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
        <title>Croydon Internet Deals | Compare Home Broadband Packages</title>
        <meta 
          name="description" 
          content="Find the best internet deals in Croydon. Compare local broadband packages from top providers. Get fast, reliable connection for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Internet Deals in Croydon"
        subtitle="Compare the best broadband packages from leading providers in Croydon. Find reliable connections perfect for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Croydon area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Croydon Internet Deals?"
          subtitle="Get the perfect broadband package for your Croydon home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Croydon areas"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across all Croydon neighborhoods"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
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

export default CroydonBroadband;