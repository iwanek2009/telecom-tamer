import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { PoundSterling, Wifi, Clock } from 'lucide-react';
import BudgetBroadbandGuide from '@/components/BudgetBroadbandGuide';
import { ValueBroadbandGuide } from '@/components/ValueBroadbandGuide';
import { Helmet } from 'react-helmet';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';

const CheapBroadbandDeals = () => {
  const heroAccordionItems = [
    {
      title: "Why choose cheap broadband?",
      content: "Budget broadband packages offer great value for cost-conscious customers. You can get reliable speeds for everyday use, avoid unnecessary extras, and save money without compromising on basic internet performance.",
    },
    {
      title: "Are cheap broadband deals reliable?",
      content: "Yes! Cheap broadband uses the same infrastructure as expensive packages. While you might get fewer extras, the basic internet service is just as reliable as higher-priced options.",
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Compare Cheap Broadband Deals | Find Lowest Prices UK</title>
        <meta 
          name="description" 
          content="Compare and find the cheapest broadband deals in your area. Use our price comparison tool to save money on your internet package. Check availability now."
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
        </BStyleFeatureGrid>

        {/* Stickee Widget Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Available Broadband Deals</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">sort by</span>
                <select className="border rounded-md p-2">
                  <option>Most Popular</option>
                  <option>Lowest Price</option>
                  <option>Highest Price</option>
                </select>
              </div>
            </div>
            <StickeeWidgetContent 
              widgetId="smartfony-91" 
              filters='{"monthly_price": {"min":0, "max":25}}'
            />
          </div>
        </div>
      </BStyleContent>

      <BudgetBroadbandGuide />
      <ValueBroadbandGuide />
    </BStyleTemplate>
  );
};

export default CheapBroadbandDeals;