import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const ManchesterBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Manchester has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Manchester area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Manchester Broadband Deals | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Manchester. Compare local packages from leading providers. Get fast, reliable internet for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Manchester"
        subtitle="Find the fastest and most reliable broadband packages in Manchester. Compare deals from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Manchester cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Manchester Broadband Deals?"
          subtitle="Get the perfect internet package for your Manchester home"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Access high-speed internet with up to 1Gbps in Manchester areas"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Local Coverage"
            description="Extensive network coverage across all Manchester neighborhoods"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Home-Ready"
            description="Perfect for streaming, gaming, and working from home"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        {/* Guide Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Manchester Broadband Deals: Your Guide to Finding the Best Internet Packages
              </h2>
              <p className="text-gray-600 mb-6">
                Your first step should be to figure out which broadband services are available at your specific address. This can be done through a broadband postcode checker, which filters results based on your location. Once you know your options, you can narrow things down by considering factors like budget, desired speed, contract length, and any extras (like TV or mobile bundles).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Step-by-Step Approach
              </h3>
              <ol className="list-decimal pl-6 space-y-3 text-gray-600">
                <li><strong>Enter Your Postcode</strong> - Start with a reputable broadband comparison site and input your Manchester postcode.</li>
                <li><strong>Select Current Provider</strong> - Often, these tools will ask who your current provider is to avoid showing deals you already have.</li>
                <li><strong>Browse Tailored Results</strong> - You'll see the latest offers tailored to your address, including discounted new-customer promotions.</li>
                <li><strong>Pick Your Plan</strong> - Filter deals by speed, price, or package type (broadband only, TV + broadband, etc.) until you find the perfect match.</li>
                <li><strong>Sign Up</strong> - Complete the sign-up process through the provider's website, then arrange installation or activation details.</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                What to Consider When Choosing a Broadband Deal
              </h3>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Contract Status</h4>
                  <p className="text-gray-600"><strong>Are You Out of Contract?</strong><br />
                  If you're no longer tied to a plan, you may be paying more than necessary. Also, you're free to switch without exit fees, which means you can upgrade quickly and start saving.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Monthly Budget</h4>
                  <p className="text-gray-600"><strong>How Much Can You Afford?</strong><br />
                  Aim for a deal that strikes a balance between speed and cost. Even if your current provider offers a retainer discount, compare other providers for a potentially better bargain.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Required Internet Speed</h4>
                  <p className="text-gray-600"><strong>Usage and Number of Users</strong><br />
                  A single occupant with basic web browsing needs can often manage with speeds around 20–35Mbps. Larger households or professionals working from home may require 50–100Mbps or more. Avid gamers and 4K streamers might benefit from ultra-fast plans above 100Mbps.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">4. Extra Services (TV, Phone, Mobile)</h4>
                  <p className="text-gray-600"><strong>Bundling Options</strong><br />
                  If you're a fan of premium sports or entertainment channels, combining broadband with TV services might be more cost-effective. Similarly, if you make lots of landline or mobile calls, look for deals that offer inclusive phone minutes or mobile SIM perks.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">5. Customer Service and Support</h4>
                  <p className="text-gray-600"><strong>After-Sales Care</strong><br />
                  Some providers excel at quick response times and helpful troubleshooting. If support quality matters to you, check customer reviews and any service guarantees (like Wi-Fi boosters or whole-home coverage).</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">6. Potential Relocation</h4>
                  <p className="text-gray-600"><strong>Moving Home Soon?</strong><br />
                  If you anticipate moving, check whether your chosen provider operates in the new area. Switching partway through a contract may incur early termination fees, unless you're out of contract or you can transfer your service.</p>
                </div>
              </div>

              {/* New Content: Types of Broadband */}
              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Types of Broadband Connections in Manchester
              </h2>
              <p className="text-gray-600 mb-6">
                Manchester benefits from excellent coverage across multiple broadband technologies. Depending on your postcode, you may be able to access:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Full Fibre (FTTP)</h4>
                  <p className="text-gray-600">
                    This direct fibre-optic connection delivers speeds from 100Mbps up to 1Gbps. Availability is expanding rapidly across Manchester.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Part-Fibre (FTTC)</h4>
                  <p className="text-gray-600">
                    A mixture of fibre and copper wiring often delivers speeds up to 70Mbps. Coverage is widespread, making it a common choice for most households.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Cable (Virgin Media)</h4>
                  <p className="text-gray-600">
                    Virgin Media's network uses coaxial cables to achieve ultrafast speeds, often comparable to full fibre. It's accessible in much of central Manchester and surrounding areas.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Mobile Broadband (4G/5G)</h4>
                  <p className="text-gray-600">
                    An option if wired connections are limited or if you need a portable solution. Speeds vary depending on your location and network coverage.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">ADSL (Copper)</h4>
                  <p className="text-gray-600">
                    The oldest method, typically offering speeds around 10–20Mbps. Still widely available but not ideal if you demand high-speed streaming or frequent large downloads.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Determining the Right Speed
              </h2>
              <p className="text-gray-600 mb-6">
                Your perfect speed depends on two factors: the number of devices in your home and what each person uses them for. Here's a quick guide:
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600"><strong>0–20Mbps:</strong> Suitable for up to two users with basic browsing and occasional streaming.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600"><strong>21–50Mbps:</strong> Works well for small families of 2–3 people streaming in HD or working from home occasionally.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600"><strong>51–99Mbps:</strong> Great for families or shared flats of 3+ individuals, allowing multiple HD or 4K streams at once.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600"><strong>100+ Mbps:</strong> Ideal for tech-savvy households, remote workers, or gamers who need ultra-reliable, high-capacity connections.</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                If you're unsure what speed you currently receive, run an internet speed test. This will give you a snapshot of your download and upload capabilities under normal conditions. If the results are significantly lower than advertised, consider troubleshooting your setup or looking for a faster plan.
              </p>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ManchesterBroadband;