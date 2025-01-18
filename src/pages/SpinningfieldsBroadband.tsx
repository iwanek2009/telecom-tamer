import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Briefcase } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SpinningfieldsBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Business District Coverage",
      content: "Spinningfields enjoys excellent broadband coverage with speeds up to 1Gbps through major providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business Packages",
      content: "Compare specialized packages designed for businesses in Spinningfields.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Quick Installation",
      content: "Most providers offer priority installation for businesses in Spinningfields.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Spinningfields Broadband | Compare Business District Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband in Spinningfields. Compare business-ready packages from leading providers. Get reliable, high-speed internet for your workplace."
        />
      </Helmet>

      <CitystyleHero
        title="Spinningfields Broadband Deals"
        subtitle="Find the perfect internet package for your Spinningfields business. Compare high-speed broadband deals ideal for modern workplaces."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Spinningfields business district with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Spinningfields Broadband Deals?"
          subtitle="Get the perfect internet package for your business location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 1Gbps in the Spinningfields area"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Business Ready"
            description="Perfect for modern office environments"
          />
          <CitystyleFeatureCard
            icon={Briefcase}
            title="Professional Focus"
            description="Ideal for business operations and cloud services"
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

export default SpinningfieldsBroadband;