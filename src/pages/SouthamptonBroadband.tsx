import { BStyleTemplate } from '@/components/templates/BStyleTemplate';
import { BStyleContent } from '@/components/templates/BStyleContent';
import { BStyleHero } from '@/components/templates/BStyleHero';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Wifi, PoundSterling, Package } from 'lucide-react';
import { Helmet } from 'react-helmet';

const SouthamptonBroadband = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Southampton enjoys extensive fibre coverage with speeds up to 1Gbps available in many areas through providers like Virgin Media and BT.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Student-Friendly Deals",
      content: "Special broadband packages available for students at Southampton University and Solent University areas.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving Southampton.",
      linkText: "Compare providers",
      linkHref: "#providers"
    }
  ];

  return (
    <BStyleTemplate>
      <Helmet>
        <title>Southampton Broadband Deals | Compare Local Internet Packages</title>
        <meta 
          name="description" 
          content="Compare the best broadband deals in Southampton. Find exclusive offers from Virgin Media, BT, Sky and local providers. Student deals and ultrafast packages available."
        />
      </Helmet>

      <BStyleHero
        title="Southampton Broadband Deals"
        subtitle="Compare internet packages and find the best broadband deals in Southampton"
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Southampton cityscape with fiber optic cables"
        accordionItems={heroAccordionItems}
      />

      <BStyleContent>
        <div className="max-w-4xl mx-auto space-y-12">
          <BStyleFeatureGrid
            title="3 Key Reasons to Compare Broadband in Southampton"
          >
            <BStyleFeatureCard
              icon={Wifi}
              title="Find the Best Speeds"
              description="From standard broadband to ultrafast fibre, compare speeds to ensure your connection keeps up with your lifestyle."
            />
            <BStyleFeatureCard
              icon={PoundSterling}
              title="Save Money"
              description="Discover affordable deals from top providers and avoid paying for services you don't need."
            />
            <BStyleFeatureCard
              icon={Package}
              title="Tailored Packages"
              description="Choose a package that fits your household's needs, whether you're a light user or a heavy streamer."
            />
          </BStyleFeatureGrid>
        </div>
      </BStyleContent>
    </BStyleTemplate>
  );
};

export default SouthamptonBroadband;