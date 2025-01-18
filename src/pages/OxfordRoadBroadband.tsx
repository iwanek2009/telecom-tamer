import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, GraduationCap, Book } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const OxfordRoadBroadband = () => {
  const heroAccordionItems = [
    {
      title: "University Area Coverage",
      content: "Oxford Road Corridor enjoys excellent broadband coverage with student-focused packages.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Academic Packages",
      content: "Compare packages designed for university life and research needs.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Quick Setup",
      content: "Get connected quickly with priority student installation.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Oxford Road Corridor Internet | Compare University Area Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals along Manchester's Oxford Road. Find student-focused packages near universities. Get reliable internet for studying & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Oxford Road Corridor Internet"
        subtitle="Find the perfect internet package along Manchester's Knowledge Corridor. Compare broadband deals ideal for university life."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Oxford Road university corridor with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Oxford Road Broadband?"
          subtitle="Get the perfect internet package for university life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Academic Speeds"
            description="Perfect for research and online learning"
          />
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="University Ready"
            description="Ideal for student and staff needs"
          />
          <CitystyleFeatureCard
            icon={Book}
            title="Study Focused"
            description="Reliable connection for academic work"
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

export default OxfordRoadBroadband;