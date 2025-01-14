import React from 'react';
import { Phone, Wifi, PoundSterling } from 'lucide-react';
import { BroadbandTemplate } from '@/components/templates/BroadbandTemplate';
import { Helmet } from 'react-helmet';

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
        filters={"package_types": ["BROADBAND_PHONE"]}
      >
        <div className="space-y-16">
          {/* Additional content sections can be added here */}
        </div>
      </BroadbandTemplate>
    </>
  );
};

export default BroadbandWithPhone;