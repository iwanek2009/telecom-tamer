import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStickeeScript, cleanupStickeeScript } from '../utils/stickeeLoader';
import { StickeeWidgetContent } from './StickeeWidgetContent';

const StickeeWidget = () => {
  const location = useLocation();
  const isBroadbandPage = location.pathname === '/broadband';

  useEffect(() => {
    // Remove any existing Stickee scripts
    cleanupStickeeScript();

    // Load new script
    loadStickeeScript();

    // Cleanup function
    return () => {
      cleanupStickeeScript();
    };
  }, []); 

  return (
    <div className="container mx-auto px-4 py-8">
      {isBroadbandPage ? (
        <StickeeWidgetContent widgetId="smartfony-91" />
      ) : (
        <StickeeWidgetContent 
          widgetId="smartfony-90" 
          filters='{"families":[1971]}'
        />
      )}
    </div>
  );
};

export default StickeeWidget;