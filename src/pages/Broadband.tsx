import { Header } from '../components/Header';
import { useState } from 'react';
import { BroadbandHero } from '../components/broadband/BroadbandHero';
import { BroadbandFilters } from '../components/broadband/BroadbandFilters';
import { BroadbandOffers } from '../components/broadband/BroadbandOffers';

const Broadband = () => {
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <BroadbandHero 
        isValueOpen={isValueOpen}
        setIsValueOpen={setIsValueOpen}
        isSpeedOpen={isSpeedOpen}
        setIsSpeedOpen={setIsSpeedOpen}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-12 gap-8">
          <BroadbandFilters />
          <BroadbandOffers />
        </div>
      </main>
    </div>
  );
};

export default Broadband;