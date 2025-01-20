import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Gamepad } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Link } from 'react-router-dom';

const VirginMediaPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Cable Coverage",
      content: "Check Virgin Media cable availability in your area of Portsmouth.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Bundle Deals",
      content: "Compare TV, broadband and phone packages from Virgin Media.",
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

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Virgin Media Portsmouth | Compare Cable Internet Deals</title>
        <meta 
          name="description" 
          content="Compare Virgin Media broadband deals in Portsmouth. Find ultra-fast cable packages for your area. Get reliable speeds for streaming, gaming & working."
        />
      </Helmet>

      <CitystyleHero
        title="Virgin Media Portsmouth Deals"
        subtitle="Compare ultra-fast cable broadband packages from Virgin Media. Find the perfect bundle for your Portsmouth home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Virgin Media broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Virgin Media?"
          subtitle="Virgin Media offers in Portsmouth! Whether you need ultra-fast broadband, entertainment-packed TV bundles, or affordable mobile plans"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Superfast Fibre Broadband"
            description="Experience speeds of up to 1Gbps, perfect for streaming, gaming, and working from home. Virgin Media offers unlimited data, ensuring reliable and fast internet without interruptions."
          />
          <CitystyleFeatureCard
            icon={Tv}
            title="Customizable TV Bundles"
            description="Choose from a wide range of TV packages, including premium sports, movies, and family-friendly entertainment. Add your favorite streaming apps like Netflix or Disney+ for an all-in-one solution."
          />
          <CitystyleFeatureCard
            icon={Gamepad}
            title="Feature-Packed Mobile Deals"
            description="Stay connected with affordable mobile plans, unlimited data options, and the latest smartphones. Virgin Media ensures excellent 5G coverage for seamless browsing on the go."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" filters='{"suppliers": [152]}' />
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
            <p className="text-lg text-gray-600">Virgin Media provides a wide selection of local deals designed to suit every lifestyle and budget. Below, you'll find the latest offers on broadband, TV, and mobile bundles in Portsmouth.</p>
          </section>

          <section className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Find the Perfect Bundle</h3>
            <p className="text-gray-600 mb-6">Combine services for unbeatable convenience and savings:</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Broadband + TV:</strong> Ideal for households looking for fast internet and premium entertainment.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Broadband + Mobile:</strong> Stay connected at home and on the go with one affordable package.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Full Bundle:</strong> Broadband, TV, and mobile all in one, with exclusive perks for Portsmouth residents.</span>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Virgin Media Stands Out in Portsmouth</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Unrivaled Speeds:</strong> Get up to 1Gbps broadband, the fastest available in the area.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Customized Packages:</strong> Build your plan with add-ons like Sky Sports or international calling.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Local Benefits:</strong> Special deals and support for residents of Portsmouth.</span>
              </li>
            </ul>
          </section>

          <section className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Virgin Media in Portsmouth</h3>
            <p className="text-gray-600 mb-6">Virgin Media's local offers aren't just about speed and entertainment; they're about making your life easier:</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Flexible Contracts:</strong> Options for short-term and long-term agreements.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>Exclusive Discounts:</strong> Regular promotions for new and loyal customers.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span><strong>24/7 Support:</strong> Reliable customer service when you need it.</span>
              </li>
            </ul>
          </section>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900">Switch to Virgin Media today and enjoy the best broadband, TV, and mobile deals Portsmouth has to offer!</p>
          </div>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default VirginMediaPortsmouth;
