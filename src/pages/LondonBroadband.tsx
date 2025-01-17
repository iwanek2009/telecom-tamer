import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, PoundSterling } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const LondonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Why compare London broadband deals?",
      content: "Different providers offer varying speeds and packages in London. Compare to find the best value for your needs and location.",
      linkText: "View all deals",
      linkHref: "#compare-deals"
    },
    {
      title: "What speeds are available?",
      content: "London has excellent broadband coverage with speeds up to 1Gb from providers like Virgin Media and BT. Check availability in your area.",
      linkText: "Check speeds",
      linkHref: "#speeds"
    },
    {
      title: "How much can I save?",
      content: "By comparing providers, you could save up to 40% on your broadband package. Many providers offer special deals for new customers.",
      linkText: "See savings",
      linkHref: "#savings"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>London Broadband Deals | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in London. Compare packages from leading providers, perfect for streaming, gaming & working from home. Check local availability today."
        />
      </Helmet>

      <CitystyleHero
        title="London Broadband Deals"
        subtitle="Find the fastest and most reliable broadband deals in London. Compare packages from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="London cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our London Broadband Comparison?"
          subtitle="Find the perfect broadband package for your London home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 1Gb with full fibre coverage across London"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all London neighborhoods"
          />
          <CitystyleFeatureCard
            icon={PoundSterling}
            title="Best Value"
            description="Compare deals from £25/month with exclusive online discounts"
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

export default LondonBroadband;