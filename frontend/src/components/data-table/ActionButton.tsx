import React, { useState, useEffect } from 'react';
import { useDynamicFlowbite } from '../../hooks/useDynamicFlowbite';
import { showOffcanvas, showModal } from '../../utils/modalUtils';

interface ActionButtonProps {
  recordKey: string;
  onPreview?: (recordKey: string) => void;
  onDelete?: (recordKey: string) => void;
  previewModalId?: string;
  deleteModalId?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  recordKey,
  onPreview,
  onDelete,
  previewModalId = 'offcanvas_view',
  deleteModalId = 'delete_modal'
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const { initializeFlowbite } = useDynamicFlowbite();

  const toggleDropdown = (key: string) => {
    setOpenDropdownId((prev) => (prev === key ? null : key));
  };

  const handlePreview = () => {
    if (onPreview) {
      onPreview(recordKey);
    } else {
      // Use utility function to show offcanvas
      showOffcanvas(previewModalId);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(recordKey);
    } else {
      // Use utility function to show modal
      showModal(deleteModalId);
    }
  };

  // Reinitialize Flowbite when dropdown state changes
  useEffect(() => {
    if (openDropdownId === recordKey) {
      initializeFlowbite();
    }
  }, [openDropdownId, recordKey, initializeFlowbite]);

  return (
    <div className="dropdown relative table-action">
      <button
        type="button"
        className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
        onClick={() => toggleDropdown(recordKey)}
      >
        <i className="ti ti-dots-vertical" />
      </button>
      {openDropdownId === recordKey && (
        <div className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
          <button
            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900 w-full text-left"
            onClick={handlePreview}
          >
            <i className="ti ti-eye text-blue-light me-1" /> Preview
          </button>
          <button
            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900 w-full text-left"
            onClick={handleDelete}
          >
            <i className="ti ti-trash me-1" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionButton;

