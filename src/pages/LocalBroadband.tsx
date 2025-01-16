import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { LocalCitySection } from '@/components/local/LocalCitySection';
import { StickeeWidget } from '@/components/StickeeWidget';
import { useEffect } from 'react';
import { loadStickeeScript, cleanupStickeeScript } from '@/utils/stickeeLoader';

const cities = [
  {
    name: 'London',
    description: 'The capital offers extensive full fibre coverage with speeds up to 1Gbps across most areas.',
    providers: ['Virgin Media', 'BT', 'Hyperoptic', 'Community Fibre'],
    avgSpeed: '108Mbps',
    features: ['90% full fibre coverage', 'Multiple provider choice', 'Business districts priority'],
    image: '/lovable-uploads/photo-1496307653780-42ee777d4833.jpg'
  },
  {
    name: 'Manchester',
    description: 'A digital hub with growing gigabit connectivity and competitive provider options.',
    providers: ['Virgin Media', 'BT', 'TalkTalk', 'Hyperoptic'],
    avgSpeed: '94Mbps',
    features: ['Growing full fibre network', 'Student area coverage', 'Tech hub focus'],
    image: '/lovable-uploads/photo-1487958449943-2429e8be8625.jpg'
  },
  {
    name: 'Birmingham',
    description: 'Extensive broadband coverage with increasing ultrafast options in the city center.',
    providers: ['Virgin Media', 'BT', 'Sky', 'Vodafone'],
    avgSpeed: '86Mbps',
    features: ['City center priority', 'Business district coverage', 'Suburban expansion'],
    image: '/lovable-uploads/photo-1488972685288-c3fd157d7c7a.jpg'
  }
];

const LocalBroadband = () => {
  useEffect(() => {
    loadStickeeScript();
    return () => cleanupStickeeScript();
  }, []);

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Compare Local Broadband Deals | UK Cities Internet Packages</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in your city. Compare local internet providers, speeds and prices across major UK cities. Get exclusive regional offers and packages."
        />
      </Helmet>

      <Header />
      
      <BStyleContent>
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Local Broadband Deals in Major UK Cities
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Find the best broadband deals tailored to your location. Compare local providers, 
              speeds, and exclusive packages available in your city. With our comprehensive 
              comparison tool, you can make an informed decision and potentially save hundreds 
              on your broadband package.
            </p>
          </section>

          {/* Stickee Widget */}
          <div className="mb-12">
            <StickeeWidget />
          </div>

          {/* City Sections */}
          <div className="space-y-12">
            {cities.map((city) => (
              <LocalCitySection key={city.name} {...city} />
            ))}
          </div>

          {/* Additional Information */}
          <section className="mt-16 bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Compare Local Broadband Deals?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits of Local Comparison</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Access to exclusive regional offers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Accurate availability information</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Local installation expertise</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">How to Choose</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Check actual speeds in your area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Compare local provider reviews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Consider installation timeframes</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </BStyleContent>

      <Footer />
    </BStyleTemplate>
  );
};

export default LocalBroadband;