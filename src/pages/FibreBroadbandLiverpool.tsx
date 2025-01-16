import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, Network, House, Gamepad2, Video, Users, Zap, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import LiverpoolBroadbandContent from '@/components/local/LiverpoolBroadbandContent';

const FibreBroadbandLiverpool = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Liverpool enjoys extensive fibre coverage with speeds up to 1Gbps available in many areas through providers like Virgin Media and BT.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Liverpool.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fibre Broadband Liverpool | Compare Fast Internet Providers</title>
        <meta 
          name="description" 
          content="Discover the best fibre broadband deals in Liverpool. Compare fast internet providers and packages to find the perfect connection for streaming, gaming, and remote work. Start comparing today!"
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Liverpool"
        subtitle="Find the fastest and most reliable fibre broadband deals in Liverpool. Compare packages from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Liverpool cityscape with fiber optic illustration"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Fibre Broadband in Liverpool?"
          subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps with full fibre coverage across Liverpool"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all Liverpool neighborhoods"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>

        <div className="mt-16 space-y-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Super-Fast Internet in Liverpool? Let's Sort You Out!
            </h2>
            <p className="text-gray-700 mb-6">
              Looking to level up your internet game in Liverpool? If you're fed up with videos buffering or your Zoom calls freezing, fibre broadband might be just what you need. Let me break it down for you in plain English.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Fibre is a Game-Changer</h3>
            <p className="text-gray-700 mb-4">Think of fibre as your internet on steroids - everything just works better! You'll love it because:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
              <li>You can stream your favorite shows in stunning 4K without any of those annoying loading screens</li>
              <li>Your gaming sessions will be smooth as butter - no more blame-the-internet moments</li>
              <li>The whole family can be online at once without everything grinding to a halt</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Big Players in Liverpool</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Virgin Media",
                  features: [
                    "Super-fast gigabit speeds",
                    "Free WiFi booster included",
                    "Great for tech-savvy households"
                  ]
                },
                {
                  name: "BT",
                  features: [
                    "Rock-solid reliability",
                    "Smart WiFi technology",
                    "Perfect for larger homes"
                  ]
                },
                {
                  name: "Sky",
                  features: [
                    "Includes loads of entertainment options",
                    "Reliable service",
                    "Great for streaming fans"
                  ]
                },
                {
                  name: "Hyperoptic",
                  features: [
                    "Lightning-fast speeds",
                    "Round-the-clock support",
                    "Ideal for modern apartments"
                  ]
                }
              ].map((provider) => (
                <div key={provider.name} className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-4">{provider.name}</h4>
                  <ul className="space-y-2">
                    {provider.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Speed Suits Your Style?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-semibold">Casual User?</h4>
                </div>
                <p className="text-gray-700">If you mostly browse social media, check emails, and watch a bit of YouTube, you don't need anything too fancy.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-semibold">Family Setup?</h4>
                </div>
                <p className="text-gray-700">Got a house full of Netflix fans and social media addicts? You'll want something meatier to keep everyone happy.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <h4 className="text-xl font-semibold">Power User?</h4>
                </div>
                <p className="text-gray-700">If you're downloading massive files, streaming in 4K, or running a small army of smart devices, you'll want the top-tier stuff.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Gamepad2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Calling All Gamers!</h3>
              </div>
              <p className="text-gray-700 mb-4">If you're into your gaming, fibre broadband is your best mate:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Say goodbye to lag
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Download new games in a flash
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Keep your streaming smooth while gaming
                </li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Working From Home?</h3>
              </div>
              <p className="text-gray-700 mb-4">Fibre's got your back with:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Crystal-clear video calls
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Quick file sharing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Zap className="w-4 h-4 text-blue-600" />
                  Reliable connection when you need it most
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandLiverpool;