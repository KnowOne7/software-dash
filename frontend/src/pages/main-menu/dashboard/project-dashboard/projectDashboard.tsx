import { Link } from "react-router";
import CommonFooter from "../../../../components/common-footer/commonFooter";
import PredefinedDatePicker from "../../../../components/common-date-range-picker/PredefinedDatePicker";
import ProjectDashboardModal from "./modal/projectDashboardModal";
import { all_routes } from "../../../../routes/all_routes";
import ImageWithBasePath from "../../../../components/image-with-base-path";
import ContactsAnalysisChart from "./charts/contactsAnalysisChart";
import LastChart from "../deals-dashboard/charts/lastChart";
import ProjectStageChart from "./charts/projectStageChart";
import WonChart from "../deals-dashboard/charts/wonChart";

const ProjectDashboard = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[56px] ml-[240px]">
        <div className="content p-5 pb-0">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <div>
              <h4>Project Dashboard</h4>
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
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Recently Created Deals */}
            <div className="w-full md:w-1/2 flex mb-5">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recent Projects</h6>
                  <div className="flex items-center flex-wrap gap-3">
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
                      Add Projects
                    </Link>
                  </div>
                </div>
                <div className="table-responsive custom-table p-4">
                  <table
                    className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap"
                    id="recent-project"
                    style={{ width: "100%" }}
                  >
                    <colgroup>
                      <col data-dt-column={0} style={{ width: "157.913px" }} />
                      <col data-dt-column={1} style={{ width: "202.1px" }} />
                      <col data-dt-column={2} style={{ width: "104.662px" }} />
                      <col data-dt-column={3} style={{ width: "116.125px" }} />
                    </colgroup>
                    <thead className="table-light">
                      <tr className="border-b border-gray-100 dark:border-gray-700/50">
                        <th
                          data-dt-column={0}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Name</span>
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
                          <span className="dt-column-title">Priority</span>
                          <span className="dt-column-order" />
                        </th>
                        <th
                          data-dt-column={3}
                          className="px-3 py-4 text-gray-900 bg-gray-100/75 font-semibold text-left dark:text-gray-50 dark:bg-gray-700/25 dt-orderable-none"
                          rowSpan={1}
                          colSpan={1}
                        >
                          <span className="dt-column-title">Due Date</span>
                          <span className="dt-column-order" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <h2 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.projectDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/priority/truellysel.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.projectDetails}
                              className="hover:text-primary"
                            >
                              Truelysell
                            </Link>
                          </h2>
                        </td>
                        <td className="p-3">
                          <h6 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.companiesDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-01.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.companiesDetails}
                              className="hover:text-primary"
                            >
                              NovaWave LLC
                            </Link>
                          </h6>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[12px]  bg-danger-100 border border-danger text-danger">
                            <i className="ti ti-square-rounded-filled me-1" />{" "}
                            High
                          </span>
                        </td>
                        <td className="p-3">23 Nov 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <h2 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.projectDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/priority/dreamchat.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.projectDetails}
                              className="hover:text-primary"
                            >
                              Dreamschat
                            </Link>
                          </h2>
                        </td>
                        <td className="p-3">
                          <h6 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.companiesDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-02.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.companiesDetails}
                              className="hover:text-primary"
                            >
                              BlueSky
                            </Link>
                          </h6>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[12px]  bg-warning-100 border border-warning text-warning">
                            <i className="ti ti-square-rounded-filled me-1" />{" "}
                            Medium
                          </span>
                        </td>
                        <td className="p-3">07 Nov 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <h2 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.projectDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/priority/truellysell.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.projectDetails}
                              className="hover:text-primary"
                            >
                              DreamGigs
                            </Link>
                          </h2>
                        </td>
                        <td className="p-3">
                          <h6 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.companiesDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-03.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.companiesDetails}
                              className="hover:text-primary"
                            >
                              Silve Hawk
                            </Link>
                          </h6>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[12px]  bg-danger-100 border border-danger text-danger">
                            <i className="ti ti-square-rounded-filled me-1" />{" "}
                            High
                          </span>
                        </td>
                        <td className="p-3">15 Oct 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <h2 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.projectDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/priority/servbook.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.projectDetails}
                              className="hover:text-primary"
                            >
                              Servbook
                            </Link>
                          </h2>
                        </td>
                        <td className="p-3">
                          <h6 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.companiesDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-04.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.companiesDetails}
                              className="hover:text-primary"
                            >
                              Summit Peak
                            </Link>
                          </h6>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[12px]  bg-danger-100 border border-danger text-danger">
                            <i className="ti ti-square-rounded-filled me-1" />{" "}
                            High
                          </span>
                        </td>
                        <td className="p-3">29 Sep 2025</td>
                      </tr>
                      <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                        <td className="p-3">
                          <h2 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.projectDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/priority/dream-pos.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.projectDetails}
                              className="hover:text-primary"
                            >
                              DreamPOS
                            </Link>
                          </h2>
                        </td>
                        <td className="p-3">
                          <h6 className="flex items-center text-[14px] font-medium mb-0">
                            <Link
                              to={all_routes.companiesDetails}
                              className="avatar avatar-rounded border w-[40px] h-[40px] flex items-center justify-center me-2"
                            >
                              <ImageWithBasePath
                                className="w-auto h-auto"
                                src="assets/img/icons/company-icon-05.svg"
                                alt="User Image"
                              />
                            </Link>
                            <Link
                              to={all_routes.companiesDetails}
                              className="hover:text-primary"
                            >
                              RiverStone Ltd
                            </Link>
                          </h6>
                        </td>
                        <td className="p-3">
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[12px]  bg-warning-100 border border-warning text-warning">
                            <i className="ti ti-square-rounded-filled me-1" />{" "}
                            Medium
                          </span>
                        </td>
                        <td className="p-3">25 Sep 2025</td>
                      </tr>
                    </tbody>
                    <tfoot />
                  </table>
                </div>
              </div>
            </div>
            {/* Deals by Stage */}
            <div className="w-full md:w-1/2 flex mb-5">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="border-b border-borderColor px-4 py-3">
                  <div className="flex flex-wrap justify-between items-center gap-y-3">
                    <h6 className="text-base font-semibold m-0">
                      Projects By Stage
                    </h6>
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
                            Last 15 days
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                          >
                            Last 7 days
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4 relative overflow-visible">
                  <div id="contacts-analysis" className="w-full">
                     <ContactsAnalysisChart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Lost Deals Stage */}
            <div className="w-full md:w-1/2 flex mb-5">
              {/* Projects By Stage */}
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Projects By Stage</h6>
                  <div className="flex flex-wrap items-center gap-2">
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
                        data-dropdown-toggle="last-days-dropdown5"
                      >
                        Last 3 Months
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
                <div className="px-4 pb-4">
                  <div id="project-stage">
                    <ProjectStageChart/>
                  </div>
                  <p className="font-medium mb-0 text-center">
                    This data collected based on the Projects for last 30 days
                  </p>
                </div>
              </div>
            </div>
            {/* Won Deals Stage */}
            <div className="w-full md:w-1/2 flex">
              <div className="flex flex-col w-full">
                <div className="bg-white border border-borderColor rounded-lg shadow-sm mb-5">
                  <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                    <h6 className="m-0">Leads By Stage</h6>
                    <div className="flex flex-wrap items-center gap-2">
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
                        <LastChart/>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-borderColor rounded-lg shadow-sm mb-5">
                  <div className="border-b border-borderColor px-4 py-3">
                    <div className="flex flex-wrap justify-between items-center gap-y-3">
                      <h6 className="text-base font-semibold m-0">
                        Won Deals Stage
                      </h6>
                      <div className="flex flex-wrap items-center gap-2">
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
                            Last 3 months
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
                  </div>
                  <div className="px-4">
                    <div id="won-chart">
                        <WonChart/>
                    </div>
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
      <ProjectDashboardModal />
    </>
  );
};

export default ProjectDashboard;
