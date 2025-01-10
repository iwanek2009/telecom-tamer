import React, { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface BStyleTemplateProps {
  children: ReactNode;
}

export const BStyleTemplate = ({ children }: BStyleTemplateProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
};