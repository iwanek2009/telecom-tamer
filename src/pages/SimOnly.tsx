import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const SimOnly = () => {
  const plans = [
    {
      name: "Basic",
      data: "10GB",
      price: 12,
      features: [
        "Unlimited calls & texts",
        "5G Ready",
        "EU Roaming",
        "No contract lock-in"
      ]
    },
    {
      name: "Standard",
      data: "30GB",
      price: 18,
      features: [
        "Unlimited calls & texts",
        "5G Ready",
        "EU Roaming",
        "No contract lock-in",
        "Data rollover"
      ]
    },
    {
      name: "Unlimited",
      data: "Unlimited",
      price: 25,
      features: [
        "Unlimited calls & texts",
        "5G Ready",
        "EU Roaming",
        "No contract lock-in",
        "Data rollover",
        "Priority customer service"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
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
                <Collapsible className="w-full bg-white backdrop-blur-sm rounded-lg p-4">
                  <CollapsibleTrigger className="flex justify-between items-center w-full text-left text-black font-semibold">
                    How to choose the best SIM only deal
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 text-black text-left space-y-2">
                    <p>Check your monthly data usage first - the average UK user needs only 9.9GB. Choose a smaller bundle if you mainly use Wi-Fi to save money.</p>
                    <p>Next, consider contract length options. 30-day plans offer flexibility, while 12-24 month contracts often have better rates.</p>
                    <p>For more information, read our 'How to choose a SIM only deal' guide</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible className="w-full bg-white backdrop-blur-sm rounded-lg p-4">
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

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-[#FC5185] mb-2">
                    £{plan.price}
                    <span className="text-base font-normal text-gray-600">/month</span>
                  </div>
                  <div className="text-lg text-gray-600 mb-6">{plan.data} Data</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#FC5185] hover:bg-[#FC5185]/90">
                  Choose Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Coverage Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Main Heading Section */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">SIM Only Deals: Smart Choice, Better Savings</h2>
              <p className="text-xl text-gray-600">Why Choose SIM Only?</p>
              <div className="bg-gradient-to-r from-[#FC5185]/10 to-[#FC5185]/5 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Love your current phone? Or prefer buying handsets outright? A SIM only deal could be your perfect match. 
                  Not only do you keep your trusted device, but you'll also enjoy significantly lower monthly bills - sometimes up to 60% less than traditional contracts.
                </p>
                <div className="mt-4 bg-[#FC5185]/10 p-4 rounded-lg inline-block">
                  <p className="text-[#FC5185] font-semibold">
                    💡 Quick Fact: The average customer saves £352 yearly by switching to SIM only!
                  </p>
                </div>
              </div>
            </div>

            {/* Steps Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-gray-900">Getting Started is Simple</h3>
              <p className="text-xl text-center text-gray-600 mb-8">4 Easy Steps to Switch:</p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-[#FC5185]">1. Pick Your Perfect Plan</h4>
                  <p className="text-gray-600">Choose your ideal data, minutes, and text bundle - all without the hefty phone payments.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-[#FC5185]">2. Keep Your Number</h4>
                  <p className="text-gray-600">Text to get your PAC code - it's like your phone number's passport to its new home.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-[#FC5185]">3. Welcome Your New SIM</h4>
                  <p className="text-gray-600">Your shiny new SIM card arrives, ready for action.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-semibold mb-3 text-[#FC5185]">4. Start Saving</h4>
                  <p className="text-gray-600">Pop in your SIM and enjoy lower bills instantly!</p>
                </div>
              </div>
            </div>

            {/* Current Network Section */}
            <div className="bg-gray-50 rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Already with a Network?</h3>
              <p className="text-gray-700 leading-relaxed">
                Staying loyal? Great! Switching to SIM only with your current provider is usually just a few clicks away. 
                Found a better deal elsewhere? No problem - just check with your network about making the switch.
              </p>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">Making the Most of Your Deal</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2" />
                    Mix and match data allowances to your needs
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2" />
                    Choose flexible 30-day or value-packed 12-month plans
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2" />
                    Enjoy perks like data rollover or entertainment subscriptions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2" />
                    Switch easily if you find a better deal
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ready to Start Saving?</h3>
              <p className="text-gray-700">
                Compare our latest SIM only deals and join thousands of smart switchers paying less for more.
              </p>
              <Button className="bg-[#FC5185] hover:bg-[#FC5185]/90 text-white px-8 py-3 text-lg">
                Compare Deals Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SimOnly;
