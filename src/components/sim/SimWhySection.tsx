import { Check } from "lucide-react";

export const SimWhySection = () => {
  return (
    <section className="bg-gradient-to-br from-[#FC5185]/5 to-[#FC5185]/10 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why SIM Only? Smart Choice, Bigger Savings 💡
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Money Talk 💰</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Save up to £352 yearly (that's nearly £30 each month!)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Avoid the £9.50 price rise on handset contracts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Pay less for the same data, minutes, and texts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Choose from budget-friendly flexible plans</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Freedom & Flexibility 🎯</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Keep using your beloved phone</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Pick from 12+ trusted networks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Switch plans easily with short-term contracts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Customize your data bundle as needed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Catch? 🤔</h3>
                <p className="text-gray-700 mb-4">
                  Just one - you'll need your own phone. While buying a new handset upfront might seem pricey, 
                  the long-term savings often make it worthwhile.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Perfect For You If:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>You're happy with your current phone</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>You want to slash your monthly bills</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>You prefer flexibility over commitment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>You're looking for the best value data plans</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};