import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SimFilters } from "./SimFilters";

const plans = [
  {
    name: "Basic",
    data: "10GB",
    price: 12,
    features: [
      "Unlimited calls & texts",
      "5G Ready",
      "EU Roaming",
      "No contract lock-in"
    ]
  },
  {
    name: "Standard",
    data: "30GB",
    price: 18,
    features: [
      "Unlimited calls & texts",
      "5G Ready",
      "EU Roaming",
      "No contract lock-in",
      "Data rollover"
    ]
  },
  {
    name: "Unlimited",
    data: "Unlimited",
    price: 25,
    features: [
      "Unlimited calls & texts",
      "5G Ready",
      "EU Roaming",
      "No contract lock-in",
      "Data rollover",
      "Priority customer service"
    ]
  }
];

export const SimPlansSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <div className="md:col-span-1">
            <SimFilters />
          </div>
          <div className="md:col-span-3">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-[#FC5185] mb-2">
                      £{plan.price}
                      <span className="text-base font-normal text-gray-600">/month</span>
                    </div>
                    <div className="text-lg text-gray-600 mb-6">{plan.data} Data</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#FC5185] hover:bg-[#FC5185]/90">
                    Choose Plan
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};