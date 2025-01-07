import React from 'react';
import { Search, SlidersHorizontal, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BroadbandSteps = () => {
  const steps = [
    {
      title: "Check Availability",
      description: "Simply enter your postcode to discover all available packages in your area. We'll show you real speeds and genuine options for your exact location.",
      icon: <Search className="w-8 h-8" />
    },
    {
      title: "Compare and Choose",
      description: "Use our smart comparison tools to filter and sort packages by what matters most to you - whether that's speed, value, or contract length.",
      icon: <SlidersHorizontal className="w-8 h-8" />
    },
    {
      title: "Access Exclusive Deals",
      description: "Found your ideal package? Click through to your chosen provider to access special offers and begin your upgrade journey. Many providers offer online-only discounts when you switch through our platform.",
      icon: <Tag className="w-8 h-8" />
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Your perfect broadband deal is just a few clicks away
        </h2>
        <p className="text-center text-gray-600 mb-12">Let's get started!</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BroadbandSteps;