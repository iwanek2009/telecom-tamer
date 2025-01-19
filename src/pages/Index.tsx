import { Header } from '../components/Header';
import { ServiceCard } from '../components/ServiceCard';
import { Diamond, Handshake, ShieldCheck } from 'lucide-react';
import NetworksComparison from '../components/NetworksComparison';
import BestSellingPhones from '../components/BestSellingPhones';
import { HeroSection } from '../components/HeroSection';
import { Helmet } from 'react-helmet';
import { Footer } from '../components/Footer';

const Index = () => {
  const scrollToServices = () => {
    document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Mobile Phones & Broadband Comparison | Find Best Deals</title>
        <meta 
          name="description" 
          content="Compare mobile phones, SIM only and broadband deals from all major UK providers. Find the perfect package with our easy comparison tools. Switch and save."
        />
      </Helmet>
      
      <Header />
      
      <HeroSection onGetStarted={scrollToServices} />

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
      <BestSellingPhones />

      {/* Networks Comparison Section */}
      <NetworksComparison />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Index;