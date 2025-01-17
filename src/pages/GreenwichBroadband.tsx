import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const GreenwichBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Greenwich has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Greenwich area.",
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
        <title>Greenwich Broadband | Compare Fibre Internet Packages</title>
        <meta 
          name="description" 
          content="Looking for broadband in Greenwich? Compare fast fibre packages from leading providers. Get reliable speeds perfect for streaming, gaming & home working."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Greenwich"
        subtitle="Find the fastest and most reliable broadband packages in Greenwich. Compare deals from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Greenwich area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Greenwich Broadband Deals?"
          subtitle="Get the perfect internet package for your Greenwich home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Greenwich areas"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across all Greenwich neighborhoods"
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

export default GreenwichBroadband;