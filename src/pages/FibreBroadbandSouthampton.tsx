import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { CitystyleCard } from '@/components/templates/citystyle/CitystyleCard';
import { Wifi, Shield, ArrowUp } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';

const FibreBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Southampton enjoys extensive fibre coverage with speeds up to 1Gbps available in many areas through providers like Virgin Media and BT.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Student-Friendly Deals",
      content: "Special broadband packages available for students at Southampton University and Solent University areas.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Southampton.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fibre Broadband Southampton | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best fibre broadband deals in Southampton. Find exclusive offers from Virgin Media, BT, Sky and local providers. Student deals and ultrafast packages available."
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Southampton"
        subtitle="Best fibre broadband deals in Southampton. Compare fast internet packages from top providers to find the perfect connection for streaming, gaming, and working from home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Fibre Broadband in Southampton?"
          subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps with full fibre coverage across Southampton"
          />
          <CitystyleFeatureCard
            icon={House}
            title="Local Support"
            description="Benefit from local installation teams and dedicated customer service"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all Southampton neighborhoods"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>

        <section className="mt-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 px-4">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Fibre Broadband in Southampton?</h2>
            <p className="text-lg text-gray-600">
              Southampton is a city that thrives on connectivity. Whether you're streaming your favourite shows, competing in online games, or running a business from home, fibre broadband offers the speed and reliability you need. With download speeds ranging from 30Mb to 1Gb, fibre broadband ensures you stay connected without interruptions.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">3 Key Benefits of Fibre Broadband</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              <CitystyleFeatureCard
                icon={Wifi}
                title="Blazing-Fast Speeds"
                description="Enjoy seamless 4K streaming, lag-free gaming, and smooth video calls with fibre broadband."
              />
              <CitystyleFeatureCard
                icon={Shield}
                title="Reliable Connections"
                description="Say goodbye to buffering and dropped connections—fibre broadband keeps you online, even during peak hours."
              />
              <CitystyleFeatureCard
                icon={ArrowUp}
                title="Future-Proof Your Home"
                description="With fibre broadband, you're ready for the latest tech, from smart homes to 8K streaming."
              />
            </div>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandSouthampton;