import { Wifi, Globe, Users, CreditCard } from 'lucide-react';

export const ManchesterGuide = () => {
  return (
    <div className="mt-16 space-y-12">
      <div className="prose prose-gray max-w-none">
        <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
          Why Choose Fibre Broadband in Manchester?
        </h2>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <p className="text-gray-600 mb-6">
            While there's no shortage of providers in the Manchester area, finding the perfect match for your home or office requires some know-how. The key lies in comparing broadband offers with an eye for price, speed, and added perks like TV bundles.
          </p>
        </div>

        <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8 mt-12">
          How to Start Your Search
        </h2>
        <p className="text-gray-600 mb-8">
          A simple way to begin is by using a broadband postcode checker. This tool quickly shows which providers operate in your specific Manchester postcode, along with the packages and speeds they offer. Once you see the options, consider the following:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contract Status</h3>
            <p className="text-gray-600">
              If you're out of contract, you're free to switch without penalties. If still locked in, check potential early exit fees.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Budget</h3>
            <p className="text-gray-600">
              Setting a clear monthly budget helps filter deals that meet your price range—whether you want the cheapest or you're willing to invest for ultra-fast speeds.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Speed Requirements</h3>
            <p className="text-gray-600">
              Households streaming HD or 4K content, gaming online, or working remotely generally need speeds above 50Mbps—often 100Mbps or more.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Potential Bundles</h3>
            <p className="text-gray-600">
              Look for combined deals that include TV channels or mobile SIMs if you want to streamline your services and possibly save money overall.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};