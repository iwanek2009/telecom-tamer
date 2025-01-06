import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from './ui/button';

const ContractComparison = () => {
  const scrollToFilters = () => {
    const filtersSection = document.querySelector('#filters-section');
    if (filtersSection) {
      filtersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Benefits and Drawbacks of Monthly Phone Contracts
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Advantages */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              ADVANTAGES
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Spread the cost</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Latest phones available with minimal upfront payment - get an iPhone 15 or Samsung S24 for a fraction of the retail price</li>
                  <li>• Break down £1000+ device costs into manageable monthly payments from £30-£60</li>
                  <li>• Access premium features and high storage options without large initial investment</li>
                  <li>• Ability to upgrade to newer models through early upgrade programs</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Better value packages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Generous data allowances typically starting from 25GB up to unlimited</li>
                  <li>• All plans include unlimited UK calls and texts as standard</li>
                  <li>• EU roaming options often included (worth £2-£10 per day abroad)</li>
                  <li>• Premium network features like 5G access, Wi-Fi calling, and visual voicemail</li>
                  <li>• Family discounts and multi-line savings available</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Added convenience</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Set up Direct Debit for hassle-free automatic payments</li>
                  <li>• No running out of credit or emergency top-ups needed</li>
                  <li>• Easy-to-track monthly bills and usage through network apps</li>
                  <li>• Simple upgrade process when your contract ends</li>
                  <li>• One bill covering both phone and usage</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">4. Extra perks</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Free subscriptions to popular services like Netflix, Disney+, or Spotify (worth up to £15/month)</li>
                  <li>• Additional cloud storage for photos and files (usually 50GB-100GB)</li>
                  <li>• Priority access to concert and event tickets</li>
                  <li>• Network rewards programs offering weekly/monthly benefits</li>
                  <li>• Phone insurance options and extended warranty coverage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disadvantages */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              DISADVANTAGES
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Long-term commitment</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Most contracts lock you in for 24-36 months</li>
                  <li>• Early termination fees can cost hundreds of pounds</li>
                  <li>• Limited flexibility to change networks if coverage issues arise</li>
                  <li>• Stuck with same phone unless you pay early upgrade fees</li>
                  <li>• Must maintain consistent monthly payments</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Financial obligations</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Credit checks required - may affect credit score</li>
                  <li>• Monthly payments must be maintained even if financial situation changes</li>
                  <li>• Typical contracts range from £35-£75 per month</li>
                  <li>• Automatic renewal if you don't give notice</li>
                  <li>• Potential price increases during contract period</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">3. Higher overall cost</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Total cost over contract often £200-£300 more than buying outright</li>
                  <li>• Interest effectively included in monthly payments</li>
                  <li>• Additional insurance costs £5-£15 per month</li>
                  <li>• Setup or activation fees may apply</li>
                  <li>• Premium rate numbers and international calls usually extra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendation Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Make Your Choice</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Consider monthly contracts if you:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Want the latest devices without large upfront costs</li>
                <li>• Need generous data allowances</li>
                <li>• Value convenience and included extras</li>
                <li>• Can commit to regular payments</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Choose SIM-only if you:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Already have a phone you're happy with</li>
                <li>• Prefer flexibility to switch providers</li>
                <li>• Want to minimize monthly costs</li>
                <li>• Don't need the latest handset</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-6">Use our comparison tool to find the best deal for your needs and budget.</p>
            <Button 
              onClick={scrollToFilters}
              className="bg-[#FC5185] hover:bg-[#FC5185]/90 text-white px-8 py-3 rounded-lg text-lg"
            >
              Compare Deals Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContractComparison;