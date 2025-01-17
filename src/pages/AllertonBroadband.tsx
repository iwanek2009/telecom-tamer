import { Helmet } from 'react-helmet';
import { NewstyleTemplate } from '../components/templates/newstyle/NewstyleTemplate';
import { NewstyleContent } from '../components/templates/newstyle/NewstyleContent';
import { NewstyleHero } from '../components/templates/newstyle/NewstyleHero';
import { NewstyleFeatureGrid } from '../components/templates/newstyle/NewstyleFeatureGrid';
import { NewstyleFeatureCard } from '../components/templates/newstyle/NewstyleFeatureCard';
import { Wifi, Home, Globe } from 'lucide-react';
import StickeeWidget from '@/components/StickeeWidget';
import BroadbandComparisonSteps from '@/components/BroadbandComparisonSteps';
import BroadbandGuide from '@/components/BroadbandGuide';
import BroadbandSpeed from '@/components/BroadbandSpeed';

const AllertonBroadband = () => {
  const heroTips = [
    {
      title: "How to get the best broadband in Allerton?",
      content: "Compare different providers and check available speeds in your area. Many providers offer exclusive deals for Allerton residents.",
      linkText: "Read our guide",
      linkHref: "#guide"
    },
    {
      title: "What speed do you need?",
      content: "Your ideal speed depends on household usage and activities like streaming or gaming. Most Allerton homes can access superfast fibre.",
      linkText: "Check speeds",
      linkHref: "#speeds"
    }
  ];

  return (
    <NewstyleTemplate>
      <Helmet>
        <title>Allerton Broadband | Compare Home Internet Packages</title>
        <meta 
          name="description" 
          content="Discover the best broadband deals in Allerton. Compare home internet packages from top providers to find the perfect connection for streaming, gaming, and remote work. Start comparing today!"
        />
      </Helmet>

      <NewstyleHero
        title="Compare Allerton Broadband Deals"
        subtitle="Find the best internet packages available in Allerton - save up to £163 per year"
        tips={heroTips}
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Compare Allerton broadband deals"
      />

      <BroadbandComparisonSteps />

      <StickeeWidget />

      <NewstyleFeatureGrid
        title="Broadband in Allerton"
        subtitle="Find the perfect internet package for your home"
      >
        <NewstyleFeatureCard
          icon={Wifi}
          title="Superfast Fibre"
          description="Most Allerton homes can access superfast fibre broadband with speeds up to 900Mbps"
        />
        <NewstyleFeatureCard
          icon={Home}
          title="Local Coverage"
          description="Compare deals from major providers serving the Allerton area"
        />
        <NewstyleFeatureCard
          icon={Globe}
          title="Flexible Packages"
          description="Choose from various packages to suit your household needs and budget"
        />
      </NewstyleFeatureGrid>

      <NewstyleContent>
        <BroadbandGuide />
        <BroadbandSpeed />
      </NewstyleContent>
    </NewstyleTemplate>
  );
};

export default AllertonBroadband;