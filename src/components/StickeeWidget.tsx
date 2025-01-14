import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStickeeScript, cleanupStickeeScript } from '../utils/stickeeLoader';
import { StickeeWidgetContent } from './StickeeWidgetContent';

interface StickeeWidgetProps {
  widgetId?: string;
  filters?: string;
}

const StickeeWidget: React.FC<StickeeWidgetProps> = ({ widgetId, filters }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const isBroadbandPage = location.pathname === '/broadband';

  useEffect(() => {
    let mounted = true;

    const initializeWidget = async () => {
      try {
        setIsLoading(true);
        await loadStickeeScript();
        
        // Ensure the StickeeLoader is available and initialize it
        if ((window as any).StickeeLoader) {
          (window as any).StickeeLoader.load();
        }
        
        if (mounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error loading Stickee widget:', error);
        setIsLoading(false);
      }
    };

    initializeWidget();

    return () => {
      mounted = false;
      cleanupStickeeScript();
    };
  }, [widgetId, filters]); // Re-initialize when widgetId or filters change

  return (
    <div className="w-full bg-[#f9fafc] min-h-[400px]">
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <StickeeWidgetContent 
            widgetId={isBroadbandPage ? "smartfony-91" : (widgetId || "smartfony-90")}
            filters={filters}
          />
        )}
      </div>
    </div>
  );
};

export default StickeeWidget;