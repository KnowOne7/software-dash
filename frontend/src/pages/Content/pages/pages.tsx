import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import HeaderActions from "../../../components/header-actions/headerActions";
import { PagesListData } from "../../../core/json/pagesListData";
import { useState } from "react";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import SearchInput from "../../../components/data-table/dataTableSearch";
import Datatable from "../../../components/data-table";
import { getActionsForPage } from "../../../config/actionConfigs";
import { useActionColumn } from "../../../components/data-table/withActions";
import { closeDropdown } from "../../../utils/dropdownUtils";

const Pages = () => {
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

  const data = PagesListData;
  // Get actions for payments page
  const pagesACTIONS = getActionsForPage("pages");
  const actionColumn = useActionColumn(pagesACTIONS);
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
      title: "Title",
      dataIndex: "Title",
      sorter: (a: any, b: any) => a.Title.length - b.Title.length,
    },
    {
      title: "Page Slug",
      dataIndex: "PageSlug",
      sorter: (a: any, b: any) => a.PageSlug.length - b.PageSlug.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge badge-pill badge-status ${
            text === "Active" ? "bg-success" : "bg-danger"
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
                Pages
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
                    Pages
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
                to={all_routes.addpages}
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
              >
                <i className="ti ti-square-rounded-plus-filled" />
                Add New Page
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
                                Title
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
                                  Dashboard
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Contacts
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Home
                                </label>
                              </li>
                            </ul>
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
                                Page Slug
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-4"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-4"
                            data-accordion-body=""
                          >
                            <ul className="space-y-3 max-h-64 overflow-y-auto">
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Dashboard
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Contacts
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Home
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
                            to={all_routes.pages}
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
                          <span className="text-sm font-medium">Title</span>
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
                          <span className="text-sm font-medium">Page Slug</span>
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
                  Are you sure you want to remove page you selected.
                </p>
                <div className="flex justify-center items-center">
                  <Link
                    to="#"
                    className="btn btn-light z-1 me-2 w-full"
                    data-modal-hide="delete_modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to={all_routes.pages}
                    className="btn btn-primary z-1 w-full"
                  >
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* delete modal */}
      </>
    </>
  );
};

export default Pages;
