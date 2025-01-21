import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Shield, Package, Lock, GraduationCap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BTSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Full Fibre",
      content: "Access BT's full fibre network with speeds up to 900Mbps.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "TV Add-ons",
      content: "Explore BT's TV packages and Sport options.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT Broadband Southampton | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best BT broadband deals in Southampton. Compare fibre packages with reliable speeds and optional TV bundles. Perfect for streaming and gaming."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Southampton"
        subtitle="Compare BT's fibre broadband packages in Southampton. Find reliable connections with optional TV bundles."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband coverage in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Key Benefits of BT Broadband in Southampton"
          subtitle="Looking for reliable BT broadband in Southampton? Discover comprehensive packages, exclusive deals, and everything you need to know about getting connected with the UK's largest broadband provider."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Full Fibre Coverage"
            description="Access ultrafast speeds up to 900Mbps across Southampton's expanding full fibre network"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Smart Hub Technology"
            description="Enjoy whole-home coverage with BT's advanced Wi-Fi hardware and Complete Wi-Fi guarantee"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Entertainment Extras"
            description="Bundle your connection with BT Sport, NOW TV, and premium streaming services"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["BT"]}'
          />
        </div>

        <div className="mt-16 space-y-12">
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Available BT Broadband Packages in Southampton</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Fibre Essential */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fibre Essential</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Average speeds of 36Mbps</li>
                  <li>Unlimited downloads</li>
                  <li>Stay Fast Guarantee</li>
                  <li>BT Smart Hub included</li>
                </ul>
              </div>

              {/* Fibre 1 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fibre 1</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Average speeds of 50Mbps</li>
                  <li>Unlimited downloads</li>
                  <li>Perfect for HD streaming</li>
                  <li>Enhanced security features</li>
                </ul>
              </div>

              {/* Fibre 2 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Fibre 2</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Average speeds of 74Mbps</li>
                  <li>Unlimited downloads</li>
                  <li>Complete Wi-Fi guarantee option</li>
                  <li>Perfect for 4K streaming and gaming</li>
                </ul>
              </div>

              {/* Full Fibre */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Full Fibre</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Speeds from 100Mbps to 900Mbps</li>
                  <li>Ultrafast reliability</li>
                  <li>Perfect for large households</li>
                  <li>Future-proof connection</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Special Features Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Special Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">BT Complete Wi-Fi</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Whole-home coverage guarantee</li>
                  <li>Additional Wi-Fi discs if needed</li>
                  <li>Smart channel switching</li>
                  <li>Expert setup support</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Security Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>BT Virus Protect</li>
                  <li>Web Protect</li>
                  <li>Parental controls</li>
                  <li>Network security</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Student Deals Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Student Deals in Southampton</h2>
            <p className="text-gray-600 mb-6">BT offers special packages for Southampton's student community:</p>
            <ul className="space-y-2 text-gray-600">
              <li>9-month contract options</li>
              <li>Exclusive student discounts</li>
              <li>No upfront costs on selected deals</li>
              <li>Flexible installation dates</li>
            </ul>
          </section>

          {/* FAQs Section */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does BT installation take in Southampton?</AccordionTrigger>
                <AccordionContent>
                  Standard installation typically takes 10-14 days, with faster options available in full fibre areas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I keep my existing phone number?</AccordionTrigger>
                <AccordionContent>
                  Yes, BT will transfer your number free of charge during the switching process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What speeds are available in my area?</AccordionTrigger>
                <AccordionContent>
                  Speeds vary by location - use BT's postcode checker to see exact availability at your address.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need a new router?</AccordionTrigger>
                <AccordionContent>
                  Yes, BT provides their Smart Hub free with new contracts, ensuring optimal performance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Are there any setup costs?</AccordionTrigger>
                <AccordionContent>
                  Setup costs vary by package, but are often waived during promotional periods.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          {/* Call to Action Section */}
          <section className="bg-[#3FC1C9] text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
            <p className="text-lg mb-8">
              Check your address now to see the best BT broadband deals available in Southampton. 
              Compare packages, speeds, and prices to find your perfect match.
            </p>
            <button className="bg-white text-[#3FC1C9] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Check Availability
            </button>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTSouthampton;