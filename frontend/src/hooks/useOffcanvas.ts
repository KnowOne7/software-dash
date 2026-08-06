import { useCallback } from 'react';
import { showOffcanvas, hideOffcanvas } from '../utils/modalUtils';

/**
 * Custom hook for managing offcanvas state and actions
 */
export const useOffcanvas = (offcanvasId: string) => {
  const open = useCallback(() => {
    showOffcanvas(offcanvasId);
  }, [offcanvasId]);

  const close = useCallback(() => {
    hideOffcanvas(offcanvasId);
  }, [offcanvasId]);

  const toggle = useCallback(() => {
    const offcanvas = document.getElementById(offcanvasId);
    if (offcanvas) {
      if (offcanvas.classList.contains('translate-x-full')) {
        open();
      } else {
        close();
      }
    }
  }, [offcanvasId, open, close]);

  return {
    open,
    close,
    toggle
  };
};
