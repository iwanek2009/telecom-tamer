import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { Diamond, Handshake, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import NetworksComparison from '../components/NetworksComparison';

const Index = () => {
  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-[50px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Smart choices,
              <br />
              better <span className="text-pink-500">savings.</span>
            </h1>
            <p className="text-lg text-gray-600">
              Find your perfect deal - compare all networks today
            </p>
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 text-base rounded-lg"
              onClick={scrollToServices}
            >
              Get started
            </Button>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/f290a477-bb52-4371-a6e7-a84c27b974a7.png"
              alt="Person using smartphone" 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Compare deals, switch and save</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find the perfect mobile contract at Smartfony.co.uk. We compare deals from all major UK providers to help you save time and money.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="Best broadband"
              description="Compare our best broadband deals for January 2025."
              icon="/lovable-uploads/7a050d18-df7e-4165-a0c7-4db83b4caef2.png"
              link="/broadband"
              buttonText="Compare broadband"
              buttonColor="bg-cyan-400"
            />
            <ServiceCard
              title="Mobile phones"
              description="Compare latest mobile phone deals and offers"
              icon="/lovable-uploads/1e0bafbd-7c40-465e-b337-accaade89faf.png"
              link="/mobile"
              buttonText="See deals"
              buttonColor="bg-pink-500"
            />
            <ServiceCard
              title="Sim only"
              description="Find and compare great deals on your SIM only contract"
              icon="/lovable-uploads/d554bfa8-a844-4d1a-ac9f-a1862dc0e431.png"
              link="/sim"
              buttonText="Compare SIM deals"
              buttonColor="bg-blue-700"
            />
          </div>
        </div>
      </section>

      {/* Why Compare Section */}
      <section className="bg-[#1a1f2e] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why compare with us?</h2>
            <p className="text-lg max-w-3xl mx-auto">
              We search all networks daily to bring you the biggest savings
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl text-center animate-fade-in">
              <Diamond className="w-12 h-12 mx-auto mb-4 text-gray-800" />
              <h3 className="text-gray-900 text-xl font-bold mb-3">Unique Offers</h3>
              <p className="text-gray-600">
                Direct access to network deals and exclusive discounts not available on other sites.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center animate-fade-in">
              <Handshake className="w-12 h-12 mx-auto mb-4 text-gray-800" />
              <h3 className="text-gray-900 text-xl font-bold mb-3">Trusted Advice</h3>
              <p className="text-gray-600">
                As an independent service, we focus only on finding you the right deal.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center animate-fade-in">
              <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-gray-800" />
              <h3 className="text-gray-900 text-xl font-bold mb-3">Simple Switch</h3>
              <p className="text-gray-600">
                Compare and switch in minutes with our safe, hassle-free process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Phones Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Best selling mobile phones</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center space-y-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="relative w-full">
                <span className="absolute top-0 left-0 bg-[#fef9c3] text-black text-sm px-3 py-1 rounded-full">
                  Top selling
                </span>
                <img 
                  src="/lovable-uploads/936f3604-4a27-40ca-be2f-ab1d07159f23.png" 
                  alt="iPhone 16" 
                  className="w-32 sm:w-48 h-auto mx-auto"
                />
              </div>
              <div className="text-center w-full">
                <p className="text-sm font-medium text-gray-600">Apple</p>
                <h3 className="text-xl font-bold mb-2">iPhone 16</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">No upfront cost from</p>
                  <p className="font-bold">£29.00 per month</p>
                </div>
                <Button 
                  variant="default"
                  className="bg-black hover:bg-gray-800 w-full"
                >
                  See all deals
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <img 
                src="/lovable-uploads/936f3604-4a27-40ca-be2f-ab1d07159f23.png" 
                alt="iPhone 15" 
                className="w-32 sm:w-48 h-auto mx-auto"
              />
              <div className="text-center w-full">
                <p className="text-sm font-medium text-gray-600">Apple</p>
                <h3 className="text-xl font-bold mb-2">iPhone 15</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">No upfront cost from</p>
                  <p className="font-bold">£26.00 per month</p>
                </div>
                <Button 
                  variant="default"
                  className="bg-black hover:bg-gray-800 w-full"
                >
                  See all deals
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <img 
                src="/lovable-uploads/936f3604-4a27-40ca-be2f-ab1d07159f23.png" 
                alt="iPhone 16 Pro" 
                className="w-32 sm:w-48 h-auto mx-auto"
              />
              <div className="text-center w-full">
                <p className="text-sm font-medium text-gray-600">Apple</p>
                <h3 className="text-xl font-bold mb-2">iPhone 16 Pro</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="w-3 h-3 rounded-full bg-gray-300"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">No upfront cost from</p>
                  <p className="font-bold">£57.49 per month</p>
                </div>
                <Button 
                  variant="default"
                  className="bg-black hover:bg-gray-800 w-full"
                >
                  See all deals
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <img 
                src="/lovable-uploads/936f3604-4a27-40ca-be2f-ab1d07159f23.png" 
                alt="iPhone 13" 
                className="w-32 sm:w-48 h-auto mx-auto"
              />
              <div className="text-center w-full">
                <p className="text-sm font-medium text-gray-600">Apple</p>
                <h3 className="text-xl font-bold mb-2">iPhone 13</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-black"></span>
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">No upfront cost from</p>
                  <p className="font-bold">£20.00 per month</p>
                </div>
                <Button 
                  variant="default"
                  className="bg-black hover:bg-gray-800 w-full"
                >
                  See all deals
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networks Comparison Section - Moved to bottom */}
      <NetworksComparison />
    </div>
  );
};

export default Index;
