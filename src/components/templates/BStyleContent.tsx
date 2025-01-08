import { ReactNode } from 'react';

interface BStyleContentProps {
  children: ReactNode;
  className?: string;
}

export const BStyleContent = ({ children, className = "" }: BStyleContentProps) => {
  return (
    <main className={`container mx-auto px-4 py-8 ${className}`}>
      {children}
    </main>
  );
};