import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Globe, House, Download, Zap, Signal } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ManchesterBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Manchester has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Manchester area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Manchester Broadband Deals | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Looking for speedy, reliable internet in Manchester? Discover how to compare broadband deals, find the right speeds, and enjoy the best value for your home or office."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Manchester"
        subtitle="Find the fastest and most reliable broadband packages in Manchester. Compare deals from leading providers to get the best value for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Manchester cityscape with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="3 Key Benefits at a Glance"
          subtitle="Why choose our Manchester broadband comparison service?"
        >
          <CitystyleFeatureCard
            icon={Zap}
            title="Lightning-Fast Downloads"
            description="Get HD content in a flash with broadband speeds reaching up to 1Gbps in select Manchester postcodes"
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Reliable Connection"
            description="Enjoy a consistently strong signal, even at peak times—perfect for remote work and seamless streaming"
          />
          <CitystyleFeatureCard
            icon={Download}
            title="Low Latency"
            description="Experience near-instant response times for online gaming, video conferencing, and cloud-based applications"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        {/* Guide Section with New Styling */}
        <div className="mt-16 space-y-12">
          <div className="prose prose-gray max-w-none">
            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
              Why Compare Broadband Deals in Manchester?
            </h2>
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <p className="text-gray-600 mb-6">
                Manchester is a bustling city with diverse internet needs—students, professionals, families, and everyone in between. With so many providers competing in the area, you'll find a wide range of broadband packages featuring different speeds, prices, and contract lengths.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-primary mb-6 mt-12">
              How to Begin Your Search
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {['Enter Your Postcode', 'Select Current Provider', 'Browse Tailored Results', 'Pick Your Plan', 'Sign Up'].map((step, index) => (
                <div key={step} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <h4 className="text-lg font-semibold text-gray-900">{step}</h4>
                  </div>
                  <p className="text-gray-600">
                    {index === 0 && "Start with a reputable broadband comparison site and input your Manchester postcode."}
                    {index === 1 && "Often, these tools will ask who your current provider is to avoid showing deals you already have."}
                    {index === 2 && "You'll see the latest offers tailored to your address, including discounted new-customer promotions."}
                    {index === 3 && "Filter deals by speed, price, or package type (broadband only, TV + broadband, etc.) until you find the perfect match."}
                    {index === 4 && "Complete the sign-up process through the provider's website, then arrange installation or activation details."}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8 mt-16">
              Types of Broadband Connections in Manchester
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">Full Fibre (FTTP)</h4>
                <p className="text-gray-600">
                  This direct fibre-optic connection delivers speeds from 100Mbps up to 1Gbps. Availability is expanding rapidly across Manchester.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">Part-Fibre (FTTC)</h4>
                <p className="text-gray-600">
                  A mixture of fibre and copper wiring often delivers speeds up to 70Mbps. Coverage is widespread, making it a common choice for most households.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">Cable (Virgin Media)</h4>
                <p className="text-gray-600">
                  Virgin Media's network uses coaxial cables to achieve ultrafast speeds, often comparable to full fibre. It's accessible in much of central Manchester and surrounding areas.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">Mobile Broadband (4G/5G)</h4>
                <p className="text-gray-600">
                  An option if wired connections are limited or if you need a portable solution. Speeds vary depending on your location and network coverage.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h4 className="text-xl font-semibold text-primary mb-4">ADSL (Copper)</h4>
                <p className="text-gray-600">
                  The oldest method, typically offering speeds around 10–20Mbps. Still widely available but not ideal if you demand high-speed streaming or frequent large downloads.
                </p>
              </div>
            </div>

            <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8 mt-16">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm">
                <AccordionTrigger className="text-lg font-semibold px-6">
                  Can I get full-fibre broadband in all parts of Manchester?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  Full-fibre coverage is growing, but availability varies by postcode. Enter your address into a postcode checker to see if you can access FTTP services.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm">
                <AccordionTrigger className="text-lg font-semibold px-6">
                  How do I switch if I'm still in a contract?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  Switching mid-contract usually incurs exit fees. However, check your terms or contact your provider—some offer grace periods or promotional waivers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm">
                <AccordionTrigger className="text-lg font-semibold px-6">
                  Will I lose internet access during the switch?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  Not typically. Most providers coordinate the switch to minimize downtime, though you might experience a brief transition period (usually a few hours).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm">
                <AccordionTrigger className="text-lg font-semibold px-6">
                  Do I really need unlimited data?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  Most households benefit from unlimited data, especially if you regularly stream, game, or work from home. Limited packages can be cheaper but risk overage fees.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white mt-16">
              <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Broadband Deal?</h3>
              <p className="text-lg mb-6">
                Use our comparison tool above to discover the best broadband packages available in your area of Manchester.
              </p>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ManchesterBroadband;
