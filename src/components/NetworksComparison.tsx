import React from 'react';

const NetworksComparison = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Compare all major networks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All networks and providersCompare mobile and broadband deals from the UK's biggest companies in one place
          </p>
        </div>
        
        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="Virgin Media" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="Hyperoptic" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="EE" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="BeFibre" className="h-12 w-auto object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="Rebel" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="Sky" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="BT" className="h-12 w-auto object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow">
            <img src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png" alt="Vodafone" className="h-12 w-auto object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworksComparison;