import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Building, ShoppingBag, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const GunwharfQuaysBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Retail Solutions",
      content: "Dedicated packages for retail businesses.",
      linkText: "View retail packages",
      linkHref: "#retail-packages"
    },
    {
      title: "Residential Deals",
      content: "Perfect packages for Gunwharf residents.",
      linkText: "Check availability",
      linkHref: "#availability"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Gunwharf Quays Broadband | Compare Shopping District Internet</title>
        <meta 
          name="description" 
          content="Find the best broadband deals in Gunwharf Quays. Compare packages perfect for retail and residential use. Get reliable speeds in Portsmouth's premier shopping district."
        />
      </Helmet>

      <CitystyleHero
        title="Premium Broadband for Gunwharf Quays Living"
        subtitle="Find the perfect internet package for Portsmouth's waterfront destination"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Gunwharf Quays broadband services"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Gunwharf Quays Packages?"
          subtitle="Get connected with reliable broadband in this vibrant location"
        >
          <CitystyleFeatureCard
            icon={Wifi}
            title="Waterfront Ready Speeds"
            description="Ultra-fast broadband perfect for Gunwharf's modern apartments and retail spaces. Get reliable connections with stunning harbour views."
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Premium Location, Premium Service"
            description="Designed for Gunwharf's unique mix of luxury living and retail - whether you're running a store or enjoying apartment life."
          />
          <CitystyleFeatureCard
            icon={ShoppingBag}
            title="Retail & Residential Solutions"
            description="From designer shops to waterfront homes, get packages that match Gunwharf's prestigious standards."
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Reliable Service"
            description="Stable connection for business success"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default GunwharfQuaysBroadband;