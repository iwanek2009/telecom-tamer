import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SimHeroSection } from '@/components/sim/SimHeroSection';
import { SimPlansSection } from '@/components/sim/SimPlansSection';
import { SimBenefitsSection } from '@/components/sim/SimBenefitsSection';
import { SimWhySection } from '@/components/sim/SimWhySection';
import { SimGuideSection } from '@/components/sim/SimGuideSection';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const SimOnly = () => {
  useEffect(() => {
    // Update page title and meta description
    document.title = "Compare SIM Only Deals | Save up to £352 | All Networks";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Compare SIM only deals from top UK networks. Find plans from £1.58/month with 5G included. Switch today and save up to £352 yearly on your mobile bills');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Compare SIM Only Deals | Save up to £352 | All Networks</title>
        <meta 
          name="description" 
          content="Compare SIM only deals from top UK networks. Find plans from £1.58/month with 5G included. Switch today and save up to £352 yearly on your mobile bills" 
        />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Compare SIM Only Deals | Save up to £352 | All Networks" />
        <meta 
          property="og:description" 
          content="Compare SIM only deals from top UK networks. Find plans from £1.58/month with 5G included. Switch today and save up to £352 yearly on your mobile bills" 
        />
        <meta property="og:image" content="/lovable-uploads/5f6867b6-1a3d-425c-a7ce-4511390a983a.png" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Compare SIM Only Deals | Save up to £352 | All Networks" />
        <meta 
          name="twitter:description" 
          content="Compare SIM only deals from top UK networks. Find plans from £1.58/month with 5G included. Switch today and save up to £352 yearly on your mobile bills" 
        />
        <meta name="twitter:image" content="/lovable-uploads/5f6867b6-1a3d-425c-a7ce-4511390a983a.png" />
      </Helmet>
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