import React from 'react';
import { CheckCircle2, Wifi, Router, Shield } from 'lucide-react';

export const ManchesterSteps = () => {
  return (
    <section className="py-12 space-y-12">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Step-by-Step: Finding the Right Fibre Deal</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Run a Postcode Check",
              description: "Use a comparison site or a provider's checker tool to confirm which fibre services reach your property."
            },
            {
              title: "Select Your Criteria",
              description: "Filter deals by speed, contract length, budget, or extras like TV bundles."
            },
            {
              title: "Compare Costs & Features",
              description: "Look beyond just the monthly fee—check setup charges, router costs, and in-contract price rise terms."
            },
            {
              title: "Sign Up Online",
              description: "Most providers have a straightforward sign-up process. Confirm your chosen speed and any optional services."
            },
            {
              title: "Installation & Go-Live Date",
              description: "Schedule an installation if needed (especially for full fibre) or set a go-live date. In many cases, the switch is handled seamlessly under One Touch Switch rules."
            }
          ].map((step, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#3FC1C9]/20"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Improving Your In-Home Wi-Fi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Router,
              title: "Router Positioning",
              description: "Place your router in a central location, away from thick walls or large metal objects."
            },
            {
              icon: Wifi,
              title: "Use Wi-Fi Boosters",
              description: "Larger homes or those with multiple floors might benefit from mesh systems or extenders to ensure coverage everywhere."
            },
            {
              icon: Shield,
              title: "Limit Interference",
              description: "Keep the router away from microwaves, cordless phones, and other devices that can disrupt signals."
            },
            {
              icon: CheckCircle2,
              title: "Check Connections",
              description: "If possible, use wired (Ethernet) connections for bandwidth-heavy activities like gaming or video conferencing."
            }
          ].map((tip, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#3FC1C9]/20"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <tip.icon className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold text-gray-900">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};