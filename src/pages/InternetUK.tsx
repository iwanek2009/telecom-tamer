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