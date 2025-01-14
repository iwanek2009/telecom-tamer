import React from 'react';

interface StickeeWidgetContentProps {
  widgetId: string;
  filters?: string | Record<string, unknown>;
}

export const StickeeWidgetContent: React.FC<StickeeWidgetContentProps> = ({ widgetId, filters }) => {
  const filterString = typeof filters === 'string' ? filters : JSON.stringify(filters);
  
  return (
    <div 
      data-stickee-widget-id={widgetId}
      data-filters={filterString}
    >
      Loading...
    </div>
  );
};