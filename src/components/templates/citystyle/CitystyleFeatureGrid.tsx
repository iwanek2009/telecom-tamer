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
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Find Your Perfect Broadband Deal in Southsea
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                Compare local internet packages and get connected today
              </p>
            )}
          </div>
        )}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Seaside-Ready Speeds</h3>
            <p className="text-gray-600">
              Whether you're working from your seafront flat or streaming in your Palmerston Road home, get reliable speeds that keep you connected in Southsea.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Perfect For Local Living</h3>
            <p className="text-gray-600">
              From Albert Road creatives to families near Canoe Lake, choose packages that match your Southsea lifestyle and budget.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Local Coverage You Can Trust</h3>
            <p className="text-gray-600">
              Get broadband that understands Southsea's unique needs - from student houses near the University to Victorian homes in the avenues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};