import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Signal, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const FibrePortsmouthBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Speeds",
      content: "Access ultra-fast fibre broadband with speeds up to 1Gbps in eligible areas.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Top Providers",
      content: "Compare fibre deals from major providers serving Portsmouth area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fibre Broadband Portsmouth | Compare Fast Internet Deals</title>
        <meta 
          name="description" 
          content="Looking for fibre broadband in Portsmouth? Compare ultra-fast packages from top providers. Get reliable speeds for streaming, gaming & home working."
        />
      </Helmet>

      <CitystyleHero
        title="Fibre Broadband in Portsmouth"
        subtitle="Compare ultra-fast fibre packages from leading providers. Get the speed you need for streaming, gaming, and working from home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth fibre broadband connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleFeatureGrid
        title="Ultra-Fast Fibre Broadband in Portsmouth"
        subtitle="Looking for lightning-quick internet? Compare the fastest fibre deals in your area"
      >
        <CitystyleFeatureCard
          icon={Wifi}
          title="Lightning-Fast Speeds"
          description="Experience ultra-fast fibre broadband perfect for 4K streaming, lag-free gaming, and seamless video calls. Get download speeds up to 1Gb in Portsmouth."
        />
        <CitystyleFeatureCard
          icon={Signal}
          title="Reliable Connection"
          description="Say goodbye to buffering with stable fibre connections. Perfect for busy households where everyone's online at once."
        />
        <CitystyleFeatureCard
          icon={Zap}
          title="Future-Proof Technology"
          description="Get ready for whatever comes next with fibre broadband that can handle tomorrow's tech - from 8K streaming to cloud gaming."
        />
      </CitystyleFeatureGrid>

      <CitystyleContent>
        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibrePortsmouthBroadband;