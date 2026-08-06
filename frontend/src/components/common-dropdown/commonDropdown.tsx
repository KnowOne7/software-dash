import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  id: string;
  label: string;
  items: string[];
  onSelect?: (item: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ id, label, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    if (onSelect) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id={`${id}-button`}
        onClick={toggleDropdown}
        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <i className="ti ti-chevron-down ml-1"></i>
      </button>

      {/* Dropdown Menu */}
      <ul 
        id={id}
        className={`absolute z-[1] p-2 border border-borderColor rounded bg-white shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={`${id}-button`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleItemClick(item)}
              className="w-full rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500 text-left"
              role="menuitem"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
