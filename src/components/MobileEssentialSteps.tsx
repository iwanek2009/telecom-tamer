import React from 'react';
import { Button } from "@/components/ui/button";

interface Step {
  title: string;
  description: string;
  points: string[];
  note?: string;
}

const MobileEssentialSteps = () => {
  const steps: Step[] = [
    {
      title: "Choose your perfect phone",
      description: "Consider what matters most in your next device:",
      points: [
        "Latest tech or mid-range value",
        "Battery life and screen size",
        "Camera quality and storage space",
        "Brand preference (iPhone, Samsung, Google)"
      ]
    },
    {
      title: "Calculate your monthly needs",
      description: "Most plans include unlimited calls and texts, so focus on:",
      points: [
        "Your typical data usage",
        "Streaming habits (Netflix, YouTube, Spotify)",
        "Social media and gaming time",
        "Work requirements (email, video calls)"
      ],
      note: "Not sure about data? Use our calculator to get a personalized estimate."
    },
    {
      title: "Check network coverage",
      description: "Before signing any contract:",
      points: [
        "Test coverage at home and work",
        "Compare 4G and 5G availability",
        "Read customer reviews",
        "Consider family and friends' network experiences"
      ]
    },
    {
      title: "Balance your budget",
      description: "Understanding the full costs:",
      points: [
        "Higher upfront payment = Lower monthly costs",
        "Contract length (12-36 months)",
        "Total cost over contract period",
        "Additional features included (insurance, roaming)"
      ]
    }
  ];

  const scrollToFilters = () => {
    const filtersSection = document.querySelector('#filters-section');
    if (filtersSection) {
      filtersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#FC5185]/40 via-[#FC5185]/30 to-[#FC5185]/20 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Finding the perfect phone deal: 4 essential steps
          </h2>
          <p className="text-center text-gray-700 mb-12">
            Want to get the best value from your next phone contract? Here's your simple guide to making the right choice:
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/20"
              >
                <div className="relative">
                  <span className="absolute -top-4 -left-4 w-8 h-8 flex items-center justify-center bg-[#FC5185] text-white rounded-full font-semibold">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold mb-4 text-black group-hover:text-[#FC5185] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-2">
                        <span className="text-[#FC5185] mt-1">•</span>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {step.note && (
                    <p className="mt-6 text-sm text-gray-600 italic bg-gray-50 p-3 rounded-lg border border-gray-100">
                      {step.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 italic">
              Remember: The cheapest monthly price isn't always the best deal - look at the total package and what you're getting for your money.
            </p>
            <Button 
              className="bg-[#FC5185] hover:bg-[#FC5185]/90 text-white font-semibold px-8 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              onClick={scrollToFilters}
            >
              Compare Deals Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileEssentialSteps;