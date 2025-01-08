import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

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
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Wyszukiwarka ofert internetu stacjonarnego</h1>
        <p className="text-lg mb-4">Porównaj oferty wszystkich dostawców w twojej okolicy.</p>
        <input
          type="text"
          placeholder="Wpisz swój kod pocztowy"
          className="border rounded-md p-2 w-full md:w-1/2"
        />
        <button className="mt-4 bg-blue-500 text-white rounded-md p-2">Szukaj</button>
      </div>
      <Footer />
    </div>
  );
};

export default InternetUK;
