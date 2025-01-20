import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, GraduationCap, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PortswoodBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Student Deals",
      content: "Portswood offers student-friendly broadband packages with flexible contracts.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Quick Setup",
      content: "Get connected quickly with student priority installation.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portswood Internet Deals | Student Broadband Offers</title>
        <meta 
          name="description" 
          content="Looking for student-friendly broadband in Portswood? Compare flexible internet packages with short-term contracts. Perfect for university accommodation with fast speeds."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband in Portswood"
        subtitle="Find flexible internet packages perfect for student life. Compare short-term contracts with fast, reliable speeds."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portswood student area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Student Broadband?"
          subtitle="Get the perfect internet package for university life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for streaming and studying"
          />
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Student Ready"
            description="Ideal for shared houses"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Terms"
            description="9-month contracts available"
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

export default PortswoodBroadband;