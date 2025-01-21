import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Shield, Check, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StudentBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Student-Friendly Contracts",
      content: "Find flexible contracts that match your term times.",
      linkText: "View deals",
      linkHref: "#deals"
    },
    {
      title: "Shared Houses",
      content: "Perfect for multiple users with high-speed connections.",
      linkText: "Compare packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Student Broadband Deals Southampton | Flexible Internet</title>
        <meta 
          name="description" 
          content="Compare student broadband deals in Southampton. Find flexible contracts with fast speeds perfect for shared houses and student accommodation."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband Southampton"
        subtitle="Fast, flexible internet perfect for student life"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Students working together with laptops in a study group"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent className="space-y-16">
        <CitystyleFeatureGrid
          title="Best Student Broadband Deals in Southampton"
          subtitle="Compare budget-friendly student broadband deals in Southampton! Compare speeds, prices, and flexible contracts tailored for university life."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Blazing-Fast Speeds"
            description="Stream lectures, game, and binge-watch with 100Mbps+ fibre"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Unbeatable Prices"
            description="Plans from £15/month, perfect for tight budgets"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="No Long-Term Hassles"
            description="Short 9–12-month contracts or rolling monthly deals"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        {/* What to Look for Section */}
        <section className="space-y-12">
          <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
            What to Look for in Student Broadband
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Budget-Friendly Options</h3>
              <p className="text-gray-700 mb-4">Students often prioritize cost over extras. Look for:</p>
              <ul className="space-y-2">
                {[
                  'Low monthly rates (under £25/month)',
                  'No upfront fees (free installation or router)',
                  "Discounts for students (e.g., Virgin Media's student offer)"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Short-Term Flexibility</h3>
              <p className="text-gray-700 mb-4">Avoid being locked into long contracts. Opt for:</p>
              <ul className="space-y-2">
                {[
                  '9–12-month deals (common with providers like NOW Broadband)',
                  'No-contract broadband (ideal for short academic terms)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Speed Needs for Student Life</h3>
              <p className="text-gray-700 mb-4">Balancing Netflix marathons and essay deadlines? Aim for:</p>
              <ul className="space-y-2">
                {[
                  '50–100Mbps – Smooth Zoom calls, HD streaming, and multiplayer gaming',
                  'Full fibre – Check availability in Southampton postcodes (SO14–SO17)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Top Providers Section */}
        <section>
          <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
            Top Providers for Students in Southampton
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                provider: 'Virgin Media',
                details: 'Offers 132Mbps student broadband with a free WiFi booster'
              },
              {
                provider: 'NOW Broadband',
                details: 'Flexible 30-day contracts and prices from £18/month'
              },
              {
                provider: 'Vodafone Pro II',
                details: 'Includes gaming optimizations and a £50 gift card'
              },
              {
                provider: 'Hyperoptic',
                details: '150Mbps speeds in student-heavy areas like Portswood'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">{item.provider}</h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600 italic">Tip: Use a postcode checker to see which providers cover your accommodation.</p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Connected?</h2>
          <p className="text-lg mb-6">
            Compare student broadband deals in Southampton now with our postcode checker and save up to £150/year!
          </p>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Can I get broadband for a 6-month tenancy?',
                a: 'Yes! Providers like NOW Broadband and Hyperoptic offer 30-day rolling contracts.'
              },
              {
                q: 'Are there deals without a landline?',
                a: "Absolutely. Many full fibre packages (e.g., Hyperoptic) don't require a phone line."
              },
              {
                q: 'How long does installation take?',
                a: 'Usually 1–2 weeks. Some providers even offer next-day setup.'
              },
              {
                q: 'Do students qualify for social tariffs?',
                a: 'If you receive Universal Credit, yes. Vodafone and Virgin Media offer plans from £12/month.'
              },
              {
                q: 'Can I keep my broadband if I move houses?',
                a: "Check if your provider covers your new address. If not, you'll need to switch (no fees if out of contract)."
              },
              {
                q: 'Is 5G home broadband a good alternative?',
                a: 'For short stays, yes! Three and EE offer unlimited 5G data with no setup delays.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                <AccordionTrigger className="text-lg font-semibold px-6">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-6 pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default StudentBroadbandSouthampton;