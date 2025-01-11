import React from 'react';
import { Download, Users, Gamepad2 } from 'lucide-react';
import { BStyleFeatureGrid } from '../templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '../templates/BStyleFeatureCard';

const BroadbandFeatures = () => {
  return (
    <BStyleFeatureGrid
      title="Why Choose 100Mbps Broadband?"
      subtitle="Perfect balance of speed and value for modern households"
    >
      <BStyleFeatureCard
        icon={Download}
        title="Fast Downloads"
        description="Download HD movies in minutes and large files instantly"
      />
      <BStyleFeatureCard
        icon={Users}
        title="Multi-User Friendly"
        description="Perfect for households with 3-5 heavy internet users"
      />
      <BStyleFeatureCard
        icon={Gamepad2}
        title="Gaming Ready"
        description="Low latency and stable connection for online gaming"
      />
    </BStyleFeatureGrid>
  );
};

export default BroadbandFeatures;