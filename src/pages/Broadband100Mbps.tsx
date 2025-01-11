import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { Download, Users, Gamepad2 } from 'lucide-react';
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
        </BStyleFeatureGrid>

        <div className="space-y-8 mt-16">
          <section className="space-y-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ultimate Guide to 100Mbps Broadband Deals: Is This Speed Right For You?</h1>
            <h2 className="text-2xl font-semibold text-gray-800">Discover What 100Mbps Broadband Deals Offer</h2>
            <p className="text-gray-700 leading-relaxed">100Mbps broadband deals deliver ultrafast internet speeds that transform your online experience. These packages offer ten times the speed of standard broadband, with prices starting from just £25/month from leading providers.</p>
          </section>

          <section className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Speed Do 100Mbps Broadband Deals Deliver?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                Download a HD movie (4GB) in just 5-6 minutes
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Stream 4K content on multiple devices simultaneously
              </li>
              <li className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-primary" />
                Support 8-10 devices connected at once
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Compare 100Mbps Broadband Deals</h2>
            <p className="text-gray-700 mb-4">Today's 100Mbps broadband deals typically include:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Guaranteed minimum speeds
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Latest Wi-Fi router technology
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Flexible contract lengths
              </li>
              <li className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Professional installation
              </li>
            </ul>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who Needs 100Mbps Broadband Deals?</h2>
              <p className="text-gray-700 mb-4">These packages are ideal for:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Families with multiple users online
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Remote workers handling large files
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Gamers requiring fast, stable connections
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  4K streaming enthusiasts
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available 100Mbps Broadband Providers</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">Virgin Media</li>
                <li className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">BT Full Fibre</li>
                <li className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">Sky Ultrafast</li>
                <li className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">Vodafone Gigafast</li>
                <li className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">TalkTalk Future Fibre</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4 bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800">Check 100Mbps Broadband Availability</h2>
            <p className="text-gray-700 leading-relaxed">
              While 100Mbps broadband coverage is expanding rapidly across the UK, availability depends on your location. Enter your postcode to compare available 100Mbps broadband deals in your area.
            </p>
          </section>

          <section className="space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800">Future-Proof Your Connection</h2>
            <p className="text-gray-700 leading-relaxed">
              Choosing a 100Mbps broadband deal ensures your household has sufficient bandwidth for years to come, with options to upgrade to even faster speeds when needed.
            </p>
          </section>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default Broadband100Mbps;