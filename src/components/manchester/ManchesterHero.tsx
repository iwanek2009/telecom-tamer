import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';

export const ManchesterHero = () => {
  const heroAccordionItems = [
    {
      title: "Fast Fibre Coverage",
      content: "Manchester has excellent fibre coverage with speeds up to 1Gbps available through providers like Virgin Media, BT and Hyperoptic.",
      linkText: "Check availability",
      linkHref: "#availability"
    },
    {
      title: "Local Providers",
      content: "Compare deals from major providers like Virgin Media, BT, Sky and local providers serving the Manchester area.",
      linkText: "Compare providers",
      linkHref: "#providers"
    },
    {
      title: "Installation Time",
      content: "Most providers offer quick installation within 2 weeks, with some offering next-day installation in eligible areas.",
      linkText: "Learn more",
      linkHref: "#installation"
    }
  ];

  return (
    <CitystyleHero
      title="Broadband Deals in Manchester"
      subtitle="Find the fastest and most reliable broadband packages in Manchester. Compare deals from leading providers to get the best value for your home."
      image="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
      imageAlt="Manchester cityscape with modern internet connectivity"
      accordionItems={heroAccordionItems}
    />
  );
};