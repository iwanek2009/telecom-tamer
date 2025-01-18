import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, GraduationCap, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const FallowfieldBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Student Area Coverage",
      content: "Fallowfield has excellent broadband coverage with flexible student-friendly packages.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Flexible Contracts",
      content: "Compare 9-month and 12-month contracts perfect for academic years.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Quick Setup",
      content: "Get connected quickly with rapid installation options.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fallowfield Broadband | Compare Student Internet Packages</title>
        <meta 
          name="description" 
          content="Find student-friendly broadband in Fallowfield. Compare flexible packages perfect for student houses. Get fast speeds for studying, streaming & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Fallowfield Student Broadband"
        subtitle="Find the perfect internet package for your student house. Compare flexible broadband deals ideal for studying and entertainment."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Fallowfield student area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Fallowfield Student Broadband?"
          subtitle="Get the perfect internet package for your student life"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for streaming and online learning"
          />
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Student Focused"
            description="Packages designed for student life"
          />
          <CitystyleFeatureCard
            icon={Calendar}
            title="Flexible Terms"
            description="9-month and 12-month contracts available"
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

export default FallowfieldBroadband;