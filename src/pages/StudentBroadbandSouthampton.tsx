import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Shield, Check, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

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

      <CitystyleContent>
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

        <div className="mt-16 space-y-16">
          {/* What to Look for Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Look for in Student Broadband</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget-Friendly Options</h3>
                <p className="text-gray-600 mb-4">Students often prioritize cost over extras. Look for:</p>
                <ul className="space-y-3">
                  {[
                    'Low monthly rates (under £25/month)',
                    'No upfront fees (free installation or router)',
                    "Discounts for students (e.g., Virgin Media's student offer)"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Short-Term Flexibility</h3>
                <p className="text-gray-600 mb-4">Avoid being locked into long contracts. Opt for:</p>
                <ul className="space-y-3">
                  {[
                    '9–12-month deals (common with providers like NOW Broadband)',
                    'No-contract broadband (ideal for short academic terms)'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Speed Needs for Student Life</h3>
                <p className="text-gray-600 mb-4">Balancing Netflix marathons and essay deadlines? Aim for:</p>
                <ul className="space-y-3">
                  {[
                    'Full fibre – Check availability in Southampton postcodes (SO14–SO17)',
                    '50–100Mbps – Smooth Zoom calls, HD streaming, and multiplayer gaming'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Top Providers Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Providers for Students in Southampton</h2>
            <div className="grid md:grid-cols-2 gap-6">
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
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.provider}</h3>
                  <p className="text-gray-700">{item.details}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-600 italic">Tip: Use a postcode checker to see which providers cover your accommodation.</p>
          </section>

          {/* FAQs Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
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
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex gap-3">
                    <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                      <p className="text-gray-700">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default StudentBroadbandSouthampton;