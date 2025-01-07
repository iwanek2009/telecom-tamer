import React from 'react';
import { Wifi, Home, Gamepad2, Video, Activity, Router } from 'lucide-react';

const BroadbandSpeed = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 id="choose-speed" className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Wybór odpowiedniej prędkości internetu stacjonarnego
          </h2>

          {/* Find Your Perfect Speed */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Znajdź idealną prędkość</h3>
            <p className="text-gray-700 mb-4">
              Twoja idealna prędkość internetu zależy od dwóch kluczowych czynników:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 ml-4">
              <li>Liczby podłączonych urządzeń w domu</li>
              <li>Zwyczajów korzystania z internetu w Twoim gospodarstwie domowym</li>
            </ul>
          </div>

          {/* Understanding Usage Patterns */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Zrozumienie wzorców użytkowania</h3>
            <p className="text-gray-700 mb-4">
              Dom rodzinny lub mieszkanie współdzielone zazwyczaj potrzebuje większej prędkości, ponieważ wiele urządzeń łączy się jednocześnie. Będziesz potrzebować wyższych prędkości, jeśli w Twoim domu:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Video className="w-5 h-5" />
                <span>Oglądacie treści w 4K</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Home className="w-5 h-5" />
                <span>Pracujecie zdalnie</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Gamepad2 className="w-5 h-5" />
                <span>Gracie w gry online</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Video className="w-5 h-5" />
                <span>Regularnie korzystacie z rozmów wideo</span>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Wskazówki dotyczące prędkości</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <Wifi className="w-5 h-5" />
                <span>Średnia prędkość w UK: 69Mbps (odpowiednia dla 3-4 użytkowników)</span>
              </li>
              <li className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                <span>Gospodarstwa domowe o intensywnym użytkowaniu: zalecane 100Mbps+</span>
              </li>
              <li className="flex items-center gap-2">
                <Router className="w-5 h-5" />
                <span>Pojedynczy użytkownik/podstawowe przeglądanie: wystarczy 30-50Mbps</span>
              </li>
            </ul>
          </div>

          {/* Check Your Current Speed */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sprawdź swoją obecną prędkość</h3>
            <p className="text-gray-700 mb-4">Aby zmierzyć wydajność swojego obecnego łącza:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>Wykonaj test prędkości będąc w domu</li>
              <li>Połącz się bezpośrednio z routerem Wi-Fi</li>
              <li>Testuj o różnych porach dnia</li>
              <li>Porównaj z dostępnymi ofertami w Twojej okolicy</li>
            </ol>
            <p className="text-sm text-gray-600 mt-4 italic">
              Uwaga: Testy prędkości pokazują wartość chwilową - rzeczywista prędkość może się zmieniać w ciągu dnia.
            </p>
          </div>

          {/* Available Speeds */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Available Speeds in Your Area</h3>
            <p className="text-gray-700 mb-4">The fastest broadband options depend on your location:</p>
            <ul className="space-y-3 text-gray-700">
              <li>• Full fibre: Available to 65% of homes, offering the fastest and most reliable speeds</li>
              <li>• Virgin Media network: Ultrafast speeds in selected areas</li>
              <li>• Part-fibre: Widely available but speeds vary by distance</li>
              <li>• Standard broadband: Available almost everywhere but slower</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Remember:</strong> While ultrafast options like full fibre offer the highest speeds, 
              part-fibre connections are still suitable for most households' needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BroadbandSpeed;
