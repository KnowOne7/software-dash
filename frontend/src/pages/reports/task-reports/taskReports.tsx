import { Link } from "react-router";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import CommonFooter from "../../../components/common-footer/commonFooter";
import TaskReportModal from "./modal/taskReportModal";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import TaskYearChart from "../../main-menu/dashboard/deals-dashboard/charts/taskReportChart";
import LeadsAnalysisChart from "../../main-menu/dashboard/deals-dashboard/charts/leadsAnalysis";

const TaskReports = () => {


  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Task Report
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
                    Task Reports
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
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
          {/* start row */}
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="w-full md:w-7/12 flex mb-5">
              <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
                  <h6 className="m-0">Tasks By Year</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="project-by-year"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="project-by-year"
                      className="hidden absolute left-1/2 mt-2 w-[150px] p-2 z-[1055] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2024
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2023
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2022
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-4 pt-4">
                  <div id="task-year">
                    <TaskYearChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 flex mb-5">
              <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
                  <h6 className="m-0">Tasks By Source</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="project-by-source"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="project-by-source"
                      className="hidden absolute left-1/2 mt-2 w-[150px] p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2024
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2023
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2022
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="px-4 pt-4">
                  <div id="leads-analysis">
                    <LeadsAnalysisChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="card">
            <div className="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                />
              </div>

              {/* Add New Button */}
              <Link
                to="#"
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                data-modal-target="download_report"
                data-modal-toggle="download_report"
              >
                <i className="ti ti-file-download mr-1" />
                Download Report
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-3">
                {/* Item 1 */}
                <div className="flex items-center flex-wrap gap-3">
                  {/* Date */}
                  <div className="relative">
                    <PredefinedDatePicker />
                  </div>
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
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                />
                                <span className="flex items-center space-x-2">
                                  <ImageWithBasePath
                                    src="assets/img/company/company-01.svg"
                                    alt="Elizabeth"
                                    className="h-6 w-6 rounded-full"
                                  />
                                  <span>NovaWave LLC</span>
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
                                    src="assets/img/company/company-02.svg"
                                    alt="Katherine"
                                    className="h-6 w-6 rounded-full"
                                  />
                                  <span>BlueSky Industries</span>
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
                                    src="assets/img/company/company-03.svg"
                                    alt="Katherine"
                                    className="h-6 w-6 rounded-full"
                                  />
                                  <span>SilverHawk</span>
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
                                    src="assets/img/company/company-04.svg"
                                    alt="Katherine"
                                    className="h-6 w-6 rounded-full"
                                  />
                                  <span>SummitPeak</span>
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
                                    src="assets/img/company/company-05.svg"
                                    alt="Katherine"
                                    className="h-6 w-6 rounded-full"
                                  />
                                  <span>RiverStone Ventur</span>
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
                                    src="assets/img/company/company-06.svg"
                                    alt="Katherine"
                                    className="h-6 w-6 rounded-full"
                                  />
                                  <span>Bright Bridge Grp</span>
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
                              Priority
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
                                High
                              </label>
                            </li>
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                Medium
                              </label>
                            </li>
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                Low
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
                          to="#"
                          className="btn btn-primary w-full"
                        >
                          Filter
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div>
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
                </div>
                {/* Item 2 */}
                <div className="flex items-center flex-wrap gap-3">
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
                  <div>
                    <Link
                      to="#"
                      className="rounded p-2 bg-[#EBEBFA] inline-flex items-center text-[#3538CD] border-info-200"
                      data-dropdown-toggle="column-dropdown"
                    >
                      <i className="ti ti-columns-3 me-2" />
                      Manage Columns
                    </Link>
                    <ul
                      id="column-dropdown"
                      className="hidden p-3 z-[1] border border-borderColor rounded bg-white shadow-lg w-[250px]"
                    >
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">Name</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">Client</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">Priority</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">Start Date</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">End Date</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">
                            Pipeline Stage
                          </span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium">Status</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* start list */}
              <div className="task-wrap mt-5">
                <div data-accordion="collapse">
                  <div id="accordion-heading-7">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                      data-accordion-target="#accordion-body-7"
                      aria-expanded="true"
                      aria-controls="accordion-body-7"
                    >
                      <span className="mb-0 text-[16px] text-dark font-bold flex items-center">
                        Recent
                        <small className="bg-success-100 rounded-full flex items-center justify-center w-5 h-5 text-[12px] font-medium ms-3">
                          24
                        </small>
                      </span>
                      <i className="ti ti-chevron-down arrow-rotate me-2" />
                    </button>
                  </div>
                  <div
                    id="accordion-body-7"
                    aria-labelledby="accordion-heading-7"
                    data-accordion-body="accordionExample"
                  >
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-info">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Add a form to Update Task
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                            <i className="ti ti-phone mr-1" />
                            Calls
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-b border-info inline-flex items-center">
                            Pending
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                          Promotion
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          25 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-1.jpg"
                            alt="avatar-1"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-info">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Make all strokes thinner
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-warning inline-flex items-center">
                            <i className="ti ti-mail mr-1" />
                            Email
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-b border-info inline-flex items-center">
                            Pending
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                          <i className="ti ti-phone mr-1" />
                          Rejected
                        </p>
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                          Collab
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          25 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-2.jpg"
                            alt="avatar-2"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Update original content
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                            <i className="ti ti-phone mr-1" />
                            Calls
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                            Inprogress
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                          Promotion
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          25 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-3.jpg"
                            alt="avatar-1"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Use only component colours
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info inline-flex items-center">
                            <i className="ti ti-subtask me-1" />
                            Task
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                            Inprogress
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                          Promotion
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          25 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-4.jpg"
                            alt="avatar-1"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                  </div>
                </div>
              </div>
              <hr className="my-5 border border-borderColor" />
              {/* yesterday list */}
              <div className="task-wrap">
                <div data-accordion="collapse">
                  <div id="accordion-heading-8">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                      data-accordion-target="#accordion-body-8"
                      aria-expanded="true"
                      aria-controls="accordion-body-8"
                    >
                      <span className="mb-0 text-[16px] text-dark font-bold font-bold flex items-center">
                        Yesterday
                      </span>
                      <i className="ti ti-chevron-down arrow-rotate me-2" />
                    </button>
                  </div>
                  <div
                    id="accordion-body-8"
                    aria-labelledby="accordion-heading-8"
                    data-accordion-body=""
                  >
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Add images to the cards section
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                            <i className="ti ti-phone mr-1" />
                            Calls
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                            Inprogress
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                          Promotion
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          24 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-5.jpg"
                            alt="avatar-1"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-danger">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Add images to the cards section
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                            <i className="ti ti-mail mr-1" />
                            Email
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                            Rejected
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                          Promotion
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          24 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-7.jpg"
                            alt="avatar-2"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                  </div>
                </div>
              </div>
              <hr className="my-5 border border-borderColor" />
              {/* date list */}
              <div className="task-wrap">
                <div data-accordion="collapse">
                  <div id="accordion-heading-9">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                      data-accordion-target="#accordion-body-9"
                      aria-expanded="true"
                      aria-controls="accordion-body-9"
                    >
                      <span className="mb-0 text-[16px] text-dark font-bold flex items-center">
                        23 Apr 2025
                      </span>
                      <i className="ti ti-chevron-down arrow-rotate me-2" />
                    </button>
                  </div>
                  <div
                    id="accordion-body-9"
                    aria-labelledby="accordion-heading-9"
                    data-accordion-body="accordionExample"
                  >
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between mb-3 border-l-4 border-l-warning">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Design description banner &amp; landing page
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info inline-flex items-center">
                            <i className="ti ti-subtask mr-1" />
                            Task
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                            Inprogress
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                          Collab
                        </p>
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-flex items-center">
                          Rated
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          24 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-8.jpg"
                            alt="avatar-1"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between border-l-4 border-l-success">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Make all strokes thinner
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-success inline-flex items-center">
                            <i className="ti ti-mail mr-1" />
                            Email
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                            Completed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-primary-100 text-primary border-b border-primary inline-flex items-center">
                          Promotion
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          23 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-9.jpg"
                            alt="avatar-2"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                  </div>
                </div>
              </div>
              <hr className="my-5 border border-borderColor" />
              {/* date list */}
              <div className="task-wrap">
                <div data-accordion="collapse">
                  <div id="accordion-heading-10">
                    <button
                      type="button"
                      className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-4"
                      data-accordion-target="#accordion-body-10"
                      aria-expanded="true"
                      aria-controls="accordion-body-10"
                    >
                      <span className="mb-0 text-[16px] text-dark font-bold flex items-center">
                        23 Apr 2025
                      </span>
                      <i className="ti ti-chevron-down arrow-rotate me-2" />
                    </button>
                  </div>
                  <div
                    id="accordion-body-10"
                    aria-labelledby="accordion-heading-10"
                    data-accordion-body=""
                  >
                    {/* start task item */}
                    <div className="border border-borderColor p-5 rounded flex flex-wrap gap-3 items-center justify-between border-l-4 border-l-success">
                      <div className="flex items-center gap-5 flex-wrap">
                        <span>
                          <i className="ti ti-grip-vertical" />
                        </span>
                        <div className="form-check form-check-md">
                          <input
                            className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            type="checkbox"
                          />
                        </div>
                        <div className="set-star rating-select">
                          <i className="ti ti-star-filled text-[16]" />
                        </div>
                        <p className="text-[14] font-medium text-gray-900">
                          Make all strokes thinner
                        </p>
                        <div className="flex items-center gap-3">
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info inline-flex items-center">
                            <i className="ti ti-user-share mr-1" />
                            Meeting
                          </p>
                          <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                            Completed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-5 flex-wrap">
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-danger-100 text-danger border-b border-danger inline-flex items-center">
                          Rejected
                        </p>
                        <p className="px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex items-center">
                          Collab
                        </p>
                        <p className="flex items-center mb-0 ">
                          <i className="ti ti-calendar-exclamation mr-1" />
                          23 Apr 2025
                        </p>
                        <div className="w-6 h-6 rounded-full">
                          <ImageWithBasePath
                            src="assets/img/users/avatar-10.jpg"
                            alt="avatar-2"
                            className="img-fluid rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end task item */}
                  </div>
                </div>
              </div>
              {/* end  List */}
            </div>
          </div>
          {/* end card */}
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <TaskReportModal />
    </>

  );
};

export default TaskReports;
