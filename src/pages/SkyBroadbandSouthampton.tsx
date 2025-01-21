import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, PlayCircle, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SkyBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband Bundles",
      content: "Get the best entertainment packages with fast internet speeds.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Premium Channels",
      content: "Access exclusive Sky content and premium entertainment.",
      linkText: "Explore channels",
      linkHref: "#channels"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Sky Broadband Southampton | TV & Internet Packages</title>
        <meta 
          name="description" 
          content="Compare Sky broadband and TV bundles in Southampton. Find the perfect package with fast internet speeds and premium entertainment channels."
        />
      </Helmet>

      <CitystyleHero
        title="Sky Broadband Southampton"
        subtitle="Find the perfect combination of fast broadband and premium TV entertainment"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Sky broadband and TV services in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Top Benefits of Choosing Sky Broadband"
          subtitle="Are you looking for reliable internet options in Southampton? Sky Broadband offers excellent packages tailored to meet various needs, whether you're streaming, gaming, or working from home."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast and Reliable Speeds"
            description="Enjoy consistent speeds, perfect for HD streaming, gaming, and video calls without interruptions."
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Exclusive Sky Features"
            description="Sky offers flexible bundles combining broadband, TV, and mobile for maximum value."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Exceptional Customer Support"
            description="Benefit from award-winning customer service and easy setup options."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["Sky"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SkyBroadbandSouthampton;