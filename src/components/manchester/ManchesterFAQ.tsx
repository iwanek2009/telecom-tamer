import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ManchesterFAQ = () => {
  return (
    <div className="mt-16">
      <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-4xl font-bold mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Can I get full-fibre broadband in all parts of Manchester?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Full-fibre coverage is growing, but availability varies by postcode. Enter your address into a postcode checker to see if you can access FTTP services.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            How do I switch if I'm still in a contract?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Switching mid-contract usually incurs exit fees. However, check your terms or contact your provider—some offer grace periods or promotional waivers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Will I lose internet access during the switch?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Not typically. Most providers coordinate the switch to minimize downtime, though you might experience a brief transition period (usually a few hours).
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};