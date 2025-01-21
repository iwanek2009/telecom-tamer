import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe2, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';
import { Button } from '@/components/ui/button';
import SouthamptonDealsGrid from '@/components/local/SouthamptonDealsGrid';

const SouthamptonBroadband = () => {
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
        <title>Southampton Broadband Deals | Compare Internet Providers & Save</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Southampton. Find fast, reliable internet packages from top providers tailored to your needs. Start comparing today!"
        />
      </Helmet>

      <CitystyleHero
        title="Southampton Broadband Deals"
        subtitle="Find the best broadband deals in Southampton. Compare speeds, prices, and packages from top providers to get the perfect internet connection"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Broadband in Southampton?"
          subtitle="Experience reliable internet connectivity tailored to your needs"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Speeds"
            description="Access ultrafast fibre broadband with speeds up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Local Support"
            description="Get dedicated customer service from local installation teams"
          />
          <CitystyleFeatureCard
            icon={Globe2}
            title="Wide Coverage"
            description="Extensive network coverage across Southampton and surrounding areas"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>

        <SouthamptonDealsGrid />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Compare Broadband Deals in Southampton?</h2>
            <p className="text-gray-600 leading-relaxed">
              Southampton is a vibrant city with a growing demand for fast and reliable internet. Whether you're streaming, gaming, working from home, or running a small business, having the right broadband package is essential. By comparing deals, you can find a plan that matches your needs and budget—without overpaying for unnecessary extras.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">How to Compare Broadband Deals in Southampton</h2>
            <p className="text-gray-600 mb-6">
              Finding the right broadband deal is simple with our three-step process:
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Enter Your Postcode</h3>
                  <p className="text-gray-600">Check which providers and packages are available in your area.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Compare Deals</h3>
                  <p className="text-gray-600">Filter results by speed, price, contract length, and provider.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Switch with Confidence</h3>
                  <p className="text-gray-600">Complete your order online and enjoy a seamless transition to your new provider.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Button size="lg" className="mt-8">
              Start comparing broadband deals in Southampton today!
            </Button>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SouthamptonBroadband;