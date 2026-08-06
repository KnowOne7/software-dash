/**
 * Utility functions for managing Flowbite dropdowns
 */

/**
 * Close a dropdown by its ID
 * @param dropdownId - The ID of the dropdown element to close
 */
export const closeDropdown = (dropdownId: string): void => {
  const dropdownElement = document.getElementById(dropdownId);
  if (dropdownElement) {
    dropdownElement.classList.add('hidden');
  }
};

/**
 * Toggle a dropdown by its ID
 * @param dropdownId - The ID of the dropdown element to toggle
 */
export const toggleDropdown = (dropdownId: string): void => {
  const dropdownElement = document.getElementById(dropdownId);
  if (dropdownElement) {
    dropdownElement.classList.toggle('hidden');
  }
};

/**
 * Open a dropdown by its ID
 * @param dropdownId - The ID of the dropdown element to open
 */
export const openDropdown = (dropdownId: string): void => {
  const dropdownElement = document.getElementById(dropdownId);
  if (dropdownElement) {
    dropdownElement.classList.remove('hidden');
  }
};

/**
 * Create a close handler for a specific dropdown
 * @param dropdownId - The ID of the dropdown to close
 * @returns A function that closes the dropdown
 */
export const createDropdownCloseHandler = (dropdownId: string) => {
  return () => closeDropdown(dropdownId);
};
