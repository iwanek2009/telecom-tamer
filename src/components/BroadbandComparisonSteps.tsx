import React from 'react';
import { Building2, Filter, CreditCard } from 'lucide-react';

const BroadbandComparisonSteps = () => {
  return (
    <section className="bg-gradient-to-br from-[#40E0D0] via-[#40E0D0]/80 to-[#98F5E1] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            How to compare broadband deals
          </h2>
          <p className="text-black text-lg">
            Every new broadband contract includes a 14-day money-back guarantee, giving you the freedom to cancel and return to your previous provider at no cost
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Find available deals</h3>
            <p className="text-black">
              Simply enter your postcode to see what broadband packages are available in your area.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center">
                <Filter className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Choose the perfect package</h3>
            <p className="text-black">
              Sort and filter results by what matters to you - speed, price, provider, or contract length.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-4">Switch with confidence</h3>
            <p className="text-black">
              Complete your order through the provider's website. Don't worry - you'll have 14 days to change your mind, free of charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandComparisonSteps;