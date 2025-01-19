import { ReactNode } from 'react';

interface CitystyleFeatureGridProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export const CitystyleFeatureGrid = ({ children, title, subtitle }: CitystyleFeatureGridProps) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Why Choose Broadband for Naval Base Portsmouth
            </h2>
            <p className="text-lg text-gray-600">
              Reliable internet is essential for service personnel balancing work and personal life. Here's why our broadband solutions stand out for Naval Base Portsmouth:
            </p>
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fast and Dependable Connectivity</h3>
            <p className="text-gray-600">
              Enjoy high-speed internet designed for consistent performance, even during peak usage hours. Perfect for streaming, video calls, and gaming.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Contracts</h3>
            <p className="text-gray-600">
              We understand the needs of service personnel. That's why we offer short-term and flexible contracts that adapt to your schedule and assignments.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Secure and Reliable</h3>
            <p className="text-gray-600">
              Our broadband packages come with built-in security features, ensuring safe online access for your personal and professional needs.
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
};