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
            <h1 className="text-3xl font-bold">Ultimate Guide to 100Mbps Broadband Deals: Is This Speed Right For You?</h1>
            <h2 className="text-2xl font-semibold">Discover What 100Mbps Broadband Deals Offer</h2>
            <p className="text-gray-700">100Mbps broadband deals deliver ultrafast internet speeds that transform your online experience. These packages offer ten times the speed of standard broadband, with prices starting from just £25/month from leading providers.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What Speed Do 100Mbps Broadband Deals Deliver?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Download a HD movie (4GB) in just 5-6 minutes</li>
              <li>Stream 4K content on multiple devices simultaneously</li>
              <li>Support 8-10 devices connected at once</li>
              <li>Perfect for online gaming and video calls</li>
              <li>Upload large files quickly and efficiently</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Compare 100Mbps Broadband Deals</h2>
            <p className="text-gray-700">Today's 100Mbps broadband deals typically include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Guaranteed minimum speeds</li>
              <li>Latest Wi-Fi router technology</li>
              <li>Flexible contract lengths</li>
              <li>Optional TV and phone bundles</li>
              <li>Professional installation</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Who Needs 100Mbps Broadband Deals?</h2>
            <p className="text-gray-700">These packages are ideal for:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Families with multiple users online</li>
              <li>Remote workers handling large files</li>
              <li>Gamers requiring fast, stable connections</li>
              <li>4K streaming enthusiasts</li>
              <li>Smart home technology users</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Available 100Mbps Broadband Providers</h2>
            <p className="text-gray-700">Major providers offering 100Mbps broadband deals include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Virgin Media</li>
              <li>BT Full Fibre</li>
              <li>Sky Ultrafast</li>
              <li>Vodafone Gigafast</li>
              <li>TalkTalk Future Fibre</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Check 100Mbps Broadband Availability</h2>
            <p className="text-gray-700">While 100Mbps broadband coverage is expanding rapidly across the UK, availability depends on your location. Enter your postcode to compare available 100Mbps broadband deals in your area.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Future-Proof Your Connection</h2>
            <p className="text-gray-700">Choosing a 100Mbps broadband deal ensures your household has sufficient bandwidth for years to come, with options to upgrade to even faster speeds when needed.</p>
          </section>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default Broadband100Mbps;