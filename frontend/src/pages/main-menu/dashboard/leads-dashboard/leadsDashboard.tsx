import { useEffect, type FC } from 'react';
import ContactReportChart from './charts/contactReportChart';
import LastChart from '../deals-dashboard/charts/lastChart';
import WonChart from '../deals-dashboard/charts/wonChart';
import LeadPieChart from './charts/leadPieChart';
import { initDropdowns } from 'flowbite';
import { Link } from 'react-router';
import { all_routes } from '../../../../routes/all_routes';
import ImageWithBasePath from '../../../../components/image-with-base-path';
import PredefinedDatePicker from '../../../../components/common-date-range-picker/PredefinedDatePicker';
import CollapseIcons from '../../../../components/collapse-icons/collapseIcons';
import CommonFooter from '../../../../components/common-footer/commonFooter';
import EvmChart from '../../../../charts/evmChart';
// import DATA from ./charts/evm.csv';

const LeadsDashboard: FC = () => {
  useEffect(() => {
    initDropdowns();
  }, []);
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[56px] ml-[240px]">
        <div className="content p-5 pb-0">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
            <div>
              <h4>Leads Dashboard</h4>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <div className="relative">
                <PredefinedDatePicker />
              </div>
              <CollapseIcons />
            </div>
          </div>






        <div>
          <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
            <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
              <h6 className="m-0">Earned Value Management</h6>
              <EvmChart />

            </div>
          </div>

        </div>




          {/* End Page Header */}
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Recently Created Deals */}
            <div className="w-full md:w-1/2 flex mb-5">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Recently Created Leads</h6>
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
                </div>
                <div className="custom-table overflow-auto p-4">
                  <table
                    id="lead-project"
                    className="w-[570px] min-w-full border-collapse text-sm"
                  >
                    <thead className="bg-gray-100 text-gray-700 text-left">
                      <tr>
                        <th className="px-4 py-2 font-medium w-[83px]">Lead Name</th>
                        <th className="px-4 py-2 font-medium w-[195px]">Company Name</th>
                        <th className="px-4 py-2 font-medium w-[106px]">Phone</th>
                        <th className="px-4 py-2 font-medium w-[78px]">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Row 1 */}
                      <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-3">
                          <Link to={all_routes.leadsDashboard} className="text-gray-900">
                            Collins
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-5 h-5"
                                src="assets/img/icons/company-icon-01.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-sm font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col text-gray-800 hover:text-gray-900"
                                >
                                  NovaWave LLC
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">+1 875455453</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-success text-white">
                            Closed
                          </span>
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-3">
                          <Link to={all_routes.leadsDashboard} className="text-gray-900">
                            Konopelski
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-5 h-5"
                                src="assets/img/icons/company-icon-02.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-sm font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col text-gray-800 hover:text-gray-900"
                                >
                                  BlueSky Industries
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">+1 989757485</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-success text-white">
                            Closed
                          </span>
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-3">
                          <Link to={all_routes.leadsDashboard} className="text-gray-900">
                            Adams
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-5 h-5"
                                src="assets/img/icons/company-icon-03.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-sm font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col text-gray-800 hover:text-gray-900"
                                >
                                  Silver Hawk
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">+1 546555455</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-success text-white">
                            Closed
                          </span>
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-3">
                          <Link to={all_routes.leadsDashboard} className="text-gray-900">
                            Schumm
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-5 h-5"
                                src="assets/img/icons/company-icon-04.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-sm font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col text-gray-800 hover:text-gray-900"
                                >
                                  Summit Peak
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">+1 454478787</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-warning text-white">
                            Contacted
                          </span>
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-3">
                          <Link to={all_routes.leadsDashboard} className="text-gray-900">
                            Wisozk
                          </Link>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <Link
                              to={all_routes.companyDetails}
                              className="w-8 h-8 rounded-full border flex items-center justify-center"
                            >
                              <ImageWithBasePath
                                className="w-5 h-5"
                                src="assets/img/icons/company-icon-05.svg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="ml-2">
                              <h6 className="text-sm font-medium mb-0">
                                <Link
                                  to={all_routes.companyDetails}
                                  className="flex flex-col text-gray-800 hover:text-gray-900"
                                >
                                  RiverStone Ltd
                                </Link>
                              </h6>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">+1 1245427875</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-1 rounded text-xs font-semibold bg-success text-white">
                            Closed
                          </span>
                        </td>
                      </tr>
                    </tbody>
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
                <div className="px-4">
                  <div id="leadpiechart" className="text-center">
                    <LeadPieChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Projects By Stage */}
          <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full mb-5">
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
              <ContactReportChart />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-6">
            {/* Lost Deals Stage */}
            <div className="w-full md:w-1/2 flex mb-5">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                  <h6 className="m-0">Lost Deals Stage</h6>
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
                  <LastChart />
                </div>
              </div>
            </div>
            {/* Won Deals Stage */}
            <div className="w-full md:w-1/2 flex mb-5">
              <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                <div className="border-b border-borderColor px-4 py-3">
                  <div className="flex flex-wrap justify-between items-center gap-y-3">
                    <h6 className="text-base font-semibold m-0">Won Deals Stage</h6>
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
                  <WonChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Start Footer */}
     <CommonFooter/>
      {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default LeadsDashboard;
