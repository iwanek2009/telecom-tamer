import { Header } from '../components/Header';
import { useState } from 'react';
import { Slider } from "@/components/ui/slider";

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