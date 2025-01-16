import React from 'react';
import { Button } from "@/components/ui/button";
import { Wifi, PoundSterling, Clock, Zap, Users, Gamepad, Monitor, Mail } from 'lucide-react';

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
    </div>
  );
};

export default LiverpoolBroadbandContent;