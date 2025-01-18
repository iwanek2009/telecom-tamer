import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Clock, PoundSign } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const StudentBroadbandPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Student Deals",
      content: "Find flexible contracts perfect for term-time accommodation.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Fast Setup",
      content: "Quick installation to get you connected for your studies.",
      linkText: "Check availability",
      linkHref: "#availability"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Student Broadband Portsmouth | Compare University Area Deals</title>
        <meta 
          name="description" 
          content="Find the perfect student broadband in Portsmouth. Compare flexible packages near university areas. Get fast internet ideal for studying, streaming & shared houses."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband in Portsmouth"
        subtitle="Compare student-friendly broadband deals with flexible contracts. Perfect for shared houses and student accommodation."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth student broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Student Broadband?"
          subtitle="Get connected with the perfect package for university life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for streaming and online learning"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Shared Living"
            description="Ideal for student house shares"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Terms"
            description="Contracts aligned with term times"
          />
          <CitystyleFeatureCard
            icon={PoundSign}
            title="Student Deals"
            description="Special rates for students"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default StudentBroadbandPortsmouth;