import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { useEffect, useState } from "react";
import Datatable from "../../../components/data-table";
import { useActionColumn } from "../../../components/data-table/withActions";
import { getActionsForPage } from "../../../config/actionConfigs";
import { ContractListData } from "../../../core/json/contractsListData";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import HeaderActions from "../../../components/header-actions/headerActions";
import { initDropdowns } from "flowbite";
import SearchInput from "../../../components/data-table/dataTableSearch";
import { closeDropdown } from "../../../utils/dropdownUtils";

const ContractsList = () => {

  useEffect(() => {
    initDropdowns();
  }, []);

  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  // Get actions for payments page
  const paymentsActions = getActionsForPage('contract');
  const actionColumn = useActionColumn(paymentsActions);

  const data = ContractListData;
  const columns = [
    {
      title: "Contract ID",
      dataIndex: "ContractID",
      render: (text: string) => (
        <Link to="#" className="title-name hover:text-primary">
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.ContractID.length - b.ContractID.length,
    },
    {
      title: "Subject",
      dataIndex: "Subject",
      render: (text: string) => (
        <Link to="#" className="title-name hover:text-primary">
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.Subject.length - b.Subject.length,
    },
    {
      title: "Customer",
      dataIndex: "Customer",
      render: (text: any, render: any) => (
        <h6 className="flex items-center font-medium text-sm">
          <Link
            to={all_routes.companiesDetails}
            className="w-8 h-8 flex items-center justify-center border rounded-full mr-2 overflow-hidden"
          >
            <ImageWithBasePath
              className="w-full h-full object-cover"
              src={`assets/img/icons/${render.Image}`}
              alt="User Image"
            />
          </Link>
          <Link
            to={all_routes.companiesDetails}
            className="text-gray-800 hover:text-blue-600"
          >
            {text}
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.Customer.length - b.Customer.length,
    },
    {
      title: "Contract Type",
      dataIndex: "ContractType",
      sorter: (a: any, b: any) => a.ContractType.length - b.ContractType.length,
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
                Contracts
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
                    Contracts
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
                Add New Contract
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-4">
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
                                Contracts Id
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
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  274729
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  #274730
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  #274731
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  #274732
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  #274733
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  #274734
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  #274735
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
                                Subject
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
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  SEO Proposal
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Web Design
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Logo &amp; Branding
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Development
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Business Card Design
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Technical SEO
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Portfolio Site
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
                                Customer
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
                                Contract Type
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
                                  Contract Under Seal
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Executory Contracts
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Express Contracts
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Implied Contracts
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
                          <span className="text-sm font-medium">Contracts ID</span>
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
                          />
                          <span className="text-sm font-medium">Customer</span>
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
                            Customer Value
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
                          <span className="text-sm font-medium">Customer Type</span>
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
                          <span className="text-sm font-medium">Action</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                    <Link
                      to={all_routes.ContractsList}
                      className="w-7 h-7 flex items-center justify-center rounded text-white bg-teal me-1"
                    >
                      <i className="ti ti-list-tree" />
                    </Link>
                    <Link
                      to={all_routes.ContractsGrid}
                      className="w-7 h-7 flex items-center justify-center rounded   text-default"
                    >
                      <i className="ti ti-layout-grid" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* contracts List */}
              <div className="table-responsive table-nowrap"></div>
              <Datatable
                columns={columns}
                dataSource={data}
                Selection={true}
                searchText={searchText}
              />
              {/* /contracts List */}
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>

  );
};

export default ContractsList;
