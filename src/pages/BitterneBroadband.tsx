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

const BitterneBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Bitterne has comprehensive broadband coverage with various speed options.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Home Packages",
      content: "Compare packages designed for modern households in Bitterne.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Bitterne Southampton Broadband Packages | Compare Local Providers</title>
        <meta 
          name="description" 
          content="Compare broadband packages in Bitterne, Southampton. Choose from a range of local internet deals with fast, reliable connections for all your home needs."
        />
      </Helmet>

      <CitystyleHero
        title="Bitterne Broadband Packages"
        subtitle="Find the perfect internet package for your Bitterne home. Compare local broadband deals for reliable connectivity."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Bitterne area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Bitterne Broadband Deals?"
          subtitle="If you live in Bitterne or nearby Southampton, you can find broadband deals tailored to your needs"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Downloads"
            description="Download HD movies or large files in just minutes with speeds up to 1Gbps"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Reliable Connection"
            description="Stay connected without interruptions, even during peak hours—ideal for working or studying from home"
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Low Latency"
            description="Perfect for smooth online gaming, video calls, and streaming without buffering"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        <section className="mt-16 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Find the Best Broadband Packages in Bitterne, Southampton</h2>
            <p className="text-gray-700 leading-relaxed">
              If you live in Bitterne or nearby Southampton, you can find broadband deals tailored to your needs. Comparing local providers ensures you get the best mix of speed, reliability, and price to fit your household's requirements.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Key Factors to Consider When Choosing a Broadband Deal</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">1. Is Your Current Contract Expired?</h3>
                <p className="text-gray-700">Out-of-contract customers often pay more. Check your current status to see if switching could save you money.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">2. Budget-Friendly Options</h3>
                <p className="text-gray-700">Evaluate broadband plans across various providers. While your current provider may offer discounts, exploring competitor deals can help you find better value.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">3. Need for Speed</h3>
                <p className="text-gray-700">Struggling with slow connections? Upgrading to a faster fibre plan may be available at a similar cost to your current package.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">4. Service Bundles</h3>
                <p className="text-gray-700">Consider combining broadband with TV, phone, or mobile services for a more economical package.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">5. Importance of Customer Support</h3>
                <p className="text-gray-700">Reliable service includes excellent customer support. Look for providers with good reviews and additional features like Wi-Fi boosters or full-home coverage guarantees.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Types of Broadband Available in Bitterne and Southampton</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Part-Fibre Broadband</h3>
                <p className="text-gray-700">Ideal for general browsing and streaming with speeds of 30–70Mbps. Available in most areas.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Fibre Broadband</h3>
                <p className="text-gray-700">For ultra-fast speeds exceeding 100Mbps, ideal for large households or high-demand users.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Virgin Media Cable Broadband</h3>
                <p className="text-gray-700">Offers high-speed connectivity (up to 1Gbps) with widespread coverage in urban locations like Southampton.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4G/5G Home Broadband</h3>
                <p className="text-gray-700">A wireless solution for flexible internet access, particularly in areas without fibre coverage.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">How to Compare Broadband Providers in Bitterne</h2>
            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>Start with a Postcode Checker: Enter your address to view local providers and available packages.</li>
              <li>Compare Deals: Focus on speed, price, and customer satisfaction ratings.</li>
              <li>Check for Special Offers: Many providers offer introductory deals or bonuses for new customers.</li>
              <li>Read the Fine Print: Understand contract lengths, early exit fees, and any potential mid-contract price hikes.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Switching Broadband Providers: A Simple Process</h2>
            <p className="text-gray-700 leading-relaxed">
              Switching is easier than ever with the UK's One Touch Switch system. Here's how it works:
            </p>
            <ul className="space-y-3 list-disc pl-6 text-gray-700">
              <li>Choose your preferred broadband package and sign up.</li>
              <li>Your new provider will handle the transition process, ensuring minimal downtime.</li>
              <li>You can schedule an activation date that works for you.</li>
              <li>Switching saves you money while potentially upgrading your internet experience.</li>
            </ul>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
            <p className="text-gray-800 leading-relaxed">
              Ready to find the perfect broadband package? Use our broadband postcode checker to compare deals in Bitterne and Southampton. Start saving today and enjoy better internet!
            </p>
          </div>
        </section>

        <section className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions (FAQs)</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                What is the best broadband speed for a family home?
              </AccordionTrigger>
              <AccordionContent>
                For households with 3–4 people streaming, gaming, or working, speeds above 100Mbps are recommended.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                How do I know if I'm overpaying for broadband?
              </AccordionTrigger>
              <AccordionContent>
                Check if your contract has expired—out-of-contract customers often pay higher rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Are there discounts for low-income households?
              </AccordionTrigger>
              <AccordionContent>
                Yes, some providers offer social tariffs for customers receiving Universal Credit or similar benefits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Can I bundle broadband with TV and phone services?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! Bundling can often save money and simplify billing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                How do I test my current broadband speed?
              </AccordionTrigger>
              <AccordionContent>
                Run a speed test while connected to your Wi-Fi to measure your download and upload speeds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Is fibre broadband available in Bitterne?
              </AccordionTrigger>
              <AccordionContent>
                Yes, many areas in Bitterne and Southampton now have access to full-fibre and Virgin Media networks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left">
                Can I switch providers without downtime?
              </AccordionTrigger>
              <AccordionContent>
                Yes, the One Touch Switch system ensures a smooth transition with minimal service interruptions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BitterneBroadband;
