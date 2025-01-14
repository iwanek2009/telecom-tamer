import { ReactNode } from 'react';

interface BroadbandFeatureGridProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const BroadbandFeatureGrid = ({ children, title, subtitle }: BroadbandFeatureGridProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};