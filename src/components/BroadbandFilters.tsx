import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const BroadbandFilters = () => {
  return (
    <div className="md:col-span-3 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="font-semibold mb-4">Filter by</h2>
        
        {/* Package Filter */}
        <div className="space-y-4 mb-6">
          <h3 className="font-medium">Package</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="broadband" />
              <label htmlFor="broadband" className="text-sm">Broadband (41)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="broadband-tv" />
              <label htmlFor="broadband-tv" className="text-sm">Broadband + TV (26)</label>
            </div>
          </div>
        </div>

        {/* Speed Filter */}
        <div className="space-y-4 mb-6">
          <h3 className="font-medium">Download speeds</h3>
          <RadioGroup defaultValue="10">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="10mbps" />
              <label htmlFor="10mbps" className="text-sm">10 Mbps + (67)</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="30" id="30mbps" />
              <label htmlFor="30mbps" className="text-sm">30 Mbps + (66)</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100" id="100mbps" />
              <label htmlFor="100mbps" className="text-sm">100 Mbps + (32)</label>
            </div>
          </RadioGroup>
        </div>

        {/* Provider Filter */}
        <div className="space-y-4">
          <h3 className="font-medium">Provider</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="virgin" />
              <label htmlFor="virgin" className="text-sm">Virgin Media (32)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bt" />
              <label htmlFor="bt" className="text-sm">BT (16)</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="sky" />
              <label htmlFor="sky" className="text-sm">Sky (5)</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadbandFilters;