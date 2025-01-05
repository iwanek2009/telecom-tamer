import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { Smartphone, Wifi } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Smart choices,
              <br />
              better <span className="text-pink-500">savings.</span>
            </h1>
            <p className="text-lg text-gray-600">
              Find your perfect deal - compare all networks today
            </p>
            <Button 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => window.location.href = '/mobile'}
            >
              Get started
            </Button>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" 
              alt="Woman using smartphone" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard
            title="Mobile Plans"
            description="Compare mobile phone contracts and SIM-only deals from leading providers"
            icon={<Smartphone />}
            link="/mobile"
          />
          <ServiceCard
            title="Broadband"
            description="Find the best broadband packages available in your area"
            icon={<Wifi />}
            link="/broadband"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;