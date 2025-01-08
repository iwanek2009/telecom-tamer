import { Header } from '../components/Header';
import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import BroadbandUnderstanding from '../components/BroadbandUnderstanding';
import BroadbandFilters from '../components/BroadbandFilters';
import BroadbandOffers from '../components/BroadbandOffers';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';

const InternetUK = () => {
  const [isValueOpen, setIsValueOpen] = useState(false);
  const [isSpeedOpen, setIsSpeedOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Internet w UK | Wyszukiwarka ofert internetu stacjonarnego</title>
        <meta 
          name="description" 
          content="Wyszukiwarka internetu stacjonarnego w UK | Porównujemy oferty wszystkich dostawców w twojej okolicy | Podaj swój kod pocztowy i sprawdź !"
        />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#3FC1C9]">
        <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-0">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  Wyszukiwarka internetu w UK
                </h1>
                <p className="text-xl text-gray-700 mt-4 mb-6">
                  Znajdź tańsze oferty internetu w Twojej okolicy - zaoszczędź do £163 rocznie!
                </p>
              </div>

              {/* Tips Sections */}
              <div className="space-y-3">
                <Collapsible
                  open={isValueOpen}
                  onOpenChange={setIsValueOpen}
                  className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                    <h2 className="text-lg font-semibold text-gray-900">Jak uzyskać internet w najlepszej cenie?</h2>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isValueOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-gray-700 text-sm mb-2">
                      Konieczne jest porównanie różnych dostawców i sprawdzenie, jakie prędkości są faktycznie dostępne pod Twoim adresem. Następnie sprawdź całkowity koszt pakietu, w tym opłaty za instalację, sprzęt oraz czy ceny wzrosną w trakcie trwania umowy. Aby uzyskać więcej informacji, przeczytaj nasz poradnik o tym, jak oszczędzać na rachunku za internet.
                    </p>
                    <a href="#choose-provider" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1">
                      Przeczytaj nasz poradnik
                      <ArrowRight size={14} />
                    </a>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={isSpeedOpen}
                  onOpenChange={setIsSpeedOpen}
                  className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full p-4 flex items-center justify-between text-left">
                    <h2 className="text-lg font-semibold text-gray-900">Jakiej prędkości internetu naprawdę potrzebujesz?</h2>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isSpeedOpen ? 'transform rotate-180' : ''}`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 pb-4">
                    <p className="text-gray-700 text-sm mb-2">
                      Idealna prędkość internetu zależy od tego, ile osób korzysta z internetu w Twoim domu i do czego go używasz, np. do streamingu czy gier. Następnie weź pod uwagę godziny szczytu wykorzystania internetu w Twoim gospodarstwie domowym oraz czy potrzebujesz stale wysokich prędkości do pracy zdalnej lub innych aktywności.
                    </p>
                    <a href="#choose-speed" className="text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center gap-1">
                      Przeczytaj nasz poradnik
                      <ArrowRight size={14} />
                    </a>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="hidden md:flex items-center justify-center">
              <img 
                src="/lovable-uploads/a3e27fb1-bf74-4467-abae-439ef1db7051.png"
                alt="Person using tablet" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Jak znaleźć najlepszy internet?
            </h2>
            <p className="text-lg text-gray-600">
              Przeprowadzimy Cię przez prosty proces w trzech krokach:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
              <div className="flex justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sprawdź dostępność</h3>
              <p className="text-gray-600">
                Wprowadź swój kod pocztowy, aby zobaczyć dostępne pakiety internetu w Twojej okolicy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
              <div className="flex justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wybierz pakiet</h3>
              <p className="text-gray-600">
                Porównaj oferty według prędkości, ceny, dostawcy lub długości umowy.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20 text-center">
              <div className="flex justify-center mb-6">
                <ArrowRight className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zamów online</h3>
              <p className="text-gray-600">
                Złóż zamówienie przez stronę dostawcy. Masz 14 dni na zmianę decyzji bez dodatkowych opłat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-12 gap-8">
          <BroadbandFilters />
          <BroadbandOffers />
        </div>
      </main>

      <BroadbandUnderstanding />
      <Footer />
    </div>
  );
};

export default InternetUK;