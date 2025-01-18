import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, House, Tv, Phone, Laptop, Home, Users, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const PortsmouthHomeBroadband = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband Bundles",
      content: "Get the best value with combined TV and internet packages.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Available Providers",
      content: "Compare home packages from major providers in Portsmouth.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portsmouth Home Broadband | Compare TV & Internet Bundles</title>
        <meta 
          name="description" 
          content="Find the best broadband and TV bundles in Portsmouth. Compare complete home packages from leading providers. Get fast internet with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="Home Broadband & TV in Portsmouth"
        subtitle="Find the perfect home entertainment package. Compare broadband and TV bundles from leading providers."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth home broadband and TV packages"
        accordionItems={heroAccordionItems}
      />

      <CitystyleFeatureGrid
        title="Best TV & Broadband Bundles in Portsmouth"
        subtitle="Get everything you need - internet, TV, and phone packages all in one place"
      >
        <CitystyleFeatureCard
          icon={Wifi}
          title="Complete Home Entertainment"
          description="Stream, watch, and browse with packages that bring you the best TV channels, fast internet, and reliable phone service all together."
        />
        <CitystyleFeatureCard
          icon={Signal}
          title="Save with Bundles"
          description="Why pay separately? Get better value when you combine your services in one package. Perfect for Portsmouth homes who want it all."
        />
        <CitystyleFeatureCard
          icon={House}
          title="Customise Your Package"
          description="Build the perfect bundle for your home - choose your channels, pick your broadband speed, and add the extras you actually want."
        />
      </CitystyleFeatureGrid>

      <CitystyleContent>
        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <div className="mt-16 space-y-16">
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose a Bundle in Portsmouth?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Looking for the complete entertainment package? Portsmouth residents can now get everything they need in one simple deal. Whether you're following the latest shows in Southsea, need fast internet in Milton, or want a reliable home phone in Old Portsmouth, we'll help you find the perfect bundle.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4">
                <Tv className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">TV Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hundreds of channels</li>
                <li>• Latest box sets</li>
                <li>• Sports packages</li>
                <li>• Movie collections</li>
                <li>• Catch-up TV</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4">
                <Wifi className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Broadband Choices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Standard broadband</li>
                <li>• Superfast fibre</li>
                <li>• Ultra-fast options</li>
                <li>• Wi-Fi equipment included</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="mb-4">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Phone Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Evening & weekend calls</li>
                <li>• Anytime calls</li>
                <li>• International options</li>
                <li>• Keep your number</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Bundle Providers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Sky</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Award-winning Sky Q box</li>
                  <li>• Exclusive Sky originals</li>
                  <li>• Sports and cinema options</li>
                  <li>• Flexible packages</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Virgin Media</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fast fibre speeds</li>
                  <li>• Virgin TV 360 box</li>
                  <li>• Wide channel selection</li>
                  <li>• Mobile packages available</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-4">BT</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reliable service</li>
                  <li>• BT Sport included</li>
                  <li>• Complete Wi-Fi guarantee</li>
                  <li>• Flexible TV packages</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <Laptop className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Entertainment Lovers</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Latest shows and movies</li>
                  <li>• Sports coverage</li>
                  <li>• Box set binging</li>
                  <li>• Ultra HD content</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Busy Families</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Something for everyone</li>
                  <li>• Parental controls</li>
                  <li>• Multiple device support</li>
                  <li>• Reliable connections</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="mb-4">
                  <Home className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Smart Home Users</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fast, stable internet</li>
                  <li>• Smart TV integration</li>
                  <li>• Connected devices</li>
                  <li>• Future-ready setup</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="text-center bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Bundle?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Just pop your postcode below to see which TV and broadband bundles are available in your area of Portsmouth. Whether you're a sports fan, movie buff, or just want reliable services, we'll help you find the right package.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm max-w-xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Moving to Portsmouth?</h3>
              <p className="text-gray-600 mb-6">
                We can help you set up your new home with the perfect bundle. Many providers offer special deals for new customers.
              </p>
              <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Check Your Postcode Now
              </button>
            </div>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthHomeBroadband;