import React from 'react';
import { Wifi, Download, Clock } from 'lucide-react';
import { BroadbandTemplate, BroadbandContentSection } from '@/components/templates/BroadbandTemplate';
import { Helmet } from 'react-helmet';

const ExampleBroadbandPage = () => {
  const heroProps = {
    title: "Example Broadband Page",
    subtitle: "Using the Broadband-style template for consistent design",
    image: "/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png",
    imageAlt: "Broadband illustration",
    accordionItems: [
      {
        title: "What is this service?",
        content: "This is an example page using our Broadband-style template.",
        linkText: "Learn more",
        linkHref: "#learn-more"
      },
      {
        title: "Why choose us?",
        content: "We offer great service with consistent design across all pages.",
        linkText: "See benefits",
        linkHref: "#benefits"
      }
    ]
  };

  const features = [
    {
      icon: Wifi,
      title: "Fast Connection",
      description: "Lightning-fast broadband speeds for your home"
    },
    {
      icon: Download,
      title: "Easy Setup",
      description: "Quick and hassle-free installation process"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support when you need it"
    }
  ];

  return (
    <BroadbandTemplate
      heroProps={heroProps}
      features={features}
      widgetId="smartfony-91"
      filters='{"connection_types": ["FTTP"]}'
    >
      <BroadbandContentSection background="gradient">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Additional Content Section
        </h2>
        <p className="text-gray-700">
          This is an example of how to add additional content sections using the template.
          You can add as many sections as needed and customize their appearance.
        </p>
      </BroadbandContentSection>
    </BroadbandTemplate>
  );
};

export default ExampleBroadbandPage;