import React from 'react';
import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Gamepad } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

  const heroAccordionItems = [
    {
      title: "BT Broadband Coverage",
      content: "Check BT broadband availability in your Portsmouth postcode.",
      linkText: "Check coverage",
      linkHref: "#coverage"
    },
    {
      title: "BT Packages",
      content: "Compare TV, broadband and phone packages from BT.",
      linkText: "View bundles",
      linkHref: "#bundles"
    }
  ];

  const compareLinks = [
    {
      title: "Residential Areas",
      links: [
        { text: "Portsmouth City | Local Deals", href: "/portsmouth" },
        { text: "Southsea | Home Internet", href: "/portsmouth/southsea" },
        { text: "Old Portsmouth | Historic Area", href: "/portsmouth/old-portsmouth" }
      ]
    },
    {
      title: "Key Locations",
      links: [
        { text: "Student Zone | University Area", href: "/portsmouth/student" },
        { text: "Naval Base | Service Personnel", href: "/portsmouth/naval-base" },
        { text: "Gunwharf | Shopping District", href: "/portsmouth/gunwharf-quays" }
      ]
    },
    {
      title: "Major Providers",
      links: [
        { text: "Virgin Media Portsmouth", href: "/portsmouth/virgin-media" },
        { text: "BT Local Packages", href: "/portsmouth/bt" },
        { text: "Sky TV & Internet Bundles", href: "/portsmouth/sky" }
      ]
    },
    {
      title: "City Areas",
      links: [
        { text: "City Centre | Urban Zone", href: "/portsmouth/city-centre" },
        { text: "Historic Dockyard | Maritime", href: "/portsmouth/historic-dockyard" },
        { text: "Coastal Areas | Seaside", href: "/portsmouth/coastal" }
      ]
    },
    {
      title: "Service Types",
      links: [
        { text: "Fibre Broadband | Fast Internet", href: "/portsmouth/fibre-broadband" },
        { text: "Home Bundles | TV & Phone", href: "/portsmouth/home-broadband" },
        { text: "Business Solutions | Commercial", href: "/portsmouth/business" }
      ]
    }
  ];

const BTPortsmouth = () => {
  return (
    <CitystyleTemplate>
      <Helmet>
        <title>BT Broadband Portsmouth | Compare Local Internet Deals</title>
        <meta 
          name="description" 
          content="Find the best BT broadband deals in Portsmouth. Compare local packages from BT. Get fast, reliable internet for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="BT Broadband Deals in Portsmouth"
        subtitle="Find the perfect BT internet package for your Portsmouth home. Compare deals to get reliable connectivity at the best value."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="BT broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleFeatureGrid
        title="Why Choose BT Broadband?"
        subtitle="Get the ideal internet package for your Portsmouth location"
      >
        <CitystyleFeatureCard
          icon={Wifi}
          title="Fast Speeds"
          description="Access high-speed internet with up to 900Mbps in eligible areas"
        />
        <CitystyleFeatureCard
          icon={Tv}
          title="TV Bundles"
          description="Combine your broadband with BT TV for entertainment"
        />
        <CitystyleFeatureCard
          icon={Gamepad}
          title="Gaming Ready"
          description="Low latency connections perfect for online gaming"
        />
      </CitystyleFeatureGrid>

      <CitystyleContent>
        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" filters='{"suppliers": [133]}' />
        </div>

        {/* New Compare Section */}
        <section className="mt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Broadband in Portsmouth</h2>
            <p className="text-xl text-gray-600">Browse local broadband deals and packages across Portsmouth's key districts.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {compareLinks.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-[#3FC1C9]/20"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.href}
                        className="text-gray-600 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore the Best Deals in Portsmouth</h2>
            <p className="text-xl text-gray-600">
              Find the perfect BT broadband package for your home or business in Portsmouth.
            </p>
          </section>

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
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BTPortsmouth;
