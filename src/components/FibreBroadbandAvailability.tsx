import React from 'react';
import { Globe, MapPin, Signal, Check, Wifi, Timer, AlertCircle } from 'lucide-react';

const FibreBroadbandAvailability = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can I Get Fibre Broadband? UK Availability Guide 2024
          </h2>
          <p className="text-gray-700 mb-12">
            Wondering about fibre broadband availability in your area? Here\'s a comprehensive guide to help you understand your options and check what\'s available at your address.
          </p>

          <div className="space-y-8">
            {/* Types Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Fibre Broadband Available in the UK</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Standard Coverage */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-semibold">Standard Fibre Broadband Coverage</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Available to 98% of UK properties',
                      'Speeds ranging from 30-70Mbps',
                      'Uses existing copper lines for the final connection',
                      'Perfect for typical household internet usage',
                      'Available from most major providers'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-secondary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Fibre Coverage */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Signal className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-semibold">Full Fibre Broadband Coverage</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      'Currently reaches 69% of UK homes',
                      'Delivers speeds from 100Mbps to 1Gbps+',
                      'Pure fibre connection directly to your property',
                      'Growing network with continuous expansion',
                      'Available from selected providers'
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

            {/* Understanding Speeds */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Understanding Available Speeds</h3>
              <div className="space-y-4">
                <p className="text-gray-700">Available fibre broadband speeds typically fall into three categories:</p>
                <ul className="space-y-4">
                  {[
                    'Superfast Fibre: 30-70Mbps - Widely available across the UK',
                    'Ultrafast Fibre: 100-900Mbps - Available in full fibre areas',
                    'Gigabit Fibre: 1000Mbps+ - Available in selected full fibre locations'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <Wifi className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* How to Check */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Check Your Fibre Broadband Availability</h3>
              <div className="space-y-4">
                <ul className="space-y-3">
                  {[
                    'Use your postcode in our availability checker',
                    'Review available fibre options in your area',
                    'Compare speeds and packages from different providers',
                    'Check estimated speeds for your specific address',
                    'Explore installation requirements and timeframes'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Not Available Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What If Fibre Broadband Isn\'t Available?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      'Register interest with local providers',
                      'Check planned network expansion dates',
                      'Consider alternative high-speed solutions',
                      'Monitor regular availability updates',
                      'Explore community fibre initiatives'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <AlertCircle className="w-5 h-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold flex items-center gap-2">
                    <Timer className="w-6 h-6 text-primary" />
                    Making the Most of Available Fibre Broadband
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Compare different provider offerings',
                      'Consider speed requirements for your household',
                      'Check contract lengths and installation costs',
                      'Review customer service ratings',
                      'Look for special introductory offers'
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

          <p className="text-gray-700 mt-8">
            Stay informed about fibre broadband availability in your area by regularly checking for updates, as network coverage continues to expand across the UK.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FibreBroadbandAvailability;