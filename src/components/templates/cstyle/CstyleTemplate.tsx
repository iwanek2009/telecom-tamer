import React, { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface CstyleTemplateProps {
  children: ReactNode;
}

export const CstyleTemplate = ({ children }: CstyleTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};