import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { useState } from "react";
import { TicketsListData } from "../../../core/json/ticketsListData";
import { all_routes } from "../../../routes/all_routes";
import { getActionsForPage } from "../../../config/actionConfigs";
import { useActionColumn } from "../../../components/data-table/withActions";
import HeaderActions from "../../../components/header-actions/headerActions";
import SearchInput from "../../../components/data-table/dataTableSearch";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import Datatable from "../../../components/data-table";
import CommonSelect from "../../../components/common-select/commonSelect";
import { Priority, StatusActive } from "../../../core/json/selectOption";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";

const Tickets = () => {
  const [filledStars, setFilledStars] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleClick = (key: string) => {
    setFilledStars((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle on/off
    }));
  };
  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const data = TicketsListData;
  // Get actions for payments page
  const contactmessageActions = getActionsForPage("contactmessage");
  const actionColumn = useActionColumn(contactmessageActions);
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
      title: "Ticket ID",
      dataIndex: "TicketID",
      render: (text: any) => <Link to={all_routes.ticketsDetails}>{text}</Link>,
      sorter: (a: any, b: any) => a.TicketID.length - b.TicketID.length,
    },
    {
      title: "Subject",
      dataIndex: "Subject",
      sorter: (a: any, b: any) => a.Subject.length - b.Subject.length,
    },
    {
      title: "Assigned",
      dataIndex: "Assigned",
      render: (text: any, render: any) => (
        <h6 className="flex items-center text-[14px] font-medium mb-0">
          <Link to="#" className="avatar avatar-xs me-2">
            <ImageWithBasePath
              className="img-fluid rounded-full"
              src={`assets/img/profiles/${render.AssignedImage}`}
              alt="User Image"
            />
          </Link>
          <Link to="#" className="flex flex-col hover:text-primary">
            {text}
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Assigned.length - b.Assigned.length,
    },
    {
      title: "Created On",
      dataIndex: "CreatedOn",
      sorter: (a: any, b: any) => a.CreatedOn.length - b.CreatedOn.length,
    },
    {
      title: "Assignee",
      dataIndex: "Assignee",
      render: (text: any, render: any) => (
        <h6 className="flex items-center text-[14px] font-medium mb-0">
          <Link to="#" className="avatar me-2">
            <ImageWithBasePath
              className="img-fluid rounded-full"
              src={`assets/img/profiles/${render.AssigneeImage}`}
              alt="User Image"
            />
          </Link>
          <Link to="#" className="flex flex-col hover:text-primary">
            {text}{" "}
            <span className="text-default text-[13px] font-normal mt-1">
              {render.Role}
            </span>
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Assignee.length - b.Assignee.length,
    },
    {
      title: "Priority",
      dataIndex: "Priority",
      render: (text: any) => (
        <span className={`badge badge-tag badge px-1.5 py-0.5 rounded text-[12px]${text === "Low" ? 'bg-success-100 text-success border-b border-success' : text ==='Medium' ? 'bg-warning- :100 text-warning  :border-b border-warning' : "bg-danger-100 text-danger border-b border-danger"} `}>
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Priority.length - b.Priority.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge badge-pill badge-status ${
            text === "Resolved"
              ? "bg-success"
              : text === "Open"
              ? "bg-info"
              : text === "pending"
              ? "bg-warning"
              : "bg-danger"
          }`}
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
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Tickets
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
                    Tickets
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
                data-modal-target="add_ticket"
                data-modal-toggle="add_ticket"
              >
                <i className="ti ti-square-rounded-plus-filled" />
                Add Ticket
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-3">
                <div className="flex items-center flex-wrap gap-y-3">
                  <div className="me-3">
                    <button
                      className="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="filter-dropdown"
                      data-dropdown-placement="bottom-start"
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
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                  />
                                  <span className="flex items-center space-x-2">
                                    <ImageWithBasePath
                                      src="assets/img/users/user-13.jpg"
                                      alt="Katherine"
                                      className="h-6 w-6 rounded-full"
                                    />
                                    <span>Ava Martinez</span>
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
                                      src="assets/img/users/user-12.jpg"
                                      alt="Katherine"
                                      className="h-6 w-6 rounded-full"
                                    />
                                    <span>Nathan Reed</span>
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
                                      src="assets/img/users/user-03.jpg"
                                      alt="Katherine"
                                      className="h-6 w-6 rounded-full"
                                    />
                                    <span>Lily Anderson</span>
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
                                      src="assets/img/users/user-18.jpg"
                                      alt="Katherine"
                                      className="h-6 w-6 rounded-full"
                                    />
                                    <span>Ryan Coleman</span>
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
                        <div className="flex items-center gap-2">
                          <Link
                            to="#"
                            className="btn border border-borderColor text-center w-full"
                          >
                            Reset
                          </Link>
                          <Link
                            to={all_routes.contactMessages}
                            className="btn btn-primary w-full"
                          >
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Ticket Id</span>
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Subject</span>
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Assigned</span>
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">
                            Assigned Date
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">
                            Created On
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Due Date</span>
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Assignee</span>
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
                            Last Reply
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
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Priority</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-0 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <span className="text-sm font-medium">Status</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Table List */}
              <div className="table-responsive custom-table">
                <Datatable
                  columns={columns}
                  dataSource={data}
                  Selection={true}
                  searchText={searchText}
                />
              </div>

              {/* /Table List */}
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}

      <>
        {/* delete modal */}
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
          id="delete_modal"
        >
          <div className="relative bg-white rounded-defaultradius p-5">
            <div className="modal-content rounded-0">
              <div className="modal-body p-4 text-center">
                <div className="mb-3 relative z-[1]">
                  <span className="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center">
                    <i className="ti ti-trash text-[24px]" />
                  </span>
                </div>
                <h5 className="mb-1">Delete Confirmation</h5>
                <p className="mb-3">
                  Are you sure you want to remove ticket you selected.
                </p>
                <div className="flex justify-center items-center">
                  <Link
                    to="#"
                    className="btn btn-light z-1 me-2 w-full"
                    data-modal-hide="delete_modal"
                  >
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-primary z-1 w-full">
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* delete modal */}
        {/* Add New Ticket */}
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
          id="add_ticket"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Add New Ticket</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="add_ticket"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  {/* start row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Created Date <span className="text-danger">*</span>
                        </label>
                        <div className="relative">
                          <CommonDatePicker placeholder="dd/mm/yyyy" />
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Due Date <span className="text-danger">*</span>
                        </label>
                        <div className="relative">
                          <CommonDatePicker placeholder="dd/mm/yyyy" />
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Assigned Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Assignee Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Priority <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Priority}
                          className="select"
                          defaultValue={Priority[0]}
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Status <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[0]}
                        />
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className="mb-0">
                    <label className="form-label">Textarea</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="add_ticket"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Add New Ticket */}
        {/* Edit Ticket */}
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
          id="edit_ticket"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Edit Ticket</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="edit_ticket"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Subject <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Support for Theme"
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6">
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Created Date <span className="text-danger">*</span>
                        </label>
                        <div className="relative">
                          <CommonDatePicker placeholder="dd/mm/yyyy" />
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Due Date <span className="text-danger">*</span>
                        </label>
                        <div className="relative">
                          <CommonDatePicker placeholder="dd/mm/yyyy" />
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Assigned Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Robert Johnson"
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Assignee Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Elizabeth Morgan"
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Priority <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Priority}
                          className="select"
                          defaultValue={Priority[0]}
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="lg:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Status <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[0]}
                        />
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className="mb-0">
                    <label className="form-label">Textarea</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={
                        "Encountering layout issues with the updated CRM theme; request support for resolving display and compatibility problems with my setup."
                      }
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="edit_ticket"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* End Ticket */}
      </>
    </>
  );
};

export default Tickets;
