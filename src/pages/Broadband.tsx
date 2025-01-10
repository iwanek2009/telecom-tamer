import React from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import BroadbandComparisonSteps from '@/components/BroadbandComparisonSteps';
import BroadbandFilters from '@/components/BroadbandFilters';
import BroadbandGuide from '@/components/BroadbandGuide';
import BroadbandOffers from '@/components/BroadbandOffers';
import BroadbandSpeed from '@/components/BroadbandSpeed';
import BroadbandUnderstanding from '@/components/BroadbandUnderstanding';
import { Helmet } from 'react-helmet';

const Broadband = () => {
  return (
    <BStyleTemplate>
      <Helmet>
        <title>Compare Broadband Deals | Find Best Deals & Switch Today</title>
        <meta 
          name="description" 
          content="Compare broadband deals from all major UK providers. Find the best packages with speeds from 30Mbps to 1Gbps. Check availability in your area today!"
        />
        <meta property="og:title" content="Compare Broadband Deals | Find Best Deals & Switch Today" />
        <meta 
          property="og:description" 
          content="Compare broadband deals from all major UK providers. Find the best packages with speeds from 30Mbps to 1Gbps. Check availability in your area today!"
        />
        <meta property="og:image" content="/lovable-uploads/b676baf1-7e3f-47a6-a145-6b4fea43049f.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compare Broadband Deals | Find Best Deals & Switch Today" />
        <meta 
          name="twitter:description" 
          content="Compare broadband deals from all major UK providers. Find the best packages with speeds from 30Mbps to 1Gbps. Check availability in your area today!"
        />
        <meta name="twitter:image" content="/lovable-uploads/b676baf1-7e3f-47a6-a145-6b4fea43049f.png" />
      </Helmet>

      <BroadbandComparisonSteps />
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-12 gap-8">
          <BroadbandFilters />
          <BroadbandOffers />
        </div>
      </div>
      <BroadbandGuide />
      <BroadbandSpeed />
      <BroadbandUnderstanding />
    </BStyleTemplate>
  );
};

export default Broadband;