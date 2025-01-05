import { Header } from '../components/Header';
import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Broadband = () => {
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);
  
  const mockDeals = [
    {
      provider: "FastNet",
      speed: "100 Mbps",
      price: 30,
      contract: "18 months",
      features: ["Unlimited Data", "Free Router", "No Setup Fee"],
    },
    {
      provider: "SpeedFiber",
      speed: "200 Mbps",
      price: 35,
      contract: "24 months",
      features: ["Unlimited Data", "Free Router", "TV Package Included"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#3FC1C9]">
        <div className="container mx-auto px-4 pt-12 md:pt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Compare broadband deals
                </h1>
                <p className="text-xl text-gray-700 mt-4 mb-6">
                  Find cheaper broadband in your area - save up to £163 per year
                </p>
              </div>

              {/* Tips Sections */}
              <div className="space-y-3">
                <Collapsible
                  open={isValueOpen}
                  onOpenChange={setIsValueOpen}
                  className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                    <h2 className="text-lg font-semibold text-gray-900">How to get the best value broadband?</h2>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isValueOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-gray-700 text-sm mb-2">
                      It's essential to compare different providers and check what speeds are actually available at your address before making a decision.
                      Next, look at the total cost of your package, including any setup fees, equipment charges and whether prices will increase during your contract.
                      For more help, read our guide on how to save money on your broadband deal.
                    </p>
                    <a href="#" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1">
                      Read our guide
                      <ArrowRight size={14} />
                    </a>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={isSpeedOpen}
                  onOpenChange={setIsSpeedOpen}
                  className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                    <h2 className="text-lg font-semibold text-gray-900">What speed do you really need?</h2>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isSpeedOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-gray-700 text-sm mb-2">
                      Your ideal speed depends on household usage and activities like streaming or gaming.
                    </p>
                    <a href="#" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1">
                      Read our guide
                      <ArrowRight size={14} />
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:flex items-center justify-center">
              <img 
                src="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
                alt="Person using tablet" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          {mockDeals.map((deal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{deal.provider}</h3>
                <span className="text-2xl font-bold text-secondary">£{deal.price}/mo</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-medium">{deal.speed}</span>
                <p className="text-gray-600">{deal.contract} contract</p>
              </div>
              <div className="space-y-2 text-gray-600">
                {deal.features.map((feature, i) => (
                  <p key={i}>✓ {feature}</p>
                ))}
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                View Deal
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Broadband;