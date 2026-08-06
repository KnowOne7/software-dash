import { useAppDispatch, useAppSelector } from "../../core/redux/store";
import { updateTheme } from "../../core/redux/themeSlice";
import React, { useEffect, useState, useCallback } from "react";
import {
  setExpandMenu,
  setMobileSidebar,
  setHiddenLayout,
} from "../../core/redux/sidebarSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { SidebarData } from "./sidebarData";
import { all_routes } from "../../routes/all_routes";
import ImageWithBasePath from "../image-with-base-path";
import { useTranslation } from "react-i18next";

export interface SidebarMenuItem {
  label: string;
  link: string;
  submenu?: boolean;
  icon?: string;
  submenuItems?: SidebarMenuItem[];
  relatedRoutes?: string[];
  count?: number;
  tittle?: string;
}

const Sidebar = () => {
  const route = all_routes;
  const Location = useLocation();
  const pathname = Location.pathname;
  const [subsidebar, setSubsidebar] = useState("");
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isMenuItemActive = useCallback(
    (item: SidebarMenuItem, pathname: string): boolean => {
      if (item.link && item.link !== "#" && item.link === pathname) return true;
      if (item.relatedRoutes && item.relatedRoutes.includes(pathname))
        return true;
      if (item.submenuItems && item.submenuItems.length > 0) {
        return item.submenuItems.some((child) =>
          isMenuItemActive(child, pathname)
        );
      }
      return false;
    },
    []
  );

  useEffect(() => {
    const newOpenMenus: Record<string, boolean> = {};
    (SidebarData as { submenuItems: SidebarMenuItem[] }[]).forEach(
      (mainLabel) => {
        mainLabel.submenuItems?.forEach((title: SidebarMenuItem) => {
          if (isMenuItemActive(title, pathname)) {
            newOpenMenus[title.label] = true;
          }
        });
      }
    );
    setOpenMenus(newOpenMenus);
  }, [pathname, isMenuItemActive]);

  const handleMenuToggle = useCallback((label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  }, []);


  const toggleSubsidebar = useCallback((subitem: string) => {
    setSubsidebar((prev) => (subitem === prev ? "" : subitem));
  }, []);

  const handleClick = useCallback(
    (label: string) => {
      handleMenuToggle(label);
    },
    [handleMenuToggle]
  );

  const navigate = useNavigate();
  const themeSettings = useAppSelector((state) => state.theme.themeSettings);

  const handleMiniSidebar = useCallback(() => {
    if (themeSettings["data-layout"] === "hidden") {
      dispatch(setHiddenLayout(false));
      return;
    }
    const rootElement = document.documentElement;
    const isMini = rootElement.getAttribute("data-layout") === "mini";
    const updatedLayout = isMini ? "default" : "mini";
    dispatch(
      updateTheme({
        "data-layout": updatedLayout,
      })
    );
    if (isMini) {
      rootElement.classList.remove("mini-sidebar");
    } else {
      rootElement.classList.add("mini-sidebar");
    }
  }, [dispatch, themeSettings]);

  const onMouseEnter = useCallback(() => {
    dispatch(setExpandMenu(true));
  }, [dispatch]);

  const onMouseLeave = useCallback(() => {
    dispatch(setExpandMenu(false));
  }, [dispatch]);

  const handleLayoutClick = useCallback(
    (layout: string) => {
      const layoutSettings: any = {
        "data-layout": "default",
        dir: "ltr",
      };
      switch (layout) {
        case "Default":
          layoutSettings["data-layout"] = "default";
          break;
        case "Hidden":
          layoutSettings["data-layout"] = "hidden";
          dispatch(setHiddenLayout(true));
          break;
        case "Mini":
          layoutSettings["data-layout"] = "mini";
          break;
        case "Hover View":
          layoutSettings["data-layout"] = "hoverview";
          break;
        case "Full Width":
          layoutSettings["data-layout"] = "full-width";
          break;
        case "Dark":
          layoutSettings["data-bs-theme"] = "dark";
          break;
        case "RTL":
          layoutSettings.dir = "rtl";
          break;
        default:
          break;
      }
      dispatch(updateTheme(layoutSettings));
      navigate("/dashboard");
    },
    [dispatch, navigate]
  );

  const mobileSidebar = useAppSelector(
    (state) => state.sidebarSlice.mobileSidebar
  );
  const toggleMobileSidebar = useCallback(() => {
    dispatch(setMobileSidebar(!mobileSidebar));
  }, [dispatch, mobileSidebar]);

  useEffect(() => {
    const rootElement: any = document.documentElement;
    Object.entries(themeSettings).forEach(([key, value]) => {
      rootElement.setAttribute(key, value);
    });

    if (themeSettings["data-layout"] === "hidden") {
      rootElement.classList.remove("mini-sidebar");
    } else if (themeSettings["data-layout"] === "mini") {
      rootElement.classList.add("mini-sidebar");
    } else {
      rootElement.classList.remove("mini-sidebar");
    }
  }, [
    themeSettings["data-bs-theme"],
    themeSettings["dir"],
    themeSettings["data-layout"],
    themeSettings["data-sidebar"],
    themeSettings["data-color"],
    themeSettings["data-topbar"],
    themeSettings["data-size"],
    themeSettings["data-width"],
    themeSettings["data-sidebarbg"],
  ]);

  return (
    <>
      <div
        className={`${pathname === '/layout-rtl' ? 'sidebar fixed top-0 right-0 bottom-0 w-sidebar bg-white border-l border-borderColor' : 'sidebar fixed top-0 left-0 bottom-0 w-sidebar bg-white border-r border-borderColor'}`}
        id="sidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="sidebar-logo fixed h-[56px] w-sidebar pt-[19px] px-4 border-b border-borderColor">
          <div>
            <Link to={route.dealsDashboard} className="logo logo-normal">
              <ImageWithBasePath src="assets/img/logo.svg" alt="Logo" />
            </Link>
            <Link to={route.dealsDashboard} className="logo-small hidden">
              <ImageWithBasePath src="assets/img/logo-small.svg" alt="Logo" />
            </Link>
            <Link to={route.dealsDashboard} className="dark-logo hidden">
              <ImageWithBasePath src="assets/img/logo-white.svg" alt="Logo" />
            </Link>
          </div>
          <button
            id="toggle_btn"
            className="sidenav-toggle-btn btn p-0 active absolute top-4  right-2 w-[22px] h-[22px] rounded-full text-dark text-[16px]"
            onClick={handleMiniSidebar}
          >
            <i className="ti ti-arrow-bar-to-left" />
          </button>
          <button
            className="sidebar-close text-[20px] absolute top-4  right-[20px] rounded-full"
            onClick={toggleMobileSidebar}
          >
            <i className="ti ti-x align-middle" />
          </button>
        </div>

        
          <OverlayScrollbarsComponent style={{ height: "100%", top: "56px",padding:"16px" }}>
            <div className="sidebar-inner">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul className="pb-[20px]">
                {(SidebarData || []).map((section, sectionIndex) => (
                  <React.Fragment key={`section-${sectionIndex}`}>
                    <li className="menu-title uppercase text-[13px] font-medium text-gray-500 mb-3 mt-2">
                      <span>{t(`${section?.tittle}`) || section?.tittle}</span>
                    </li>

                    <li>
                      <ul className="mb-[25px]">
                        {(section.submenuItems || []).map((title, i) => {
                          const isActive = isMenuItemActive(title, Location.pathname);
                          const isMenuOpen = openMenus[title.label] || false;
                          const topLiClass = title.submenu
                            ? "submenu mb-[5px]"
                            : `mb-[5px] ${isActive ? "active" : ""}`;
                          const topLinkClass =
                            title.submenu || title.submenuItems
                              ? "p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]"
                              : "p-1 flex items-center text-gray-900 font-medium relative rounded-[0.3125rem]";

                          return (
                            <li className={topLiClass} key={`title-${sectionIndex}-${i}`}>
                              <Link
                                to={title.submenu ? "#" : title.link}
                                onClick={() => {
                                  handleClick(title?.label);
                                  if (section?.tittle === "Layout") {
                                    handleLayoutClick(title?.label);
                                  }
                                }}
                                className={`${topLinkClass} ${isActive ? "active" : ""} ${isMenuOpen ? "subdrop" : ""}`}
                                tabIndex={0}
                              >
                                <i className={`ti ti-${title.icon} w-[28px] h-[28px] inline-flex text-[16px] items-center justify-center rounded-[0.3125rem] shrink-0`}></i>
                                <span>{t(`${title?.label}`) || title?.label}</span>
                                {title.label === "Changelog" && (
                                  <span className="badge badge-sm bg-success" style={{ marginLeft: 8 }}>
                                    v2.3.3
                                  </span>
                                )}
                                {title?.count && <span className="count">{title.count}</span>}
                                {title?.submenu && <span className="menu-arrow"></span>}
                              </Link>

                              {title?.submenu && (
                                <ul style={{ display: isMenuOpen ? "block" : "none" }}>
                                  {(title.submenuItems || []).map((item: SidebarMenuItem, j: any) => {
                                    const isSubActive = isMenuItemActive(item, Location.pathname);
                                    return (
                                      <li
                                        key={`item-${sectionIndex}-${i}-${j}`}
                                        className={`${item?.submenuItems ? "submenu submenu-two" : ""}`}
                                      >
                                        <Link
                                          to={item?.submenu ? "#" : item?.link}
                                          className={`pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block ${isSubActive ? "active" : ""} ${subsidebar === item?.label ? "subdrop" : ""}`}
                                          onClick={() => {
                                            toggleSubsidebar(item?.label);
                                            if (title?.label === "Layouts") {
                                              handleLayoutClick(item?.label);
                                            }
                                          }}
                                          tabIndex={0}
                                        >
                                          {t(`${item?.label}`) || item?.label}
                                          {item?.submenu && <span className="menu-arrow custome-menu"></span>}
                                        </Link>

                                        {item?.submenuItems && (
                                          <ul style={{ display: subsidebar === item?.label ? "block" : "none" }}>
                                            {(item.submenuItems || []).map((subItem, k) => {
                                              const isSubSubActive = isMenuItemActive(subItem, Location.pathname);
                                              return (
                                                <li key={`submenu-item-${sectionIndex}-${i}-${j}-${k}`}>
                                                  <Link
                                                    to={subItem?.submenu ? "#" : subItem?.link}
                                                    className={`pl-[36px] pr-[4px] py-[8px] text-[13px] relative font-normal block ${isSubSubActive ? "active" : ""}`}
                                                    tabIndex={0}
                                                  >
                                                    {t(`${subItem?.label}`) || subItem?.label}
                                                  </Link>
                                                </li>
                                              );
                                            })}
                                          </ul>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            </div>
          </OverlayScrollbarsComponent>
   
      </div>
    </>
  );
};

export default React.memo(Sidebar);
