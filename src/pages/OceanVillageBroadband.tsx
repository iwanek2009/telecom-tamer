import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Shield, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';

const OceanVillageBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Waterfront Living Connectivity",
      content: "Specially designed broadband packages for Ocean Village apartments and businesses, with speeds up to 1Gbps available.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Marina-Ready Internet",
      content: "Reliable connections perfect for marine businesses and yacht owners in Ocean Village Marina.",
      linkText: "View business deals",
      linkHref: "#business-deals"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Ocean Village Southampton | Compare Best Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Ocean Village Southampton. Find ultra-fast fibre packages from top providers. Get reliable internet for waterfront living & apartments."
        />
      </Helmet>

      <CitystyleHero
        title="Ocean Village Broadband Deals"
        subtitle="Find the perfect broadband package for your Ocean Village home or business. Compare ultra-fast fibre deals tailored for waterfront living."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Ocean Village Southampton marina and apartments"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Ocean Village Broadband?"
          subtitle="Discover internet solutions designed for waterfront living"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access gigabit-capable broadband perfect for streaming, gaming, and working from home"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Apartment-Ready"
            description="Packages optimized for modern apartment living in Ocean Village"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Connection"
            description="Stable internet essential for marine businesses and residents"
          />
          <CitystyleFeatureCard
            icon={Zap}
            title="Quick Installation"
            description="Fast setup times to get you connected quickly"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default OceanVillageBroadband;