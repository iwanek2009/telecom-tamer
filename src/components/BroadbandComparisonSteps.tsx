import React from 'react';
import { Search, Filter, CreditCard } from 'lucide-react';

const BroadbandComparisonSteps = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Twoja idealna oferta internetu jest na wyciągnięcie ręki
          </h2>
          <p className="text-lg text-gray-600">
            Przeprowadzimy Cię przez prosty proces składający się z trzech kroków:
          </p>
        </div>

        {/* Step 1 */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
            <div className="flex justify-center mb-6">
              <Search className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Find available deals</h3>
            <p className="text-gray-600">
              Simply enter your postcode to see what broadband packages are available in your area.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
            <div className="flex justify-center mb-6">
              <Filter className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose the perfect package</h3>
            <p className="text-gray-600">
              Sort and filter results by what matters to you - speed, price, provider, or contract length.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
            <div className="flex justify-center mb-6">
              <CreditCard className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Switch with confidence</h3>
            <p className="text-gray-600">
              Complete your order through the provider's website. Don't worry - you'll have 14 days to change your mind, free of charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandComparisonSteps;