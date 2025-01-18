import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const StockportBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Home Coverage",
      content: "Stockport offers excellent residential broadband coverage with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Family Packages",
      content: "Compare family-friendly packages designed for modern household needs.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Installation",
      content: "Efficient installation available throughout Stockport, usually within 2 weeks.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Stockport Broadband | Compare Home Internet Solutions</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Stockport. Compare home internet packages from leading providers. Get fast, reliable connection for your household needs."
        />
      </Helmet>

      <CitystyleHero
        title="Stockport Broadband Deals"
        subtitle="Find the perfect home internet package in Stockport. Compare deals from leading providers for reliable family broadband."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Stockport area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Stockport Broadband Deals?"
          subtitle="Get the perfect internet package for your Stockport home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Reliable connections for the whole family"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Friendly"
            description="Perfect for streaming and gaming"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Local Service"
            description="Dedicated coverage across Stockport"
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

export default StockportBroadband;