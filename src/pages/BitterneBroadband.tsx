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
          title="Why Choose Bitterne Broadband Deals?"
          subtitle="If you live in Bitterne or nearby Southampton, you can find broadband deals tailored to your needs"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Downloads"
            description="Download HD movies or large files in just minutes with speeds up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Reliable Connection"
            description="Stay connected without interruptions, even during peak hours—ideal for working or studying from home"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Low Latency"
            description="Perfect for smooth online gaming, video calls, and streaming without buffering"
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