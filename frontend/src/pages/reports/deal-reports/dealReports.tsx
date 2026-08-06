import { Link } from "react-router";
import { useState } from "react";
import { all_routes } from "../../../routes/all_routes";
import Datatable from "../../../components/data-table";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { DealsReportListData } from "../../../core/json/dealsReportsListData";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import DealsReportChart from "../../main-menu/dashboard/deals-dashboard/charts/dealsReportChart";
import LeadsAnalysisChart from "../../main-menu/dashboard/deals-dashboard/charts/leadsAnalysis";
import DealsReportModal from "./modal/dealReportModal";
import SearchInput from "../../../components/data-table/dataTableSearch";

const DealReports = () => {

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

  const data = DealsReportListData;
  const columns = [
    {
      title: "",
      dataIndex: "Name",
      render: (_: any, record: any) => (
        <div
          className={`set-star rating-select ${filledStars[record.key] ? "filled" : ""}`}
          onClick={() => handleClick(record.key)}
        >
          <i className="ti ti-star-filled text-lg" />
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Deal Name",
      dataIndex: "DealName",
      render: (text: string) => (
        <Link
          to={all_routes.dealsDetails}
          className="title-name hover:text-primary"
        >
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.DealName.length - b.DealName.length,
    },
    {
      title: "Stage",
      dataIndex: "Stage",
      render: (text: string) => (
        <span className="text-gray-700 text-sm">{text}</span>
      ),
      sorter: (a: any, b: any) => a.Stage.length - b.Stage.length,
    },
    {
      title: "Deal Value",
      dataIndex: "DealValue",
      render: (text: string) => (
        <span className="text-gray-800 font-medium text-sm">{text}</span>
      ),
      sorter: (a: any, b: any) => a.DealValue.length - b.DealValue.length,
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      render: (text: any) => {
        const tagColor =
          text === "Collab"
            ? "bg-danger-100 text-danger border-b border-danger"
            : text === "Rejected"
              ? "bg-danger-100 text-danger border-b border-danger"
              : "bg-warning-100 text-warning border-b border-warning";

        return (
          <span
            className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${tagColor}`}
          >
            {text}
          </span>
        );
      },
      sorter: (a: any, b: any) => a.Tags.length - b.Tags.length,
    },
    {
      title: "Expected Close Date",
      dataIndex: "ExpectedCloseDate",
      render: (text: string) => (
        <span className="text-gray-700 text-sm">{text}</span>
      ),
      sorter: (a: any, b: any) =>
        a.ExpectedCloseDate.length - b.ExpectedCloseDate.length,
    },
    {
      title: "Probability",
      dataIndex: "Probability",
      render: (text: string) => (
        <span className="text-gray-700 text-sm">{text}</span>
      ),
      sorter: (a: any, b: any) => a.Probability.length - b.Probability.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => {
        const statusColor =
          text === "Won"
            ? "bg-success text-white"
            : text === "open"
              ? "bg-indigo text-white"
              : "bg-danger text-white";

        return (
          <span
            className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${statusColor}`}
          >
            {text}
          </span>
        );
      },
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
                Deals Report
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
                    Deals Reports
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
                  <h6 className="m-0">Deals By Year</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="leads-by-year"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="leads-by-year"
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
                  <div id="deals-report">
                    <DealsReportChart />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 flex mb-5">
              <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
                  <h6 className="m-0">Leads By Source</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="leads-by-source"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="leads-by-source"
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
                  <div className="relative">
                    <button
                      className="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="filter-dropdown"
                    >
                      <i className="ti ti-filter me-1" />
                      Filter
                      <i className="ti ti-chevron-down ml-1" />
                    </button>
                  </div>
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
                            className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                            data-accordion-target="#accordion-body-1"
                            aria-expanded="true"
                            aria-controls="accordion-body-1"
                          >
                            <span className="text-dark">
                              <i className="ti ti-chevron-right me-2" />
                              Deal Name
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion-body-1"
                          className="hidden p-4 bg-light  border border-borderColor rounded"
                          data-accordion-body=""
                        >
                          <ul className="space-y-3 max-h-64 overflow-y-auto">
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                Annual Software Subscription
                              </label>
                            </li>
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                CRM Onboarding Package
                              </label>
                            </li>
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                Enterprise Plan Upgrade
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
                                Won
                              </label>
                            </li>
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                Lost
                              </label>
                            </li>
                            <li>
                              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                />
                                Open
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
                              Tags
                            </span>
                          </button>
                        </h2>
                        <div
                          id="accordion-body-7"
                          className="hidden p-4 bg-light  border border-borderColor rounded"
                          aria-labelledby="accordion-heading-7"
                          data-accordion-body=""
                        >
                          <ul className="space-y-3 max-h-64 overflow-y-auto">
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
                                Collab
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
                                Promotion
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
                          <span className="text-sm font-medium">Deal Name</span>
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
                          <span className="text-sm font-medium">Stage</span>
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
                          <span className="text-sm font-medium">Deal Value</span>
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
                          <span className="text-sm font-medium">Tags</span>
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
                            Expected Close Date
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
                          <span className="text-sm font-medium">Probability</span>
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
      <DealsReportModal />
    </>

  );
};

export default DealReports;
