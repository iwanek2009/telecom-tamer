import React from 'react';
import { Wifi, Home, Gamepad2, Video, Activity, Router } from 'lucide-react';

const BroadbandSpeed = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="choose-speed" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Choosing the Right Broadband Speed
          </h2>

          {/* Find Your Perfect Speed */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Speed</h3>
            <p className="text-gray-700 mb-4">
              Your ideal broadband speed depends on two key factors:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>The number of connected devices in your home</li>
              <li>Your household's internet usage habits</li>
            </ul>
          </div>

          {/* Understanding Usage Patterns */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Understanding Usage Patterns</h3>
            <p className="text-gray-700 mb-4">
              A family home or shared house typically needs higher speeds as multiple devices connect simultaneously. You'll need faster speeds if your household:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Video className="w-5 h-5" />
                <span>Streams 4K content</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Home className="w-5 h-5" />
                <span>Works from home</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Gamepad2 className="w-5 h-5" />
                <span>Plays online games</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Video className="w-5 h-5" />
                <span>Uses video calls regularly</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Speed Guidelines</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Wifi className="w-5 h-5" />
                <span>UK average speed: 69Mbps (suitable for 3-4 users)</span>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <span>Heavy usage households: 100Mbps+ recommended</span>
              </li>
              <li className="flex items-center gap-2">
                <Router className="w-5 h-5" />
                <span>Single user/basic browsing: 30-50Mbps sufficient</span>
              </li>
            </ul>
          </div>

          {/* Check Your Current Speed */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Check Your Current Speed</h3>
            <p className="text-gray-700 mb-4">To measure your current connection's performance:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Run a speed test while at home</li>
              <li>Connect directly to your Wi-Fi router</li>
              <li>Test at different times of day</li>
              <li>Compare with available deals in your area</li>
            </ol>
            <p className="text-sm text-gray-600 mt-4 italic">
              Note: Speed tests show a snapshot - actual speeds may vary throughout the day.
            </p>
          </div>

          {/* Available Speeds */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Dostępne prędkości w Twojej okolicy</h3>
            <p className="text-gray-700 mb-4">Najszybsze opcje internetu zależą od Twojej lokalizacji:</p>
            <ul className="space-y-3 text-gray-700">
              <li>• Pełny światłowód: Dostępny dla 65% domów, oferuje najszybsze i najbardziej niezawodne prędkości</li>
              <li>• Sieć Virgin Media: Ultraszybkie prędkości w wybranych obszarach</li>
              <li>• Częściowy światłowód: Szeroko dostępny, ale prędkości zależą od odległości</li>
              <li>• Standardowy internet: Dostępny prawie wszędzie, ale wolniejszy</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Pamiętaj:</strong> Chociaż ultraszybkie opcje jak pełny światłowód oferują najwyższe prędkości, 
              połączenia częściowo światłowodowe nadal są odpowiednie dla potrzeb większości gospodarstw domowych.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandSpeed;