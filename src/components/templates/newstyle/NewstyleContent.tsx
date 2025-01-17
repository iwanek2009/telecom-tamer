import { ReactNode } from 'react';

interface NewstyleContentProps {
  children: ReactNode;
  className?: string;
}

export const NewstyleContent = ({ children, className = "" }: NewstyleContentProps) => {
  return (
    <main className={`container mx-auto px-4 py-8 ${className}`}>
      {children}
    </main>
  );
};