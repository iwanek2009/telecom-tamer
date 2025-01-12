import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import MobileHero from '@/components/mobile/MobileHero';
import MobileDeals from '@/components/mobile/MobileDeals';
import MobileEssentialSteps from '@/components/MobileEssentialSteps';
import ContractComparison from '@/components/ContractComparison';
import NumberPortability from '@/components/NumberPortability';
import ContractGuide from '@/components/ContractGuide';

const Mobile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Compare Phone Contracts | Find Best Mobile Phone Deals</title>
        <meta 
          name="description" 
          content="Compare the latest phone contracts from all major UK networks. Find deals on iPhone, Samsung & more. Save up to 40% on your monthly plan with our comparison tool."
        />
      </Helmet>
      
      <Header />
      <MobileHero />
      
      <StickeeWidget 
        widgetId="smartfony-90"
        filters={{ families: [1971] }}
      />

      <MobileDeals />
      <MobileEssentialSteps />
      <ContractComparison />
      <NumberPortability />
      <ContractGuide />
      <Footer />
    </div>
  );
};

export default Mobile;