import React from 'react';

interface StickeeWidgetContentProps {
  widgetId: string;
  filters?: string;
}

export const StickeeWidgetContent: React.FC<StickeeWidgetContentProps> = ({ widgetId, filters }) => {
  return (
    <div className="w-full bg-[#f9fafc]">
      <div className="container mx-auto px-4 py-8">
        <div 
          data-stickee-widget-id={widgetId}
          data-filters={filters}
        >
          Loading...
        </div>
      </div>
    </div>
  );
};