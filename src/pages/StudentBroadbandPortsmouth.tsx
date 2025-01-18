import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, Users, Banknote, Laptop, Monitor, Home, MapPin, Building2, Package, Network, Zap, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const StudentBroadbandPortsmouth = () => {
  const heroAccordionItems = [
    {
      title: "Student Deals",
      content: "Find flexible contracts perfect for term-time accommodation.",
      linkText: "View student deals",
      linkHref: "#student-deals"
    },
    {
      title: "Fast Setup",
      content: "Quick installation to get you connected for your studies.",
      linkText: "Check availability",
      linkHref: "#availability"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Student Broadband Portsmouth | Compare University Area Deals</title>
        <meta 
          name="description" 
          content="Find the perfect student broadband in Portsmouth. Compare flexible packages near university areas. Get fast internet ideal for studying, streaming & shared houses."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband in Portsmouth"
        subtitle="Compare student-friendly broadband deals with flexible contracts. Perfect for shared houses and student accommodation."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portsmouth student broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <div className="mt-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <div className="max-w-7xl mx-auto mt-16 space-y-16">
          <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Student Broadband?</h2>
            <p className="text-gray-700 mb-8">
              Life at University of Portsmouth needs internet that keeps up with your studies and social life. Whether you're in halls near Guildhall, sharing a house in Southsea, or living in student flats around campus, we'll help you find the right connection.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Areas Coverage</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-xl">Guildhall Area</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Fast lecture streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Library access
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Group work ready
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Home className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-xl">Southsea Student Zone</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Shared house deals
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Flexible contracts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Quick installation
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-xl">City Centre Halls</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Ultra-fast options
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Move-in ready
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Split payments
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Laptop className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-xl">Online Learning</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Virtual lectures</li>
                  <li>Research downloads</li>
                  <li>Group projects</li>
                  <li>Cloud storage</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-xl">Entertainment</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Netflix & streaming</li>
                  <li>Online gaming</li>
                  <li>Social media</li>
                  <li>Video calls home</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  <h4 className="font-semibold text-xl">Shared Houses</h4>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>Multiple devices</li>
                  <li>Split billing</li>
                  <li>Fair usage</li>
                  <li>Gaming friendly</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Finding Your Student Connection</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <MapPin className="w-12 h-12 text-primary" />
                  <h4 className="font-semibold">Step 1: Location Check</h4>
                  <p className="text-gray-700">Different student areas have different options - from Guildhall to Southsea</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <Home className="w-12 h-12 text-primary" />
                  <h4 className="font-semibold">Step 2: House Type</h4>
                  <p className="text-gray-700">Tell us if it's halls, shared house, or private accommodation</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                  <Package className="w-12 h-12 text-primary" />
                  <h4 className="font-semibold">Step 3: Pick Your Package</h4>
                  <p className="text-gray-700">Choose from our verified student deals</p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Connected?</h3>
              <p className="text-gray-700 mb-6">Pop your student address postcode below to see all available deals near University of Portsmouth.</p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <Input 
                    type="text" 
                    placeholder="Enter your postcode..." 
                    className="flex-1"
                  />
                  <Button>
                    Check Deals
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Tips</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Check if bills are included in your rent
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Consider contract length vs. tenancy
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Look for student-specific deals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  Split costs with housemates
                </li>
              </ul>
            </div>
          </section>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default StudentBroadbandPortsmouth;