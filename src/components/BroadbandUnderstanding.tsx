import React from 'react';
import { Wifi, Monitor, Gamepad2, MessageCircle, ShoppingCart, Video, Cable, Router, Satellite } from 'lucide-react';

const BroadbandUnderstanding = () => {
  return (
    <section className="bg-gradient-to-br from-[#40E0D0] via-[#40E0D0]/80 to-[#98F5E1] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
            Internet stacjonarny w UK : Przewodnik po internecie domowym
          </h2>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-black mb-4">Co to jest internet stacjonarny?</h3>
            <p className="text-gray-700 mb-6">
              Internet stacjonarny to stałe połączenie internetowe w Twoim domu, które zapewnia dostęp do usług online poprzez infrastrukturę sieciową dostawcy. W zależności od technologii, może być dostarczany przez tradycyjną linię telefoniczną lub nowoczesne łącze światłowodowe. Sygnał trafia do routera Wi-Fi, który rozdziela internet bezprzewodowo w całym domu.
            </p>
            
            <h4 className="text-lg font-semibold text-black mb-4">Z internetem stacjonarnym możesz:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {[
                { text: 'Oglądać filmy i programy TV', icon: Monitor },
                { text: 'Pracować z domu', icon: Wifi },
                { text: 'Grać w gry online', icon: Gamepad2 },
                { text: 'Korzystać z mediów społecznościowych', icon: MessageCircle },
                { text: 'Robić zakupy online', icon: ShoppingCart },
                { text: 'Prowadzić rozmowy wideo z rodziną i przyjaciółmi', icon: Video }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-700">
                  <item.icon className="w-5 h-5 text-black" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <h3 className="text-2xl font-bold text-black mb-6">Dostępne rodzaje internetu stacjonarnego w UK:</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Part-Fibre Broadband */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cable className="w-6 h-6 text-black" />
                <h4 className="text-xl font-semibold text-black">Part-Fibre Broadband</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Dostępny dla 98% domów w UK</li>
                <li>• Oferuje prędkości 30-70Mbps</li>
                <li>• Najpopularniejszy typ w UK</li>
                <li>• Znany również jako "fibre to the cabinet"</li>
              </ul>
            </div>

            {/* Full Fibre Broadband */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Router className="w-6 h-6 text-black" />
                <h4 className="text-xl font-semibold text-black">Full Fibre Broadband</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Dostępny dla 69% domów w UK</li>
                <li>• Ultraszybkie prędkości od 100Mbps do 1Gbps</li>
                <li>• Bezpośrednie połączenie światłowodowe do domu</li>
                <li>• Nazywany też "fibre to the premises"</li>
              </ul>
            </div>

            {/* Virgin Media Cable */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cable className="w-6 h-6 text-black" />
                <h4 className="text-xl font-semibold text-black">Virgin Media Cable</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Zasięg w 60% domów w UK</li>
                <li>• Prędkości do 1Gbps</li>
                <li>• Niezależna sieć światłowodowa</li>
                <li>• Głównie dostępny w obszarach miejskich</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Satellite className="w-6 h-6 text-black" />
              <h4 className="text-xl font-semibold text-black">Alternatywne opcje:</h4>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Internet domowy 4G/5G:</strong> Doskonały backup lub główne połączenie tam, gdzie światłowód nie jest dostępny</li>
              <li>• <strong>Standardowy ADSL:</strong> Podstawowe prędkości 10Mbps przez tradycyjne linie telefoniczne</li>
              <li>• <strong>Internet satelitarny:</strong> Dostępny wszędzie z czystym widokiem na niebo, idealny dla odległych lokalizacji</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandUnderstanding;
