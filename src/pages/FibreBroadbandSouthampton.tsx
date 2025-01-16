import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Home, Globe2, Shield, ArrowUp, Check, PoundSterling, Tags, Calculator } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';
import { Link } from 'react-router-dom';

const FibreBroadbandSouthampton = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Southampton enjoys extensive fibre coverage with speeds up to 1Gbps available in many areas through providers like Virgin Media and BT.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Student-Friendly Deals",
      content: "Special broadband packages available for students at Southampton University and Solent University areas.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Southampton.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fibre Broadband Southampton | Compare Fast Internet Packages & Save</title>
        <meta 
          name="description" 
          content="Compare the best fibre broadband deals in Southampton. Find fast, reliable internet packages from top providers tailored to your needs. Start comparing today!"
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Southampton"
        subtitle="Best fibre broadband deals in Southampton. Compare fast internet packages from top providers to find the perfect connection for streaming, gaming, and working from home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Fibre Broadband in Southampton?"
          subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Get download speeds up to 1Gbps with full fibre coverage across Southampton"
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Local Support"
            description="Benefit from local installation teams and dedicated customer service"
          />
          <CitystyleFeatureCard
            icon={Globe2}
            title="City-Wide Coverage"
            description="Extensive fibre network covering all Southampton neighborhoods"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>

        <section className="mt-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Find the Best Fibre Broadband Deals in Southampton</h2>
          
          <p className="text-lg text-gray-600 mb-6">
            Finding the right fibre broadband deal is simple with our three-step process:
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-primary">1.</span>
              <p className="text-lg text-gray-700"><strong>Enter Your Postcode:</strong> Check which providers and packages are available in your area.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-primary">2.</span>
              <p className="text-lg text-gray-700"><strong>Compare Deals:</strong> Filter results by speed, price, contract length, and provider.</p>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl font-bold text-primary">3.</span>
              <p className="text-lg text-gray-700"><strong>Switch with Confidence:</strong> Complete your order online and enjoy a seamless transition to your new provider.</p>
            </div>
          </div>

          <div className="text-center mb-16">
            <a href="#compare-deals" className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors">
              Start comparing fibre broadband deals in Southampton today!
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Fibre Broadband Providers in Southampton</h2>
            <p className="text-lg text-gray-600 mb-6">
              Here are some of the leading providers offering great fibre broadband deals in Southampton:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Speed</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Monthly Cost</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contract Length</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Perks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Virgin Media</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Up to 1Gb</td>
                    <td className="px-6 py-4 text-sm text-gray-600">From £28</td>
                    <td className="px-6 py-4 text-sm text-gray-600">18 months</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Free setup, Wi-Fi booster</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">BT</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Up to 900Mb</td>
                    <td className="px-6 py-4 text-sm text-gray-600">From £30</td>
                    <td className="px-6 py-4 text-sm text-gray-600">24 months</td>
                    <td className="px-6 py-4 text-sm text-gray-600">£20 reward card, free router</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Sky</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Up to 500Mb</td>
                    <td className="px-6 py-4 text-sm text-gray-600">From £25</td>
                    <td className="px-6 py-4 text-sm text-gray-600">18 months</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Free Netflix for 12 months</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">Hyperoptic</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Up to 1Gb</td>
                    <td className="px-6 py-4 text-sm text-gray-600">From £35</td>
                    <td className="px-6 py-4 text-sm text-gray-600">12 months</td>
                    <td className="px-6 py-4 text-sm text-gray-600">No setup fee, 24/7 support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Speed Requirements Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Speed Do You Need in Southampton?</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Choosing the right fibre broadband speed depends on your household's internet usage:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-semibold">Light Usage:</span> Browsing, emails, and social media (30-50Mb).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-semibold">Moderate Usage:</span> Streaming HD videos and online gaming (50-100Mb).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-semibold">Heavy Usage:</span> 4K streaming, large file downloads, and multiple devices (100Mb+).
                </div>
              </li>
            </ul>

            <Link to="/broadband-speed" className="text-primary hover:underline">
              Read our guide on Choosing the Right Broadband Speed →
            </Link>
          </div>

          {/* Saving Tips Section */}
          <div className="mt-16 max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Save on Your Fibre Broadband Deal</h2>
            
            <p className="text-lg text-gray-600 mb-6">
              Here are some tips to get the best value:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PoundSterling className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-semibold">Compare Providers:</span> Check availability and speeds in your area.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Tags className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-semibold">Look for Discounts:</span> Many providers offer reduced rates for the first 6-12 months.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calculator className="w-5 h-5 text-primary mt-1" />
                <div>
                  <span className="font-semibold">Check the Total Cost:</span> Include setup fees, equipment charges, and potential price increases.
                </div>
              </li>
            </ul>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandSouthampton;
