import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Package, PoundSterling, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BroadbandTVSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Why bundle broadband and TV?",
      content: "Combining your broadband and TV services often leads to better value and exclusive entertainment options. Many providers offer special discounts on bundles.",
      linkText: "Learn more about bundles",
      linkHref: "#bundles"
    },
    {
      title: "What channels are included?",
      content: "Different packages include various channel selections, from basic entertainment to premium sports and movies. Compare providers to find the perfect mix.",
      linkText: "View channel lists",
      linkHref: "#channels"
    },
    {
      title: "Installation and setup",
      content: "Most providers offer professional installation for both broadband and TV services, ensuring everything works perfectly from day one.",
      linkText: "Check installation details",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Broadband & TV Deals Southampton | Compare Best Home Bundles & Save</title>
        <meta 
          name="description" 
          content="Discover the best broadband and TV deals in Southampton. Compare home bundles from top providers to enjoy fast internet and premium entertainment in one affordable package. Start comparing today!"
        />
      </Helmet>

      <CitystyleHero
        title="Broadband & TV Deals in Southampton"
        subtitle="Get the perfect entertainment package with fast broadband and your favorite TV channels. Compare the best bundle deals from leading providers."
        image="/lovable-uploads/1721322800607-8c38375eef04.jpg"
        imageAlt="Living room setup with TV and internet connection"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Broadband & TV Bundles?"
          subtitle="Get more entertainment and better value with our carefully selected packages"
        >
          <CitystyleFeatureCard
            icon={Package}
            title="Bundle Savings"
            description="Save money by combining your broadband and TV services into one great value package"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Premium Entertainment"
            description="Access hundreds of channels, box sets, and streaming apps all in one place"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Connection"
            description="Enjoy buffer-free streaming with our high-speed broadband options"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"package_types":["BROADBAND_TV"]}'
          />
        </div>

        <div className="mt-16 bg-gradient-to-b from-white to-gray-50 py-12 rounded-2xl shadow-sm">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Why Choose Broadband & TV Bundles in Southampton?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              In our connected lives today, fast internet and good TV are crucial for most families. The answer lies in broadband and TV bundles which combine a broadband package with your favourite TV channels, on-demand services and even subscriptions to streaming platforms, such as Netflix or Sky Sports. Whether you're a film fanatic, sports devotee or family, looking for a wide range of entertainment options, these bundles are hard to beat in value and ease of use.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 py-12">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Find the Best Broadband & TV Deals in Southampton
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Finding the right bundle is simple with our three-step process:
            </p>
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block mb-1">Enter Your Postcode</span>
                  <span className="text-gray-600">Check which providers and packages are available in your area.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block mb-1">Compare Deals</span>
                  <span className="text-gray-600">Filter results by speed, TV channels, price, and contract length.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block mb-1">Switch with Confidence</span>
                  <span className="text-gray-600">Complete your order online and enjoy a seamless transition to your new provider.</span>
                </div>
              </li>
            </ul>
            <div className="text-center">
              <a 
                href="#compare-deals" 
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3"
              >
                Start comparing broadband and TV bundles in Southampton today!
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BroadbandTVSouthampton;
