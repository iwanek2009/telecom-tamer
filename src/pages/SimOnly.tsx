import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SimHeroSection } from '@/components/sim/SimHeroSection';
import { SimPlansSection } from '@/components/sim/SimPlansSection';
import { SimBenefitsSection } from '@/components/sim/SimBenefitsSection';
import { SimWhySection } from '@/components/sim/SimWhySection';
import { SimGuideSection } from '@/components/sim/SimGuideSection';

const SimOnly = () => {
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