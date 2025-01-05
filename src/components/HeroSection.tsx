import { Button } from "@/components/ui/button";

export const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="container mx-auto px-[50px] py-[30px] md:py-0 bg-[#3FC1C9]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Smart choices,
            <br />
            better <span className="text-pink-500">savings.</span>
          </h1>
          <p className="text-lg text-gray-600">
            Find your perfect deal - compare all networks today
          </p>
          <Button 
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-base rounded-lg"
            onClick={onGetStarted}
          >
            Get started
          </Button>
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