import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { CitystyleCard } from '@/components/templates/citystyle/CitystyleCard';
import { Wifi, GraduationCap, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import SouthamptonDealsGrid from '@/components/local/SouthamptonDealsGrid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroAccordionItems = [
  {
    title: "Student Deals",
    content: "Portswood offers student-friendly broadband packages with flexible contracts.",
    linkText: "View student deals",
    linkHref: "#student-deals"
  },
  {
    title: "Quick Setup",
    content: "Get connected quickly with student priority installation.",
    linkText: "Installation info",
    linkHref: "#installation"
  }
];

const PortswoodBroadband = () => {
  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Portswood Internet Deals | Student Broadband Offers</title>
        <meta 
          name="description" 
          content="Looking for student-friendly broadband in Portswood? Compare flexible internet packages with short-term contracts. Perfect for university accommodation with fast speeds."
        />
      </Helmet>

      <CitystyleHero
        title="Student Broadband in Portswood"
        subtitle="Find flexible internet packages perfect for student life. Compare short-term contracts with fast, reliable speeds."
        image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
        imageAlt="Portswood student area with modern internet connectivity"
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Key Benefits of Student Broadband in Portswood"
          subtitle="Looking for the perfect student broadband deal in Portswood? Our comprehensive guide breaks down everything you need to know about getting connected, from comparing providers to securing the best student discounts."
        >
          <CitystyleFeatureCard
            icon={GraduationCap}
            title="Student-Specific Packages"
            description="Get access to exclusive 9-month contracts perfectly aligned with the academic year"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Lightning-Fast Speeds"
            description="Enjoy reliable connections up to 1Gbps - perfect for simultaneous streaming, gaming, and study sessions"
          />
          <CitystyleFeatureCard
            icon={Clock}
            title="Flexible Payment Options"
            description="Choose from various payment plans, including monthly and upfront options with student discounts"
          />
        </CitystyleFeatureGrid>

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        <SouthamptonDealsGrid />

        <section className="mt-16 space-y-12">
          <CitystyleCard className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Finding the Right Student Broadband Deal</h2>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Check Availability in Your Area</h3>
              <p className="text-gray-700">Before diving into specific deals, use a postcode checker to see which providers service your Portswood address. Major providers in the area typically include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Virgin Media</li>
                <li>BT</li>
                <li>Sky</li>
                <li>TalkTalk</li>
                <li>Hyperoptic (in select buildings)</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Consider Your Household Needs</h3>
              <p className="text-gray-700">When choosing a broadband package, factor in:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Number of housemates</li>
                <li>Internet usage habits (streaming, gaming, studying)</li>
                <li>Contract length preferences</li>
                <li>Budget constraints</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Popular Student Packages in Portswood</h3>
              <p className="text-gray-700">Most providers offer student-specific deals featuring:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>No setup fees</li>
                <li>Flexible contract lengths</li>
                <li>Free installation</li>
                <li>Optional TV packages</li>
                <li>Gaming-optimized options</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Making the Switch</h3>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Steps to Get Connected</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Compare available providers</li>
                  <li>Choose your preferred package</li>
                  <li>Schedule installation</li>
                  <li>Set up bill-splitting with housemates</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Tips for Smooth Setup</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Book installation early to avoid peak moving periods</li>
                  <li>Have your student ID ready for verification</li>
                  <li>Check if your property needs landlord permission</li>
                  <li>Consider additional equipment needs</li>
                </ul>
              </div>
            </div>
          </CitystyleCard>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can I get a 9-month student contract in Portswood?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, several providers offer 9-month contracts specifically designed for students, including Virgin Media and BT.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  What speed do I need for a student house share?
                </AccordionTrigger>
                <AccordionContent>
                  For a typical student house of 4-5 people, we recommend at least 100Mbps to ensure smooth simultaneous usage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Do I need a TV license for streaming?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you need a TV license if you watch or record live TV programs or use BBC iPlayer, even on a laptop or mobile device.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  Can international students get broadband contracts?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, though you may need to provide additional documentation or pay a deposit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-4">
                <AccordionTrigger className="text-left">
                  What happens to my contract during summer break?
                </AccordionTrigger>
                <AccordionContent>
                  9-month contracts typically end before summer. For 12-month contracts, you'll need to continue paying or arrange early termination.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <CitystyleCard className="bg-primary/5 border-primary/10">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Ready to Get Connected?</h2>
              <p className="text-gray-700">
                Don't miss out on the best student broadband deals in Portswood. Use our comparison tool to find the perfect package for your student house, or contact providers directly for their latest student offers. Remember to have your student ID handy to access exclusive discounts!
              </p>
            </div>
          </CitystyleCard>
        </section>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default PortswoodBroadband;
