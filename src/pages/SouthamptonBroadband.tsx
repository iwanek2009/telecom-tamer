import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { CitySection } from '@/components/local/CitySection';
import SouthamptonCard from '@/components/local/SouthamptonCard';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ExternalLink } from 'lucide-react';

const cityData = [
  {
    city: "London",
    providers: ["Virgin Media", "BT", "Sky", "Hyperoptic"],
    averageSpeed: "108 Mbps",
    features: [
      "Full fibre coverage in most areas",
      "Multiple provider options",
      "Student-specific deals available"
    ],
    priceRange: "£20-£60 per month",
    installationTime: "1-2 weeks"
  },
  {
    city: "Manchester",
    providers: ["Virgin Media", "BT", "TalkTalk", "Hyperoptic"],
    averageSpeed: "94 Mbps",
    features: [
      "Growing full fibre network",
      "Competitive pricing",
      "Business district coverage"
    ],
    priceRange: "£18-£55 per month",
    installationTime: "1-2 weeks"
  },
  {
    city: "Birmingham",
    providers: ["Virgin Media", "BT", "Sky", "Vodafone"],
    averageSpeed: "86 Mbps",
    features: [
      "Expanding fibre network",
      "Good suburban coverage",
      "Business packages available"
    ],
    priceRange: "£20-£50 per month",
    installationTime: "1-2 weeks"
  }
];

const heroAccordionItems = [
  {
    title: "Why compare local broadband deals?",
    content: "Different providers offer varying speeds and packages depending on your location. Local comparison ensures you get the best deal available in your area.",
  },
  {
    title: "How to check availability?",
    content: "Enter your postcode to see which providers and packages are available at your address. We'll show you the best local deals and speeds.",
  },
  {
    title: "What affects local broadband availability?",
    content: "Infrastructure, distance from the exchange, and local competition all affect broadband availability and speeds in your area.",
  }
];

const SouthamptonBroadband = () => {
  return (
    <BStyleTemplate>
      <Helmet>
        <title>Southampton Broadband Deals | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Southampton. Compare local internet providers, speeds and prices across major UK cities. Get exclusive regional offers and packages."
        />
      </Helmet>

      <BStyleHero
        title="Local Broadband Deals in Major UK Cities"
        subtitle="Find and compare the best broadband deals available in your area"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="City broadband comparison"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <SouthamptonCard />
            {cityData.map((city, index) => (
              <CitySection key={index} {...city} />
            ))}
          </div>
        </div>
      </BStyleContent>

      {/* Stickee Widget */}
      <StickeeWidget widgetId="smartfony-91" />
      
      <BStyleContent>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              Why Compare Broadband Deals in Southampton?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Southampton is a vibrant city with a growing demand for fast and reliable internet. Whether you're streaming, gaming, working from home, or running a small business, having the right broadband package is essential. By comparing deals, you can find a plan that matches your needs and budget—without overpaying for unnecessary extras.
            </p>
          </div>
          <div className="absolute inset-0 bg-grid-gray-100 opacity-[0.2] mix-blend-multiply"></div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-12">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Compare Broadband Deals in Southampton
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Finding the right broadband deal is simple with our three-step process:
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600">1.</span>
                <p className="text-lg text-gray-700"><strong>Enter Your Postcode:</strong> Check which providers and packages are available in your area.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600">2.</span>
                <p className="text-lg text-gray-700"><strong>Compare Deals:</strong> Filter results by speed, price, contract length, and provider.</p>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600">3.</span>
                <p className="text-lg text-gray-700"><strong>Switch with Confidence:</strong> Complete your order online and enjoy a seamless transition to your new provider.</p>
              </div>
            </div>
            <Button size="lg" className="w-full md:w-auto">
              Start comparing broadband deals in Southampton today!
            </Button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Top Broadband Providers in Southampton
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Here are some of the leading providers offering great deals in Southampton:
            </p>
            <div className="overflow-hidden rounded-xl border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Provider</TableHead>
                    <TableHead>Speed</TableHead>
                    <TableHead>Monthly Cost</TableHead>
                    <TableHead>Contract Length</TableHead>
                    <TableHead>Perks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <a href="https://virginmedia.com" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        Virgin Media <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                    <TableCell>Up to 1Gb</TableCell>
                    <TableCell>From £28</TableCell>
                    <TableCell>18 months</TableCell>
                    <TableCell>Free setup, Wi-Fi booster</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <a href="https://bt.com" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        BT <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                    <TableCell>Up to 900Mb</TableCell>
                    <TableCell>From £30</TableCell>
                    <TableCell>24 months</TableCell>
                    <TableCell>£20 reward card, free router</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <a href="https://sky.com" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        Sky <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                    <TableCell>Up to 500Mb</TableCell>
                    <TableCell>From £25</TableCell>
                    <TableCell>18 months</TableCell>
                    <TableCell>Free Netflix for 12 months</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <a href="https://hyperoptic.com" className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                        Hyperoptic <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                    <TableCell>Up to 1Gb</TableCell>
                    <TableCell>From £35</TableCell>
                    <TableCell>12 months</TableCell>
                    <TableCell>No setup fee, 24/7 support</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </BStyleContent>
      
    </BStyleTemplate>
  );
};

export default SouthamptonBroadband;
