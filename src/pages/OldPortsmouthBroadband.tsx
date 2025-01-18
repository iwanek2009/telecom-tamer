import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const OldPortsmouthBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Check which providers serve your area of Old Portsmouth.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Best Deals",
      content: "Compare the latest broadband offers in Old Portsmouth.",
      linkText: "View deals",
      linkHref: "#deals"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Old Portsmouth Internet | Compare Broadband Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Old Portsmouth. Compare packages from leading providers. Get fast, reliable internet for streaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Historic Quarter, Modern Internet"
        subtitle="Find the perfect broadband package in Old Portsmouth's unique setting"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Old Portsmouth internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Old Portsmouth Deals?"
          subtitle="Get connected with the perfect local package"
        >
          <CitystyleFeatureCard
            icon={House}
            title="Heritage-Friendly Installation"
            description="Get connected with providers who understand Old Portsmouth's historic buildings. Expert installation that respects listed properties and period features."
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Reliable Waterfront Connection"
            description="Enjoy stable internet whether you're in a Spice Island apartment or a High Street residence. Perfect for coastal living and working."
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Community-Focused Service"
            description="Packages designed for Old Portsmouth's diverse community - from Camber Dock businesses to Point residents."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default OldPortsmouthBroadband;