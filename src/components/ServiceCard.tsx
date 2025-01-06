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
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <img src={icon} alt={title} className="w-16 h-16 mb-6" />
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a
          href={link}
          className={`${buttonColor} text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};