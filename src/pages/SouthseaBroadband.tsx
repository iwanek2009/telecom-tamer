import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SouthseaBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Find providers available in your part of Southsea.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Packages",
      content: "Compare the most popular broadband deals in Southsea.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Southsea Broadband | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Southsea. Find local internet packages from top providers. Get reliable speeds perfect for home and business use."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Southsea"
        subtitle="Find the perfect internet package for your Southsea home or business. Compare local deals from leading providers."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southsea broadband connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Southsea Deals?"
          subtitle="Get connected with the best local broadband packages"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Local Service"
            description="Packages tailored for Southsea residents"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Fast Speeds"
            description="High-speed internet for streaming and gaming"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Home & Business"
            description="Solutions for residential and commercial use"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SouthseaBroadband;