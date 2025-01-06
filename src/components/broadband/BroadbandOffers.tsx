import { Wifi, Info } from 'lucide-react';

export const BroadbandOffers = () => {
  return (
    <div className="md:col-span-9 space-y-4">
      <div className="bg-white rounded-lg shadow-sm p-6 border border-[#C8C8C9]/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/439da46b-b50f-449e-b131-2b851962c927.png" alt="Virgin Media" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold text-[#7E69AB]">Virgin Media M125 Ultrafast Fibre</h3>
              <div className="flex items-center mt-1">
                <Wifi className="w-4 h-4 mr-1 text-[#8E9196]" />
                <span className="text-sm text-[#8E9196]">Average UK speed*</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#9b87f5]">£23.50<span className="text-sm font-normal text-[#8E9196]"> a month</span></div>
            <p className="text-sm text-[#8E9196]">no setup cost</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-[#7E69AB]">132<span className="text-xl"> Mbps</span></div>
            <p className="text-sm text-[#8E9196]">18 month contract</p>
          </div>
          <div className="space-y-2">
            <button className="w-32 bg-[#9b87f5] text-white px-4 py-2 rounded-md hover:bg-[#7E69AB] transition-colors">Get deal</button>
            <button className="w-32 text-sm text-[#8E9196] flex items-center justify-center gap-1 hover:text-[#7E69AB]">
              More info
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 bg-[#9b87f5]/10 px-3 py-2 rounded-md inline-block">
          <p className="text-sm font-medium text-[#7E69AB]">£50 bill credit</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6 border border-[#C8C8C9]/20">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/200c65f5-15b7-44c8-ad2a-3fe27a295479.png" alt="Vodafone" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="font-semibold text-[#7E69AB]">Vodafone Fibre 2</h3>
              <div className="flex items-center mt-1">
                <Wifi className="w-4 h-4 mr-1 text-[#8E9196]" />
                <span className="text-sm text-[#8E9196]">Average UK speed*</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-[#9b87f5]">£24.00<span className="text-sm font-normal text-[#8E9196]"> a month</span></div>
            <p className="text-sm text-[#8E9196]">no setup cost</p>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div>
            <div className="text-3xl font-bold text-[#7E69AB]">67<span className="text-xl"> Mbps</span></div>
            <p className="text-sm text-[#8E9196]">24 month contract</p>
          </div>
          <div className="space-y-2">
            <button className="w-32 bg-[#9b87f5] text-white px-4 py-2 rounded-md hover:bg-[#7E69AB] transition-colors">Get deal</button>
            <button className="w-32 text-sm text-[#8E9196] flex items-center justify-center gap-1 hover:text-[#7E69AB]">
              More info
              <Info className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 bg-[#9b87f5]/10 px-3 py-2 rounded-md inline-block">
          <p className="text-sm font-medium text-[#7E69AB]">£80 voucher</p>
        </div>
      </div>
    </div>
  );
};