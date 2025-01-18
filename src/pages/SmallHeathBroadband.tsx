import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SmallHeathBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Family-Friendly Packages",
      content: "Find broadband deals perfect for families with multiple users and devices. Compare packages with unlimited data and parental controls.",
      linkText: "View packages",
      linkHref: "#packages"
    },
    {
      title: "Local Coverage",
      content: "Check availability and compare deals from major providers serving the Small Heath area.",
      linkText: "Check coverage",
      linkHref: "#coverage"
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
        <title>Small Heath Broadband | Compare Family Internet Packages</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Small Heath. Find family-friendly internet packages from top providers. Get reliable speeds for multiple devices & users."
        />
      </Helmet>

      <CitystyleHero
        title="Internet Deals in Small Heath"
        subtitle="Compare family-friendly broadband packages from leading providers in Small Heath. Find reliable connections perfect for households with multiple users and devices."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Small Heath area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Small Heath Internet Deals?"
          subtitle="Get the perfect broadband package for your family home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Family Speeds"
            description="High-speed internet perfect for multiple devices and users"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Multi-User Ready"
            description="Reliable connections for the whole family to use simultaneously"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Family Safety"
            description="Options with built-in security and parental controls"
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

export default SmallHeathBroadband;