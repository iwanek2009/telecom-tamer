import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { Smartphone, Wifi } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compare UK's Best Deals
          </h1>
          <p className="text-xl text-gray-600">
            Find the perfect mobile or broadband package for your needs
          </p>
        </div>
        
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
      </main>
    </div>
  );
};

export default Index;