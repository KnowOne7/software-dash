import { useEffect, useCallback } from 'react';

/**
 * Custom hook to handle dynamic Flowbite initialization for modals, offcanvas, and other components
 * that are rendered dynamically in data tables or other dynamic content areas.
 */
export const useDynamicFlowbite = () => {
  const initializeFlowbite = useCallback(async () => {
    try {
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    } catch (error) {
      console.error('Failed to initialize Flowbite:', error);
    }
  }, []);

  const reinitializeFlowbite = useCallback(async () => {
    // Small delay to ensure DOM is fully updated
    const timer = setTimeout(async () => {
      await initializeFlowbite();
    }, 100);

    return () => clearTimeout(timer);
  }, [initializeFlowbite]);

  // Initialize on mount
  useEffect(() => {
    initializeFlowbite();
  }, [initializeFlowbite]);

  return {
    initializeFlowbite,
    reinitializeFlowbite
  };
};

/**
 * Hook specifically for data table components that need to reinitialize Flowbite
 * when dynamic content is rendered
 */
export const useDataTableFlowbite = () => {
  const { initializeFlowbite, reinitializeFlowbite } = useDynamicFlowbite();

  const handleDynamicContent = useCallback(async () => {
    // Reinitialize after dynamic content is rendered
    await reinitializeFlowbite();
  }, [reinitializeFlowbite]);

  return {
    handleDynamicContent,
    initializeFlowbite
  };
};
