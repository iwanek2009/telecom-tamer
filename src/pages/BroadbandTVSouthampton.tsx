import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Package, PoundSterling, ArrowRight, ExternalLink } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';

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

  const scrollToWidget = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('compare-deals');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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

        <div id="compare-deals" className="mt-12">
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
              <button 
                onClick={scrollToWidget}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3"
              >
                Compare these deals and find the best broadband and TV bundle for your home
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* New Provider Information Section */}
        <div className="mt-16 space-y-12">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Broadband & TV Providers in Southampton</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Provider</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Broadband Speed</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">TV Channels</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Monthly Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Contract Length</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-sm">Virgin Media</td>
                    <td className="px-4 py-4 text-sm">Up to 1Gb</td>
                    <td className="px-4 py-4 text-sm">200+ channels</td>
                    <td className="px-4 py-4 text-sm">From £35</td>
                    <td className="px-4 py-4 text-sm">18 months</td>
                    <td className="px-4 py-4 text-sm">Free setup, Netflix included</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-sm">Sky</td>
                    <td className="px-4 py-4 text-sm">Up to 500Mb</td>
                    <td className="px-4 py-4 text-sm">Sky Sports, Sky Cinema</td>
                    <td className="px-4 py-4 text-sm">From £40</td>
                    <td className="px-4 py-4 text-sm">18 months</td>
                    <td className="px-4 py-4 text-sm">Free Sky Q box, Netflix</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-sm">BT</td>
                    <td className="px-4 py-4 text-sm">Up to 900Mb</td>
                    <td className="px-4 py-4 text-sm">BT Sport, AMC, Eurosport</td>
                    <td className="px-4 py-4 text-sm">From £45</td>
                    <td className="px-4 py-4 text-sm">24 months</td>
                    <td className="px-4 py-4 text-sm">£20 reward card, free router</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-sm">Vodafone</td>
                    <td className="px-4 py-4 text-sm">Up to 500Mb</td>
                    <td className="px-4 py-4 text-sm">Basic TV package</td>
                    <td className="px-4 py-4 text-sm">From £30</td>
                    <td className="px-4 py-4 text-sm">12 months</td>
                    <td className="px-4 py-4 text-sm">No setup fee, 24/7 support</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                External Links: 
              </span>
              {['Virgin Media', 'Sky', 'BT', 'Vodafone'].map((provider) => (
                <a
                  key={provider}
                  href="#"
                  className="inline-flex items-center gap-1 text-primary hover:underline"
                >
                  {provider}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>

          {/* What to Look for Section */}
          <div className="bg-gradient-to-br from-[#F8F9FF] to-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Look for in a Broadband & TV Bundle</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Broadband Speed",
                  description: "Ensure the package meets your internet needs, whether for streaming, gaming, or working from home."
                },
                {
                  title: "TV Channels",
                  description: "Check if the bundle includes your favourite channels or streaming services like Netflix, Sky Sports, or BT Sport."
                },
                {
                  title: "Cost",
                  description: "Compare the total cost, including setup fees and any price increases after the initial contract period."
                },
                {
                  title: "Contract Length",
                  description: "Choose a contract that suits your needs, whether short-term (12 months) or long-term (24 months)."
                }
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Save Section */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Save on Your Broadband & TV Bundle</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compare Providers</h3>
                <p className="text-gray-600">Use our comparison tool to find the best deals in your area.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Look for Discounts</h3>
                <p className="text-gray-600">Many providers offer reduced rates for the first 6-12 months.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Check for Freebies</h3>
                <p className="text-gray-600">Some bundles include free setup, streaming subscriptions, or premium TV channels.</p>
              </div>
            </div>
            <Link to="/guide/save-money-broadband-tv" className="inline-flex items-center text-primary hover:underline mt-6">
              Read our guide on How to Save Money on Broadband & TV Bundles
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Current Best Deals Section */}
          <div className="bg-gradient-to-br from-[#F8F9FF] to-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Best Broadband & TV Deals in Southampton</h2>
            <div className="space-y-4">
              {[
                {
                  provider: "Virgin Media",
                  details: "Up to 1Gb broadband + 200+ TV channels + Netflix for £35/month (18-month contract)"
                },
                {
                  provider: "Sky",
                  details: "Up to 500Mb broadband + Sky Sports & Cinema + Netflix for £40/month (18-month contract)"
                },
                {
                  provider: "BT",
                  details: "Up to 900Mb broadband + BT Sport + AMC for £45/month (24-month contract)"
                }
              ].map((deal) => (
                <div key={deal.provider} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{deal.provider}</h3>
                  <p className="text-gray-600">{deal.details}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:gap-3">
                Compare these deals and find the best broadband and TV bundle for your home
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BroadbandTVSouthampton;
