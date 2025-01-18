import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PortsmouthBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Portsmouth has excellent broadband coverage with multiple providers offering fast and reliable connections.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Portsmouth area.",
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
        <title>Portsmouth Broadband | Compare Local Internet Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Portsmouth. Compare local packages from leading providers. Get fast, reliable internet for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Portsmouth"
        subtitle="Find the perfect internet package for your Portsmouth home. Compare deals from leading providers to get reliable connectivity at the best value."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth city with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Portsmouth Broadband Deals?"
          subtitle="Get the ideal internet package for your Portsmouth location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in eligible areas"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across all Portsmouth neighborhoods"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthBroadband;