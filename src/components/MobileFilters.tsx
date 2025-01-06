import React from 'react';
import { Button } from "@/components/ui/button";

const MobileFilters = () => {
  return (
    <div className="bg-[#F1F0FB] p-6 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#1A1F2C]">Filter results</h2>
        <Button variant="ghost" className="text-[#8E9196] hover:text-[#1A1F2C]">
          Reset
        </Button>
      </div>

      {/* Contract Types */}
      <div className="space-y-2 mb-8">
        <div className="bg-[#1A1F2C] text-white p-3 rounded-md cursor-pointer">
          Phones with SIM
        </div>
        <div className="bg-white text-[#1A1F2C] p-3 rounded-md cursor-pointer hover:bg-[#F6F6F7] border border-[#F6F6F7]">
          SIM free phones
        </div>
        <div className="bg-white text-[#1A1F2C] p-3 rounded-md cursor-pointer hover:bg-[#F6F6F7] border border-[#F6F6F7]">
          SIM only
        </div>
        <div className="bg-white text-[#1A1F2C] p-3 rounded-md cursor-pointer hover:bg-[#F6F6F7] border border-[#F6F6F7]">
          Data SIMs
        </div>
      </div>

      {/* Brand Section */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#1A1F2C] mb-4">Brand</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Apple</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Google</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Honor</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Huawei</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Motorola</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Nokia</span>
          </div>
        </div>
      </div>

      {/* Data Speed */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-[#1A1F2C] mb-4">Data speed</h3>
        <div className="space-y-2">
          <div className="bg-white text-[#1A1F2C] p-3 rounded-md cursor-pointer hover:bg-[#F6F6F7] border border-[#F6F6F7]">
            Any
          </div>
          <div className="bg-white text-[#1A1F2C] p-3 rounded-md cursor-pointer hover:bg-[#F6F6F7] border border-[#F6F6F7]">
            5G
          </div>
        </div>
      </div>

      {/* Network */}
      <div>
        <h3 className="text-lg font-semibold text-[#1A1F2C] mb-4">Network</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">Three</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">giffgaff</span>
          </div>
          <div className="bg-white p-3 rounded-md flex items-center justify-center border border-[#F6F6F7] cursor-pointer hover:bg-[#F6F6F7]">
            <span className="text-[#1A1F2C]">iD mobile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilters;