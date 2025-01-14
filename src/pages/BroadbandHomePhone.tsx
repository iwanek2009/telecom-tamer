import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { PackageFeatures } from '@/components/broadband/PackageFeatures';
import { CallChargesSection } from '@/components/broadband/CallChargesSection';

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
        <title>Broadband & Phone Deals | Compare UK Home Packages</title>
        <meta 
          name="description" 
          content="Get fast broadband with inclusive UK calls. Compare the latest home broadband and phone deals from trusted providers. Save money with our exclusive packages"
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
        <PackageFeatures />
        
        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"package_types":["BROADBAND_PHONE"]}'
          />
        </div>

        <CallChargesSection />
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default BroadbandHomePhone;