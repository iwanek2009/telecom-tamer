import React from 'react';

interface StickeeWidgetContentProps {
  widgetId: string;
  filters?: string;
}

export const StickeeWidgetContent: React.FC<StickeeWidgetContentProps> = ({ widgetId, filters }) => {
  return (
    <div 
      data-stickee-widget-id={widgetId}
      data-filters={filters}
    >
      Loading...
    </div>
  );
};