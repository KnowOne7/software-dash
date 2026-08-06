import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import "../../../style/icon/bootstrap/bootstrap-icons.min.css"

const IconBootstrap = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Bootstrap Icons
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
                Bootstrap Icons
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div>
          <div>
            <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div className="card-header py-4 px-5 border-b border-borderColor">
                <div className="card-title">Bootstrap Icons</div>
              </div>
              <div className="card-body p-5">
                <p className="mb-2">
                  <code className="text-pink text-sm">
                    &lt;i class="bi bi-ICON_NAME"&gt;&lt;/i&gt;
                  </code>
                  . For more information{" "}
                  <Link
                    to="https://icons.getbootstrap.com/"
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
                        className="bi bi-house"
                        data-tooltip-target="bi-house"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-house"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-house
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-speedometer2"
                        data-tooltip-target="bi-speedometer2"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-speedometer2"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-speedometer2
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-map"
                        data-tooltip-target="bi-map"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-map"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-map
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-chat-left-text"
                        data-tooltip-target="bi-chat-left-text"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-chat-left-text"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-chat-left-text
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-people"
                        data-tooltip-target="bi-people"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-people"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-people
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-card-image"
                        data-tooltip-target="bi-card-image"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-card-image"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-card-image
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-file-earmark-text"
                        data-tooltip-target="bi-file-earmark-text"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-file-earmark-text"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-file-earmark-text
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-bar-chart"
                        data-tooltip-target="bi-bar-chart"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-bar-chart"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-bar-chart
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-arrow-clockwise"
                        data-tooltip-target="bi-arrow-clockwise"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-arrow-clockwise"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-arrow-clockwise
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-list"
                        data-tooltip-target="bi-list"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-list"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-list
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-gear"
                        data-tooltip-target="bi-gear"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-gear"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-gear
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-building"
                        data-tooltip-target="bi-building"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-building"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-building
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-basket"
                        data-tooltip-target="bi-basket"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-basket"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-basket
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-camera-reels"
                        data-tooltip-target="bi-camera-reels"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-camera-reels"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-camera-reels
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-bell"
                        data-tooltip-target="bi-bell"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-bell"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-bell
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-envelope"
                        data-tooltip-target="bi-envelope"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-envelope"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-envelope
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-pin-angle"
                        data-tooltip-target="bi-pin-angle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-pin-angle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-pin-angle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-pie-chart"
                        data-tooltip-target="bi-pie-chart"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-pie-chart"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-pie-chart
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-check2-square"
                        data-tooltip-target="bi-check2-square"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-check2-square"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-check2-square
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-check2-all"
                        data-tooltip-target="bi-check2-all"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-check2-all"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-check2-all
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-archive"
                        data-tooltip-target="bi-archive"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-archive"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-archive
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-arrow-down-square"
                        data-tooltip-target="bi-arrow-down-square"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-arrow-down-square"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-arrow-down-square
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-arrow-down-up"
                        data-tooltip-target="bi-arrow-down-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-arrow-down-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-arrow-down-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-cloud-arrow-down"
                        data-tooltip-target="bi-cloud-arrow-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-cloud-arrow-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-cloud-arrow-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-database"
                        data-tooltip-target="bi-database"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-database"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-database
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-laptop"
                        data-tooltip-target="bi-laptop"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-laptop"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-laptop
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-exclamation-circle"
                        data-tooltip-target="bi-exclamation-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-exclamation-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-three-dots-vertical"
                        data-tooltip-target="bi-three-dots-vertical"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-three-dots-vertical"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-three-dots-vertical
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-download"
                        data-tooltip-target="bi-download"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-download"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-download
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-trash3"
                        data-tooltip-target="bi-trash3"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-trash3"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-trash3
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-folder2-open"
                        data-tooltip-target="bi-folder2-open"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-folder2-open"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-folder2-open
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-calendar"
                        data-tooltip-target="bi-calendar"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-calendar"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-calendar
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-star"
                        data-tooltip-target="bi-star"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-star"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-star
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-clock"
                        data-tooltip-target="bi-clock"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-clock"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-clock
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-telephone"
                        data-tooltip-target="bi-telephone"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-telephone"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-telephone
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </div>
                    <div className="icons-list-item">
                      <i
                        className="bi bi-camera-video"
                        data-tooltip-target="bi-camera-video"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="bi-camera-video"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        bi bi-camera-video
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
     <CommonFooter/>
      {/* End Footer */}
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default IconBootstrap