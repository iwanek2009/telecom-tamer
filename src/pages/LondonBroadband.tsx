import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { Helmet } from 'react-helmet';

const accordionItems = [
  {
    title: "Why compare London broadband deals?",
    content: "London offers diverse broadband options with varying speeds and prices. Compare to find the best value package for your needs.",
    linkText: "Learn more about comparison",
    linkHref: "#compare"
  },
  {
    title: "What speeds are available in London?",
    content: "London has excellent broadband infrastructure with speeds ranging from standard broadband to ultrafast fiber options up to 1Gbps in many areas.",
    linkText: "Check speed availability",
    linkHref: "#speeds"
  }
];

const LondonBroadband = () => {
  return (
    <BStyleTemplate>
      <Helmet>
        <title>London Broadband Deals | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in London. Compare packages from leading providers, perfect for streaming, gaming & working from home. Check local availability today."
        />
      </Helmet>

      <BStyleHero
        title="London Broadband Deals"
        subtitle="Compare the best broadband packages available in London"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person comparing broadband deals on tablet"
        accordionItems={accordionItems}
      />

      <BStyleContent>
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <section className="prose max-w-none">
              <h2 className="text-3xl font-bold">Find Your Perfect London Broadband Package</h2>
              <p className="text-lg text-gray-600">
                Whether you're in Central London, North London, or South London, we'll help you find the best broadband deals in your area. Compare packages from leading providers including Virgin Media, BT, Sky, and more.
              </p>
            </section>
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default LondonBroadband;