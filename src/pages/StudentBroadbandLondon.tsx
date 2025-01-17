import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { GraduationCap, Wifi, Users, BookOpen, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const StudentBroadbandLondon = () => {
  const heroAccordionItems = [
    {
      title: "Student-Friendly Contracts",
      content: "Find flexible 9-month contracts that align with the academic year, with options from major providers like Virgin Media, BT, and Sky.",
      linkText: "View contracts",
      linkHref: "#contracts"
    },
    {
      title: "University Area Coverage",
      content: "Compare deals available near major London universities including UCL, King's College, LSE, Imperial, and more.",
      linkText: "Check availability",
      linkHref: "#availability"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Student Broadband London | Compare University Area Deals</title>
        <meta 
          name="description" 
          content="Find the best student broadband deals in London. Compare packages near universities and student areas. Flexible contracts and fast speeds for studying & streaming."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband Deals in London"
        subtitle="Compare flexible broadband packages perfect for students. Find deals with short-term contracts, fast speeds, and great value near London universities."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Students using laptops with fast internet connection"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Student Broadband?"
          subtitle="Get connected with broadband tailored for student life"
        >
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Student-Friendly"
            description="Flexible contracts aligned with term times"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for online lectures and research"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Share-House Ready"
            description="Ideal for multiple users and devices"
          />
          <CitystyleFeatureCard
            icon={BookOpen}
            title="Study Support"
            description="Reliable connection for virtual learning"
          />
          <CitystyleFeatureCard
            icon={Monitor}
            title="Entertainment Ready"
            description="Stream, game, and socialize online"
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

export default StudentBroadbandLondon;