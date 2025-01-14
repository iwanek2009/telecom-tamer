import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
  linkText?: string;
  linkHref?: string;
}

interface BroadbandHeroProps {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  accordionItems: AccordionItem[];
}

export const BroadbandHero = ({
  title,
  subtitle,
  image,
  imageAlt,
  accordionItems
}: BroadbandHeroProps) => {
  return (
    <section className="w-full bg-[#3FC1C9]">
      <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                {title}
              </h1>
              <p className="text-xl text-gray-700 mt-4">
                {subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {accordionItems.map((item, index) => (
                <Collapsible
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                    <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                    <ChevronDown className="h-4 w-4 transition-transform" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-gray-700 text-sm mb-2">
                      {item.content}
                    </p>
                    {item.linkText && item.linkHref && (
                      <a 
                        href={item.linkHref} 
                        className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1"
                      >
                        {item.linkText}
                      </a>
                    )}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <img 
              src={image}
              alt={imageAlt} 
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};