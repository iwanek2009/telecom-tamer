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
          title="Key Benefits of Student Broadband in Portswood"
          subtitle="Looking for the perfect student broadband deal in Portswood? Our comprehensive guide breaks down everything you need to know about getting connected, from comparing providers to securing the best student discounts."
        >
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Student-Specific Packages"
            description="Get access to exclusive 9-month contracts perfectly aligned with the academic year"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Speeds"
            description="Enjoy reliable connections up to 1Gbps - perfect for simultaneous streaming, gaming, and study sessions"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Payment Options"
            description="Choose from various payment plans, including monthly and upfront options with student discounts"
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