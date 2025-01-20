import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, Home, MapPin, Users, Laptop, Network } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';

const PortsmouthCityCentreBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Urban Coverage",
      content: "Extensive coverage across the city centre.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Business & Home",
      content: "Solutions for both work and living.",
      linkText: "View packages",
      linkHref: "#packages"
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
        <title>Portsmouth City Centre Broadband | Compare Urban Internet Deals</title>
        <meta 
          name="description" 
          content="Compare broadband deals in Portsmouth City Centre. Find ultra-fast urban packages from top providers. Perfect for city living, working & entertainment."
        />
      </Helmet>

      <CitystyleHero
        title="Lightning-Fast City Centre Broadband"
        subtitle="Get connected in Portsmouth's bustling heart with ultra-fast internet"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth City Centre broadband services"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our City Centre Packages?"
          subtitle="Get connected with high-speed urban broadband"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="City Centre Speeds"
            description="Experience ultra-fast broadband perfect for urban living. Whether you're above Commercial Road shops or in a Guildhall Walk apartment, get the speed you need."
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Urban Living Ready"
            description="Designed for city centre life - perfect for streaming, working, and staying connected in Portsmouth's vibrant hub."
          />
          <CitystyleFeatureCard
            icon={Home}
            title="Business & Home Solutions"
            description="From Commercial Road shops to city centre apartments, get packages that work for your urban lifestyle."
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

        {/* Why Choose Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-sm p-8 space-y-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Portsmouth City Centre Broadband?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Being in Portsmouth's heart means you need internet that keeps pace with city life. Whether you're running a shop in Commercial Road, studying near Park Building, or living in one of the modern city apartments, having the right connection is essential.
            </p>
          </div>
        </div>

        {/* Available Services Grid */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Areas</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Ultra-fast business connections</li>
              <li>Reliable point-of-sale systems</li>
              <li>Public Wi-Fi solutions</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Residential Zones</h3>
            <ul className="space-y-2 text-gray-600">
              <li>High-speed home broadband</li>
              <li>Entertainment bundles</li>
              <li>Smart apartment ready</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Student Areas</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Flexible contracts</li>
              <li>Fast download speeds</li>
              <li>Shared accommodation deals</li>
            </ul>
          </div>
        </div>

        {/* Target Audience Section */}
        <div className="mt-12 space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">City Centre Businesses</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Reliable shop connections</li>
                <li>Customer Wi-Fi</li>
                <li>CCTV support</li>
                <li>Card payment stability</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Urban Residents</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Fast home working</li>
                <li>4K streaming</li>
                <li>Smart home ready</li>
                <li>Multiple devices</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Students</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Quick downloads</li>
                <li>Video streaming</li>
                <li>Online gaming</li>
                <li>Group projects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mt-12 bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Finding Your City Connection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Street Check</h3>
              <p className="text-gray-600">Every city centre location has different options - from Arundel Street to Winston Churchill Avenue</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Usage Profile</h3>
              <p className="text-gray-600">Tell us if it's for business, home, or student use</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Pick Your Package</h3>
              <p className="text-gray-600">Choose from our verified city centre deals</p>
            </div>
          </div>
        </div>

        {/* Speed Guide Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Speed Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Basic Urban Use</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Social media</li>
                <li>Email</li>
                <li>Video calls</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">City Living</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Multiple devices</li>
                <li>HD streaming</li>
                <li>Online gaming</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Business Class</h3>
              <ul className="space-y-2 text-gray-600">
                <li>EPOS systems</li>
                <li>Security cameras</li>
                <li>Staff & customer Wi-Fi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Urban Connected?</h2>
          <p className="text-gray-600 mb-8">Pop your postcode in below and we'll show you all available city centre deals - from Commercial Road to Guildhall Walk.</p>
          <p className="text-sm text-gray-500 mt-4">City Tip: Different parts of Portsmouth city centre have different broadband availability. Check your specific address for the best options.</p>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthCityCentreBroadband;
