import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Building2, Wifi, Shield, Clock, Cloud } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const BusinessBroadbandLondon = () => {
  const heroAccordionItems = [
    {
      title: "Dedicated Business Lines",
      content: "Get reliable, high-speed dedicated business lines with guaranteed upload and download speeds, perfect for London businesses.",
      linkText: "View business lines",
      linkHref: "#business-lines"
    },
    {
      title: "Service Level Agreements",
      content: "Compare business packages with robust SLAs, priority support, and guaranteed fix times from leading providers.",
      linkText: "Check SLAs",
      linkHref: "#sla"
    },
    {
      title: "Scalable Solutions",
      content: "Find flexible broadband packages that grow with your business, from small startups to large enterprises.",
      linkText: "Learn more",
      linkHref: "#solutions"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Business Broadband London | Compare Commercial Internet Packages</title>
        <meta 
          name="description" 
          content="Compare business broadband deals in London. Find reliable commercial internet packages from leading providers. Get ultra-fast speeds for your London business."
        />
      </Helmet>

      <CitystyleHero
        title="Business Broadband Deals in London"
        subtitle="Compare dedicated business internet packages from leading providers. Find reliable, high-speed connections perfect for your London business."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="London business district with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Business Broadband Deals?"
          subtitle="Get the perfect internet package for your London business"
        >
          <CitystyleFeatureCard
            icon={Building2}
            title="Business-Grade"
            description="Dedicated lines with guaranteed speeds"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Ultra-Fast Speeds"
            description="Up to 10Gbps for demanding businesses"
          />
          <CitystyleFeatureCard
            icon={Shield}
            title="Enhanced Security"
            description="Advanced security features included"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="24/7 Support"
            description="Priority business support available"
          />
          <CitystyleFeatureCard
            icon={Cloud}
            title="Cloud Ready"
            description="Optimized for cloud services"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BusinessBroadbandLondon;