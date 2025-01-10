import React from 'react';
import { Check, AlertCircle, Scale } from 'lucide-react';

const BudgetBroadbandGuide = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Budget-Friendly Broadband: Is Cheap Internet Right For You?
          </h2>
          <p className="text-gray-700 mb-12 text-lg">
            When considering a cheap broadband package, it's important to weigh all the factors - especially during these challenging economic times. Here's a comprehensive look at the advantages and limitations of budget broadband options.
          </p>

          {/* Benefits Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Benefits of Choosing Cheap Broadband</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Cost-Effective Solution */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Cost-Effective Solution</h4>
                <ul className="space-y-3">
                  {[
                    'Monthly prices starting from as low as £18',
                    'No hidden fees or unexpected charges',
                    'Perfect for cost-conscious households',
                    'Ideal for basic internet usage'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Superfast Speeds Available */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Superfast Speeds Available</h4>
                <ul className="space-y-3">
                  {[
                    'Access to part-fibre connections',
                    'Speeds suitable for everyday browsing',
                    'Sufficient for streaming and basic gaming',
                    'Most packages offer 30-67Mbps'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Straightforward Service */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Straightforward Service</h4>
                <ul className="space-y-3">
                  {[
                    'No complicated features to manage',
                    'Simple setup and installation',
                    'Clear, transparent pricing',
                    'Easy-to-understand contracts'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Limitations Section */}
          <div className="space-y-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Limitations to Consider</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Provider Restrictions */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Provider Restrictions</h4>
                <ul className="space-y-3">
                  {[
                    'Limited choice of internet service providers',
                    'Fewer customer service options',
                    'May have shorter operating history',
                    'Less extensive network coverage'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Speed Constraints */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Speed Constraints</h4>
                <ul className="space-y-3">
                  {[
                    'Usually capped at lower speeds',
                    'Not suitable for heavy gaming',
                    'Limited for large households',
                    'May struggle with multiple devices'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service Limitations */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Service Limitations</h4>
                <ul className="space-y-3">
                  {[
                    'Basic packages without extras',
                    'No bundled TV services',
                    'Limited router options',
                    'Minimal add-on features'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Making Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6" />
              Making Your Decision
            </h3>
            <p className="text-gray-700 mb-4">When deciding if cheap broadband is right for you, consider:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Your monthly internet usage patterns
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Number of connected devices in your home
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Important features for your household
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                Long-term value versus initial savings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetBroadbandGuide;