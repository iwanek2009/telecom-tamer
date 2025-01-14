import { Phone, Wifi, PoundSterling } from 'lucide-react';
import { BroadbandTemplate } from '@/components/templates/BroadbandTemplate';
import { Helmet } from 'react-helmet';
import { BroadbandContentSection } from '@/components/templates/BroadbandTemplate';

const BroadbandWithPhone = () => {
  const heroProps = {
    title: "Broadband & Home Phone Packages",
    subtitle: "Get the fastest broadband and best value phone deals for your home. Compare prices and speeds from trusted UK providers",
    image: "/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png",
    imageAlt: "Person using phone and laptop",
    accordionItems: [
      {
        title: "Why choose a broadband and phone package?",
        content: "Combining your broadband and phone services often works out cheaper than having separate contracts. Plus, you'll only have one bill to manage.",
        linkText: "View package benefits",
        linkHref: "#benefits"
      },
      {
        title: "What call plans are available?",
        content: "Choose from evening and weekend calls, anytime calls, or international calling packages to suit your needs.",
        linkText: "Compare call plans",
        linkHref: "#call-plans"
      },
      {
        title: "Can I keep my existing phone number?",
        content: "Yes, you can usually keep your existing landline number when switching providers. This will be arranged during the switching process.",
        linkText: "Learn about switching",
        linkHref: "#switching"
      }
    ]
  };

  const features = [
    {
      icon: Phone,
      title: "Inclusive Call Plans",
      description: "Choose flexible UK landline call packages to suit your needs - including unlimited evening and weekend calls or comprehensive anytime packages. All major UK landline numbers covered with crystal-clear connection quality."
    },
    {
      icon: Wifi,
      title: "Reliable Connection",
      description: "Enjoy stable, high-speed broadband with dedicated phone line support for uninterrupted connectivity. Our packages include professional line installation and 24/7 technical assistance for both broadband and landline services."
    },
    {
      icon: PoundSterling,
      title: "Better Value",
      description: "Save up to £200 annually by combining your home broadband and phone services in one package. Compare exclusive deals from leading UK providers featuring discounted bundle rates and special introductory offers on phone and internet packages."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Broadband & Phone Packages | Compare Deals</title>
        <meta name="description" content="Compare the best broadband and phone packages from leading UK providers. Find great deals on combined internet and landline services." />
      </Helmet>

      <BroadbandTemplate
        heroProps={heroProps}
        features={features}
        widgetId="smartfony-91"
        filters='{"package_types": ["BROADBAND_PHONE"]}'
      >
        <BroadbandContentSection>
          <div className="space-y-8">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Broadband & Home Phone Packages: What You Need to Know
              </h2>
              <p className="text-gray-700 mb-6">
                Save time and money by combining your internet and phone services into one convenient home package. Modern broadband and phone bundles offer you reliable connectivity with flexible calling plans, perfect for both daily internet users and regular landline callers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-xl border border-[#3FC1C9]/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose a Combined Package?
              </h3>
              <p className="text-gray-700 mb-6">
                A broadband and phone bundle provides more than just internet access. Your package includes a dedicated phone line essential for stable broadband connection, plus the option to add calling features that suit your lifestyle.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Key Benefits of Home Phone Bundles:
              </h3>
              <p className="text-gray-700">
                Most UK providers now offer extensive coverage across residential areas, ensuring you get:
              </p>
              <ul className="space-y-3 list-none pl-0">
                {[
                  "Reliable landline service for areas with inconsistent mobile coverage",
                  "Cost-effective international calling rates compared to mobile plans",
                  "Crystal-clear call quality for important home or business conversations",
                  "Professional technical support for both services",
                  "Single monthly bill for easier budget management"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-xl border border-[#3FC1C9]/20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Making the Right Choice:
              </h3>
              <p className="text-gray-700 mb-4">
                Before selecting your broadband and phone package, consider:
              </p>
              <ul className="space-y-2 list-disc pl-6 text-gray-700">
                <li>Available connection speeds in your area</li>
                <li>Your typical monthly calling patterns</li>
                <li>Whether you need evening, weekend, or anytime calls</li>
                <li>Bundle discounts and current provider offers</li>
              </ul>
            </div>
          </div>
        </BroadbandContentSection>
      </BroadbandTemplate>
    </>
  );
};

export default BroadbandWithPhone;