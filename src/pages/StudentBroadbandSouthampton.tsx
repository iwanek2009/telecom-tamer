import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Shield } from 'lucide-react';
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
          title="Best Student Broadband Deals in Southampton"
          subtitle="Compare budget-friendly student broadband deals in Southampton! Compare speeds, prices, and flexible contracts tailored for university life."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Blazing-Fast Speeds"
            description="Stream lectures, game, and binge-watch with 100Mbps+ fibre"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Unbeatable Prices"
            description="Plans from £15/month, perfect for tight budgets"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="No Long-Term Hassles"
            description="Short 9–12-month contracts or rolling monthly deals"
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