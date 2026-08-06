import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import Datatable from "../../../components/data-table";
import { useEffect, useState } from "react";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import SearchInput from "../../../components/data-table/dataTableSearch";
import HeaderActions from "../../../components/header-actions/headerActions";
import { CompaniesListData } from "../../../core/json/companiesListData";
import CompaniesModals from "./modal/companyModals";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { useActionColumn } from "../../../components/data-table/withActions";
import { getActionsForPage } from "../../../config/actionConfigs";
import { initDropdowns } from "flowbite";
import { closeDropdown } from "../../../utils/dropdownUtils";

const CompaniesList = () => {
  useEffect(() => {
    initDropdowns();
  }, []);
  
  // Get actions for payments page
  const paymentsActions = getActionsForPage('companies');
  const actionColumn = useActionColumn(paymentsActions);

  const [filledStars, setFilledStars] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleClick = (key: string) => {
    setFilledStars((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle on/off
    }));
  };
  const data = CompaniesListData;
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
          <i className="ti ti-star-filled text-base" /> 
          {/* fs-16 → text-base / text-[16px] */}
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
            to={all_routes.companiesDetails}
            className="w-8 h-8 flex items-center justify-center rounded-full border p-1 me-2"
          >
            <ImageWithBasePath
              className="w-auto h-auto"
              src={`assets/img/icons/${render.Image}`}
              alt="User Image"
            />
          </Link>
          <Link to={all_routes.companiesDetails} className="flex flex-col font-medium">
            {text}
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Email",
      dataIndex: "Email",
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Tags",
      dataIndex: "Tags",
      render: (text: any) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            text === "Collab"
              ? "bg-green-100 text-green-600"
              : text === "VIP"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Tags.length - b.Tags.length,
    },
    {
      title: "Owner",
      dataIndex: "Owner",
      render: (text: any, render: any) => (
        <div className="flex items-center">
          <Link to="#" className="w-6 h-6 me-2">
            <ImageWithBasePath
              className="w-full h-full rounded-full object-cover"
              src={`assets/img/profiles/${render.Owner_Img}`}
              alt="User Image"
            />
          </Link>
          {text}
        </div>
      ),
      sorter: (a: any, b: any) => a.Owner.length - b.Owner.length,
    },
    {
      title: "Contact",
      dataIndex: "Contact",
      render: () => (
        <ul className="flex items-center space-x-2">
          <li>
            <Link to="#"><i className="ti ti-mail" /></Link>
          </li>
          <li>
            <Link to="#"><i className="ti ti-phone-check" /></Link>
          </li>
          <li>
            <Link to="#"><i className="ti ti-message-circle-share" /></Link>
          </li>
          <li>
            <Link to="#"><i className="ti ti-brand-facebook" /></Link>
          </li>
        </ul>
      ),
      sorter: (a: any, b: any) => a.Contact.length - b.Contact.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            text === "Active" ? "bg-success text-white" : "bg-danger text-white"
          }`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },

    actionColumn,
  ];
  

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
              Companies
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
                  Companies
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Dropdown */}
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
                Add Company
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-3">
                <div className="flex items-center flex-wrap gap-y-3 ">
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
                </div><div className="flex items-center flex-wrap gap-y-3">
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
                      <div id="accordionExample" data-accordion="collapse" className="p-4">
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
                          <a
                            href="#"
                            className="btn border border-borderColor text-center w-full"
                          >
                            Reset
                          </a>
                          <a href={all_routes.companiesList} className="btn btn-primary w-full">
                            Filter
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="me-3">
                    <a
                      href="#"
                      className="rounded p-2 bg-[#EBEBFA] inline-flex items-center text-[#3538CD] border-info-200"
                      data-dropdown-toggle="column-dropdown"
                    >
                      <i className="ti ti-columns-3 me-2" />
                      Manage Columns
                    </a>
                    <ul
                      id="column-dropdown"
                      className="hidden p-3 z-[1] border border-borderColor rounded bg-white shadow-lg w-[250px]"
                    >
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Name</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Phone</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Tags</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Location</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Rating</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Status</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input type="checkbox" defaultValue="" className="sr-only peer" />
                          <span className="text-sm font-medium">Action</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                    <Link
                      to={all_routes.companiesList}
                      className="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"
                    >
                      <i className="ti ti-list-tree" />
                    </Link>
                    <Link
                      to={all_routes.companiesGrid}
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
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/2">
                    <div className="datatable-length" />
                  </div>
                  <div className="w-full md:w-1/2 mt-4 md:mt-0 text-end">
                    <div className="datatable-paginate" />
                  </div>
                </div>
              </div>
              {/* /Contact List */}
            </div>
          </div>
        </div>
      {/* Start Footer */}
     <CommonFooter/>
      {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <CompaniesModals />
    </>


  );
};

export default CompaniesList;
