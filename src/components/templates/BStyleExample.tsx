import { Search, Filter, CreditCard } from 'lucide-react';
import { BStyleTemplate } from './BStyleTemplate';
import { BStyleHero } from './BStyleHero';
import { BStyleContent } from './BStyleContent';
import { BStyleFeatureCard } from './BStyleFeatureCard';
import { BStyleFeatureGrid } from './BStyleFeatureGrid';

export const BStyleExample = () => {
  const accordionItems = [
    {
      title: "How to get the best value?",
      content: "Compare different providers and check what's available at your address. Look at the total cost including setup fees and price increases.",
      linkText: "Read our guide",
      linkHref: "#guide"
    },
    {
      title: "What features do you need?",
      content: "Consider your usage patterns and requirements before making a decision.",
      linkText: "Learn more",
      linkHref: "#learn-more"
    }
  ];

  return (
    <BStyleTemplate>
      <BStyleHero
        title="Your Page Title"
        subtitle="Your page subtitle with a compelling message"
        image="/your-hero-image.png"
        imageAlt="Description of hero image"
        accordionItems={accordionItems}
      />
      
      <BStyleFeatureGrid
        title="Key Features"
        subtitle="Discover what makes us different"
      >
        <BStyleFeatureCard
          icon={Search}
          title="Easy Search"
          description="Find exactly what you're looking for with our powerful search tools"
        />
        <BStyleFeatureCard
          icon={Filter}
          title="Smart Filters"
          description="Filter and sort results based on your specific needs"
        />
        <BStyleFeatureCard
          icon={CreditCard}
          title="Secure Payments"
          description="Your transactions are always safe and secure"
        />
      </BStyleFeatureGrid>

      <BStyleContent>
        {/* Your main content goes here */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-3">
            {/* Your sidebar content */}
          </div>
          {/* Main content area */}
          <div className="md:col-span-9">
            {/* Your main content */}
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};