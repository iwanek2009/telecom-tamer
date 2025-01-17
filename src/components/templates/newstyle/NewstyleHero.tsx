import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface NewstyleHeroProps {
  title: string;
  subtitle: string;
  tips: {
    title: string;
    content: string;
    linkText?: string;
    linkHref?: string;
  }[];
  image?: string;
  imageAlt?: string;
}

export const NewstyleHero = ({ 
  title, 
  subtitle, 
  tips,
  image = "/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png",
  imageAlt = "Person using digital device"
}: NewstyleHeroProps) => {
  const [openTips, setOpenTips] = useState<{ [key: string]: boolean }>({});

  const toggleTip = (index: number) => {
    setOpenTips(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
              {tips.map((tip, index) => (
                <Collapsible
                  key={index}
                  open={openTips[index]}
                  onOpenChange={() => toggleTip(index)}
                  className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                    <h2 className="text-lg font-semibold text-gray-900">{tip.title}</h2>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openTips[index] ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-gray-700 text-sm mb-2">
                      {tip.content}
                    </p>
                    {tip.linkText && tip.linkHref && (
                      <a 
                        href={tip.linkHref} 
                        className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1"
                      >
                        {tip.linkText}
                      </a>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <img 
              src={image}
              alt={imageAlt}
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};