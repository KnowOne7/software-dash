import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import "../../../style/icon/remix/fonts/remixicon.css"

const IconRemix = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Remix Icons
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
                Remix Icons
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <div className="card-title">Remix Icons</div>
          </div>
          <div className="card-body p-5">
            <p className="mb-2">
              <code className="text-pink text-sm">
                &lt;i class="ri-ICON_NAME"&gt;&lt;/i&gt;
              </code>
              . For more information{" "}
              <Link
                to="https://remixicon.com/"
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
                    className="ri-home-line"
                    data-tooltip-target="ri-home-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-home-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-home-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-dashboard-3-line"
                    data-tooltip-target="ri-dashboard-3-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-dashboard-3-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-dashboard-3-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-map-pin-2-line"
                    data-tooltip-target="ri-map-pin-2-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-map-pin-2-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-map-pin-2-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-message-2-line"
                    data-tooltip-target="ri-message-2-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-message-2-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-message-2-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-group-line"
                    data-tooltip-target="ri-group-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-group-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-group-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-image-line"
                    data-tooltip-target="ri-image-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-image-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-image-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-file-line"
                    data-tooltip-target="ri-file-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-file-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-file-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-line-chart-line"
                    data-tooltip-target="ri-line-chart-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-line-chart-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-line-chart-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-exchange-line"
                    data-tooltip-target="ri-exchange-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-exchange-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-exchange-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-menu-line"
                    data-tooltip-target="ri-menu-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-menu-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-menu-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-settings-5-line"
                    data-tooltip-target="ri-settings-5-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-settings-5-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-settings-5-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-building-4-line"
                    data-tooltip-target="ri-building-4-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-building-4-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-building-4-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-shopping-cart-2-line"
                    data-tooltip-target="ri-shopping-cart-2-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-shopping-cart-2-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-shopping-cart-2-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-video-chat-line"
                    data-tooltip-target="ri-video-chat-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-video-chat-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-video-chat-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-notification-3-line"
                    data-tooltip-target="ri-notification-3-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-notification-3-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-notification-3-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-mail-settings-line"
                    data-tooltip-target="ri-mail-settings-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-mail-settings-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-mail-settings-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-map-pin-line"
                    data-tooltip-target="ri-map-pin-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-map-pin-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-map-pin-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-pie-chart-line"
                    data-tooltip-target="ri-pie-chart-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-pie-chart-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-pie-chart-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-checkbox-line"
                    data-tooltip-target="ri-checkbox-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-checkbox-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-checkbox-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-check-double-line"
                    data-tooltip-target="ri-check-double-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-check-double-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-check-double-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-archive-line"
                    data-tooltip-target="ri-archive-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-archive-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-archive-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-arrow-down-s-line"
                    data-tooltip-target="ri-arrow-down-s-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-arrow-down-s-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-arrow-down-s-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-arrow-right-double-fill"
                    data-tooltip-target="ri-arrow-right-double-fill"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-arrow-right-double-fill"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-arrow-right-double-fill
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-download-cloud-line"
                    data-tooltip-target="ri-download-cloud-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-download-cloud-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-download-cloud-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-database-2-line"
                    data-tooltip-target="ri-database-2-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-database-2-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-database-2-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-computer-line"
                    data-tooltip-target="ri-computer-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-computer-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-computer-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-discount-percent-line"
                    data-tooltip-target="ri-discount-percent-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-discount-percent-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-discount-percent-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-more-2-fill"
                    data-tooltip-target="ri-more-2-fill"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-more-2-fill"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-more-2-fill
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-download-2-line"
                    data-tooltip-target="ri-download-2-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-download-2-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-download-2-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-delete-bin-line"
                    data-tooltip-target="ri-delete-bin-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-delete-bin-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-delete-bin-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-folder-open-line"
                    data-tooltip-target="ri-folder-open-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-folder-open-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-folder-open-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-calendar-2-line"
                    data-tooltip-target="ri-calendar-2-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-calendar-2-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-calendar-2-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-calculator-line"
                    data-tooltip-target="ri-calculator-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-calculator-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-calculator-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-time-line"
                    data-tooltip-target="ri-time-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-time-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-time-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-phone-line"
                    data-tooltip-target="ri-phone-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-phone-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-phone-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
                <div className="icons-list-item">
                  <i
                    className="ri-video-on-line"
                    data-tooltip-target="ri-video-on-line"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ri-video-on-line"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ri-video-on-line
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </div>
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
  
  )
}

export default IconRemix