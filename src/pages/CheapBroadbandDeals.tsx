import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { PoundSterling, Wifi, Clock, Shield, Zap, Award } from 'lucide-react';
import BroadbandFilters from '@/components/BroadbandFilters';
import BroadbandOffers from '@/components/BroadbandOffers';
import BudgetBroadbandGuide from '@/components/BudgetBroadbandGuide';
import { ValueBroadbandGuide } from '@/components/ValueBroadbandGuide';
import { Helmet } from 'react-helmet';

const CheapBroadbandDeals = () => {
  const heroAccordionItems = [
    {
      title: "How to find the cheapest deals?",
      content: "Compare different providers, check for special offers, and consider longer contracts for better monthly rates. Look at the total cost including setup fees.",
      linkText: "View all deals",
      linkHref: "#deals"
    },
    {
      title: "What speed do you need?",
      content: "Most households need 30-60Mbps for everyday use. Higher speeds aren't always necessary - focus on finding the right balance of speed and cost.",
      linkText: "Check speed guide",
      linkHref: "#speed-guide"
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Cheap Broadband Deals UK | Compare Affordable Internet Packages</title>
        <meta 
          name="description" 
          content="Find the cheapest broadband deals in the UK. Compare affordable internet packages from leading providers and save on your monthly bills."
        />
      </Helmet>

      <BStyleHero
        title="Cheap Broadband Deals"
        subtitle="Save money on your internet with our affordable broadband packages"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person comparing broadband deals on tablet"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Why Choose Our Cheap Broadband Deals?"
          subtitle="Get the best value without compromising on quality"
        >
          <BStyleFeatureCard
            icon={PoundSterling}
            title="Best Value"
            description="Carefully selected deals offering the best price-to-performance ratio"
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Reliable Speed"
            description="Fast enough for streaming, gaming, and working from home"
          />
          <BStyleFeatureCard
            icon={Clock}
            title="Flexible Contracts"
            description="Choose from 12, 18, or 24-month contracts to suit your needs"
          />
          <BStyleFeatureCard
            icon={Shield}
            title="Price Protection"
            description="Many deals include price guarantees for the contract duration"
          />
          <BStyleFeatureCard
            icon={Zap}
            title="Quick Setup"
            description="Fast and hassle-free installation process"
          />
          <BStyleFeatureCard
            icon={Award}
            title="Quality Service"
            description="All providers vetted for reliable customer support"
          />
        </BStyleFeatureGrid>

        <div className="mt-16">
          <div className="grid md:grid-cols-12 gap-8">
            <BroadbandFilters />
            <BroadbandOffers />
          </div>
        </div>
      </BStyleContent>

      <BudgetBroadbandGuide />
      <ValueBroadbandGuide />
    </BStyleTemplate>
  );
};

export default CheapBroadbandDeals;