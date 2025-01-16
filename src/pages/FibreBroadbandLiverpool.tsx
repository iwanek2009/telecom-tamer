import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, Network, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const FibreBroadbandLiverpool = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Liverpool enjoys extensive fibre coverage with speeds up to 1Gbps available in many areas through providers like Virgin Media and BT.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Liverpool.",
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
        <title>Fibre Broadband Liverpool | Compare Fast Internet Providers</title>
        <meta 
          name="description" 
          content="Discover the best fibre broadband deals in Liverpool. Compare fast internet providers and packages to find the perfect connection for streaming, gaming, and remote work. Start comparing today!"
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Liverpool"
        subtitle="Find the fastest and most reliable fibre broadband deals in Liverpool. Compare packages from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Liverpool cityscape with fiber optic illustration"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Fibre Broadband in Liverpool?"
          subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps with full fibre coverage across Liverpool"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all Liverpool neighborhoods"
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
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandLiverpool;