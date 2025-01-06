import { Button } from "@/components/ui/button";

export const HeroSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="w-full px-[50px] py-[30px] md:py-0" style={{ background: 'linear-gradient(135deg, #40E0D0 0%, #98F5E1 100%)' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
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
                Save up to £163 per year on your bills
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