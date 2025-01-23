import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Zap, Signal, Download } from 'lucide-react';

export const ManchesterBenefits = () => {
  return (
    <CitystyleFeatureGrid
      title="Fibre Broadband Manchester | Fast Internet Providers"
      subtitle="Experience lightning-fast internet speeds with local fibre broadband deals"
    >
      <CitystyleFeatureCard
        icon={Zap}
        title="Lightning-Fast Downloads"
        description="Grab HD movies, TV shows, and large files in mere minutes with speeds up to 1Gbps"
      />
      <CitystyleFeatureCard
        icon={Signal}
        title="Reliable Connection"
        description="Stay connected around the clock—ideal for remote work, streaming, and homeschooling"
      />
      <CitystyleFeatureCard
        icon={Download}
        title="Low Latency"
        description="Enjoy quick response times for online gaming, video conferences, and cloud applications"
      />
    </CitystyleFeatureGrid>
  );
};