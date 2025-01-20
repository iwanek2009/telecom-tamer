import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, House, MapPin, Building2, Shield, Laptop, Tv, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const OldPortsmouthBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Check which providers serve your area of Old Portsmouth.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Best Deals",
      content: "Compare the latest broadband offers in Old Portsmouth.",
      linkText: "View deals",
      linkHref: "#deals"
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
        <title>Old Portsmouth Internet | Compare Broadband Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Old Portsmouth. Compare packages from leading providers. Get fast, reliable internet for streaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Perfect broadband package in Old Portsmouth's"
        subtitle="Find the perfect broadband package in Old Portsmouth's unique setting"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Old Portsmouth internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
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

        {/* Why Choose Old Portsmouth Broadband Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Old Portsmouth Broadband?</h2>
            <p className="text-lg text-gray-600">
              Living in Old Portsmouth means having internet that matches the area's unique character. Whether you're running a business near the Hot Walls, working from your harbour-view apartment, or streaming in your historic home, we'll help you find the right connection.
            </p>
          </div>
        </section>

        {/* Location Availability Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">What's Available in Old Portsmouth?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Spice Island & Camber</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Fast business connections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Tourist area coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Waterfront reliability
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Building2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">High Street & Cathedral Area</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Period property solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Stable home broadband
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Listed building expertise
                  </li>
                </ul>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">The Point & Battery Area</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Coastal-ready connections
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Residential packages
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Weather-resistant service
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Laptop className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Businesses</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Reliable card payments</li>
                <li>Tourist Wi-Fi solutions</li>
                <li>Support when you need it</li>
              </ul>
            </Card>

            <Card className="p-6">
              <House className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Residents</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Home entertainment</li>
                <li>Remote working</li>
                <li>Smart home ready</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Building2 className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Heritage Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Careful installation</li>
                <li>Building-friendly setup</li>
                <li>Minimal visual impact</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Finding Your Ideal Package</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location Check</h3>
                  <p className="text-gray-600">Every street in Old Portsmouth has different options - from Grand Parade to Broad Street</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Check Your Usage</h3>
                  <p className="text-gray-600">Tell us how you use the internet - streaming, working, or both?</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Choose Your Deal</h3>
                  <p className="text-gray-600">Select from our verified local packages</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speed Guide Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Available Speeds</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Wifi className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Standard Broadband</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Basic browsing</li>
                <li>Email and social media</li>
                <li>Video calls</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Signal className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Fibre Options</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Fast streaming</li>
                <li>Multiple devices</li>
                <li>Work from home</li>
              </ul>
            </Card>

            <Card className="p-6">
              <Laptop className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ultra-Fast</h3>
              <ul className="space-y-2 text-gray-600">
                <li>4K streaming</li>
                <li>Large downloads</li>
                <li>Business use</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Working & Entertainment Section */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Working in Old Portsmouth?</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-3">Perfect for:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Home offices with a view
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Local business needs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Tourist sector connectivity
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Entertainment Ready</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-secondary" />
                  Stream sunset views
                </li>
                <li className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-secondary" />
                  Share historic moments
                </li>
                <li className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-secondary" />
                  Stay connected with family
                </li>
                <li className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-secondary" />
                  Enjoy buffer-free content
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Connected?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Enter your postcode below to see which providers serve your part of Old Portsmouth - from the Round Tower to Gunwharf Gate.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-8">
              <p className="text-sm font-medium text-gray-700">
                <span className="font-bold">Local Knowledge:</span> Different parts of Old Portsmouth have varying broadband availability. Check your exact location for the best options.
              </p>
            </div>
            <div className="bg-primary text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready for better broadband in Old Portsmouth?</h3>
              <p className="mb-6">Check your postcode now to find the perfect package for your historic home or business!</p>
            </div>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default OldPortsmouthBroadband;
