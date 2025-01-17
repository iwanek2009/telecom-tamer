import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { CitystyleHero } from '@/components/templates/citystyle/CitystyleHero';
import { CitystyleFeatureGrid } from '@/components/templates/citystyle/CitystyleFeatureGrid';
import { CitystyleFeatureCard } from '@/components/templates/citystyle/CitystyleFeatureCard';
import { Tv, Wifi, PoundSterling } from 'lucide-react';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

const BroadbandTVLiverpool = () => {
  const { data: locationContent } = useQuery({
    queryKey: ['location-content', 'Liverpool TV'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('location_content')
        .select('*')
        .eq('location', 'Liverpool TV')
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  const heroAccordionItems = [
    {
      title: "Why compare TV & broadband bundles?",
      content: "Different providers offer varying channel packages and internet speeds. Compare to find the best value for your entertainment needs.",
      linkText: "View all deals",
      linkHref: "#compare-deals"
    },
    {
      title: "What packages are available?",
      content: "Liverpool has excellent coverage with packages including Sky, Virgin Media, and BT. Check availability in your area.",
      linkText: "Check packages",
      linkHref: "#packages"
    },
    {
      title: "How much can I save?",
      content: "By comparing providers, you could save up to 40% on your TV and broadband package. Many providers offer special bundle deals.",
      linkText: "See savings",
      linkHref: "#savings"
    }
  ];

  return (
    <CitystyleTemplate>
      <Helmet>
        <title>{locationContent?.meta_title || 'Liverpool TV & Internet Packages'}</title>
        <meta 
          name="description" 
          content={locationContent?.meta_description || 'Compare TV and internet packages in Liverpool'}
        />
      </Helmet>

      <CitystyleHero
        title={locationContent?.title || 'Liverpool TV & Internet Packages'}
        subtitle={locationContent?.subtitle || 'Find the perfect entertainment bundle for your Liverpool home'}
        image="/lovable-uploads/1df43293-e821-4ff4-b82c-d81a1d949fb4.png"
        imageAlt={locationContent?.hero_image_alt || 'Liverpool TV and internet packages'}
        accordionItems={heroAccordionItems}
      />

      <CitystyleContent>
        <CitystyleFeatureGrid
          title="Why Choose Our Liverpool TV & Internet Comparison?"
          subtitle="Find the perfect entertainment package for your Liverpool home"
        >
          <CitystyleFeatureCard
            icon={Tv}
            title="Entertainment"
            description="Access hundreds of channels and on-demand content"
          />
          <CitystyleFeatureCard
            icon={Wifi}
            title="Fast Internet"
            description="Stream, game and browse with ultrafast broadband"
          />
          <CitystyleFeatureCard
            icon={PoundSterling}
            title="Best Value"
            description="Compare bundle deals from £35/month with exclusive discounts"
          />
        </CitystyleFeatureGrid>

        <div id="compare-deals" className="mt-12">
          <StickeeWidget widgetId="smartfony-91" />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default BroadbandTVLiverpool;