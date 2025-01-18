import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const ChorltonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Family-Friendly Packages",
      content: "Discover broadband packages designed for busy households with multiple devices and users.",
      linkText: "View family deals",
      linkHref: "#family-deals"
    },
    {
      title: "Local Coverage",
      content: "Check availability and compare deals from major providers serving the Chorlton area.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Chorlton Internet | Compare Family Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Chorlton. Find family-friendly packages from top providers. Get fast, reliable internet perfect for busy households."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Chorlton"
        subtitle="Find the perfect family-friendly internet package in Chorlton. Compare deals from leading providers for reliable home broadband."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Chorlton area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Chorlton Broadband Deals?"
          subtitle="Get the perfect internet package for your Chorlton home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Family-Optimized"
            description="Perfect for multiple devices and simultaneous streaming"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Home-Ready"
            description="Reliable connections for work, study, and entertainment"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across Chorlton"
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

export default ChorltonBroadband;