import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Wifi, PoundSterling, Package } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '../components/StickeeWidget';
import { Card, CardContent } from '@/components/ui/card';
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

  const scrollToWidget = () => {
    const widgetElement = document.getElementById('broadband-widget');
    if (widgetElement) {
      widgetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const providers = [
    {
      name: "Virgin Media",
      speed: "Up to 1Gb",
      cost: "From £28",
      contract: "18 months",
      perks: "Free setup, Wi-Fi booster",
      link: "https://www.virginmedia.com"
    },
    {
      name: "BT",
      speed: "Up to 900Mb",
      cost: "From £30",
      contract: "24 months",
      perks: "£20 reward card, free router",
      link: "https://www.bt.com"
    },
    {
      name: "Sky",
      speed: "Up to 500Mb",
      cost: "From £25",
      contract: "18 months",
      perks: "Free Netflix for 12 months",
      link: "https://www.sky.com"
    },
    {
      name: "Hyperoptic",
      speed: "Up to 1Gb",
      cost: "From £35",
      contract: "12 months",
      perks: "No setup fee, 24/7 support",
      link: "https://www.hyperoptic.com"
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
        </div>

        {/* Stickee Widget */}
        <div id="broadband-widget">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
        
        {/* Why Compare Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Compare Broadband Deals in Southampton?
              </h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Southampton is a vibrant city with a growing demand for fast and reliable internet. 
                Whether you're streaming, gaming, working from home, or running a small business, 
                having the right broadband package is essential. By comparing deals, you can find 
                a plan that matches your needs and budget—without overpaying for unnecessary extras.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Compare Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How to Compare Broadband Deals in Southampton
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Finding the right broadband deal is simple with our three-step process:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">1.</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Enter Your Postcode</p>
                    <p className="text-gray-700">Check which providers and packages are available in your area.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">2.</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Compare Deals</p>
                    <p className="text-gray-700">Filter results by speed, price, contract length, and provider.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl font-bold text-primary">3.</span>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">Switch with Confidence</p>
                    <p className="text-gray-700">Complete your order online and enjoy a seamless transition to your new provider.</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="text-lg" onClick={scrollToWidget}>
                  Start comparing broadband deals in Southampton today!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Top Providers Section */}
        <div className="max-w-4xl mx-auto mt-16 mb-16">
          <Card className="bg-gradient-to-br from-white to-gray-50 border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Top Broadband Providers in Southampton
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Here are some of the leading providers offering great deals in Southampton:
              </p>
              
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
                    {providers.map((provider) => (
                      <TableRow key={provider.name}>
                        <TableCell className="font-medium">
                          <a 
                            href={provider.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {provider.name}
                          </a>
                        </TableCell>
                        <TableCell>{provider.speed}</TableCell>
                        <TableCell>{provider.cost}</TableCell>
                        <TableCell>{provider.contract}</TableCell>
                        <TableCell>{provider.perks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                External Links:{' '}
                {providers.map((provider, index) => (
                  <span key={provider.name}>
                    <a
                      href={provider.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {provider.name}
                    </a>
                    {index < providers.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default SouthamptonBroadband;
