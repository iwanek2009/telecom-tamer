import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const VirginMediaLondon = () => {
  const heroAccordionItems = [
    {
      title: "Cable Network Coverage",
      content: "Virgin Media's cable network covers most of London, offering speeds up to 1.1Gbps through their advanced fiber-coax infrastructure.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "TV Bundles",
      content: "Combine your broadband with Virgin Media TV packages featuring premium channels and streaming apps.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Installation & Setup",
      content: "Professional installation available within 7 days in most London areas, with quick self-setup options for some packages.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Virgin Media London | Compare Cable Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best Virgin Media deals in London. Compare cable broadband packages with ultra-fast speeds. Perfect for streaming, gaming & whole-home connectivity."
        />
      </Helmet>

      <CitystyleHero
        title="Virgin Media Broadband Deals in London"
        subtitle="Compare the fastest cable broadband packages from Virgin Media. Find reliable connections perfect for streaming, gaming, and whole-home connectivity."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Virgin Media broadband coverage in London"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Virgin Media Broadband?"
          subtitle="Get the perfect cable broadband package for your London home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access speeds up to 1.1Gbps with Virgin Media's cable network"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="TV Bundles"
            description="Combine broadband with premium TV packages and streaming"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Service"
            description="Dedicated cable network for consistent performance"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"provider": "Virgin Media"}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default VirginMediaLondon;