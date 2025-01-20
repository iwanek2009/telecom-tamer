import React from 'react';
import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, MapPin, Building2, Zap, Users, Router, Activity, Globe, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';

const PortsmouthBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Local Coverage",
      content: "Portsmouth has excellent broadband coverage with multiple providers offering fast and reliable connections.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Popular Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Portsmouth area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
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
        <title>Portsmouth Broadband | Compare Local Internet Deals</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Portsmouth. Compare local packages from leading providers. Get fast, reliable internet for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Broadband Deals in Portsmouth"
        subtitle="Find the perfect internet package for your Portsmouth home. Compare deals from leading providers to get reliable connectivity at the best value."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth city with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleFeatureGrid
        title="Why Choose Our Portsmouth Broadband Deals?"
        subtitle="Get the ideal internet package for your Portsmouth location"
      >
        <CitystyleFeatureCard
          icon={Wifi}
          title="Fast Speeds"
          description="Access high-speed internet with up to 1Gbps in eligible areas"
        />
        <CitystyleFeatureCard
          icon={Globe}
          title="Local Coverage"
          description="Extensive network coverage across all Portsmouth neighborhoods"
        />
        <CitystyleFeatureCard
          icon={Home}
          title="Home-Ready"
          description="Perfect for streaming, gaming, and working from home"
        />
      </CitystyleFeatureGrid>

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

        <div className="max-w-4xl mx-auto mt-16 space-y-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Great Internet in Portsmouth?</h2>
            <p className="text-gray-700 mb-6">
              Whether you're living near the Historic Dockyard or enjoying the sea views in Southsea, we'll help you find the perfect broadband package. Portsmouth's unique layout means different areas have different internet options - and we know them all!
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Compare Broadband in Portsmouth?</h3>
            <p className="text-gray-700 mb-8">
              Every part of Portsmouth has its own internet needs. Families in Milton need reliable connections for multiple devices, students around Guildhall need fast speeds for studying, and businesses in Gunwharf Quays need rock-solid connections for their customers. That's why comparing your options is so important.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Here's What Makes Portsmouth's Internet Special:</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900">Speed That Matches Your Location</h4>
                </div>
                <p className="text-gray-700">
                  From the waterfront apartments to the suburban streets, we'll match you with providers that actually serve your area.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900">Deals That Fit Your Life</h4>
                </div>
                <p className="text-gray-700">
                  Whether you're a student, family, or business owner, we'll help you find a package that works for you.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900">Future-Ready Connections</h4>
                </div>
                <p className="text-gray-700">
                  Get broadband that keeps up with Portsmouth's growing digital needs, from streaming to smart home tech.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Can You Get in Portsmouth?</h3>
            <p className="text-gray-700 mb-4">The city's got some great options:</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Router className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700"><strong>Standard Broadband</strong> - Perfect for basic browsing</span>
              </li>
              <li className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700"><strong>Fibre Broadband</strong> - Great for streaming and working from home</span>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700"><strong>Full Fibre</strong> - Ultra-fast speeds for serious tech users</span>
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-500" />
                <span className="text-gray-700"><strong>Custom Packages</strong> - Special deals for students and businesses</span>
              </li>
            </ul>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortsmouthBroadband;
