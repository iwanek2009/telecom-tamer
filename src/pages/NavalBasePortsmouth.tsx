import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Ship, Clock, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const NavalBasePortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Service Personnel Deals",
      content: "Special packages designed for military personnel.",
      linkText: "View deals",
      linkHref: "#service-deals"
    },
    {
      title: "Flexible Contracts",
      content: "Short-term options available for service personnel.",
      linkText: "Learn more",
      linkHref: "#contracts"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Naval Base Portsmouth | Service Personnel Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals near Portsmouth Naval Base. Find flexible packages perfect for service personnel. Get reliable internet with short-term contract options."
        />
      </Helmet>

      <CitystyleHero
        title="Naval Base Portsmouth Broadband"
        subtitle="Find flexible broadband deals perfect for service personnel. Compare packages with short-term contracts and military discounts."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth Naval Base broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Broadband for Naval Base Portsmouth"
          subtitle="Reliable internet is essential for service personnel balancing work and personal life. Here's why our broadband solutions stand out for Naval Base Portsmouth:"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast and Dependable Connectivity"
            description="Enjoy high-speed internet designed for consistent performance, even during peak usage hours. Perfect for streaming, video calls, and gaming."
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Contracts"
            description="We understand the needs of service personnel. That's why we offer short-term and flexible contracts that adapt to your schedule and assignments."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Secure and Reliable"
            description="Our broadband packages come with built-in security features, ensuring safe online access for your personal and professional needs."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default NavalBasePortsmouth;