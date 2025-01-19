import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Tv, Gamepad, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

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
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default VirginMediaPortsmouth;