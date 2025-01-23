import { Wifi, WifiOff } from 'lucide-react';

export const ManchesterConnectionTypes = () => {
  return (
    <div className="mt-16">
      <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
        Types of Broadband Connections in Manchester
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <h4 className="text-xl font-semibold text-primary mb-4">Full Fibre (FTTP)</h4>
          <p className="text-gray-600">
            This direct fibre-optic connection delivers speeds from 100Mbps up to 1Gbps. Availability is expanding rapidly across Manchester.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <h4 className="text-xl font-semibold text-primary mb-4">Part-Fibre (FTTC)</h4>
          <p className="text-gray-600">
            A mixture of fibre and copper wiring often delivers speeds up to 70Mbps. Coverage is widespread, making it a common choice for most households.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <h4 className="text-xl font-semibold text-primary mb-4">Cable (Virgin Media)</h4>
          <p className="text-gray-600">
            Virgin Media's network uses coaxial cables to achieve ultrafast speeds, often comparable to full fibre. It's accessible in much of central Manchester and surrounding areas.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
          <h4 className="text-xl font-semibold text-primary mb-4">Mobile Broadband (4G/5G)</h4>
          <p className="text-gray-600">
            An option if wired connections are limited or if you need a portable solution. Speeds vary depending on your location and network coverage.
          </p>
        </div>
      </div>
    </div>
  );
};