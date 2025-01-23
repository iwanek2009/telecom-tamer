import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House, Download, Zap, Signal } from 'lucide-react';
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
          content="Looking for speedy, reliable internet in Manchester? Discover how to compare broadband deals, find the right speeds, and enjoy the best value for your home or office."
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
          title="3 Key Benefits at a Glance"
          subtitle="Why choose our Manchester broadband comparison service?"
        >
          <CitystyleFeatureCard
            icon={Zap}
            title="Lightning-Fast Downloads"
            description="Get HD content in a flash with broadband speeds reaching up to 1Gbps in select Manchester postcodes"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Reliable Connection"
            description="Enjoy a consistently strong signal, even at peak times—perfect for remote work and seamless streaming"
          />
          <CitystyleFeatureCard
            icon={Download}
            title="Low Latency"
            description="Experience near-instant response times for online gaming, video conferencing, and cloud-based applications"
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
                Why Compare Broadband Deals in Manchester?
              </h2>
              <p className="text-gray-600 mb-6">
                Manchester is a bustling city with diverse internet needs—students, professionals, families, and everyone in between. With so many providers competing in the area, you'll find a wide range of broadband packages featuring different speeds, prices, and contract lengths. Comparing offers not only helps you find the right match for your household or business needs but can also lead to substantial savings and improved online performance.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                How to Begin Your Search
              </h3>
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

              <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I get full-fibre broadband in all parts of Manchester?</h3>
                  <p className="text-gray-600">Full-fibre coverage is growing, but availability varies by postcode. Enter your address into a postcode checker to see if you can access FTTP services.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I switch if I'm still in a contract?</h3>
                  <p className="text-gray-600">Switching mid-contract usually incurs exit fees. However, check your terms or contact your provider—some offer grace periods or promotional waivers.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Will I lose internet access during the switch?</h3>
                  <p className="text-gray-600">Not typically. Most providers coordinate the switch to minimize downtime, though you might experience a brief transition period (usually a few hours).</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I really need unlimited data?</h3>
                  <p className="text-gray-600">Most households benefit from unlimited data, especially if you regularly stream, game, or work from home. Limited packages can be cheaper but risk overage fees.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ManchesterBroadband;
