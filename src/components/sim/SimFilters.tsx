import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export const SimFilters = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Filter by</h3>
      
      {/* Package Section */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-4">Package</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="broadband" />
            <label htmlFor="broadband" className="text-sm">
              Broadband (41)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="broadband-tv" />
            <label htmlFor="broadband-tv" className="text-sm">
              Broadband + TV (26)
            </label>
          </div>
        </div>
      </div>

      {/* Download speeds Section */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-4">Download speeds</h4>
        <RadioGroup defaultValue="10">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="10" id="10mbps" />
            <Label htmlFor="10mbps" className="text-sm">10 Mbps + (67)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="30" id="30mbps" />
            <Label htmlFor="30mbps" className="text-sm">30 Mbps + (66)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100" id="100mbps" />
            <Label htmlFor="100mbps" className="text-sm">100 Mbps + (32)</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Provider Section */}
      <div>
        <h4 className="text-sm font-medium mb-4">Provider</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="virgin" />
            <label htmlFor="virgin" className="text-sm">
              Virgin Media (32)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="bt" />
            <label htmlFor="bt" className="text-sm">
              BT (16)
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sky" />
            <label htmlFor="sky" className="text-sm">
              Sky (5)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};