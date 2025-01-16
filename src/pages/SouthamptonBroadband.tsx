import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe2, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';

const SouthamptonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Southampton enjoys extensive fibre coverage with speeds up to 1Gbps available in many areas through providers like Virgin Media and BT.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Student-Friendly Deals",
      content: "Special broadband packages available for students at Southampton University and Solent University areas.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Southampton.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Southampton Broadband Deals | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Southampton. Find exclusive offers from Virgin Media, BT, Sky and local providers. Student deals and ultrafast packages available."
        />
      </Helmet>

      <CitystyleHero
        title="Southampton Broadband Deals"
        subtitle="Find the best broadband deals in Southampton. Compare speeds, prices, and packages from top providers to get the perfect internet connection"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Broadband in Southampton?"
          subtitle="Experience reliable internet connectivity tailored to your needs"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access ultrafast fibre broadband with speeds up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Local Support"
            description="Get dedicated customer service from local installation teams"
          />
          <CitystyleFeatureCard
            icon={Globe2}
            title="Wide Coverage"
            description="Extensive network coverage across Southampton and surrounding areas"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SouthamptonBroadband;