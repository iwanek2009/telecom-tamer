import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, Briefcase, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PortsmouthCityCentreBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Urban Coverage",
      content: "Extensive coverage across the city centre.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business & Home",
      content: "Solutions for both work and living.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portsmouth City Centre Broadband | Compare Urban Internet Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Portsmouth City Centre. Find ultra-fast urban packages from top providers. Perfect for city living, working & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Portsmouth City Centre Broadband"
        subtitle="Find the perfect broadband package for urban living and working in Portsmouth's bustling city centre."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth City Centre broadband services"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our City Centre Packages?"
          subtitle="Get connected with high-speed urban broadband"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast"
            description="Lightning-fast city centre speeds"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Urban Ready"
            description="Perfect for city centre properties"
          />
          <CitystyleFeatureCard
            icon={Briefcase}
            title="Work Ready"
            description="Ideal for home working"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Entertainment"
            description="Stream, game, and more"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthCityCentreBroadband;