import { Signal, ShieldCheck, Tv, Phone, Smartphone, DollarSign, ArrowUp } from 'lucide-react';

export const ManchesterConsiderations = () => {
  return (
    <div className="mt-16">
      <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
        Key Considerations for Fibre Broadband
      </h2>
      
      {/* Speed & Reliability Section */}
      <div className="space-y-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <Signal className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">1. Speed & Reliability</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Fibre broadband can range from around 30Mbps to well over 900Mbps, depending on the type of fibre connection available at your address. Full fibre (FTTP) is typically faster and more stable than part-fibre (FTTC) because it doesn't rely on copper lines for the final stretch.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-primary mb-2">Full Fibre (FTTP)</h4>
              <p className="text-gray-600">Great if you crave top-end speeds for simultaneous streaming, gaming, and large file downloads.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg text-primary mb-2">Part-Fibre (FTTC)</h4>
              <p className="text-gray-600">Often sufficient for moderate internet use at a slightly lower price.</p>
            </div>
          </div>
        </div>

        {/* Customer Service Section */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">2. Customer Service & Support</h3>
          </div>
          <p className="text-gray-600">
            A deal might look good on paper but check real customer feedback or reviews regarding downtime, response times, and overall satisfaction. Providers offering round-the-clock support can be beneficial if you rely on a stable connection for remote work or other important tasks.
          </p>
        </div>

        {/* Included Extras Section */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <Tv className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">3. Included Extras & Bundles</h3>
          </div>
          <p className="text-gray-600 mb-6">Some broadband providers let you add on:</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Tv className="w-5 h-5 text-primary" />
              <p className="text-gray-600">TV Packages – Access to premium sports, movies, or on-demand services</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <p className="text-gray-600">Landline – Inclusive call packages for local, national, or international dialing</p>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-primary" />
              <p className="text-gray-600">Mobile SIM – Often discounted or included if you're using the same provider</p>
            </div>
          </div>
        </div>

        {/* Price Rises Section */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <div className="flex items-center gap-3 mb-4">
            <ArrowUp className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">4. In-Contract Price Rises</h3>
          </div>
          <p className="text-gray-600">
            Several providers include annual price hikes tied to inflation or other factors. If price stability is a priority, look for fixed-price contracts or at least understand how much your monthly bill could change after the first year.
          </p>
        </div>
      </div>
    </div>
  );
};