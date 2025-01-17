import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, Building, Network } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const JewelleryQuarterBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Creative Quarter Coverage",
      content: "The Jewellery Quarter has excellent broadband coverage with speeds up to 1Gbps available through various providers, perfect for creative businesses and residents.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business-Grade Solutions",
      content: "Compare dedicated business broadband packages designed for creative studios, workshops, and professional services in the Jewellery Quarter.",
      linkText: "View business deals",
      linkHref: "#business"
    },
    {
      title: "Residential Options",
      content: "Find the perfect home broadband package for Jewellery Quarter apartments and residential developments.",
      linkText: "See residential deals",
      linkHref: "#residential"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Jewellery Quarter Internet | Compare Creative Quarter Broadband</title>
        <meta 
          name="description" 
          content="Find the best broadband in Birmingham's Jewellery Quarter. Compare packages perfect for creative businesses & residents. Get reliable speeds for work & home."
        />
      </Helmet>

      <CitystyleHero
        title="Jewellery Quarter Broadband"
        subtitle="Compare fast and reliable internet packages for Birmingham's creative hub"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Jewellery Quarter creative workspace with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Internet Solutions for the Creative Quarter"
          subtitle="Tailored broadband packages for businesses and residents"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps perfect for creative work"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Business Ready"
            description="Dedicated business lines with enhanced support and reliability"
          />
          <CitystyleFeatureCard
            icon={Network}
            title="Creative Hub"
            description="Optimized for design studios, workshops and creative spaces"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Full Coverage"
            description="Extensive network coverage across the Jewellery Quarter"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default JewelleryQuarterBroadband;