import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ShirleyBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Shirley has excellent broadband coverage with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers serving the Shirley area.",
      linkText: "View providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Shirley Internet Deals | Southampton Broadband Offers</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Shirley, Southampton. Compare internet packages from leading providers with reliable speeds for streaming, gaming and home working."
        />
      </Helmet>

      <CitystyleHero
        title="Find the Best Broadband Deals in Shirley and Southampton"
        subtitle="Whether you're in Shirley, Southampton, or the surrounding areas, finding the right broadband deal has never been easier."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Shirley area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Lightning-Fast Internet Solutions"
          subtitle="Experience the difference with our high-speed broadband options"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Downloads"
            description="Enjoy ultra-quick downloads, like streaming HD movies in just minutes, with speeds reaching up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Reliable Connection"
            description="Stay connected during peak times with consistent service—perfect for remote work and online classes"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Low Latency"
            description="Experience seamless online gaming and crystal-clear video calls with minimal lag"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">What to Consider When Choosing a Broadband Package</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">1. Check Your Current Contract</h3>
                <p className="text-gray-600 leading-relaxed">If your broadband contract has expired, you're likely overpaying. This is the ideal opportunity to switch to a more affordable deal or faster package.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">2. Decide on Your Budget</h3>
                <p className="text-gray-600 leading-relaxed">Broadband plans vary widely in price. Comparing offers ensures you get the best value, whether sticking with your current provider or exploring new options.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">3. Assess Your Speed Requirements</h3>
                <p className="text-gray-600 leading-relaxed">Are you streaming 4K videos, gaming online, or working from home? Opt for faster fibre broadband if multiple devices are connected simultaneously.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">4. Bundling Services</h3>
                <p className="text-gray-600 leading-relaxed">Combine broadband with TV or phone services to save money. Bundles from providers like BT, Virgin Media, or Sky may offer better value for households needing multiple services.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">5. Customer Service and Extras</h3>
                <p className="text-gray-600 leading-relaxed">Some providers offer added perks like Wi-Fi boosters or whole-home guarantees. Prioritize reliable customer service and extras that enhance your internet experience.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Steps to Compare Broadband Deals in Shirley</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-primary font-semibold">1.</span>
                <p className="text-gray-600 leading-relaxed"><span className="font-semibold">Use a Postcode Checker:</span> Enter your address to view available providers and packages tailored to your location.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold">2.</span>
                <p className="text-gray-600 leading-relaxed"><span className="font-semibold">Compare Features:</span> Assess speed, reliability, price, and customer reviews for each provider.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold">3.</span>
                <p className="text-gray-600 leading-relaxed"><span className="font-semibold">Check Special Offers:</span> Look for new customer deals, gift cards, or discounts.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-semibold">4.</span>
                <p className="text-gray-600 leading-relaxed"><span className="font-semibold">Choose the Best Option:</span> Select a deal that meets your needs and sign up online.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">How to Switch Broadband Providers</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 space-y-4">
              <p className="text-gray-600 leading-relaxed">Switching providers is straightforward:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Choose a new deal and sign up on the provider's website.</li>
                <li>Provide your details and select an activation date.</li>
                <li>The One Touch Switch system ensures a seamless transition without requiring you to cancel your old contract manually.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions (FAQs)</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">What broadband speed do I need for a family home?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  For homes with 4+ people streaming, gaming, or working, a speed of 100Mbps or higher is recommended.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">Can I switch broadband providers mid-contract?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  Yes, but early exit fees may apply. It's best to switch when your current contract ends.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">What's the difference between part-fibre and full-fibre broadband?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  Part-fibre uses copper cables, offering slower speeds, while full-fibre connects directly to your home, ensuring faster, more reliable internet.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">Are there broadband deals for low-income households?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  Yes, many providers offer social tariffs for those on benefits like Universal Credit, saving you up to £200 annually.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">Can I bundle TV and broadband for a lower price?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  Absolutely! Bundles often provide discounts and convenience by combining services into a single bill.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">How do I check my current broadband speed?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  Run a speed test while connected to your home Wi-Fi to see your download and upload speeds.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <span className="text-left font-medium">What's the fastest broadband available in Southampton?</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 text-gray-600">
                  Full fibre or Virgin Media's network provides the fastest speeds, reaching up to 1Gbps in many areas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Call to Action</h2>
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
              <p className="text-gray-800 leading-relaxed">
                Ready to upgrade your internet? Use our broadband postcode checker to find the best broadband deals in Shirley and Southampton today. Don't miss out on exclusive offers and faster speeds tailored to your home.
              </p>
            </div>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ShirleyBroadband;
