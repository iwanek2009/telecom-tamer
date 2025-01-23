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

        <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8 mt-12">
          What to Consider When Choosing a Broadband Deal
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">1. Contract Status</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Are You Out of Contract?</h4>
            <p className="text-gray-600 mb-6">
              If you're no longer tied to a plan, you may be paying more than necessary. Also, you're free to switch without exit fees, which means you can upgrade quickly and start saving.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">2. Monthly Budget</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">How Much Can You Afford?</h4>
            <p className="text-gray-600 mb-6">
              Aim for a deal that strikes a balance between speed and cost. Even if your current provider offers a retainer discount, compare other providers for a potentially better bargain.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">3. Required Internet Speed</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Usage and Number of Users</h4>
            <p className="text-gray-600 mb-6">
              A single occupant with basic web browsing needs can often manage with speeds around 20–35Mbps. Larger households or professionals working from home may require 50–100Mbps or more. Avid gamers and 4K streamers might benefit from ultra-fast plans above 100Mbps.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">4. Extra Services (TV, Phone, Mobile)</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Bundling Options</h4>
            <p className="text-gray-600 mb-6">
              If you're a fan of premium sports or entertainment channels, combining broadband with TV services might be more cost-effective. Similarly, if you make lots of landline or mobile calls, look for deals that offer inclusive phone minutes or mobile SIM perks.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">5. Customer Service and Support</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">After-Sales Care</h4>
            <p className="text-gray-600 mb-6">
              Some providers excel at quick response times and helpful troubleshooting. If support quality matters to you, check customer reviews and any service guarantees (like Wi-Fi boosters or whole-home coverage).
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">6. Potential Relocation</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Moving Home Soon?</h4>
            <p className="text-gray-600 mb-6">
              If you anticipate moving, check whether your chosen provider operates in the new area. Switching partway through a contract may incur early termination fees, unless you're out of contract or you can transfer your service.
            </p>
          </div>
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