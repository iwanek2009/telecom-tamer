import { ReactNode } from 'react';

interface CitystyleContentProps {
  children: ReactNode;
  className?: string;
}

export const CitystyleContent = ({ children, className = "" }: CitystyleContentProps) => {
  return (
    <main className={`container mx-auto px-4 py-8 ${className}`}>
      {children}
    </main>
  );
};