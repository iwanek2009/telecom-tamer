import { LucideIcon } from 'lucide-react';

interface BroadbandFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BroadbandFeatureCard = ({ icon: Icon, title, description }: BroadbandFeatureCardProps) => {
  return (
    <div className="bg-gradient-to-br from-[#E5F9FA] to-[#F0FCFD] backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#3FC1C9]/20">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="mb-2">
          <Icon className="w-10 h-10 text-black" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};