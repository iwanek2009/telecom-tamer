import { Header } from '../components/Header';
import { useState } from 'react';
import { ArrowRight, ChevronDown, Info, Wifi } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import BroadbandComparisonSteps from '../components/BroadbandComparisonSteps';
import BroadbandGuide from '../components/BroadbandGuide';

const Broadband = () => {
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#3FC1C9]">
        <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-0">
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
                      Your ideal broadband speed depends on how many people use the internet in your home and what you use it for, like streaming or gaming.
                      Next, consider peak usage times in your household and whether you need consistently fast speeds for working from home or other activities.
                      For more help, read our guide on choosing the right broadband speed.
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
        <div className="grid md:grid-cols-12 gap-8">
          {/* Filter Section */}
          <div className="md:col-span-3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="font-semibold mb-4">Filter by</h2>
              
              {/* Package Filter */}
              <div className="space-y-4 mb-6">
                <h3 className="font-medium">Package</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="broadband" />
                    <label htmlFor="broadband" className="text-sm">Broadband (41)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="broadband-tv" />
                    <label htmlFor="broadband-tv" className="text-sm">Broadband + TV (26)</label>
                  </div>
                </div>
              </div>

              {/* Speed Filter */}
              <div className="space-y-4 mb-6">
                <h3 className="font-medium">Download speeds</h3>
                <RadioGroup defaultValue="10">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="10" id="10mbps" />
                    <label htmlFor="10mbps" className="text-sm">10 Mbps + (67)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="30" id="30mbps" />
                    <label htmlFor="30mbps" className="text-sm">30 Mbps + (66)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="100" id="100mbps" />
                    <label htmlFor="100mbps" className="text-sm">100 Mbps + (32)</label>
                  </div>
                </RadioGroup>
              </div>

              {/* Provider Filter */}
              <div className="space-y-4">
                <h3 className="font-medium">Provider</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="virgin" />
                    <label htmlFor="virgin" className="text-sm">Virgin Media (32)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="bt" />
                    <label htmlFor="bt" className="text-sm">BT (16)</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sky" />
                    <label htmlFor="sky" className="text-sm">Sky (5)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Offers Section */}
          <div className="md:col-span-9 space-y-4">
            {/* Offer Card 1 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img src="/lovable-uploads/439da46b-b50f-449e-b131-2b851962c927.png" alt="Virgin Media" className="w-12 h-12 object-contain" />
                  <div>
                    <h3 className="font-semibold">Virgin Media M125 Ultrafast Fibre</h3>
                    <div className="flex items-center mt-1">
                      <Wifi className="w-4 h-4 mr-1" />
                      <span className="text-sm text-gray-600">Average UK speed*</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">£23.50<span className="text-sm font-normal"> a month</span></div>
                  <p className="text-sm text-gray-600">no setup cost</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">132<span className="text-xl"> Mbps</span></div>
                  <p className="text-sm text-gray-600">18 month contract</p>
                </div>
                <div className="space-y-2">
                  <button className="w-32 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Get deal</button>
                  <button className="w-32 text-sm text-gray-600 flex items-center justify-center gap-1">
                    More info
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 bg-yellow-100 px-3 py-2 rounded-md inline-block">
                <p className="text-sm font-medium">£50 bill credit</p>
              </div>
            </div>

            {/* Offer Card 2 */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <img src="/lovable-uploads/200c65f5-15b7-44c8-ad2a-3fe27a295479.png" alt="Vodafone" className="w-12 h-12 object-contain" />
                  <div>
                    <h3 className="font-semibold">Vodafone Fibre 2</h3>
                    <div className="flex items-center mt-1">
                      <Wifi className="w-4 h-4 mr-1" />
                      <span className="text-sm text-gray-600">Average UK speed*</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">£24.00<span className="text-sm font-normal"> a month</span></div>
                  <p className="text-sm text-gray-600">no setup cost</p>
                </div>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <div className="text-3xl font-bold">67<span className="text-xl"> Mbps</span></div>
                  <p className="text-sm text-gray-600">24 month contract</p>
                </div>
                <div className="space-y-2">
                  <button className="w-32 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Get deal</button>
                  <button className="w-32 text-sm text-gray-600 flex items-center justify-center gap-1">
                    More info
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mt-4 bg-yellow-100 px-3 py-2 rounded-md inline-block">
                <p className="text-sm font-medium">£80 voucher</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BroadbandComparisonSteps />
      <BroadbandGuide />
    </div>
  );
};

export default Broadband;