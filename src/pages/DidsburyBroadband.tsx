import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const DidsburyBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Didsbury has excellent broadband coverage with multiple providers offering fast and reliable connections.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and other providers serving the Didsbury area.",
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
        <title>Didsbury Broadband | Compare Home Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Didsbury. Compare home internet packages from leading providers. Get reliable speeds for streaming, gaming & family use."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Didsbury"
        subtitle="Find the perfect home internet package in Didsbury. Compare deals from leading providers to get reliable connectivity for your household."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Didsbury residential area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Didsbury Broadband Deals?"
          subtitle="Get the ideal internet package for your Didsbury home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Reliable Coverage"
            description="Strong network coverage across all Didsbury neighborhoods"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Ready"
            description="Perfect for families, streaming, and working from home"
          />
          <CitystyleFeatureCard
            icon={Zap}
            title="Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in eligible areas"
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

export default DidsburyBroadband;