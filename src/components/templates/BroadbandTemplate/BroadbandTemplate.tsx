import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BroadbandHero } from './BroadbandHero';
import { BroadbandFeatureGrid } from './BroadbandFeatureGrid';
import { BroadbandFeatureCard } from './BroadbandFeatureCard';
import { BroadbandContentSection } from './BroadbandContentSection';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';

interface BroadbandTemplateProps {
  heroProps: React.ComponentProps<typeof BroadbandHero>;
  features: React.ComponentProps<typeof BroadbandFeatureCard>[];
  children?: React.ReactNode;
  widgetId?: string;
  filters?: string;
}

export const BroadbandTemplate = ({ 
  heroProps,
  features,
  children,
  widgetId = "smartfony-91",
  filters
}: BroadbandTemplateProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        <BroadbandHero {...heroProps} />

        <BroadbandFeatureGrid
          title="Key Features"
          subtitle="Discover what makes our service different"
        >
          {features.map((feature, index) => (
            <BroadbandFeatureCard key={index} {...feature} />
          ))}
        </BroadbandFeatureGrid>

        <div className="w-full bg-[#f9fafc]">
          <div className="container mx-auto px-4 py-8">
            <StickeeWidgetContent 
              widgetId={widgetId}
              filters={filters}
            />
          </div>
        </div>

        {children}
      </main>

      <Footer />
    </div>
  );
};