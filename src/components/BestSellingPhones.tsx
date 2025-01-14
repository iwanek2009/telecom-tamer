import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BestSellingPhones = () => {
  const phones = [
    {
      name: "iPhone 16",
      image: "/lovable-uploads/65638d8f-da22-45c9-966a-142a2b76fed9.png",
      price: "29.00"
    },
    {
      name: "iPhone 15",
      image: "/lovable-uploads/595d2154-b080-4524-b27e-e84c406410c4.png",
      price: "26.00"
    },
    {
      name: "iPhone 14",
      image: "/lovable-uploads/876d413a-cf6d-4adb-b306-4ee86ff18df6.png",
      price: "57.49"
    },
    {
      name: "iPhone 13",
      image: "/lovable-uploads/a369d0f8-e7da-42c1-b9dd-cdf0bd8a22ea.png",
      price: "20.00"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Best selling mobile phones</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {phones.map((phone, index) => (
            <div key={index} className="flex flex-col items-center space-y-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="relative w-full flex-grow">
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  className="w-32 sm:w-48 h-auto mx-auto"
                />
              </div>
              <div className="text-center w-full mt-auto">
                <p className="text-sm font-medium text-gray-600">Apple</p>
                <h3 className="text-xl font-bold mb-2">{phone.name}</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">No upfront cost from</p>
                  <p className="font-bold">£{phone.price} per month</p>
                </div>
                <Link to="/mobile" className="block w-[90%] mx-auto">
                  <Button 
                    variant="default"
                    className="bg-pink-500 hover:bg-pink-600 w-full py-1.5"
                  >
                    See all deals
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingPhones;