import { Card, CardContent } from '@/components/ui/card';
import { Info, AlertCircle, Check, PoundSterling, Globe, CreditCard } from 'lucide-react';

export const CallChargesSection = () => {
  return (
    <section className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Understanding Call Charges</h2>
          <p className="text-lg text-gray-600">
            Know what to expect with your phone package charges and how to optimize your costs.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4">
          <Card className="bg-white flex-1 min-w-[300px]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <PoundSterling className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Off-Package Call Costs</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Standard rate calls typically up to 16p per minute",
                  "Additional charges may apply during peak hours",
                  "Mobile and international calls often charged separately",
                  "Check provider rates for specific call types"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Info className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white flex-1 min-w-[300px]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Special Call Requirements</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Consider international calling needs",
                  "Check mobile call inclusion",
                  "Compare provider rates for specialty numbers",
                  "Look for inclusive minutes to common destinations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white flex-1 min-w-[300px]">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Line Rental Information</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Modern broadband and phone packages include line rental in the total monthly cost. There's no separate charge for copper phone line rental - it's all part of your bundle price.
              </p>
              <h4 className="font-semibold text-lg mb-2">Cost-Saving Tips:</h4>
              <ul className="space-y-3">
                {[
                  "Match call times to your package benefits",
                  "Consider mobile alternatives for daytime calls",
                  "Compare bundle deals across providers",
                  "Look for special introductory offers",
                  "Check for hidden charges or fees"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};