import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import HeaderActions from "../../../components/header-actions/headerActions";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import SearchInput from "../../../components/data-table/dataTableSearch";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { campaignCompleteListData } from "../../../core/json/campaignCompleteListData";
import { useState } from "react";
import Datatable from "../../../components/data-table";
import CampaigModal from "./modal/campaigModal";
import { useActionColumn } from "../../../components/data-table/withActions";
import { getActionsForPage } from "../../../config/actionConfigs";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import { closeDropdown } from "../../../utils/dropdownUtils";

const CampaignComplete = () => {
  
  
  // Get actions for payments page
  const paymentsActions = getActionsForPage('campaign');
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
      [key]: !prev[key], // toggle on/off
    }));
  };


  const data = campaignCompleteListData;
  const columns = [
    {
      title: "",
      dataIndex: "Name",
      render: (_: any, record: any) => (
        <div
          className={`set-star rating-select ${
            filledStars[record.Name] ? "filled" : ""
          }`}
          onClick={() => handleClick(record.Name)}
        >
          <i className="ti ti-star-filled fs-16" />
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Name",
      dataIndex: "Name",
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Type",
      dataIndex: "Type",
      sorter: (a: any, b: any) => a.Type.length - b.Type.length,
    },
    {
      title: "Progress",
      dataIndex: "Progress1",
      render: (_text: any, render: any) => (
        <ul className="list-progress flex gap-4">
          <li>
            <h6 className="text-[14px] font-semibold mb-1">{render.Progress1}</h6>
            <p className="text-[13px] mb-0">Opened</p>
          </li>
          <li>
            <h6 className="text-[14px] font-semibold mb-1">{render.Progress2}</h6>
            <p className="text-[13px] mb-0">Closed</p>
          </li>
          <li>
            <h6 className="text-[14px] font-semibold mb-1">{render.Progress3}</h6>
            <p className="text-[13px] mb-0">Unsubscribe</p>
          </li>
          <li>
            <h6 className="text-[14px] font-semibold mb-1">{render.Progress4}</h6>
            <p className="text-[13px] mb-0">Delivered</p>
          </li>
          <li>
            <h6 className="text-[14px] font-semibold mb-1">{render.Progress5}</h6>
            <p className="text-[13px] mb-0">Conversation</p>
          </li>
        </ul>
      ),
      sorter: (a: any, b: any) => a.Progress1.length - b.Progress1.length,
    },
    {
      title: "Members",
      dataIndex: "Members",
      render: (text: any) => (
        <ul className="avatar-list-stacked avatar-group-sm">
          <li className="avatar avatar-rounded flex-shrink-0">
            <Link to="#">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-14.jpg"
                alt="img"
              />
            </Link>
          </li>
          <li className="avatar avatar-rounded flex-shrink-0">
            <Link to="#">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-15.jpg"
                alt="img"
              />
            </Link>
          </li>
          <li className="avatar avatar-rounded flex-shrink-0">
            <Link to="#">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-16.jpg"
                alt="img"
              />
            </Link>
          </li>
          <li className="avatar avatar-rounded flex-shrink-0 bg-light fs-10">
            <Link to="#" className="text-dark">{text}</Link>
          </li>
        </ul>
      ),
      sorter: (a: any, b: any) => a.Members.length - b.Members.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: string) => (
        <span
          className={`badge badge-pill badge-status ${
            text === "Success"
              ? "bg-success"
              : text === "Pending"
              ? "bg-warning"
              : text === "Paused"
              ? "bg-info"
              : "bg-danger"
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
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Campaign
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
                    Campaign
                  </li>
                </ol>
              </nav>
            </div>
            <HeaderActions />
          </div>
          {/* End Page Header */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-4 gap-x-4 mb-6">
            <div className="xl:col-span-3 sm:col-span-6 mt-3">
              <div className="border border-borderColor rounded bg-white shadow">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary text-[24px] text-white flex-shrink-0">
                        <i className="ti ti-brand-campaignmonitor" />
                      </span>
                      <div>
                        <p className="mb-1 text-truncate">Campaign</p>
                        <h6 className="mb-0">474</h6>
                      </div>
                    </div>
                    <span className="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">
                      +5.62%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 sm:col-span-6 mt-3">
              <div className="border border-borderColor rounded bg-white shadow">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-12 rounded-full flex items-center justify-center bg-info text-[24px] text-white flex-shrink-0">
                        <i className="ti ti-send" />
                      </span>
                      <div>
                        <p className="mb-1 text-truncate">Sent</p>
                        <h6 className="mb-0">454</h6>
                      </div>
                    </div>
                    <span className="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">
                      +4.12%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 sm:col-span-6 mt-3">
              <div className="border border-borderColor rounded bg-white shadow">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-12 rounded-full flex items-center justify-center bg-danger text-[24px] text-white flex-shrink-0">
                        <i className="ti ti-brand-feedly" />
                      </span>
                      <div>
                        <p className="mb-1 text-truncate">Opened</p>
                        <h6 className="mb-0">650</h6>
                      </div>
                    </div>
                    <span className="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">
                      +3.14%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-3 sm:col-span-6 mt-3">
              <div className="border border-borderColor rounded bg-white shadow">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-12 h-12 rounded-full flex items-center justify-center bg-success text-[24px] text-white flex-shrink-0">
                        <i className="ti ti-checks" />
                      </span>
                      <div>
                        <p className="mb-1 text-truncate">Completed</p>
                        <h6 className="mb-0">650</h6>
                      </div>
                    </div>
                    <span className="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success">
                      +6.27%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex flex-wrap gap-y-3 items-center border-b border-borderColor mb-7">
            <li>
              <Link
                to={all_routes.campaign}
                className="inline-block py-2 px-4 border-b-2  border-transparent font-medium hover:text-primary"
              >
                Active Campaign
              </Link>
            </li>
            <li>
              <Link
                to={all_routes.campaignComplete}
                className="inline-block py-2 px-4 border-b-2 border-primary text-primary font-medium hover:text-primary"
              >
                Completed Campaign
              </Link>
            </li>
            <li>
              <Link
                to={all_routes.campaignArchieve}
                className="inline-block py-2 px-4 border-b-2 border-transparent font-medium hover:text-primary"
              >
                Archived Campaign
              </Link>
            </li>
          </ul>
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
                Add New Campaign
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-y-3">
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
                <div className="flex items-center flex-wrap gap-y-3 mb-3">
                  <div className="relative me-3">
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
                      className="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]"
                    >
                      <div className="filter-header flex items-center justify-between border-b  border-borderColor p-3">
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
                                Name
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
                                  Distribution
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Menchandising
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Pricing
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Increased Sales
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
                                Type
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
                                  Public Relations
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Content Marketing
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Social Marketing
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Brand
                                </label>
                              </li>
                            </ul>
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
                                Start Date
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-5"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-5"
                            data-accordion-body=""
                          >
                            <div className="input-group w-auto input-group-flat">
                             <CommonDatePicker placeholder="dd/mm/yyyy" />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h2 id="accordion-heading-8">
                            <button
                              type="button"
                              className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                              data-accordion-target="#accordion-body-8"
                              aria-expanded="true"
                              aria-controls="accordion-body-8"
                            >
                              <span className="text-dark">
                                <i className="ti ti-chevron-right me-2" />
                                End Date
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-8"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-8"
                            data-accordion-body=""
                          >
                            <div className="input-group w-auto input-group-flat">
                              <CommonDatePicker placeholder="dd/mm/yyyy" />
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h2 id="accordion-heading-9">
                            <button
                              type="button"
                              className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                              data-accordion-target="#accordion-body-9"
                              aria-expanded="true"
                              aria-controls="accordion-body-9"
                            >
                              <span className="text-dark">
                                <i className="ti ti-chevron-right me-2" />
                                Status
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-9"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-9"
                            data-accordion-body=""
                          >
                            <ul className="space-y-3 max-h-64 overflow-y-auto">
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Success
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Pending
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Bounced
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Paused
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
                            to={all_routes.campaign}
                            className="btn btn-primary w-full"
                          >
                            Filter
                          </Link>
                        </div>
                      </div>
                    </div>
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
                          <span className="text-sm font-medium">Progress</span>
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
                          <span className="text-sm font-medium">Members</span>
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
                          <span className="text-sm font-medium">Created</span>
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
      <CampaigModal/>
    </>
  );
};

export default CampaignComplete;
