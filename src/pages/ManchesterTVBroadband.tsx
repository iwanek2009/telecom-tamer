import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { ManchesterConnectionTypes } from '@/components/manchester/ManchesterConnectionTypes';
import { ManchesterConsiderations } from '@/components/manchester/ManchesterConsiderations';
import { ManchesterSteps } from '@/components/manchester/ManchesterSteps';
import { ManchesterBundleUp } from '@/components/manchester/ManchesterBundleUp';
import { ManchesterFAQ } from '@/components/manchester/ManchesterFAQ';

const heroAccordionItems = [
  {
    title: "TV & Internet Bundles",
    content: "Compare comprehensive entertainment packages with fast internet and premium TV channels from leading providers in Manchester.",
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
    content: "Quick and professional installation available across Manchester, with setup of both TV and internet services.",
    linkText: "Learn more",
    linkHref: "#installation"
  }
];

const ManchesterTVBroadband = () => {
  return (
    <CitystyleTemplate>
      <Helmet>
        <title>TV & Internet Packages in Manchester | Compare Home Bundle Packages</title>
        <meta 
          name="description" 
          content="Find the best TV and internet bundles in Manchester. Compare complete home packages from leading providers. Get fast broadband with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="TV & Internet Packages in Manchester"
        subtitle="Compare the best entertainment bundles from leading providers. Find packages combining fast internet with premium TV channels for your Manchester home."
        image="/lovable-uploads/1721322800607-8c38375eef04.jpg"
        imageAlt="Living room setup with TV and internet connection"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our TV & Internet Bundles?"
          subtitle="Get the perfect entertainment package for your Manchester home"
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
            description="Available across all Manchester areas with quick installation"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"package_types":["BROADBAND_TV"]}'
          />
        </div>

        <div className="mt-16 space-y-12">
          <ManchesterConsiderations />
          <ManchesterSteps />
          <ManchesterConnectionTypes />
          <ManchesterBundleUp />
          <ManchesterFAQ />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ManchesterTVBroadband;