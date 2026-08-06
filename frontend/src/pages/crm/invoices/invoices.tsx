import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import CommonFooter from "../../../components/common-footer/commonFooter";
import InvoicesModals from "./invoicesModal";
import { closeDropdown } from "../../../utils/dropdownUtils";

const InvoicesGrid = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Invoices
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
                    Invoices
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
                            Client
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
                              NovaWave LLC
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Redwood Inc
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Harborview
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
                            Project
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-2"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-2"
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
                              Turelysell
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Dreamschat
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              DreamGigs
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Servbook
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
                            Amount
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
                              $2,15,000
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              $1,45,000
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              $2,12,000
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              $4,80,380
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
                        to={all_routes.InvoiceList}
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
                  to={all_routes.InvoiceList}
                  className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.InvoiceGrid}
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
                Add New Invoice
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
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
                    <div id="dropdown-menu-1" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/truellysel.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Truelysell
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-secondary">
                      Partially Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-01.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        NovaWave LLC
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465782
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-2"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-2" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dreamchat.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Dreamschat
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">
                      Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$1,45,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-02.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Redwood Inc
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465783
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-3"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-3" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/truellysell.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          DreamGigs
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-secondary">
                      Partially Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-03.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        HarborView
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465784
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-4"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-4" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/servbook.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Servbook
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">
                      Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-04.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        CoastalStar Co.
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465785
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-5"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-5" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dream-pos.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          DreamPOS
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-danger">
                      Unpaid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-05.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Summit Peak
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465786
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-6"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-6" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/kofejob.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Kofejob
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-secondary">
                      Partially Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-06.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Silver Hawk
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465787
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-7"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-7" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/smarthr.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          SmartHR
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-info">
                      Overdue
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-07.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        BlueSky Industries
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465788
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-8"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-8" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/doccure.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Doccure
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">
                      Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-08.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        NovaWave LLC
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465789
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-9"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-9" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/best.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Best@laundry
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-danger">
                      Unpaid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-09.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Redwood Inc
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465790
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-10"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-10" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/sports.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Dreamsports
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-success">
                      Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-10.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Acme Corp.
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465791
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-11"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-11" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/gig.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Dreamsgigs
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-warning">
                      Partially Paid
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-01.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Acme Corp.
                      </Link>
                    </h6>
                    <span>Sent to</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1465791
                  </span>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-12"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-12" className="hidden absolute end-0 w-[200px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.invoice_details}
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Invoices
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Partially Paid
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark ad Unpaid
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 me-2"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/smarthr.svg"
                        className="w-auto h-auto rounded-0"
                        alt="Truelysell"
                      />
                    </Link>
                    <div>
                      <h6 className="text-[14px] font-medium mb-0">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          SmartHR
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div>
                    <span className="text-xs text-white rounded px-2 py-0.5 inline-flex me-2 bg-info">
                      Overdue
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-report-money text-dark fs-16 me-1" />
                    Total Value : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-event text-dark fs-16 me-1" />
                    Due Date : <span className="text-dark ms-1">22 Jun 2025</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-1">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Paid Amount : <span className="text-dark ms-1">$2,15,000</span>
                  </p>
                  <p className="text-default inline-flex items-center mb-0">
                    <i className="ti ti-calendar-stats text-dark fs-16 me-1" />
                    Balance Amount : <span className="text-dark ms-1">$0</span>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <Link
                    to="#"
                    className="w-10 h-10 border border-borderColor flex items-center justify-center rounded-full flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-03.svg"
                      className="w-auto h-auto"
                      alt="img"
                    />
                  </Link>
                  <div>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        CoastalStar Co.
                      </Link>
                    </h6>
                    <span>Sent to</span>
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
      <InvoicesModals />
    </>

  );
};

export default InvoicesGrid;
