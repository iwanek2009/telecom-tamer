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
    </div>
  );
};

export default MobileDeals;