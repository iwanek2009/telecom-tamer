import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Palette } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SalfordBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Media City Coverage",
      content: "Salford and Media City enjoy excellent broadband coverage with speeds up to 1Gbps through major providers.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Creative & Home Packages",
      content: "Compare specialized packages designed for creative businesses and residents in Salford.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Quick Installation",
      content: "Most providers offer priority installation in Salford, with some providing next-day setup.",
      linkText: "Installation info",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Salford Broadband | Compare Media City Internet Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband in Salford & Media City. Compare packages from leading providers. Get ultra-fast internet perfect for creative work & digital living."
        />
      </Helmet>

      <CitystyleHero
        title="Salford Broadband Deals"
        subtitle="Find the perfect internet package in Salford & Media City. Compare high-speed broadband deals ideal for creative work and digital living."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Salford and Media City with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Salford Broadband Deals?"
          subtitle="Get the perfect internet package for your Salford location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 1Gbps in the Salford area"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Media City Ready"
            description="Perfect for creative and digital businesses"
          />
          <CitystyleFeatureCard
            icon={Palette}
            title="Creative Focus"
            description="Ideal for content creation and streaming"
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

export default SalfordBroadband;