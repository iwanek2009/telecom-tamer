import { Header } from '../components/Header';
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Mobile = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  
  const mockDeals = [
    {
      provider: "VodaNet",
      data: "100GB",
      minutes: "Unlimited",
      price: 25,
      contract: "24 months",
      network: "4G/5G",
    },
    {
      provider: "TeleMobile",
      data: "50GB",
      minutes: "Unlimited",
      price: 20,
      contract: "12 months",
      network: "4G",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#FC5185] to-[#FC5185]/80">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-3xl space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                Find your perfect phone deal
              </h1>
              <p className="text-lg md:text-xl text-black leading-relaxed">
                Ready to save on your next phone contract? We'll help you discover the best monthly plans and latest handsets at prices you'll love.
              </p>
              
              {/* Toggle Sections in Hero */}
              <div className="space-y-4 pt-8">
                <Collapsible
                  open={isFirstOpen}
                  onOpenChange={setIsFirstOpen}
                  className="bg-white/90 rounded-lg p-4"
                >
                  <CollapsibleTrigger className="flex justify-between items-center w-full">
                    <h2 className="text-xl font-semibold text-black">How to choose the best mobile phone deal</h2>
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
                    <h2 className="text-xl font-semibold text-black">Should I choose a pay monthly or SIM only deal?</h2>
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

            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/ccdcec41-6a48-416a-8133-3f80432b9aad.png"
                alt="Person using smartphone" 
                className="w-full h-auto object-contain rounded-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Deals */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-black mb-8">Compare Mobile Deals</h1>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold text-black mb-4">Filters</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Price Range (£{priceRange[0]} - £{priceRange[1]})
              </label>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Deals */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockDeals.map((deal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-black">{deal.provider}</h3>
                <span className="text-2xl font-bold text-black">£{deal.price}/mo</span>
              </div>
              <div className="space-y-2 text-black">
                <p>✓ {deal.data} Data</p>
                <p>✓ {deal.minutes} Minutes</p>
                <p>✓ {deal.network}</p>
                <p>✓ {deal.contract} contract</p>
              </div>
              <Button 
                className="w-full mt-4 bg-[#FC5185] text-white hover:bg-[#FC5185]/90"
              >
                View Deal
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobile;