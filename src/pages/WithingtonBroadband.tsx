import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const WithingtonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Residential Packages",
      content: "Explore broadband packages designed for residential properties in Withington, perfect for everyday internet use.",
      linkText: "View residential deals",
      linkHref: "#residential-deals"
    },
    {
      title: "Local Coverage",
      content: "Check availability and compare deals from major providers serving the Withington area.",
      linkText: "Check availability",
      linkHref: "#availability"
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
        <title>Withington Broadband | Compare Residential Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Withington. Compare residential packages from leading providers. Get reliable internet for streaming, working & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Withington"
        subtitle="Find the perfect residential internet package in Withington. Compare deals from leading providers for reliable home broadband."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Withington area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Withington Broadband Deals?"
          subtitle="Get the perfect internet package for your Withington home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Reliable Speed"
            description="Fast and stable connections for streaming and working"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Ready"
            description="Perfect for residential properties and daily use"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across Withington"
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

export default WithingtonBroadband;