import { ReactNode } from 'react';

interface BroadbandContentSectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gradient';
}

export const BroadbandContentSection = ({ 
  children, 
  className = "",
  background = 'white'
}: BroadbandContentSectionProps) => {
  const getBgClass = () => {
    switch(background) {
      case 'gradient':
        return 'bg-gradient-to-br from-[#F1F0FB] to-[#E5DEFF]';
      default:
        return 'bg-white';
    }
  };

  return (
    <section className={`${getBgClass()} py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};