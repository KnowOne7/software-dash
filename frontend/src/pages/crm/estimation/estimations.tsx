import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import CommonFooter from "../../../components/common-footer/commonFooter";
import HeaderActions from "../../../components/header-actions/headerActions";
import EstimationModal from "./estimationModal";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import { closeDropdown } from "../../../utils/dropdownUtils";



const Estimations = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Estimations
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
                    Estimations
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
                  className="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
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
                            Project
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-1"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1"
                        data-accordion-body=""
                      >
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
                              Servbook
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              DreamsPOS
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Kofejob
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
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Best@laundry
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
                            Client Name
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
                            Date of Estimation
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
                            Estimated By
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-3"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-3"
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
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="flex items-center space-x-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-06.jpg"
                                  alt="Elizabeth"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>Elizabeth Morgan</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="flex items-center space-x-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-40.jpg"
                                  alt="Katherine"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>Katherine Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="flex items-center space-x-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-05.jpg"
                                  alt="Katherine"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>Sophia Lopez</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="flex items-center space-x-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-10.jpg"
                                  alt="Katherine"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>John Michael</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="flex items-center space-x-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-15.jpg"
                                  alt="Katherine"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>Natalie Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="flex items-center space-x-2">
                                <ImageWithBasePath
                                  src="assets/img/users/user-01.jpg"
                                  alt="Katherine"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>William Turner</span>
                              </span>
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
                      <h2 id="accordion-heading-4">
                        <button
                          type="button"
                          className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-4"
                          aria-expanded="true"
                          aria-controls="accordion-body-4"
                        >
                          <span className="text-dark">
                            <i className="ti ti-chevron-right me-2" />
                            Expiry Date
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-4"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-4"
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
                            Status
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
                              Active
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Accepted
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Draft
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Declined
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
                        to={all_routes.estimationList}
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
                  to={all_routes.estimationList}
                  className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.estimationKanban}
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
                Add Estimation
              </Link>
            </div>
          </div>
          <div className="flex overflow-x-auto items-start">
            <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
              <div className="card rounded shadow bg-white">
                <div className="card-body p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="flex items-center mb-1">
                        <i className="ti ti-circle-filled text-[14px] text-warning me-1" />
                        Draft
                      </h6>
                    </div>
                    <Link
                      to="#"
                      className="text-dark w-6 h-6 flex items-center justify-center border border-borderColor rounded shadow"
                    >
                      <i className="ti ti-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="kanban-drag-wrap ui-sortable">
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/truellysell.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Truelysell
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Mobile App</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-1"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-1" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-22.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Dawn Mercha
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-09.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/kofejob.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Kofejob
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Meeting</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-2"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-2" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-21.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Darlee Robertson
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-03.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
              <div className="card rounded shadow bg-white">
                <div className="card-body p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="flex items-center mb-1">
                        <i className="ti ti-circle-filled text-[14px] text-info me-1" />
                        Sent
                      </h6>
                    </div>
                    <Link
                      to="#"
                      className="text-dark w-6 h-6 flex items-center justify-center border border-borderColor rounded shadow"
                    >
                      <i className="ti ti-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="kanban-drag-wrap ui-sortable">
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/truellysel.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Truelysell
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Mobile App</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-3"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-3" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-19.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Darlee Robertson
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-01.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/project-02.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Doccure
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Meeting</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-4"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-4" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-23.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Rachel Hampton
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-08.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
              <div className="card rounded shadow bg-white">
                <div className="card-body p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="flex items-center mb-1">
                        <i className="ti ti-circle-filled text-[14px] text-success me-1" />
                        Accepted
                      </h6>
                    </div>
                    <Link
                      to="#"
                      className="text-dark w-6 h-6 flex items-center justify-center border border-borderColor rounded shadow"
                    >
                      <i className="ti ti-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="kanban-drag-wrap ui-sortable">
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/dreamchat.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Dreamschat
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Mobile App</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-5"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-5" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-20.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Sharon Roy
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-02.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/servbook.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Servbook
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Meeting</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-6"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-6" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Jessica Louise
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-04.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
              <div className="card rounded shadow bg-white">
                <div className="card-body p-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h6 className="flex items-center mb-1">
                        <i className="ti ti-circle-filled text-[14px] text-danger me-1" />
                        Declined
                      </h6>
                    </div>
                    <Link
                      to="#"
                      className="text-dark w-6 h-6 flex items-center justify-center border border-borderColor rounded shadow"
                    >
                      <i className="ti ti-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="kanban-drag-wrap ui-sortable">
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/dream-pos.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                DreamPOS
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Mobile App</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-7"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-7" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-16.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Declined
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-05.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                    <div className="card-body p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full border border-borderColor bg-white flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/priority/dream-pos.svg"
                              className="w-auto h-auto"
                              alt="Img"
                            />
                          </Link>
                          <div>
                            <h6 className="font-medium text-[14px] mb-1">
                              <Link
                                to="#"
                                className="hover:text-primary"
                              >
                                Dreamsports
                              </Link>
                            </h6>
                            <p className="text-[13px] mb-0">Meeting</p>
                          </div>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-8"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-8" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                          </div>
                        </div>
                      </div>
                      <p className="mb-3">
                        TruelySell provides a multiple on-demand service based
                        bootstrap html template.
                      </p>
                      <div className="flex flex-col">
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-forbid-2 text-dark me-1" />
                          Estimate ID : #EST00020
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-report-money text-dark me-1" />
                          Amount : $01,23,000
                        </p>
                        <p className="text-default inline-flex items-center mb-2">
                          <i className="ti ti-calendar-exclamation text-dark me-1" />
                          Date : 15 Oct 2025
                        </p>
                        <p className="text-default inline-flex items-center mb-0">
                          <i className="ti ti-calendar-time text-dark me-1" />
                          Expiry Date : 05 Nov 2026
                        </p>
                      </div>
                      <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                        <div className="flex items-center">
                          <Link
                            to="#"
                            className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 me-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-25.jpg"
                              alt="Img"
                              className="rounded-full"
                            />
                          </Link>
                          <Link
                            to="#"
                            className="text-dark hover:text-primary"
                          >
                            Jonathan Smith
                          </Link>
                        </div>
                        <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                          <ImageWithBasePath
                            src="assets/img/icons/company-icon-10.svg"
                            alt="Img"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <EstimationModal />
    </>

  );
};

export default Estimations;
