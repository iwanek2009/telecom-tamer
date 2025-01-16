import { LucideIcon } from 'lucide-react';

interface CitystyleFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const CitystyleFeatureCard = ({ icon: Icon, title, description }: CitystyleFeatureCardProps) => {
  return (
    <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="flex justify-center mb-2">
          <Icon className="w-8 h-8 text-gray-900" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};