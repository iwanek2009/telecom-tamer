import { Wifi, Globe, Users, CreditCard } from 'lucide-react';

export const ManchesterGuide = () => {
  return (
    <div className="mt-16 space-y-12">
      <div className="prose prose-gray max-w-none">
        <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
          Why Compare Broadband Deals in Manchester?
        </h2>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <p className="text-gray-600 mb-6">
            Manchester is a bustling city with diverse internet needs—students, professionals, families, and everyone in between. With so many providers competing in the area, you'll find a wide range of broadband packages featuring different speeds, prices, and contract lengths.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-primary mb-6 mt-12">
          How to Begin Your Search
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {['Enter Your Postcode', 'Select Current Provider', 'Browse Tailored Results', 'Pick Your Plan', 'Sign Up'].map((step, index) => (
            <div key={step} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <h4 className="text-lg font-semibold text-gray-900">{step}</h4>
              </div>
              <p className="text-gray-600">
                {index === 0 && "Start with a reputable broadband comparison site and input your Manchester postcode."}
                {index === 1 && "Often, these tools will ask who your current provider is to avoid showing deals you already have."}
                {index === 2 && "You'll see the latest offers tailored to your address, including discounted new-customer promotions."}
                {index === 3 && "Filter deals by speed, price, or package type (broadband only, TV + broadband, etc.) until you find the perfect match."}
                {index === 4 && "Complete the sign-up process through the provider's website, then arrange installation or activation details."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};