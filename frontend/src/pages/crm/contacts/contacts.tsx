import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import { useEffect } from "react";
import { initDropdowns } from "flowbite";
import ContactModals from "./contactModal/contactModals";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { closeDropdown } from "../../../utils/dropdownUtils";

const ContactGrid = () => {
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
                Contacts
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
                    Contacts
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
                  className="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <button
                  className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown"
                >
                  <i className="ti ti-filter me-1" />
                  Filter
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <div
                  id="filter-dropdown"
                  className="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px] left-0"
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
                            Name
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
                            Tags
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
                              Collab
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Promotion
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              VIP
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
                            Owner
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
                              Hendry Milner
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Guilory Berggren
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Jami Carlile
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Theresa Nelson
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                              />
                              Smith Cooper
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
                            Location
                          </span>
                        </button>
                      </h2>
                      <div
                        id="accordion-body-4"
                        className="hidden p-4 bg-light  border border-borderColor rounded"
                        aria-labelledby="accordion-heading-4"
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
                                  src="assets/img/flags/us.svg"
                                  alt="Elizabeth"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>USA</span>
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
                                  src="assets/img/flags/ae.svg"
                                  alt="Elizabeth"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>UAE</span>
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
                                  src="assets/img/flags/de.svg"
                                  alt="Elizabeth"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>Germany</span>
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
                                  src="assets/img/flags/fr.svg"
                                  alt="Elizabeth"
                                  className="h-6 w-6 rounded-full"
                                />
                                <span>France</span>
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
                            Rating
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
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="rating">
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <span className="ms-1">5.0</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="rating">
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-default" />
                                <span className="ms-1">4.0</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="rating">
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-default" />
                                <i className="ti ti-star-filled text-default" />
                                <span className="ms-1">3.0</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="rating">
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-default" />
                                <i className="ti ti-star-filled text-default" />
                                <i className="ti ti-star-filled text-default" />
                                <span className="ms-1">2.0</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span className="rating">
                                <i className="ti ti-star-filled text-warning" />
                                <i className="ti ti-star-filled text-default" />
                                <i className="ti ti-star-filled text-default" />
                                <i className="ti ti-star-filled text-default" />
                                <i className="ti ti-star-filled text-default" />
                                <span className="ms-1">1.0</span>
                              </span>
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
                        to={all_routes.contactList}
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
                  to={all_routes.contactList}
                  className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
                >
                  <i className="ti ti-list-tree" />
                </Link>
                <Link
                  to={all_routes.contactGrid}
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
                Add Contacts
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-19.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Darlee Robertson
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Facility Manager</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    robertson@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> 1234567890
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> Germany
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    VIP
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-12.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-20.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Sharon Roy
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Installer</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    sharon@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 989757485
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> Germany
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-08.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-21.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Vaughan Lewis
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Senior Manager</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    vaughan12@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 546555455
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> India
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-09.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-23.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Jessica Louise
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Test Engineer</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    jessica13@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 454478787
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> India
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-10.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Carol Thomas
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">UI /UX Designer</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    caroltho3@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 124547845
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> China
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-22.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Dawn Mercha
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Technician</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    dawnmercha@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 478845447
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> +1
                    478845447
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-02.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-24.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Rachel Hampton
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">
                        Software Developer
                      </p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    rachel@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 215544845
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> Indonesia
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-03.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-25.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Jonelle Curtiss
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Supervisor</p>
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
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    jonelle@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 121145471
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> Cuba
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-04.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-26.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Jonathan Smith
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Team Lead Dev</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-9"
                    >
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
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    jonathan@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> 321454789
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> Isreal
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-05.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Brook Carter
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Team Lead Dev</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-10"
                    >
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
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    brook@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 278907145
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> +1
                    278907145
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-06.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Eric Adams
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">HR Manager</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-11"
                    >
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
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    ericadams@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 19023-78104
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> France
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-06.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="border border-borderColor rounded shadow bg-white">
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <Link to={all_routes.contactDetails} className="shrink-0 me-2">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                    </Link>
                    <div>
                      <h6 className="text-sm font-medium">
                        <Link
                          to={all_routes.contactDetails}
                          className="text-gray-900 hover:text-primary"
                        >
                          Richard Cooper
                        </Link>
                      </h6>
                      <p className="text-gray-500 text-sm m-0">Devops Engineer</p>
                    </div>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdown-menu-12"
                    >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-12" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        to={all_routes.contactDetails}
                      >
                        <i className="ti ti-eye text-blue-light me-1" /> Preview
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-mail text-gray-800 me-1" />{" "}
                    richard@example.com
                  </p>
                  <p className="text-default flex items-center mb-2 text-sm">
                    <i className="ti ti-phone text-gray-800 me-1" /> +1 18902-63904
                  </p>
                  <p className="text-default flex items-center text-sm">
                    <i className="ti ti-map-pin-pin text-gray-800 me-1" /> Belgium
                  </p>
                </div>
                <div className="flex items-center mt-3">
                  <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                    Collab
                  </span>
                  <span className="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">
                    Rated
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                  <div className="flex items-center space-x-2">
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-mail text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-phone-check text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-message-circle-share text-sm" />
                    </Link>
                    <Link
                      to="#"
                      className="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                    >
                      <i className="ti ti-brand-facebook text-sm" />
                    </Link>
                  </div>
                  <Link to="#" className="w-6 h-6">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-07.jpg"
                      alt="img"
                      className="rounded-full w-full h-full"
                    />
                  </Link>
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
     <CommonFooter/>
      {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <ContactModals />
    </>

  );
};

export default ContactGrid;
