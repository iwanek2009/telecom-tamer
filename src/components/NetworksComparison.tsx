import React from 'react';

const NetworksComparison = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Compare all major networks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All networks and providers. Compare mobile and broadband deals from the UK's biggest companies in one place
          </p>
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/1df43293-e821-4ff4-b82c-d81a1d949fb4.png" alt="Virgin Media" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/0f11a629-d705-472e-ba5c-716a0e72ade3.png" alt="Hyperoptic" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/56a8e839-7ef6-4d05-82f0-824ec8bf2ad2.png" alt="EE" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/83803cc0-dcb1-4241-9ce6-6afef29e2844.png" alt="BeFibre" className="h-12 w-auto object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/e724af92-415d-41db-a33b-47e4678d1b7f.png" alt="Rebel" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/dfd76b78-bedb-4918-bead-88ce4ab74ed4.png" alt="Sky" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/459ba14c-4121-4810-ac17-348d1cea81d7.png" alt="BT" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/439da46b-b50f-449e-b131-2b851962c927.png" alt="Vodafone" className="h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworksComparison;