import React from 'react';
import { Wifi, Info } from 'lucide-react';

const BroadbandOffers = () => {
  return (
    <div className="md:col-span-9 space-y-4">
      {/* Offer Card 1 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/439da46b-b50f-449e-b131-2b851962c927.png" alt="Virgin Media" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold">Virgin Media M125 Ultrafast Fibre</h3>
              <div className="flex items-center mt-1">
                <Wifi className="w-4 h-4 mr-1" />
                <span className="text-sm text-gray-600">Average UK speed*</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">£23.50<span className="text-sm font-normal"> a month</span></div>
            <p className="text-sm text-gray-600">no setup cost</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold">132<span className="text-xl"> Mbps</span></div>
            <p className="text-sm text-gray-600">18 month contract</p>
          </div>
          <div className="space-y-2">
            <button className="w-32 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Get deal</button>
            <button className="w-32 text-sm text-gray-600 flex items-center justify-center gap-1">
              More info
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 bg-yellow-100 px-3 py-2 rounded-md inline-block">
          <p className="text-sm font-medium">£50 bill credit</p>
        </div>
      </div>

      {/* Offer Card 2 */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/200c65f5-15b7-44c8-ad2a-3fe27a295479.png" alt="Vodafone" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold">Vodafone Fibre 2</h3>
              <div className="flex items-center mt-1">
                <Wifi className="w-4 h-4 mr-1" />
                <span className="text-sm text-gray-600">Average UK speed*</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">£24.00<span className="text-sm font-normal"> a month</span></div>
            <p className="text-sm text-gray-600">no setup cost</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold">67<span className="text-xl"> Mbps</span></div>
            <p className="text-sm text-gray-600">24 month contract</p>
          </div>
          <div className="space-y-2">
            <button className="w-32 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Get deal</button>
            <button className="w-32 text-sm text-gray-600 flex items-center justify-center gap-1">
              More info
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 bg-yellow-100 px-3 py-2 rounded-md inline-block">
          <p className="text-sm font-medium">£80 voucher</p>
        </div>
      </div>
    </div>
  );
};

export default BroadbandOffers;