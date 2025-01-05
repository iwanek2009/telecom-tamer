import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { Smartphone, Wifi, CreditCard, Diamond, Handshake, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
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
              onClick={() => window.location.href = '/mobile'}
            >
              Get started
            </Button>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="Woman using laptop" 
              className="w-full h-auto object-cover rounded-lg shadow-xl"
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

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
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
              icon={<Wifi className="w-8 h-8" />}
              link="/broadband"
              buttonText="Compare broadband"
              buttonColor="bg-cyan-400"
            />
            <ServiceCard
              title="Mobile phones"
              description="Compare latest mobile phone deals and offers"
              icon={<Smartphone className="w-8 h-8" />}
              link="/mobile"
              buttonText="See deals"
              buttonColor="bg-pink-500"
            />
            <ServiceCard
              title="Sim only"
              description="Find and compare great deals on your SIM only contract"
              icon={<CreditCard className="w-8 h-8" />}
              link="/sim"
              buttonText="Compare SIM deals"
              buttonColor="bg-blue-700"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;