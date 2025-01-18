import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const RusholmeBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Student Housing Coverage",
      content: "Rusholme has excellent broadband coverage with student-friendly packages.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Shared Housing",
      content: "Compare packages perfect for student house shares.",
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
        <title>Rusholme Broadband | Compare Student Housing Internet</title>
        <meta 
          name="description" 
          content="Find the best student broadband deals in Rusholme. Compare flexible packages for shared houses. Get fast internet perfect for studying & streaming."
        />
      </Helmet>

      <CitystyleHero
        title="Rusholme Student Broadband"
        subtitle="Find the perfect internet package for your student house in Rusholme. Compare flexible broadband deals ideal for shared living."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Rusholme student area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Rusholme Student Broadband?"
          subtitle="Get the perfect internet package for shared student houses"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Perfect for multiple users"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="House Share Ready"
            description="Ideal for student properties"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Multiple Users"
            description="Reliable connection for everyone"
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

export default RusholmeBroadband;