import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info, CheckCircle2, AlertCircle, Search, Star, Calculator } from "lucide-react";

export const ValueBroadbandGuide = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Are Cheap Broadband Deals Really Good Value?
            </h2>
            <p className="text-lg text-gray-600">
              Searching for the most affordable broadband package? While budget-friendly deals can offer significant savings, 
              it's crucial to understand what you're getting for your money. Let's explore whether the cheapest option is 
              truly the best value for your needs.
            </p>
          </div>

          <Card className="border border-[#3FC1C9]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-6 h-6 text-primary" />
                Understanding Value in Cheap Broadband
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  The Good News:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Modern budget deals often include reliable fibre connections</li>
                  <li>Many affordable packages provide speeds up to 67Mbps</li>
                  <li>Switching providers regularly can secure better rates</li>
                  <li>Perfect for basic browsing and streaming needs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-pink-500" />
                  Points to Consider:
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>Limited access to premium features and services</li>
                  <li>Speed restrictions compared to premium packages</li>
                  <li>Fewer bundling options for TV and phone services</li>
                  <li>Basic equipment without advanced features</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#3FC1C9]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-6 h-6 text-primary" />
                Quality and Reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Despite lower prices, cheap broadband packages typically use the same core infrastructure as premium services. This means:
              </p>
              <ul className="space-y-2 text-gray-600 list-disc pl-6">
                <li>Similar basic connection reliability</li>
                <li>Standard installation process</li>
                <li>Regulated service standards</li>
                <li>Consistent speed delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-[#3FC1C9]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-6 h-6 text-primary" />
                How to Find the Best Budget Deal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Check Local Availability</h4>
                <p className="text-gray-600">
                  First, use our postcode checker to find available services in your area. This ensures you only see relevant deals.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Compare Real Costs</h4>
                <p className="text-gray-600 mb-2">Look beyond the headline price and consider:</p>
                <ul className="space-y-1 text-gray-600 list-disc pl-6">
                  <li>Contract length and terms</li>
                  <li>Setup fees and equipment costs</li>
                  <li>Potential price increases</li>
                  <li>Bundle options if needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Research Provider Reputation</h4>
                <p className="text-gray-600 mb-2">Before committing:</p>
                <ul className="space-y-1 text-gray-600 list-disc pl-6">
                  <li>Read customer reviews</li>
                  <li>Check service reliability scores</li>
                  <li>Compare customer support quality</li>
                  <li>Look for hidden charges</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-[#3FC1C9]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-primary" />
                Making Your Decision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">The best broadband deal isn't always the cheapest. Consider:</p>
              <ul className="space-y-2 text-gray-600 list-disc pl-6 mb-6">
                <li>Your typical internet usage</li>
                <li>Number of connected devices</li>
                <li>Future connectivity needs</li>
                <li>Value of included features</li>
              </ul>
              <p className="text-gray-700 font-semibold">
                Remember: The goal is finding the best value for your specific needs, not just the lowest price.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};