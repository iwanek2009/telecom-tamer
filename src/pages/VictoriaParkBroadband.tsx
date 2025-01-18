import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const VictoriaParkBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Student Area Coverage",
      content: "Victoria Park has excellent broadband coverage with student-friendly packages.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Flexible Contracts",
      content: "Compare packages designed for student accommodation.",
      linkText: "View packages",
      linkHref: "#packages"
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
        <title>Victoria Park Internet | Compare Student Accommodation Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Victoria Park. Find student-friendly packages from top providers. Get reliable internet perfect for university life."
        />
      </Helmet>

      <CitystyleHero
        title="Victoria Park Student Broadband"
        subtitle="Find the perfect internet package for your Victoria Park accommodation. Compare student-friendly broadband deals."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Victoria Park student area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Victoria Park Student Broadband?"
          subtitle="Get the perfect internet package for student living"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for studying and streaming"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Student Ready"
            description="Ideal for student accommodation"
          />
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Study Focused"
            description="Reliable connection for university work"
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

export default VictoriaParkBroadband;