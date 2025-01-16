import { ReactNode } from 'react';

interface BStyleFeatureGridProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export const BStyleFeatureGrid = ({ children, title, subtitle }: BStyleFeatureGridProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};