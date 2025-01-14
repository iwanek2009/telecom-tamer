import React from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Phone, Wifi, PoundSterling } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';

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
        subtitle="Find the perfect package with unlimited broadband and great value calls"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person using laptop and phone"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Why Choose a Broadband & Phone Bundle?"
          subtitle="Get more value with our combined packages"
        >
          <BStyleFeatureCard
            icon={PoundSterling}
            title="Save Money"
            description="Bundle your services and save compared to separate contracts"
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Reliable Connection"
            description="Fast broadband with unlimited downloads and stable phone line"
          />
          <BStyleFeatureCard
            icon={Phone}
            title="Inclusive Calls"
            description="Free evening & weekend calls to UK landlines included"
          />
        </BStyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidgetContent 
            widgetId="smartfony-91"
            filters='{"package_types":["BROADBAND_PHONE"]}'
          />
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default BroadbandHomePhone;