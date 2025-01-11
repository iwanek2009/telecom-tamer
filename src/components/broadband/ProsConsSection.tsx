import React from 'react';
import { ThumbsUp, ThumbsDown, Video, Cloud, Tv, Wifi, PoundSterling, Home, Users2, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';

const ProsConsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Is 100Mbps Broadband Right For Your Home? Pros and Cons Explained
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Before choosing a 100Mbps broadband package, it's important to understand both its advantages and limitations. Here's what you need to know to make an informed decision.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Benefits Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <ThumbsUp className="text-green-500" />
                Benefits of 100Mbps Broadband
              </h3>

              <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-6 rounded-xl border border-[#3FC1C9]/20">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Video className="text-primary w-5 h-5" />
                  Perfect for Remote Work
                </h4>
                <ul className="space-y-2">
                  {["Smooth video conferencing", "Quick file uploads and downloads", 
                    "Reliable connection for cloud services", "Ideal for accessing large work files"]
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-6 rounded-xl border border-[#3FC1C9]/20">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Tv className="text-primary w-5 h-5" />
                  Enhanced Entertainment Experience
                </h4>
                <ul className="space-y-2">
                  {["Stream 4K content without buffering", "Multiple users can stream HD simultaneously",
                    "Lag-free online gaming experience", "Support for multiple smart home devices"]
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-6 rounded-xl border border-[#3FC1C9]/20">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Wifi className="text-primary w-5 h-5" />
                  Future-Ready Technology
                </h4>
                <ul className="space-y-2">
                  {["Access to full fibre infrastructure", "Potential to upgrade to gigabit speeds",
                    "Compatible with latest internet technologies", "Ready for increasing bandwidth demands"]
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Limitations Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <ThumbsDown className="text-red-500" />
                Limitations to Consider
              </h3>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Home className="text-gray-700 w-5 h-5" />
                  Limited Availability
                </h4>
                <ul className="space-y-2">
                  {["Not available in all UK locations", "Rural areas may have limited access",
                    "Dependent on local infrastructure", "Installation may require additional work"]
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <PoundSterling className="text-gray-700 w-5 h-5" />
                  Cost Considerations
                </h4>
                <ul className="space-y-2">
                  {["Higher monthly costs than standard broadband", "Premium pricing from major providers",
                    "Installation fees may apply", "Longer contract commitments"]
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Users2 className="text-gray-700 w-5 h-5" />
                  Potentially Unnecessary Power
                </h4>
                <ul className="space-y-2">
                  {["Excess speed for basic internet users", "Small households may not need this capacity",
                    "Basic browsing doesn't require 100Mbps", "Standard broadband might suffice"]
                    .map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-gray-500" />
                        {item}
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Making Section */}
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-xl border border-[#3FC1C9]/20">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Making Your Decision</h3>
            <p className="text-gray-700 mb-4">Consider these factors before choosing 100Mbps broadband:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {["Number of household internet users", "Types of online activities",
                "Budget constraints", "Local availability options"]
                .map((item, index) => (
                  <li key={index} className="flex items-center gap-2 bg-white/80 p-4 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProsConsSection;