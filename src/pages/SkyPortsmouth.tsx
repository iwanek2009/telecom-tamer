import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Laptop, PlayCircle, Trophy, Film, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SkyPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband",
      content: "Compare complete entertainment bundles with fast broadband.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Channel Packages",
      content: "Explore Sky TV packages with premium channels.",
      linkText: "View channels",
      linkHref: "#channels"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Sky TV & Broadband Portsmouth | Compare Entertainment Bundles</title>
        <meta 
          name="description" 
          content="Find the best Sky TV and broadband bundles in Portsmouth. Compare complete entertainment packages. Get fast internet with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="Sky TV & Broadband Portsmouth"
        subtitle="Compare complete entertainment packages from Sky. Find the perfect TV and broadband bundle for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Sky TV and broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Sky TV & Broadband?"
          subtitle="Sky is synonymous with premium entertainment and cutting-edge technology. By combining Sky TV with superfast broadband, you get a seamless experience for streaming, gaming, and on-demand viewing. Here's why Sky stands out in Portsmouth:"
        >
          <CitystyleFeatureCard
            icon={Tv}
            title="Award-Winning Entertainment"
            description="Sky offers access to the best shows, movies, and live sports. From exclusive Sky Originals to blockbuster films and Premier League coverage, there's something for everyone."
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Broadband"
            description="Sky Broadband delivers speeds of up to 500Mbps, ensuring your household stays connected. Stream, game, and browse without lag or buffering."
          />
          <CitystyleFeatureCard
            icon={Laptop}
            title="Seamless Integration"
            description="With the Sky Q box, you can pause, rewind, and record live TV or download shows to watch offline. Plus, access Netflix, Disney+, and other apps all in one place."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <section className="py-16 bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Explore Sky TV & Broadband Bundles</h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Sky makes it easy to find a package that suits your household. Whether you're looking for high-speed internet, incredible TV options, or both, there's a bundle for everyone in Portsmouth.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <CitystyleFeatureCard
                icon={PlayCircle}
                title="Essential Entertainment"
                description="Enjoy over 100 channels, including Sky Atlantic, Sky One, and Sky Witness, alongside streaming apps like Netflix."
              />
              <CitystyleFeatureCard
                icon={Trophy}
                title="Sky Sports Package"
                description="Watch live coverage of Premier League, Formula 1, cricket, and more with Sky Sports. Perfect for sports enthusiasts."
              />
              <CitystyleFeatureCard
                icon={Film}
                title="Ultimate On-Demand"
                description="Get access to Sky Cinema, Netflix, and Disney+ for endless entertainment on demand."
              />
              <CitystyleFeatureCard
                icon={Zap}
                title="Sky Broadband & TV Combo"
                description="Combine superfast broadband with premium TV bundles for maximum value and convenience."
              />
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compare Sky TV & Broadband Packages</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-4">Bundle</th>
                      <th className="text-left py-4 px-4">Broadband Speed</th>
                      <th className="text-left py-4 px-4">Key Features</th>
                      <th className="text-left py-4 px-4">Monthly Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Sky Essential</td>
                      <td className="py-4 px-4">Up to 36Mbps</td>
                      <td className="py-4 px-4">100+ channels, Sky Q box</td>
                      <td className="py-4 px-4">From £29/month</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Sky Superfast</td>
                      <td className="py-4 px-4">Up to 67Mbps</td>
                      <td className="py-4 px-4">Family-friendly TV + Netflix included</td>
                      <td className="py-4 px-4">From £39/month</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Sky Sports Bundle</td>
                      <td className="py-4 px-4">Up to 67Mbps</td>
                      <td className="py-4 px-4">All Sky Sports channels + fibre broadband</td>
                      <td className="py-4 px-4">From £49/month</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4">Sky Ultimate On-Demand</td>
                      <td className="py-4 px-4">Up to 100Mbps</td>
                      <td className="py-4 px-4">Sky Cinema, Netflix, Disney+ included</td>
                      <td className="py-4 px-4">From £55/month</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">Sky Ultrafast Plus</td>
                      <td className="py-4 px-4">Up to 500Mbps</td>
                      <td className="py-4 px-4">Premium broadband + full Sky TV bundle</td>
                      <td className="py-4 px-4">From £65/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">Prices are dynamic and subject to change. Please check the Sky website for the latest offers and availability.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Sky TV & Broadband is Worth It</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Unmatched Entertainment</h4>
                  <p className="text-gray-600">Exclusive access to Sky Originals, live sports, and blockbuster movies.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Reliable Broadband</h4>
                  <p className="text-gray-600">Sky's ultra-fast and stable internet keeps you connected when it matters most.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Family-Friendly Features</h4>
                  <p className="text-gray-600">Set parental controls, create profiles, and enjoy safe browsing for all ages.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">On-the-Go Viewing</h4>
                  <p className="text-gray-600">With Sky Go, you can take your entertainment anywhere, anytime.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Eco-Friendly Approach</h4>
                  <p className="text-gray-600">Sky is committed to reducing its environmental impact, offering eco-friendly equipment and packaging.</p>
                </div>
              </div>
              <p className="text-center mt-8 text-lg font-medium text-gray-900">
                Don't miss out on the latest Sky TV & Broadband deals in Portsmouth! Upgrade your home entertainment and internet today to experience unbeatable value and quality.
              </p>
            </div>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SkyPortsmouth;