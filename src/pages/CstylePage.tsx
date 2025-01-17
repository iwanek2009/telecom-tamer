import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CstyleTemplate } from '../components/templates/cstyle/CstyleTemplate';
import { CstyleContent } from '../components/templates/cstyle/CstyleContent';
import { CstyleHero } from '../components/templates/cstyle/CstyleHero';
import BroadbandComparisonSteps from '../components/BroadbandComparisonSteps';
import BroadbandGuide from '../components/BroadbandGuide';
import BroadbandUnderstanding from '../components/BroadbandUnderstanding';
import BroadbandSpeed from '../components/BroadbandSpeed';
import StickeeWidget from '../components/StickeeWidget';
import { supabase } from "@/integrations/supabase/client";

interface LocationContent {
  title: string;
  subtitle: string;
  meta_title: string;
  meta_description: string;
  hero_image_alt: string;
  value_tip_title: string;
  value_tip_content: string;
  speed_tip_title: string;
  speed_tip_content: string;
}

const CstylePage = () => {
  const [content, setContent] = useState<LocationContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocationContent = async () => {
      try {
        const { data, error } = await supabase
          .from('location_content')
          .select('*')
          .eq('location', 'default')
          .maybeSingle();

        if (error) {
          console.error('Error fetching location content:', error);
          return;
        }

        if (data) {
          setContent(data);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocationContent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!content) {
    return <div>No content found</div>;
  }

  return (
    <CstyleTemplate>
      <Helmet>
        <title>{content.meta_title}</title>
        <meta 
          name="description" 
          content={content.meta_description}
        />
      </Helmet>

      <CstyleHero
        title={content.title}
        subtitle={content.subtitle}
        valueTipTitle={content.value_tip_title}
        valueTipContent={content.value_tip_content}
        speedTipTitle={content.speed_tip_title}
        speedTipContent={content.speed_tip_content}
        heroImageAlt={content.hero_image_alt}
      />

      <BroadbandComparisonSteps />

      <CstyleContent>
        <StickeeWidget />
        <BroadbandGuide />
        <BroadbandUnderstanding />
        <BroadbandSpeed />
      </CstyleContent>
    </CstyleTemplate>
  );
};

export default CstylePage;