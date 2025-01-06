import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';

const SimOnly = () => {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FC5185] to-[#FC5185]/80 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Perfect SIM Only Deal
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Compare the best SIM only deals from leading UK networks. Get more data for less with our exclusive offers.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      </section>

      {/* Network Coverage Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Network Coverage</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our SIM only deals work with all major UK networks, ensuring you get the best coverage wherever you are.
            </p>
            <img 
              src="/lovable-uploads/f47024ea-50f0-4583-89a7-f5cbc9e3beb9.png"
              alt="Network Coverage Map" 
              className="rounded-lg shadow-md mx-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SimOnly;