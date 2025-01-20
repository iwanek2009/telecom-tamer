import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const VirginMediaSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Ultrafast Speeds",
      content: "Access Virgin Media's ultrafast network with speeds up to 1Gbps.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "TV Bundles",
      content: "Compare Virgin Media's broadband and TV packages.",
      linkText: "View bundles",
      linkHref: "#bundles"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Virgin Media Broadband Southampton | Compare Local Deals</title>
        <meta 
          name="description" 
          content="Explore Virgin Media broadband packages in Southampton. Compare ultrafast fibre deals with TV bundles and phone options. Get reliable speeds for your home."
        />
      </Helmet>

      <CitystyleHero
        title="Virgin Media Southampton"
        subtitle="Compare ultrafast broadband packages from Virgin Media. Find the perfect bundle with TV and phone options."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Virgin Media broadband coverage in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Virgin Media?"
          subtitle="Experience next-generation broadband"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultrafast"
            description="Speeds up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="TV Packages"
            description="Premium channels available"
          />
          <CitystyleFeatureCard
            icon={Phone}
            title="Phone Options"
            description="Flexible calling plans"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["Virgin Media"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default VirginMediaSouthampton;