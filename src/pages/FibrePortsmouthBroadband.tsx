import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, Zap, Home, Briefcase, Gamepad2, Download, Upload, Check, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const FibrePortsmouthBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Speeds",
      content: "Access ultra-fast fibre broadband with speeds up to 1Gbps in eligible areas.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Top Providers",
      content: "Compare fibre deals from major providers serving Portsmouth area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fibre Broadband Portsmouth | Compare Fast Internet Deals</title>
        <meta 
          name="description" 
          content="Looking for fibre broadband in Portsmouth? Compare ultra-fast packages from top providers. Get reliable speeds for streaming, gaming & home working."
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Portsmouth"
        subtitle="Compare ultra-fast fibre packages from leading providers. Get the speed you need for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth fibre broadband connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleFeatureGrid
        title="Ultra-Fast Fibre Broadband in Portsmouth"
        subtitle="Looking for lightning-quick internet? Compare the fastest fibre deals in your area"
      >
        <CitystyleFeatureCard
          icon={Wifi}
          title="Lightning-Fast Speeds"
          description="Experience ultra-fast fibre broadband perfect for 4K streaming, lag-free gaming, and seamless video calls. Get download speeds up to 1Gb in Portsmouth."
        />
        <CitystyleFeatureCard
          icon={Signal}
          title="Reliable Connection"
          description="Say goodbye to buffering with stable fibre connections. Perfect for busy households where everyone's online at once."
        />
        <CitystyleFeatureCard
          icon={Zap}
          title="Future-Proof Technology"
          description="Get ready for whatever comes next with fibre broadband that can handle tomorrow's tech - from 8K streaming to cloud gaming."
        />
      </CitystyleFeatureGrid>

      <CitystyleContent>
        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        {/* Why Choose Fibre Section */}
        <div className="mt-16 space-y-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Fibre in Portsmouth?</h2>
            <p className="text-gray-700 text-lg">
              Portsmouth's growing digital needs demand faster, more reliable internet. Whether you're working from home in Southsea, streaming in Milton, or gaming in Fratton, fibre broadband gives you the speed and stability you need. Plus, with the city's expanding fibre network, more areas are getting access to ultra-fast connections every day.
            </p>
          </div>

          {/* Types of Fibre */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4">Fibre to the Cabinet (FTTC)</h3>
              <ul className="space-y-3">
                {['Speeds up to 80Mb', 'Perfect for most households', 'Widely available across Portsmouth'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold mb-4">Full Fibre (FTTP)</h3>
              <ul className="space-y-3">
                {['Speeds up to 1Gb', 'Ultimate performance', 'Available in selected areas'].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Which Package is Right */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Which Fibre Package is Right for You?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Family Home?</h3>
                </div>
                <p className="text-gray-700">Perfect for households where everyone's streaming, gaming, and browsing at once.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Work From Home?</h3>
                </div>
                <p className="text-gray-700">Get reliable speeds for video calls, file sharing, and cloud applications.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Gamepad2 className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-semibold">Gaming Enthusiast?</h3>
                </div>
                <p className="text-gray-700">Ultra-low latency and fast downloads for the ultimate gaming experience.</p>
              </div>
            </div>
          </div>

          {/* Leading Providers */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leading Fibre Providers in Portsmouth</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Virgin Media",
                  features: [
                    "Ultra-fast cable network",
                    "Wide coverage across Portsmouth",
                    "Entertainment bundles available"
                  ]
                },
                {
                  name: "BT Fibre",
                  features: [
                    "Reliable nationwide service",
                    "Complete Wi-Fi guarantee",
                    "Security features included"
                  ]
                },
                {
                  name: "Toob",
                  features: [
                    "Full fibre network",
                    "Symmetrical upload/download",
                    "Local Portsmouth provider"
                  ]
                }
              ].map((provider, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-4">{provider.name}</h3>
                  <ul className="space-y-3">
                    {provider.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Connected */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Getting Connected is Easy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Check Availability",
                  description: "Use our postcode checker to see which fibre services reach your street",
                  icon: MapPin
                },
                {
                  title: "Compare Speeds",
                  description: "Choose the right speed for your household's needs",
                  icon: Download
                },
                {
                  title: "Pick Your Package",
                  description: "Select from our range of verified deals",
                  icon: Check
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Fibre Broadband</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                {[
                  "Stream 4K content without buffering",
                  "Download large files in seconds",
                  "Connect multiple devices simultaneously",
                  "Enjoy smoother video calls",
                  "Future-proof your home internet"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Perfect For Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Perfect For</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Home Entertainment",
                  features: [
                    "Buffer-free Netflix, Disney+, and Prime",
                    "Multiple simultaneous streams",
                    "Crystal-clear video calls"
                  ]
                },
                {
                  title: "Remote Working",
                  features: [
                    "Reliable connection for video meetings",
                    "Fast file uploads and downloads",
                    "Cloud service access"
                  ]
                },
                {
                  title: "Online Gaming",
                  features: [
                    "Minimal lag",
                    "Quick game downloads",
                    "Stable connection for online play"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Speed Up Your Internet?</h2>
            <p className="text-lg mb-6">
              Don't settle for slow broadband when ultra-fast fibre is available. Pop your postcode in above to see the best fibre deals in your area of Portsmouth.
            </p>
            <p className="text-sm opacity-90">
              Remember: Fibre availability varies by location - even within Portsmouth. Checking your postcode is the best way to see exactly what speeds you can get at your address.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Already Have Fibre?</h2>
            <p className="text-gray-700">
              Compare deals to see if you could get faster speeds or better value. Many providers offer exclusive deals for new customers.
            </p>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibrePortsmouthBroadband;