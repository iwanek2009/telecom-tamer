import React from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { Helmet } from 'react-helmet';
import BroadbandFeatures from '@/components/broadband/BroadbandFeatures';
import BroadbandGuideSection from '@/components/broadband/BroadbandGuideSection';
import ProsConsSection from '@/components/broadband/ProsConsSection';

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
        <title>Compare 100Mbps Broadband Deals | Find Best Value Packages</title>
        <meta 
          name="description" 
          content="Looking for 100Mbps broadband? Compare deals from top providers, see pros and cons, and find the perfect package for your home. Check availability today."
        />
      </Helmet>

      <BStyleHero
        title="100Mbps Broadband Deals"
        subtitle="Compare ultrafast broadband deals and find the perfect speed for your busy household today"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person comparing broadband deals on tablet"
        accordionItems={heroAccordionItems}
      />

      <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
        <iframe 
          src="https://smartfony.stickeebroadband.co.uk/" 
          width="100%" 
          height="100%" 
          style={{ border: 'none' }}
          title="Broadband Comparison"
        />
      </div>

      <BStyleContent>
        <BroadbandFeatures />
        <BroadbandGuideSection />
        <ProsConsSection />
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default Broadband100Mbps;