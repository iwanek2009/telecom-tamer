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
        title="Gunwharf Quays Broadband Deals"
        subtitle="Compare the best broadband packages for Portsmouth's premier shopping and residential district."
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
            title="Fast Speeds"
            description="Ultra-fast connectivity for all needs"
          />
          <CitystyleFeatureCard
            icon={Building}
            title="Mixed Use"
            description="Perfect for retail and residential"
          />
          <CitystyleFeatureCard
            icon={ShoppingBag}
            title="Retail Ready"
            description="Ideal for shops and restaurants"
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