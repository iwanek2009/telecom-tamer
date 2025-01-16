import { Search, Filter, CreditCard } from 'lucide-react';
import { CitystyleTemplate } from './CitystyleTemplate';
import { CitystyleHero } from './CitystyleHero';
import { CitystyleContent } from './CitystyleContent';
import { CitystyleFeatureCard } from './CitystyleFeatureCard';
import { CitystyleFeatureGrid } from './CitystyleFeatureGrid';
import { CitystyleCard } from './CitystyleCard';

export const CitystyleExample = () => {
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
    <CitystyleTemplate>
      <CitystyleHero
        title="Your Page Title"
        subtitle="Your page subtitle with a compelling message"
        image="/your-hero-image.png"
        imageAlt="Description of hero image"
        accordionItems={accordionItems}
      />
      
      <CitystyleFeatureGrid
        title="Key Features"
        subtitle="Discover what makes us different"
      >
        <CitystyleFeatureCard
          icon={Search}
          title="Easy Search"
          description="Find exactly what you're looking for with our powerful search tools"
        />
        <CitystyleFeatureCard
          icon={Filter}
          title="Smart Filters"
          description="Filter and sort results based on your specific needs"
        />
        <CitystyleFeatureCard
          icon={CreditCard}
          title="Secure Payments"
          description="Your transactions are always safe and secure"
        />
      </CitystyleFeatureGrid>

      <CitystyleContent>
        <CitystyleCard>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Main Content Section
          </h2>
          <p className="text-gray-600">
            Your main content goes here. Use CitystyleCard components to organize different sections.
          </p>
        </CitystyleCard>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};