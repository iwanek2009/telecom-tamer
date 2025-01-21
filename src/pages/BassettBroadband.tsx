import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import SouthamptonDealsGrid from '@/components/local/SouthamptonDealsGrid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BassettBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Check broadband availability in your part of Bassett.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Top Providers",
      content: "Compare deals from major providers serving Bassett.",
      linkText: "View providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Bassett Broadband Deals | Local Southampton Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Bassett, Southampton. Find local internet packages with reliable speeds from top providers. Perfect for streaming, gaming and home working."
        />
      </Helmet>

      <CitystyleHero
        title="Bassett Broadband Deals"
        subtitle="Find the perfect internet package for your Bassett home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Broadband services in Bassett, Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Key Benefits of Broadband in Bassett"
          subtitle="This guide simplifies the process, helping you secure a reliable and budget-friendly internet package"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Speeds"
            description="Enjoy seamless downloads with speeds up to 1Gbps, perfect for streaming HD content and gaming without interruptions"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Connections"
            description="Stay connected with consistent service, even during peak times, ensuring your work or entertainment isn't disrupted"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Affordable Packages"
            description="Choose from a variety of plans designed to fit any budget, from simple broadband-only deals to comprehensive bundles"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <SouthamptonDealsGrid />

        <div className="mt-16 space-y-12">
          <div className="prose max-w-none">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">How to Compare Broadband Deals in Bassett</h2>
            
            <div className="space-y-10">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Step 1: Check Available Providers</h3>
                <p className="mb-4 text-gray-600">Use an online postcode checker to see which providers serve your area. Popular providers in Southampton include:</p>
                <ul className="list-none space-y-2">
                  {["BT", "Virgin Media", "Sky", "Plusnet", "Vodafone"].map((provider) => (
                    <li key={provider} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span>{provider}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Step 2: Consider Your Needs</h3>
                <p className="mb-4 text-gray-600">Identify what matters most to you:</p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-secondary">Speed:</span>
                    <span className="text-gray-700">For gaming and streaming, aim for speeds above 100Mbps.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-secondary">Price:</span>
                    <span className="text-gray-700">Compare offers and consider any bundled deals for added value.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="font-bold text-secondary">Extras:</span>
                    <span className="text-gray-700">Some plans include TV channels, free routers, or discounted mobile plans.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Step 3: Read Reviews</h3>
                <p className="text-gray-600">Look for customer feedback on reliability and customer service. Some providers, like Virgin Media, excel in speed, while others, like Plusnet, are praised for affordability and customer support.</p>
              </div>
            </div>

            <h2 className="text-4xl font-bold mt-16 mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Factors to Consider When Choosing Broadband in Bassett</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "1. Your Budget",
                  content: "Are you looking for a basic plan or willing to invest in a premium package? Deals start from as little as £20 per month for standard speeds."
                },
                {
                  title: "2. Connection Type",
                  content: "Bassett residents typically have access to:",
                  list: [
                    "Part-Fibre Broadband: Speeds up to 70Mbps, suitable for most households.",
                    "Full Fibre Broadband: Up to 1Gbps for ultra-fast connections.",
                    "Mobile Broadband: A flexible option using 4G/5G technology."
                  ]
                },
                {
                  title: "3. Usage Needs",
                  content: "Households with multiple users should opt for plans with at least 50Mbps. Larger families or those with heavy internet use may require speeds of 100Mbps or more."
                },
                {
                  title: "4. Contract Length",
                  content: "Many providers offer 12- or 18-month contracts. If you need flexibility, no-contract plans might be a better fit."
                },
                {
                  title: "5. Bundled Services",
                  content: "Bundling broadband with TV or mobile can save money. For instance, Virgin Media's Volt packages combine broadband, TV, and mobile in one plan."
                }
              ].map((factor) => (
                <div key={factor.title} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{factor.title}</h3>
                  <p className="text-gray-600 mb-4">{factor.content}</p>
                  {factor.list && (
                    <ul className="space-y-2">
                      {factor.list.map((item) => (
                        <li key={item} className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            How to Switch Broadband Providers
          </h2>
          <p className="text-gray-600 mb-6">
            Switching broadband providers in Bassett is now easier than ever with the "One Touch Switch" system. Here's what to expect:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start space-x-3">
              <span className="text-secondary">1.</span>
              <span className="text-gray-700">Choose a deal and sign up with your new provider.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary">2.</span>
              <span className="text-gray-700">Your new provider will handle the switch, including notifying your current supplier.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-secondary">3.</span>
              <span className="text-gray-700">Set up your equipment and enjoy your new service.</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            FAQs About Broadband Deals in Bassett
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What's the average broadband speed in Bassett?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                The average speed is around 69Mbps, but full fibre connections can offer much faster speeds, up to 1Gbps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                How do I check broadband availability in Bassett?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Use a postcode checker to view providers and speeds available at your address.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Can I get broadband without a landline?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, broadband-only deals are available, especially from providers like Virgin Media and some fibre-optic services.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Are there social tariffs for low-income households?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, several providers offer discounted plans for those receiving benefits such as Universal Credit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                What happens if I want to switch providers mid-contract?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You may face early exit fees. However, these can sometimes be offset by savings with a new provider.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-semibold">
                What's the difference between fibre and part-fibre broadband?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Fibre broadband uses fibre-optic cables for faster speeds, while part-fibre combines fibre and copper lines, which may result in slower speeds.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-semibold">
                How long does it take to switch broadband?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Switching usually takes around two weeks, but you'll experience minimal downtime if your new provider handles the process seamlessly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Broadband Deal?</h2>
          <p className="text-lg mb-6">
            Don't settle for subpar internet. Use a postcode checker today to compare broadband packages in Bassett, Southampton, and discover the best offers tailored to your needs. Whether it's speed, affordability, or reliability, there's a deal for you!
          </p>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BassettBroadband;
