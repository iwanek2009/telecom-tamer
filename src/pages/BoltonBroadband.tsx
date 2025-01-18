import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BoltonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Bolton offers comprehensive broadband coverage with various speed options from major providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Home Packages",
      content: "Compare packages designed for modern households in Bolton.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Installation",
      content: "Quick installation available across Bolton, usually within 2 weeks.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Bolton Internet | Compare Greater Manchester Broadband</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Bolton, Greater Manchester. Find local packages from top providers. Get reliable internet for streaming, gaming & home working."
        />
      </Helmet>

      <CitystyleHero
        title="Bolton Internet Packages"
        subtitle="Find the perfect broadband deal in Bolton. Compare packages from leading providers for reliable home internet."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Bolton area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Bolton Internet Deals?"
          subtitle="Get the perfect internet package for your Bolton home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Reliable connections for all your needs"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Local Coverage"
            description="Extensive network across Bolton"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home Ready"
            description="Perfect for streaming and working"
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

export default BoltonBroadband;