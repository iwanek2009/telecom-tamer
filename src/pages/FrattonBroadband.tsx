import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, MapPin, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const FrattonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Fratton has excellent broadband coverage with multiple providers offering fast connections.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers serving the Fratton area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fratton Broadband | Compare Local Internet Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Fratton. Compare local packages from leading providers. Get fast, reliable internet for your home or business."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Fratton"
        subtitle="Find the perfect internet package for your Fratton home or business. Compare deals from leading providers to get reliable connectivity."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Fratton broadband connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Fratton Broadband Deals?"
          subtitle="Get the ideal internet package for your Fratton location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in eligible areas"
          />
          <CitystyleFeatureCard
            icon={MapPin}
            title="Local Coverage"
            description="Extensive network coverage across Fratton"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FrattonBroadband;