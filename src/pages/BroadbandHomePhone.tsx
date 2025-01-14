import React from 'react';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Phone, Wifi, PoundSterling, Check } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Card, CardContent } from '@/components/ui/card';

const BroadbandHomePhone = () => {
  const heroAccordionItems = [
    {
      title: "Why choose a broadband and phone package?",
      content: "Combining your broadband and phone services can often lead to better value and simplified billing. Many providers offer discounted calls and additional features when you bundle these services.",
      linkText: "Learn more about bundles",
      linkHref: "#bundles"
    },
    {
      title: "What phone features are included?",
      content: "Most packages include free weekend or evening calls, with options to add anytime calls or international calling. You'll also get features like voicemail, caller ID, and call waiting.",
      linkText: "View phone features",
      linkHref: "#features"
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Broadband & Phone Deals | Compare UK Home Packages</title>
        <meta 
          name="description" 
          content="Get fast broadband with inclusive UK calls. Compare the latest home broadband and phone deals from trusted providers. Save money with our exclusive packages"
        />
      </Helmet>

      <BStyleHero
        title="Broadband & Home Phone Deals"
        subtitle="Get the fastest broadband and best value phone deals for your home. Compare prices and speeds from trusted UK providers to find your perfect package"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Person using laptop and phone"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <BStyleFeatureGrid
          title="Key Features of Our Broadband & Phone Packages"
          subtitle="Discover what makes our home broadband and phone deals stand out"
        >
          <BStyleFeatureCard
            icon={Phone}
            title="Inclusive Call Plans"
            description="Choose from evening & weekend or anytime UK landline calls with clear connection quality"
          />
          <BStyleFeatureCard
            icon={Wifi}
            title="Reliable Connection"
            description="Fast broadband with dedicated phone line support and 24/7 technical assistance"
          />
          <BStyleFeatureCard
            icon={PoundSterling}
            title="Better Value"
            description="Save money and get more by bundling your home broadband and phone services together"
          />
        </BStyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"package_types":["BROADBAND_PHONE"]}'
          />
        </div>

        <section className="mt-16 space-y-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Choose the Right Broadband & Phone Bundle for Your Home</h2>
              <p className="text-lg text-gray-600">
                Save time and money by combining your internet and phone services into one convenient home package. Modern broadband and phone bundles offer you reliable connectivity with flexible calling plans, perfect for both daily internet users and regular landline callers.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Combined Package?</h3>
                <p className="text-gray-600 mb-6">
                  A broadband and phone bundle provides more than just internet access. Your package includes a dedicated phone line essential for stable broadband connection, plus the option to add calling features that suit your lifestyle.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits of Home Phone Bundles</h3>
                  <p className="text-gray-600 mb-4">Most UK providers now offer extensive coverage across residential areas, ensuring you get:</p>
                  <ul className="space-y-3">
                    {[
                      'Reliable landline service for areas with inconsistent mobile coverage',
                      'Cost-effective international calling rates compared to mobile plans',
                      'Crystal-clear call quality for important home or business conversations',
                      'Professional technical support for both services',
                      'Single monthly bill for easier budget management'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Making the Right Choice</h3>
                  <p className="text-gray-600 mb-4">Before selecting your broadband and phone package, consider:</p>
                  <ul className="space-y-3">
                    {[
                      'Available connection speeds in your area',
                      'Your typical monthly calling patterns',
                      'Whether you need evening, weekend, or anytime calls',
                      'Bundle discounts and current provider offers'
                    ].map((consideration, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default BroadbandHomePhone;