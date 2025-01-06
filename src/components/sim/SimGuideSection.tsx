import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

export const SimGuideSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FC5185]/5 via-transparent to-[#FC5185]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Finding Your Perfect SIM Only Deal 🎯
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Your 3-Step Guide to the Best Value
          </p>

          <div className="space-y-8">
            {/* Budget Section */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Set Your Budget Smart 💰
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Start from just £1.58/month for basic plans</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Get 5G at no extra cost with most networks</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Choose between budget and premium bundles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Find the sweet spot between price and features</span>
                </li>
              </ul>
            </Card>

            {/* Data Usage Section */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Right-Size Your Data 📱
              </h3>
              <div className="bg-[#FC5185]/10 p-4 rounded-lg mb-6">
                <p className="font-semibold">
                  Did You Know? The average user needs only 9.9GB monthly
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Streaming videos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Social media browsing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>Web surfing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                    <span>App updates</span>
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2">Money-Saving Tip:</p>
                  <p className="text-gray-600">
                    Check your current usage in your network's app - you might need less data than you think!
                  </p>
                </div>
              </div>
            </Card>

            {/* Contract Length Section */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Choose Your Perfect Contract Length ⏰
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* 30-Day Plans */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Commitment-Free: 30-Day Plans</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Switch anytime</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Perfect for flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Great for testing networks</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Popular with Lebara, giffgaff, SMARTY
                  </p>
                </div>

                {/* 12-Month Plans */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Middle Ground: 12-Month Deals</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Better monthly rates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Annual flexibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Balance of savings and freedom</span>
                    </li>
                  </ul>
                </div>

                {/* 18/24-Month Plans */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold">Long-Term Savings: 18/24-Month Plans</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Best value rates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Ideal for settled users</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                      <span>Maximum savings potential</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Popular with Vodafone and O2
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Tips */}
            <Card className="p-8 bg-gradient-to-r from-[#FC5185]/10 to-transparent">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Check your current data usage first</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Consider seasonal usage changes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Look for special promotions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#FC5185] mr-2 mt-1" />
                  <span>Don't forget about network coverage</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};