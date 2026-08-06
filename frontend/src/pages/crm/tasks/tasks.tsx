import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import { useEffect, useState } from "react";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { initDropdowns } from "flowbite";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import TasksModal from "./modal/taskModal";
import HeaderActions from "../../../components/header-actions/headerActions";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import SearchInput from "../../../components/data-table/dataTableSearch";

const Tasks = () => {
  useEffect(() => {
    initDropdowns();
  }, []);

    const [searchText, setSearchText] = useState<string>("");
  
    const handleSearch = (value: string) => {
      setSearchText(value);
    };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Tasks
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  123
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
                    Tasks
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <HeaderActions />
            </div>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">
               <div className="relative">
                <SearchInput value={searchText} onChange={handleSearch} />
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
                Add New Task
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-5">
                <div className="flex items-center flex-wrap gap-y-3">
                  {/* Dropdown */}
                  <div className="me-3">
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="task-dropdown"
                    >
                      All Tasks
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="task-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          All Tasks
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          Important
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          Completed
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="me-3">
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
                                Task Name
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
                                  Add a form to Update Task
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Make all strokes thinner
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Update original content
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Use only component colours
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Add images to the cards section
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Add images to the cards section
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
                                Task Type
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
                                  Meeting
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Calls
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Task
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Email
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
                                Tags
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
                                  Promotion
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Rated
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Rejected
                                </label>
                              </li>
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
                                  Calls
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
                                Created By
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
                                Create Date
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
                        <div className="flex items-center gap-2">
                          <Link
                            to="#"
                            className="btn border border-borderColor text-center w-full"
                          >
                            Reset
                          </Link>
                          <Link to={all_routes.tasks} className="btn btn-primary w-full">
                            Filter
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Search Input with Icon */}
                  <div className="relative">
                    <PredefinedDatePicker />
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-y-3">
                  <div className="form-check me-4">
                    <input
                      className="text-primary rounded border-borderColor me-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Mark all as read
                    </label>
                  </div>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="sort-dropdown"
                    >
                      <i className="ti ti-sort-ascending-2 me-2" />
                      Sort By
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="sort-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          Newest
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          Oldest
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-accordion="collapse task-accordion">
                <div className="mb-4 border-b border-borderColor">
                  <h2 id="task-accordion-heading-1">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#task-accordion-body-1"
                      aria-expanded="true"
                      aria-controls="task-accordion-body-1"
                    >
                      <span className="text-dark flex items-center text-[16px]">
                        Recent{" "}
                        <span className="w-8 h-8 rounded-full bg-light flex items-center justify-center text-[14px] text-dark bg-soft-dark rounded-circle ms-2 fw-medium">
                          24
                        </span>
                      </span>
                      <i className="ti ti-chevron-up arrow-rotate me-2" />
                    </button>
                  </h2>
                  <div
                    id="task-accordion-body-1"
                    className="hidden"
                    aria-labelledby="task-accordion-heading-1"
                    data-accordion-body=""
                  >
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-info">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Add a form to Update Task
                            </h6>
                            <span className="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-phone me-1" /> Calls
                            </span>
                            <span className="bg-info-100 text-info border-b border-info text-xs font-medium px-2.5 py-1 rounded">
                              Pending
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">
                                Promotion
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              25 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-info">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Make all strokes thinner
                            </h6>
                            <span className="bg-warning-100 text-warning text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-mail me-1" /> Email
                            </span>
                            <span className="bg-info-100 text-info border-b border-info text-xs font-medium px-2.5 py-1 rounded">
                              Pending
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-danger-100 text-danger border-b border-danger text-xs font-medium px-2.5 py-1 rounded">
                                Rejected
                              </span>
                            </div>
                            <div className="me-2">
                              <span className="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">
                                Collab
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              25 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-15.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-warning">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Update original content
                            </h6>
                            <span className="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-phone me-1" /> Calls
                            </span>
                            <span className="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">
                              Inprogress
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">
                                Promotion
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              25 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-16.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-warning">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Use only component colours
                            </h6>
                            <span className="bg-info-100 text-info text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-subtask me-1" /> Task
                            </span>
                            <span className="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">
                              Inprogress
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">
                                Collab
                              </span>
                            </div>
                            <div className="me-2">
                              <span className="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">
                                Rated
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              25 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-17.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 border-b border-borderColor">
                  <h2 id="task-accordion-heading-2">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#task-accordion-body-2"
                      aria-expanded="true"
                      aria-controls="task-accordion-body-2"
                    >
                      <span className="text-dark text-[16px]">Yesterday</span>
                      <i className="ti ti-chevron-up arrow-rotate me-2" />
                    </button>
                  </h2>
                  <div
                    id="task-accordion-body-2"
                    className="hidden"
                    aria-labelledby="task-accordion-heading-2"
                    data-accordion-body=""
                  >
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-warning">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Add images to the cards section
                            </h6>
                            <span className="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-phone me-1" /> Calls
                            </span>
                            <span className="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">
                              Inprogress
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">
                                Promotion
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              24 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-18.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-danger">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Add images to the cards section
                            </h6>
                            <span className="bg-success-100 text-success text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-phone me-1" /> Calls
                            </span>
                            <span className="bg-danger-100 text-danger border-b border-danger text-xs font-medium px-2.5 py-1 rounded">
                              Rejected
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">
                                Promotion
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              25 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-19.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 border-b border-borderColor">
                  <h2 id="task-accordion-heading-3">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#task-accordion-body-3"
                      aria-expanded="true"
                      aria-controls="task-accordion-body-3"
                    >
                      <span className="text-dark text-[16px]">23 Apr 2025</span>
                      <i className="ti ti-chevron-up arrow-rotate me-2" />
                    </button>
                  </h2>
                  <div
                    id="task-accordion-body-3"
                    className="hidden"
                    aria-labelledby="task-accordion-heading-3"
                    data-accordion-body=""
                  >
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-warning">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 me-3">
                              Design description banner &amp; landing page
                            </h6>
                            <span className="bg-info-100 text-info text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-subtask me-1" /> Task
                            </span>
                            <span className="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">
                              Inprogress
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">
                                Collab
                              </span>
                            </div>
                            <div className="me-2">
                              <span className="bg-warning-100 text-warning border-b border-warning text-xs font-medium px-2.5 py-1 rounded">
                                Rated
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              23 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-20.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-success">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 line-through me-3">
                              Make all strokes thinner
                            </h6>
                            <span className="bg-warning-100 text-warning text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-mail me-1" /> Email
                            </span>
                            <span className="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">
                              Completed
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-primary-100 text-primary border-b border-primary text-xs font-medium px-2.5 py-1 rounded">
                                Promotion
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              25 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-19.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-4 border-b border-borderColor">
                  <h2 id="task-accordion-heading-4">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                      data-accordion-target="#task-accordion-body-4"
                      aria-expanded="true"
                      aria-controls="task-accordion-body-4"
                    >
                      <span className="text-dark text-[16px]">22 Apr 2025</span>
                      <i className="ti ti-chevron-up arrow-rotate me-2" />
                    </button>
                  </h2>
                  <div
                    id="task-accordion-body-4"
                    className="hidden"
                    aria-labelledby="task-accordion-heading-4"
                    data-accordion-body=""
                  >
                    <div className="rounded-none mb-5 border border-borderColor bg-white">
                      <div className="p-5 border-l-4 border-success">
                        <div className="flex flex-wrap items-center justify-between gap-y-3">
                          <div className="flex flex-wrap items-center gap-y-3">
                            <span className="me-3 text-gray-600">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <div className="form-check form-check-md me-3">
                              <input
                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                type="checkbox"
                              />
                            </div>
                            <div className="me-3 set-star rating-select">
                              <i className="ti ti-star-filled text-base" />
                            </div>
                            <h6 className="font-semibold text-sm mb-0 line-through me-3">
                              Make all strokes thinner
                            </h6>
                            <span className="bg-info-100 text-info text-xs font-medium me-2 px-2.5 py-1 rounded inline-flex items-center">
                              <i className="ti ti-user-share me-1" /> Meeting
                            </span>
                            <span className="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">
                              Completed
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-y-3">
                            <div className="me-2">
                              <span className="bg-danger-100 text-danger border-b border-danger text-xs font-medium px-2.5 py-1 rounded">
                                Rejected
                              </span>
                            </div>
                            <div className="me-2">
                              <span className="bg-success-100 text-success border-b border-success text-xs font-medium px-2.5 py-1 rounded">
                                Collab
                              </span>
                            </div>
                            <div className="me-2 text-gray-600 text-sm flex items-center">
                              <i className="ti ti-calendar-exclamation me-1" />
                              22 Apr 2025
                            </div>
                            <div className="w-6 h-6 me-2">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-21.jpg"
                                alt="img"
                                className="rounded-full w-full h-full object-cover"
                              />
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
                        </div>
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
      <TasksModal />
    </>
  );
};

export default Tasks;
