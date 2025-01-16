import { LucideIcon } from 'lucide-react';

interface BStyleFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BStyleFeatureCard = ({ icon: Icon, title, description }: BStyleFeatureCardProps) => {
  return (
    <div className="bg-[#F0FCFD] rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:shadow-lg">
      <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};