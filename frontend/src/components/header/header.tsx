// ...existing code...
import React from "react";
import { Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setMobileSidebar,
  toggleHiddenLayout,
} from "../../core/redux/sidebarSlice";
import { useEffect, useState, useRef, useCallback } from "react";
import { updateTheme } from "../../core/redux/themeSlice";
import i18n from "../../i18n";
import ImageWithBasePath from "../image-with-base-path";
import { all_routes } from "../../routes/all_routes";
import HeaderModal from "./headerModal";

// Function to load/unload RTL CSS
const loadRTLStylesheet = () => {
  const existingLink = document.getElementById("rtl-stylesheet");
  if (!existingLink) {
    const link = document.createElement("link");
    link.id = "rtl-stylesheet";
    link.rel = "stylesheet";
    // fixed: use href instead of to
    link.href = "/src/assets/css/bootstrap.rtl.min.css";
    document.head.appendChild(link);
  }
};

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const themeSettings = useSelector((state: any) => state.theme.themeSettings);
  const hiddenLayout = useSelector(
    (state: any) => state.sidebarSlice.hiddenLayout
  );

  const mobileSidebar = useSelector(
    (state: any) => state.sidebarSlice.mobileSidebar
  );

  const toggleMobileSidebar = useCallback(() => {
    dispatch(setMobileSidebar(!mobileSidebar));
  }, [dispatch, mobileSidebar]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
        setIsFullscreen(false);
      }
    }
  }, [isFullscreen]);

  const handleUpdateTheme = useCallback(
    (key: string, value: string) => {
      if (themeSettings["dir"] === "rtl" && key !== "dir") {
        dispatch(updateTheme({ dir: "ltr" }));
      }
      dispatch(updateTheme({ [key]: value }));
    },
    [dispatch, themeSettings]
  );

  // Extract themeSettings dependencies for useEffect
  const themeDeps = [
    themeSettings["data-bs-theme"],
    themeSettings["dir"],
    themeSettings["data-layout"],
    themeSettings["data-sidebar"],
    themeSettings["data-color"],
    themeSettings["data-topbar"],
    themeSettings["data-size"],
    themeSettings["data-width"],
    themeSettings["data-sidebarbg"],
  ];
  useEffect(() => {
    const htmlElement = document.documentElement as HTMLElement;
    Object.entries(themeSettings).forEach(([key, value]) => {
      htmlElement.setAttribute(key as string, String(value));
    });
  }, themeDeps);

  const [searchValue, setSearchValue] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Move inline event handlers to named functions
  const handleToggleBtn2Click = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (themeSettings["data-layout"] === "hidden") {
        // In hidden mode, toggle the hidden-layout class on body
        const body = document.body;
        if (body.classList.contains("hidden-layout")) {
          body.classList.remove("hidden-layout");
        } else {
          body.classList.add("hidden-layout");
        }
        // Also toggle the hidden layout state in Redux
        dispatch(toggleHiddenLayout());
      } else {
        // In other modes, use mobile sidebar toggle
        toggleMobileSidebar();
      }
    },
    [dispatch, toggleMobileSidebar, themeSettings, hiddenLayout]
  );
  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    },
    []
  );

  // added: toggle theme based on current value
  const handleThemeToggle = useCallback(() => {
    const current = themeSettings["data-bs-theme"] || "light";
    handleUpdateTheme("data-bs-theme", current === "dark" ? "light" : "dark");
  }, [handleUpdateTheme, themeSettings]);

  // added: mobile btn click handler to prevent navigation
  const handleMobileBtnClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      toggleMobileSidebar();
    },
    [toggleMobileSidebar]
  );

  // Load RTL stylesheet on mount if current language is Arabic
  useEffect(() => {
    if (i18n.language === "ar") {
      loadRTLStylesheet();
    }
  }, []);

  // Manage hidden-layout class on body tag for hidden layout mode
  useEffect(() => {
    const body = document.body;
    
    if (themeSettings["data-layout"] === "hidden") {
      // In hidden layout mode, sync body class with Redux state
      if (hiddenLayout) {
        body.classList.add("hidden-layout");
      } else {
        body.classList.remove("hidden-layout");
      }
    } else {
      // In other layout modes, ensure hidden-layout class is removed
      body.classList.remove("hidden-layout");
    }
  }, [themeSettings["data-layout"], hiddenLayout]);

  return (
    <>
      {/* Topbar Start */}
      <header className={`${pathname === '/layout-rtl' ? "navbar-header header px-5 py-2 fixed top-0 left-0 right-0 bg-white h-[56px] border-b border-borderColor lg:right-vertical-w" : "navbar-header header px-5 py-2 fixed top-0 left-0 right-0 bg-white h-[56px] border-b border-borderColor lg:left-vertical-w"}`}>
        <div className="w-full flex flex-wrap justify-between items-center gap-4">
          {/* Left: Logo & Toggle */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Link
              to={all_routes.dealsDashboard}
              className="items-center hidden"
            >
              <span className="block dark:hidden">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  alt="logo"
                  className="h-8"
                />
              </span>
              <span className="hidden dark:block">
                <ImageWithBasePath
                  src="assets/img/logo-white.svg"
                  alt="logo-white"
                  className="h-8"
                />
              </span>
            </Link>
            {/* Mobile Sidebar Toggle */}
            <Link
              to="#sidebar"
              id="mobile_btn"
              className="block lg:hidden text-gray-600 dark:text-gray-300 mobile_btn"
              onClick={handleMobileBtnClick}
            >
              <i className="ti ti-menu-deep text-xl" />
            </Link>
            {/* Desktop Sidebar Toggle */}
            <button
              id="toggle_btn2"
              className="text-gray-600 dark:text-gray-300"
              onClick={handleToggleBtn2Click}
            >
              <i className="ti ti-arrow-bar-to-right" />
            </button>
            {/* Search (Desktop only) */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  className="form-input pl-4 pr-10 py-2 rounded-md border-borderColor text-sm shadow placeholder-gray-100"
                  placeholder="Search Keyword"
                  value={searchValue}
                  onChange={handleSearchInputChange}
                  ref={searchInputRef}
                />
                <span className="absolute right-3 top-2 text-gray-900">
                  <i className="ti ti-command" />
                </span>
              </div>
            </div>
          </div>
          {/* Right: Icons & User */}
          <div className="flex items-center gap-3">
            {/* Mobile Search */}
            <button
              className="lg:hidden z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px] relative"
              data-dropdown-toggle="searchModal"
            >
              <i className="ti ti-search text-lg" />
            </button>
            {/* Fullscreen */}
            <button
              className="btnFullscreen z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px] relative"
              onClick={toggleFullscreen}
            >
              <i className="ti ti-maximize" />
            </button>
            {/* Dark Mode Toggle */}
            {pathname !== '/layout-rtl' && (
              <button
                id="light-dark-mode"
                className="hidden sm:inline-flex z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px] relative"
                onClick={handleThemeToggle}
              >
                <i className="ti ti-moon text-lg" />
              </button>
            )}
            {/* Pages Dropdown */}
            <div className="relative hidden sm:inline-flex">
              <button
                className="z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-[#0E9384] bg-[#cfe9e6] hover:bg-[#0E9384] hover:text-white duration-300 ease-in-out shadow p-[5px] relative"
                data-dropdown-toggle="pages-dropdown"
              >
                <i className="ti ti-layout-grid-add" />
              </button>
              <div
                id="pages-dropdown"
                className="hidden absolute right-0 mt-2 bg-white dark:bg-gray-700 shadow rounded p-2 w-64"
              >
                <Link
                  to={all_routes.contactList}
                  className="block rounded p-2 hover:bg-light dark:hover:bg-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                        Contacts
                      </p>
                      <span className="text-xs">View All the Contacts</span>
                    </div>
                    <i className="ti ti-chevron-right-pipe" />
                  </div>
                </Link>
                <Link
                  to={all_routes.pipeline}
                  className="block rounded p-2 hover:bg-light dark:hover:bg-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                        Pipeline
                      </p>
                      <span className="text-xs">View All the Pipeline</span>
                    </div>
                    <i className="ti ti-chevron-right-pipe" />
                  </div>
                </Link>
                <Link
                  to={all_routes.activities}
                  className="block rounded p-2 hover:bg-light dark:hover:bg-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                        Activities
                      </p>
                      <span className="text-xs">Activities</span>
                    </div>
                    <i className="ti ti-chevron-right-pipe" />
                  </div>
                </Link>
                <Link
                  to={all_routes.analytics}
                  className="block rounded p-2 hover:bg-light dark:hover:bg-gray-600"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-200">
                        Analytics
                      </p>
                      <span className="text-xs">Analytics</span>
                    </div>
                    <i className="ti ti-chevron-right-pipe" />
                  </div>
                </Link>
              </div>
            </div>
            {/* FAQ */}
            <Link
              to={all_routes.faq}
              className="hidden sm:inline-flex z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-[#3538CD] bg-[#d7d7f5] hover:bg-[#3538CD] hover:text-white duration-300 ease-in-out shadow p-[5px] relative"
            >
              <i className="ti ti-help-hexagon" />
            </Link>
            {/* Reports */}
            <Link
              to={all_routes.leadReports}
              className="hidden sm:inline-flex z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-[#f9b801] bg-[#fef8e6] hover:bg-[#f9b801] hover:text-white duration-300 ease-in-out shadow p-[5px] relative"
            >
              <i className="ti ti-chart-pie" />
            </Link>
            <div className="w-[1px] h-[20px] bg-gray-100" />
            {/* Message */}
            <Link
              to={all_routes.chat}
              className="relative z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px]"
            >
              <i className="ti ti-message-circle-exclamation" />
              <span className="absolute top-[6px] right-[6px] bg-danger text-white font-normal w-[12px] h-[12px] text-[6px] p-0 flex items-center justify-center rounded-full">
                14
              </span>
            </Link>
            {/* Notifications (simplified) */}
            <div className="relative">
              <button
                className="relative z-[1] flex items-center justify-center cursor-pointer w-[38px] h-[38px] rounded-[0.3125rem] text-gray-900 border border-borderColor shadow hover:bg-light hover:border-light p-[5px]"
                data-dropdown-toggle="notification-dropdown"
              >
                <i className="ti ti-bell-check animate-ring" />
                <span className="absolute top-[6px] right-[6px] bg-danger text-white font-normal w-[12px] h-[12px] text-[6px] p-0 flex items-center justify-center rounded-full">
                  10
                </span>
              </button>
              <div
                id="notification-dropdown"
                className="hidden p-0 dropdown-menu-end w-[300px] bg-white border border-borderColor rounded hidden"
              >
                <div className="p-2 border-b border-borderColor">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <h6 className="m-0 text-[16px] font-semibold">
                        Notifications
                      </h6>
                    </div>
                  </div>
                </div>
                {/* Notification Body */}
                <div className="relative z-[2] rounded-none overflow-y-auto scroll-smooth h-[270px] max-h-[300px]">
                  {/* Item */}
                  <div
                    className="py-4 border-b px-4 border-borderColor"
                    id="notification-1"
                  >
                    <div className="flex">
                      <div className="mr-2 relative shrink-0">
                        <ImageWithBasePath
                          src="assets/img/users/user-01.jpg"
                          className="w-10 h-10 rounded-full object-cover"
                          alt="Img"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="m-0 font-medium text-gray-800">
                          John Doe
                        </p>
                        <p className="mb-1">
                          left 6 comments on{" "}
                          <span className="font-medium text-gray-800">
                            Isla Nublar SOC2 compliance report
                          </span>
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>
                            <i className="ti ti-clock mr-1" />4 min ago
                          </span>
                          <div className="flex items-center gap-2">
                            <Link
                              to="#"
                              className="w-2 h-2 rounded-full bg-red-600"
                              title="Make as Read"
                            />
                            <button className="p-0 w-4 h-4">
                              <i className="ti ti-x" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="py-4 border-b px-4 border-borderColor">
                    <div className="flex">
                      <div className="mr-2 relative shrink-0">
                        <ImageWithBasePath
                          src="assets/img/users/user-12.jpg"
                          className="w-10 h-10 rounded-full object-cover"
                          alt="Img"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="m-0 font-medium text-gray-800">
                          Thomas William
                        </p>
                        <p className="mb-1">
                          “Oh, I finished de-bugging the phones, but the
                          system's compiling for eighteen minutes, or twenty...”
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>
                            <i className="ti ti-clock mr-1" />8 min ago
                          </span>
                          <div className="flex items-center gap-2">
                            <Link
                              to="#"
                              className="w-2 h-2 rounded-full bg-red-600"
                              title="Make as Read"
                            />
                            <button className="p-0 w-4 h-4">
                              <i className="ti ti-x" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="py-4 border-b px-4 border-borderColor">
                    <div className="flex">
                      <div className="mr-2 relative shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-12.jpg"
                          className="w-10 h-10 rounded-full object-cover"
                          alt="Img"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="m-0 font-medium text-gray-800">
                          Sarah Anderson
                        </p>
                        <p className="mb-1">
                          attached a file to{" "}
                          <span className="font-medium text-gray-900">
                            Isla Nublar SOC2 compliance report
                          </span>
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>
                            <i className="ti ti-clock mr-1" />
                            15 min ago
                          </span>
                          <div className="flex items-center gap-2">
                            <Link
                              to="#"
                              className="w-2 h-2 rounded-full bg-red-600"
                              title="Make as Read"
                            />
                            <button className="p-0 w-4 h-4">
                              <i className="ti ti-x" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="py-4 border-b px-4 border-borderColor">
                    <div className="flex">
                      <div className="mr-2 relative shrink-0">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-08.jpg"
                          className="w-10 h-10 rounded-full object-cover"
                          alt="Img"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="m-0 font-medium text-gray-800">
                          Ann McClure
                        </p>
                        <p className="mb-1">
                          mentioned you in{" "}
                          <span className="font-medium text-gray-900">
                            Bug Fix Review - Task #432
                          </span>
                        </p>
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>
                            <i className="ti ti-clock mr-1" />
                            20 min ago
                          </span>
                          <div className="flex items-center gap-2">
                            <Link
                              to="#"
                              className="w-2 h-2 rounded-full bg-red-600"
                              title="Make as Read"
                            />
                            <button className="p-0 w-4 h-4">
                              <i className="ti ti-x" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* View All */}
                <div className="p-2 rounded-b border-t border-borderColor text-center">
                  <Link
                    to={all_routes.notificationbell}
                    className="text-center underline text-sm text-gray-900 hover:text-primary"
                  >
                    View All Notifications
                  </Link>
                </div>
              </div>
            </div>
            {/* User Profile */}
            <div>
              <button
                data-dropdown-toggle="profile-dropdown"
                className="flex items-center justify-center"
                type="button"
              >
                <span className="relative">
                  <ImageWithBasePath
                    src="assets/img/users/user-40.jpg"
                    alt="Img"
                    className="w-[38px] rounded"
                  />
                  <span className="right-0 bottom-0 absolute  w-3 h-3 bg-success border-2 border-white rounded-full" />
                </span>
              </button>
              <div
                id="profile-dropdown"
                className="z-10 hidden bg-white rounded-[5px] shadow w-[250px] p-2 pb-0"
              >
                <div className="flex items-center bg-light dark:bg-gray-800 p-2 rounded">
                  <ImageWithBasePath
                    src="assets/img/users/user-40.jpg"
                    alt="Img"
                    className="w-[42px] h-[42px] rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-medium text-gray-800 dark:text-white mb-0">
                      Katherine Brooks
                    </p>
                    <span className="block text-xs text-gray-600 dark:text-gray-400">
                      Installer
                    </span>
                  </div>
                </div>
                <div className="py-2">
                  <Link
                    className="flex items-center text-gray-500 p-2 px-3 rounded hover:bg-light"
                    to={all_routes.profile}
                  >
                    <i className="ti ti-user-circle me-1" />
                    Profile Setting
                  </Link>
                  <div className="flex items-center justify-between p-2 px-3 rounded w-full cursor-pointer hover:bg-light">
                    <i className="ti ti-bell" />
                    <label className="flex items-center justify-between w-full cursor-pointer">
                      <input
                        type="checkbox"
                        defaultValue=""
                        className="sr-only peer"
                      />
                      <span className="ms-1">Notifications</span>
                      <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                    </label>
                  </div>
                  <Link
                    className="flex items-center text-gray-500 p-2 px-3 rounded hover:bg-light"
                    to="#"
                  >
                    <i className="ti ti-help-circle me-1" />
                    Help &amp; Support
                  </Link>
                  <Link
                    className="flex items-center text-gray-500 p-2 px-3 rounded hover:bg-light"
                    to={all_routes.profile}
                  >
                    <i className="ti ti-settings me-1" />
                    Settings
                  </Link>
                </div>
                <div className="py-2 border-t border-borderColor">
                  <Link
                    className="flex items-center p-2 px-3 rounded text-primary hover:bg-light"
                    to={all_routes.login}
                  >
                    <i className="ti ti-logout me-1 fs-17 align-middle" />
                    Sign Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Topbar End */}
      <HeaderModal/>
    </>
  );
};

export default React.memo(Header);
// ...existing code...
