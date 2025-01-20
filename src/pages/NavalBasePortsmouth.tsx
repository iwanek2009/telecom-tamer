import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Ship, Clock, Shield, Phone, Laptop, Video, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';

const NavalBasePortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Service Personnel Deals",
      content: "Special packages designed for military personnel.",
      linkText: "View deals",
      linkHref: "#service-deals"
    },
    {
      title: "Flexible Contracts",
      content: "Short-term options available for service personnel.",
      linkText: "Learn more",
      linkHref: "#contracts"
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
        <title>Naval Base Portsmouth | Service Personnel Broadband Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals near Portsmouth Naval Base. Find flexible packages perfect for service personnel. Get reliable internet with short-term contract options."
        />
      </Helmet>

      <CitystyleHero
        title="Naval Base Portsmouth Broadband"
        subtitle="Find flexible broadband deals perfect for service personnel. Compare packages with short-term contracts and military discounts."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth Naval Base broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Broadband for Naval Base Portsmouth"
          subtitle="Reliable internet is essential for service personnel balancing work and personal life. Here's why our broadband solutions stand out for Naval Base Portsmouth:"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast and Dependable Connectivity"
            description="Enjoy high-speed internet designed for consistent performance, even during peak usage hours. Perfect for streaming, video calls, and gaming."
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Contracts"
            description="We understand the needs of service personnel. That's why we offer short-term and flexible contracts that adapt to your schedule and assignments."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Secure and Reliable"
            description="Our broadband packages come with built-in security features, ensuring safe online access for your personal and professional needs."
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

        <section className="py-16 bg-gradient-to-br from-[#F8FAFC] to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Internet Packages for Naval Base Portsmouth</h2>
            <p className="text-gray-600 mb-12">Our broadband options are designed to meet the unique requirements of Naval Base residents, offering speed, reliability, and flexibility:</p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Basic Connectivity Plan</h3>
                <p className="text-gray-600">Reliable and affordable, perfect for light usage such as browsing, emailing, and video calls.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">High-Speed Fibre Plan</h3>
                <p className="text-gray-600">Designed for heavy users, with fast download speeds for streaming, gaming, and multiple connected devices.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Complete Communication Bundle</h3>
                <p className="text-gray-600">Combine high-speed broadband with VoIP phone services for seamless communication at home or abroad.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Reliable Internet Matters for Service Personnel</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="flex flex-col items-start">
                <Video className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Stay Connected with Loved Ones</h3>
                <p className="text-gray-600">Enjoy uninterrupted video calls and messages with family and friends, wherever they are.</p>
              </div>
              <div className="flex flex-col items-start">
                <Laptop className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Unwind Off-Duty</h3>
                <p className="text-gray-600">Stream your favorite shows, play online games, or relax with music after a demanding day.</p>
              </div>
              <div className="flex flex-col items-start">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Access Online Training</h3>
                <p className="text-gray-600">Participate in remote learning, professional development, and mandatory training with a stable connection.</p>
              </div>
              <div className="flex flex-col items-start">
                <Home className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Support Smart Devices</h3>
                <p className="text-gray-600">Enable smart technology for security, convenience, and entertainment in your accommodation.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16 overflow-x-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compare Internet Packages for Naval Base Portsmouth</h2>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4">Package</th>
                    <th className="text-left py-4 px-4">Speed</th>
                    <th className="text-left py-4 px-4">Best For</th>
                    <th className="text-left py-4 px-4">Key Features</th>
                    <th className="text-left py-4 px-4">Monthly Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">Basic Plan</td>
                    <td className="py-4 px-4">Up to 36Mbps</td>
                    <td className="py-4 px-4">Light browsing and email</td>
                    <td className="py-4 px-4">Unlimited data, secure access</td>
                    <td className="py-4 px-4">From £22/month</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">Superfast Fibre</td>
                    <td className="py-4 px-4">Up to 67Mbps</td>
                    <td className="py-4 px-4">Streaming and online gaming</td>
                    <td className="py-4 px-4">High-speed fibre, low latency</td>
                    <td className="py-4 px-4">From £30/month</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium">Fibre Pro Plus</td>
                    <td className="py-4 px-4">Up to 150Mbps</td>
                    <td className="py-4 px-4">Heavy usage and multiple users</td>
                    <td className="py-4 px-4">Consistent speeds, no data caps</td>
                    <td className="py-4 px-4">From £45/month</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Ultimate Bundle</td>
                    <td className="py-4 px-4">Up to 300Mbps</td>
                    <td className="py-4 px-4">Premium connectivity needs</td>
                    <td className="py-4 px-4">Includes VoIP and priority support</td>
                    <td className="py-4 px-4">From £60/month</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-4">Prices are dynamic and subject to change. Please check our website for the latest offers.</p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Internet for Naval Base Portsmouth</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Flexible Options</h3>
                  <p className="text-gray-600">Contracts designed for both short-term stays and extended deployments.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Exclusive Discounts</h3>
                  <p className="text-gray-600">Special offers and rates for Armed Forces personnel.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Dedicated customer service to handle any connectivity issues.</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Fast Installation</h3>
                  <p className="text-gray-600">Get connected quickly, with minimal disruption to your routine.</p>
                </div>
              </div>
            </div>

            <p className="text-center text-lg text-gray-600 mt-12">
              Don't let connectivity issues disrupt your work or downtime. Explore our internet packages today and stay online effortlessly at Naval Base Portsmouth!
            </p>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default NavalBasePortsmouth;
