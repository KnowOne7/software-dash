import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Import Flowbite JS once so components like dropdowns, modals, tooltips work
import { initFlowbite } from 'flowbite';

declare global {
  interface Window {
    Flowbite?: unknown; // Flowbite adds itself to window after initialization
  }
}

interface FlowbiteProviderProps {
  children: React.ReactNode;
  theme?: Record<string, unknown>;
}

const FlowbiteProvider: React.FC<FlowbiteProviderProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Flowbite on component mount and route changes
    initFlowbite();
    
    // Small delay to ensure DOM is fully updated after route changes
    const timer = setTimeout(() => {
      // Reinitialize Flowbite components when route changes
      initFlowbite();
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <>{children}</>;
};

export default FlowbiteProvider;
