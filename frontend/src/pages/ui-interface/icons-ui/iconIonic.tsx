import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import "../../../style/icon/ionic/ionicons.css"


const IconIonic = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">Ionic Icon</h4>
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
                Ionic Icon
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <div className="card-title">Ionic Icon</div>
          </div>
          <div className="card-body p-5">
            <div className="icons-items">
              <ul className="icons-list flex flex-wrap">
                <li>
                  <i
                    className="ion-ionic"
                    data-tooltip-target="ion-ionic"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ionic"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ionic
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-up-a"
                    data-tooltip-target="ion-arrow-up-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-up-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-up-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-right-a"
                    data-tooltip-target="ion-arrow-right-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-right-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-right-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-down-a"
                    data-tooltip-target="ion-arrow-down-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-down-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-down-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-left-a"
                    data-tooltip-target="ion-arrow-left-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-left-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-left-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-up-b"
                    data-tooltip-target="ion-arrow-up-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-up-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-up-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-right-b"
                    data-tooltip-target="ion-arrow-right-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-right-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-right-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-down-b"
                    data-tooltip-target="ion-arrow-down-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-down-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-down-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-left-b"
                    data-tooltip-target="ion-arrow-left-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-left-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-left-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-up-c"
                    data-tooltip-target="ion-arrow-up-c"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-up-c"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-up-c
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-right-c"
                    data-tooltip-target="ion-arrow-right-c"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-right-c"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-right-c
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-down-c"
                    data-tooltip-target="ion-arrow-down-c"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-down-c"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-down-c
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-left-c"
                    data-tooltip-target="ion-arrow-left-c"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-left-c"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-left-c
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-return-right"
                    data-tooltip-target="ion-arrow-return-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-return-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-return-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-return-left"
                    data-tooltip-target="ion-arrow-return-left"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-return-left"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-return-left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-swap"
                    data-tooltip-target="ion-arrow-swap"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-swap"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-swap
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-shrink"
                    data-tooltip-target="ion-arrow-shrink"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-shrink"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-shrink
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-expand"
                    data-tooltip-target="ion-arrow-expand"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-expand"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-expand
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-move"
                    data-tooltip-target="ion-arrow-move"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-move"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-move
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-resize"
                    data-tooltip-target="ion-arrow-resize"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-resize"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-resize
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chevron-up"
                    data-tooltip-target="ion-chevron-up"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chevron-up"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chevron-up
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chevron-right"
                    data-tooltip-target="ion-chevron-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chevron-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chevron-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chevron-down"
                    data-tooltip-target="ion-chevron-down"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chevron-down"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chevron-down
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chevron-left"
                    data-tooltip-target="ion-chevron-left"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chevron-left"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chevron-left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-navicon-round"
                    data-tooltip-target="ion-navicon-round"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-navicon-round"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-navicon-round
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-navicon"
                    data-tooltip-target="ion-navicon"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-navicon"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-navicon
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-drag"
                    data-tooltip-target="ion-drag"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-drag"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-drag
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-log-in"
                    data-tooltip-target="ion-log-in"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-log-in"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-log-in
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-log-out"
                    data-tooltip-target="ion-log-out"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-log-out"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-log-out
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-checkmark-round"
                    data-tooltip-target="ion-checkmark-round"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-checkmark-round"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-checkmark-round
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-checkmark"
                    data-tooltip-target="ion-checkmark"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-checkmark"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-checkmark
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-checkmark-circled"
                    data-tooltip-target="ion-checkmark-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-checkmark-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-checkmark-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-close-round"
                    data-tooltip-target="ion-close-round"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-close-round"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-close-round
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-close"
                    data-tooltip-target="ion-close"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-close"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-close
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-close-circled"
                    data-tooltip-target="ion-close-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-close-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-close-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-plus-round"
                    data-tooltip-target="ion-plus-round"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-plus-round"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-plus-round
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-plus"
                    data-tooltip-target="ion-plus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-plus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-plus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-plus-circled"
                    data-tooltip-target="ion-plus-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-plus-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-plus-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-minus-round"
                    data-tooltip-target="ion-minus-round"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-minus-round"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-minus-round
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-minus"
                    data-tooltip-target="ion-minus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-minus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-minus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-minus-circled"
                    data-tooltip-target="ion-minus-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-minus-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-minus-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-information"
                    data-tooltip-target="ion-information"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-information"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-information
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-information-circled"
                    data-tooltip-target="ion-information-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-information-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-information-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-help"
                    data-tooltip-target="ion-help"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-help"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-help
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-help-circled"
                    data-tooltip-target="ion-help-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-help-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-help-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-help-buoy"
                    data-tooltip-target="ion-help-buoy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-help-buoy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-help-buoy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-asterisk"
                    data-tooltip-target="ion-asterisk"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-asterisk"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-asterisk
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-alert"
                    data-tooltip-target="ion-alert"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-alert"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-alert
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-alert-circled"
                    data-tooltip-target="ion-alert-circled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-alert-circled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-alert-circled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-refresh"
                    data-tooltip-target="ion-refresh"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-refresh"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-refresh
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-loop"
                    data-tooltip-target="ion-loop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-loop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-loop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-shuffle"
                    data-tooltip-target="ion-shuffle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-shuffle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-shuffle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-home"
                    data-tooltip-target="ion-home"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-home"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-home
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-search"
                    data-tooltip-target="ion-search"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-search"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-search
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-flag"
                    data-tooltip-target="ion-flag"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-flag"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-flag
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-star"
                    data-tooltip-target="ion-star"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-star"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-star
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-heart"
                    data-tooltip-target="ion-heart"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-heart"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-heart
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-heart-broken"
                    data-tooltip-target="ion-heart-broken"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-heart-broken"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-heart-broken
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-gear-a"
                    data-tooltip-target="ion-gear-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-gear-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-gear-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-gear-b"
                    data-tooltip-target="ion-gear-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-gear-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-gear-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-toggle-filled"
                    data-tooltip-target="ion-toggle-filled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-toggle-filled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-toggle-filled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-toggle"
                    data-tooltip-target="ion-toggle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-toggle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-toggle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-settings"
                    data-tooltip-target="ion-settings"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-settings"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-settings
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-wrench"
                    data-tooltip-target="ion-wrench"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-wrench"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-wrench
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-folder"
                    data-tooltip-target="ion-folder"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-folder"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-folder
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-hammer"
                    data-tooltip-target="ion-hammer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-hammer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-hammer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-edit"
                    data-tooltip-target="ion-edit"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-edit"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-edit
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-trash-a"
                    data-tooltip-target="ion-trash-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-trash-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-trash-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-trash-b"
                    data-tooltip-target="ion-trash-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-trash-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-trash-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-document"
                    data-tooltip-target="ion-document"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-document"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-document
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-document-text"
                    data-tooltip-target="ion-document-text"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-document-text"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-document-text
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-clipboard"
                    data-tooltip-target="ion-clipboard"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-clipboard"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-clipboard
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-scissors"
                    data-tooltip-target="ion-scissors"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-scissors"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-scissors
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-funnel"
                    data-tooltip-target="ion-funnel"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-funnel"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-funnel
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-bookmark"
                    data-tooltip-target="ion-bookmark"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-bookmark"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-bookmark
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-email"
                    data-tooltip-target="ion-email"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-email"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-email
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-folder"
                    data-tooltip-target="ion-folder"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-folder"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-folder
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-filing"
                    data-tooltip-target="ion-filing"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-filing"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-filing
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-archive"
                    data-tooltip-target="ion-archive"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-archive"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-archive
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-reply"
                    data-tooltip-target="ion-reply"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-reply"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-reply
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-reply-all"
                    data-tooltip-target="ion-reply-all"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-reply-all"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-reply-all
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-forward"
                    data-tooltip-target="ion-forward"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-forward"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-forward
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-share"
                    data-tooltip-target="ion-share"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-share"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-share
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-paper-airplane"
                    data-tooltip-target="ion-paper-airplane"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-paper-airplane"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-paper-airplane
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-link"
                    data-tooltip-target="ion-link"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-link"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-link
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-paperclip"
                    data-tooltip-target="ion-paperclip"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-paperclip"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-paperclip
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-compose"
                    data-tooltip-target="ion-compose"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-compose"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-compose
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-briefcase"
                    data-tooltip-target="ion-briefcase"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-briefcase"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-briefcase
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-medkit"
                    data-tooltip-target="ion-medkit"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-medkit"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-medkit
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-at"
                    data-tooltip-target="ion-at"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-at"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-at
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pound"
                    data-tooltip-target="ion-pound"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pound"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pound
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-quote"
                    data-tooltip-target="ion-quote"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-quote"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-quote
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-cloud"
                    data-tooltip-target="ion-cloud"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-cloud"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-cloud
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-upload"
                    data-tooltip-target="ion-upload"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-upload"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-upload
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-more"
                    data-tooltip-target="ion-more"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-more"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-more
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-grid"
                    data-tooltip-target="ion-grid"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-grid"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-grid
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-calendar"
                    data-tooltip-target="ion-calendar"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-calendar"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-calendar
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-clock"
                    data-tooltip-target="ion-clock"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-clock"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-clock
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-compass"
                    data-tooltip-target="ion-compass"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-compass"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-compass
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pinpoint"
                    data-tooltip-target="ion-pinpoint"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pinpoint"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pinpoint
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pin"
                    data-tooltip-target="ion-pin"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pin"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pin
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-navigate"
                    data-tooltip-target="ion-navigate"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-navigate"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-navigate
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-location"
                    data-tooltip-target="ion-location"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-location"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-location
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-map"
                    data-tooltip-target="ion-map"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-map"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-map
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-model-s"
                    data-tooltip-target="ion-model-s"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-model-s"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-model-s
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-locked"
                    data-tooltip-target="ion-locked"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-locked"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-locked
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-unlocked"
                    data-tooltip-target="ion-unlocked"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-unlocked"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-unlocked
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-key"
                    data-tooltip-target="ion-key"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-key"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-key
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-graph-up-right"
                    data-tooltip-target="ion-arrow-graph-up-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-graph-up-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-graph-up-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-graph-down-right"
                    data-tooltip-target="ion-arrow-graph-down-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-graph-down-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-graph-down-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-arrow-graph-down-left"
                    data-tooltip-target="ion-arrow-graph-down-left"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-arrow-graph-down-left"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-arrow-graph-down-left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-stats-bars"
                    data-tooltip-target="ion-stats-bars"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-stats-bars"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-stats-bars
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-connection-bars"
                    data-tooltip-target="ion-connection-bars"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-connection-bars"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-connection-bars
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pie-graph"
                    data-tooltip-target="ion-pie-graph"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pie-graph"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pie-graph
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chatbubble"
                    data-tooltip-target="ion-chatbubble"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chatbubble"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chatbubble-working"
                    data-tooltip-target="ion-chatbubble-working"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chatbubble-working"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chatbubble-working
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chatbubbles"
                    data-tooltip-target="ion-chatbubbles"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chatbubbles"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chatbubbles
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chatbox"
                    data-tooltip-target="ion-chatbox"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chatbox"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chatbox
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chatbox-working"
                    data-tooltip-target="ion-chatbox-working"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chatbox-working"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chatbox-working
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-chatboxes"
                    data-tooltip-target="ion-chatboxes"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-chatboxes"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-chatboxes
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-person"
                    data-tooltip-target="ion-person"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-person"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-person
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-person-add"
                    data-tooltip-target="ion-person-add"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-person-add"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-person-add
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-person-stalker"
                    data-tooltip-target="ion-person-stalker"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-person-stalker"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-person-stalker
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-woman"
                    data-tooltip-target="ion-woman"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-woman"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-woman
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-man"
                    data-tooltip-target="ion-man"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-man"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-man
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-female"
                    data-tooltip-target="ion-female"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-female"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-female
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-male"
                    data-tooltip-target="ion-male"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-male"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-male
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-fork"
                    data-tooltip-target="ion-fork"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-fork"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-fork
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-knife"
                    data-tooltip-target="ion-knife"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-knife"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-knife
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-spoon"
                    data-tooltip-target="ion-spoon"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-spoon"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-spoon
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-beer"
                    data-tooltip-target="ion-beer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-beer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-beer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-wineglass"
                    data-tooltip-target="ion-wineglass"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-wineglass"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-wineglass
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-coffee"
                    data-tooltip-target="ion-coffee"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-coffee"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-coffee
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-icecream"
                    data-tooltip-target="ion-icecream"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-icecream"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-icecream
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pizza"
                    data-tooltip-target="ion-pizza"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pizza"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pizza
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-power"
                    data-tooltip-target="ion-power"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-power"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-power
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-mouse"
                    data-tooltip-target="ion-mouse"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-mouse"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-mouse
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-battery-full"
                    data-tooltip-target="ion-battery-full"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-battery-full"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-battery-full
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-battery-half"
                    data-tooltip-target="ion-battery-half"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-battery-half"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-battery-half
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-battery-low"
                    data-tooltip-target="ion-battery-low"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-battery-low"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-battery-low
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-battery-empty"
                    data-tooltip-target="ion-battery-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-battery-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-battery-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-battery-charging"
                    data-tooltip-target="ion-battery-charging"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-battery-charging"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-battery-charging
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-bluetooth"
                    data-tooltip-target="ion-bluetooth"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-bluetooth"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-bluetooth
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-calculator"
                    data-tooltip-target="ion-calculator"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-calculator"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-calculator
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-camera"
                    data-tooltip-target="ion-camera"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-camera"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-camera
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-eye"
                    data-tooltip-target="ion-eye"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-eye"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-eye
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-eye-disabled"
                    data-tooltip-target="ion-eye-disabled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-eye-disabled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-eye-disabled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-flash"
                    data-tooltip-target="ion-flash"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-flash"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-flash
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-flash-off"
                    data-tooltip-target="ion-flash-off"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-flash-off"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-flash-off
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-qr-scanner"
                    data-tooltip-target="ion-qr-scanner"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-qr-scanner"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-qr-scanner
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-image"
                    data-tooltip-target="ion-image"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-image"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-image
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-images"
                    data-tooltip-target="ion-images"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-images"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-images
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-contrast"
                    data-tooltip-target="ion-contrast"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-contrast"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-contrast
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-wand"
                    data-tooltip-target="ion-wand"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-wand"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-wand
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-aperture"
                    data-tooltip-target="ion-aperture"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-aperture"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-aperture
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-monitor"
                    data-tooltip-target="ion-monitor"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-monitor"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-monitor
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-laptop"
                    data-tooltip-target="ion-laptop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-laptop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-laptop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ipad"
                    data-tooltip-target="ion-ipad"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ipad"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ipad
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-iphone"
                    data-tooltip-target="ion-iphone"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-iphone"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-iphone
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ipod"
                    data-tooltip-target="ion-ipod"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ipod"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ipod
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-printer"
                    data-tooltip-target="ion-printer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-printer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-printer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-usb"
                    data-tooltip-target="ion-usb"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-usb"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-usb
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-outlet"
                    data-tooltip-target="ion-outlet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-outlet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-outlet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-bug"
                    data-tooltip-target="ion-bug"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-bug"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-bug
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-code"
                    data-tooltip-target="ion-code"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-code"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-code
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-code-working"
                    data-tooltip-target="ion-code-working"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-code-working"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-code-working
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-code-download"
                    data-tooltip-target="ion-code-download"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-code-download"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-code-download
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-fork-repo"
                    data-tooltip-target="ion-fork-repo"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-fork-repo"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-fork-repo
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-network"
                    data-tooltip-target="ion-network"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-network"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-network
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pull-request"
                    data-tooltip-target="ion-pull-request"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pull-request"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pull-request
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-merge"
                    data-tooltip-target="ion-merge"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-merge"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-merge
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-game-controller-a"
                    data-tooltip-target="ion-game-controller-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-game-controller-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-game-controller-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-game-controller-b"
                    data-tooltip-target="ion-game-controller-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-game-controller-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-game-controller-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-xbox"
                    data-tooltip-target="ion-xbox"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-xbox"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-xbox
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-playstation"
                    data-tooltip-target="ion-playstation"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-playstation"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-playstation
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-steam"
                    data-tooltip-target="ion-steam"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-steam"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-steam
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-closed-captioning"
                    data-tooltip-target="ion-closed-captioning"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-closed-captioning"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-closed-captioning
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-videocamera"
                    data-tooltip-target="ion-videocamera"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-videocamera"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-videocamera
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-film-marker"
                    data-tooltip-target="ion-film-marker"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-film-marker"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-film-marker
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-disc"
                    data-tooltip-target="ion-disc"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-disc"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-disc
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-headphone"
                    data-tooltip-target="ion-headphone"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-headphone"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-headphone
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-music-note"
                    data-tooltip-target="ion-music-note"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-music-note"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-music-note
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-radio-waves"
                    data-tooltip-target="ion-radio-waves"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-radio-waves"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-radio-waves
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-speakerphone"
                    data-tooltip-target="ion-speakerphone"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-speakerphone"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-speakerphone
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-mic-a"
                    data-tooltip-target="ion-mic-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-mic-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-mic-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-mic-b"
                    data-tooltip-target="ion-mic-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-mic-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-mic-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-mic-c"
                    data-tooltip-target="ion-mic-c"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-mic-c"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-mic-c
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-volume-high"
                    data-tooltip-target="ion-volume-high"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-volume-high"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-volume-high
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-volume-medium"
                    data-tooltip-target="ion-volume-medium"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-volume-medium"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-volume-medium
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-volume-low"
                    data-tooltip-target="ion-volume-low"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-volume-low"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-volume-low
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-volume-mute"
                    data-tooltip-target="ion-volume-mute"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-volume-mute"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-volume-mute
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-levels"
                    data-tooltip-target="ion-levels"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-levels"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-levels
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-play"
                    data-tooltip-target="ion-play"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-play"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-play
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pause"
                    data-tooltip-target="ion-pause"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pause"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pause
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-stop"
                    data-tooltip-target="ion-stop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-stop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-stop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-record"
                    data-tooltip-target="ion-record"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-record"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-record
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-skip-forward"
                    data-tooltip-target="ion-skip-forward"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-skip-forward"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-skip-forward
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-skip-backward"
                    data-tooltip-target="ion-skip-backward"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-skip-backward"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-skip-backward
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-eject"
                    data-tooltip-target="ion-eject"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-eject"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-eject
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-bag"
                    data-tooltip-target="ion-bag"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-bag"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-card"
                    data-tooltip-target="ion-card"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-card"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-card
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-cash"
                    data-tooltip-target="ion-cash"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-cash"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-cash
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pricetag"
                    data-tooltip-target="ion-pricetag"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pricetag"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pricetag
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-pricetags"
                    data-tooltip-target="ion-pricetags"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-pricetags"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-pricetags
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-thumbsup"
                    data-tooltip-target="ion-thumbsup"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-thumbsup"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-thumbsup
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-thumbsdown"
                    data-tooltip-target="ion-thumbsdown"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-thumbsdown"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-thumbsdown
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-happy"
                    data-tooltip-target="ion-happy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-happy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-happy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-sad"
                    data-tooltip-target="ion-sad"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-sad"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-sad
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-trophy"
                    data-tooltip-target="ion-trophy"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-trophy"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-trophy
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-podium"
                    data-tooltip-target="ion-podium"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-podium"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-podium
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ribbon-a"
                    data-tooltip-target="ion-ribbon-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ribbon-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ribbon-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ribbon-b"
                    data-tooltip-target="ion-ribbon-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ribbon-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ribbon-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-university"
                    data-tooltip-target="ion-university"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-university"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-university
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-magnet"
                    data-tooltip-target="ion-magnet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-magnet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-magnet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-beaker"
                    data-tooltip-target="ion-beaker"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-beaker"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-beaker
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-flask"
                    data-tooltip-target="ion-flask"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-flask"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-flask
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-egg"
                    data-tooltip-target="ion-egg"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-egg"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-egg
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-earth"
                    data-tooltip-target="ion-earth"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-earth"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-earth
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-planet"
                    data-tooltip-target="ion-planet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-planet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-planet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-lightbulb"
                    data-tooltip-target="ion-lightbulb"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-lightbulb"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-lightbulb
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-cube"
                    data-tooltip-target="ion-cube"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-cube"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-cube
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-leaf"
                    data-tooltip-target="ion-leaf"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-leaf"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-leaf
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-waterdrop"
                    data-tooltip-target="ion-waterdrop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-waterdrop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-waterdrop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-flame"
                    data-tooltip-target="ion-flame"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-flame"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-flame
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-fireball"
                    data-tooltip-target="ion-fireball"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-fireball"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-fireball
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-bonfire"
                    data-tooltip-target="ion-bonfire"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-bonfire"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-bonfire
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-umbrella"
                    data-tooltip-target="ion-umbrella"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-umbrella"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-umbrella
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-nuclear"
                    data-tooltip-target="ion-nuclear"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-nuclear"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-nuclear
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-no-smoking"
                    data-tooltip-target="ion-no-smoking"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-no-smoking"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-no-smoking
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-thermometer"
                    data-tooltip-target="ion-thermometer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-thermometer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-thermometer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-speedometer"
                    data-tooltip-target="ion-speedometer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-speedometer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-speedometer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-plane"
                    data-tooltip-target="ion-plane"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-plane"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-plane
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-jet"
                    data-tooltip-target="ion-jet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-jet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-jet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-load-a"
                    data-tooltip-target="ion-load-a"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-load-a"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-load-a
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-load-b"
                    data-tooltip-target="ion-load-b"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-load-b"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-load-b
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-load-c"
                    data-tooltip-target="ion-load-c"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-load-c"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-load-c
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-load-d"
                    data-tooltip-target="ion-load-d"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-load-d"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-load-d
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-ionic-outline"
                    data-tooltip-target="ion-ios7-ionic-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-ionic-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-ionic-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-back"
                    data-tooltip-target="ion-ios7-arrow-back"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-back"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-back
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-forward"
                    data-tooltip-target="ion-ios7-arrow-forward"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-forward"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-forward
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-up"
                    data-tooltip-target="ion-ios7-arrow-up"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-up"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-up
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-right"
                    data-tooltip-target="ion-ios7-arrow-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-down"
                    data-tooltip-target="ion-ios7-arrow-down"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-down"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-down
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-left"
                    data-tooltip-target="ion-ios7-arrow-left"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-left"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-thin-up"
                    data-tooltip-target="ion-ios7-arrow-thin-up"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-thin-up"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-thin-up
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-thin-right"
                    data-tooltip-target="ion-ios7-arrow-thin-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-thin-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-thin-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-thin-down"
                    data-tooltip-target="ion-ios7-arrow-thin-down"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-thin-down"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-thin-down
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-arrow-thin-left"
                    data-tooltip-target="ion-ios7-arrow-thin-left"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-arrow-thin-left"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-arrow-thin-left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-circle-filled"
                    data-tooltip-target="ion-ios7-circle-filled"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-circle-filled"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-circle-filled
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-circle-outline"
                    data-tooltip-target="ion-ios7-circle-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-circle-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-circle-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-checkmark-empty"
                    data-tooltip-target="ion-ios7-checkmark-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-checkmark-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-checkmark-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-checkmark-outline"
                    data-tooltip-target="ion-ios7-checkmark-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-checkmark-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-checkmark-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-checkmark"
                    data-tooltip-target="ion-ios7-checkmark"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-checkmark"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-checkmark
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-plus-empty"
                    data-tooltip-target="ion-ios7-plus-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-plus-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-plus-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-plus-outline"
                    data-tooltip-target="ion-ios7-plus-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-plus-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-plus-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-plus"
                    data-tooltip-target="ion-ios7-plus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-plus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-plus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-close-empty"
                    data-tooltip-target="ion-ios7-close-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-close-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-close-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-close-outline"
                    data-tooltip-target="ion-ios7-close-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-close-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-close-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-close"
                    data-tooltip-target="ion-ios7-close"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-close"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-close
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-minus-empty"
                    data-tooltip-target="ion-ios7-minus-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-minus-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-minus-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-minus-outline"
                    data-tooltip-target="ion-ios7-minus-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-minus-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-minus-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-minus"
                    data-tooltip-target="ion-ios7-minus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-minus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-minus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-information-empty"
                    data-tooltip-target="ion-ios7-information-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-information-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-information-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-information-outline"
                    data-tooltip-target="ion-ios7-information-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-information-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-information-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-information"
                    data-tooltip-target="ion-ios7-information"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-information"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-information
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-help-empty"
                    data-tooltip-target="ion-ios7-help-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-help-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-help-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-help-outline"
                    data-tooltip-target="ion-ios7-help-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-help-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-help-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-help"
                    data-tooltip-target="ion-ios7-help"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-help"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-help
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-search"
                    data-tooltip-target="ion-ios7-search"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-search"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-search
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-search-strong"
                    data-tooltip-target="ion-ios7-search-strong"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-search-strong"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-search-strong
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-star"
                    data-tooltip-target="ion-ios7-star"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-star"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-star
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-star-half"
                    data-tooltip-target="ion-ios7-star-half"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-star-half"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-star-half
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-star-outline"
                    data-tooltip-target="ion-ios7-star-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-star-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-star-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-heart"
                    data-tooltip-target="ion-ios7-heart"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-heart"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-heart
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-heart-outline"
                    data-tooltip-target="ion-ios7-heart-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-heart-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-heart-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-more"
                    data-tooltip-target="ion-ios7-more"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-more"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-more
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-more-outline"
                    data-tooltip-target="ion-ios7-more-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-more-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-more-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-home"
                    data-tooltip-target="ion-ios7-home"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-home"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-home
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-home-outline"
                    data-tooltip-target="ion-ios7-home-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-home-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-home-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-cloud"
                    data-tooltip-target="ion-ios7-cloud"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-cloud"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-cloud
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-cloud-outline"
                    data-tooltip-target="ion-ios7-cloud-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-cloud-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-cloud-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-cloud-upload"
                    data-tooltip-target="ion-ios7-cloud-upload"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-cloud-upload"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-cloud-upload
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-cloud-upload-outline"
                    data-tooltip-target="ion-ios7-cloud-upload-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-cloud-upload-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-cloud-upload-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-cloud-download"
                    data-tooltip-target="ion-ios7-cloud-download"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-cloud-download"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-cloud-download
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-cloud-download-outline"
                    data-tooltip-target="ion-ios7-cloud-download-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-cloud-download-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-cloud-download-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-upload"
                    data-tooltip-target="ion-ios7-upload"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-upload"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-upload
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-upload-outline"
                    data-tooltip-target="ion-ios7-upload-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-upload-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-upload-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-download"
                    data-tooltip-target="ion-ios7-download"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-download"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-download
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-refresh"
                    data-tooltip-target="ion-ios7-refresh"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-refresh"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-refresh
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-refresh-outline"
                    data-tooltip-target="ion-ios7-refresh-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-refresh-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-refresh-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-refresh-empty"
                    data-tooltip-target="ion-ios7-refresh-empty"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-refresh-empty"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-refresh-empty
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-reload"
                    data-tooltip-target="ion-ios7-reload"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-reload"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-reload
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-loop-strong"
                    data-tooltip-target="ion-ios7-loop-strong"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-loop-strong"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-loop-strong
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-loop"
                    data-tooltip-target="ion-ios7-loop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-loop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-loop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-bookmarks"
                    data-tooltip-target="ion-ios7-bookmarks"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-bookmarks"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-bookmarks
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li>
                  <i
                    className="ion-ios7-bookmarks-outline"
                    data-tooltip-target="ion-ios7-bookmarks-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="ion-ios7-bookmarks-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    ion-ios7-bookmarks-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
              </ul>
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

export default IconIonic