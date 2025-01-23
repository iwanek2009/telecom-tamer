import { CitystyleTemplate } from '@/components/templates/citystyle/CitystyleTemplate';
import { CitystyleContent } from '@/components/templates/citystyle/CitystyleContent';
import { Helmet } from 'react-helmet';
import StickeeWidget from '@/components/StickeeWidget';
import { ManchesterHero } from '@/components/manchester/ManchesterHero';
import { ManchesterBenefits } from '@/components/manchester/ManchesterBenefits';
import { ManchesterGuide } from '@/components/manchester/ManchesterGuide';
import { ManchesterConnectionTypes } from '@/components/manchester/ManchesterConnectionTypes';
import { ManchesterFAQ } from '@/components/manchester/ManchesterFAQ';

const ManchesterBroadband = () => {
  return (
    <CitystyleTemplate>
      <Helmet>
        <title>Manchester Broadband Deals | Compare Internet Packages</title>
        <meta 
          name="description" 
          content="Looking for speedy, reliable internet in Manchester? Discover how to compare broadband deals, find the right speeds, and enjoy the best value for your home or office."
        />
      </Helmet>

      <ManchesterHero />

      <CitystyleContent>
        <ManchesterBenefits />

        <div className="mt-12" id="compare-deals">
          <StickeeWidget 
            widgetId="smartfony-91"
          />
        </div>

        <ManchesterGuide />
        <ManchesterConnectionTypes />
        <ManchesterFAQ />

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Broadband Deal?</h3>
          <p className="text-lg mb-6">
            Use our comparison tool above to discover the best broadband packages available in your area of Manchester.
          </p>
        </div>
      </CitystyleContent>
    </CitystyleTemplate>
  );
};

export default ManchesterBroadband;