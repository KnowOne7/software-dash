import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import HeaderActions from "../../../components/header-actions/headerActions";
import DealsChart from "./chart/dealsChart";
import WonChart from "../../main-menu/dashboard/deals-dashboard/charts/wonChart";
import LastChart2 from "./chart/lastChart2";
import LeadsChart from "./chart/leadsChart";

const Analytics = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Analytics
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
                    Analytics
                  </li>
                </ol>
              </nav>
            </div>
            <HeaderActions />
          </div>
          {/* End Page Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-5 gap-x-5">
            <div className="md:col-span-6">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recently Created Contacts</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="last-days-dropdown"
                    >
                      Last 30 days
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="last-days-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 30 days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 3 Months
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 6 Months
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive custom-table p-4">
                  <table
                    className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="analytic-contact"
                    style={{ width: "100%" }}
                  >
                    <colgroup>
                      <col data-dt-column={0} style={{ width: "269.325px" }} />
                      <col data-dt-column={1} style={{ width: "163.838px" }} />
                      <col data-dt-column={2} style={{ width: "149.637px" }} />
                    </colgroup>
                    <thead className="table-light">
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          data-dt-column={0}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Deal Name</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={1}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Stage</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={2}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Deal Value</span>
                          <span className="dt-column-order" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Elizabeth Morgan
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Product Manager{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 87545 54503</td>
                        <td className="p-3">10 May 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-22.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Katherine Brooks
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Installer{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 98975 17485</td>
                        <td className="p-3">02 May 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-08.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Samantha Reed
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Human Resources{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 54655 25455</td>
                        <td className="p-3">28 Apr 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-24.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  William Anderson
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Data Analytics{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 45447 58787</td>
                        <td className="p-3">16 Apr 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-23.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Jonathan Mitchell
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Facility Manager{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 12454 27845</td>
                        <td className="p-3">05 Apr 2025</td>
                      </tr>
                    </tbody>
                    <tbody>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-09.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Elizabeth Morgan
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Product Manager{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 87545 54503</td>
                        <td className="p-3">10 May 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-22.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Katherine Brooks
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Installer{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 98975 17485</td>
                        <td className="p-3">02 May 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-08.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Samantha Reed
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Human Resources{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 54655 25455</td>
                        <td className="p-3">28 Apr 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-24.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  William Anderson
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Data Analytics{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 45447 58787</td>
                        <td className="p-3">16 Apr 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link to={all_routes.contactDetails} className="avatar">
                              <ImageWithBasePath
                                className="img-fluid rounded-full"
                                src="assets/img/profiles/avatar-23.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                <Link
                                  to={all_routes.contactDetails}
                                  className="flex flex-col font-medium"
                                >
                                  Jonathan Mitchell
                                </Link>
                              </h6>
                              <span className="text-default text-[13px] inline-block">
                                Facility Manager{" "}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 12454 27845</td>
                        <td className="p-3">05 Apr 2025</td>
                      </tr>
                    </tbody>
                    <tfoot />
                  </table>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="border-b border-borderColor px-4 py-3">
                  <div className="flex flex-wrap justify-between items-center gap-y-3">
                    <h6 className="text-base font-semibold m-0">
                      Won Deals Stage
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Pipeline Dropdown */}
                      <div>
                        <Link
                          to="#"
                          className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="pipeline-dropdown3"
                        >
                          Marketing Pipeline
                          <i className="ti ti-chevron-down ml-1" />
                        </Link>
                        <ul
                          id="pipeline-dropdown3"
                          className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                        >
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Marketing Pipeline
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Sales Pipeline
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Email
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Operational
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Time Filter Dropdown */}
                      <div>
                        <Link
                          to="#"
                          className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="last-days-dropdown4"
                        >
                          Last 30 days
                          <i className="ti ti-chevron-down ml-1" />
                        </Link>
                        <ul
                          id="last-days-dropdown4"
                          className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                        >
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 30 days
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 3 Months
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 6 Months
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div id="won-chart">
                    <WonChart />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recently Created Deals</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="days-dropdown"
                    >
                      Last 30 days
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="days-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 30 days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 3 Months
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 6 Months
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive custom-table p-4">
                  <table
                    className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="analytic-deal"
                    style={{ width: "100%" }}
                  >
                    <colgroup>
                      <col data-dt-column={0} style={{ width: 158 }} />
                      <col data-dt-column={1} style={{ width: "147.075px" }} />
                      <col data-dt-column={2} style={{ width: "155.725px" }} />
                      <col data-dt-column={3} style={{ width: "49.2px" }} />
                      <col data-dt-column={4} style={{ width: "72.8px" }} />
                    </colgroup>
                    <thead className="table-light">
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          data-dt-column={0}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Deal Name</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={1}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Stage</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={2}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none dt-type-numeric"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Deal Value</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={3}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none dt-type-numeric"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title" />
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={4}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title" />
                          <span className="dt-column-order" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.dealsDetails}
                            className="hover:text-primary"
                          >
                            {" "}
                            Collins
                          </Link>
                        </td>
                        <td className="p-3">Conversation</td>
                        <td className="dt-type-numeric p-3">$04,51,000</td>
                        <td className="dt-type-numeric p-3">85%</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-info">
                            {" "}
                            Open
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.dealsDetails}
                            className="hover:text-primary"
                          >
                            {" "}
                            Konopelski
                          </Link>
                        </td>
                        <td className="p-3">Pipeline</td>
                        <td className="dt-type-numeric p-3">$04,14,800</td>
                        <td className="dt-type-numeric p-3">15%</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-danger">
                            {" "}
                            Lost
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.dealsDetails}
                            className="hover:text-primary"
                          >
                            {" "}
                            Adams
                          </Link>
                        </td>
                        <td className="p-3">Won</td>
                        <td className="dt-type-numeric p-3">$04,14,800</td>
                        <td className="dt-type-numeric p-3">95%</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">
                            {" "}
                            Won
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.dealsDetails}
                            className="hover:text-primary"
                          >
                            {" "}
                            Schumm
                          </Link>
                        </td>
                        <td className="p-3">Lost</td>
                        <td className="dt-type-numeric p-3">$9,14,400</td>
                        <td className="dt-type-numeric p-3">47%</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">
                            {" "}
                            Won
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.dealsDetails}
                            className="hover:text-primary"
                          >
                            {" "}
                            Wisozk
                          </Link>
                        </td>
                        <td className="p-3">Follow Up</td>
                        <td className="dt-type-numeric p-3">$11,14,400</td>
                        <td className="dt-type-numeric p-3">98%</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">
                            {" "}
                            Won
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot />
                  </table>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Lost Leads Stage</h6>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Pipeline Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="pipeline-dropdown2"
                      >
                        Marketing Pipeline
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="pipeline-dropdown2"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Marketing Pipeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Sales Pipeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Email
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Chats
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Operational
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Time Filter Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="last-days-dropdown3"
                      >
                        Last 3 months
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
                            Last 3 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 6 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 12 months
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div id="last-chart">
                      <LastChart2 />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Leads By Stage</h6>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Pipeline Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="pipeline-dropdown4"
                      >
                        Sales Pipeline
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="pipeline-dropdown4"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Marketing Pipeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Sales Pipeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Email
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Chats
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Operational
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Time Filter Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="last-days-dropdown13"
                      >
                        Last 3 months
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="last-days-dropdown13"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 3 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 6 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 12 months
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div id="leads-chart">
                    <LeadsChart/>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recently Added Companies</h6>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Time Filter Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="last-days-dropdown8"
                      >
                        Last 3 months
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="last-days-dropdown8"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 3 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 6 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 12 months
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="table-responsive custom-table p-4">
                    <table
                      className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                      id="analytic-company"
                      style={{ width: "100%" }}
                    >
                      <colgroup>
                        <col
                          data-dt-column={0}
                          style={{ width: "273.438px" }}
                        />
                        <col
                          data-dt-column={1}
                          style={{ width: "162.963px" }}
                        />
                        <col data-dt-column={2} style={{ width: "146.4px" }} />
                      </colgroup>
                      <thead className="table-light">
                        <tr className="border-b border-gray-100 dark:border-gray-700/50">
                          <th
                            data-dt-column={0}
                            className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowSpan={1}
                            colSpan={1}
                          >
                            <span className="dt-column-title">
                              Company Name
                            </span>
                            <span className="dt-column-order" />
                          </th>
                          <th
                            data-dt-column={1}
                            className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowSpan={1}
                            colSpan={1}
                          >
                            <span className="dt-column-title">Phone</span>
                            <span className="dt-column-order" />
                          </th>
                          <th
                            data-dt-column={2}
                            className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                            rowSpan={1}
                            colSpan={1}
                          >
                            <span className="dt-column-title">Created at</span>
                            <span className="dt-column-order" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td className="p-3">
                            <div className="flex items-center">
                              <Link
                                to={all_routes.companyDetails}
                                className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/icons/company-icon-01.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="text-[14px] font-medium mb-0">
                                  <Link
                                    to={all_routes.companyDetails}
                                    className="hover:text-primary"
                                  >
                                    NovaWaveLLC
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">+1 87545 54503</td>
                          <td className="p-3">10 May 2025</td>
                        </tr>
                        <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td className="p-3">
                            <div className="flex items-center">
                              <Link
                                to={all_routes.companyDetails}
                                className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/icons/company-icon-02.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="text-[14px] font-medium mb-0">
                                  <Link
                                    to={all_routes.companyDetails}
                                    className="hover:text-primary"
                                  >
                                    BlueSky Industries
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">+1 98975 17485</td>
                          <td className="p-3">02 May 2025</td>
                        </tr>
                        <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td className="p-3">
                            <div className="flex items-center">
                              <Link
                                to={all_routes.companyDetails}
                                className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/icons/company-icon-03.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="text-[14px] font-medium mb-0">
                                  <Link
                                    to={all_routes.companyDetails}
                                    className="hover:text-primary"
                                  >
                                    Silver Hawk
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">+1 54655 25455</td>
                          <td className="p-3">28 Apr 2025</td>
                        </tr>
                        <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td className="p-3">
                            <div className="flex items-center">
                              <Link
                                to={all_routes.companyDetails}
                                className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/icons/company-icon-04.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="text-[14px] font-medium mb-0">
                                  <Link
                                    to={all_routes.companyDetails}
                                    className="hover:text-primary"
                                  >
                                    Summit Peak
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">+1 45447 58787</td>
                          <td className="p-3">16 Apr 2025</td>
                        </tr>
                        <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td className="p-3">
                            <div className="flex items-center">
                              <Link
                                to={all_routes.companyDetails}
                                className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/icons/company-icon-05.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="text-[14px] font-medium mb-0">
                                  <Link
                                    to={all_routes.companyDetails}
                                    className="hover:text-primary"
                                  >
                                    RiverStone Ltd
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">+1 12454 27845</td>
                          <td className="p-3">05 Apr 2025</td>
                        </tr>
                        <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                          <td className="p-3">
                            <div className="flex items-center">
                              <Link
                                to={all_routes.companyDetails}
                                className="w-10 h-10 border border-borderColor rounded-full flex items-center justify-center"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/icons/company-icon-06.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="text-[14px] font-medium mb-0">
                                  <Link
                                    to={all_routes.companyDetails}
                                    className="hover:text-primary"
                                  >
                                    Redwood Inc
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">+1 46789 27845</td>
                          <td className="p-3">15 Nov 2025</td>
                        </tr>
                      </tbody>
                      <tfoot />
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="border-b border-borderColor px-4 py-3">
                  <div className="flex flex-wrap justify-between items-center gap-y-3">
                    <h6 className="text-base font-semibold m-0">
                      Deals By Stage
                    </h6>
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Pipeline Dropdown */}
                      <div>
                        <Link
                          to="#"
                          className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="pipeline-dropdown"
                        >
                          Sales Pipeline
                          <i className="ti ti-chevron-down ml-1" />
                        </Link>
                        <ul
                          id="pipeline-dropdown"
                          className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                        >
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Marketing Pipeline
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Sales Pipeline
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Email
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Chats
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Operational
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* Time Filter Dropdown */}
                      <div>
                        <Link
                          to="#"
                          className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="last-days-dropdown2"
                        >
                          Last 30 days
                          <i className="ti ti-chevron-down ml-1" />
                        </Link>
                        <ul
                          id="last-days-dropdown2"
                          className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                        >
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 30 days
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 3 Months
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 6 Months
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div id="deals-chart">
                    <DealsChart />
                  </div>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="border-b border-borderColor px-4 py-3">
                  <div className="flex flex-wrap justify-between items-center gap-y-3">
                    <h6 className="mb-0">Activities</h6>
                    <div className="flex items-center flex-wrap gap-3">
                      <div>
                        <Link
                          to="#"
                          className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="last-days-dropdown5"
                        >
                          Last 30 days
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
                              Last 30 days
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 3 Months
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                            >
                              Last 6 Months
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="bg-white border border-borderColor rounded mb-4">
                    <div className="card-body p-4">
                      {/* start row */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">
                        <div className="md:col-span-4">
                          <div className="activity-name">
                            <h6 className="text-[14px] font-medium mb-1">
                              We scheduled a meeting
                            </h6>
                            <p className="text-[13px] mb-1">
                              25 sep 2025, 12:12 PM
                            </p>
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-info">
                              Meeting
                            </span>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="flex items-center">
                            <span className="w-10 h-10 rounded-full flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-12.jpg"
                                className="rounded-full"
                                alt="Img"
                              />
                            </span>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                Elizabeth Morgan
                              </h6>
                              <p className="text-[13px] mb-0">
                                Product Manager
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="md:text-right">
                            <div>
                              <Link
                                to="#"
                                className="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="small-dropdown1"
                              >
                                Inprogress
                                <i className="ti ti-chevron-down ml-1" />
                              </Link>
                              <ul
                                id="small-dropdown1"
                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                              >
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Inprogress
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Completed
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Cancelled
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>{" "}
                    {/* end card body */}
                  </div>{" "}
                  {/* end card */}
                  <div className="bg-white border border-borderColor rounded mb-4">
                    <div className="card-body p-4">
                      {/* start row */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">
                        <div className="md:col-span-4">
                          <div className="activity-name">
                            <h6 className="text-[14px] font-medium mb-1">
                              We scheduled a meeting
                            </h6>
                            <p className="text-[13px] mb-1">
                              28 sep 2025, 12:12 PM
                            </p>
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-secondary">
                              Email
                            </span>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="flex items-center">
                            <span className="w-10 h-10 rounded-full flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-13.jpg"
                                className="rounded-full"
                                alt="Img"
                              />
                            </span>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                Katherine Brooks
                              </h6>
                              <p className="text-[13px] mb-0">Installer</p>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="md:text-right">
                            <div>
                              <Link
                                to="#"
                                className="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="small-dropdown2"
                              >
                                Inprogress
                                <i className="ti ti-chevron-down ml-1" />
                              </Link>
                              <ul
                                id="small-dropdown2"
                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                              >
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Inprogress
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Completed
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Cancelled
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>{" "}
                    {/* end card body */}
                  </div>{" "}
                  {/* end card */}
                  <div className="bg-white border border-borderColor rounded mb-4">
                    <div className="card-body p-4">
                      {/* start row */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">
                        <div className="md:col-span-4">
                          <div className="activity-name">
                            <h6 className="text-[14px] font-medium mb-1">
                              We scheduled a meeting
                            </h6>
                            <p className="text-[13px] mb-1">
                              25 jun 2025, 12:12 PM
                            </p>
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-info">
                              Task
                            </span>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="flex items-center">
                            <span className="w-10 h-10 rounded-full flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-18.jpg"
                                className="rounded-full"
                                alt="Img"
                              />
                            </span>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                Samantha Reed
                              </h6>
                              <p className="text-[13px] mb-0">
                                Human Resources
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="md:text-right">
                            <div>
                              <Link
                                to="#"
                                className="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="small-dropdown3"
                              >
                                Inprogress
                                <i className="ti ti-chevron-down ml-1" />
                              </Link>
                              <ul
                                id="small-dropdown3"
                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                              >
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Inprogress
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Completed
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Cancelled
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>{" "}
                    {/* end card body */}
                  </div>{" "}
                  {/* end card */}
                  <div className="bg-white border border-borderColor rounded mb-0">
                    <div className="card-body p-4">
                      {/* start row */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-3 gap-x-3">
                        <div className="md:col-span-4">
                          <div className="activity-name">
                            <h6 className="text-[14px] font-medium mb-1">
                              We scheduled a meeting
                            </h6>
                            <p className="text-[13px] mb-1">
                              20 sep 2025, 12:00 PM
                            </p>
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-teal-500">
                              Calls
                            </span>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="flex items-center">
                            <span className="w-10 h-10 rounded-full">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-20.jpg"
                                className="rounded-full"
                                alt="Img"
                              />
                            </span>
                            <div className="ms-2">
                              <h6 className="text-[14px] font-medium mb-1">
                                William Anderson
                              </h6>
                              <p className="text-[13px] mb-0">Data Analytics</p>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                        <div className="md:col-span-4">
                          <div className="md:text-right">
                            <div>
                              <Link
                                to="#"
                                className="border border-borderColor shadow rounded py-1 px-2 text-[13px] bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="small-dropdown4"
                              >
                                Inprogress
                                <i className="ti ti-chevron-down ml-1" />
                              </Link>
                              <ul
                                id="small-dropdown4"
                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                              >
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Inprogress
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Completed
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                                  >
                                    Cancelled
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                  </div>
                </div>{" "}
                {/* end card body */}
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Lost Leads Stage</h6>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Pipeline Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="pipeline-dropdown5"
                      >
                        Marketing Pipeline
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="pipeline-dropdown5"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Marketing Pipeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Sales Pipeline
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Email
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Chats
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Operational
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Time Filter Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="last-days-dropdown14"
                      >
                        Last 3 months
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="last-days-dropdown14"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 3 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 6 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 12 months
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <div id="last-chart-2" />
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recently Created Leads</h6>
                  {/* Dropdown */}
                  <div>
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="last-days-dropdown11"
                    >
                      Last 30 days
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="last-days-dropdown11"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 15 days
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Last 30 days
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="table-responsive custom-table p-4">
                  <table
                    className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="lead-project"
                    style={{ width: "100%" }}
                  >
                    <colgroup>
                      <col data-dt-column={0} style={{ width: "128.788px" }} />
                      <col data-dt-column={1} style={{ width: "229.1px" }} />
                      <col data-dt-column={2} style={{ width: "128.887px" }} />
                      <col data-dt-column={3} style={{ width: "96.025px" }} />
                    </colgroup>
                    <thead className="table-light">
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          data-dt-column={0}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Lead Name</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={1}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Company Name</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={2}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Phone</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={3}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Status</span>
                          <span className="dt-column-order" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.leadsDetails}
                            className="text-gray-900"
                          >
                            Collins
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-01.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-[14px] font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col"
                                >
                                  NovaWave LLC
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 875455453</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                            {" "}
                            Closed
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.leadsDetails}
                            className="text-gray-900"
                          >
                            Konopelski
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-02.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-[14px] font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col"
                                >
                                  BlueSky Industries
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 989757485</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                            {" "}
                            Closed
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.leadsDetails}
                            className="text-gray-900"
                          >
                            Adams
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-03.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-[14px] font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col"
                                >
                                  Silver Hawk
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 546555455</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                            {" "}
                            Closed
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.leadsDetails}
                            className="text-gray-900"
                          >
                            Schumm
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-04.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-[14px] font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col"
                                >
                                  Summit Peak
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 454478787</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-warning">
                            {" "}
                            Contacted
                          </span>
                        </td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <Link
                            to={all_routes.leadsDetails}
                            className="text-gray-900"
                          >
                            Wisozk
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-05.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-[14px] font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col"
                                >
                                  RiverStone Ltd
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">+1 1245427875</td>
                        <td className="p-3">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex  bg-success">
                            {" "}
                            Closed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot />
                  </table>
                </div>
              </div>
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recently Created Campaign</h6>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Time Filter Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="last-days-dropdown9"
                      >
                        Last 3 months
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="last-days-dropdown9"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 3 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 6 months
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 12 months
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="overflow-x-auto">
                    <div className="card bg-white border border-borderColor rounded min-w-[max-content] mb-3">
                      <div className="card-body p-4">
                        <div className="border-b border-borderColor mb-3 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-25">
                              <h6 className="text-[14px] font-medium mb-1">
                                Distribution
                              </h6>
                              <p className="text-[13px] mb-0">
                                Public Relations
                              </p>
                            </div>
                            <div className="w-auto">
                              <div className="flex items-center gap-2">
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    40.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Opened</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    20.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Closed</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    30.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Unsubscribe
                                  </p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    70.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Delivered</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    35.0%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Conversation
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">
                              Bounced
                            </span>
                            <p className="text-[13px] mb-0">
                              Due Date : 25 Sep 2025
                            </p>
                          </div>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-15.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-16.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-17.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link
                              to="#"
                              className="avatar avatar-rounded bg-light font-medium"
                            >
                              <span className="text-dark text-[10px]">+8</span>
                            </Link>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card body */}
                    </div>{" "}
                    {/* end card */}
                    <div className="card bg-white border border-borderColor rounded min-w-[max-content] mb-3">
                      <div className="card-body p-4">
                        <div className="border-b border-borderColor mb-3 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-25">
                              <h6 className="text-[14px] font-medium mb-1">
                                Pricing
                              </h6>
                              <p className="text-[13px] mb-0">
                                Social Marketing
                              </p>
                            </div>
                            <div className="w-auto">
                              <div className="flex items-center gap-2">
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    70.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Opened</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    90.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Closed</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    20.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Unsubscribe
                                  </p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    90.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Delivered</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    98.0%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Conversation
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-teal-500">
                              Running
                            </span>
                            <p className="text-[13px] mb-0">
                              Due Date : 28 Sep 2025
                            </p>
                          </div>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-11.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-12.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-13.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link
                              to="#"
                              className="avatar avatar-rounded bg-light font-medium"
                            >
                              <span className="text-dark text-[10px]">+2</span>
                            </Link>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card body */}
                    </div>{" "}
                    {/* end card */}
                    <div className="card bg-white border border-borderColor rounded min-w-[max-content] mb-3">
                      <div className="card-body p-4">
                        <div className="border-b border-borderColor mb-3 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-25">
                              <h6 className="text-[14px] font-medium mb-1">
                                Merchandising
                              </h6>
                              <p className="text-[13px] mb-0">
                                Content Marketing
                              </p>
                            </div>
                            <div className="w-auto">
                              <div className="flex items-center gap-2">
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    30.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Opened</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    10.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Closed</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    70.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Unsubscribe
                                  </p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    90.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Delivered</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    45.0%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Conversation
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-info">
                              Paused
                            </span>
                            <p className="text-[13px] mb-0">
                              Due Date : 14 Sep 2025
                            </p>
                          </div>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-04.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-06.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-08.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link
                              to="#"
                              className="avatar avatar-rounded bg-light font-medium"
                            >
                              <span className="text-dark text-[10px]">+4</span>
                            </Link>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card body */}
                    </div>{" "}
                    {/* end card */}
                    <div className="card bg-white border border-borderColor rounded min-w-[max-content] mb-0">
                      <div className="card-body p-4">
                        <div className="border-b border-borderColor mb-3 pb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-25">
                              <h6 className="text-[14px] font-medium mb-1">
                                Repeat Customer
                              </h6>
                              <p className="text-[13px] mb-0">Rebranding</p>
                            </div>
                            <div className="w-auto">
                              <div className="flex items-center gap-2">
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    80.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Opened</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    20.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Closed</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    70.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Unsubscribe
                                  </p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    60.5%
                                  </h6>
                                  <p className="text-[13px] mb-0">Delivered</p>
                                </div>
                                <div>
                                  <h6 className="text-[14px] font-semibold mb-1">
                                    75.0%
                                  </h6>
                                  <p className="text-[13px] mb-0">
                                    Conversation
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger">
                              Bounced
                            </span>
                            <p className="text-[13px] mb-0">
                              Due Date : 25 Sep 2023
                            </p>
                          </div>
                          <div className="avatar-list-stacked avatar-group-sm">
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-05.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link to="#" className="avatar avatar-rounded">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-07.jpg"
                                className="border border-white"
                                alt="img"
                              />
                            </Link>
                            <Link
                              to="#"
                              className="avatar avatar-rounded bg-light font-medium"
                            >
                              <span className="text-dark text-[10px]">+5</span>
                            </Link>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end card body */}
                    </div>{" "}
                    {/* end card */}
                  </div>
                </div>
              </div>
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

export default Analytics;
