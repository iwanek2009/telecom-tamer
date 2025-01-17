import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface CstyleHeroProps {
  title: string;
  subtitle: string;
  valueTipTitle: string;
  valueTipContent: string;
  speedTipTitle: string;
  speedTipContent: string;
  heroImageAlt: string;
}

export const CstyleHero = ({ 
  title, 
  subtitle,
  valueTipTitle,
  valueTipContent,
  speedTipTitle,
  speedTipContent,
  heroImageAlt
}: CstyleHeroProps) => {
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);

  return (
    <div className="bg-[#3FC1C9]">
      <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                {title}
              </h1>
              <p className="text-xl text-gray-700 mt-4 mb-6">
                {subtitle}
              </p>
            </div>

            <div className="space-y-3">
              <Collapsible
                open={isValueOpen}
                onOpenChange={setIsValueOpen}
                className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                  <h2 className="text-lg font-semibold text-gray-900">{valueTipTitle}</h2>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isValueOpen ? 'transform rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <p className="text-gray-700 text-sm mb-2">
                    {valueTipContent}
                  </p>
                  <a href="#choose-provider" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1">
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
                  <h2 className="text-lg font-semibold text-gray-900">{speedTipTitle}</h2>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSpeedOpen ? 'transform rotate-180' : ''}`} />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4">
                  <p className="text-gray-700 text-sm mb-2">
                    {speedTipContent}
                  </p>
                  <a href="#choose-speed" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1">
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
              alt={heroImageAlt}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};