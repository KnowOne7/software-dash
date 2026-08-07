import { Link } from "react-router"
import PredefinedDatePicker from "../../components/common-date-range-picker/PredefinedDatePicker"
import DealsChart from "../../pages/crm/analytics/chart/dealsChart"
import LastChart from "../../pages/main-menu/dashboard/deals-dashboard/charts/lastChart"
import WonChart from "../../pages/main-menu/dashboard/deals-dashboard/charts/wonChart"
import DealsYearChart from "../../pages/main-menu/dashboard/deals-dashboard/charts/dealsYearChart"
import TaskTemplate from '../forms/task-template'
import { all_routes } from "../../routes/all_routes"


const LayoutRTL = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[56px] mr-[240px]">
                <div className="content p-5">
                    {/* Page Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                        <div>
                            <h4>Deals Dashboard</h4>
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
                        <div>
                            <TaskTemplate />
                        </div>
                    </div>
                    {/* End Page Header */}
                    <div className="flex flex-col md:flex-row md:gap-6">
                        {/* Recently Created Deals */}
                        <div className="w-full md:w-1/2 flex mb-5">
                            <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                                <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                                    <h6 className="m-0">Recently Created Deals</h6>
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
                                <div className="table-responsive custom-table p-4">
                                    <table className="table table-nowrap dataTable min-w-full text-sm align-middle whitespace-nowrap" id="deals-project">
                                        <thead className="table-light">
                                            <tr className="border-b border-gray-100 dark:border-gray-700/50">
                                                <th className="text-left py-2 px-3 font-semibold text-gray-900 bg-gray-100/75 dark:text-gray-50 dark:bg-gray-700/25">
                                                    Deal Name
                                                </th>
                                                <th className="text-left py-2 px-3 font-semibold text-gray-900 bg-gray-100/75 dark:text-gray-50 dark:bg-gray-700/25">
                                                    Stage
                                                </th>
                                                <th className="text-left py-2 px-3 font-semibold text-gray-900 bg-gray-100/75 dark:text-gray-50 dark:bg-gray-700/25">
                                                    Deal Value
                                                </th>
                                                <th className="text-left py-2 px-3 font-semibold text-gray-900 bg-gray-100/75 dark:text-gray-50 dark:bg-gray-700/25">
                                                    Status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td className="p-3">
                                                    <Link to={all_routes.dealsDetails} className="font-medium text-gray-900 hover:text-primary">SkyHigh Annual Booking</Link>
                                                </td>
                                                <td className="p-3">Appointment</td>
                                                <td className="p-3">$04,51,000</td>
                                                <td className="p-3">
                                                    <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td className="p-3">
                                                    <Link to={all_routes.dealsDetails} className="font-medium text-gray-900 hover:text-primary">CRM Onboarding Package</Link>
                                                </td>
                                                <td className="p-3">Contact Made</td>
                                                <td className="p-3">$72,14,078</td>
                                                <td className="p-3">
                                                    <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-danger">Lost</span>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td className="p-3">
                                                    <Link to={all_routes.dealsDetails} className="font-medium text-gray-900 hover:text-primary">Enterprise Plan Upgrade</Link>
                                                </td>
                                                <td className="p-3">Presentation</td>
                                                <td className="p-3">$04,14,800</td>
                                                <td className="p-3">
                                                    <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td className="p-3">
                                                    <Link to={all_routes.dealsDetails} className="font-medium text-gray-900 hover:text-primary">CRM Migration Project</Link>
                                                </td>
                                                <td className="p-3">Proposal Made</td>
                                                <td className="p-3">$16,11,400</td>
                                                <td className="p-3">
                                                    <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-gray-50 dark:even:bg-gray-900/50">
                                                <td className="p-3">
                                                    <Link to={all_routes.dealsDetails} className="font-medium text-gray-900 hover:text-primary">Sales Pipeline Optimization</Link>
                                                </td>
                                                <td className="p-3">Qualify To Buy</td>
                                                <td className="p-3">$09,05,947</td>
                                                <td className="p-3">
                                                    <span className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex font-medium bg-success">Won</span>
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
                                        <h6 className="text-base font-semibold m-0">Deals By Stage</h6>
                                        <div className="flex flex-wrap items-center gap-2">
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
                                </div>
                                <div className="px-4">
                                    <div id="deals-chart">
                                        <DealsChart/>
                                    </div>
                                </div>
                            </div>
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
                                                Last 30 days
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
                                    <div id="last-chart">
                                        <LastChart/>
                                    </div>
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
                                </div>
                                <div className="px-4">
                                    <div id="won-chart">
                                        <WonChart/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Deals by Year */}
                    <div className="bg-white border border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                        <div className="flex flex-wrap justify-between items-center gap-y-3 border-b border-borderColor px-4 py-3">
                            <h6 className="m-0">Deals by Year</h6>
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
                            <div id="deals-year">
                                <DealsYearChart/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Footer */}
                <footer className="footer block md:flex justify-between md:text-left text-center p-4 px-5 bg-white border-t border-borderColor">
                    <p className="mb-0">
                        Copyright ©{" "}2025{" "}
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

    )
}

export default LayoutRTL