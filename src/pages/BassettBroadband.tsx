import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Users } from 'lucide-react';
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
          title="Key Benefits of Broadband in Bassett"
          subtitle="This guide simplifies the process, helping you secure a reliable and budget-friendly internet package"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Speeds"
            description="Enjoy seamless downloads with speeds up to 1Gbps, perfect for streaming HD content and gaming without interruptions"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Connections"
            description="Stay connected with consistent service, even during peak times, ensuring your work or entertainment isn't disrupted"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Affordable Packages"
            description="Choose from a variety of plans designed to fit any budget, from simple broadband-only deals to comprehensive bundles"
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