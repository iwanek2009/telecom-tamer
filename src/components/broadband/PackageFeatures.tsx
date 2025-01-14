import { Card, CardContent } from '@/components/ui/card';
import { BStyleFeatureGrid } from '@/components/templates/BStyleFeatureGrid';
import { BStyleFeatureCard } from '@/components/templates/BStyleFeatureCard';
import { Phone, Wifi, PoundSterling } from 'lucide-react';

export const PackageFeatures = () => {
  return (
    <>
      <BStyleFeatureGrid
        title="Key Features of Our Broadband & Phone Packages"
        subtitle="Discover what makes our home broadband and phone deals stand out"
      >
        <BStyleFeatureCard
          icon={Phone}
          title="Inclusive Call Plans"
          description="Choose from evening & weekend or anytime UK landline calls with clear connection quality"
        />
        <BStyleFeatureCard
          icon={Wifi}
          title="Reliable Connection"
          description="Fast broadband with dedicated phone line support and 24/7 technical assistance"
        />
        <BStyleFeatureCard
          icon={PoundSterling}
          title="Better Value"
          description="Save money and get more by bundling your home broadband and phone services together"
        />
      </BStyleFeatureGrid>

      <div className="mt-12">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose a Combined Package?</h3>
            <p className="text-gray-600 mb-6">
              A broadband and phone bundle provides more than just internet access. Your package includes a dedicated phone line essential for stable broadband connection, plus the option to add calling features that suit your lifestyle.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};