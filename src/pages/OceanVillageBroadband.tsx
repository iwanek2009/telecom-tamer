import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building2, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';

const OceanVillageBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Waterfront Living Connectivity",
      content: "Specially designed broadband packages for Ocean Village apartments and businesses, with speeds up to 1Gbps available.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Marina-Ready Internet",
      content: "Reliable connections perfect for marine businesses and yacht owners in Ocean Village Marina.",
      linkText: "View business deals",
      linkHref: "#business-deals"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Ocean Village Southampton | Compare Best Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Ocean Village Southampton. Find ultra-fast fibre packages from top providers. Get reliable internet for waterfront living & apartments."
        />
      </Helmet>

      <CitystyleHero
        title="Ocean Village Broadband Deals"
        subtitle="Find the perfect broadband package for your Ocean Village home or business. Compare ultra-fast fibre deals tailored for waterfront living."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Ocean Village Southampton marina and apartments"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Ocean Village Broadband?"
          subtitle="Living in Ocean Village means enjoying a vibrant waterside lifestyle, and reliable internet is essential to stay connected. Here's why our broadband solutions stand out:"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="High-Speed Fibre Connectivity"
            description="Access superfast broadband with speeds up to 1Gbps, perfect for streaming, gaming, and remote work"
          />
          <CitystyleFeatureCard
            icon={Building2}
            title="Reliable and Stable Connection"
            description="Whether you live in an apartment or houseboat, our providers offer stable internet with minimal disruptions"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Flexible Plans for Every Need"
            description="From budget-friendly options to premium fibre plans, compare packages tailored for individuals, families, or professionals"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Understanding Your Ocean Village Connection Options</h2>
            <p className="text-gray-600 leading-relaxed">
              The unique coastal environment of Ocean Village presents specific considerations for internet connectivity. The development's modern infrastructure supports various connection types, but factors such as building materials, height, and proximity to the waterfront can influence service quality.
            </p>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Infrastructure and Coverage</h3>
                <p className="text-gray-600">Ocean Village benefits from extensive fibre coverage, with both partial and full fibre options available throughout most of the development. The area's purpose-built network infrastructure ensures stable connections even in challenging maritime conditions.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Provider Selection</h3>
                <p className="text-gray-600">Major providers like BT, Virgin Media, and Sky operate throughout Ocean Village, each offering specialized packages designed for the area's unique requirements. Local providers also deliver tailored solutions specifically optimized for marine environments and waterfront properties.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Marine Business Considerations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Weatherproof equipment designed for maritime conditions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Flexible contracts accommodating seasonal usage patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Enhanced coverage extending to moorings and marina facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Business-grade service level agreements
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Residential Solutions</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  High-rise apartments benefit from optimized mobile broadband reception
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Ground-level properties typically access superior cable connectivity
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Mixed-use buildings feature business-grade infrastructure availability
                </li>
              </ul>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Installation and Support</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Marine-grade cable protection</li>
                  <li>Weather-resistant equipment</li>
                  <li>Building-specific signal optimization</li>
                  <li>Regular maintenance accounting for coastal conditions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Future-Proofing Your Connection</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Upcoming infrastructure improvements</li>
                  <li>Expandability options</li>
                  <li>Technology compatibility</li>
                  <li>Long-term service agreements</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Making Your Choice</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Evaluate your property's specific location
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Consider your usage requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Account for environmental factors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Review provider expertise in marine environments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  Assess long-term value and support options
                </li>
              </ul>
            </div>

            <p className="text-gray-600 italic text-center">
              Remember that each building within Ocean Village presents unique connectivity characteristics, making individual assessment crucial for optimal service selection.
            </p>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default OceanVillageBroadband;