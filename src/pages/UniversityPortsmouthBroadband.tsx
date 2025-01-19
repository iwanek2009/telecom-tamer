import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Wifi, GraduationCap, Clock, Laptop } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const UniversityPortsmouthBroadband = () => {
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
        <title>University of Portsmouth Student Broadband | Internet Deals</title>
        <meta 
          name="description" 
          content="Find student-friendly broadband near University of Portsmouth. Compare flexible packages perfect for student accommodation. Get fast internet for studying & streaming."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband at University of Portsmouth"
        subtitle="Compare student-friendly broadband deals with flexible contracts. Perfect for term-time accommodation near campus."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="University of Portsmouth student broadband"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <div className="mb-12" id="compare-deals">
          <StickeeWidget widgetId="smartfony-91" />
        </div>

        <section className="space-y-12 mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Internet Packages for University Students</h2>
            <p className="text-gray-600">
              We offer a range of broadband options to fit every student's needs. Whether you're living in halls, shared accommodation, or a private apartment, there's a package for you.
            </p>
          </div>

          <CitystyleFeatureGrid>
            <CitystyleFeatureCard
              icon={Wifi}
              title="Basic Student Broadband"
              description="Affordable and reliable, ideal for light users who need internet for studying and social media."
            />
            <CitystyleFeatureCard
              icon={Laptop}
              title="Superfast Student Fibre"
              description="High-speed internet for streaming, gaming, and multiple connected devices in shared accommodation."
            />
            <CitystyleFeatureCard
              icon={GraduationCap}
              title="Ultimate Student Bundle"
              description="Combine broadband with streaming services like Netflix or Disney+ for the ultimate entertainment experience."
            />
          </CitystyleFeatureGrid>

          <Card className="p-8 bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD]">
            <h3 className="text-2xl font-bold mb-6">Why High-Speed Internet Matters for Students</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Academic Success</h4>
                <p className="text-gray-600">Seamlessly access online lectures, research materials, and collaborative tools.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Stay Connected</h4>
                <p className="text-gray-600">Stay in touch with family and friends via video calls or social media.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Entertainment</h4>
                <p className="text-gray-600">Enjoy buffer-free streaming, online gaming, and music without interruptions.</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Smart Devices</h4>
                <p className="text-gray-600">Connect smart tech like voice assistants, smart lights, and more.</p>
              </div>
            </div>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Compare Student Broadband Packages</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Package</TableHead>
                  <TableHead>Speed</TableHead>
                  <TableHead>Best For</TableHead>
                  <TableHead>Key Features</TableHead>
                  <TableHead>Monthly Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Basic Broadband</TableCell>
                  <TableCell>Up to 36Mbps</TableCell>
                  <TableCell>Browsing and light streaming</TableCell>
                  <TableCell>Unlimited data, budget-friendly</TableCell>
                  <TableCell>From £20/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Superfast Fibre</TableCell>
                  <TableCell>Up to 67Mbps</TableCell>
                  <TableCell>Streaming and multiple devices</TableCell>
                  <TableCell>High-speed fibre, shared spaces</TableCell>
                  <TableCell>From £28/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Ultimate Fibre Pro</TableCell>
                  <TableCell>Up to 150Mbps</TableCell>
                  <TableCell>Gaming and heavy usage</TableCell>
                  <TableCell>Low-latency, ultra-reliable speeds</TableCell>
                  <TableCell>From £39/month</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">All-Inclusive Bundle</TableCell>
                  <TableCell>Up to 300Mbps</TableCell>
                  <TableCell>Entertainment and smart devices</TableCell>
                  <TableCell>Includes streaming add-ons</TableCell>
                  <TableCell>From £55/month</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-gray-500 italic">Prices are dynamic and subject to change. Please visit our website for the latest offers.</p>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Benefits of Our Student Broadband</h3>
            <p className="mb-6">Our broadband is designed to meet the unique demands of student life at the University of Portsmouth:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <h4 className="font-semibold">Flexible Contracts</h4>
                <p className="text-gray-600">Short-term and academic-year contracts available.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Student Discounts</h4>
                <p className="text-gray-600">Exclusive offers and discounts for university students.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-gray-600">Dedicated assistance to resolve any issues quickly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Fast Installation</h4>
                <p className="text-gray-600">Get connected within days of moving in.</p>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <p className="text-lg mb-4">
              Don't let slow or unreliable internet hold you back. Check out our student broadband packages today and enjoy uninterrupted connectivity throughout your time at the University of Portsmouth!
            </p>
          </div>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default UniversityPortsmouthBroadband;