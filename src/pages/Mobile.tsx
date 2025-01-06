import { Header } from '../components/Header';
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import MobileFilters from '@/components/MobileFilters';

const Mobile = () => {
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

  const steps = [
    {
      title: "Choose your perfect phone",
      description: "Consider what matters most in your next device:",
      points: [
        "Latest tech or mid-range value",
        "Battery life and screen size",
        "Camera quality and storage space",
        "Brand preference (iPhone, Samsung, Google)"
      ]
    },
    {
      title: "Calculate your monthly needs",
      description: "Most plans include unlimited calls and texts, so focus on:",
      points: [
        "Your typical data usage",
        "Streaming habits (Netflix, YouTube, Spotify)",
        "Social media and gaming time",
        "Work requirements (email, video calls)"
      ],
      note: "Not sure about data? Use our calculator to get a personalized estimate."
    },
    {
      title: "Check network coverage",
      description: "Before signing any contract:",
      points: [
        "Test coverage at home and work",
        "Compare 4G and 5G availability",
        "Read customer reviews",
        "Consider family and friends' network experiences"
      ]
    },
    {
      title: "Balance your budget",
      description: "Understanding the full costs:",
      points: [
        "Higher upfront payment = Lower monthly costs",
        "Contract length (12-36 months)",
        "Total cost over contract period",
        "Additional features included (insurance, roaming)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#FC5185] to-[#FC5185]/80">
        <div className="container mx-auto px-4 pt-[75px]">
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="md:col-span-1">
            <MobileFilters />
          </div>

          {/* Deals */}
          <div className="md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">89,866 deals available</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">sort by</span>
                  <select className="border rounded-md p-2">
                    <option>Most Popular</option>
                    <option>Lowest Price</option>
                    <option>Highest Price</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
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
        </div>
      </div>

      {/* Essential Steps Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Finding the perfect phone deal: 4 essential steps
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Want to get the best value from your next phone contract? Here's your simple guide to making the right choice:
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#1E3A8A]">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-[#059669] mr-2">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {step.note && (
                    <p className="mt-4 text-sm text-[#059669] italic">
                      {step.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 italic">
                Remember: The cheapest monthly price isn't always the best deal - look at the total package and what you're getting for your money.
              </p>
              <Button 
                className="bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white"
              >
                Compare Deals Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
