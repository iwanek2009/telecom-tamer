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

        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900">Understanding Your Ocean Village Connection Options</h2>
          <p className="text-gray-600 leading-relaxed">
            The unique coastal environment of Ocean Village presents specific considerations for internet connectivity. The development's modern infrastructure supports various connection types, but factors such as building materials, height, and proximity to the waterfront can influence service quality.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Infrastructure and Coverage</h3>
              <p className="text-gray-600">Ocean Village benefits from extensive fibre coverage, with both partial and full fibre options available throughout most of the development. The area's purpose-built network infrastructure ensures stable connections even in challenging maritime conditions.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Provider Selection</h3>
              <p className="text-gray-600">Major providers like BT, Virgin Media, and Sky operate throughout Ocean Village, each offering specialized packages designed for the area's unique requirements. Local providers also deliver tailored solutions specifically optimized for marine environments and waterfront properties.</p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Marine Business Considerations</h3>
              <p className="text-gray-600 mb-2">For marine businesses, specialized internet solutions include:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Weatherproof equipment designed for maritime conditions</li>
                <li>Flexible contracts accommodating seasonal usage patterns</li>
                <li>Enhanced coverage extending to moorings and marina facilities</li>
                <li>Business-grade service level agreements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Residential Solutions</h3>
              <p className="text-gray-600 mb-2">Residential users can choose from various packages based on their location within Ocean Village:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>High-rise apartments benefit from optimized mobile broadband reception</li>
                <li>Ground-level properties typically access superior cable connectivity</li>
                <li>Mixed-use buildings feature business-grade infrastructure availability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Installation and Support</h3>
              <p className="text-gray-600 mb-2">Given Ocean Village's unique environment, providers offer specialized installation services considering:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Marine-grade cable protection</li>
                <li>Weather-resistant equipment</li>
                <li>Building-specific signal optimization</li>
                <li>Regular maintenance accounting for coastal conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Future-Proofing Your Connection</h3>
              <p className="text-gray-600 mb-2">Ocean Village's continuous development means internet infrastructure regularly evolves. When selecting a provider, consider:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Upcoming infrastructure improvements</li>
                <li>Expandability options</li>
                <li>Technology compatibility</li>
                <li>Long-term service agreements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Making Your Choice</h3>
              <p className="text-gray-600 mb-2">To select the optimal service:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Evaluate your property's specific location</li>
                <li>Consider your usage requirements</li>
                <li>Account for environmental factors</li>
                <li>Review provider expertise in marine environments</li>
                <li>Assess long-term value and support options</li>
              </ul>
            </div>

            <p className="text-gray-600 italic mt-4">
              Remember that each building within Ocean Village presents unique connectivity characteristics, making individual assessment crucial for optimal service selection.
            </p>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default OceanVillageBroadband;