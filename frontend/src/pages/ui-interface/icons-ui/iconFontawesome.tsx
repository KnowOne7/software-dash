import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"

const IconFontawesome = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Fontawesome Icon
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
                Fontawesome Icon
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="grid">
          <div>
            <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
              <div className="card-header py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Fontawesome Icon</h4>
              </div>
              <div className="card-body p-5">
                <div className="icons-items">
                  <ul className="icons-list flex flex-wrap">
                    <li>
                      <i
                        className="fa fa-address-book"
                        data-tooltip-target="fa-address-book"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-address-book"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-address-book
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-address-card"
                        data-tooltip-target="fa-address-card"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-address-card"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-address-card
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-align-center"
                        data-tooltip-target="fa-align-center"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-align-center"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-align-center
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-align-justify"
                        data-tooltip-target="fa-align-justify"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-align-justify"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-align-justify
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-align-left"
                        data-tooltip-target="fa-align-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-align-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-align-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-align-right"
                        data-tooltip-target="fa-align-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-align-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-align-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-ambulance"
                        data-tooltip-target="fa-ambulance"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-ambulance"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-ambulance
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-american-sign-language-interpreting"
                        data-tooltip-target="fa-american-sign-language-interpreting"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-american-sign-language-interpreting"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-american-sign-language-interpreting
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-anchor"
                        data-tooltip-target="fa-anchor"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-anchor"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-anchor
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-down"
                        data-tooltip-target="fa-angle-double-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-double-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-double-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-left"
                        data-tooltip-target="fa-angle-double-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-double-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-double-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-right"
                        data-tooltip-target="fa-angle-double-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-double-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-double-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-double-up"
                        data-tooltip-target="fa-angle-double-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-double-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-double-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-down"
                        data-tooltip-target="fa-angle-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-left"
                        data-tooltip-target="fa-angle-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-right"
                        data-tooltip-target="fa-angle-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-angle-up"
                        data-tooltip-target="fa-angle-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-angle-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-angle-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fab fa-apple"
                        data-tooltip-target="fa-apple"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-apple"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-apple
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-archive"
                        data-tooltip-target="fa-archive"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-archive"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-archive
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fas fa-chart-area"
                        data-tooltip-target="fa-chart-area"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chart-area"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fas fa-chart-area
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-circle-down"
                        data-tooltip-target="fa-arrow-circle-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-circle-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-circle-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-circle-left"
                        data-tooltip-target="fa-arrow-circle-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-circle-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-circle-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-circle-right"
                        data-tooltip-target="fa-arrow-circle-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-circle-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-circle-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-circle-up"
                        data-tooltip-target="fa-arrow-circle-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-circle-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-circle-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-down"
                        data-tooltip-target="fa-arrow-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-left"
                        data-tooltip-target="fa-arrow-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-right"
                        data-tooltip-target="fa-arrow-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrow-up"
                        data-tooltip-target="fa-arrow-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrow-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrow-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-arrows-alt"
                        data-tooltip-target="fa-arrows-alt"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-arrows-alt"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-arrows-alt
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-assistive-listening-systems"
                        data-tooltip-target="fa-assistive-listening-systems"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-assistive-listening-systems"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-assistive-listening-systems
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-asterisk"
                        data-tooltip-target="fa-asterisk"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-asterisk"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-asterisk
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-at"
                        data-tooltip-target="fa-at"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-at"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-at
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-audio-description"
                        data-tooltip-target="fa-audio-description"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-audio-description"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-audio-description
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-backward"
                        data-tooltip-target="fa-backward"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-backward"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-backward
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-balance-scale"
                        data-tooltip-target="fa-balance-scale"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-balance-scale"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-balance-scale
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-ban"
                        data-tooltip-target="fa-ban"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-ban"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-ban
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-barcode"
                        data-tooltip-target="fa-barcode"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-barcode"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-barcode
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bars"
                        data-tooltip-target="fa-bars"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bars"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bars
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bath"
                        data-tooltip-target="fa-bath"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bath"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bath
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-battery-empty"
                        data-tooltip-target="fa-battery-empty"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-battery-empty"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-battery-empty
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-battery-full"
                        data-tooltip-target="fa-battery-full"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-battery-full"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-battery-full
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-battery-half"
                        data-tooltip-target="fa-battery-half"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-battery-half"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-battery-half
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-battery-quarter"
                        data-tooltip-target="fa-battery-quarter"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-battery-quarter"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-acity-0 tooltip"
                      >
                        fa fa-battery-quarter
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-battery-three-quarters"
                        data-tooltip-target="fa-battery-three-quarters"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-battery-three-quarters"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-battery-three-quarters
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bed"
                        data-tooltip-target="fa-bed"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bed"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bed
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-beer"
                        data-tooltip-target="fa-beer"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-beer"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-beer
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bell"
                        data-tooltip-target="fa-bell"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bell"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bell
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bell-slash"
                        data-tooltip-target="fa-bell-slash"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bell-slash"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bell-slash
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bicycle"
                        data-tooltip-target="fa-bicycle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bicycle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bicycle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-binoculars"
                        data-tooltip-target="fa-binoculars"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-binoculars"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-binoculars
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-birthday-cake"
                        data-tooltip-target="fa-birthday-cake"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-birthday-cake"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-birthday-cake
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-blind"
                        data-tooltip-target="fa-blind"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-blind"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-blind
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bold"
                        data-tooltip-target="fa-bold"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bold"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bold
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bolt"
                        data-tooltip-target="fa-bolt"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bolt"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bolt
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bomb"
                        data-tooltip-target="fa-bomb"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bomb"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bomb
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-book"
                        data-tooltip-target="fa-book"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-book"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-book
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bookmark"
                        data-tooltip-target="fa-bookmark"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bookmark"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bookmark
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-braille"
                        data-tooltip-target="fa-braille"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-braille"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-braille
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-briefcase"
                        data-tooltip-target="fa-briefcase"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-briefcase"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-briefcase
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bug"
                        data-tooltip-target="fa-bug"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bug"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bug
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-building"
                        data-tooltip-target="fa-building"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-building"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-building
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bullhorn"
                        data-tooltip-target="fa-bullhorn"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bullhorn"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bullhorn
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bullseye"
                        data-tooltip-target="fa-bullseye"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bullseye"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bullseye
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-bus"
                        data-tooltip-target="fa-bus"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-bus"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-bus
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-calculator"
                        data-tooltip-target="fa-calculator"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-calculator"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-calculator
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-calendar"
                        data-tooltip-target="fa-calendar"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-calendar"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-calendar
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-camera"
                        data-tooltip-target="fa-camera"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-camera"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-camera
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-camera-retro"
                        data-tooltip-target="fa-camera-retro"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-camera-retro"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-camera-retro
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-car"
                        data-tooltip-target="fa-car"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-car"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-car
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-caret-down"
                        data-tooltip-target="fa-caret-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-caret-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-caret-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-caret-left"
                        data-tooltip-target="fa-caret-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-caret-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-caret-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-caret-right"
                        data-tooltip-target="fa-caret-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-caret-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-caret-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-cart-arrow-down"
                        data-tooltip-target="fa-cart-arrow-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-cart-arrow-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-cart-arrow-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-cart-plus"
                        data-tooltip-target="fa-cart-plus"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-cart-plus"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-cart-plus
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-certificate"
                        data-tooltip-target="fa-certificate"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-certificate"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-certificate
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-check"
                        data-tooltip-target="fa-check"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-check"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-check
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-check-circle"
                        data-tooltip-target="fa-check-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-check-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-check-circle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-circle-left"
                        data-tooltip-target="fa-chevron-circle-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-circle-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-circle-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-circle-right"
                        data-tooltip-target="fa-chevron-circle-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-circle-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-circle-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-circle-up"
                        data-tooltip-target="fa-chevron-circle-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-circle-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-circle-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-down"
                        data-tooltip-target="fa-chevron-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-left"
                        data-tooltip-target="fa-chevron-left"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-left"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-left
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-right"
                        data-tooltip-target="fa-chevron-right"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-right"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-right
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-chevron-up"
                        data-tooltip-target="fa-chevron-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-chevron-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-chevron-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-child"
                        data-tooltip-target="fa-child"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-child"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-child
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-circle"
                        data-tooltip-target="fa-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-circle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-clipboard"
                        data-tooltip-target="fa-clipboard"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-clipboard"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-clipboard
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-clone"
                        data-tooltip-target="fa-clone"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-clone"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-clone
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-cloud"
                        data-tooltip-target="fa-cloud"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-cloud"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-cloud
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-code"
                        data-tooltip-target="fa-code"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-code"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-code
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-coffee"
                        data-tooltip-target="fa-coffee"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-coffee"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-coffee
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-cog"
                        data-tooltip-target="fa-cog"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-cog"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-cog
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-cogs"
                        data-tooltip-target="fa-cogs"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-cogs"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-cogs
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-columns"
                        data-tooltip-target="fa-columns"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-columns"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-columns
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-comment"
                        data-tooltip-target="fa-comment"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-comment"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-comment
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-compress"
                        data-tooltip-target="fa-compress"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-compress"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-compress
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-copyright"
                        data-tooltip-target="fa-copyright"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-copyright"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-credit-card"
                        data-tooltip-target="fa-credit-card"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-credit-card"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-credit-card
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-desktop"
                        data-tooltip-target="fa-desktop"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-desktop"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-desktop
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-edit"
                        data-tooltip-target="fa-edit"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-edit"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-edit
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-eject"
                        data-tooltip-target="fa-eject"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-eject"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-eject
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-ellipsis-h"
                        data-tooltip-target="fa-ellipsis-h"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-ellipsis-h"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-ellipsis-h
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-ellipsis-v"
                        data-tooltip-target="fa-ellipsis-v"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-ellipsis-v"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-ellipsis-v
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope"
                        data-tooltip-target="fa-envelope"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-envelope"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-envelope
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope-open"
                        data-tooltip-target="fa-envelope-open"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-envelope-open"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-envelope-open
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-envelope-square"
                        data-tooltip-target="fa-envelope-square"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-envelope-square"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-envelope-square
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-eraser"
                        data-tooltip-target="fa-eraser"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-eraser"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-eraser
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-exclamation"
                        data-tooltip-target="fa-exclamation"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-exclamation"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-exclamation
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-exclamation-circle"
                        data-tooltip-target="fa-exclamation-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-exclamation-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-exclamation-circle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-exclamation-triangle"
                        data-tooltip-target="fa-exclamation-triangle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-exclamation-triangle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-expand"
                        data-tooltip-target="fa-expand"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-expand"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-expand
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-eye"
                        data-tooltip-target="fa-eye"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-eye"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-eye
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-eye-slash"
                        data-tooltip-target="fa-eye-slash"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-eye-slash"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-eye-slash
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-fast-backward"
                        data-tooltip-target="fa-fast-backward"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-fast-backward"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-fast-backward
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-fast-forward"
                        data-tooltip-target="fa-fast-forward"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-fast-forward"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-fast-forward
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-fax"
                        data-tooltip-target="fa-fax"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-fax"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-fax
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-female"
                        data-tooltip-target="fa-female"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-female"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-female
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-fighter-jet"
                        data-tooltip-target="fa-fighter-jet"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-fighter-jet"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-fighter-jet
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-file"
                        data-tooltip-target="fa-file"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-file"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-file
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-fire"
                        data-tooltip-target="fa-fire"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-fire"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-fire
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-fire-extinguisher"
                        data-tooltip-target="fa-fire-extinguisher"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-fire-extinguisher"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-fire-extinguisher
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-flag"
                        data-tooltip-target="fa-flag"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-flag"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-flag
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-flag-checkered"
                        data-tooltip-target="fa-flag-checkered"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-flag-checkered"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-flag-checkered
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-road"
                        data-tooltip-target="fa-road"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-road"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-road
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-rocket"
                        data-tooltip-target="fa-rocket"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-rocket"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-rocket
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-save"
                        data-tooltip-target="fa-save"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-save"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-save
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-search"
                        data-tooltip-target="fa-search"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-search"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-search
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-search-minus"
                        data-tooltip-target="fa-search-minus"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-search-minus"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-search-minus
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-search-plus"
                        data-tooltip-target="fa-search-plus"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-search-plus"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-search-plus
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-server"
                        data-tooltip-target="fa-server"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-server"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-server
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-share"
                        data-tooltip-target="fa-share"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-share"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-share
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-share-alt"
                        data-tooltip-target="fa-share-alt"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-share-alt"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-share-alt
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-share-alt-square"
                        data-tooltip-target="fa-share-alt-square"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-share-alt-square"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-share-alt-square
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-share-square"
                        data-tooltip-target="fa-share-square"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-share-square"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-share-square
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-ship"
                        data-tooltip-target="fa-ship"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-ship"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-ship
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-shopping-bag"
                        data-tooltip-target="fa-shopping-bag"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-shopping-bag"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-shopping-bag
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-shopping-basket"
                        data-tooltip-target="fa-shopping-basket"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-shopping-basket"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-shopping-basket
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-shopping-cart"
                        data-tooltip-target="fa-shopping-cart"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-shopping-cart"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-shopping-cart
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-shower"
                        data-tooltip-target="fa-shower"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-shower"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-shower
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-sign-language"
                        data-tooltip-target="fa-sign-language"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-sign-language"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-sign-language
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-signal"
                        data-tooltip-target="fa-signal"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-signal"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-signal
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-sitemap"
                        data-tooltip-target="fa-sitemap"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-sitemap"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-sitemap
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-sort"
                        data-tooltip-target="fa-sort"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-sort"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-sort
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-sort-down"
                        data-tooltip-target="fa-sort-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-sort-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-sort-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-square"
                        data-tooltip-target="fa-square"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-square"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-square
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-star"
                        data-tooltip-target="fa-star"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-star"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-star
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-star-half"
                        data-tooltip-target="fa-star-half"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-star-half"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-star-half
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-step-backward"
                        data-tooltip-target="fa-step-backward"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-step-backward"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-step-backward
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-step-forward"
                        data-tooltip-target="fa-step-forward"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-step-forward"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-step-forward
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-stethoscope"
                        data-tooltip-target="fa-stethoscope"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-stethoscope"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-stethoscope
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-sticky-note"
                        data-tooltip-target="fa-sticky-note"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-sticky-note"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-sticky-note
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-stop"
                        data-tooltip-target="fa-stop"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-stop"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-stop
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-stop-circle"
                        data-tooltip-target="fa-stop-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-stop-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-stop-circle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-street-view"
                        data-tooltip-target="fa-street-view"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-street-view"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-street-view
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-subscript"
                        data-tooltip-target="fa-subscript"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-subscript"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-subscript
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-suitcase"
                        data-tooltip-target="fa-suitcase"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-suitcase"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-suitcase
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-superscript"
                        data-tooltip-target="fa-superscript"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-superscript"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-superscript
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-table"
                        data-tooltip-target="fa-table"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-table"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-table
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tag"
                        data-tooltip-target="fa-tag"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tag"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tag
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tags"
                        data-tooltip-target="fa-tags"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tags"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tags
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tasks"
                        data-tooltip-target="fa-tasks"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tasks"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tasks
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-taxi"
                        data-tooltip-target="fa-taxi"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-taxi"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-taxi
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-terminal"
                        data-tooltip-target="fa-terminal"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-terminal"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-terminal
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-text-height"
                        data-tooltip-target="fa-text-height"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-text-height"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-text-height
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-text-width"
                        data-tooltip-target="fa-text-width"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-text-width"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-text-width
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-th"
                        data-tooltip-target="fa-th"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-th"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-th
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-th-large"
                        data-tooltip-target="fa-th-large"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-th-large"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-th-large
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-th-list"
                        data-tooltip-target="fa-th-list"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-th-list"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-th-list
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thermometer"
                        data-tooltip-target="fa-thermometer"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thermometer"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thermometer
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thermometer-empty"
                        data-tooltip-target="fa-thermometer-empty"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thermometer-empty"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thermometer-empty
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thermometer-full"
                        data-tooltip-target="fa-thermometer-full"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thermometer-full"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thermometer-full
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thermometer-half"
                        data-tooltip-target="fa-thermometer-half"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thermometer-half"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thermometer-half
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thermometer-quarter"
                        data-tooltip-target="fa-thermometer-quarter"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thermometer-quarter"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thermometer-quarter
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thermometer-three-quarters"
                        data-tooltip-target="fa-thermometer-three-quarters"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thermometer-three-quarters"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thermometer-three-quarters
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thumbs-down"
                        data-tooltip-target="fa-thumbs-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thumbs-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thumbs-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-thumbs-up"
                        data-tooltip-target="fa-thumbs-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-thumbs-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-thumbs-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-times"
                        data-tooltip-target="fa-times"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-times"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-times
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-times-circle"
                        data-tooltip-target="fa-times-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-times-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-times-circle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tint"
                        data-tooltip-target="fa-tint"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tint"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tint
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-toggle-off"
                        data-tooltip-target="fa-toggle-off"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-toggle-off"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-toggle-off
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-toggle-on"
                        data-tooltip-target="fa-toggle-on"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-toggle-on"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-toggle-on
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-trademark"
                        data-tooltip-target="fa-trademark"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-trademark"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-trademark
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-train"
                        data-tooltip-target="fa-train"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-train"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-train
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-transgender"
                        data-tooltip-target="fa-transgender"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-transgender"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-transgender
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-transgender-alt"
                        data-tooltip-target="fa-transgender-alt"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-transgender-alt"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-transgender-alt
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-trash"
                        data-tooltip-target="fa-trash"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-trash"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-trash
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tree"
                        data-tooltip-target="fa-tree"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tree"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tree
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-trophy"
                        data-tooltip-target="fa-trophy"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-trophy"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-trophy
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tty"
                        data-tooltip-target="fa-tty"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tty"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tty
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-tv"
                        data-tooltip-target="fa-tv"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-tv"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-tv
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-umbrella"
                        data-tooltip-target="fa-umbrella"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-umbrella"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-umbrella
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-underline"
                        data-tooltip-target="fa-underline"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-underline"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-underline
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-undo"
                        data-tooltip-target="fa-undo"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-undo"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-undo
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-universal-access"
                        data-tooltip-target="fa-universal-access"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-universal-access"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-universal-access
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-university"
                        data-tooltip-target="fa-university"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-university"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-university
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-unlink"
                        data-tooltip-target="fa-unlink"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-unlink"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-unlink
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-unlock"
                        data-tooltip-target="fa-unlock"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-unlock"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-unlock
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-unlock-alt"
                        data-tooltip-target="fa-unlock-alt"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-unlock-alt"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-unlock-alt
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-upload"
                        data-tooltip-target="fa-upload"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-upload"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-upload
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-user-circle"
                        data-tooltip-target="fa-user-circle"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-user-circle"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-user-circle
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-user-md"
                        data-tooltip-target="fa-user-md"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-user-md"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-user-md
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-user-plus"
                        data-tooltip-target="fa-user-plus"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-user-plus"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-user-plus
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-user-secret"
                        data-tooltip-target="fa-user-secret"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-user-secret"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-user-secret
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-user-times"
                        data-tooltip-target="fa-user-times"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-user-times"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-user-times
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-users"
                        data-tooltip-target="fa-users"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-users"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-users
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-venus"
                        data-tooltip-target="fa-venus"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-venus"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-venus
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-venus-double"
                        data-tooltip-target="fa-venus-double"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-venus-double"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-venus-double
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-venus-mars"
                        data-tooltip-target="fa-venus-mars"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-venus-mars"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-venus-mars
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-volume-down"
                        data-tooltip-target="fa-volume-down"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-volume-down"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-volume-down
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-volume-off"
                        data-tooltip-target="fa-volume-off"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-volume-off"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-volume-off
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-volume-up"
                        data-tooltip-target="fa-volume-up"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-volume-up"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-volume-up
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-wheelchair"
                        data-tooltip-target="fa-wheelchair"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-wheelchair"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-wheelchair
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-wifi"
                        data-tooltip-target="fa-wifi"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-wifi"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-wifi
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-window-close"
                        data-tooltip-target="fa-window-close"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-window-close"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-window-close
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-window-maximize"
                        data-tooltip-target="fa-window-maximize"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-window-maximize"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-window-maximize
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-window-minimize"
                        data-tooltip-target="fa-window-minimize"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-window-minimize"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-window-minimize
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-window-restore"
                        data-tooltip-target="fa-window-restore"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-window-restore"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-window-restore
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                    <li>
                      <i
                        className="fa fa-wrench"
                        data-tooltip-target="fa-wrench"
                        data-tooltip-placement="top"
                      />
                      <div
                        id="fa-wrench"
                        role="tooltip"
                        className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                      >
                        fa fa-wrench
                        <div className="tooltip-arrow" data-popper-arrow="" />
                      </div>
                    </li>
                  </ul>
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

export default IconFontawesome