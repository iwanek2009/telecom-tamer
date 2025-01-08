import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';

const BroadbandGuide = () => {
  return (
    <section className="bg-white py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="choose-provider" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Jak wybrać odpowiedniego dostawcę internetu w UK
          </h2>
          
          <p className="text-gray-600 mb-6">
            Porównując dostawców internetu, ważne jest sprawdzenie ich wyników w kluczowych obszarach. 
            Idealny dostawca powinien odpowiadać Twoim konkretnym potrzebom w kilku aspektach, w tym:
          </p>

          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              'Prędkość i stabilność internetu',
              'Ogólna opłacalność',
              'Niezawodność usługi i czas działania',
              'Jakość obsługi klienta',
              'Opcje pakietów TV, jeśli są potrzebne',
              'Jakość i funkcje sprzętu',
              'Stabilność cen w trakcie umowy'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-600 mb-8">
            Najlepszym podejściem jest ustalenie priorytetów, które funkcje są dla Ciebie najważniejsze, 
            a następnie porównanie dostawców na podstawie tych konkretnych potrzeb. 
            Warto sprawdzić niezależne recenzje i nagrody, aby ocenić wydajność dostawcy.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-500" />
              Ważne kwestie do rozważenia:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Większość dostawców wprowadza roczne podwyżki cen w trakcie trwania umowy</li>
              <li>• Niektórzy dostawcy oferują umowy ze stałą ceną, ale mogą mieć ograniczony obszar zasięgu</li>
              <li>• Idealnym momentem na zmianę jest zakończenie obecnej umowy</li>
              <li>• Zmiana w trakcie umowy zazwyczaj wiąże się z opłatami za wcześniejsze zakończenie</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Proces zmiany:</h3>
            <ol className="space-y-2 text-gray-700">
              <li>1. Wybierz preferowany pakiet internetowy</li>
              <li>2. Podaj swoje dane i potwierdź wybraną ofertę</li>
              <li>3. Przejrzyj wszystkie opłaty i warunki umowy</li>
              <li>4. Wybierz preferowaną datę instalacji</li>
              <li>5. Otrzymaj potwierdzenie i szczegóły aktywacji</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandGuide;