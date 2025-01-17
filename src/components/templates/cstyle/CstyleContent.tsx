import { ReactNode } from 'react';

interface CstyleContentProps {
  children: ReactNode;
  className?: string;
}

export const CstyleContent = ({ children, className = "" }: CstyleContentProps) => {
  return (
    <main className={`container mx-auto px-4 py-8 ${className}`}>
      {children}
    </main>
  );
};