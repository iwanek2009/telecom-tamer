import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Wifi, Users, Gamepad2, Download } from 'lucide-react';
import BroadbandOffers from '@/components/BroadbandOffers';
import { Helmet } from 'react-helmet';

const Broadband100Mbps = () => {
  const heroAccordionItems = [
    {
      title: "Who needs 100Mbps broadband?",
      content: "100Mbps broadband is perfect for households with 3-5 people who regularly stream HD content, play online games, or work from home. It provides enough bandwidth for multiple devices to connect simultaneously without slowdown.",
    },
    {
      title: "Is 100Mbps fast enough?",
      content: "100Mbps is more than enough for most households. It allows you to download a HD movie in about 5-7 minutes, handle multiple video calls, and stream 4K content without buffering.",
    },
    {
      title: "What's the average cost?",
      content: "100Mbps broadband packages typically range from £25-35 per month, depending on the provider and contract length. Many providers also offer special deals and incentives.",
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>100Mbps Broadband Deals | Compare Fast Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best 100Mbps broadband deals. Perfect for streaming, gaming, and working from home. Find the fastest broadband packages at competitive prices."
        />
      </Helmet>

      <BStyleHero
        title="100Mbps Broadband Deals"
        subtitle="Fast, reliable internet perfect for streaming, gaming, and working from home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person comparing broadband deals on tablet"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Why Choose 100Mbps Broadband?"
          subtitle="Perfect balance of speed and value for modern households"
        >
          <BStyleFeatureCard
            icon={Download}
            title="Fast Downloads"
            description="Download HD movies in minutes and large files instantly"
          />
          <BStyleFeatureCard
            icon={Users}
            title="Multi-User Friendly"
            description="Perfect for households with 3-5 heavy internet users"
          />
          <BStyleFeatureCard
            icon={Gamepad2}
            title="Gaming Ready"
            description="Low latency and stable connection for online gaming"
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Multiple Devices"
            description="Connect 8-10 devices simultaneously without slowdown"
          />
        </BStyleFeatureGrid>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Available 100Mbps Deals</h2>
          <BroadbandOffers />
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Can You Do with 100Mbps?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Perfect for:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>4K video streaming on multiple devices</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Online gaming with low latency</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Large file downloads</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Multiple video calls simultaneously</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Download times:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>HD movie (4GB): ~5-7 minutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Music album (100MB): ~8 seconds</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Game update (20GB): ~27-30 minutes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Photo (5MB): Almost instant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default Broadband100Mbps;