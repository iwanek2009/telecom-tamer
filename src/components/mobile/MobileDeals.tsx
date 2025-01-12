import React from 'react';
import { Button } from "@/components/ui/button";

interface Deal {
  provider: string;
  data: string;
  minutes: string;
  price: number;
  contract: string;
  network: string;
}

const MobileDeals = () => {
  const mockDeals: Deal[] = [
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
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">89,866 deals available</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">sort by</span>
            <select className="border rounded-md p-2">
              <option>Most Popular</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {mockDeals.map((deal, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-black">{deal.provider}</h3>
                <span className="text-2xl font-bold text-black">£{deal.price}/mo</span>
              </div>
              <div className="space-y-2 text-black">
                <p>✓ {deal.data} Data</p>
                <p>✓ {deal.minutes} Minutes</p>
                <p>✓ {deal.network}</p>
                <p>✓ {deal.contract} contract</p>
              </div>
              <Button 
                className="w-full mt-4 bg-[#FC5185] text-white hover:bg-[#FC5185]/90"
              >
                View Deal
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileDeals;