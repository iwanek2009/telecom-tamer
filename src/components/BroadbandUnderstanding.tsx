import React from 'react';
import { Wifi, Monitor, Gamepad2, MessageCircle, ShoppingCart, Video, Cable, Router, Satellite } from 'lucide-react';
import { Link } from 'react-router-dom';

const BroadbandUnderstanding = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-[#40E0D0] via-[#40E0D0]/80 to-[#98F5E1] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Understanding UK Broadband: A Guide to Home Internet
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">What is broadband internet?</h3>
            <p className="text-gray-700 mb-6">
              Broadband internet is a permanent internet connection in your home that provides access to online services through a provider's network infrastructure. Depending on the technology, it can be delivered through traditional telephone lines or modern fiber optic connections. The signal reaches your Wi-Fi router, which distributes internet wirelessly throughout your home.
            </p>
            
            <h4 className="text-lg font-semibold text-black mb-4">With broadband internet you can:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                { text: 'Watch movies and TV shows', icon: Monitor },
                { text: 'Work from home', icon: Wifi },
                { text: 'Play online games', icon: Gamepad2 },
                { text: 'Use social media', icon: MessageCircle },
                { text: 'Shop online', icon: ShoppingCart },
                { text: 'Video chat with family and friends', icon: Video }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <item.icon className="w-5 h-5 text-black" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-black mb-6">Available types of broadband in the UK:</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Part-Fibre Broadband */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cable className="w-6 h-6 text-black" />
                <h4 className="text-xl font-semibold text-black">Part-Fibre Broadband</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Available to 98% of UK homes</li>
                <li>• Offers speeds of 30-70Mbps</li>
                <li>• Most common type in the UK</li>
                <li>• Also known as "fibre to the cabinet"</li>
              </ul>
            </div>

            {/* Full Fibre Broadband */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Router className="w-6 h-6 text-black" />
                <Link 
                  to="/broadband/fibre-broadband" 
                  className="hover:text-primary transition-colors"
                  onClick={scrollToTop}
                >
                  <h4 className="text-xl font-semibold text-black">Full Fibre Broadband</h4>
                </Link>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Available to 69% of UK homes</li>
                <li>• Ultra-fast speeds from 100Mbps to 1Gbps</li>
                <li>• Direct fibre connection to your home</li>
                <li>• Known as "fibre to the premises"</li>
              </ul>
            </div>

            {/* Virgin Media Cable */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cable className="w-6 h-6 text-black" />
                <h4 className="text-xl font-semibold text-black">Virgin Media Cable</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Coverage in 60% of UK homes</li>
                <li>• Speeds up to 1Gbps</li>
                <li>• Independent fibre network</li>
                <li>• Mainly available in urban areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="w-6 h-6 text-black" />
              <h4 className="text-xl font-semibold text-black">Alternative options:</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>4G/5G home internet:</strong> Great backup or main connection where fibre isn't available</li>
              <li>• <strong>Standard ADSL:</strong> Basic 10Mbps speeds through traditional phone lines</li>
              <li>• <strong>Satellite internet:</strong> Available anywhere with clear sky view, ideal for remote locations</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandUnderstanding;
