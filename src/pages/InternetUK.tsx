import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import BroadbandComparisonSteps from '../components/BroadbandComparisonSteps';
import BroadbandSpeed from '../components/BroadbandSpeed';
import BroadbandGuide from '../components/BroadbandGuide';
import BroadbandFilters from '../components/BroadbandFilters';
import BroadbandOffers from '../components/BroadbandOffers';

const InternetUK = () => {
  useEffect(() => {
    document.title = "Internet w UK | Wyszukiwarka ofert internetu stacjonarnego";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Wyszukiwarka internetu stacjonarnego w UK | Porównujemy oferty wszystkich dostawców w twojej okolicy | Wpisz swój kod pocztowy i sprawdź !');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#40E0D0] via-[#40E0D0]/80 to-[#98F5E1] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Znajdź najlepszą ofertę internetu w swojej okolicy
              </h1>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <input
                  type="text"
                  placeholder="Wpisz swój kod pocztowy"
                  className="w-full md:w-2/3 px-4 py-3 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#40E0D0]"
                />
                <button className="mt-4 md:mt-0 md:ml-4 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Sprawdź dostępność
                </button>
              </div>
            </div>
          </div>
        </section>

        <BroadbandComparisonSteps />

        {/* Results Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-6">
              <BroadbandFilters />
              <BroadbandOffers />
            </div>
          </div>
        </section>

        <BroadbandSpeed />
        <BroadbandGuide />
      </main>
      <Footer />
    </div>
  );
};

export default InternetUK;