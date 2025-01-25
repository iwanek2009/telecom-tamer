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
            Can I get premium channels like Sky Sports or BT Sport with an internet bundle?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Yes, many providers offer sports add-ons or specialized packages that include premium sports channels alongside broadband.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Is it cheaper to combine TV and internet than to buy them separately?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Often, yes. Bundling can lower overall monthly costs, especially if you need both services anyway. However, it's wise to compare standalone plans versus bundles to be sure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            How long does installation usually take?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Depending on the provider and the type of connection, installation can range from a self-install kit (a few minutes) to an engineer visit (several hours).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Do I have to get a landline with my TV & internet package?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            Many bundles do include a landline by default, but broadband-only or internet-plus-TV packages without a phone line are increasingly common.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            What happens if my internet speeds are lower than advertised?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            First, troubleshoot by repositioning your router or checking for device conflicts. If speeds remain poor, contact your provider for assistance. Some offer speed guarantees or refunds for persistent issues.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Can I switch providers mid-contract if I find a better deal?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            You can, but you'll likely face early termination fees. Weigh those costs against the potential savings from switching to a cheaper or more suitable package.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="bg-white rounded-xl shadow-sm">
          <AccordionTrigger className="text-lg font-semibold px-6">
            Are there social tariffs available for TV & internet bundles?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 px-6 pb-4">
            A few providers have special discounts for customers on specific benefits or low incomes. Check eligibility criteria on provider websites or via comparison tools.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <p className="mt-8 text-lg text-gray-700 text-center">
        Compare Manchester TV & Internet bundles today and discover how a single package can elevate your home entertainment—without breaking the bank!
      </p>
    </div>
  );
};