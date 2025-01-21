import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkyBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband Bundles",
      content: "Get the best entertainment packages with fast internet speeds.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Premium Channels",
      content: "Access exclusive Sky content and premium entertainment.",
      linkText: "Explore channels",
      linkHref: "#channels"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Sky Broadband Southampton | TV & Internet Packages</title>
        <meta 
          name="description" 
          content="Compare Sky broadband and TV bundles in Southampton. Find the perfect package with fast internet speeds and premium entertainment channels."
        />
      </Helmet>

      <CitystyleHero
        title="Sky Broadband Southampton"
        subtitle="Find the perfect combination of fast broadband and premium TV entertainment"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Sky broadband and TV services in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Top Benefits of Choosing Sky Broadband"
          subtitle="Are you looking for reliable internet options in Southampton? Sky Broadband offers excellent packages tailored to meet various needs, whether you're streaming, gaming, or working from home."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast and Reliable Speeds"
            description="Enjoy consistent speeds, perfect for HD streaming, gaming, and video calls without interruptions."
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Exclusive Sky Features"
            description="Sky offers flexible bundles combining broadband, TV, and mobile for maximum value."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Exceptional Customer Support"
            description="Benefit from award-winning customer service and easy setup options."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["Sky"]}'
          />
        </div>

        <div className="mt-16 space-y-12">
          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">How to Compare Sky Broadband Deals in Southampton</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 1: Check Availability in Your Area</h3>
                <p className="text-gray-700">Use Sky's postcode checker to explore available plans tailored to your address. Southampton residents often have access to various speeds and bundles.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 2: Assess Your Internet Needs</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Household Size: More users require higher speeds (100+ Mbps for 4+ people).</li>
                  <li>Usage Habits: Gaming and streaming demand faster, more stable connections.</li>
                  <li>Budget: Choose a plan that balances speed and affordability.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Step 3: Choose a Sky Bundle</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Broadband-Only Deals: Ideal for basic internet needs.</li>
                  <li>Broadband & TV Bundles: Save by bundling Sky's premium TV services.</li>
                  <li>Comprehensive Packages: Combine broadband, TV, and mobile in one plan.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Sky Broadband Plans: Which One is Right for You?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sky Essential Broadband</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">Average Speed: 36Mbps</p>
                  <p>Best for small households with light internet usage.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sky Superfast Broadband</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">Average Speed: 59Mbps</p>
                  <p>Perfect for streaming and everyday use in medium-sized households.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sky Ultrafast Broadband</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">Average Speed: 145Mbps</p>
                  <p>Ideal for larger families and heavy internet users.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Sky Gigafast Broadband</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-2">Average Speed: 900Mbps</p>
                  <p>Excellent for gamers, streamers, and smart homes requiring ultra-fast speeds.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">FAQs About Sky Broadband Deals in Southampton</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What speeds can I expect with Sky Broadband in Southampton?</AccordionTrigger>
                <AccordionContent>
                  Sky offers speeds ranging from 36Mbps to 900Mbps, depending on your chosen plan and location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Does Sky offer broadband without a landline?</AccordionTrigger>
                <AccordionContent>
                  Yes, Sky provides broadband-only deals that don't require a landline.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are there any social tariffs available with Sky?</AccordionTrigger>
                <AccordionContent>
                  Sky offers affordable packages for eligible low-income households.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I bundle broadband with Sky TV?</AccordionTrigger>
                <AccordionContent>
                  Yes, Sky offers competitive broadband and TV bundles, including access to Sky Sports and Sky Cinema.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Get Started with Sky Broadband Today!</h2>
            <p className="mb-6">Explore Sky Broadband deals tailored for Southampton residents. Use the postcode checker to compare packages and find the best plan for your household.</p>
            <p className="font-semibold">Enjoy fast, reliable internet with Sky's award-winning service!</p>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SkyBroadbandSouthampton;