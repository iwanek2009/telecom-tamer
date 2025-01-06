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
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-700 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-black mr-2">•</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
                {step.note && (
                  <p className="mt-4 text-sm text-black italic">
                    {step.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 italic">
              Remember: The cheapest monthly price isn't always the best deal - look at the total package and what you're getting for your money.
            </p>
            <Button 
              className="bg-black hover:bg-black/90 text-white"
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