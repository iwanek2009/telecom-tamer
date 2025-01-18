import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const TraffordBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Trafford enjoys comprehensive broadband coverage with various speed options from leading providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Home & Business",
      content: "Compare packages suitable for both residential and business use in Trafford.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Installation",
      content: "Quick and efficient installation available across the Trafford area.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Trafford Internet | Compare Local Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Trafford. Find local internet packages from top providers. Get reliable speeds for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Trafford Internet Packages"
        subtitle="Find the perfect broadband deal in Trafford. Compare packages from leading providers for reliable home and business internet."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Trafford area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Trafford Internet Deals?"
          subtitle="Get the perfect internet package for your Trafford property"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Reliable connections for all your online needs"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Local Coverage"
            description="Extensive network across Trafford area"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home Ready"
            description="Perfect for streaming, gaming and working"
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

export default TraffordBroadband;