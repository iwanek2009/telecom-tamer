import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  buttonText: string;
  buttonColor: string;
}

export const ServiceCard = ({ title, description, icon, link, buttonText, buttonColor }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-gray-800 mb-2">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={link}
          className={`${buttonColor} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity w-full text-center`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};