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
            Is full-fibre available throughout Manchester?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Availability varies by neighborhood, but coverage is expanding. Use a postcode checker to see if full-fibre has reached your street.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Will switching providers disrupt my internet for a long time?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Most switches are quick, with minimal downtime. Under new switching regulations, your new provider often handles the transfer seamlessly.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Which broadband speed is suitable for remote working?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Speeds above 50Mbps generally suffice for video calls, cloud tasks, and large file sharing. If multiple users are online simultaneously, you may want 100Mbps or more.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Do I need a landline for fibre broadband?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Many fibre packages still include a phone line, but some providers offer broadband-only deals if you don't need traditional phone service.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            What should I do if my speed is lower than advertised?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            First, troubleshoot by repositioning your router or updating your device software. If issues persist, contact your provider to investigate or consider switching.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Can students access special broadband offers?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Yes. Some providers run student-focused promotions, especially in university towns like Manchester, often featuring shorter contracts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Are fibre broadband deals usually more expensive than standard broadband?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            They can be slightly pricier, but the difference is shrinking. In many cases, the performance boost is well worth the added cost.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <p className="mt-8 text-lg text-gray-700 text-center">
        Compare fibre broadband deals in Manchester today and enjoy speeds that keep you connected—no matter what your household or business demands!
      </p>
    </div>
  );
};