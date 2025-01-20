import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const ShirleyBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Shirley has excellent broadband coverage with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers serving the Shirley area.",
      linkText: "View providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Shirley Internet Deals | Southampton Broadband Offers</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Shirley, Southampton. Compare internet packages from leading providers with reliable speeds for streaming, gaming and home working."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Shirley"
        subtitle="Find the perfect internet package for your Shirley home. Compare broadband deals from leading providers for reliable connectivity."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Shirley area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Shirley Internet Deals?"
          subtitle="Get the perfect broadband package for your home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access high-speed internet with various packages"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Local Support"
            description="Get assistance from local installation teams"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Wide Coverage"
            description="Extensive network across Shirley"
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

export default ShirleyBroadband;