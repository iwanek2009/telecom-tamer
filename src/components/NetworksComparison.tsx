import React from 'react';

const NetworksComparison = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Compare all major networks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All networks and providers. Compare mobile and broadband deals from the UK's biggest companies in one place
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/439da46b-b50f-449e-b131-2b851962c927.png" alt="Virgin" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/d079fdbc-025f-4a43-9a42-e7681d8a2c62.png" alt="Hyperoptic" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/0f11a629-d705-472e-ba5c-716a0e72ade3.png" alt="EE" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/2ef67520-0a85-45f7-a7ea-4416ba8d3274.png" alt="BeFibre" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/76bf993a-c843-42b8-a65d-514ad0f341cb.png" alt="Gigaclear" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/344a7cb5-6f5b-457c-8775-fd5c12f5b15d.png" alt="TalkTalk" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/aa95f15c-6723-42a1-8794-1c6e64156ce0.png" alt="Rebel" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/1dcaeb4d-1e79-4b91-9e9f-39261fbd90c0.png" alt="Sky" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/8cdb5259-34a9-414d-920f-12f3bd845040.png" alt="BT" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/200c65f5-15b7-44c8-ad2a-3fe27a295479.png" alt="Vodafone" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f47024ea-50f0-4583-89a7-f5cbc9e3beb9.png" alt="Plusnet" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/5a2bc4d5-30d7-4819-9fbd-eb5d2efd19ab.png" alt="Now Broadband" className="h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworksComparison;