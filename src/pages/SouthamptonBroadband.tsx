import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Wifi, PoundSterling, Package } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SouthamptonBroadband = () => {
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
    <BStyleTemplate>
      <Helmet>
        <title>Southampton Broadband Deals | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Southampton. Find exclusive offers from Virgin Media, BT, Sky and local providers. Student deals and ultrafast packages available."
        />
      </Helmet>

      <BStyleHero
        title="Southampton Broadband Deals"
        subtitle="Find the best broadband deals in Southampton. Compare speeds, prices, and packages from top providers to get the perfect internet connection"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <div className="max-w-4xl mx-auto space-y-12">
          <BStyleFeatureGrid
            title="3 Key Reasons to Compare Broadband in Southampton"
            subtitle="By comparing deals, you can find a plan that matches your needs and budget—without overpaying for unnecessary extras."
          >
            <BStyleFeatureCard
              icon={Wifi}
              title="Find the Best Speeds"
              description="From standard broadband to ultrafast fibre, compare speeds to ensure your connection keeps up with your lifestyle."
            />
            <BStyleFeatureCard
              icon={PoundSterling}
              title="Save Money"
              description="Discover affordable deals from top providers and avoid paying for services you don't need."
            />
            <BStyleFeatureCard
              icon={Package}
              title="Tailored Packages"
              description="Choose a package that fits your household's needs, whether you're a light user or a heavy streamer."
            />
          </BStyleFeatureGrid>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Compare Broadband Deals in Southampton</h2>
              <p className="text-lg text-gray-700 mb-6">Finding the right broadband deal is simple with our three-step process:</p>
              <ol className="space-y-4 mb-8">
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">1.</span>
                  <span className="text-gray-700">Enter Your Postcode: Check which providers and packages are available in your area.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">2.</span>
                  <span className="text-gray-700">Compare Deals: Filter results by speed, price, contract length, and provider.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-blue-600">3.</span>
                  <span className="text-gray-700">Switch with Confidence: Complete your order online and enjoy a seamless transition to your new provider.</span>
                </li>
              </ol>
              <Button className="w-full sm:w-auto" size="lg">
                Start comparing broadband deals in Southampton today!
              </Button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Broadband Providers in Southampton</h2>
              <p className="text-lg text-gray-700 mb-6">Here are some of the leading providers offering great deals in Southampton:</p>
              
              <div className="overflow-x-auto">
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
                      <TableCell className="font-medium">Virgin Media</TableCell>
                      <TableCell>Up to 1Gb</TableCell>
                      <TableCell>From £28</TableCell>
                      <TableCell>18 months</TableCell>
                      <TableCell>Free setup, Wi-Fi booster</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">BT</TableCell>
                      <TableCell>Up to 900Mb</TableCell>
                      <TableCell>From £30</TableCell>
                      <TableCell>24 months</TableCell>
                      <TableCell>£20 reward card, free router</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Sky</TableCell>
                      <TableCell>Up to 500Mb</TableCell>
                      <TableCell>From £25</TableCell>
                      <TableCell>18 months</TableCell>
                      <TableCell>Free Netflix for 12 months</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hyperoptic</TableCell>
                      <TableCell>Up to 1Gb</TableCell>
                      <TableCell>From £35</TableCell>
                      <TableCell>12 months</TableCell>
                      <TableCell>No setup fee, 24/7 support</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                External Links:{" "}
                <a href="https://www.virginmedia.com" className="text-blue-600 hover:underline">Virgin Media</a>,{" "}
                <a href="https://www.bt.com" className="text-blue-600 hover:underline">BT</a>,{" "}
                <a href="https://www.sky.com" className="text-blue-600 hover:underline">Sky</a>,{" "}
                <a href="https://www.hyperoptic.com" className="text-blue-600 hover:underline">Hyperoptic</a>
              </div>
            </div>
          </div>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default SouthamptonBroadband;