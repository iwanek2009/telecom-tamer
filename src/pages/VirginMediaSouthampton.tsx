import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Phone, Package, MapPin, Clock, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function VirginMediaSouthampton() {
  const heroAccordionItems = [
    {
      title: "Cable Network Coverage",
      content: "Virgin Media's cable network covers most of London, offering speeds up to 1.1Gbps through their advanced fiber-coax infrastructure.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "TV Bundles",
      content: "Combine your broadband with Virgin Media TV packages featuring premium channels and streaming apps.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Installation & Setup",
      content: "Professional installation available within 7 days in most London areas, with quick self-setup options for some packages.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Virgin Media Southampton | Compare Local Deals</title>
        <meta 
          name="description" 
          content="Explore Virgin Media broadband packages in Southampton. Compare ultrafast fibre deals with TV bundles and phone options. Get reliable speeds for your home."
        />
      </Helmet>

      <CitystyleHero
        title="Virgin Media Southampton"
        subtitle="Compare ultrafast broadband packages from Virgin Media. Find the perfect bundle with TV and phone options."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Virgin Media broadband coverage in Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Key Benefits of Virgin Media in Southampton"
          subtitle="Best Virgin Media broadband packages available in Southampton, featuring ultrafast speeds and exclusive bundle options for residents."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Gigabit Speeds"
            description="Experience lightning-fast downloads up to 1.1Gbps - perfect for 4K streaming and gaming"
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Dedicated Network"
            description="Enjoy reliable connectivity through Virgin's independent cable infrastructure"
          />
          <CitystyleFeatureCard
            icon={Phone}
            title="Flexible Bundles"
            description="Customize your package with TV, phone, and mobile services"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"suppliers": ["Virgin Media"]}'
          />
        </div>

        {/* Package Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-[#3FC1C9] to-[#00A8E8] bg-clip-text text-transparent">
            Available Virgin Media Packages in Southampton
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "M125 Fibre Broadband",
                speed: "132Mbps",
                features: [
                  "Ideal for small households",
                  "Perfect for HD streaming and remote work"
                ]
              },
              {
                title: "M250 Fibre Broadband",
                speed: "264Mbps",
                features: [
                  "Great for gaming and 4K streaming",
                  "Supports multiple devices simultaneously"
                ]
              },
              {
                title: "M500 Fibre Broadband",
                speed: "516Mbps",
                features: [
                  "Perfect for large households",
                  "Excellent for heavy internet users"
                ]
              },
              {
                title: "Gig1 Fibre Broadband",
                speed: "1,130Mbps",
                features: [
                  "Ultimate performance for power users",
                  "Future-proof your connection"
                ]
              }
            ].map((pkg, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pkg.title}</h3>
                <p className="text-2xl font-bold text-[#3FC1C9] mb-4">Average speeds of {pkg.speed}</p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Bundle Options */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-[#3FC1C9] to-[#00A8E8] bg-clip-text text-transparent">
            Bundle Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <Package className="w-12 h-12 text-[#3FC1C9] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">TV Add-ons</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                  <span className="text-gray-600">Choose from 100+ channels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                  <span className="text-gray-600">Include Sky Sports and BT Sport</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                  <span className="text-gray-600">Stream Netflix directly through Virgin TV</span>
                </li>
              </ul>
            </Card>
            <Card className="p-8">
              <Phone className="w-12 h-12 text-[#3FC1C9] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mobile Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                  <span className="text-gray-600">Add Virgin Mobile SIM plans</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                  <span className="text-gray-600">Save with bundle discounts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                  <span className="text-gray-600">Share data across devices</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="mt-16">
          <Card className="p-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-12 h-12 text-[#3FC1C9] flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Installation and Coverage</h2>
                <p className="text-gray-600 mb-4">Virgin Media's network covers most of Southampton, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["City Centre", "Shirley", "Bitterne", "Woolston", "Bassett"].map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#3FC1C9] rounded-full" />
                      <span className="text-gray-600">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Special Offers */}
        <section className="mt-16">
          <Card className="p-8 bg-gradient-to-r from-[#3FC1C9] to-[#00A8E8] text-white">
            <h2 className="text-2xl font-bold mb-6">Current Special Offers</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>No setup fee on selected packages</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Free installation for new customers</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Bundle discounts available</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Student deals with flexible contracts</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* FAQs */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-[#3FC1C9] to-[#00A8E8] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What's the typical installation time in Southampton?",
                a: "Most installations are completed within 14 days of ordering, with many customers connected within a week."
              },
              {
                q: "Can I keep my current phone number?",
                a: "Yes, Virgin Media can transfer your existing landline number at no extra cost."
              },
              {
                q: "Are there any setup fees?",
                a: "Setup fees vary by package, but are often waived during promotional periods."
              },
              {
                q: "What speeds can I actually expect?",
                a: "Virgin Media guarantees at least 50% of advertised speeds during peak times (8pm-10pm)."
              },
              {
                q: "Do I need a phone line?",
                a: "No, Virgin Media operates on its own cable network, so a separate phone line isn't required."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border p-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-900">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Call to Action */}
        <section className="mt-16 mb-8">
          <Card className="p-8 bg-gradient-to-r from-[#3FC1C9] to-[#00A8E8] text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Connected?</h2>
            <p className="text-lg mb-6">
              Check your address for Virgin Media availability and view the latest deals in Southampton. 
              Compare packages and speeds to find your perfect broadband solution.
            </p>
            <p className="text-lg font-semibold">
              Use our postcode checker to see Virgin Media deals available at your Southampton address
            </p>
          </Card>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
}
