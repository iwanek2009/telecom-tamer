import React from 'react';
import { Building2, Filter, CreditCard } from 'lucide-react';

const BroadbandComparisonSteps = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFDEE2] to-[#F1F0FB] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#221F26] mb-4">
            How to compare broadband deals
          </h2>
          <p className="text-[#7E69AB] text-lg">
            You always have a <span className="font-semibold">14-day 'cooling off' period</span>, during which you can cancel your request to switch broadband provider – free of charge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#9b87f5] bg-opacity-10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-[#9b87f5]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#221F26] mb-4">Enter your details</h3>
            <p className="text-[#7E69AB]">
              Add your address into our postcode checker above and browse a wide range of deals available to your home.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#9b87f5] bg-opacity-10 rounded-full flex items-center justify-center">
                <Filter className="w-8 h-8 text-[#9b87f5]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#221F26] mb-4">Choose a personalised deal</h3>
            <p className="text-[#7E69AB]">
              Filter your results by speed, provider, contract length and more to find a deal that suits you best.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#9b87f5] bg-opacity-10 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-[#9b87f5]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#221F26] mb-4">Complete your switch</h3>
            <p className="text-[#7E69AB]">
              Sign up to your new deal on your chosen broadband provider's site. Make sure to check your contract information is correct.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandComparisonSteps;