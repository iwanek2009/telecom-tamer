import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BrixtonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Brixton has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Brixton area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Flexible Contracts",
      content: "Choose from various contract lengths, including short-term options perfect for renters in Brixton.",
      linkText: "View contracts",
      linkHref: "#contracts"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Brixton Internet Deals | Compare Local Broadband Packages</title>
        <meta 
          name="description" 
          content="Compare the best internet deals in Brixton. Find local broadband packages from top providers. Get reliable speeds for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Internet Deals in Brixton"
        subtitle="Compare the best broadband packages from leading providers in Brixton. Find reliable connections perfect for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Brixton area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Brixton Internet Deals?"
          subtitle="Get the perfect broadband package for your Brixton home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Brixton areas"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across all Brixton neighborhoods"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Service"
            description="Stable connections for uninterrupted streaming and gaming"
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

export default BrixtonBroadband;