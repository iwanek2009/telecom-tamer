import React from 'react';
import { Wifi, Home, Gamepad2, Video, Activity, Router } from 'lucide-react';

const BroadbandSpeed = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="choose-speed" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Can You Get?
          </h2>

          {/* Available Options */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-gray-700 mb-4">You've got some great options here:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Router className="w-5 h-5 text-blue-500" />
                <span><strong>Standard Broadband</strong> - Perfect for basic browsing and emails</span>
              </li>
              <li className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-blue-500" />
                <span><strong>Fibre Broadband</strong> - Great for streaming and working from home</span>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                <span><strong>Full Fibre</strong> - Ultra-fast speeds for serious tech users</span>
              </li>
            </ul>
          </div>

          {/* Steps */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Finding Your Perfect Match Is Easy:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Pop in your postcode</li>
              <li>Compare what's available</li>
              <li>Pick your perfect package</li>
            </ol>
          </div>

          {/* Providers */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who's Offering Internet in Allerton?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Virgin Media */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Virgin Media</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    Lightning-fast gigabit speeds
                  </li>
                  <li className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-500" />
                    Free setup and WiFi boosters
                  </li>
                  <li className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-500" />
                    Entertainment bundles available
                  </li>
                </ul>
              </div>

              {/* BT */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">BT</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-blue-500" />
                    Reliable nationwide coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <Router className="w-4 h-4 text-blue-500" />
                    Smart hub technology
                  </li>
                  <li className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    Security features included
                  </li>
                </ul>
              </div>

              {/* Sky */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Sky</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-blue-500" />
                    Great for TV lovers
                  </li>
                  <li className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    Flexible packages
                  </li>
                  <li className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-blue-500" />
                    Strong WiFi guarantee
                  </li>
                </ul>
              </div>

              {/* Hyperoptic */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900">Hyperoptic</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    Ultra-fast full fibre
                  </li>
                  <li className="flex items-center gap-2">
                    <Router className="w-4 h-4 text-blue-500" />
                    No-contract options
                  </li>
                  <li className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-blue-500" />
                    24/7 support team
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandSpeed;