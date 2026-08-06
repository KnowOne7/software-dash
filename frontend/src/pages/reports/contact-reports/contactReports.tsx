import { Link } from "react-router";
import { useState } from "react";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import CommonFooter from "../../../components/common-footer/commonFooter";
import Datatable from "../../../components/data-table";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import { ContactReportListData } from "../../../core/json/contactReportListData";
import ContactReportModal from "./modal/contactReportModal";
import ContactReportChart from "../../main-menu/dashboard/leads-dashboard/charts/contactReportChart";
import LeadsAnalysisChart from "../../main-menu/dashboard/deals-dashboard/charts/leadsAnalysis";
import SearchInput from "../../../components/data-table/dataTableSearch";

const ContactReports = () => {

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
  const data = ContactReportListData;
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
      title: "Name",
      dataIndex: "Name",
      render: (text: string, render: any) => (
        <h6 className="flex items-center text-sm font-medium mb-0">
          <Link
            to={all_routes.contactDetails}
            className="w-8 h-8 mr-2 flex-shrink-0"
          >
            <ImageWithBasePath
              className="w-8 h-8 rounded-full object-cover"
              src={`assets/img/profiles/${render.Image}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.contactDetails} className="flex flex-col hover:text-primary">
            {text}
            <span className="text-gray-500 text-xs font-normal mt-1">
              {render.Role}
            </span>
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Phone",
      dataIndex: "Phone",
      render: (text: string) => (
        <span className="text-gray-700 text-sm">{text}</span>
      ),
      sorter: (a: any, b: any) => a.Phone.length - b.Phone.length,
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      render: (text: any) => {
        const tagColor =
          text === "Collab"
            ? "bg-success-100 text-success border-b border-success"
            : text === "Promotion"
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
      title: "Location",
      dataIndex: "Location",
      render: (text: any, render: any) => (
        <div className="flex items-center mb-0">
          <Link
            to={all_routes.contactDetails}
            className="w-5 h-5 mr-2 flex-shrink-0"
          >
            <ImageWithBasePath
              className="w-5 h-5 rounded-full object-cover"
              src={`assets/img/flags/${render.FlagImage}`}
              alt="Flag"
            />
          </Link>
          <span className="text-gray-700 text-sm">{text}</span>
        </div>
      ),
      sorter: (a: any, b: any) => a.Location.length - b.Location.length,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      render: (text: any) => (
        <div className="flex items-center space-x-1 text-gray-100 text-sm">
          <i className="ti ti-star-filled" />
          <span>{text}</span>
        </div>
      ),
      sorter: (a: any, b: any) => a.Rating.length - b.Rating.length,
    },
    {
      title: "Contact",
      dataIndex: "Contact",
      render: () => (
        <ul className="flex items-center space-x-3 text-gray-600">
          <li>
            <Link to="#" className="hover:text-gray-600">
              <i className="ti ti-mail" />
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-600">
              <i className="ti ti-phone-check" />
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-600">
              <i className="ti ti-message-circle-share" />
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-gray-600">
              <i className="ti ti-brand-facebook" />
            </Link>
          </li>
        </ul>
      ),
      sorter: (a: any, b: any) => a.Contact.length - b.Contact.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => {
        const statusColor =
          text === "Active"
            ? "bg-success text-white"
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
                Contact Report
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
                    Contact Reports
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
                  <h6 className="m-0">Contacts By Year</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="contacts-by-year"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="contacts-by-year"
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
                <div id="contact-report">
                    <ContactReportChart/>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 flex mb-5">
              <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex items-center justify-between gap-3 py-3 px-4 border-b border-borderColor">
                  <h6 className="m-0">Contacts By Source</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="contacts-by-source"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="contacts-by-source"
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
                          <span className="text-sm font-medium">Phone</span>
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
                          <span className="text-sm font-medium">Location</span>
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
                          <span className="text-sm font-medium">Rating</span>
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
                          <span className="text-sm font-medium">Contact</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* start tabel-list */}
              <div className=" custom-table">
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
      <ContactReportModal />
    </>

  );
};

export default ContactReports;
