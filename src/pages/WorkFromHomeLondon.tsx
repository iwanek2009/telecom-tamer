import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Home, Wifi, Video } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const WorkFromHomeLondon = () => {
  const heroAccordionItems = [
    {
      title: "Reliable Connections",
      content: "Get stable internet perfect for video calls, cloud services, and remote collaboration with guaranteed uptime.",
      linkText: "Check reliability",
      linkHref: "#reliability"
    },
    {
      title: "Business Features",
      content: "Compare packages with static IPs, enhanced security, and priority support for remote workers.",
      linkText: "View features",
      linkHref: "#features"
    },
    {
      title: "Quick Setup",
      content: "Many providers offer priority installation for home workers, with some providing next-day setup in eligible areas.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Work From Home London | Compare Remote Working Internet</title>
        <meta 
          name="description" 
          content="Compare the best work from home broadband in London. Find reliable packages for remote working. Get stable connections for video calls & file sharing."
        />
      </Helmet>

      <CitystyleHero
        title="Work From Home Broadband in London"
        subtitle="Find the perfect internet package for remote working. Compare reliable broadband deals designed for home workers in London."
        image="/lovable-uploads/1581091226825-a6a2a5aee158.png"
        imageAlt="Professional working from home setup in London"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Work From Home Broadband?"
          subtitle="Get the perfect internet package for remote working in London"
        >
          <CitystyleFeatureCard
            icon={Home}
            title="Home Office Ready"
            description="Dedicated connections perfect for remote working"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Reliable Speed"
            description="Symmetric speeds up to 1Gbps for fast file sharing"
          />
          <CitystyleFeatureCard
            icon={Video}
            title="Video Call Ready"
            description="Stable connection for smooth video conferences"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default WorkFromHomeLondon;