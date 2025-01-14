import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Phone, Wifi, PoundSterling, Check, Clock, Calendar, PhoneCall, Info, AlertCircle, CreditCard, World } from 'lucide-react';
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

        <section className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-4xl mx-auto space-y-8 px-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Choosing the Best Broadband & Home Phone Package: Essential Tips</h2>
              <p className="text-lg text-gray-600">
                Before selecting your perfect broadband and phone bundle, consider these key factors to ensure you get the most value from your home package.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Call Plan Options Explained</h3>
              <p className="text-gray-600 text-center">
                Your broadband and phone package will typically include one of these calling plans:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-center mb-4">
                      <Calendar className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 text-center">Weekend Calls Package</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Free calls during weekends</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Standard rates apply on weekdays</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Most affordable option for occasional callers</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Perfect for households using mobile phones as primary contact</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-center mb-4">
                      <Clock className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 text-center">Evening & Weekend Calls</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Free calls from 7pm to 7am on weekdays</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>All weekend calls included</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Popular choice for home workers</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Ideal balance of flexibility and cost</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-center mb-4">
                      <PhoneCall className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 text-center">Anytime Calls Package</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Unlimited calls 24/7</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Higher monthly rate</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Best for regular daytime callers</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Suitable for home businesses</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 py-16">
          <div className="max-w-4xl mx-auto space-y-8 px-4">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">Understanding Call Charges</h2>
              <p className="text-lg text-gray-600">
                Know what to expect with your phone package charges and how to optimize your costs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <PoundSterling className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Off-Package Call Costs</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Standard rate calls typically up to 16p per minute",
                      "Additional charges may apply during peak hours",
                      "Mobile and international calls often charged separately",
                      "Check provider rates for specific call types"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <World className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Special Call Requirements</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Consider international calling needs",
                      "Check mobile call inclusion",
                      "Compare provider rates for specialty numbers",
                      "Look for inclusive minutes to common destinations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Line Rental Information</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Modern broadband and phone packages include line rental in the total monthly cost. There's no separate charge for copper phone line rental - it's all part of your bundle price.
                  </p>
                  <h4 className="font-semibold text-lg mb-2">Cost-Saving Tips:</h4>
                  <ul className="space-y-3">
                    {[
                      "Match call times to your package benefits",
                      "Consider mobile alternatives for daytime calls",
                      "Compare bundle deals across providers",
                      "Look for special introductory offers",
                      "Check for hidden charges or fees"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>{item}</span>
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
