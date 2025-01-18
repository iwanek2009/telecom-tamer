import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, GraduationCap, Clock, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const UniversityPortsmouthBroadband = () => {
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
        <title>University of Portsmouth Broadband | Student Internet Deals</title>
        <meta 
          name="description" 
          content="Find student-friendly broadband near University of Portsmouth. Compare flexible packages perfect for student accommodation. Get fast internet for studying & streaming."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband at University of Portsmouth"
        subtitle="Compare student-friendly broadband deals with flexible contracts. Perfect for term-time accommodation near campus."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="University of Portsmouth student broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Student Broadband?"
          subtitle="Get connected with the perfect package for university life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for streaming and online learning"
          />
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Student Friendly"
            description="Flexible contracts aligned with term times"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Quick Setup"
            description="Fast installation to get you connected"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Service"
            description="Stable connection for your studies"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default UniversityPortsmouthBroadband;