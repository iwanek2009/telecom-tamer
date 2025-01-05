import { Header } from '../components/Header';
import { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';

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
      <div className="bg-[#FFDEE2]">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Compare broadband deals
                </h1>
                
                {/* Postcode Search */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter your postcode"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value)}
                      className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-black/90 transition-colors flex items-center gap-2">
                      Find deals
                      <ArrowRight size={20} />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Privacy notice: We'll only use your postcode to find deals in your area
                  </p>
                </div>
              </div>

              {/* Tips Sections */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                  <h2 className="text-xl font-bold mb-3 text-gray-900">How to get the best value broadband?</h2>
                  <p className="text-gray-700 mb-3">
                    It's essential to compare different providers and check what speeds are actually available at your address before making a decision.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Next, look at the total cost of your package, including any setup fees, equipment charges and whether prices will increase during your contract.
                  </p>
                  <a href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center gap-2">
                    Read our guide on how to save money on your broadband deal
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                  <h2 className="text-xl font-bold mb-3 text-gray-900">What speed do you really need?</h2>
                  <p className="text-gray-700 mb-3">
                    Your ideal broadband speed depends on how many people use the internet in your home and what you use it for, like streaming or gaming.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Next, consider peak usage times in your household and whether you need consistently fast speeds for working from home or other activities.
                  </p>
                  <a href="#" className="text-pink-600 hover:text-pink-700 font-medium inline-flex items-center gap-2">
                    Read our guide on choosing the right broadband speed
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:flex items-center justify-center">
              <img 
                src="/lovable-uploads/54030dcc-c9dd-418b-8177-f68b449a6108.png"
                alt="Person using tablet" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Deals */}
        <div className="grid md:grid-cols-2 gap-6">
          {mockDeals.map((deal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{deal.provider}</h3>
                <span className="text-2xl font-bold text-secondary">£{deal.price}/mo</span>
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

export default Broadband;