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
    // Initialize Stickee widget
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
        subtitle="Experience lightning-fast internet with speeds over 100Mbps"
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
            filters='{"download_speed": {"min":100}}'
          />
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default UltrafastBroadband;
