import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStickeeScript, cleanupStickeeScript } from '../utils/stickeeLoader';
import { StickeeWidgetContent } from './StickeeWidgetContent';

interface StickeeWidgetProps {
  widgetId?: string;
  filters?: string;
}

const StickeeWidget: React.FC<StickeeWidgetProps> = ({ widgetId, filters }) => {
  const location = useLocation();
  const isBroadbandPage = location.pathname === '/broadband';

  useEffect(() => {
    const initializeWidget = async () => {
      await cleanupStickeeScript();
      await loadStickeeScript();
    };

    initializeWidget();

    return () => {
      cleanupStickeeScript();
    };
  }, [location.pathname]); 

  return (
    <div className="w-full bg-[#f9fafc]">
      <div className="container mx-auto px-4 py-8">
        {isBroadbandPage ? (
          <StickeeWidgetContent widgetId="smartfony-91" />
        ) : (
          <StickeeWidgetContent 
            widgetId={widgetId || "smartfony-90"}
            filters={filters}
          />
        )}
      </div>
    </div>
  );
};

export default StickeeWidget;