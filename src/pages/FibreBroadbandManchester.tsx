import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { ManchesterHero } from '@/components/manchester/ManchesterHero';
import { ManchesterBenefits } from '@/components/manchester/ManchesterBenefits';
import { ManchesterGuide } from '@/components/manchester/ManchesterGuide';
import { ManchesterConnectionTypes } from '@/components/manchester/ManchesterConnectionTypes';
import { ManchesterFAQ } from '@/components/manchester/ManchesterFAQ';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';

const FibreBroadbandManchester = () => {
  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Fibre Broadband Manchester | Compare Fast Internet Deals</title>
        <meta 
          name="description" 
          content="Looking for fibre broadband in Manchester? Compare ultra-fast packages from top providers. Get reliable speeds for streaming, gaming & home working."
        />
      </Helmet>

      <ManchesterHero />

      <CitystyleContent>
        <ManchesterBenefits />
        <ManchesterGuide />
        <ManchesterConnectionTypes />
        <ManchesterFAQ />

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
            filters='{"connection_types": ["FTTP"]}'
          />
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default FibreBroadbandManchester;