import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  return (
    <section className="w-full px-[50px] py-[30px] md:py-0" style={{ background: 'linear-gradient(135deg, #40E0D0 0%, #98F5E1 100%)' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Smart choices,
            <br />
            better <span className="text-pink-500">savings.</span>
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 font-bold">
              Find your perfect deal - compare all networks today
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Save up to £450 per year on your bills
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Compare deals from all major UK networks
              </li>
              <li className="flex items-center text-gray-700">
                <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Helping customers save since 2010
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <Collapsible open={isFirstOpen} onOpenChange={setIsFirstOpen} className="bg-white/80 rounded-lg p-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold text-gray-800">How to choose the best SIM only deal</h3>
                {isFirstOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 text-gray-600">
                <p className="mb-2">Check your monthly data usage first - the average UK user needs only 9.9GB. Choose a smaller bundle if you mainly use Wi-Fi to save money.</p>
                <p className="mb-2">Next, consider contract length options. 30-day plans offer flexibility, while 12-24 month contracts often have better rates.</p>
                <p className="text-pink-500 hover:text-pink-600">
                  <a href="/guide">For more information, read our 'How to choose a SIM only deal' guide</a>
                </p>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={isSecondOpen} onOpenChange={setIsSecondOpen} className="bg-white/80 rounded-lg p-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold text-gray-800">What happens when I switch networks?</h3>
                {isSecondOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-4 text-gray-600">
                <p className="mb-2">The switching process is now simpler than ever. Just text to get your PAC code and your new provider will handle everything else.</p>
                <p className="mb-2">Next, you'll receive your new SIM card and can start using it right away - the whole process takes just minutes.</p>
                <p className="text-pink-500 hover:text-pink-600">
                  <a href="/network-guide">For more information, read our 'Network switching guide'</a>
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="space-y-4">
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-base rounded-lg"
              onClick={onGetStarted}
            >
              Compare deals now
            </Button>
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm">Rated 4.8 by customers</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block">
          <img 
            src="/lovable-uploads/f290a477-bb52-4371-a6e7-a84c27b974a7.png"
            alt="Person using smartphone" 
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};