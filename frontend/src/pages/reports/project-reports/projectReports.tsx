import { Link } from "react-router";
import { useState } from "react";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import CommonFooter from "../../../components/common-footer/commonFooter";
import Datatable from "../../../components/data-table";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import { ProjectReportListData } from "../../../core/json/projectReportListData";
import ProjectReportModal from "./modal/projectReportModal";
import ProjectYearChart from "../../main-menu/dashboard/deals-dashboard/charts/projectTypeReportChart";
import ProjectTypeChart from "../../main-menu/dashboard/deals-dashboard/charts/projectTypeChart";
import SearchInput from "../../../components/data-table/dataTableSearch";

const ProjectReports = () => {

  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const [filledStars, setFilledStars] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleClick = (key: string) => {
    setFilledStars((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle on/off
    }));
  };
  const data = ProjectReportListData;
  const columns = [
    {
      title: "",
      dataIndex: "Name",
      render: (_: any, record: any) => (
        <div
          className={`cursor-pointer ${filledStars[record.key] ? "text-warning" : "text-gray-200"
            }`}
          onClick={() => handleClick(record.key)}
        >
          <i className="ti ti-star-filled text-base" />
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      render: (text: string, render: any) => (
        <h6 className="flex items-center text-sm font-medium mb-0">
          <Link
            to={all_routes.projectDetails}
            className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden mr-2"
          >
            <ImageWithBasePath
              className="w-full h-full object-cover"
              src={`assets/img/projects/${render.Image}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.projectDetails} className="text-gray-900 hover:text-primary">
            {text}
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Client",
      dataIndex: "Client",
      render: (text: any, render: any) => (
        <h6 className="flex items-center text-sm font-medium mb-0">
          <Link
            to={all_routes.companiesDetails}
            className="w-8 h-8 rounded-full border border-gray-200 overflow-hidden mr-2"
          >
            <ImageWithBasePath
              className="w-full h-full object-cover"
              src={`assets/img/company/${render.ClientImage}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.companiesDetails} className="text-gray-900 hover:text-primary">
            {text}
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Client.length - b.Client.length,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      render: (text: any) => {
        const color =
          text === "Low"
            ? "bg-success-100 text-success border-b border-success"
            : text === "High"
              ? "bg-danger-100 text-danger border-b border-danger"
              : "bg-warning-100 text-warning border-b border-warning";
        return (
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${color}`}
          >
            {text}
          </span>
        );
      },
      sorter: (a: any, b: any) => a.Priority.length - b.Priority.length,
    },
    {
      title: "Start Date",
      dataIndex: "StartDate",
      sorter: (a: any, b: any) => a.StartDate.length - b.StartDate.length,
    },
    {
      title: "End Date",
      dataIndex: "EndDate",
      sorter: (a: any, b: any) => a.EndDate.length - b.EndDate.length,
    },
    {
      title: "Pipeline Stage",
      dataIndex: "PipelineStage",
      render: (text: any) => {
        const color =
          text === "Plan"
            ? "bg-purple"
            : text === "Develop"
              ? "bg-info"
              : text === "Design"
                ? "bg-warning"
                : "bg-success";
        return (
          <div className="flex items-center gap-2">
            <div className="w-20 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-1 rounded-full ${color} w-3/4`}></div>
            </div>
            <span className="text-sm font-semibold text-gray-700">{text}</span>
          </div>
        );
      },
      sorter: (a: any, b: any) => a.PipelineStage.length - b.PipelineStage.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded ${text === "Active"
            ? "bg-success text-white"
            : "bg-danger text-white"
            }`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
  ];


  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Project Report
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
                    Project Reports
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
                  <h6 className="m-0">Project By Year</h6>
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
                <div id="project-year">
                    <ProjectYearChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 flex mb-5">
              <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
                  <h6 className="m-0">Project By Source</h6>
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
                <div id="project-type">
                    <ProjectTypeChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end row */}
          <div className="card">
            <div className="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
               <div className="relative">
                <SearchInput value={searchText} onChange={handleSearch} />
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
              <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
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
                          to={all_routes.contactList}
                          className="btn btn-primary w-full"
                        >
                          Filter
                        </Link>
                      </div>
                    </div>
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
              {/* start tabel-list */}
              <div className="table-responsive custom-table">
                <Datatable
                  columns={columns}
                  dataSource={data}
                  Selection={true}
                  searchText={searchText}
                />
              </div>
              {/* end table List */}
            </div>
          </div>
          {/* end card */}
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <ProjectReportModal />
    </>


  );
};

export default ProjectReports;
