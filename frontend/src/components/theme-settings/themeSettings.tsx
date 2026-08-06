import React, { useEffect } from "react";
import ImageWithBasePath from "../image-with-base-path";
import { useThemeSettings } from '../../hooks/useThemeSettings';

const ThemeSettings = () => {
  const { themeSettings, handleUpdateTheme, handleResetTheme } = useThemeSettings();

  useEffect(() => {
    const htmlElement: any = document.documentElement;
    Object.entries(themeSettings).forEach(([key, value]) => {
      htmlElement.setAttribute(key, value);
    });
    
    // Force a re-render of CSS variables when theme color changes
    if (themeSettings["data-color"]) {
      const event = new CustomEvent('themeColorChanged', { 
        detail: { color: themeSettings["data-color"] } 
      });
      document.dispatchEvent(event);
    }
  }, [themeSettings]);
  return (
    <>
    <div className="sidebar-contact fixed top-1/2 right-0 -translate-y-1/2 w-[350px] h-auto bg-white box-border transition-all duration-500 z-[9999]">
      <div
        className="toggle-theme absolute w-[48px] flex items-center justify-center text-center cursor-pointer bg-primary top-0 right-0 p-[6px] h-[48px] text-[18px] text-white rounded-tl-sm rounded-bl-sm"
        data-drawer-target="theme-setting"
        data-drawer-show="theme-setting"
        aria-controls="theme-setting"
        data-drawer-placement="right"
      >
        <i className="fa fa-cog fa-w-16 fa-spin" />
      </div>
    </div>
    <div
      className="sidebar-themesettings fixed top-0 right-0 bottom-0 z-[9999] h-screen translate-x-full bg-white w-[400px]"
      id="theme-setting"
    >
      <div className="flex items-center justify-between gap-2 p-5 border-b bg-primary">
        <h5 className="flex-grow-1 text-white mb-0">Theme Customizer</h5>
        <button
          type="button"
          className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"
          data-drawer-hide="theme-setting"
        >
          <i className="ti ti-x" />
          <span className="sr-only">Close modal</span>
        </button>
      </div>
      <div
        className="offcanvas-body h-[80vh] overflow-y-auto p-4"
        data-simplebar=""
      >
        <div
          className="accordion accordion-bordered"
          data-accordion="open"
          data-active-classes="bg-white"
        >
          <div className="accordion-item mb-2 border border-borderColor rounded-md">
            <h2 className="accordion-header">
              <button
                className="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md transition-colors duration-300"
                type="button"
                data-accordion-target="#modesetting"
                aria-expanded="true"
              >
                <span>Color Mode</span>
                <i className="ti ti-chevron-down data-accordion-icon transition-transform duration-300" />
              </button>
            </h2>
            <div id="modesetting" className="accordion-collapse">
              <div className="p-5 border-t border-borderColor">
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-6">
                    <div className="form-check card-radio" onClick={() => handleUpdateTheme("data-bs-theme", "light")}>
                      <input
                        className="hidden peer"
                        type="radio"
                        name="data-bs-theme"
                        id="layout-color-light"
                        defaultValue="light"
                          checked={
                            themeSettings["data-bs-theme"] === "light"
                          }
                      />
                      <label
                        htmlFor="layout-color-light"
                        className="form-check-label border border-borderColor rounded-md p-2 w-full flex justify-center items-center cursor-pointer relative"
                      >
                        <i className="ti ti-sun me-1" />
                        Light
                      </label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <div className="form-check card-radio" onClick={() => handleUpdateTheme("data-bs-theme", "dark")}>
                      <input
                        className="hidden peer"
                        type="radio"
                        name="data-bs-theme"
                        id="layout-color-dark"
                        defaultValue="dark"
                          checked={
                            themeSettings["data-bs-theme"] === "dark"
                          }
                      />
                      <label
                        className="border border-borderColor rounded-md p-2 w-full flex justify-center items-center peer-checked:border-primary cursor-pointer"
                        htmlFor="layout-color-dark"
                      >
                        <i className="ti ti-moon me-1" />
                        Dark
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2 border border-borderColor rounded-md">
            <h2 className="accordion-header">
              <button
                className="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                type="button"
                data-bs-toggle="collapse"
                data-accordion-target="#layoutsetting"
                aria-expanded="true"
              >
                <span>Select Layouts</span>
                <i className="ti ti-chevron-down data-accordion-icon transition-transform duration-300" />
              </button>
            </h2>
            <div id="layoutsetting" className="accordion-collapse">
              <div className="p-5 border-t border-borderColor">
                <div className="theme-content">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-4">
                      <div className="theme-layout text-center" onClick={() => handleUpdateTheme("data-layout", "default")}>
                        <input
                          type="radio"
                          name="data-layout"
                          className="hidden"
                          id="defaultLayout"
                          defaultValue="default"
                          defaultChecked
                             checked={
                            themeSettings["data-layout"] === "default"
                          }
                        />
                        <label htmlFor="defaultLayout">
                          <span className="block mb-2  relative">
                            <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                            <ImageWithBasePath src="assets/img/theme/default.svg" alt="img" />
                          </span>
                          <span className="font-medium text-gray-900">
                            Default
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="theme-layout text-center" onClick={() => handleUpdateTheme("data-layout", "mini")}>
                        <input
                          type="radio"
                          name="data-layout"
                          id="miniLayout"
                          defaultValue="mini"
                             checked={
                            themeSettings["data-layout"] === "mini"
                          }
                        />
                        <label htmlFor="miniLayout">
                          <span className="block mb-2 layout-img relative">
                            <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                            <ImageWithBasePath src="assets/img/theme/mini.svg" alt="img" />
                          </span>
                          <span className="font-medium text-gray-900">Mini</span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="theme-layout text-center" onClick={() => handleUpdateTheme("data-layout", "hoverview")}>
                        <input
                          type="radio"
                          name="data-layout"
                          id="hoverviewLayout"
                          defaultValue="hoverview"
                             checked={
                            themeSettings["data-layout"] === "hoverview"
                          }
                        />
                        <label htmlFor="hoverviewLayout">
                          <span className="block mb-2 layout-img relative">
                            <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                            <ImageWithBasePath src="assets/img/theme/mini.svg" alt="img" />
                          </span>
                          <span className="font-medium text-gray-900">
                            Hover View
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="theme-layout text-center" onClick={() => handleUpdateTheme("data-layout", "hidden")}>
                        <input
                          type="radio"
                          name="data-layout"
                          id="hiddenLayout"
                          defaultValue="hidden"
                             checked={
                            themeSettings["data-layout"] === "hidden"
                          }
                        />
                        <label htmlFor="hiddenLayout">
                          <span className="block mb-2 layout-img relative">
                            <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                            <ImageWithBasePath
                              src="assets/img/theme/full-width.svg"
                              alt="img"
                            />
                          </span>
                          <span className="font-medium text-gray-900">
                            Hidden
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="theme-layout text-center" onClick={() => handleUpdateTheme("data-layout", "full-width")}>
                        <input
                          type="radio"
                          name="data-layout"
                          id="full-widthLayout"
                          defaultValue="full-width"
                             checked={
                            themeSettings["data-layout"] === "full-width"
                          }
                        />
                        <label htmlFor="full-widthLayout">
                          <span className="block mb-2 layout-img relative">
                            <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                            <ImageWithBasePath
                              src="assets/img/theme/full-width.svg"
                              alt="img"
                            />
                          </span>
                          <span className="font-medium text-gray-900">
                            Full Width
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2 border border-borderColor rounded-md">
            <h2 className="accordion-header">
              <button
                className="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                type="button"
                data-accordion-target="#sidebarcolorsetting"
                aria-expanded="true"
              >
                Sidebar Color
                <i className="ti ti-chevron-down data-accordion-icon transition-transform duration-300" />
              </button>
            </h2>
            <div id="sidebarcolorsetting" className="accordion-collapse">
              <div className="p-5 border-t border-borderColor">
                <div className="theme-content">
                  <h6 className="text-[14px] font-medium mb-2">Solid Colors</h6>
                  <div className="flex items-center flex-wrap mb-1">
                    <div className="theme-colorselect m-1 me-3"  onClick={() => handleUpdateTheme("data-sidebar", "light")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="lightSidebar"
                        defaultValue="light"
                        defaultChecked
                        checked={
                          themeSettings["data-sidebar"] === "light"
                        }
                      />
                      <label
                        htmlFor="lightSidebar"
                        className="block mb-2 w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-white"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "sidebar2")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="sidebar2Sidebar"
                        defaultValue="sidebar2"
                        checked={
                          themeSettings["data-sidebar"] === "sidebar2"
                        }
                      />
                      <label
                        htmlFor="sidebar2Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-light mb-2"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "sidebar3")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="sidebar3Sidebar"
                        defaultValue="sidebar3"
                        checked={
                          themeSettings["data-sidebar"] === "sidebar3"
                        }
                      />
                      <label
                        htmlFor="sidebar3Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-dark mb-2"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "sidebar4")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="sidebar4Sidebar"
                        defaultValue="sidebar4"
                        checked={
                          themeSettings["data-sidebar"] === "sidebar4"
                        }
                      />
                      <label
                        htmlFor="sidebar4Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-primary mb-2"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "sidebar5")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="sidebar5Sidebar"
                        defaultValue="sidebar5"
                        checked={
                          themeSettings["data-sidebar"] === "sidebar5"
                        }
                      />
                      <label
                        htmlFor="sidebar5Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-secondary mb-2"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "sidebar6")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="sidebar6Sidebar"
                        defaultValue="sidebar6"
                        checked={
                          themeSettings["data-sidebar"] === "sidebar6"
                        }
                      />
                      <label
                        htmlFor="sidebar6Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-info mb-2"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "sidebar7")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="sidebar7Sidebar"
                        defaultValue="sidebar7"
                        checked={
                          themeSettings["data-sidebar"] === "sidebar7"
                        }
                      />
                      <label
                        htmlFor="sidebar7Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-indigo mb-2"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                   
                  </div>
                  <h6 className="text-[14px] font-medium mb-2">
                    Gradient Colors
                  </h6>
                  <div className="flex items-center flex-wrap">
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar1")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar1Sidebar"
                        defaultValue="gradientsidebar1"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar1"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar1Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-indigo-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar2")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar2Sidebar"
                        defaultValue="gradientsidebar2"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar2"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar2Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-primary-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar3")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar3Sidebar"
                        defaultValue="gradientsidebar3"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar3"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar3Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-secondary-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar4")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar4Sidebar"
                        defaultValue="gradientsidebar4"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar4"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar4Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-dark-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar5")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar5Sidebar"
                        defaultValue="gradientsidebar5"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar5"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar5Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-purple-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1 me-3" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar6")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar6Sidebar"
                        defaultValue="gradientsidebar6"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar6"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar6Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-orange-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect m-1" onClick={() => handleUpdateTheme("data-sidebar", "gradientsidebar7")}>
                      <input
                        type="radio"
                        name="data-sidebar"
                        id="gradientsidebar7Sidebar"
                        defaultValue="gradientsidebar7"
                        checked={
                          themeSettings["data-sidebar"] === "gradientsidebar7"
                        }
                      />
                      <label
                        htmlFor="gradientsidebar7Sidebar"
                        className="block w-10 h-[40px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-info-gradient"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2 border border-borderColor rounded-md">
            <h2 className="accordion-header">
              <button
                className="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                type="button"
                data-accordion-target="#colorsetting"
                aria-expanded="true"
              >
                Top Bar Color
                <i className="ti ti-chevron-down data-accordion-icon transition-transform duration-300" />
              </button>
            </h2>
            <div id="colorsetting" className="accordion-collapse">
              <div className="p-5 pb-1 border-t border-borderColor">
                <div className="theme-content">
                  <h6 className="text-[14px] font-medium mb-2">Solid Colors</h6>
                  <div className="flex items-center flex-wrap topbar-background mb-1">
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "white")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="whiteTopbar"
                        defaultValue="white"
                        defaultChecked
                        checked={
                          themeSettings["data-topbar"] === "white"
                        }
                      />
                      <label
                        htmlFor="whiteTopbar"
                        className="white-topbar block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px] bg-white"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "topbar1")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="topbar1Topbar"
                        defaultValue="topbar1"
                        checked={
                          themeSettings["data-topbar"] === "topbar1"
                        }
                      />
                      <label
                        htmlFor="topbar1Topbar"
                        className="bg-light block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "topbar2")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="topbar2Topbar"
                        defaultValue="topbar2"
                        checked={
                          themeSettings["data-topbar"] === "topbar2"
                        }
                      />
                      <label
                        htmlFor="topbar2Topbar"
                        className="bg-dark block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "topbar3")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="topbar3Topbar"
                        defaultValue="topbar3"
                        checked={
                          themeSettings["data-topbar"] === "topbar3"
                        }
                      />
                      <label
                        htmlFor="topbar3Topbar"
                        className="bg-primary block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "topbar4")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="topbar4Topbar"
                        defaultValue="topbar4"
                        checked={
                          themeSettings["data-topbar"] === "topbar4"
                        }
                      />
                      <label
                        htmlFor="topbar4Topbar"
                        className="bg-secondary block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "topbar5")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="topbar5Topbar"
                        defaultValue="topbar5"
                        checked={
                          themeSettings["data-topbar"] === "topbar5"
                        }
                      />
                      <label
                        htmlFor="topbar5Topbar"
                        className="bg-info block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3" onClick={() => handleUpdateTheme("data-topbar", "topbar6")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="topbar6Topbar"
                        defaultValue="topbar6"
                        checked={
                          themeSettings["data-topbar"] === "topbar6"
                        }
                      />
                      <label
                        htmlFor="topbar6Topbar"
                        className="bg-indigo block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                  </div>
                  <h6 className="text-[14px] font-medium mb-2">
                    Gradient Colors
                  </h6>
                  <div className="flex items-center flex-wrap topbar-background">
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar1")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar1Topbar"
                        defaultValue="gradienttopbar1"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar1"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar1Topbar"
                        className="bg-indigo-gradient  block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar2")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar2Topbar"
                        defaultValue="gradienttopbar2"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar2"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar2Topbar"
                        className="bg-primary-gradient  block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar3")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar3Topbar"
                        defaultValue="gradienttopbar3"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar3"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar3Topbar"
                        className="bg-secondary-gradient  block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar4")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar4Topbar"
                        defaultValue="gradienttopbar4"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar4"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar4Topbar"
                        className="bg-dark-gradient block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar5")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar5Topbar"
                        defaultValue="gradienttopbar5"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar5"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar5Topbar"
                        className="bg-purple-gradient block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-3" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar6")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar6Topbar"
                        defaultValue="gradienttopbar6"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar6"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar6Topbar"
                        className="bg-orange-gradient block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                    <div className="theme-colorselect mb-3 me-0" onClick={() => handleUpdateTheme("data-topbar", "gradienttopbar7")}>
                      <input
                        type="radio"
                        name="data-topbar"
                        id="gradienttopbar7Topbar"
                        defaultValue="gradienttopbar7"
                        checked={
                          themeSettings["data-topbar"] === "gradienttopbar7"
                        }
                      />
                      <label
                        htmlFor="gradienttopbar7Topbar"
                        className="bg-info-gradient block w-[40px] h-[40px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"
                      >
                        <span className="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-0 -translate-y-0 items-center justify-center flex rounded-full"><i className="ti ti-check" /></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-0 border border-borderColor rounded-md">
            <h2 className="accordion-header">
              <button
                className="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                type="button"
                data-accordion-target="#sidebarcolor"
                aria-expanded="true"
              >
                Theme Colors
                <i className="ti ti-chevron-down data-accordion-icon transition-transform duration-300" />
              </button>
            </h2>
            <div id="sidebarcolor" className="accordion-collapse">
              <div className="p-5 pb-2 border-t border-borderColor">
                <div className="theme-content">
                  <div className="flex items-center flex-wrap">
                    <div className="theme-colorsset me-2 mb-2" onClick={() => handleUpdateTheme("data-color", "primary")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="primaryColor"
                        defaultValue="primary"
                        defaultChecked
                        checked={
                          themeSettings["data-color"] === "primary"
                        }
                      />
                      <label htmlFor="primaryColor" className="primary-clr" />
                    </div>
                    <div className="theme-colorsset me-2 mb-2" onClick={() => handleUpdateTheme("data-color", "secondary")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="secondaryColor"
                        defaultValue="secondary"
                        checked={
                          themeSettings["data-color"] === "secondary"
                        }
                      />
                      <label
                        htmlFor="secondaryColor"
                        className="secondary-clr before:bg-secondary"
                      />
                    </div>
                    <div className="theme-colorsset me-2 mb-2" onClick={() => handleUpdateTheme("data-color", "orange")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="orangeColor"
                        defaultValue="orange"
                        checked={
                          themeSettings["data-color"] === "orange"
                        }
                      />
                      <label
                        htmlFor="orangeColor"
                        className="orange-clr before:bg-orange"
                      />
                    </div>
                    <div className="theme-colorsset me-2 mb-2" onClick={() => handleUpdateTheme("data-color", "teal")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="tealColor"
                        defaultValue="teal"
                        checked={
                          themeSettings["data-color"] === "teal"
                        }
                      />
                      <label
                        htmlFor="tealColor"
                        className="teal-clr before:bg-teal"
                      />
                    </div>
                    <div className="theme-colorsset me-2 mb-2" onClick={() => handleUpdateTheme("data-color", "purple")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="purpleColor"
                        defaultValue="purple"
                        checked={
                          themeSettings["data-color"] === "purple"
                        }
                      />
                      <label
                        htmlFor="purpleColor"
                        className="purple-clr before:bg-purple"
                      />
                    </div>
                    <div className="theme-colorsset me-2 mb-2" onClick={() => handleUpdateTheme("data-color", "indigo")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="indigoColor"
                        defaultValue="indigo"
                        checked={
                          themeSettings["data-color"] === "indigo"
                        }
                      />
                      <label
                        htmlFor="indigoColor"
                        className="indigo-clr before:bg-indigo"
                      />
                    </div>
                    <div className="theme-colorsset mb-2" onClick={() => handleUpdateTheme("data-color", "info")}>
                      <input
                        type="radio"
                        name="data-color"
                        id="infoColor"
                        defaultValue="info"
                        checked={
                          themeSettings["data-color"] === "info"
                        }
                      />
                      <label
                        htmlFor="infoColor"
                        className="info-clr before:bg-info"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 offcanvas-header border-t border-borderColor">
        <button type="button" className="btn w-full btn-light" id="reset-layout" onClick={handleResetTheme}>
          <i className="ti ti-restore me-1" />
          Reset
        </button>
        <button type="button" className="btn w-full btn-primary">
          Buy Product
        </button>
      </div>
    </div>
    
  </>
  
  );
};

export default React.memo(ThemeSettings);