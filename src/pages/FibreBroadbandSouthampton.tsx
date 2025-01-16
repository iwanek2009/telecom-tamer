import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, House, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';

const FibreBroadbandSouthampton = () => {
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
        <title>Fibre Broadband Southampton | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best fibre broadband deals in Southampton. Find exclusive offers from Virgin Media, BT, Sky and local providers. Student deals and ultrafast packages available."
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Southampton"
        subtitle="Find the best fibre broadband deals in Southampton. Compare speeds, prices, and packages from top providers"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Fibre Broadband in Southampton?"
          subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps with full fibre coverage across Southampton"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Local Support"
            description="Benefit from local installation teams and dedicated customer service"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all Southampton neighborhoods"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandSouthampton;