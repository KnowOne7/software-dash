/**
 * Utility functions for modals and offcanvas components
 */

// Store Flowbite modal instances
const modalInstances = new Map<string, any>();

/**
 * Show a modal by ID
 */
export const showModal = (modalId: string) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const isFlowbite = modal.hasAttribute('data-modal-target') || modal.hasAttribute('data-modal-backdrop');

  if (isFlowbite) {
    // Flowbite modal
    import('flowbite').then(({ Modal }) => {
      let instance = modalInstances.get(modalId);
      if (!instance) {
        instance = new Modal(modal);
        modalInstances.set(modalId, instance);
      }
      instance.show();
    });
  } else {
    // Custom modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modal.style.zIndex = '10000';

    // Add dynamic backdrop
    const existingBackdrop = document.getElementById(`${modalId}_backdrop`);
    if (existingBackdrop) existingBackdrop.remove();

    const backdrop = document.createElement('div');
    backdrop.id = `${modalId}_backdrop`;
    backdrop.setAttribute('drawer-backdrop', '');
    backdrop.className = 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30';
    backdrop.addEventListener('click', () => hideModal(modalId));
    document.body.appendChild(backdrop);

    document.body.style.overflow = 'hidden';

    // Close buttons inside modal
    const closeButtons = modal.querySelectorAll('[data-modal-hide]');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => hideModal(modalId));
    });
  }

  document.dispatchEvent(new CustomEvent('show-modal', { detail: { modalId } }));
};

/**
 * Hide a modal by ID
 */
export const hideModal = (modalId: string) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const isFlowbite = modal.hasAttribute('data-modal-target') || modal.hasAttribute('data-modal-backdrop');

  if (isFlowbite) {
    import('flowbite').then(({  }) => {
      const instance = modalInstances.get(modalId);
      if (instance) instance.hide();
    });
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');

    const backdrop = document.getElementById(`${modalId}_backdrop`);
    if (backdrop) backdrop.remove();

    document.body.style.overflow = '';
  }

  document.dispatchEvent(new CustomEvent('hide-modal', { detail: { modalId } }));
};

/**
 * Show an offcanvas by ID
 */
export const showOffcanvas = (offcanvasId: string) => {
  const offcanvas = document.getElementById(offcanvasId);
  if (!offcanvas) return;

  offcanvas.classList.remove('translate-x-full');
  offcanvas.classList.add('translate-x-0');
  offcanvas.style.zIndex = '10000';

  // Add dynamic backdrop
  const existingBackdrop = document.getElementById(`${offcanvasId}_backdrop`);
  if (existingBackdrop) existingBackdrop.remove();

  const backdrop = document.createElement('div');
  backdrop.id = `${offcanvasId}_backdrop`;
  backdrop.setAttribute('drawer-backdrop', '');
  backdrop.className = 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30';
  backdrop.addEventListener('click', () => hideOffcanvas(offcanvasId));
  document.body.appendChild(backdrop);

  document.body.style.overflow = 'hidden';

  // Close buttons inside offcanvas
  const closeButtons = offcanvas.querySelectorAll('[data-drawer-hide]');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => hideOffcanvas(offcanvasId));
  });

  document.dispatchEvent(new CustomEvent('show-offcanvas', { detail: { offcanvasId } }));
};

/**
 * Hide an offcanvas by ID
 */
export const hideOffcanvas = (offcanvasId: string) => {
  const offcanvas = document.getElementById(offcanvasId);
  if (!offcanvas) return;

  offcanvas.classList.add('translate-x-full');
  offcanvas.classList.remove('translate-x-0');

  const backdrop = document.getElementById(`${offcanvasId}_backdrop`);
  if (backdrop) backdrop.remove();

  document.body.style.overflow = '';

  document.dispatchEvent(new CustomEvent('hide-offcanvas', { detail: { offcanvasId } }));
};

/**
 * Toggle modal/offcanvas by ID
 */
export const toggleModal = (modalId: string) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  if (modal.classList.contains('hidden')) showModal(modalId);
  else hideModal(modalId);
};

export const toggleOffcanvas = (offcanvasId: string) => {
  const offcanvas = document.getElementById(offcanvasId);
  if (!offcanvas) return;
  if (offcanvas.classList.contains('translate-x-full')) showOffcanvas(offcanvasId);
  else hideOffcanvas(offcanvasId);
};
