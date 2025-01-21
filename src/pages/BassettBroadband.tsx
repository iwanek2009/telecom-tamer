import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BassettBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Check broadband availability in your part of Bassett.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Top Providers",
      content: "Compare deals from major providers serving Bassett.",
      linkText: "View providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Bassett Broadband Deals | Local Southampton Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Bassett, Southampton. Find local internet packages with reliable speeds from top providers. Perfect for streaming, gaming and home working."
        />
      </Helmet>

      <CitystyleHero
        title="Bassett Broadband Deals"
        subtitle="Find the perfect internet package for your Bassett home"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Broadband services in Bassett, Southampton"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Key Benefits of Broadband in Bassett"
          subtitle="This guide simplifies the process, helping you secure a reliable and budget-friendly internet package"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Speeds"
            description="Enjoy seamless downloads with speeds up to 1Gbps, perfect for streaming HD content and gaming without interruptions"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Connections"
            description="Stay connected with consistent service, even during peak times, ensuring your work or entertainment isn't disrupted"
          />
          <CitystyleFeatureCard
            icon={Users}
            title="Affordable Packages"
            description="Choose from a variety of plans designed to fit any budget, from simple broadband-only deals to comprehensive bundles"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <div className="mt-16 space-y-12">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">How to Compare Broadband Deals in Bassett</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Step 1: Check Available Providers</h3>
                <p className="mb-4">Use an online postcode checker to see which providers serve your area. Popular providers in Southampton include:</p>
                <ul className="list-disc pl-6">
                  <li>BT</li>
                  <li>Virgin Media</li>
                  <li>Sky</li>
                  <li>Plusnet</li>
                  <li>Vodafone</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Step 2: Consider Your Needs</h3>
                <p className="mb-4">Identify what matters most to you:</p>
                <ul className="list-disc pl-6">
                  <li><strong>Speed:</strong> For gaming and streaming, aim for speeds above 100Mbps.</li>
                  <li><strong>Price:</strong> Compare offers and consider any bundled deals for added value.</li>
                  <li><strong>Extras:</strong> Some plans include TV channels, free routers, or discounted mobile plans.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Step 3: Read Reviews</h3>
                <p>Look for customer feedback on reliability and customer service. Some providers, like Virgin Media, excel in speed, while others, like Plusnet, are praised for affordability and customer support.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Factors to Consider When Choosing Broadband in Bassett</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">1. Your Budget</h3>
                <p>Are you looking for a basic plan or willing to invest in a premium package? Deals start from as little as £20 per month for standard speeds.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">2. Connection Type</h3>
                <p className="mb-4">Bassett residents typically have access to:</p>
                <ul className="list-disc pl-6">
                  <li><strong>Part-Fibre Broadband:</strong> Speeds up to 70Mbps, suitable for most households.</li>
                  <li><strong>Full Fibre Broadband:</strong> Up to 1Gbps for ultra-fast connections.</li>
                  <li><strong>Mobile Broadband:</strong> A flexible option using 4G/5G technology.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">3. Usage Needs</h3>
                <p>Households with multiple users should opt for plans with at least 50Mbps. Larger families or those with heavy internet use may require speeds of 100Mbps or more.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">4. Contract Length</h3>
                <p>Many providers offer 12- or 18-month contracts. If you need flexibility, no-contract plans might be a better fit.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">5. Bundled Services</h3>
                <p>Bundling broadband with TV or mobile can save money. For instance, Virgin Media's Volt packages combine broadband, TV, and mobile in one plan.</p>
              </div>
            </div>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BassettBroadband;