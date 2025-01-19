import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Shield, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const BTPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "BT Coverage",
      content: "Check BT broadband availability in your area of Portsmouth.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Package Options",
      content: "Compare BT broadband and phone packages.",
      linkText: "View packages",
      linkHref: "#packages"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT Portsmouth | Compare Home Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best BT broadband deals in Portsmouth. Compare reliable packages from the UK's largest network. Get fast internet for your home."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Portsmouth"
        subtitle="Compare reliable broadband packages from BT. Find the perfect internet deal for your Portsmouth home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose BT Broadband?"
          subtitle="BT Broadband stands out as a top choice for families and professionals in Portsmouth. With industry-leading speeds, unlimited data, and advanced security tools, BT offers everything you need for a worry-free online experience."
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Superfast Fibre Speeds"
            description="Enjoy fibre broadband with speeds up to 900Mbps. Perfect for streaming, gaming, and working from home without interruptions or buffering."
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Unlimited Data on Every Plan"
            description="Stream, browse, and download as much as you like. All BT packages include unlimited data with no hidden restrictions."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Built-In Security Features"
            description="Protect your devices and family with BT's advanced security tools, including Parental Controls and antivirus protection."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" filters='{"suppliers": [135]}' />
        </div>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Explore BT Broadband Packages in Portsmouth</h2>
            <p className="text-gray-600 mb-8">
              BT Broadband offers a variety of internet plans to suit every budget and lifestyle. From superfast fibre connections to affordable home bundles, BT has the perfect solution for Portsmouth households.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Essential Fibre Plans</h3>
                <p className="text-gray-600">Get reliable speeds for everyday use. Ideal for small households streaming, browsing, and emailing.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Superfast Fibre Deals</h3>
                <p className="text-gray-600">Upgrade to higher speeds for seamless 4K streaming and lag-free online gaming, even with multiple devices.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Complete Home Packages</h3>
                <p className="text-gray-600">Combine broadband with BT TV and phone plans for convenience and savings in one simple bill.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-6">Compare BT Broadband Packages</h2>
            <div className="overflow-x-auto mb-12">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Download Speed</TableHead>
                    <TableHead>Best For</TableHead>
                    <TableHead>Key Features</TableHead>
                    <TableHead>Monthly Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Essential Fibre</TableCell>
                    <TableCell>Up to 36Mbps</TableCell>
                    <TableCell>Small households, light use</TableCell>
                    <TableCell>Unlimited data, built-in security</TableCell>
                    <TableCell>From £26/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Superfast Fibre 1</TableCell>
                    <TableCell>Up to 50Mbps</TableCell>
                    <TableCell>Streaming, small families</TableCell>
                    <TableCell>Superfast speeds, no data caps</TableCell>
                    <TableCell>From £29/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Superfast Fibre 2</TableCell>
                    <TableCell>Up to 67Mbps</TableCell>
                    <TableCell>Larger households, gaming</TableCell>
                    <TableCell>Enhanced Wi-Fi, reliable speeds</TableCell>
                    <TableCell>From £32/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Full Fibre 100</TableCell>
                    <TableCell>Up to 100Mbps</TableCell>
                    <TableCell>4K streaming, remote work</TableCell>
                    <TableCell>Fibre-to-home connection</TableCell>
                    <TableCell>From £39/month</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Full Fibre 900</TableCell>
                    <TableCell>Up to 900Mbps</TableCell>
                    <TableCell>Ultra-high demand users</TableCell>
                    <TableCell>Lightning-fast downloads</TableCell>
                    <TableCell>From £55/month</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-bold mb-6">Benefits of BT Broadband in Portsmouth</h2>
              <p className="text-gray-600 mb-6">
                Switching to BT Broadband means enjoying top-quality service, local support, and exclusive features tailored to your needs:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
                <li>Flexible Contracts: Short-term and long-term options available.</li>
                <li>Priority Support: Fast and reliable customer service in Portsmouth.</li>
                <li>Exclusive Discounts: Regular promotions for new and existing customers.</li>
              </ul>
              <p className="text-gray-600 font-semibold">
                Don't miss out! Check the latest BT Broadband deals in Portsmouth today and upgrade your home internet experience.
              </p>
            </div>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTPortsmouth;