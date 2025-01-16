import { MapPin, Wifi, CheckCircle2 } from 'lucide-react';

interface LocalCitySectionProps {
  name: string;
  description: string;
  providers: string[];
  avgSpeed: string;
  features: string[];
  image: string;
}

export const LocalCitySection = ({ 
  name, 
  description, 
  providers, 
  avgSpeed, 
  features,
  image 
}: LocalCitySectionProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Section */}
        <div className="h-[300px] overflow-hidden">
          <img 
            src={image} 
            alt={`Broadband deals in ${name}`} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-purple-500" />
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          </div>

          <p className="text-gray-600 mb-6">{description}</p>

          <div className="space-y-6">
            {/* Average Speed */}
            <div className="flex items-center gap-3">
              <Wifi className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-500">Average Speed</p>
                <p className="font-semibold">{avgSpeed}</p>
              </div>
            </div>

            {/* Providers */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Available Providers</p>
              <div className="flex flex-wrap gap-2">
                {providers.map((provider) => (
                  <span 
                    key={provider}
                    className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm"
                  >
                    {provider}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="text-sm text-gray-500 mb-2">Key Features</p>
              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};