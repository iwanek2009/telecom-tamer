import { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface CitystyleCardProps {
  children: ReactNode;
  className?: string;
}

export const CitystyleCard = ({ children, className = "" }: CitystyleCardProps) => {
  return (
    <Card className={`bg-gradient-to-br from-[#F8F9FF] to-[#FFFFFF] backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <CardContent className="p-8">
        {children}
      </CardContent>
    </Card>
  );
};