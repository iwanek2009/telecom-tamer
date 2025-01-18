import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Building } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const DeansgateInternetBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Ultra-Fast Coverage",
      content: "Deansgate enjoys extensive fibre coverage with speeds up to 1Gbps from leading providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Urban Providers",
      content: "Compare deals from major providers serving Manchester's Deansgate area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Quick Installation",
      content: "Most providers offer priority installation in Deansgate, with some offering next-day setup.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Deansgate Internet | Compare City Living Broadband</title>
        <meta 
          name="description" 
          content="Compare broadband deals on Deansgate, Manchester. Find packages perfect for modern city living. Get ultra-fast internet for streaming, working & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Deansgate Internet Packages"
        subtitle="Find the fastest and most reliable broadband deals in Deansgate. Compare packages from leading providers perfect for modern city living."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Deansgate Manchester skyline with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Deansgate Broadband?"
          subtitle="Get the perfect internet package for your Deansgate location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Deansgate"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Urban Coverage"
            description="Extensive network coverage across Deansgate district"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="City Ready"
            description="Perfect for city living, streaming, and business connectivity"
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

export default DeansgateInternetBroadband;