import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, PoundSterling, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const LiverpoolBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Why compare Liverpool broadband deals?",
      content: "Different providers offer varying speeds and packages in Liverpool. Compare to find the best value for your needs and location.",
      linkText: "View all deals",
      linkHref: "#compare-deals"
    },
    {
      title: "What speeds are available?",
      content: "Liverpool has excellent broadband coverage with speeds up to 1Gb from providers like Virgin Media and BT. Check availability in your area.",
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
        <title>Compare Liverpool Broadband Deals | Up to 1Gb Internet Packages | 2025 Offers</title>
        <meta 
          name="description" 
          content="Compare Liverpool broadband deals from £25/month. Find the fastest speeds in your area from Virgin, BT, Sky & more. Save up to 40% on your new broadband package."
        />
      </Helmet>

      <CitystyleHero
        title="Liverpool Broadband Deals"
        subtitle="Find the best broadband deals in Liverpool. Compare speeds, prices, and packages from top providers to get the perfect internet connection"
        image="/lovable-uploads/f47024ea-50f0-4583-89a7-f5cbc9e3beb9.png"
        imageAlt="Liverpool cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Liverpool Broadband Comparison?"
          subtitle="Find the perfect broadband package for your Liverpool home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access speeds up to 1Gb with full fibre coverage across Liverpool"
          />
          <CitystyleFeatureCard
            icon={PoundSterling}
            title="Best Value"
            description="Compare deals from £25/month with exclusive online discounts"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Local Coverage"
            description="Find deals specific to your Liverpool postcode area"
          />
        </CitystyleFeatureGrid>

        <div id="compare-deals" className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default LiverpoolBroadband;