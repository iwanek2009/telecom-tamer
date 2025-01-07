import React from 'react';
import { Search, Filter, CreditCard } from 'lucide-react';

const BroadbandComparisonSteps = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Twoja idealna oferta internetu jest na wyciągnięcie ręki
          </h2>
          <p className="text-lg text-gray-600">
            Przeprowadzimy Cię przez prosty proces składający się z trzech kroków:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
            <div className="flex justify-center mb-6">
              <Search className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Znajdź dostępne oferty</h3>
            <p className="text-gray-600">
              Po prostu wpisz swój kod pocztowy, aby zobaczyć, jakie pakiety internetu są dostępne w Twojej okolicy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
            <div className="flex justify-center mb-6">
              <Filter className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wybierz idealny pakiet</h3>
            <p className="text-gray-600">
              Sortuj i filtruj wyniki według tego, co jest dla Ciebie ważne - prędkość, cena, dostawca lub długość umowy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
            <div className="flex justify-center mb-6">
              <CreditCard className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Zmieniaj z pewnością</h3>
            <p className="text-gray-600">
              Dokończ zamówienie przez stronę dostawcy. Nie martw się - będziesz mieć 14 dni na zmianę zdania, bez żadnych opłat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandComparisonSteps;