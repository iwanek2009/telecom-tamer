import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, ShoppingBag, Shield, Store, Home, Utensils, CreditCard, Laptop, Tv } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const GunwharfQuaysBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Retail Solutions",
      content: "Dedicated packages for retail businesses.",
      linkText: "View retail packages",
      linkHref: "#retail-packages"
    },
    {
      title: "Residential Deals",
      content: "Perfect packages for Gunwharf residents.",
      linkText: "Check availability",
      linkHref: "#availability"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Gunwharf Quays Broadband | Compare Shopping District Internet</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Gunwharf Quays. Compare packages perfect for retail and residential use. Get reliable speeds in Portsmouth's premier shopping district."
        />
      </Helmet>

      <CitystyleHero
        title="Premium Broadband for Gunwharf Quays Living"
        subtitle="Find the perfect internet package for Portsmouth's waterfront destination"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Gunwharf Quays broadband services"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Gunwharf Quays Packages?"
          subtitle="Get connected with reliable broadband in this vibrant location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Waterfront Ready Speeds"
            description="Ultra-fast broadband perfect for Gunwharf's modern apartments and retail spaces. Get reliable connections with stunning harbour views."
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Premium Location, Premium Service"
            description="Designed for Gunwharf's unique mix of luxury living and retail - whether you're running a store or enjoying apartment life."
          />
          <CitystyleFeatureCard
            icon={ShoppingBag}
            title="Retail & Residential Solutions"
            description="From designer shops to waterfront homes, get packages that match Gunwharf's prestigious standards."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <section className="py-16 space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Gunwharf Quays Broadband?</h2>
            <p className="text-lg text-gray-600">
              Living or working in Gunwharf Quays means having internet that matches this premium location. Whether you're running a boutique, managing a restaurant, or living in the iconic waterfront apartments, you need a connection that's as sophisticated as your surroundings.
            </p>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">What's Available at Gunwharf?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Store className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Retail Spaces</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Fast retail systems</li>
                  <li>Customer Wi-Fi</li>
                  <li>CCTV support</li>
                  <li>Payment reliability</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Waterfront Apartments</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Ultra-fast home broadband</li>
                  <li>Entertainment packages</li>
                  <li>Smart home ready</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Utensils className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Restaurant & Bars</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Reliable POS systems</li>
                  <li>Guest Wi-Fi options</li>
                  <li>Table ordering support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Perfect For:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <CreditCard className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Retail Businesses</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Till connectivity</li>
                  <li>Stock management</li>
                  <li>Security cameras</li>
                  <li>Customer experience</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Residents</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Luxury streaming</li>
                  <li>Remote working</li>
                  <li>Smart apartment living</li>
                  <li>Multiple devices</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Tv className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Entertainment Ready</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Stream harbour views</li>
                  <li>Gaming without limits</li>
                  <li>4K entertainment</li>
                  <li>Smart home control</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Finding Your Perfect Package:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-4">01</div>
                <h3 className="text-xl font-semibold mb-4">Location Check</h3>
                <p className="text-gray-600">Check what's available in your specific Gunwharf location</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-4">02</div>
                <h3 className="text-xl font-semibold mb-4">Usage Needs</h3>
                <p className="text-gray-600">Tell us if it's for retail, residential, or hospitality use</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-4">03</div>
                <h3 className="text-xl font-semibold mb-4">Select Your Service</h3>
                <p className="text-gray-600">Choose from our premium verified packages</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Get Connected?</h2>
            <p className="text-lg">Enter your Gunwharf Quays postcode below to see available premium packages for your location.</p>
            <p className="text-sm italic">Local Insight: Different areas of Gunwharf have different broadband options. Check your specific address for the best premium packages.</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Check Your Postcode Now
            </button>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default GunwharfQuaysBroadband;
