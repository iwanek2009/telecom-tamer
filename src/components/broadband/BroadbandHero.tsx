import { ChevronDown, ArrowRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface BroadbandHeroProps {
  isValueOpen: boolean;
  setIsValueOpen: (value: boolean) => void;
  isSpeedOpen: boolean;
  setIsSpeedOpen: (value: boolean) => void;
}

export const BroadbandHero = ({ 
  isValueOpen, 
  setIsValueOpen, 
  isSpeedOpen, 
  setIsSpeedOpen 
}: BroadbandHeroProps) => {
  return (
    <div className="bg-[#9b87f5]">
      <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                Compare broadband deals
              </h1>
              <p className="text-xl text-white/90 mt-4 mb-6">
                Find cheaper broadband in your area - save up to £163 per year
              </p>
            </div>

            <div className="space-y-3">
              <Collapsible
                open={isValueOpen}
                onOpenChange={setIsValueOpen}
                className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden"
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
                  <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5] text-sm font-medium inline-flex items-center gap-1">
                    Read our guide
                    <ArrowRight size={14} />
                  </a>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={isSpeedOpen}
                onOpenChange={setIsSpeedOpen}
                className="bg-white/95 backdrop-blur-sm rounded-lg overflow-hidden"
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
                  <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5] text-sm font-medium inline-flex items-center gap-1">
                    Read our guide
                    <ArrowRight size={14} />
                  </a>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

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
  );
};