import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const IconTabler = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Tabler Icons
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
                                <li>
                                    <Link
                                        to="#"
                                        className="hover:underline text-gray-700"
                                    >
                                        Icons
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li className="text-dark font-medium" aria-current="page">
                                    Tabler Icons
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div>
                        <div>
                            <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                                <div className="card-header py-4 px-5 border-b border-borderColor">
                                    <div className="card-title">Tabler Icons</div>
                                </div>
                                <div className="card-body p-5">
                                    <p className="mb-2">
                                        <code className="text-pink text-sm">
                                            &lt;i class="ti ti-ICON_NAME"&gt;&lt;/i&gt;
                                        </code>
                                        . For more information{" "}
                                        <Link
                                            to="https://tabler-icons.io/"
                                            target="_blank"
                                            className="text-primary"
                                        >
                                            click here
                                        </Link>
                                        .
                                    </p>
                                    <div className="icons-items">
                                        <div className="icons-list flex flex-wrap">
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-home"
                                                    data-tooltip-target="ti-home"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-home"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-home
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-layout-dashboard"
                                                    data-tooltip-target="ti-layout-dashboard"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-layout-dashboard"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-layout-dashboard
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-map-pin-check"
                                                    data-tooltip-target="ti-map-pin-check"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-map-pin-check"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-map-pin-check
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-message-2"
                                                    data-tooltip-target="ti-message-2"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-message-2"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-message-2
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-user-circle"
                                                    data-tooltip-target="ti-user-circle"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-user-circle"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-user-circle
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-photo"
                                                    data-tooltip-target="ti-photo"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-photo"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-photo
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-file-description"
                                                    data-tooltip-target="ti-file-description"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-file-description"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-file-description
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-chart-line"
                                                    data-tooltip-target="ti-chart-line"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-chart-line"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-chart-line
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-exchange"
                                                    data-tooltip-target="ti-exchange"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-exchange"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-exchange
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-menu-2"
                                                    data-tooltip-target="ti-menu-2"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-menu-2"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-menu-2
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-settings-cog"
                                                    data-tooltip-target="ti-settings-cog"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-settings-cog"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-settings-cog
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-activity"
                                                    data-tooltip-target="ti-activity"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-activity"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-activity
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-shopping-bag"
                                                    data-tooltip-target="ti-shopping-bag"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-shopping-bag"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-shopping-bag
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-brand-hipchat"
                                                    data-tooltip-target="ti-brand-hipchat"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-brand-hipchat"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-brand-hipchat
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-bell"
                                                    data-tooltip-target="ti-bell"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-bell"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-bell
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-mail-cog"
                                                    data-tooltip-target="ti-mail-cog"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-mail-cog"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-mail-cog
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-location"
                                                    data-tooltip-target="ti-location"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-location"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-location
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-chart-pie"
                                                    data-tooltip-target="ti-chart-pie"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-chart-pie"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-chart-pie
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-checkbox"
                                                    data-tooltip-target="ti-checkbox"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-checkbox"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-checkbox
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-checks"
                                                    data-tooltip-target="ti-checks"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-checks"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-checks
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-chevron-down"
                                                    data-tooltip-target="ti-chevron-down"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-chevron-down"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-chevron-down
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-chevrons-right"
                                                    data-tooltip-target="ti-chevrons-right"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-chevrons-right"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-chevrons-right
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-circle-arrow-right-filled"
                                                    data-tooltip-target="ti-circle-arrow-right-filled"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-circle-arrow-right-filled"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-circle-arrow-right-filled
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-cloud-download"
                                                    data-tooltip-target="ti-cloud-download"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-cloud-download"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-cloud-download
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-database"
                                                    data-tooltip-target="ti-database"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-database"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-database
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-device-analytics"
                                                    data-tooltip-target="ti-device-analytics"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-device-analytics"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-device-analytics
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-discount"
                                                    data-tooltip-target="ti-discount"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-discount"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-discount
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-dots-vertical"
                                                    data-tooltip-target="ti-dots-vertical"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-dots-vertical"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-dots-vertical
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-download"
                                                    data-tooltip-target="ti-download"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-download"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-download
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-trash"
                                                    data-tooltip-target="ti-trash"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-trash"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-trash
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-folder-open"
                                                    data-tooltip-target="ti-folder-open"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-folder-open"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-folder-open
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-calendar"
                                                    data-tooltip-target="ti-calendar"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-calendar"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-calendar
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-calculator"
                                                    data-tooltip-target="ti-calculator"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-calculator"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-calculator
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-clock"
                                                    data-tooltip-target="ti-clock"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-clock"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-clock
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-phone-call"
                                                    data-tooltip-target="ti-phone-call"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-phone-call"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-phone-call
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
                                            <div className="icons-list-item">
                                                <i
                                                    className="ti ti-video"
                                                    data-tooltip-target="ti-video"
                                                    data-tooltip-placement="top"
                                                />
                                                <div
                                                    id="ti-video"
                                                    role="tooltip"
                                                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                                >
                                                    ti ti-video
                                                    <div className="tooltip-arrow" data-popper-arrow="" />
                                                </div>
                                            </div>
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
        </>

    )
}

export default IconTabler