import React, { useEffect } from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Wifi, Zap, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';
import { loadStickeeScript, cleanupStickeeScript } from '@/utils/stickeeLoader';

const UltrafastBroadband = () => {
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

        {/* New Information Section */}
        <div className="mt-16 space-y-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">What is Ultrafast Broadband?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Ultrafast broadband refers to internet speeds of 300Mb per second (Mbps) or higher, with many providers now offering packages reaching 500Mb, 1Gb (gigabit), and beyond. To put that into perspective, a 500Mb connection allows you to download a full HD movie in under a minute—perfect for households with multiple devices or heavy internet usage.
              </p>
              <p>
                Unlike standard broadband, which maxes out at around 67Mb, ultrafast broadband ensures you're always connected, even during peak hours. Whether you're streaming, gaming, or working from home, these speeds eliminate buffering and lag, giving you a seamless online experience.
              </p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">How to Find the Best Ultrafast Broadband Deals</h2>
            <p className="text-gray-700 mb-4">
              Finding the right ultrafast broadband deal is easier than ever with our simple three-step process:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 pl-4">
              <li className="pl-2"><span className="font-semibold">Find Available Deals:</span> Enter your postcode to see what broadband packages are available in your area.</li>
              <li className="pl-2"><span className="font-semibold">Choose Your Perfect Package:</span> Filter results by speed, price, provider, or contract length to find the deal that suits you best.</li>
              <li className="pl-2"><span className="font-semibold">Switch with Confidence:</span> Complete your order through the provider's website. Don't worry—you'll have 14 days to change your mind.</li>
            </ol>
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default UltrafastBroadband;