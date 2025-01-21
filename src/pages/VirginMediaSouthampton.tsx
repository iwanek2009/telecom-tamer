import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Phone, Package, MapPin, Clock, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import SouthamptonDealsGrid from '@/components/local/SouthamptonDealsGrid';
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default function VirginMediaSouthampton() {
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

        <SouthamptonDealsGrid />

        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-8">Current Special Offers</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>No setup fee on selected packages</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Free installation for new customers</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Bundle discounts available</span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              <span>Student deals with flexible contracts</span>
            </li>
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
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
                <AccordionTrigger className="text-lg font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
}
