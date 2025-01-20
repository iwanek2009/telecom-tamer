import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Shield, Bolt } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const StudentBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Student-Friendly Contracts",
      content: "Find flexible contracts that match your term times.",
      linkText: "View deals",
      linkHref: "#deals"
    },
    {
      title: "Shared Houses",
      content: "Perfect for multiple users with high-speed connections.",
      linkText: "Compare packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Student Broadband Deals Southampton | Flexible Internet</title>
        <meta 
          name="description" 
          content="Compare student broadband deals in Southampton. Find flexible contracts with fast speeds perfect for shared houses and student accommodation."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband Southampton"
        subtitle="Fast, flexible internet perfect for student life"
        image="/lovable-uploads/1519389950473-47ba0277781c.jpg"
        imageAlt="Students using internet in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Perfect for Students"
          subtitle="Tailored broadband solutions for university life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for streaming, gaming and studying"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Shared Living"
            description="Ideal for multiple users and shared houses"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Flexible Terms"
            description="9-month contracts available for term time"
          />
          <CitystyleFeatureCard
            icon={Bolt}
            title="Quick Setup"
            description="Get connected within days of moving in"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default StudentBroadbandSouthampton;