import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

export const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Link to={link}>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 cursor-pointer animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="text-primary text-4xl">{icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};