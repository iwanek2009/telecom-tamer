import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, Globe, Shield, Laptop, Home, Lock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const HistoricDockyardBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Find providers serving the Historic Dockyard area.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business Solutions",
      content: "Dedicated packages for businesses in the area.",
      linkText: "View business deals",
      linkHref: "#business-deals"
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

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portsmouth Historic Dockyard | Compare Internet Services</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Portsmouth's Historic Dockyard area. Find reliable packages for homes and businesses. Get fast internet in this unique location."
        />
      </Helmet>

      <CitystyleHero
        title="Historic Dockyard Broadband Deals"
        subtitle="Find the perfect broadband package for your home or business in Portsmouth's Historic Dockyard area."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth Historic Dockyard broadband services"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Broadband for the Historic Dockyard Area?"
          subtitle="Living or working in Portsmouth's Historic Dockyard comes with a unique set of connectivity needs. Here's why our broadband is the perfect solution for this area:"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast and Reliable Internet"
            description="Enjoy consistent speeds, even during peak times. Perfect for businesses, tourism hotspots, and households that demand reliable connectivity."
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Maritime-Friendly Coverage"
            description="Our broadband solutions are optimized for the Historic Dockyard, ensuring strong signal strength and uninterrupted service throughout the area."
          />
          <CitystyleFeatureCard
            icon={Globe}
            title="Customizable Plans"
            description="Whether you need high-speed fibre for heavy usage or basic broadband for lighter needs, our packages are designed to fit your requirements."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
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

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Why Broadband Matters in the Historic Dockyard</h2>
          <p className="text-gray-600 mb-6">Portsmouth's Historic Dockyard is a hub of activity, from historical attractions and local businesses to waterfront homes. Reliable internet is essential for:</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <CitystyleFeatureCard
              icon={Building}
              title="Tourism Management"
              description="Keep your operations running smoothly with fast connectivity for online bookings, ticketing, and guest Wi-Fi."
            />
            <CitystyleFeatureCard
              icon={Laptop}
              title="Remote Work"
              description="Enjoy seamless video calls and file sharing from your maritime-view home."
            />
            <CitystyleFeatureCard
              icon={Home}
              title="Smart Technology"
              description="Enable smart home or business devices for increased security and convenience."
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Compare Historic Dockyard Broadband Packages</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Package</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Key Features</TableHead>
                  <TableHead>Monthly Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Essential Broadband</TableCell>
                  <TableCell>Up to 36Mbps</TableCell>
                  <TableCell>Light browsing and email</TableCell>
                  <TableCell>Unlimited data, basic coverage</TableCell>
                  <TableCell>From £24/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Superfast Fibre</TableCell>
                  <TableCell>Up to 67Mbps</TableCell>
                  <TableCell>Streaming and multiple users</TableCell>
                  <TableCell>Enhanced speed, no caps</TableCell>
                  <TableCell>From £32/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maritime Fibre Pro</TableCell>
                  <TableCell>Up to 150Mbps</TableCell>
                  <TableCell>Businesses and heavy usage</TableCell>
                  <TableCell>High-speed fibre, secure connection</TableCell>
                  <TableCell>From £49/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ultimate Dockyard</TableCell>
                  <TableCell>Up to 300Mbps</TableCell>
                  <TableCell>Premium connectivity needs</TableCell>
                  <TableCell>Priority support, VoIP options</TableCell>
                  <TableCell>From £65/month</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">Prices are dynamic and subject to change. Please visit our website for the latest offers.</p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Benefits of Our Broadband in the Historic Dockyard</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CitystyleFeatureCard
              icon={Building}
              title="Local Expertise"
              description="Service designed for the unique challenges of Portsmouth's maritime zones."
            />
            <CitystyleFeatureCard
              icon={Shield}
              title="24/7 Support"
              description="Dedicated customer service to ensure uninterrupted connectivity."
            />
            <CitystyleFeatureCard
              icon={Globe}
              title="Eco-Friendly Options"
              description="Energy-efficient routers and reduced environmental impact."
            />
            <CitystyleFeatureCard
              icon={Lock}
              title="Flexible Plans"
              description="Short-term and long-term contracts available to meet varied needs."
            />
          </div>
        </div>

        <div className="text-center mt-12 mb-8">
          <p className="text-lg font-semibold text-gray-800">
            Don't let connectivity issues slow you down in the Historic Dockyard. Explore our broadband packages today and stay connected in this iconic maritime hub!
          </p>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default HistoricDockyardBroadband;
