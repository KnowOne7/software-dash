import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import HeaderActions from "../../../components/header-actions/headerActions";
import ImageWithBasePath from "../../../components/image-with-base-path";
import ProjectModal from "./modal/projectModal";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import { closeDropdown } from "../../../utils/dropdownUtils";

const ProjectsGrid = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-6">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Projects
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  125
                </span>
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                  <li>
                    <Link
                      to={all_routes.dealsDashboard}
                      className="hover:underline text-gray-700"
                    >
                      Home
                    </Link>
                    <span>
                      <i className="ti ti-chevron-right" />
                    </span>
                  </li>
                  <li className="text-dark font-medium" aria-current="page">
                    Projects
                  </li>
                </ol>
              </nav>
            </div>
            <HeaderActions />
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
                            Project Name
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
                            Type
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
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Web App
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Client Meeting
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Mobile App
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              UI/UX Design
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Product Lanuch
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
                            Start Date
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
                            End Date
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
                              Inactive
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
                            Pipeline Stage
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
                              Develop
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Meeting
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Design
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Launch
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Fix
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Write
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Demo
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
                        to={all_routes.projectsGrid}
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
                  to={all_routes.projectsList}
                  className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.projectsGrid}
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
                Add New Project
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/truellysel.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Truelysell
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border bg-white border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle="dropdown-menu-1">
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12145
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value: $03,50,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date: 15 Oct 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-14.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-15.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+05</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-01.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 100
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dreamchat.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Dreamschat
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                     data-dropdown-toggle="dropdown-menu-2">
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12146
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $02,15,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 19 Oct 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-14.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-15.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+05</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-02.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 80
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/truellysell.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Truelysell
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle="dropdown-menu-3" >
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12147
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $01,45,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 12 Oct 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-18.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-19.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-20.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+05</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-03.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 75
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/servbook.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Servbook
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle="dropdown-menu-4"   >
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12148
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $02,15,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 24 Oct 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-21.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-22.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-23.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-04.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 75
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dream-pos.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          DreamPOS
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle="dropdown-menu-5" >
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12149
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $03,64,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 11 Jan 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-21.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-22.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-23.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-05.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 65
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dream-pos.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Kofejob
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                  data-dropdown-toggle="dropdown-menu-6"  >
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12150
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $02,12,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 09 Dec 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-23.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-24.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-25.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-06.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 96
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/project-01.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Doccure
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle="dropdown-menu-7"  >
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12151
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,18,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 16 Dec 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-23.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-24.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-25.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-07.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 96
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/best.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Best@laundry
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle="dropdown-menu-8">
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12152
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $01,23,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 13 Jan 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-27.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-15.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-08.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 65
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dream-pos.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          POS
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle="dropdown-menu-9" >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-9" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12153
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $03,64,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 11 Jan 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-27.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-13.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-15.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-09.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 65
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/servbook.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Servbook
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Meeting</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle="dropdown-menu-10">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-10" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12154
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,10,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 29 Jan 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-18.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-10.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 56
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/dreamchat.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Dreamchat
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Meeting</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle="dropdown-menu-11" >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-11" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12155
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,10,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 30 Jan 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-01.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 60
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border rounded shadow bg-white border-borderColor">
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-danger bg-danger-100 text-xs font-medium me-2 px-2 py-1 rounded inline-flex items-center">
                      <i className="ti ti-square-rounded-filled text-danger text-xs me-1" />{" "}
                      High
                    </span>
                    <span className="bg-success text-white text-xs font-medium px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                  <span className="text-warning">
                    <i className="ti ti-star-filled" />
                  </span>
                </div>
                <div className="flex items-center justify-between bg-light rounded p-3 mb-4">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.projectDetails}
                      className="flex-shrink-0 me-2 bg-white rounded-full border border-borderColor w-10 h-10 flex items-center justify-center"
                    >
                      <ImageWithBasePath
                        src="assets/img/priority/sports.svg"
                        alt="img"
                      />
                    </Link>
                    <div>
                      <h5 className="text-sm font-medium mb-1">
                        <Link
                          to={all_routes.projectDetails}
                          className="hover:text-primary"
                        >
                          Sports
                        </Link>
                      </h5>
                      <p className="text-xs text-gray-600">Web App</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle bg-white w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle="dropdown-menu-14" >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-14" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        <i className="ti ti-clipboard-copy me-1" />
                        Clone Project
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-printer me-1" /> Print
                      </Link>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        <i className="ti ti-subtask me-1" /> Add New Task
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-4 text-sm text-gray-700">
                    Kofejob is a freelancers marketplace where you can post
                    projects &amp; get instant help.
                  </p>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p className="flex items-center">
                      <i className="ti ti-forbid-2 me-2" />
                      Project ID: #12156
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-report-money me-2" />
                      Value : $04,10,000
                    </p>
                    <p className="flex items-center">
                      <i className="ti ti-calendar-exclamation me-2" />
                      Due Date : 31 Jan 2024
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="avatar-list-stacked avatar-group-sm">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        className="border border-white"
                        src="assets/img/profiles/avatar-06.jpg"
                        alt="img"
                      />
                    </span>
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-07.jpg"
                        alt="img"
                      />
                    </span>
                    <Link
                      className="avatar text-dark bg-light border avatar-rounded"
                      to="#"
                    >
                      <span className="text-dark text-[10px]">+04</span>
                    </Link>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-borderColor flex items-center justify-center">
                    <ImageWithBasePath
                      src="assets/img/icons/company-icon-02.svg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-borderColor pt-4 text-sm">
                  <span className="bg-info-100 text-info px-2 py-1 rounded text-xs flex items-center">
                    <i className="ti ti-clock-stop me-1" />
                    Total Hours: 60
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <i className="ti ti-brand-wechat me-1" />
                      02
                    </span>
                    <span className="flex items-center">
                      <i className="ti ti-subtask me-1" />
                      04
                    </span>
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
      <ProjectModal/>
    </>
  );
};

export default ProjectsGrid;
