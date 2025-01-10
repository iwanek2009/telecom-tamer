import React from 'react';
import { Check, Wifi, Router, Zap } from 'lucide-react';

const FibreBroadbandGuide = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Best Fibre Broadband Deals: Your Complete 2024 Buying Guide
          </h2>
          <p className="text-gray-700 mb-12">
            Looking for the best fibre broadband deals in the UK? Our comprehensive guide breaks down everything you need to know about current fibre broadband deals and how to select the perfect package for your home.
          </p>

          <div className="space-y-8">
            {/* Compare Deals Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compare Fibre Broadband Deals By Type</h3>
              <p className="text-gray-700 mb-6">
                Today's fibre broadband deals fall into two main categories, each offering different value propositions:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Standard Fibre */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Router className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-semibold">Standard Fibre Broadband Deals (FTTC)</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Speeds of 30-70Mbps',
                      'Widespread availability (96% UK coverage)',
                      'Competitive pricing from £22-£35 monthly',
                      'Perfect for everyday streaming and browsing'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Fibre */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-semibold">Full Fibre Broadband Deals (FTTP)</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Ultra-fast speeds from 100Mbps to 2Gbps',
                      'Growing availability (now at 62% coverage)',
                      'Entry-level deals starting at £22',
                      'Premium packages up to £84 monthly'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FibreBroadbandGuide;