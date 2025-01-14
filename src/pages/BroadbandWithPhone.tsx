import React from 'react';
import { Phone, Wifi, PoundSterling, Clock } from 'lucide-react';
import { BroadbandTemplate } from '@/components/templates/BroadbandTemplate';
import { Helmet } from 'react-helmet';

const BroadbandWithPhone = () => {
  const heroProps = {
    title: "Broadband & Home Phone Packages",
    subtitle: "Find the perfect broadband and landline bundle for your home",
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
      description: "Choose from evening & weekend or anytime UK calls packages"
    },
    {
      icon: Wifi,
      title: "Reliable Connection",
      description: "Fast broadband with dedicated phone line support"
    },
    {
      icon: PoundSterling,
      title: "Better Value",
      description: "Save money by bundling your broadband and phone services"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service for both services"
    }
  ];

  return (
    <BroadbandTemplate
      heroProps={heroProps}
      features={features}
      widgetId="smartfony-91"
      filters='{"package_types": ["BROADBAND_PHONE"]}'
    >
      <div className="space-y-16">
        {/* Additional content sections can be added here */}
      </div>
    </BroadbandTemplate>
  );
};

export default BroadbandWithPhone;