import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';

const BroadbandGuide = () => {
  return (
    <section className="bg-white py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="choose-provider" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            How to choose the right broadband provider in the UK
          </h2>
          
          <p className="text-gray-600 mb-6">
            When comparing broadband providers, it's important to check their performance in key areas.
            The ideal provider should match your specific needs in several aspects, including:
          </p>

          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Internet speed and stability',
              'Overall value for money',
              'Service reliability and uptime',
              'Quality of customer service',
              'TV package options if needed',
              'Equipment quality and features',
              'Price stability during contract'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 mb-8">
            The best approach is to determine which features are most important to you,
            then compare providers based on those specific needs.
            It's worth checking independent reviews and awards to assess provider performance.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-500" />
              Important considerations:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Most providers implement annual price increases during the contract</li>
              <li>• Some providers offer fixed-price contracts but may have limited coverage areas</li>
              <li>• The ideal time to switch is when your current contract ends</li>
              <li>• Switching mid-contract usually involves early termination fees</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">The switching process:</h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. Choose your preferred broadband package</li>
              <li>2. Provide your details and confirm your chosen deal</li>
              <li>3. Review all charges and contract terms</li>
              <li>4. Select your preferred installation date</li>
              <li>5. Receive confirmation and activation details</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandGuide;