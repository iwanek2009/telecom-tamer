import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Download, Tv } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const VirginMediaManchester = () => {
  const heroAccordionItems = [
    {
      title: "Cable Coverage",
      content: "Virgin Media's cable network covers most of Manchester, offering speeds up to 1.1Gbps.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "TV Bundles",
      content: "Combine your broadband with Virgin Media TV packages for entertainment.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Installation",
      content: "Professional installation required for new cable connections.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Virgin Media Manchester | Compare Cable Internet Deals</title>
        <meta 
          name="description" 
          content="Compare Virgin Media broadband deals in Manchester. Find ultra-fast cable packages for your area. Get reliable speeds for streaming, gaming & working."
        />
      </Helmet>

      <CitystyleHero
        title="Virgin Media Broadband Manchester"
        subtitle="Compare Virgin Media's cable broadband packages in Manchester. Get ultra-fast speeds and reliable connectivity for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Virgin Media broadband coverage in Manchester"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Virgin Media in Manchester?"
          subtitle="Get connected with Manchester's leading cable broadband provider"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Cable Network"
            description="Dedicated cable infrastructure for reliable speeds"
          />
          <CitystyleFeatureCard
            icon={Download}
            title="Fast Speeds"
            description="Download speeds up to 1.1Gbps available"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="TV Bundles"
            description="Combine with TV packages for entertainment"
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

export default VirginMediaManchester;