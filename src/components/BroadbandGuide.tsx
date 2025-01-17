import { Card } from "@/components/ui/card";

export default function BroadbandGuide() {
  return (
    <div className="container mx-auto px-4" id="guide">
      <Card className="p-6 md:p-8 space-y-6 bg-white shadow-lg rounded-xl">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            Need Better Internet in Allerton? Let's Find Your Perfect Match!
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Looking for great broadband in Allerton? We've got you covered! Whether you're working from home in L18, 
            binge-watching your favorite shows, or keeping the whole family connected, we'll help you find a package 
            that's just right.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6">
            Why Compare Broadband in Allerton?
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Let's face it - Allerton's a busy place, and everyone needs reliable internet these days. But with so many 
            providers and packages out there, finding the right deal can be tricky. That's where we come in!
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-6">
            Here's Why You'll Love Our Comparison Service:
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold text-gray-900">Speed That Matches Your Life</h4>
              <p className="text-gray-600">
                Whether you're streaming, gaming, or on video calls, we'll help you find a connection that keeps up 
                with everything you do online.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900">Perfect For Your Home</h4>
              <p className="text-gray-600">
                Got a house full of tech-lovers? Or just need basic browsing? We'll match you with a package that 
                works for your household.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900">Future-Ready Connection</h4>
              <p className="text-gray-600">
                Stay ahead of the curve with connections that can handle whatever tech throws at you next - from 
                smart home gadgets to crystal-clear streaming.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}