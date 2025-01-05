import { Header } from '../components/Header';
import { useState } from 'react';
import { Search } from 'lucide-react';

const Broadband = () => {
  const [postcode, setPostcode] = useState('');
  
  const mockDeals = [
    {
      provider: "FastNet",
      speed: "100 Mbps",
      price: 30,
      contract: "18 months",
      features: ["Unlimited Data", "Free Router", "No Setup Fee"],
    },
    {
      provider: "SpeedFiber",
      speed: "200 Mbps",
      price: 35,
      contract: "24 months",
      features: ["Unlimited Data", "Free Router", "TV Package Included"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/a9ce3e31-61fb-405d-8fde-a3f3bcc07744.png" 
                alt="Broadband Icon" 
                className="w-16 h-16"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Best broadband
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Compare our best broadband deals for January 2025.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Postcode Checker */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8 max-w-2xl mx-auto -mt-10 relative z-10 animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Check Available Deals</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter your postcode"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="bg-cyan-400 text-white px-4 py-2 rounded-md hover:bg-cyan-500 transition-colors flex items-center gap-2">
              <Search size={20} />
              Compare broadband
            </button>
          </div>
        </div>

        {/* Deals */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockDeals.map((deal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{deal.provider}</h3>
                <span className="text-2xl font-bold text-cyan-500">£{deal.price}/mo</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-medium">{deal.speed}</span>
                <p className="text-gray-600">{deal.contract} contract</p>
              </div>
              <div className="space-y-2 text-gray-600">
                {deal.features.map((feature, i) => (
                  <p key={i}>✓ {feature}</p>
                ))}
              </div>
              <button className="w-full mt-4 bg-cyan-400 text-white py-2 rounded-md hover:bg-cyan-500 transition-colors">
                View Deal
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Broadband;