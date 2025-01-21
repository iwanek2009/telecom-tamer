import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const ShirleyBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Shirley has excellent broadband coverage with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers serving the Shirley area.",
      linkText: "View providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Shirley Internet Deals | Southampton Broadband Offers</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Shirley, Southampton. Compare internet packages from leading providers with reliable speeds for streaming, gaming and home working."
        />
      </Helmet>

      <CitystyleHero
        title="Find the Best Broadband Deals in Shirley and Southampton"
        subtitle="Whether you're in Shirley, Southampton, or the surrounding areas, finding the right broadband deal has never been easier."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Shirley area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Lightning-Fast Internet Solutions"
          subtitle="Experience the difference with our high-speed broadband options"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Downloads"
            description="Enjoy ultra-quick downloads, like streaming HD movies in just minutes, with speeds reaching up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Reliable Connection"
            description="Stay connected during peak times with consistent service—perfect for remote work and online classes"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Low Latency"
            description="Experience seamless online gaming and crystal-clear video calls with minimal lag"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">What to Consider When Choosing a Broadband Package</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">1. Check Your Current Contract</h3>
                <p className="text-gray-600 leading-relaxed">If your broadband contract has expired, you're likely overpaying. This is the ideal opportunity to switch to a more affordable deal or faster package.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">2. Decide on Your Budget</h3>
                <p className="text-gray-600 leading-relaxed">Broadband plans vary widely in price. Comparing offers ensures you get the best value, whether sticking with your current provider or exploring new options.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">3. Assess Your Speed Requirements</h3>
                <p className="text-gray-600 leading-relaxed">Are you streaming 4K videos, gaming online, or working from home? Opt for faster fibre broadband if multiple devices are connected simultaneously.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">4. Bundling Services</h3>
                <p className="text-gray-600 leading-relaxed">Combine broadband with TV or phone services to save money. Bundles from providers like BT, Virgin Media, or Sky may offer better value for households needing multiple services.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">5. Customer Service and Extras</h3>
                <p className="text-gray-600 leading-relaxed">Some providers offer added perks like Wi-Fi boosters or whole-home guarantees. Prioritize reliable customer service and extras that enhance your internet experience.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Broadband Types Available in Shirley and Southampton</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Part-Fibre Broadband</h3>
                <p className="text-gray-600">Widely available in the UK, this option delivers speeds of 30-70Mbps, sufficient for smaller households.</p>
              </div>
              <div className="space-y-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Full Fibre Broadband</h3>
                <p className="text-gray-600">Ideal for heavy internet users, this provides speeds exceeding 100Mbps by connecting directly to your property.</p>
              </div>
              <div className="space-y-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Virgin Media Cable Broadband</h3>
                <p className="text-gray-600">Available in many urban areas, this ultrafast option reaches speeds up to 1Gbps.</p>
              </div>
              <div className="space-y-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">4G/5G Home Internet</h3>
                <p className="text-gray-600">A flexible alternative for areas without fibre connections. Perfect as a backup or for households with moderate internet needs.</p>
              </div>
              <div className="space-y-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800">Satellite Broadband</h3>
                <p className="text-gray-600">Designed for rural areas, satellite broadband ensures reliable internet where traditional connections fall short.</p>
              </div>
            </div>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ShirleyBroadband;