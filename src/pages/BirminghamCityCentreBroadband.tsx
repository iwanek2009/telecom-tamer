import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Building, Network, WifiHigh } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BirminghamCityCentreBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Business District Coverage",
      content: "Extensive fibre network coverage across Birmingham's Business District with speeds up to 1Gbps through major providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "City Centre Providers",
      content: "Compare deals from leading providers offering dedicated business and residential packages in Birmingham city centre.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Quick installation available in most city centre locations, with priority service for business customers.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Birmingham City Centre Broadband | Compare Business Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Birmingham's Business District. Find reliable packages for city centre locations. Perfect for businesses & city living."
        />
      </Helmet>

      <CitystyleHero
        title="Birmingham City Centre Broadband"
        subtitle="Find the perfect broadband package for your business or residence in Birmingham's bustling city centre."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Birmingham city centre skyline with modern connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose City Centre Broadband?"
          subtitle="Get connected in Birmingham's thriving business district"
        >
          <CitystyleFeatureCard
            icon={Building}
            title="Business Ready"
            description="Tailored packages for offices and commercial properties in the city centre"
          />
          <CitystyleFeatureCard
            icon={WifiHigh}
            title="Ultra-Fast Speeds"
            description="Access gigabit speeds perfect for demanding business operations"
          />
          <CitystyleFeatureCard
            icon={Network}
            title="Reliable Network"
            description="Premium infrastructure with dedicated business support"
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

export default BirminghamCityCentreBroadband;