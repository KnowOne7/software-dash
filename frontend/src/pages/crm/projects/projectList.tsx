import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import ProjectModal from "./modal/projectModal";
import { all_routes } from "../../../routes/all_routes";
import { ProjectListData } from "../../../core/json/projectsListData";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { useState } from "react";
import HeaderActions from "../../../components/header-actions/headerActions";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import Datatable from "../../../components/data-table";
import SearchInput from "../../../components/data-table/dataTableSearch";
import { useActionColumn } from "../../../components/data-table/withActions";
import { getActionsForPage } from "../../../config/actionConfigs";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import { closeDropdown } from "../../../utils/dropdownUtils";

const ProjectList = () => {
  
  // Get actions for payments page
  const paymentsActions = getActionsForPage('projects');
  const actionColumn = useActionColumn(paymentsActions);

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
      [key]: !prev[key],
    }));
  };

  const data = ProjectListData;
  const columns = [
    {
      title: "",
      dataIndex: "Name",
      render: (_: any, record: any) => (
        <div
          className={`set-star rating-select ${
            filledStars[record.key] ? "filled" : ""
          }`}
          onClick={() => handleClick(record.key)}
        >
          <i className="ti ti-star-filled fs-16" />
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      render: (text: string, render: any) => (
        <h6 className="flex items-center text-[14px] font-medium">
          <Link
            to={all_routes.projectDetails}
            className="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"
          >
            <ImageWithBasePath
              className="w-auto h-auto"
              src={`assets/img/projects/${render.Image}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.projectDetails}>{text}</Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Client",
      dataIndex: "Client",
      render: (text: string, render: any) => (
        <h6 className="flex items-center text-[14px] font-medium">
          <Link
            to={all_routes.companiesDetails}
            className="w-10 h-10 border border-borderColor rounded-full p-1 me-2 flex items-center justify-center"
          >
            <ImageWithBasePath
              className="w-auto h-auto"
              src={`assets/img/company/${render.ClientImage}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.companiesDetails}>{text}</Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Client.length - b.Client.length,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      render: (text: any) => (
        <span
          className={`priority badge badge-tag ${
            text === "High"
              ? "badge-soft-danger"
              : text === "Medium"
              ? "badge-soft-warning"
              : "badge-soft-success"
          }`}
        >
          <i className="ti ti-square-rounded-filled me-1"></i>
          {text}
        </span>
      ),
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
      render: (text: string) => (
        <div className="pipeline-progress flex items-center">
          <div className="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
            <div
              className={`h-1 rounded-[50px]  ${
                text === "Plan"
                  ? "bg-danger"
                  : text === "Develop"
                  ? "bg-info"
                  : text === "Completed"
                  ? "bg-success"
                  : text === "Design"
                  ? "bg-warning"
                  : ""
              }`}
              role="progressbar"
            />
          </div>
          <span className="font-medium text-dark">{text}</span>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.PipelineStage.length - b.PipelineStage.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge badge-pill badge-status  ${
            text === "Active" ? "bg-success" : "bg-danger"
          } `}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },

    actionColumn,
  ];
  return (
    <>
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper relative pt-[50px] ml-[240px]">
          <div className="content p-5">
            {/* Page Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
              <div>
                <h4 className="mb-1 text-xl font-bold flex items-center">
                  Projects
                  <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                    123
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
                  Add New Project
                </Link>
              </div>
              <div className="bg-white p-4">
                <div className="flex items-center justify-between flex-wrap gap-y-3 mb-3">
                  <div className="flex items-center flex-wrap gap-y-3">
                    {/* Dropdown */}
                    <div className="me-3">
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
                    {/* Search Input with Icon */}
                    <div className="relative">
                      <PredefinedDatePicker />
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap gap-y-3">
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
                              to={all_routes.projectsList}
                              className="btn btn-primary w-full"
                            >
                              Filter
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="me-3">
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
                            <span className="text-sm font-medium">
                              Priority
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
                            <span className="text-sm font-medium">
                              Start Date
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
                            <span className="text-sm font-medium">
                              End Date
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
                            <span className="text-sm font-medium">Type</span>
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
                        <li className="flex items-center gap-2 mb-2 p-1">
                          <i className="ti ti-columns text-gray-600" />
                          <label className="flex items-center justify-between w-full cursor-pointer">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                            />
                            <span className="text-sm font-medium">Action</span>
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                      <Link
                        to={all_routes.projectsList}
                        className="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"
                      >
                        <i className="ti ti-list-tree" />
                      </Link>
                      <Link
                        to={all_routes.projectsGrid}
                        className="w-7 h-7 flex items-center justify-center rounded   text-default"
                      >
                        <i className="ti ti-layout-grid" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Contact List */}
                <div className="table-responsive custom-table">
                  <Datatable
                    columns={columns}
                    dataSource={data}
                    Selection={true}
                    searchText={searchText}
                  />
                </div>
                {/* /Contact List */}
              </div>
            </div>
          </div>
          {/* Start Footer */}
          <CommonFooter />
          {/* End Footer */}
        </div>
        {/* /Page Wrapper */}
      </>

      <ProjectModal />
    </>
  );
};

export default ProjectList;
