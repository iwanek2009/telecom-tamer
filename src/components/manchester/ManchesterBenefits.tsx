import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Zap, Signal, Download } from 'lucide-react';

export const ManchesterBenefits = () => {
  return (
    <CitystyleFeatureGrid
      title="3 Key Benefits at a Glance"
      subtitle="Why choose our Manchester broadband comparison service?"
    >
      <CitystyleFeatureCard
        icon={Zap}
        title="Lightning-Fast Downloads"
        description="Get HD content in a flash with broadband speeds reaching up to 1Gbps in select Manchester postcodes"
      />
      <CitystyleFeatureCard
        icon={Signal}
        title="Reliable Connection"
        description="Enjoy a consistently strong signal, even at peak times—perfect for remote work and seamless streaming"
      />
      <CitystyleFeatureCard
        icon={Download}
        title="Low Latency"
        description="Experience near-instant response times for online gaming, video conferencing, and cloud-based applications"
      />
    </CitystyleFeatureGrid>
  );
};