import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SimHeroSection } from '@/components/sim/SimHeroSection';
import { SimBenefitsSection } from '@/components/sim/SimBenefitsSection';
import { SimGuideSection } from '@/components/sim/SimGuideSection';
import { StickeeWidgetContent } from '@/components/StickeeWidgetContent';
import { useEffect } from 'react';
import { loadStickeeScript, cleanupStickeeScript } from '@/utils/stickeeLoader';

const SimOnly = () => {
  useEffect(() => {
    document.title = "Compare SIM Only Deals | Save up to £352 | All Networks";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare SIM only deals from top UK networks. Find plans from £1.58/month with 5G included. Switch today and save up to £352 yearly on your mobile bills');
    }

    // Initialize Stickee widget
    cleanupStickeeScript();
    loadStickeeScript();

    return () => {
      cleanupStickeeScript();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SimHeroSection />
      
      {/* Stickee Widget */}
      <div className="container mx-auto px-4 py-8">
        <StickeeWidgetContent 
          widgetId="smartfony-90" 
          filters='{"hardware_types":["SIM_ONLY"]}'
        />
      </div>

      <SimBenefitsSection />
      <SimGuideSection />
      <Footer />
    </div>
  );
};

export default SimOnly;