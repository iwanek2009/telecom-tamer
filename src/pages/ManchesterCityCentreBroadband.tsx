import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Building } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const ManchesterCityCentreBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Ultra-Fast Coverage",
      content: "Manchester City Centre enjoys extensive fibre coverage with speeds up to 1Gbps from leading providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Urban Providers",
      content: "Compare deals from major providers serving Manchester's bustling city centre area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Quick Installation",
      content: "Most providers offer priority installation in Manchester City Centre, with some offering next-day setup.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Manchester City Centre Broadband | Compare Urban Internet Deals</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Manchester City Centre. Find ultra-fast urban packages from top providers. Perfect for city living, working & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Manchester City Centre Broadband"
        subtitle="Find the fastest and most reliable broadband deals in Manchester City Centre. Compare packages from leading providers perfect for urban living and working."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Manchester City Centre skyline with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Manchester City Centre Broadband?"
          subtitle="Get the perfect internet package for your city centre location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Manchester City Centre"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Urban Coverage"
            description="Extensive network coverage across all central Manchester districts"
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

export default ManchesterCityCentreBroadband;