import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  buttonText: string;
  buttonColor: string;
}

export const ServiceCard = ({ title, description, icon, link, buttonText, buttonColor }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in transform hover:-translate-y-1 border border-gray-100">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="mb-2 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full blur opacity-30"></div>
          <img src={icon} alt={title} className="w-[60px] h-[60px] relative" />
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link 
          to={link}
          className={`${buttonColor} text-white px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-300 w-full text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};