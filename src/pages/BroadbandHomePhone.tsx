import React from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Phone, Wifi, PoundSterling } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BroadbandHomePhone = () => {
  const heroAccordionItems = [
    {
      title: "Why choose a broadband and phone package?",
      content: "Combining your broadband and phone services can often lead to better value and simplified billing. Many providers offer discounted calls and additional features when you bundle these services.",
      linkText: "Learn more about bundles",
      linkHref: "#bundles"
    },
    {
      title: "What phone features are included?",
      content: "Most packages include free weekend or evening calls, with options to add anytime calls or international calling. You'll also get features like voicemail, caller ID, and call waiting.",
      linkText: "View phone features",
      linkHref: "#features"
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Broadband & Home Phone Deals | Compare Packages & Save</title>
        <meta 
          name="description" 
          content="Compare the best broadband and home phone packages. Find deals with free evening & weekend calls, unlimited broadband, and great value bundles."
        />
      </Helmet>

      <BStyleHero
        title="Broadband & Home Phone Deals"
        subtitle="Get the fastest broadband and best value phone deals for your home. Compare prices and speeds from trusted UK providers to find your perfect package"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person using laptop and phone"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Key Features of Our Broadband & Phone Packages"
          subtitle="Discover what makes our home broadband and phone deals stand out"
        >
          <BStyleFeatureCard
            icon={Phone}
            title="Inclusive Call Plans"
            description="Choose from evening & weekend or anytime UK landline calls with clear connection quality"
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Reliable Connection"
            description="Fast broadband with dedicated phone line support and 24/7 technical assistance"
          />
          <BStyleFeatureCard
            icon={PoundSterling}
            title="Better Value"
            description="Save money and get more by bundling your home broadband and phone services together"
          />
        </BStyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"package_types":["BROADBAND_PHONE"]}'
          />
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default BroadbandHomePhone;