import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Globe, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { ManchesterConnectionTypes } from '@/components/manchester/ManchesterConnectionTypes';
import { ManchesterConsiderations } from '@/components/manchester/ManchesterConsiderations';
import { ManchesterSteps } from '@/components/manchester/ManchesterSteps';

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

        {/* Why Consider Section */}
        <div className="mt-16 space-y-12">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Consider TV & Internet Bundles in Manchester?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              With Manchester's vibrant culture and tech-savvy population, having a robust internet connection plus top-tier entertainment options is a must. TV & internet bundles combine broadband service with popular TV channels, on-demand content, and often even phone or mobile plans. By merging these services, you can potentially save on monthly bills, streamline management of your home utilities, and enjoy a richer entertainment experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're a sports fan, a movie buff, or a remote worker who needs a dependable connection, a complete home bundle can offer you both convenience and cost-effectiveness.
            </p>
          </div>

          {/* How to Start Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Start Your Search</h2>
            <p className="text-gray-600 mb-8">
              Selecting the right TV and internet package involves balancing budget, desired features, and availability. Here's a quick roadmap:
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Check What's Available</h3>
                  <p className="text-gray-600">Use a postcode checker to see which providers operate in your part of Manchester.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Compare Plans & Prices</h3>
                  <p className="text-gray-600">Filter by broadband speed, TV channel lineup, and any extras like inclusive calls.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review Contract Terms</h3>
                  <p className="text-gray-600">Note contract lengths, installation fees, and mid-contract price changes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Finalize Your Bundle</h3>
                  <p className="text-gray-600">Sign up through the provider's website and set an installation or activation date.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Factors to Consider Section */}
          <ManchesterConsiderations />
          <ManchesterSteps />
          <ManchesterConnectionTypes />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ManchesterTVBroadband;
