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
          title="Find Your Perfect Broadband Deal in Southsea"
          subtitle="Compare local internet packages and get connected today"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Seaside-Ready Speeds"
            description="Whether you're working from your seafront flat or streaming in your Palmerston Road home, get reliable speeds that keep you connected in Southsea."
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Perfect For Local Living"
            description="From Albert Road creatives to families near Canoe Lake, choose packages that match your Southsea lifestyle and budget."
          />
          <CitystyleFeatureCard
            icon={House}
            title="Local Coverage You Can Trust"
            description="Get broadband that understands Southsea's unique needs - from student houses near the University to Victorian homes in the avenues."
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