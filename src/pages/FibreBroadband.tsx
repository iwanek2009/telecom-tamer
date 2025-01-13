import React, { useEffect } from 'react';
import { Wifi, Router, Zap, Timer, Download } from 'lucide-react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import FibreBroadbandGuide from '@/components/FibreBroadbandGuide';
import FibreBroadbandAvailability from '@/components/FibreBroadbandAvailability';
import { Helmet } from 'react-helmet';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';
import { loadStickeeScript, cleanupStickeeScript } from '@/utils/stickeeLoader';

const FibreBroadband = () => {
  const heroAccordionItems = [
    {
      title: "What is fibre broadband?",
      content: "Fibre broadband uses fibre optic cables to deliver faster internet speeds than traditional copper cables. This means quicker downloads, smoother streaming, and better online gaming.",
      linkText: "Learn more about fibre",
      linkHref: "#about-fibre"
    },
    {
      title: "Why choose fibre broadband?",
      content: "Fibre broadband offers significantly faster speeds, more reliable connections, and can handle multiple devices simultaneously. Perfect for streaming, gaming, and working from home.",
      linkText: "View speed comparison",
      linkHref: "#speed-comparison"
    },
    {
      title: "Is fibre available in my area?",
      content: "Fibre broadband is now available to over 96% of UK homes. Enter your postcode to check availability and compare deals in your area.",
      linkText: "Check availability",
      linkHref: "#check-availability"
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
        <title>Ultra-Fast Fibre Broadband Deals From £25/month | Compare & Save</title>
        <meta 
          name="description" 
          content="Compare the best fibre broadband deals starting from just £25/month. Enjoy ultra-fast speeds and reliable connection for your home. Check availability today."
        />
      </Helmet>

      <BStyleHero
        title="Compare Fibre Broadband Deals"
        subtitle="Get ultra-fast fibre broadband from £20/month"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person using laptop with fast internet"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Why Choose Fibre Broadband?"
          subtitle="Experience the benefits of ultra-fast fibre optic internet"
        >
          <BStyleFeatureCard
            icon={Download}
            title="Lightning-Fast Downloads"
            description="Download HD movies in minutes and large files instantly with speeds up to 1Gbps"
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Reliable Connection"
            description="Stable connection even during peak times, perfect for working from home"
          />
          <BStyleFeatureCard
            icon={Timer}
            title="Low Latency"
            description="Enjoy lag-free gaming and crystal-clear video calls with minimal delay"
          />
        </BStyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidgetContent 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </BStyleContent>

      <FibreBroadbandGuide />
      <FibreBroadbandAvailability />
    </BStyleTemplate>
  );
};

export default FibreBroadband;