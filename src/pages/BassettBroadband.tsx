import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Users, Bolt } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BassettBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Check broadband availability in your part of Bassett.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Top Providers",
      content: "Compare deals from major providers serving Bassett.",
      linkText: "View providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Bassett Broadband Deals | Local Southampton Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Bassett, Southampton. Find local internet packages with reliable speeds from top providers. Perfect for streaming, gaming and home working."
        />
      </Helmet>

      <CitystyleHero
        title="Bassett Broadband Deals"
        subtitle="Find the perfect internet package for your Bassett home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Broadband services in Bassett, Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Bassett Broadband?"
          subtitle="Local internet solutions for the Bassett community"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Reliable connections for streaming and gaming"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Local Support"
            description="Quick response times from local engineers"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Family Packages"
            description="Perfect for households of all sizes"
          />
          <CitystyleFeatureCard
            icon={Bolt}
            title="Quick Install"
            description="Get connected within days"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BassettBroadband;