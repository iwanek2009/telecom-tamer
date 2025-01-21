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
        title="Find the Best Broadband Deals in Shirley and Southampton"
        subtitle="Whether you're in Shirley, Southampton, or the surrounding areas, finding the right broadband deal has never been easier."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Shirley area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
            <p className="text-lg">Lightning-Fast Downloads: Enjoy ultra-quick downloads, like streaming HD movies in just minutes, with speeds reaching up to 1Gbps.</p>
            <p className="text-lg">Reliable Connection: Stay connected during peak times with consistent service—perfect for remote work and online classes.</p>
            <p className="text-lg">Low Latency: Experience seamless online gaming and crystal-clear video calls with minimal lag.</p>
          </div>
        </div>

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