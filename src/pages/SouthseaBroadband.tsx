import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, House, CheckCircle2, Laptop, Home, Building2, GraduationCap, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';

const SouthseaBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Find providers available in your part of Southsea.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Packages",
      content: "Compare the most popular broadband deals in Southsea.",
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
        <title>Southsea Broadband | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Southsea. Find local internet packages from top providers. Get reliable speeds perfect for home and business use."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Southsea"
        subtitle="Find the perfect internet package for your Southsea home or business. Compare local deals from leading providers."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southsea broadband connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Find Your Perfect Broadband Deal in Southsea"
          subtitle="Compare local internet packages and get connected today"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Seaside-Ready Speeds"
            description="Whether you're working from your seafront flat or streaming in your Palmerston Road home, get reliable speeds that keep you connected in Southsea."
          />
          <CitystyleFeatureCard
            icon={Signal}
            title="Perfect For Local Living"
            description="From Albert Road creatives to families near Canoe Lake, choose packages that match your Southsea lifestyle and budget."
          />
          <CitystyleFeatureCard
            icon={House}
            title="Local Coverage You Can Trust"
            description="Get broadband that understands Southsea's unique needs - from student houses near the University to Victorian homes in the avenues."
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

        <div className="mt-16 space-y-16">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Southsea Broadband?</h2>
            <p className="text-lg text-gray-600">
              Living in Southsea means you want internet that keeps up with coastal life. Whether you're running a business on Albert Road, studying near the Common, or enjoying life by the sea, having the right connection makes all the difference.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">What's Available in Southsea?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Seafront Areas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Fast fibre connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Perfect for holiday lets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Reliable for home working</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Central Southsea</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Ultra-fast options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Great for busy households</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Student-friendly packages</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">The Avenues</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Stable connections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Family packages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Flexible contracts</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Perfect For:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Building2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Local Businesses</h3>
                <ul className="space-y-2">
                  <li>Reliable speeds for card payments</li>
                  <li>Guest Wi-Fi options</li>
                  <li>Priority support</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <GraduationCap className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Students</h3>
                <ul className="space-y-2">
                  <li>Flexible contracts</li>
                  <li>Fast download speeds</li>
                  <li>Perfect for shared houses</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Residents</h3>
                <ul className="space-y-2">
                  <li>Family-friendly packages</li>
                  <li>Entertainment bundles</li>
                  <li>Smart home ready</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Finding Your Perfect Match:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Location Check</h3>
                <p>Every street in Southsea is different - check what's available at your address</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Usage Needs</h3>
                <p>Tell us how you use the internet - streaming, gaming, working?</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Deal</h3>
                <p>Pick from our verified local packages</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Speed Guide for Southsea:</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Light Use</h3>
                <ul className="space-y-2">
                  <li>Email and browsing</li>
                  <li>Social media</li>
                  <li>Video calls</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Family Use</h3>
                <ul className="space-y-2">
                  <li>Multiple devices</li>
                  <li>HD streaming</li>
                  <li>Online gaming</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Power Use</h3>
                <ul className="space-y-2">
                  <li>4K streaming</li>
                  <li>Large downloads</li>
                  <li>Smart home tech</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Working from Southsea?</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Get connected with:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Stable video calls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Fast file sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Reliable uploads</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Entertainment at Home:</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Stream seaside sunsets on social media</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Game online with friends</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Watch your favorite shows in HD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Stay connected with family</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Get Connected in Southsea?</h2>
            <p className="text-lg text-gray-600">
              Pop your postcode in below and we'll show you all the available deals in your area - from Albert Road to the seafront.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500 italic mb-6">
                Local Tip: Different parts of Southsea have different broadband availability. Check your specific address to see the best options for you.
              </p>
              <h3 className="text-xl font-semibold text-center mb-4">
                Ready for better broadband in Southsea? Enter your postcode now to find your perfect package!
              </h3>
            </div>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SouthseaBroadband;
