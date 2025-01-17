import { Helmet } from 'react-helmet';
import { NewstyleTemplate } from './NewstyleTemplate';
import { NewstyleContent } from './NewstyleContent';
import { NewstyleHero } from './NewstyleHero';
import { NewstyleFeatureGrid } from './NewstyleFeatureGrid';
import { NewstyleFeatureCard } from './NewstyleFeatureCard';
import { Wifi, Filter, CreditCard } from 'lucide-react';
import StickeeWidget from '@/components/StickeeWidget';

const NewstyleExample = () => {
  const heroTips = [
    {
      title: "How to get the best value?",
      content: "Compare different providers and check available speeds in your area before making a decision.",
      linkText: "Read our guide",
      linkHref: "#guide"
    },
    {
      title: "What speed do you need?",
      content: "Your ideal speed depends on household usage and activities like streaming or gaming.",
      linkText: "Check speeds",
      linkHref: "#speeds"
    }
  ];

  return (
    <NewstyleTemplate>
      <Helmet>
        <title>Example Page Title | Your Site</title>
        <meta 
          name="description" 
          content="Example meta description for SEO"
        />
      </Helmet>

      <NewstyleHero
        title="Example Page Title"
        subtitle="Example subtitle text that describes the page content"
        tips={heroTips}
      />

      <NewstyleFeatureGrid
        title="Feature Section Title"
        subtitle="Subtitle explaining the features below"
      >
        <NewstyleFeatureCard
          icon={Wifi}
          title="Feature One"
          description="Description of the first feature"
        />
        <NewstyleFeatureCard
          icon={Filter}
          title="Feature Two"
          description="Description of the second feature"
        />
        <NewstyleFeatureCard
          icon={CreditCard}
          title="Feature Three"
          description="Description of the third feature"
        />
      </NewstyleFeatureGrid>

      <NewstyleContent>
        <StickeeWidget />
        
        {/* Add additional content sections as needed */}
      </NewstyleContent>
    </NewstyleTemplate>
  );
};

export default NewstyleExample;