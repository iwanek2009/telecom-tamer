import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, Network, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const DigbethBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Digital Quarter Coverage",
      content: "Digbeth has excellent broadband coverage with speeds up to 1Gbps available through various providers, perfect for digital businesses and creative workers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business Solutions",
      content: "Compare dedicated business broadband packages designed for digital agencies, creative studios, and tech startups in Digbeth.",
      linkText: "View business deals",
      linkHref: "#business"
    },
    {
      title: "Creative Hub Options",
      content: "Find the perfect broadband package for Digbeth's creative spaces and digital workplaces.",
      linkText: "See creative hub deals",
      linkHref: "#creative"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Digbeth Broadband | Compare Digital Quarter Internet</title>
        <meta 
          name="description" 
          content="Find high-speed broadband in Digbeth's Digital Quarter. Compare packages perfect for creative businesses & digital workers. Get reliable internet for all your needs."
        />
      </Helmet>

      <CitystyleHero
        title="Digbeth Broadband Deals"
        subtitle="Compare fast and reliable internet packages for Birmingham's Digital Quarter"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Digbeth digital quarter with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Internet Solutions for the Digital Quarter"
          subtitle="Tailored broadband packages for creative and digital businesses"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps perfect for digital work"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Digital Ready"
            description="Dedicated business lines for creative and tech companies"
          />
          <CitystyleFeatureCard
            icon={Network}
            title="Creative Hub"
            description="Optimized for digital agencies and creative spaces"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Full Coverage"
            description="Extensive network coverage across Digbeth"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default DigbethBroadband;