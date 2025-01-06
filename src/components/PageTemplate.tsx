import React, { ReactNode } from 'react';
import { Header } from './Header';

interface PageTemplateProps {
  children: ReactNode;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  backgroundColor?: string;
}

const PageTemplate = ({
  children,
  heroTitle,
  heroDescription,
  heroImage,
  backgroundColor = "#3FC1C9"
}: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-[#3FC1C9]" style={{ backgroundColor }}>
        <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-0">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                  {heroTitle}
                </h1>
                <p className="text-xl text-gray-700 mt-4 mb-6">
                  {heroDescription}
                </p>
              </div>
              {/* Additional hero content slot */}
              <div className="space-y-3">
                {children}
              </div>
            </div>

            {/* Right Column - Image */}
            {heroImage && (
              <div className="hidden md:flex items-center justify-center">
                <img 
                  src={heroImage}
                  alt="Hero illustration" 
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTemplate;