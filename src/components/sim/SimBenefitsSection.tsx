import { Button } from "@/components/ui/button";

export const SimBenefitsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
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
  );
};