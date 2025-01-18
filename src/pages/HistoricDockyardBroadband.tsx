import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, Globe, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const HistoricDockyardBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Find providers serving the Historic Dockyard area.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business Solutions",
      content: "Dedicated packages for businesses in the area.",
      linkText: "View business deals",
      linkHref: "#business-deals"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portsmouth Historic Dockyard | Compare Internet Services</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Portsmouth's Historic Dockyard area. Find reliable packages for homes and businesses. Get fast internet in this unique location."
        />
      </Helmet>

      <CitystyleHero
        title="Historic Dockyard Broadband Deals"
        subtitle="Find the perfect broadband package for your home or business in Portsmouth's Historic Dockyard area."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth Historic Dockyard broadband services"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Historic Dockyard Packages?"
          subtitle="Get connected with reliable broadband in this unique location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="High-speed internet for all users"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Heritage Compatible"
            description="Solutions suitable for historic buildings"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Business Ready"
            description="Perfect for tourist attractions and shops"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Service"
            description="Stable connection you can count on"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default HistoricDockyardBroadband;