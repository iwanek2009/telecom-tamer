import { MapPin, Wifi, Clock, PoundSterling } from 'lucide-react';

interface CitySectionProps {
  city: string;
  providers: string[];
  averageSpeed: string;
  features: string[];
  priceRange: string;
  installationTime: string;
}

export const CitySection = ({
  city,
  providers,
  averageSpeed,
  features,
  priceRange,
  installationTime
}: CitySectionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-primary" />
        <h2 className="text-2xl font-bold text-gray-900">{city}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Available Providers</h3>
            <ul className="list-disc list-inside text-gray-600">
              {providers.map((provider, index) => (
                <li key={index}>{provider}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-primary" />
            <span className="text-gray-700">Average Speed: {averageSpeed}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-600">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex items-center gap-2">
            <PoundSterling className="w-4 h-4 text-primary" />
            <span className="text-gray-700">Price Range: {priceRange}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-gray-700">Installation Time: {installationTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};