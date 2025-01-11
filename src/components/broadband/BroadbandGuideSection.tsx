import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const BroadbandGuideSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ultimate Guide to 100Mbps Broadband Deals: Is This Speed Right For You?
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Discover What 100Mbps Broadband Deals Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              100Mbps broadband deals deliver ultrafast internet speeds that transform your online experience. 
              These packages offer ten times the speed of standard broadband, with prices starting from just £25/month from leading providers.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              What Speed Do 100Mbps Broadband Deals Deliver?
            </h3>
            <ul className="space-y-4">
              {[
                "Download a HD movie (4GB) in just 5-6 minutes",
                "Stream 4K content on multiple devices simultaneously",
                "Support 8-10 devices connected at once",
                "Perfect for online gaming and video calls",
                "Upload large files quickly and efficiently"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Compare 100Mbps Broadband Deals
            </h3>
            <p className="text-gray-700 mb-4">Today's 100Mbps broadband deals typically include:</p>
            <ul className="space-y-4">
              {[
                "Guaranteed minimum speeds",
                "Latest Wi-Fi router technology",
                "Flexible contract lengths",
                "Optional TV and phone bundles",
                "Professional installation"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadbandGuideSection;