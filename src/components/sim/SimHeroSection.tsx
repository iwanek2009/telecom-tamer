import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const SimHeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#FC5185] to-[#FC5185]/80 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Find Your Perfect SIM Only Deal
            </h1>
            <p className="text-lg md:text-xl text-black mb-8">
              Compare the best SIM only deals from leading UK networks. Get more data for less with our exclusive offers.
            </p>
            
            <div className="space-y-4 mt-8">
              <Collapsible className="w-full bg-white rounded-lg p-4">
                <CollapsibleTrigger className="flex justify-between items-center w-full text-left text-black font-semibold">
                  How to choose the best SIM only deal
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 text-black text-left space-y-2">
                  <p>Check your monthly data usage first - the average UK user needs only 9.9GB. Choose a smaller bundle if you mainly use Wi-Fi to save money.</p>
                  <p>Next, consider contract length options. 30-day plans offer flexibility, while 12-24 month contracts often have better rates.</p>
                  <p>For more information, read our 'How to choose a SIM only deal' guide</p>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible className="w-full bg-white rounded-lg p-4">
                <CollapsibleTrigger className="flex justify-between items-center w-full text-left text-black font-semibold">
                  What happens when I switch networks?
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 text-black text-left space-y-2">
                  <p>The switching process is now simpler than ever. Just text to get your PAC code and your new provider will handle everything else.</p>
                  <p>Next, you'll receive your new SIM card and can start using it right away - the whole process takes just minutes.</p>
                  <p>For more information, read our 'Network switching guide'</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/ddd47760-f9ef-4924-9967-59af638f75dd.png"
              alt="Person using tablet device" 
              className="w-full h-auto object-contain rounded-lg -mb-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};