import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const WestEndBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Entertainment District Coverage",
      content: "The West End enjoys comprehensive fibre coverage with speeds up to 1Gbps through providers like Virgin Media, BT, and Hyperoptic - perfect for streaming and entertainment.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Entertainment Bundles",
      content: "Compare special broadband and TV packages designed for entertainment district residents and businesses.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Quick Setup",
      content: "Many providers offer priority installation in the West End, with some providing same-day setup for eligible addresses.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>West End Broadband | Compare Entertainment District Packages</title>
        <meta 
          name="description" 
          content="Looking for broadband in London's West End? Compare fast internet packages from top providers. Perfect for streaming, entertainment & connected homes."
        />
      </Helmet>

      <CitystyleHero
        title="West End London Broadband Deals"
        subtitle="Find the perfect internet package in London's entertainment district. Compare high-speed broadband deals ideal for streaming, gaming, and smart home connectivity."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="London West End district with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our West End Broadband Deals?"
          subtitle="Get the perfect internet package for your West End property"
        >
          <CitystyleFeatureCard
            icon={Tv}
            title="Entertainment Ready"
            description="Perfect for streaming, smart TVs, and entertainment systems"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 1Gbps in the West End area"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="District Coverage"
            description="Comprehensive network coverage across the entertainment district"
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

export default WestEndBroadband;