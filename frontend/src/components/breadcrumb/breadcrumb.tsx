import { useEffect, useState } from "react";
import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbHeaderProps {
  title: string;
  items: BreadcrumbItem[];
  showDropdown?: boolean; // 👈 optional
}

const BreadcrumbHeader: React.FC<BreadcrumbHeaderProps> = ({ title, items, showDropdown = false }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapseToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  // Add/remove class on <body>
  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("header-collapse");
    } else {
      document.body.classList.remove("header-collapse");
    }
  }, [isCollapsed]);

  return (
    <>
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 className="mb-1 text-xl font-bold flex items-center">{title}</h4>
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
              {items.map((item, index) => {
                const isLast = index === items.length - 1;
                return (
                  <li key={index} className="flex items-center">
                    {item.href && !isLast ? (
                      <Link
                        to={item.href}
                        className="hover:underline text-gray-700"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-dark font-medium">{item.label}</span>
                    )}
                    {!isLast && (
                      <span>
                        <i className="ti ti-chevron-right" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* ✅ Conditionally render Dropdown */}
          {showDropdown && (
            <div>
              <Link
                to="#"
                className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="export-dropdown"
              >
                <i className="ti ti-package-export me-2" />
                Export
                <i className="ti ti-chevron-down ml-1" />
              </Link>
              <ul
                id="export-dropdown"
                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
              >
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
            </div>
          )}

          {/* Refresh Button */}
          <button
            className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh"
          >
            <i className="ti ti-refresh" />
          </button>

          {/* Collapse Button */}
          <button
            className={`border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center ${
              isCollapsed ? "active" : ""
            }`}
            title="Collapse"
            onClick={handleCollapseToggle}
            id="collapse-header"
          >
            <i className="ti ti-transition-top" />
          </button>
        </div>
      </div>
      {/* End Page Header */}
    </>
  );
};

export default BreadcrumbHeader;
