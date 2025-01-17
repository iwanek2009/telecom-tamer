import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const AstonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Aston has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Aston area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Aston Broadband | Compare Local Internet Deals</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Aston, Birmingham. Find local internet packages from top providers. Get reliable speeds for streaming, gaming & home working."
        />
      </Helmet>

      <CitystyleHero
        title="Internet Deals in Aston"
        subtitle="Compare the best broadband packages from leading providers in Aston, Birmingham. Find reliable connections perfect for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Aston area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Aston Internet Deals?"
          subtitle="Get the perfect broadband package for your Aston home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Aston areas"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across all Aston neighborhoods"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
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

export default AstonBroadband;