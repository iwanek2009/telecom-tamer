import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { ManchesterGuide } from '@/components/manchester/ManchesterGuide';
import { ManchesterConsiderations } from '@/components/manchester/ManchesterConsiderations';
import { ManchesterConnectionTypes } from '@/components/manchester/ManchesterConnectionTypes';
import { ManchesterSteps } from '@/components/manchester/ManchesterSteps';
import { ManchesterFAQ } from '@/components/manchester/ManchesterFAQ';

const FibreBroadbandManchester = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Manchester enjoys extensive fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Manchester.",
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
        <title>Fibre Broadband Manchester | Compare Fast Internet Deals</title>
        <meta 
          name="description" 
          content="Looking for fibre broadband in Manchester? Compare ultra-fast packages from top providers. Get reliable speeds for streaming, gaming & home working."
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Manchester"
        subtitle="Find the fastest and most reliable fibre broadband deals in Manchester. Compare packages from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Manchester cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Fibre Broadband in Manchester?"
          subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps with full fibre coverage across Manchester"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all Manchester neighborhoods"
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

        <ManchesterConnectionTypes />
        <ManchesterGuide />
        <ManchesterConsiderations />
        <ManchesterSteps />
        <ManchesterFAQ />
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandManchester;