import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Download, Users, Gamepad2, CheckCircle2, Building2, ArrowRight, ThumbsUp, ThumbsDown, Video, Cloud, Tv, Wifi, PoundSterling, Home, Users2, Monitor } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Broadband100Mbps = () => {
  const heroAccordionItems = [
    {
      title: "Who needs 100Mbps broadband?",
      content: "100Mbps broadband is perfect for households with 3-5 people who regularly stream HD content, play online games, or work from home. It provides enough bandwidth for multiple devices to connect simultaneously without slowdown.",
    },
    {
      title: "Is 100Mbps fast enough?",
      content: "100Mbps is more than enough for most households. It allows you to download a HD movie in about 5-7 minutes, handle multiple video calls, and stream 4K content without buffering.",
    },
    {
      title: "What's the average cost?",
      content: "100Mbps broadband packages typically range from £25-35 per month, depending on the provider and contract length. Many providers also offer special deals and incentives.",
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>100Mbps Broadband Deals | Compare Fast Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best 100Mbps broadband deals. Perfect for streaming, gaming, and working from home. Find the fastest broadband packages at competitive prices."
        />
      </Helmet>

      <BStyleHero
        title="100Mbps Broadband Deals"
        subtitle="Fast, reliable internet perfect for streaming, gaming, and working from home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person comparing broadband deals on tablet"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Why Choose 100Mbps Broadband?"
          subtitle="Perfect balance of speed and value for modern households"
        >
          <BStyleFeatureCard
            icon={Download}
            title="Fast Downloads"
            description="Download HD movies in minutes and large files instantly"
          />
          <BStyleFeatureCard
            icon={Users}
            title="Multi-User Friendly"
            description="Perfect for households with 3-5 heavy internet users"
          />
          <BStyleFeatureCard
            icon={Gamepad2}
            title="Gaming Ready"
            description="Low latency and stable connection for online gaming"
          />
        </BStyleFeatureGrid>

      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Ultimate Guide Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ultimate Guide to 100Mbps Broadband Deals: Is This Speed Right For You?
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Discover What 100Mbps Broadband Deals Offer
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                100Mbps broadband deals deliver ultrafast internet speeds that transform your online experience. 
                These packages offer ten times the speed of standard broadband, with prices starting from just £25/month from leading providers.
              </p>
            </div>

            {/* Speed Capabilities */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                What Speed Do 100Mbps Broadband Deals Deliver?
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: Download, text: "Download a HD movie (4GB) in just 5-6 minutes" },
                  { icon: Monitor, text: "Stream 4K content on multiple devices simultaneously" },
                  { icon: Users, text: "Support 8-10 devices connected at once" },
                  { icon: Gamepad2, text: "Perfect for online gaming and video calls" },
                  { icon: ArrowRight, text: "Upload large files quickly and efficiently" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Compare Deals */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Compare 100Mbps Broadband Deals
              </h3>
              <p className="text-gray-700 mb-4">Today's 100Mbps broadband deals typically include:</p>
              <ul className="space-y-4">
                {[
                  "Guaranteed minimum speeds",
                  "Latest Wi-Fi router technology",
                  "Flexible contract lengths",
                  "Optional TV and phone bundles",
                  "Professional installation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who Needs Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Who Needs 100Mbps Broadband Deals?
              </h3>
              <p className="text-gray-700 mb-4">These packages are ideal for:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Families with multiple users online",
                  "Remote workers handling large files",
                  "Gamers requiring fast, stable connections",
                  "4K streaming enthusiasts",
                  "Smart home technology users"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Providers */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Available 100Mbps Broadband Providers
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Virgin Media",
                  "BT Full Fibre",
                  "Sky Ultrafast",
                  "Vodafone Gigafast",
                  "TalkTalk Future Fibre"
                ].map((provider, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{provider}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Check */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Check 100Mbps Broadband Availability
              </h3>
              <p className="text-gray-700 mb-6">
                While 100Mbps broadband coverage is expanding rapidly across the UK, availability depends on your location. 
                Enter your postcode to compare available 100Mbps broadband deals in your area.
              </p>
            </div>

            {/* Future Proof */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Future-Proof Your Connection
              </h3>
              <p className="text-gray-700">
                Choosing a 100Mbps broadband deal ensures your household has sufficient bandwidth for years to come, 
                with options to upgrade to even faster speeds when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Is 100Mbps Broadband Right For Your Home? Pros and Cons Explained
            </h2>
            <p className="text-gray-600 mb-12 text-center">
              Before choosing a 100Mbps broadband package, it's important to understand both its advantages and limitations. Here's what you need to know to make an informed decision.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Benefits Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <ThumbsUp className="text-green-500" />
                  Benefits of 100Mbps Broadband
                </h3>

                <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-6 rounded-xl border border-[#3FC1C9]/20">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Video className="text-primary w-5 h-5" />
                    Perfect for Remote Work
                  </h4>
                  <ul className="space-y-2">
                    {["Smooth video conferencing", "Quick file uploads and downloads", 
                      "Reliable connection for cloud services", "Ideal for accessing large work files"]
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-6 rounded-xl border border-[#3FC1C9]/20">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Tv className="text-primary w-5 h-5" />
                    Enhanced Entertainment Experience
                  </h4>
                  <ul className="space-y-2">
                    {["Stream 4K content without buffering", "Multiple users can stream HD simultaneously",
                      "Lag-free online gaming experience", "Support for multiple smart home devices"]
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-6 rounded-xl border border-[#3FC1C9]/20">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Wifi className="text-primary w-5 h-5" />
                    Future-Ready Technology
                  </h4>
                  <ul className="space-y-2">
                    {["Access to full fibre infrastructure", "Potential to upgrade to gigabit speeds",
                      "Compatible with latest internet technologies", "Ready for increasing bandwidth demands"]
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Limitations Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  <ThumbsDown className="text-red-500" />
                  Limitations to Consider
                </h3>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Home className="text-gray-700 w-5 h-5" />
                    Limited Availability
                  </h4>
                  <ul className="space-y-2">
                    {["Not available in all UK locations", "Rural areas may have limited access",
                      "Dependent on local infrastructure", "Installation may require additional work"]
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <PoundSterling className="text-gray-700 w-5 h-5" />
                    Cost Considerations
                  </h4>
                  <ul className="space-y-2">
                    {["Higher monthly costs than standard broadband", "Premium pricing from major providers",
                      "Installation fees may apply", "Longer contract commitments"]
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                  <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Users2 className="text-gray-700 w-5 h-5" />
                    Potentially Unnecessary Power
                  </h4>
                  <ul className="space-y-2">
                    {["Excess speed for basic internet users", "Small households may not need this capacity",
                      "Basic browsing doesn't require 100Mbps", "Standard broadband might suffice"]
                      .map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700">
                          <ArrowRight className="w-4 h-4 text-gray-500" />
                          {item}
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Decision Making Section */}
            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-xl border border-[#3FC1C9]/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Making Your Decision</h3>
              <p className="text-gray-700 mb-4">Consider these factors before choosing 100Mbps broadband:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                {["Number of household internet users", "Types of online activities",
                  "Budget constraints", "Local availability options"]
                  .map((item, index) => (
                    <li key={index} className="flex items-center gap-2 bg-white/80 p-4 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default Broadband100Mbps;