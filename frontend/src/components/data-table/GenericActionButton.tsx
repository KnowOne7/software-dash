import React, { useState, useEffect } from 'react';
import { useDynamicFlowbite } from '../../hooks/useDynamicFlowbite';
import { showOffcanvas, showModal } from '../../utils/modalUtils';
import type { ActionItem } from '../../types/actionTypes';

interface GenericActionButtonProps {
  recordKey: string;
  actions: ActionItem[];
  className?: string;
}

const GenericActionButton: React.FC<GenericActionButtonProps> = ({
  recordKey,
  actions,
  className = ""
}) => {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const { initializeFlowbite } = useDynamicFlowbite();

  const toggleDropdown = (key: string) => {
    setOpenDropdownId((prev) => (prev === key ? null : key));
  };

  const handleAction = (action: ActionItem) => {
    switch (action.type) {
      case 'modal':
        if (action.targetId) {
          showModal(action.targetId);
        }
        break;
      case 'offcanvas':
        if (action.targetId) {
          showOffcanvas(action.targetId);
        }
        break;
      case 'function':
        if (action.onClick) {
          action.onClick(recordKey);
        }
        break;
      case 'link':
        if (action.href) {
          window.location.href = action.href;
        }
        break;
    }
    
    // Close dropdown after action
    setOpenDropdownId(null);
  };

  // Reinitialize Flowbite when dropdown state changes
  useEffect(() => {
    if (openDropdownId === recordKey) {
      initializeFlowbite();
    }
  }, [openDropdownId, recordKey, initializeFlowbite]);

  if (actions.length === 0) {
    return null;
  }

  // If only one action, render as a single button
  if (actions.length === 1) {
    const action = actions[0];
    return (
      <button
        type="button"
        className={`w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light ${action.className || ''}`}
        onClick={() => handleAction(action)}
        title={action.label}
      >
        <i className={action.icon} />
      </button>
    );
  }

  // Multiple actions - render as dropdown
  return (
    <div className={`dropdown relative table-action ${className}`}>
      <button
        type="button"
        className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
        onClick={() => toggleDropdown(recordKey)}
      >
        <i className="ti ti-dots-vertical" />
      </button>
      {openDropdownId === recordKey && (
        <div className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
          {actions.map((action) => (
            <button
              key={action.id}
              className={`rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900 w-full text-left ${action.className || ''}`}
              onClick={() => handleAction(action)}
            >
              <i className={`${action.icon} me-1`} />
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenericActionButton;
