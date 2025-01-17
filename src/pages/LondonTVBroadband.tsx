import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const LondonTVBroadband = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband Bundles",
      content: "Compare comprehensive entertainment packages with fast internet and premium TV channels from leading providers in London.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Entertainment Options",
      content: "Choose from various TV packages including sports, movies, and international channels, bundled with reliable broadband.",
      linkText: "Compare packages",
      linkHref: "#packages"
    },
    {
      title: "Installation & Setup",
      content: "Quick and professional installation available across London, with setup of both TV and internet services.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>London TV & Broadband | Compare Entertainment Packages</title>
        <meta 
          name="description" 
          content="Find the best TV and broadband bundles in London. Compare entertainment packages from leading providers. Get fast internet with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="TV & Broadband Packages in London"
        subtitle="Compare the best entertainment bundles from leading providers. Find packages combining fast internet with premium TV channels for your London home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="London cityscape with TV and internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our TV & Broadband Bundles?"
          subtitle="Get the perfect entertainment package for your London home"
        >
          <CitystyleFeatureCard
            icon={Tv}
            title="Premium TV Channels"
            description="Access to hundreds of channels including sports and movies"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Internet"
            description="Reliable broadband perfect for streaming and gaming"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Complete Coverage"
            description="Available across all London areas with quick installation"
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

export default LondonTVBroadband;