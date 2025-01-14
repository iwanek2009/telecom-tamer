import React, { useEffect } from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Wifi, Zap, Rocket, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';
import { loadStickeeScript, cleanupStickeeScript } from '@/utils/stickeeLoader';

const heroAccordionItems = [
  {
    title: "What is ultrafast broadband?",
    content: "Ultrafast broadband offers speeds of 100Mbps or higher, perfect for heavy internet users, gamers, and households with multiple devices streaming 4K content simultaneously.",
  },
  {
    title: "Why choose ultrafast broadband?",
    content: "With ultrafast speeds, you can download HD movies in minutes, enjoy lag-free gaming, and handle multiple 4K streams without buffering. Perfect for modern digital households.",
  },
  {
    title: "Is ultrafast broadband available in my area?",
    content: "Ultrafast broadband is now available to over 65% of UK homes. Enter your postcode to check availability and compare the best deals in your area.",
  }
];

const UltrafastBroadband = () => {
  useEffect(() => {
    cleanupStickeeScript();
    loadStickeeScript();

    return () => {
      cleanupStickeeScript();
    };
  }, []);

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Ultrafast Broadband Deals | Compare 100Mbps+ Packages</title>
        <meta 
          name="description" 
          content="Compare ultrafast broadband deals with speeds over 100Mbps. Find the best packages from leading UK providers with our price comparison tool."
        />
      </Helmet>

      <BStyleHero
        title="Ultrafast Broadband Deals"
        subtitle="Discover the best ultrafast broadband deals with 500Mb+ internet packages. Compare providers, speeds, and prices to find the perfect high-speed connection for your home or business"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="High-speed internet connection visualization"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Why Choose Ultrafast Broadband?"
          subtitle="With speeds of 500Mb or more, ultrafast broadband is perfect for streaming, gaming, and working from home. Here's why it's worth the upgrade."
        >
          <BStyleFeatureCard
            icon={Zap}
            title="Lightning-Fast Speeds"
            description="Enjoy seamless 4K streaming, lag-free gaming, and smooth video calls with speeds of 500Mb or more."
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Perfect for Busy Households"
            description="Support multiple devices at once without slowing down your connection—ideal for families and remote workers."
          />
          <BStyleFeatureCard
            icon={Rocket}
            title="Future-Proof Your Internet"
            description="With ultrafast broadband, you'll be ready for the latest tech, from smart homes to 8K streaming."
          />
        </BStyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidgetContent 
            widgetId="smartfony-91"
            filters='{"download_speed": {"min":500, "max":1000}}'
          />
        </div>

        {/* Information Sections */}
        <div className="mt-16 space-y-12 max-w-5xl mx-auto bg-gradient-to-b from-white to-gray-50/50 rounded-3xl shadow-lg border border-gray-100/50 p-8 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#F8F9FF] to-[#FFFFFF] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100/20 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">What is Ultrafast Broadband?</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Ultrafast broadband refers to internet speeds of 300Mb per second (Mbps) or higher, with many providers now offering packages reaching 500Mb, 1Gb (gigabit), and beyond. To put that into perspective, a 500Mb connection allows you to download a full HD movie in under a minute—perfect for households with multiple devices or heavy internet usage.
              </p>
              <p className="text-lg">
                Unlike standard broadband, which maxes out at around 67Mb, ultrafast broadband ensures you're always connected, even during peak hours. Whether you're streaming, gaming, or working from home, these speeds eliminate buffering and lag, giving you a seamless online experience.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#F8F9FF] to-[#FFFFFF] backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-indigo-100/20 hover:shadow-xl transition-all duration-300">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">How to Find the Best Ultrafast Broadband Deals</h2>
            <p className="text-lg text-gray-600 mb-6">
              Finding the right ultrafast broadband deal is easier than ever with our simple three-step process:
            </p>
            <ol className="space-y-4">
              <li className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-semibold">1</span>
                <div>
                  <span className="font-semibold text-gray-800">Find Available Deals:</span>
                  <p className="text-gray-600 mt-1">Enter your postcode to see what broadband packages are available in your area.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-semibold">2</span>
                <div>
                  <span className="font-semibold text-gray-800">Choose Your Perfect Package:</span>
                  <p className="text-gray-600 mt-1">Filter results by speed, price, provider, or contract length to find the deal that suits you best.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4 p-4 bg-white/50 rounded-xl">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full font-semibold">3</span>
                <div>
                  <span className="font-semibold text-gray-800">Switch with Confidence:</span>
                  <p className="text-gray-600 mt-1">Complete your order through the provider's website. Don't worry—you'll have 14 days to change your mind.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </BStyleContent>

      {/* New Provider Comparison Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Ultrafast Broadband Providers</h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 text-left text-gray-900">Provider</th>
                    <th className="py-3 px-4 text-left text-gray-900">Speed</th>
                    <th className="py-3 px-4 text-left text-gray-900">Monthly Cost</th>
                    <th className="py-3 px-4 text-left text-gray-900">Contract Length</th>
                    <th className="py-3 px-4 text-left text-gray-900">Perks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Virgin Media</td>
                    <td className="py-3 px-4 text-gray-700">500Mb</td>
                    <td className="py-3 px-4 text-gray-700">£35</td>
                    <td className="py-3 px-4 text-gray-700">18 months</td>
                    <td className="py-3 px-4 text-gray-700">Free setup, Wi-Fi booster</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">BT</td>
                    <td className="py-3 px-4 text-gray-700">500Mb</td>
                    <td className="py-3 px-4 text-gray-700">£40</td>
                    <td className="py-3 px-4 text-gray-700">24 months</td>
                    <td className="py-3 px-4 text-gray-700">£20 reward card, free router</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">Hyperoptic</td>
                    <td className="py-3 px-4 text-gray-700">1Gb</td>
                    <td className="py-3 px-4 text-gray-700">£45</td>
                    <td className="py-3 px-4 text-gray-700">12 months</td>
                    <td className="py-3 px-4 text-gray-700">No setup fee, 24/7 support</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-gray-700">Sky</td>
                    <td className="py-3 px-4 text-gray-700">500Mb</td>
                    <td className="py-3 px-4 text-gray-700">£38</td>
                    <td className="py-3 px-4 text-gray-700">18 months</td>
                    <td className="py-3 px-4 text-gray-700">Free Netflix for 12 months</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 flex gap-4 flex-wrap">
                {['Virgin Media', 'BT', 'Hyperoptic', 'Sky'].map((provider) => (
                  <a
                    key={provider}
                    href="#"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    {provider}
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                ))}
              </div>
            </div>

            {/* Speed Requirements Section */}
            <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Speed Do You Really Need?</h2>
              <p className="text-gray-700 mb-6">
                Choosing the right broadband speed depends on your household's needs:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Light Usage</h3>
                  <p className="text-gray-700">Browsing, emails, and social media (30-50Mb).</p>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Moderate Usage</h3>
                  <p className="text-gray-700">Streaming HD videos and online gaming (50-100Mb).</p>
                </div>
                <div className="bg-blue-50/50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Heavy Usage</h3>
                  <p className="text-gray-700">4K streaming, large file downloads, and multiple devices (500Mb+).</p>
                </div>
              </div>
              <p className="mt-6 text-gray-700">
                Consider peak usage times and whether you need consistently fast speeds for activities like working from home.
              </p>
              <Link 
                to="/broadband/speed-guide" 
                className="mt-6 inline-block text-primary hover:text-primary/80 transition-colors"
              >
                Read our guide on Choosing the Right Broadband Speed
              </Link>
            </div>

            {/* Money Saving Tips Section */}
            <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Save Money on Your Broadband Deal</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Compare Providers</h3>
                    <p className="text-gray-700">Check what speeds are available in your area.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Look at the Total Cost</h3>
                    <p className="text-gray-700">Include setup fees, equipment charges, and potential price increases during your contract.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Check for Special Offers</h3>
                    <p className="text-gray-700">Many providers offer discounts for the first 6-12 months.</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/broadband/money-saving-guide" 
                className="mt-6 inline-block text-primary hover:text-primary/80 transition-colors"
              >
                Read our guide on How to Save Money on Your Broadband Deal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BStyleTemplate>
  );
};

export default UltrafastBroadband;
