import { useEffect } from "react";
import { initDropdowns } from "flowbite";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { Link } from "react-router";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import ContractsModal from "./contractsModal";
import { closeDropdown } from "../../../utils/dropdownUtils";

const ContractsGrid = () => {

  useEffect(() => {
    initDropdowns();
  }, []);

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Contracts
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  125
                </span>
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                  <li>
                    <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                      Home
                    </Link>
                    <span>
                      <i className="ti ti-chevron-right" />
                    </span>
                  </li>
                  <li className="text-dark font-medium" aria-current="page">
                    Contracts
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Dropdown */}
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
                      Export as Excel{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Refresh Button */}
              <button
                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Refresh"
              >
                <i className="ti ti-refresh" />
              </button>
              {/* Collapse Button */}
              <button
                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Collapse"
                id="collapse-header"
              >
                <i className="ti ti-transition-top" />
              </button>
            </div>
          </div>
          {/* End Page Header */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-y-3">
              {/* Search Input with Icon */}
              <div className="relative me-3">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-4 py-1.5 border border-borderColor shadow rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <button
                  className="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown"
                >
                  <i className="ti ti-filter me-1" />
                  Filter
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <div
                  id="filter-dropdown"
                  className="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]"
                >
                  <div className="filter-header flex items-center justify-between border-b border-borderColor p-3">
                    <h6 className="mb-0">
                      <i className="ti ti-filter me-1" />
                      Filter
                    </h6>
                    <button
                      onClick={() => closeDropdown('filter-dropdown')}
                      className="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"
                    >
                      <i className="ti ti-x" />
                    </button>
                  </div>
                  <div
                    id="accordionExample"
                    data-accordion="collapse"
                    className="p-4"
                  >
                    <div className="mb-4">
                      <h2 id="accordion-heading-1">
                        <button
                          type="button"
                          className="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-body-1"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Contracts Id
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-1"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1"
                        data-accordion-body=""
                      >
                        <div className="relative mb-4">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                          />
                        </div>
                        <ul className="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              274729
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              #274730
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              #274731
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              #274732
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              #274733
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              #274734
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              #274735
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 id="accordion-heading-7">
                        <button
                          type="button"
                          className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-7"
                          aria-expanded="true"
                          aria-controls="accordion-body-7"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Subject
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-7"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-7"
                        data-accordion-body=""
                      >
                        <div className="relative mb-4">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            placeholder="Search"
                            className="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                          />
                        </div>
                        <ul className="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              SEO Proposal
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Web Design
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Logo &amp; Branding
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Development
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Business Card Design
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Technical SEO
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Portfolio Site
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 id="accordion-heading-2">
                        <button
                          type="button"
                          className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-2"
                          aria-expanded="true"
                          aria-controls="accordion-body-2"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Customer
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-2"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2"
                        data-accordion-body=""
                      >
                        <ul className="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              NovaWave LLC
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              BlueSky Industries
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Silver Hawk
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Summit Peak
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              RiverStone Ltd
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Bright Bridge Grp
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              CoastalStar Co.
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 id="accordion-heading-5">
                        <button
                          type="button"
                          className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-5"
                          aria-expanded="true"
                          aria-controls="accordion-body-5"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Contract Type
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-5"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5"
                        data-accordion-body=""
                      >
                        <ul className="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Contract Under Seal
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Executory Contracts
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Express Contracts
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Implied Contracts
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to="#"
                        className="btn border border-borderColor text-center w-full"
                      >
                        Reset
                      </Link>
                      <Link
                        to={all_routes.ContractsList}
                        className="btn btn-primary w-full"
                      >
                        Filter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-3">
              <div className="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                <Link
                  to={all_routes.ContractsList}
                  className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.ContractsGrid}
                  className="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"
                >
                  <i className="ti ti-layout-grid" />
                </Link>
              </div>
              {/* Add New Button */}
              <Link
                to="#"
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                data-drawer-target="offcanvas_add"
                data-drawer-show="offcanvas_add"
                aria-controls="offcanvas_add"
                data-drawer-placement="right"
              >
                <i className="ti ti-square-rounded-plus-filled" />
                Add New Contract
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                      #1465781
                    </span>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-1"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-1" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-[14px] mb-1 font-semibold">
                      SEO Contracts
                    </h6>
                    <p>Category : Contracts under Seal</p>
                  </div>
                  <div className="mb-4">
                    <p className="flex items-center mb-2">
                      <span className="text-dark me-1">
                        <i className="ti ti-calendar-event fs-16" />
                      </span>
                      Date : <span className="text-dark ms-1">23 Nov 2025</span>
                    </p>
                    <p className="flex items-center">
                      <span className="text-dark me-1">
                        <i className="ti ti-calendar-stats fs-16" />
                      </span>
                      Open till :{" "}
                      <span className="text-dark ms-1">17 Dec 2025</span>
                    </p>
                  </div>
                  <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                    <Link
                      to="#"
                      className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/company/company-01.svg"
                        className="w-auto h-auto"
                        alt="img"
                      />
                    </Link>
                    <div className="flex flex-col">
                      <Link
                        to="#"
                        className="text-dark font-medium"
                      >
                        NovaWave LLC
                      </Link>
                      <span className="block">Customer</span>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value : $2,04,214
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274730
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-2"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-2" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">Web Design</h6>
                      <p>Category : Executory Contracts</p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">07 Nov 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">11 Dec 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-02.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          BlueSky Industries
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $1,45,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274731
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-3"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-3" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Logo &amp; Branding
                      </h6>
                      <p>Category : Express Contracts</p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">15 Oct 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">23 Nov 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-03.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          Sliver Hawk
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $2,15,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274732
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-4"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-4" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Development
                      </h6>
                      <p>Category : Implied Contracts</p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">28 Sep 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">12 Nov 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-04.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          Summit Peak
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $4,80,380
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274733
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-5"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-5" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Business Card Design
                      </h6>
                      <p>Category : Unconscionable </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">25 Sep 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">07 Nov 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-05.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          RiverStone Ltd
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $4,80,380
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274734
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-6"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-6" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Technical SEO
                      </h6>
                      <p>Category : Fixed Price Contract </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">12 Sep 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">27 Oct 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-06.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          Bright Bridge Grp
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $3,50,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274735
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-7"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-7" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Social Media profile Branding
                      </h6>
                      <p>Category : Cost Plus Contract </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">17 Aug 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">15 Oct 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-07.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          CoastalStar.Co.
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $1,23,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274736
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-8"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-8" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Portfolio Site
                      </h6>
                      <p>Category : Service Level Agreement </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">11 Jun 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">04 Oct 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-08.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          HarborView
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $3,12,500
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274737
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-9"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-9" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Logo Design
                      </h6>
                      <p>Category : Partnership Contract </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">11 Mar 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">29 Sep 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-09.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          Golden Gate Ltd
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $4,18,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274738
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-10"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-10" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">Web Design</h6>
                      <p>Category : Executory Contracts</p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">27 Jan 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">25 Sep 2025</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-10.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          BlueSky Industries
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $1,45,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274739
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-11"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-11" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">HarborView</h6>
                      <p>Category : Implied Contracts </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">17 Dec 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">18 Oct 2026</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-07.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          RiverStone Ltd
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $4,18,000
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="border border-borderColor rounded shadow bg-white">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex">
                        274740
                      </span>
                    </div>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        data-dropdown-toggle="dropdown-menu-12"
                      >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id="dropdown-menu-12" className="absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-copy me-1" /> Clone
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_view"
                          data-drawer-show="offcanvas_view"
                          aria-controls="offcanvas_view"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-clipboard-copy me-1" /> View Contract
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-checks me-1" /> Mark as Signed
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          <i className="ti ti-printer me-1" /> Print
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className="mb-3">
                      <h6 className="text-[14px] mb-1 font-semibold">
                        Business Card Design
                      </h6>
                      <p>Category : Partnership Contract </p>
                    </div>
                    <div className="mb-4">
                      <p className="flex items-center mb-2">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-event fs-16" />
                        </span>
                        Date : <span className="text-dark ms-1">18 Dec 2025</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-dark me-1">
                          <i className="ti ti-calendar-stats fs-16" />
                        </span>
                        Open till :{" "}
                        <span className="text-dark ms-1">19 Oct 2026</span>
                      </p>
                    </div>
                    <div className="bg-light border border-borderColor rounded flex items-center p-2 mb-4">
                      <Link
                        to="#"
                        className="w-10 h-10 rounded-full border border-borderColor flex items-center justify-center bg-white me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/company/company-08.svg"
                          className="w-auto h-auto"
                          alt="img"
                        />
                      </Link>
                      <div className="flex flex-col">
                        <Link
                          to="#"
                          className="text-dark font-medium"
                        >
                          RiverStone Ltd
                        </Link>
                        <span className="block">Customer</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-borderColor">
                    <div>
                      <span className="text-xs bg-info-100 text-info rounded px-2 py-0.5 inline-flex items-center">
                        {" "}
                        <i className="ti ti-moneybag me-1" />
                        Value: $4,80,380
                      </span>
                    </div>
                    <Link
                      to="#"
                      className="w-6 h-6 bg-light text-dark flex items-center justify-center rounded-full"
                    >
                      {" "}
                      <i className="ti ti-file-dots fs-12" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Link
              to="#"
              className="btn bg-primary text-white hover:bg-secondary"
            >
              <i className="ti ti-loader me-1" /> Load More
            </Link>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <ContractsModal />
    </>

  );
};

export default ContractsGrid;
