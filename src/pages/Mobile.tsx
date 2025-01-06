import { Header } from '../components/Header';
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const Mobile = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  const mockDeals = [
    {
      provider: "VodaNet",
      data: "100GB",
      minutes: "Unlimited",
      price: 25,
      contract: "24 months",
      network: "4G/5G",
    },
    {
      provider: "TeleMobile",
      data: "50GB",
      minutes: "Unlimited",
      price: 20,
      contract: "12 months",
      network: "4G",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-[#FC5185] to-[#FC5185]/80 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Find your perfect phone deal
            </h1>
            <p className="text-lg md:text-xl text-pink-100 leading-relaxed">
              Ready to save on your next phone contract? We'll help you discover the best monthly plans and latest handsets at prices you'll love.
            </p>
            <p className="text-lg md:text-xl text-pink-100 leading-relaxed">
              Already have a phone you love? Check out our money-saving SIM only deals.
            </p>
            <div className="pt-4">
              <Button 
                className="bg-white text-[#FC5185] hover:bg-pink-50 px-8 py-6 text-lg font-semibold rounded-full"
              >
                Compare Deals Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Mobile Deals</h1>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (£{priceRange[0]} - £{priceRange[1]})
              </label>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Deals */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockDeals.map((deal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{deal.provider}</h3>
                <span className="text-2xl font-bold text-secondary">£{deal.price}/mo</span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>✓ {deal.data} Data</p>
                <p>✓ {deal.minutes} Minutes</p>
                <p>✓ {deal.network}</p>
                <p>✓ {deal.contract} contract</p>
              </div>
              <button className="w-full mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
                View Deal
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mobile;