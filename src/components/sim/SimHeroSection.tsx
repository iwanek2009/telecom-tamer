export const SimHeroSection = () => {
  return (
    <section className="bg-[#1a1f2e] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compare Sim Only Deals
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Find and compare the best Sim Only deals from all major UK networks
          </p>
          <div className="flex justify-center space-x-4">
            <img
              src="/lovable-uploads/876d413a-cf6d-4adb-b306-4ee86ff18df6.png"
              alt="O2"
              className="h-12"
            />
            <img
              src="/lovable-uploads/f47024ea-50f0-4583-89a7-f5cbc9e3beb9.png"
              alt="EE"
              className="h-12"
            />
            <img
              src="/lovable-uploads/a3097d40-1cfd-4350-93ec-fa2630f7d5a3.png"
              alt="Three"
              className="h-12"
            />
            <img
              src="/lovable-uploads/f2f27bb1-2624-47c2-bbe9-4118f369bb45.png"
              alt="Vodafone"
              className="h-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};