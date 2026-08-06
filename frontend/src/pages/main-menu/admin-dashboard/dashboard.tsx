import { Link } from "react-router";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import CompanyChart from "./superadmin-chart/company-chart";
import RevenueIncomeChart from "./superadmin-chart/revenueIncome";
import PlanOverviewChart from "./superadmin-chart/planOverviewChart";


const SuperAdminDashboard = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[56px] ml-[240px]">
        <div className="content p-5 pb-0">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <div>
              <h4>Dashboard</h4>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Date */}
              <div className="relative">
                <PredefinedDatePicker />
              </div>
              {/* Refresh Button */}
              <button
                className="border text-gray-900 border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Refresh"
              >
                <i className="ti ti-refresh" />
              </button>
              {/* Collapse Button */}
              <button
                className="border text-gray-900 border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Collapse"
                id="collapse-header"
              >
                <i className="ti ti-transition-top" />
              </button>
            </div>
          </div>
          {/* End Page Header */}
          {/* Start Welcome Wrap */}
          <div className="mb-5">
            <div className="flex items-center justify-between flex-wrap gap-3 bg-gray-900 rounded p-[24px]">
              <div>
                <h2 className="mb-1 text-white text-2xl">Welcome Back, Adrian</h2>
                <p className="text-light text-sm mb-0">
                  14 New Companies Subscribed Today !!!
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <Link
                  to={all_routes.superadminCompany}
                  className="bg-red-600 hover:bg-red-700 text-white text-sm py-1.5 px-3 rounded"
                >
                  Companies
                </Link>
                <Link
                  to={all_routes.superadminPackagelist}
                  className="bg-white hover:bg-gray-100 text-gray-900 text-sm py-1.5 px-3 rounded border border-gray-300"
                >
                  All Packages
                </Link>
              </div>
            </div>
          </div>
          {/* End Welcome Wrap */}
          {/* Start Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-5">
            {/* Card Template */}
            <div className="flex mb-5">
              <div className="relative flex-1 bg-white rounded overflow-hidden border border-borderColor">
                <div className="relative z-10 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm mb-1">Total Companies</p>
                      <h2 className="text-base font-semibold mb-1">5468</h2>
                      <p className="text-green-600 text-xs mb-0 flex items-center">
                        <i className="ti ti-arrow-bar-up mr-1" />
                        5.62%
                        <span className="ml-1 text-[13px] text-gray-500">
                          from last month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-danger-100 border border-danger">
                        <i className="ti ti-building text-danger text-base" />
                      </span>
                    </div>
                  </div>
                </div>
                <ImageWithBasePath
                  src="assets/img/icons/elemnt-01.svg"
                  alt="elemnt-01"
                  className="absolute top-0 left-0 w-auto h-auto z-0"
                />
              </div>
            </div>
            {/* Repeat this block for each card with different content */}
            <div className="flex mb-5">
              <div className="relative flex-1 bg-white rounded border border-borderColor overflow-hidden">
                <div className="relative z-10 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm mb-1">Active Companies</p>
                      <h2 className="text-base font-semibold mb-1">4598</h2>
                      <p className="text-red-600 text-xs mb-0 flex items-center">
                        <i className="ti ti-arrow-bar-down mr-1" />
                        12%
                        <span className="ml-1 text-[13px] text-gray-500">
                          from last month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-success-100 border border-success">
                        <i className="ti ti-carousel-vertical text-success text-base" />
                      </span>
                    </div>
                  </div>
                </div>
                <ImageWithBasePath
                  src="assets/img/icons/elemnt-02.svg"
                  alt="elemnt-02"
                  className="absolute top-0 left-0 w-auto h-auto z-0"
                />
              </div>
            </div>
            <div className="flex mb-5">
              <div className="relative flex-1 bg-white rounded border border-borderColor overflow-hidden">
                <div className="relative z-10 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm mb-1">Total Subscribers</p>
                      <h2 className="text-base font-semibold mb-1">5468</h2>
                      <p className="text-green-600 text-xs mb-0 flex items-center">
                        <i className="ti ti-arrow-bar-up mr-1" />
                        6%
                        <span className="text-[13px] text-gray-500 ml-1">
                          from last month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warning-100 border border-warning">
                        <i className="ti ti-chalkboard-off text-warning text-base" />
                      </span>
                    </div>
                  </div>
                </div>
                <ImageWithBasePath
                  src="assets/img/icons/elemnt-03.svg"
                  alt="elemnt-03"
                  className="absolute top-0 left-0 w-auto h-auto z-0"
                />
              </div>
            </div>
            <div className="flex mb-5">
              <div className="relative flex-1 bg-white rounded border border-borderColor overflow-hidden">
                <div className="relative z-10 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm mb-1">Total Earnings</p>
                      <h2 className="text-base font-semibold mb-1">$89,878,58</h2>
                      <p className="text-red-600 text-xs mb-0 flex items-center">
                        <i className="ti ti-arrow-bar-down mr-1" />
                        16%
                        <span className="text-[13px] text-gray-500 ml-1">
                          from last month
                        </span>
                      </p>
                    </div>
                    <div>
                      <span className="w-10 h-10 flex items-center justify-center rounded-full bg-danger-100 border border-danger mb-3">
                        <i className="ti ti-businessplan text-danger text-base" />
                      </span>
                    </div>
                  </div>
                </div>
                <ImageWithBasePath
                  src="assets/img/icons/elemnt-04.svg"
                  alt="elemnt-04"
                  className="absolute top-0 left-0 w-auto h-auto z-0"
                />
              </div>
            </div>
          </div>
          {/* End Row */}
          {/* Start Row */}
          <div className="xxl:grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 lg:gap-5">
            {/* Companies */}
            <div className="flex mb-5">
              <div className="bg-white border border-borderColor rounded w-full">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
                  <h6 className="m-0">Companies</h6>
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="last-days-dropdown3"
                    >
                      <i className="ti ti-calendar mr-1" />
                      This Week
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="last-days-dropdown3"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          This Month
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Today
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4">
                  <div id="company-chart">
                  <CompanyChart/>
                  </div>
                  <p className="text-green-600 text-center text-xs mt-4">
                    <i className="ti ti-arrow-bar-up mr-1" />
                    12.5%
                    <span className="text-gray-500 ml-1">from last month</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Revenue */}
            <div className="flex mb-5">
              <div className="bg-white border border-borderColor rounded w-full">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
                  <h6 className="m-0">Revenue</h6>
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="years-dropdown"
                    >
                      <i className="ti ti-calendar mr-1" />
                      2025
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="years-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          2025
                        </Link>
                      </li>
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
                    </ul>
                  </div>
                </div>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-between flex-wrap mb-3">
                    <div>
                      <h6 className="mb-2">$89,878,58</h6>
                      <p className="text-[13px] text-gray-500 mb-0">
                        <span className="text-green-600 font-normal mr-1">
                          <i className="ti ti-arrow-bar-up mr-1" />
                          40%
                        </span>
                        increased from last year
                      </p>
                    </div>
                    <p className="text-sm text-gray-800 flex items-center mb-0">
                      <i className="ti ti-circle-filled text-gray-900 text-[6px] mr-1" />
                      Revenue
                    </p>
                  </div>
                  <div id="revenue-income">
                    <RevenueIncomeChart/>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Plans */}
            <div className="mb-5">
              <div className="bg-white border border-borderColor rounded w-full">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
                  <h6 className="m-0">Top Plans</h6>
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="last-days-dropdown5"
                    >
                      Last 30 Days
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="last-days-dropdown5"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 30 Days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 10 Days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Today
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-4">
                  <div id="plan-overview">
                    <PlanOverviewChart/>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-gray-800 flex items-center">
                      <i className="ti ti-circle-filled text-info mr-1" />
                      Basic
                    </p>
                    <p className="text-sm font-medium text-gray-800">60%</p>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-sm font-medium text-gray-800 flex items-center">
                      <i className="ti ti-circle-filled text-yellow-500 mr-1" />
                      Premium
                    </p>
                    <p className="text-sm font-medium text-gray-800">20%</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-medium text-gray-800 flex items-center">
                      <i className="ti ti-circle-filled text-blue-600 mr-1" />
                      Enterprise
                    </p>
                    <p className="text-sm font-medium text-gray-800">20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Row */}
          <div className="xxl:grid grid-cols-1 lg:grid-cols-2 xxl:grid-cols-3 lg:gap-5">
            {/* Recent Transactions */}
            <div className="mb-5">
              <div className="bg-white border border-borderColor rounded w-full">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
                  <h6 className="m-0">Recent Transactions</h6>
                  <Link
                    to={all_routes.superadminPurchaseTransaction}
                    className="bg-primary text-white px-2 text-[12px] py-1 font-medium rounded hover:bg-primary/90"
                  >
                    View All
                  </Link>
                </div>
                <div className="p-4 space-y-5">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="#"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-01.svg"
                          className="w-auto h-auto object-contain"
                          alt="NovaWave LLC"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="#">NovaWave LLC</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">14 Sep 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm font-medium mb-1">+$245</h6>
                      <p className="text-[13px] text-gray-500">Basic (Monthly)</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="#"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-02.svg"
                          className="w-full h-full object-contain"
                          alt="BlueSky"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate">
                          <Link to="#">BlueSky</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">20 Mar 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm font-medium mb-1">+$395</h6>
                      <p className="text-[13px] text-gray-500">
                        Enterprise (Yearly)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="#"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-03.svg"
                          className="w-full h-full object-contain"
                          alt="Silver Hawk"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="#">Silver Hawk</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">26 Mar 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm font-medium mb-1">+$145</h6>
                      <p className="text-[13px] text-gray-500">
                        Advanced (Monthly)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="#"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-04.svg"
                          className="w-full h-full object-contain"
                          alt="Summit Peak"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="#">Summit Peak</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">10 Feb 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm font-medium mb-1">+$758</h6>
                      <p className="text-[13px] text-gray-500">
                        Enterprise (Monthly)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="#"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-05.svg"
                          className="w-full h-full object-contain"
                          alt="RiverStone Ltd"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="#">RiverStone Ltd</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">10 Jan 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm font-medium mb-1">+$977</h6>
                      <p className="text-[13px] text-gray-500">Premium (Yearly)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recently Registered */}
            <div className="flex mb-5">
              <div className="bg-white border border-borderColor rounded w-full">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
                  <h6 className="m-0">Recently Registered</h6>
                  <Link
                    to={all_routes.superadminPurchaseTransaction}
                    className="bg-primary text-white px-2 text-[12px] py-1 font-medium rounded hover:bg-primary/90"
                  >
                    View All
                  </Link>
                </div>
                <div className="p-4 space-y-5">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-07.svg"
                          className="w-auto h-auto object-contain"
                          alt="Bright Bridge Grp"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">Bright Bridge Grp</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">Basic (Monthly)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">150 Users</p>
                      <h6 className="text-sm font-normal text-gray-900 truncate">
                        bbg@example.com
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-08.svg"
                          className="w-auto h-auto object-contain"
                          alt="Bright Bridge Grp"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">CoastalStar Co.</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">
                          2Enterprise (Yearly)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">200 Users</p>
                      <h6 className="text-sm font-normal text-gray-900 truncate">
                        csc@example.com
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-09.svg"
                          className="w-auto h-auto object-contain"
                          alt="Bright Bridge Grp"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">HarborView</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">
                          Advanced (Monthly)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">129 Users</p>
                      <h6 className="text-sm font-normal text-gray-900 truncate">
                        hv@example.com
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-10.svg"
                          className="w-auto h-auto object-contain"
                          alt="Bright Bridge Grp"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">Golden Gate Ltd</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">
                          Enterprise (Monthly)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">103 Users</p>
                      <h6 className="text-sm font-normal text-gray-900 truncate">
                        ggl@example.com
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-11.svg"
                          className="w-auto h-auto object-contain"
                          alt="Bright Bridge Grp"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">Redwood Inc</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">
                          Premium (Yearly)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm mb-1">109 Users</p>
                      <h6 className="text-sm font-normal text-gray-900 truncate">
                        rw@example.com
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recently Plan Expired */}
            <div className="flex mb-5">
              <div className="bg-white border border-borderColor rounded w-full">
                <div className="flex items-center justify-between flex-wrap gap-2 px-4 py-3 border-b border-borderColor">
                  <h5 className="text-base font-bold m-0">Recently Plan Expired</h5>
                  <Link
                    to={all_routes.superadminPurchaseTransaction}
                    className="bg-primary text-white px-2 text-[12px] py-1 font-medium rounded hover:bg-primary/90"
                  >
                    View All
                  </Link>
                </div>
                <div className="p-4 space-y-5">
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-12.svg"
                          className="w-auto h-auto object-contain"
                          alt="VK Pvt Ltd"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">VK Pvt Ltd</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">14 Sep 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm text-info underline font-medium truncate mb-1">
                        <Link to="javscript:void(0);">Send Reminder</Link>
                      </h6>
                      <p className="text-[13px] text-gray-500">Basic (Monthly)</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-13.svg"
                          className="w-auto h-auto object-contain"
                          alt="VK Pvt Ltd"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">RiverStone Ltd</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">20 Mar 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm text-info underline font-medium truncate mb-1">
                        <Link to="javscript:void(0);">Send Reminder</Link>
                      </h6>
                      <p className="text-[13px] text-gray-500">
                        Enterprise (Yearly)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-14.svg"
                          className="w-auto h-auto object-contain"
                          alt="VK Pvt Ltd"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">Summit Peak</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">26 Mar 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm text-info underline font-medium truncate mb-1">
                        <Link to="javscript:void(0);">Send Reminder</Link>
                      </h6>
                      <p className="text-[13px] text-gray-500">
                        Advanced (Monthly)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-15.svg"
                          className="w-auto h-auto object-contain"
                          alt="VK Pvt Ltd"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">Redwood Inc</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">10 Feb 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm text-info underline font-medium truncate mb-1">
                        <Link to="javscript:void(0);">Send Reminder</Link>
                      </h6>
                      <p className="text-[13px] text-gray-500">
                        Enterprise (Monthly)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-start">
                    <div className="flex items-center gap-3">
                      <Link
                        to="javscript:void(0);"
                        className="w-[40px] h-[40px] flex justify-center item-center p-2 rounded-full overflow-hidden border border-borderColor"
                      >
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-16.svg"
                          className="w-auto h-auto object-contain"
                          alt="VK Pvt Ltd"
                        />
                      </Link>
                      <div>
                        <h6 className="font-medium text-sm truncate mb-1">
                          <Link to="javscript:void(0);">NovaWave LLC</Link>
                        </h6>
                        <p className="text-[13px] text-gray-500">10 Jan 2025</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <h6 className="text-sm text-info underline font-medium truncate mb-1">
                        <Link to="javscript:void(0);">Send Reminder</Link>
                      </h6>
                      <p className="text-[13px] text-gray-500">Premium (Yearly)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <footer className="footer block md:flex justify-between md:text-left text-center p-4 px-5 bg-white border-t border-borderColor">
          <p className="mb-0">
            Copyright ©{" "}
            <Link to="#" className="text-primary underline">
              CRMS
            </Link>
          </p>
          <div className="flex items-center gap-2 footer-links justify-center justify-md-end">
            <Link to="#" className="hover:text-primary">
              About
            </Link>
            <Link to="#" className="hover:text-primary">
              Terms
            </Link>
            <Link to="#" className="hover:text-primary">
              Contact Us
            </Link>
          </div>
        </footer>
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default SuperAdminDashboard;
