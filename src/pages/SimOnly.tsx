import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SimHeroSection } from '@/components/sim/SimHeroSection';
import { SimPlansSection } from '@/components/sim/SimPlansSection';
import { SimBenefitsSection } from '@/components/sim/SimBenefitsSection';
import { SimWhySection } from '@/components/sim/SimWhySection';
import { SimGuideSection } from '@/components/sim/SimGuideSection';
import { useEffect } from 'react';

const SimOnly = () => {
  useEffect(() => {
    document.title = "Compare SIM Only Deals | Save up to £352 | All Networks";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare SIM only deals from top UK networks. Find plans from £1.58/month with 5G included. Switch today and save up to £352 yearly on your mobile bills');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <SimHeroSection />
      <SimPlansSection />
      <SimBenefitsSection />
      <SimWhySection />
      <SimGuideSection />
      <Footer />
    </div>
  );
};

export default SimOnly;