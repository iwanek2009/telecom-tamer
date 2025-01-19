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
          title="Why Choose Broadband for the Historic Dockyard Area?"
          subtitle="Living or working in Portsmouth's Historic Dockyard comes with a unique set of connectivity needs. Here's why our broadband is the perfect solution for this area:"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast and Reliable Internet"
            description="Enjoy consistent speeds, even during peak times. Perfect for businesses, tourism hotspots, and households that demand reliable connectivity."
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Maritime-Friendly Coverage"
            description="Our broadband solutions are optimized for the Historic Dockyard, ensuring strong signal strength and uninterrupted service throughout the area."
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Customizable Plans"
            description="Whether you need high-speed fibre for heavy usage or basic broadband for lighter needs, our packages are designed to fit your requirements."
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