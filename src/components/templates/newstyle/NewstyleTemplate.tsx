import React, { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface NewstyleTemplateProps {
  children: ReactNode;
}

export const NewstyleTemplate = ({ children }: NewstyleTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {children}
      <Footer />
    </div>
  );
};