import { Header } from '../components/Header';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import MobileFilters from '@/components/MobileFilters';
import MobileEssentialSteps from '@/components/MobileEssentialSteps';
import ContractComparison from '@/components/ContractComparison';
import NumberPortability from '@/components/NumberPortability';
import ContractGuide from '@/components/ContractGuide';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const Mobile = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const location = window.location.pathname;

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
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#FC5185] to-[#FC5185]/80">
        <div className="container mx-auto px-4 pt-[75px] pb-5 md:pb-0">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                Find your perfect phone deal
              </h1>
              <p className="text-lg md:text-xl text-black leading-relaxed">
                Ready to save on your next phone contract? We'll help you discover the best monthly plans and latest handsets at prices you'll love.
              </p>
              
              {/* Toggle Sections in Hero */}
              <div className="space-y-4">
                <Collapsible
                  open={isFirstOpen}
                  onOpenChange={setIsFirstOpen}
                  className="bg-white/90 rounded-lg p-4"
                >
                  <CollapsibleTrigger className="flex justify-between items-center w-full">
                    <h2 className="text-lg font-semibold text-black">How to choose the best mobile phone deal</h2>
                    <ChevronDown className={`h-6 w-6 transition-transform ${isFirstOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="space-y-4 text-black">
                      <p>Firstly, consider your usage so you don't pay for more data than you need and avoid charges for exceeding your allowance.</p>
                      <p>Next, consider the handset you want. Deals for older and mid-range phones tend to be more affordable than those for the latest models.</p>
                      <p>For more information, read our 'How to choose a mobile phone contract' guide</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={isSecondOpen}
                  onOpenChange={setIsSecondOpen}
                  className="bg-white/90 rounded-lg p-4"
                >
                  <CollapsibleTrigger className="flex justify-between items-center w-full">
                    <h2 className="text-lg font-semibold text-black">Should I choose a pay monthly or SIM only deal?</h2>
                    <ChevronDown className={`h-6 w-6 transition-transform ${isSecondOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="space-y-4 text-black">
                      <p>Choosing the right mobile plan for you depends on what best suits your preferences and needs.</p>
                      <p>A fixed contract provides stability and potential device savings, especially if you want unlimited data. SIM only plans offer greater flexibility and affordability.</p>
                      <p>For more information, read our 'SIM only vs pay monthly' guide</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            <div className="hidden md:block md:mt-auto md:pb-0">
              <img 
                src="/lovable-uploads/ccdcec41-6a48-416a-8133-3f80432b9aad.png"
                alt="Person using smartphone" 
                className="w-full h-auto object-contain rounded-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stickee Widget with location key */}
      <StickeeWidget key={location} />

      <MobileEssentialSteps />
      <ContractComparison />
      <NumberPortability />
      <ContractGuide />

      <Footer />
    </div>
  );
};

export default Mobile;