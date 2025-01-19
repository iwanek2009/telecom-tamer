import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, Laptop } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const SkyPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "TV & Broadband",
      content: "Compare complete entertainment bundles with fast broadband.",
      linkText: "View bundles",
      linkHref: "#bundles"
    },
    {
      title: "Channel Packages",
      content: "Explore Sky TV packages with premium channels.",
      linkText: "View channels",
      linkHref: "#channels"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Sky TV & Broadband Portsmouth | Compare Entertainment Bundles</title>
        <meta 
          name="description" 
          content="Find the best Sky TV and broadband bundles in Portsmouth. Compare complete entertainment packages. Get fast internet with premium TV channels."
        />
      </Helmet>

      <CitystyleHero
        title="Sky TV & Broadband Portsmouth"
        subtitle="Compare complete entertainment packages from Sky. Find the perfect TV and broadband bundle for your home."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Sky TV and broadband in Portsmouth"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Sky TV & Broadband?"
          subtitle="Sky is synonymous with premium entertainment and cutting-edge technology. By combining Sky TV with superfast broadband, you get a seamless experience for streaming, gaming, and on-demand viewing. Here's why Sky stands out in Portsmouth:"
        >
          <CitystyleFeatureCard
            icon={Tv}
            title="Award-Winning Entertainment"
            description="Sky offers access to the best shows, movies, and live sports. From exclusive Sky Originals to blockbuster films and Premier League coverage, there's something for everyone."
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Broadband"
            description="Sky Broadband delivers speeds of up to 500Mbps, ensuring your household stays connected. Stream, game, and browse without lag or buffering."
          />
          <CitystyleFeatureCard
            icon={Laptop}
            title="Seamless Integration"
            description="With the Sky Q box, you can pause, rewind, and record live TV or download shows to watch offline. Plus, access Netflix, Disney+, and other apps all in one place."
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default SkyPortsmouth;