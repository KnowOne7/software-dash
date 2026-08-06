import { Link } from "react-router";
import { useEffect, useState } from "react";
import { initDropdowns } from "flowbite";
import { getActionsForPage } from "../../../config/actionConfigs";
import { useActionColumn } from "../../../components/data-table/withActions";
import { PackageListData } from "../../../core/json/packageListData";
import HeaderActions from "../../../components/header-actions/headerActions";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import Datatable from "../../../components/data-table";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import { Discount, Plan_Currency, Plan_Position, PlanType, StatusActive, Trial_Days } from "../../../core/json/selectOption";
import CommonSelect from "../../../components/common-select/commonSelect";
import SearchInput from "../../../components/data-table/dataTableSearch";


const SuperAdminPackage = () => {

  // Get actions for payments page
  const paymentsActions = getActionsForPage('packages');
  const actionColumn = useActionColumn(paymentsActions);

  useEffect(() => {
    initDropdowns();
  }, []);

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
  const data = PackageListData;
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
      title: "Plan Name",
      dataIndex: "PlanName",
      render: (text: string) => (
        <h6 className="text-sm font-normal">
          <Link to="#" className="text-gray-900 hover:text-primary">{text}</Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.PlanName.length - b.PlanName.length,
    },
    {
      title: "Plan Type",
      dataIndex: "PlanType",
      sorter: (a: any, b: any) => a.PlanType.length - b.PlanType.length,
    },
    {
      title: "Total Subscribers",
      dataIndex: "TotalSubscribers",
      sorter: (a: any, b: any) => a.TotalSubscribers.length - b.TotalSubscribers.length,
    },
    {
      title: "Price",
      dataIndex: "Price",
      sorter: (a: any, b: any) => a.Plan.length - b.Plan.length,
    },
    {
      title: "Created Dated",
      dataIndex: "CreatedDate",
      sorter: (a: any, b: any) => a.CreatedDated.length - b.CreatedDated.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${text === "Active" ? "bg-success text-white" : "bg-danger text-white"
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
                Packages
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  198
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
                    Packages
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
                Add New Plan
              </Link>
            </div>
            <div className="bg-white p-4 pb-0">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-5">
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
                                Plan
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
                                  Basic
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Advanced
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Enterprise
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h2 id="accordion-heading-3">
                            <button
                              type="button"
                              className="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                              data-accordion-target="#accordion-body-3"
                              aria-expanded="true"
                              aria-controls="accordion-body-3"
                            >
                              <span className="text-dark">
                                <i className="ti ti-chevron-right me-2" />
                                Plan Type
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-3"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-3"
                            data-accordion-body=""
                          >
                            <ul className="space-y-3 max-h-64 overflow-y-auto">
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Monthly
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Yearly
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
                                Status
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
                                  Approved
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
                                  Rejected
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
                          <span className="text-sm font-medium ">Name</span>
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
                          <span className="text-sm font-medium ">Domain Url</span>
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
                          <span className="text-sm font-medium ">Plan</span>
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
                          />
                          <span className="text-sm font-medium ">Status</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Package List */}
              <div className="table-responsive custom-table">
                <Datatable
                  columns={columns}
                  dataSource={data}
                  Selection={true}
                  searchText={searchText}
                />
              </div>
              {/* /Package List */}
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}

      {/* Add company */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Package</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            aria-controls="offcanvas_add"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 p-5 border border-borderColor rounded mb-5">
              <div className="md:col-span-12">
                <div className="flex items-center mb-3">
                  <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <i className="ti ti-photo text-dark fs-16" />
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                      <i className="ti ti-file-broken me-1" />
                      Upload file
                      <input
                        type="file"
                        className="opacity-0 absolute start-0 top-0"
                        multiple
                      />
                    </div>
                    <span>JPG, GIF or PNG. Max size of 800K</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={PlanType}
                    className="select"
                    defaultValue={PlanType[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Position <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Plan_Position}
                    className="select"
                    defaultValue={Plan_Position[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Currency <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Plan_Currency}
                    className="select"
                    defaultValue={Plan_Currency[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex justify-between">
                    <label className="form-label">
                      Plan Currency <span className="text-danger">*</span>
                    </label>
                    <span className="text-primary md:flex items-center">
                      <i className="ti ti-info-circle-filled text-danger me-1" />
                      Set 0 for free
                    </span>
                  </div>
                  <CommonSelect
                    options={Plan_Currency}
                    className="select"
                    defaultValue={Plan_Currency[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Discount}
                    className="select"
                    defaultValue={Discount[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Discount<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Limitations Invoices<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Max Customers<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Product<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Supplier<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Plan Modules<span className="text-danger ms-1">*</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Contacts
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Companies
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Deals
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Leads
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Pipelines
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Projects
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Tasks
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Campaigns
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Contracts
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Estimations
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Proposals
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Invoices
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Payments
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Activities
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Analytics
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Reports
                  </label>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="flex items-center gap-2 w-full cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <span className="ms-1 text-gray-900">Access Trial</span>
                    <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Trial Days <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Trial_Days}
                    className="select"
                    defaultValue={Trial_Days[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
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
              <div className="md:col-span-12">
                <div className="mb-0">
                  <label className="flex items-center gap-2 w-full cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <span className="ms-1 text-gray-900">Access Trial</span>
                    <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                data-drawer-hide="offcanvas_add"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Add company */}
      {/* Edit company */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Package</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_edit"
            aria-controls="offcanvas_edit"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 p-5 border border-borderColor rounded mb-5">
              <div className="md:col-span-12">
                <div className="flex items-center mb-3">
                  <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <i className="ti ti-photo text-dark fs-16" />
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-start">
                    <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                      <i className="ti ti-file-broken me-1" />
                      Upload file
                      <input
                        type="file"
                        className="opacity-0 absolute start-0 top-0"
                        multiple
                      />
                    </div>
                    <span>JPG, GIF or PNG. Max size of 800K</span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Name<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={PlanType}
                    className="select"
                    defaultValue={PlanType[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Position <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Plan_Position}
                    className="select"
                    defaultValue={Plan_Position[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Plan Currency <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Plan_Currency}
                    className="select"
                    defaultValue={Plan_Currency[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex justify-between">
                    <label className="form-label">
                      Plan Currency <span className="text-danger">*</span>
                    </label>
                    <span className="text-primary md:flex items-center">
                      <i className="ti ti-info-circle-filled text-danger me-1" />
                      Set 0 for free
                    </span>
                  </div>
                  <CommonSelect
                    options={Plan_Currency}
                    className="select"
                    defaultValue={Plan_Currency[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Discount Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Discount}
                    className="select"
                    defaultValue={Discount[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Discount<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Limitations Invoices<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Max Customers<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Product<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="form-label">
                    Supplier<span className="text-danger ms-1">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Plan Modules<span className="text-danger ms-1">*</span>
                    </label>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Select All
                    </label>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Contacts
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Companies
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Deals
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Leads
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Pipelines
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Projects
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Tasks
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Campaigns
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Contracts
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Estimations
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Proposals
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Invoices
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Payments
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Activities
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Analytics
                  </label>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="mb-3">
                  <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                    />
                    Reports
                  </label>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="flex items-center gap-2 w-full cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <span className="ms-1 text-gray-900">Access Trial</span>
                    <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Trial Days <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Trial_Days}
                    className="select"
                    defaultValue={Trial_Days[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-0">
                  <label className="flex items-center gap-2 w-full cursor-pointer">
                    <input
                      type="checkbox"
                      defaultValue=""
                      className="sr-only peer"
                    />
                    <span className="ms-1 text-gray-900">Access Trial</span>
                    <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                data-drawer-hide="offcanvas_add"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Edit company */}
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
                Are you sure you want to remove packages you selected.
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

    </>

  );
};

export default SuperAdminPackage;
