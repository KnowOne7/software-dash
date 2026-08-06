import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import CommonFooter from "../../../components/common-footer/commonFooter";
import HeaderActions from "../../../components/header-actions/headerActions";
import ProposalsModal from "./proposalsModal";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";

const ProposalsGrid = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Proposals
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
                    Proposals
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <HeaderActions />
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
                      data-dropdown-hide="filter-dropdown"
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
                            Subjects
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
                              SEO Proposals
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
                              Logo
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
                            Sent to
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
                              HarborVie w
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
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              RiverStone Ventur
                            </label>
                          </li>
                        </ul>
                        {/* Load More */}
                        <div className="mt-4">
                          <button className="text-primary hover:underline">
                            Load More
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 id="accordion-heading-3">
                        <button
                          type="button"
                          className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-3"
                          aria-expanded="true"
                          aria-controls="accordion-body-3"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Date of Proposals
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-3"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-3"
                        data-accordion-body=""
                      >
                        <div className="input-group w-auto input-group-flat">
                           <CommonDatePicker placeholder="dd/mm/yyyy" />
                        </div>
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
                            Create Date
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-7"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-7"
                        data-accordion-body=""
                      >
                        <div className="input-group w-auto input-group-flat">
                         <CommonDatePicker placeholder="dd/mm/yyyy" />
                        </div>
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
                            Project
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-5"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-5"
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
                              Truelysell
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Dreamsports
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Best@laundry
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Doccure
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h2 id="accordion-heading-6">
                        <button
                          type="button"
                          className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-6"
                          aria-expanded="true"
                          aria-controls="accordion-body-6"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Status
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-6"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-6"
                        data-accordion-body=""
                      >
                        <ul className="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Active
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Inactive
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
                        to={all_routes.ProposalsList}
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
                  to={all_routes.ProposalsList}
                  className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.ProposalsGrid}
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
                Add New Proposal
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-success text-white rounded px-2 py-0.5 inline-flex me-2">
                      Accepted
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        NovaWave LLC
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-danger text-white rounded px-2 py-0.5 inline-flex me-2">
                      Deleted
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Redwood Inc
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-info text-white rounded px-2 py-0.5 inline-flex me-2">
                      Draft
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        HarborView
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-warning text-white rounded px-2 py-0.5 inline-flex me-2">
                      Declined
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        CoastalStar Co.
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-warning text-white rounded px-2 py-0.5 inline-flex me-2">
                      Declined
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Summit Peak
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-teal text-white rounded px-2 py-0.5 inline-flex me-2">
                      Sent
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        Silver Hawk
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-danger text-white rounded px-2 py-0.5 inline-flex me-2">
                      Deleted
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        BlueSky Industries
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
                  <span className="text-xs bg-info-100  text-info rounded border-b border-info px-2 py-0.5 inline-flex me-2">
                    #1493016
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
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" /> View Proposal
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-checks me-1" /> Mark as Accpeted
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file me-1" /> Mark as Draft
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-sticker me-1" /> Mark as Declined
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Convert to estimate
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-file-invoice me-1" /> Convert to Invoice
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
                  <div>
                    <h4 className="mb-1 text-[14px] font-semibold">SEO Proposal</h4>
                    <p className="text-[13px] mb-0">Project : Truelysell</p>
                  </div>
                  <div>
                    <span className="text-xs bg-info text-white rounded px-2 py-0.5 inline-flex me-2">
                      Draft
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-moneybag text-gray-800 me-1" /> Total Value
                    : $2,04,214
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-calendar-event text-gray-800 me-1" /> Date :
                    25 May 2024
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-calendar-stats text-gray-800 me-1" /> Open
                    till : 31 Jun 2024
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
                    <span>Sent to</span>
                    <h6 className="text-sm font-medium">
                      <Link
                        to="#"
                        className="text-gray-900 hover:text-primary"
                      >
                        NovaWave LLC
                      </Link>
                    </h6>
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
      <ProposalsModal />
    </>


  );
};

export default ProposalsGrid;
