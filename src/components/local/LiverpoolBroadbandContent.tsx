import React from 'react';
import { Button } from "@/components/ui/button";
import { Wifi, PoundSterling, Clock, Zap, Users, Gamepad, Monitor, Mail, Router, MapPin, Home, CheckCircle2, AlertCircle, Laptop, Tv, Phone, Signal, HelpCircle } from 'lucide-react';

const LiverpoolBroadbandContent = () => {
  const scrollToWidget = () => {
    const widgetElement = document.getElementById('compare-deals');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-900">Broadband Deals in Liverpool - Find Your Perfect Connection</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Get connected with the best broadband deals Liverpool has to offer. Our comparison service helps you discover the perfect balance of speed and value, tailored to your digital lifestyle.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Liverpool Residents Choose Our Comparison Service</h3>
        <p className="text-gray-600 mb-8">
          Liverpool's digital landscape is evolving rapidly, with remote work, streaming, and online gaming becoming part of everyday life. Whether you're in Allerton or Walton, we'll help you find the broadband package that keeps you connected without breaking the bank.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <PoundSterling className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Best Value</h4>
            <p className="text-gray-600">Compare prices and find the most competitive deals in your area</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Wifi className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Speed Match</h4>
            <p className="text-gray-600">Find the perfect speed for your household's needs</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Clock className="w-10 h-10 text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Quick Switch</h4>
            <p className="text-gray-600">Easy and fast transition to your new provider</p>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Simple Steps to Your New Broadband Connection</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['Check Availability', 'Compare Options', 'Easy Switch'].map((step, index) => (
            <div key={step} className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <div>
                <h4 className="font-semibold mb-2">{step}</h4>
                <p className="text-gray-600 text-sm">
                  {index === 0 && "Use our postcode checker to see what's available in your area"}
                  {index === 1 && "Sort and filter deals based on what matters to you"}
                  {index === 2 && "Seamless transition to your new provider with our support"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Providers */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Featured Liverpool Broadband Providers</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Virgin Media",
              speed: "Superfast speeds up to 1Gb",
              price: "From £28 monthly",
              extra: "Exclusive 18-month deals"
            },
            {
              name: "BT Broadband",
              speed: "Reliable speeds up to 900Mb",
              price: "From £30 per month",
              extra: "£20 reward card for new customers"
            },
            {
              name: "Sky Broadband",
              speed: "Speed up to 500Mb",
              price: "Starting at £25 monthly",
              extra: "Netflix included for 12 months"
            },
            {
              name: "Hyperoptic",
              speed: "Full fibre up to 1Gb",
              price: "From £35 monthly",
              extra: "Zero setup costs"
            }
          ].map((provider) => (
            <div key={provider.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold mb-3">{provider.name}</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">{provider.speed}</p>
                <p className="font-semibold text-blue-600">{provider.price}</p>
                <p className="text-gray-500">{provider.extra}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Speed Guide */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900">Find Your Perfect Speed</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Mail className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Basic Usage (10-30Mb)</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Perfect for browsing and emails</li>
              <li>Ideal for 1-2 people</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Monitor className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Family Usage (30-100Mb)</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>Smooth HD streaming</li>
              <li>Great for 3-4 users</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <Gamepad className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Power Usage (100Mb+)</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>4K streaming & gaming</li>
              <li>Perfect for 5+ users</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Money Saving Tips */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Money-Saving Tips</h3>
        <ul className="grid md:grid-cols-2 gap-4 mb-8">
          <li className="flex items-center space-x-2">
            <PoundSterling className="w-5 h-5 text-green-600" />
            <span>Compare all available providers in your area</span>
          </li>
          <li className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-green-600" />
            <span>Look for special introductory offers</span>
          </li>
          <li className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-green-600" />
            <span>Consider the total contract cost</span>
          </li>
          <li className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-green-600" />
            <span>Check for bundled services</span>
          </li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
        <div className="grid gap-6">
          {[
            {
              question: "What types of broadband connections are most common in Liverpool?",
              answer: "Liverpool is well-served by a mix of broadband technologies, including part-fibre (FTTC), full-fibre (FTTP), and cable (e.g., Virgin Media). Mobile broadband (4G/5G) is also an option, especially where fiber access may be limited. Using a postcode checker is the best way to see which type is available at your specific address."
            },
            {
              question: "How do I know if I need superfast or ultrafast speeds?",
              answer: "This depends on your household's internet usage. If multiple people stream in HD or 4K, play games online, or work from home, you'll benefit from higher speeds (above 50–100Mbps). Smaller households with fewer devices might be fine with standard fiber speeds of around 30–50Mbps."
            },
            {
              question: "Are there any providers offering social tariffs in Liverpool?",
              answer: "Yes. Many major providers offer social tariffs—discounted broadband packages for customers receiving certain government benefits like Universal Credit. You typically need to provide proof of eligibility when signing up. It's worth checking each provider's dedicated social tariff page or contacting them directly for more details."
            },
            {
              question: "Will I need a landline for my broadband plan?",
              answer: "It depends on the type of broadband you choose. Part-fibre and copper ADSL services often require a phone line. Full-fibre and cable options like Virgin Media don't always need a traditional landline, though they may include phone services as part of a bundle."
            },
            {
              question: "Can I switch broadband providers before my contract ends?",
              answer: "While it's possible, most providers charge an early exit fee if you switch mid-contract. If you're near the end of your contract or already out of contract, you can typically switch without penalties. It's a good idea to check your current terms and any exit fees before making the move."
            },
            {
              question: "What if I'm moving to a different part of Liverpool?",
              answer: "If you're relocating within Liverpool, check your new postcode to see what speeds and providers are available there. Some providers allow you to transfer your existing plan if their coverage extends to your new location. Otherwise, you may need to cancel your current service and sign up for a new deal."
            },
            {
              question: "Are broadband and TV bundles worth the cost?",
              answer: "Bundles can be a good value if you regularly watch premium channels or want one monthly bill for multiple services. However, if you only stream from services like Netflix or Amazon Prime, you might be better off with a broadband-only plan. Always compare the total price of separate services vs. a bundled package to see which is more cost-effective."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex gap-3">
                <HelpCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center space-y-8">
        <Button 
          size="lg" 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={scrollToWidget}
        >
          Compare Liverpool Broadband Deals Now
        </Button>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-bold mb-4">Latest Featured Deals</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Virgin Media: 1Gb Fibre - £28/month</p>
            <p>BT: 900Mb Full Fibre - £30/month</p>
            <p>Sky: 500Mb + Netflix - £25/month</p>
          </div>
        </div>

        <p className="text-gray-600">
          Don't wait for better internet - compare Liverpool's best broadband deals today and find your perfect package.
        </p>
      </div>

      {/* Comprehensive Guide Section */}
      <div className="space-y-12 bg-gradient-to-br from-blue-50/50 to-blue-100/50 rounded-3xl p-8 md:p-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">How to Get Started with Your Broadband Search</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Use a Postcode Checker</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Enter your postcode to check available providers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Compare multiple offers and packages
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consider Your Needs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      Basic browsing and email
                    </li>
                    <li className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-blue-600" />
                      Working from home
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      Large households
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">What Affects Your Broadband Speed?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <Router className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Type of Connection</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Part-Fiber (30-70Mbps)</li>
                <li>• Full Fiber (100Mbps+)</li>
                <li>• Cable (up to 1Gbps)</li>
                <li>• Mobile Broadband (4G/5G)</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <Signal className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Distance Impact</h3>
              <p className="text-gray-700">
                Homes farther from street cabinets might experience slower speeds with part-fiber connections. Full fiber and cable tend to be more consistent.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <AlertCircle className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Home Setup</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Router placement matters</li>
                <li>• Peak time considerations</li>
                <li>• Device interference</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <Tv className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">TV Bundles</h3>
              <p className="text-gray-700">Premium channels and exclusive content available with selected packages.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Phone Line</h3>
              <p className="text-gray-700">Options for free weekend calls and international call bundles.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
              <Signal className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mobile Deals</h3>
              <p className="text-gray-700">Bundle your broadband with mobile plans for extra savings.</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Ready to Find Your Perfect Package?</h2>
          <p className="text-xl text-gray-600">Compare the latest broadband deals in Liverpool and find the perfect package for your needs.</p>
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={scrollToWidget}
          >
            Compare Deals Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LiverpoolBroadbandContent;
