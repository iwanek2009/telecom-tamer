import { Helmet } from 'react-helmet';
import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { CitystyleCard } from '@/components/templates/citystyle/CitystyleCard';
import { Wifi, Zap, PoundSterling } from 'lucide-react';

const AllertonBroadband = () => {
  const accordionItems = [
    {
      title: "What speeds are available in Allerton?",
      content: "Allerton residents can access a range of broadband speeds, from standard ADSL to ultrafast fibre packages reaching up to 900Mbps in eligible areas.",
      linkText: "Compare speeds now",
      linkHref: "#compare-deals"
    },
    {
      title: "Which providers serve Allerton?",
      content: "Major providers like Virgin Media, BT, Sky, and local providers offer services in Allerton. Check availability at your address.",
      linkText: "View providers",
      linkHref: "#compare-deals"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Allerton Broadband Deals | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Find your perfect internet match in Allerton. Compare local broadband packages from top providers. Get reliable speeds for streaming, gaming & working from home."
        />
      </Helmet>

      <CitystyleHero
        title="Allerton Broadband Deals"
        subtitle="Compare local internet packages and find the perfect connection for your home"
        image="/lovable-uploads/f47024ea-50f0-4583-89a7-f5cbc9e3beb9.png"
        imageAlt="Allerton broadband comparison"
        accordionItems={accordionItems}
      />

      <CitystyleFeatureGrid
        title="Why Choose Local Broadband in Allerton?"
        subtitle="Get connected with packages tailored to Allerton residents"
      >
        <CitystyleFeatureCard
          icon={Wifi}
          title="Local Coverage"
          description="Specifically optimized networks for Allerton areas"
        />
        <CitystyleFeatureCard
          icon={Zap}
          title="Fast Speeds"
          description="Access to high-speed fibre options where available"
        />
        <CitystyleFeatureCard
          icon={PoundSterling}
          title="Best Value"
          description="Compare local deals to find the best prices"
        />
      </CitystyleFeatureGrid>

      <CitystyleContent>
        <CitystyleCard>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Find Your Perfect Broadband Package in Allerton
            </h2>
            <p className="text-gray-600">
              Whether you're streaming, gaming, or working from home, we'll help you find the right broadband package for your needs. Compare deals from leading providers in Allerton and get connected today.
            </p>
            <div id="compare-deals" className="pt-8">
              {/* StickeeWidget will be rendered here */}
            </div>
          </div>
        </CitystyleCard>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default AllertonBroadband;