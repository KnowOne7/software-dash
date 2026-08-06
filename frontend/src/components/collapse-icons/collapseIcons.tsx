import { useEffect, useState } from "react";


const CollapseIcons = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Initialize Bootstrap tooltips
    // @ts-ignore
    if (window.bootstrap) {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        // @ts-ignore
        new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, []);

  const handleCollapseToggle = () => {
    const body = document.body;

    if (isCollapsed) {
      body.classList.remove("header-collapse");
    } else {
      body.classList.add("header-collapse");
    }

    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <button
        type="button"
        className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title="Refresh"
        aria-label="Refresh"
      >
        <i className="ti ti-refresh" />
      </button>

      <button
        type="button"
        id="collapse-header"
        onClick={handleCollapseToggle}
        className={`border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center ${
          isCollapsed === true ? "active" : ""
        }`}
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-title={isCollapsed ? "Expand" : "Collapse"}
        aria-label="Collapse"
      >
        <i className="ti ti-transition-top" />
      </button>
    </>
  );
};

export default CollapseIcons;
