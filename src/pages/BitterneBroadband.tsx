import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BitterneBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Bitterne has comprehensive broadband coverage with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Home Packages",
      content: "Compare packages designed for modern households in Bitterne.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Bitterne Broadband Packages | Compare Local Providers</title>
        <meta 
          name="description" 
          content="Compare broadband packages in Bitterne, Southampton. Choose from a range of local internet deals with fast, reliable connections for all your home needs."
        />
      </Helmet>

      <CitystyleHero
        title="Bitterne Broadband Packages"
        subtitle="Find the perfect internet package for your Bitterne home. Compare local broadband deals for reliable connectivity."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Bitterne area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Bitterne Internet Deals?"
          subtitle="Get the perfect broadband package for your home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access high-speed internet packages"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Local Support"
            description="Get assistance from local teams"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Wide Coverage"
            description="Extensive network across Bitterne"
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

export default BitterneBroadband;