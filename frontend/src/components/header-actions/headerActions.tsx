import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface HeaderActionsProps {
  onRefresh?: () => void;
}

const HeaderActions: React.FC<HeaderActionsProps> = ({ onRefresh }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle collapse toggle
  const toggleCollapse = () => {
    const body = document.body;
    if (isCollapsed) {
      body.classList.remove("header-collapse");
    } else {
      body.classList.add("header-collapse");
    }
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          className={`border border-borderColor shadow rounded p-2 bg-white inline-flex items-center text-gray-900 focus:bg-primary focus:border-primary focus:text-white ${
            isDropdownOpen ? "active" : ""
          }`}
        >
          <i className="ti ti-package-export me-2" />
          Export
          <i className="ti ti-chevron-down ml-1" />
        </button>

        {isDropdownOpen && (
          <ul className="absolute mt-1 p-2 z-[1000] border border-borderColor rounded bg-white shadow-lg min-w-[160px]">
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-file-type-pdf me-1" />
                Export as PDF
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-file-type-xls me-1" />
                Export as Excel
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* Refresh Button */}
      <button
        type="button"
        onClick={onRefresh}
        className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
        title="Refresh"
      >
        <i className="ti ti-refresh" />
      </button>

      {/* Collapse Button */}
      <button
        type="button"
        id="collapse-header"
        onClick={toggleCollapse}
        className={`border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center ${
          isCollapsed ? "active" : ""
        }`}
        title="Collapse"
      >
        <i className="ti ti-transition-top" />
      </button>
    </div>
  );
};

export default HeaderActions;
