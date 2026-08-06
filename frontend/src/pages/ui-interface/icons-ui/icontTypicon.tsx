import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import "../../../style/icon/typicons/typicons.css"

const IcontTypicon = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Typicon Icon
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
                Typicon Icon
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <div className="card-title">Typicon Icon</div>
          </div>
          <div className="card-body p-5">
            <div className="icons-items">
              <ul className="icons-list flex flex-wrap">
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-chart-pie-outline"
                    data-tooltip-target="typcn-chart-pie-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-chart-pie-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-chart-pie-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-chart-pie"
                    data-tooltip-target="typcn-chart-pie"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-chart-pie"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-chart-pie
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-chevron-left-outline"
                    data-tooltip-target="typcn-chevron-left-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-chevron-left-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-chevron-left-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-chevron-left"
                    data-tooltip-target="typcn-chevron-left"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-chevron-left"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-chevron-left
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-chevron-right-outline"
                    data-tooltip-target="typcn-chevron-right-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-chevron-right-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-chevron-right-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-chevron-right"
                    data-tooltip-target="typcn-chevron-right"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-chevron-right"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-chevron-right
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-clipboard"
                    data-tooltip-target="typcn-clipboard"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-clipboard"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-clipboard
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-cloud-storage"
                    data-tooltip-target="typcn-cloud-storage"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-cloud-storage"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-cloud-storage
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-cloud-storage-outline"
                    data-tooltip-target="typcn-cloud-storage-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-cloud-storage-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-cloud-storage-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-code-outline"
                    data-tooltip-target="typcn-code-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-code-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-code-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-code"
                    data-tooltip-target="typcn-code"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-code"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-code
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-coffee"
                    data-tooltip-target="typcn-coffee"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-coffee"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-coffee
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-cog-outline"
                    data-tooltip-target="typcn-cog-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-cog-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-cog-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-cog"
                    data-tooltip-target="typcn-cog"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-cog"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-cog
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-compass"
                    data-tooltip-target="typcn-compass"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-compass"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-compass
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-contacts"
                    data-tooltip-target="typcn-contacts"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-contacts"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-contacts
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-credit-card"
                    data-tooltip-target="typcn-credit-card"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-credit-card"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-credit-card
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-css3"
                    data-tooltip-target="typcn-css3"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-css3"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-css3
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-database"
                    data-tooltip-target="typcn-database"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-database"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-database
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-delete-outline"
                    data-tooltip-target="typcn-delete-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-delete-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-delete-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-delete"
                    data-tooltip-target="typcn-delete"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-delete"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-delete
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-device-desktop"
                    data-tooltip-target="typcn-device-desktop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-device-desktop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-device-desktop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-device-laptop"
                    data-tooltip-target="typcn-device-laptop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-device-laptop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-device-laptop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-device-phone"
                    data-tooltip-target="typcn-device-phone"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-device-phone"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-device-phone
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-device-tablet"
                    data-tooltip-target="typcn-device-tablet"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-device-tablet"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-device-tablet
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-directions"
                    data-tooltip-target="typcn-directions"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-directions"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-directions
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-divide-outline"
                    data-tooltip-target="typcn-divide-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-divide-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-divide-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-divide"
                    data-tooltip-target="typcn-divide"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-divide"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-divide
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-document-add"
                    data-tooltip-target="typcn-document-add"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-document-add"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-document-add
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-document-delete"
                    data-tooltip-target="typcn-document-delete"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-document-delete"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-document-delete
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-document-text"
                    data-tooltip-target="typcn-document-text"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-document-text"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-document-text
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-document"
                    data-tooltip-target="typcn-document"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-document"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-document
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-download-outline"
                    data-tooltip-target="typcn-download-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-download-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-download-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-download"
                    data-tooltip-target="typcn-download"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-download"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-download
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-dropbox"
                    data-tooltip-target="typcn-dropbox"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-dropbox"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-dropbox
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-edit"
                    data-tooltip-target="typcn-edit"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-edit"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-edit
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-eject-outline"
                    data-tooltip-target="typcn-eject-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-eject-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-eject-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-eject"
                    data-tooltip-target="typcn-eject"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-eject"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-eject
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-equals-outline"
                    data-tooltip-target="typcn-equals-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-equals-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-equals-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-equals"
                    data-tooltip-target="typcn-equals"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-equals"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-equals
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-export-outline"
                    data-tooltip-target="typcn-export-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-export-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-export-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-export"
                    data-tooltip-target="typcn-export"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-export"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-export
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-eye-outline"
                    data-tooltip-target="typcn-eye-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-eye-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-eye-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-eye"
                    data-tooltip-target="typcn-eye"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-eye"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-eye
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-feather"
                    data-tooltip-target="typcn-feather"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-feather"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-feather
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-film"
                    data-tooltip-target="typcn-film"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-film"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-film
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-filter"
                    data-tooltip-target="typcn-filter"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-filter"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-filter
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flag-outline"
                    data-tooltip-target="typcn-flag-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flag-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flag-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flag"
                    data-tooltip-target="typcn-flag"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flag"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flag
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flash-outline"
                    data-tooltip-target="typcn-flash-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flash-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flash-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flash"
                    data-tooltip-target="typcn-flash"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flash"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flash
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flow-children"
                    data-tooltip-target="typcn-flow-children"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flow-children"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flow-children
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flow-merge"
                    data-tooltip-target="typcn-flow-merge"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flow-merge"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flow-merge
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flow-parallel"
                    data-tooltip-target="typcn-flow-parallel"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flow-parallel"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flow-parallel
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-flow-switch"
                    data-tooltip-target="typcn-flow-switch"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-flow-switch"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-flow-switch
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-folder-add"
                    data-tooltip-target="typcn-folder-add"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-folder-add"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-folder-add
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-folder-delete"
                    data-tooltip-target="typcn-folder-delete"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-folder-delete"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-folder-delete
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-folder-open"
                    data-tooltip-target="typcn-folder-open"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-folder-open"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-folder-open
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-folder"
                    data-tooltip-target="typcn-folder"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-folder"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-folder
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-gift"
                    data-tooltip-target="typcn-gift"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-gift"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-gift
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-globe-outline"
                    data-tooltip-target="typcn-globe-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-globe-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-globe-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-globe"
                    data-tooltip-target="typcn-globe"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-globe"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-globe
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-group-outline"
                    data-tooltip-target="typcn-group-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-group-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-group-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-group"
                    data-tooltip-target="typcn-group"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-group"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-group
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-headphones"
                    data-tooltip-target="typcn-headphones"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-headphones"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-headphones
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-heart-full-outline"
                    data-tooltip-target="typcn-heart-full-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-heart-full-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-heart-full-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-heart-half-outline"
                    data-tooltip-target="typcn-heart-half-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-heart-half-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-heart-half-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-heart-outline"
                    data-tooltip-target="typcn-heart-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-heart-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-heart-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-heart"
                    data-tooltip-target="typcn-heart"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-heart"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-heart
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-home-outline"
                    data-tooltip-target="typcn-home-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-home-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-home-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-home"
                    data-tooltip-target="typcn-home"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-home"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-home
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-html5"
                    data-tooltip-target="typcn-html5"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-html5"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-html5
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-image-outline"
                    data-tooltip-target="typcn-image-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-image-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-image-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-image"
                    data-tooltip-target="typcn-image"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-image"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-image
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-infinity-outline"
                    data-tooltip-target="typcn-infinity-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-infinity-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-infinity-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-info-large-outline"
                    data-tooltip-target="typcn-info-large-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-info-large-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-info-large-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-info-large"
                    data-tooltip-target="typcn-info-large"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-info-large"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-info-large
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-info-outline"
                    data-tooltip-target="typcn-info-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-info-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-info-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-info"
                    data-tooltip-target="typcn-info"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-info"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-info
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-input-checked-outline"
                    data-tooltip-target="typcn-input-checked-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-input-checked-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-input-checked-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-input-checked"
                    data-tooltip-target="typcn-input-checked"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-input-checked"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-input-checked
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-key-outline"
                    data-tooltip-target="typcn-key-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-key-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-key-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-key"
                    data-tooltip-target="typcn-key"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-key"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-key
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-keyboard"
                    data-tooltip-target="typcn-keyboard"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-keyboard"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-keyboard
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-leaf"
                    data-tooltip-target="typcn-leaf"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-leaf"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-leaf
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-lightbulb"
                    data-tooltip-target="typcn-lightbulb"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-lightbulb"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-lightbulb
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-link-outline"
                    data-tooltip-target="typcn-link-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-link-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-link-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-link"
                    data-tooltip-target="typcn-link"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-link"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-link
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-location-arrow-outline"
                    data-tooltip-target="typcn-location-arrow-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-location-arrow-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-location-arrow-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-location-arrow"
                    data-tooltip-target="typcn-location-arrow"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-location-arrow"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-location-arrow
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-location-outline"
                    data-tooltip-target="typcn-location-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-location-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-location-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-location"
                    data-tooltip-target="typcn-location"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-location"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-location
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-lock-closed-outline"
                    data-tooltip-target="typcn-lock-closed-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-lock-closed-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-lock-closed-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-lock-closed"
                    data-tooltip-target="typcn-lock-closed"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-lock-closed"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-lock-closed
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-lock-open-outline"
                    data-tooltip-target="typcn-lock-open-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-lock-open-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-lock-open-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-lock-open"
                    data-tooltip-target="typcn-lock-open"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-lock-open"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-lock-open
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-mail"
                    data-tooltip-target="typcn-mail"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-mail"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-mail
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-map"
                    data-tooltip-target="typcn-map"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-map"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-map
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-eject-outline"
                    data-tooltip-target="typcn-media-eject-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-eject-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-eject-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-eject"
                    data-tooltip-target="typcn-media-eject"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-eject"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-eject
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-fast-forward-outline"
                    data-tooltip-target="typcn-media-fast-forward-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-fast-forward-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-fast-forward-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-fast-forward"
                    data-tooltip-target="typcn-media-fast-forward"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-fast-forward"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-fast-forward
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-pause-outline"
                    data-tooltip-target="typcn-media-pause-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-pause-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-pause-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-pause"
                    data-tooltip-target="typcn-media-pause"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-pause"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-pause
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-play-outline"
                    data-tooltip-target="typcn-media-play-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-play-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-play-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-play-reverse-outline"
                    data-tooltip-target="typcn-media-play-reverse-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-play-reverse-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-play-reverse-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-play-reverse"
                    data-tooltip-target="typcn-media-play-reverse"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-play-reverse"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-play-reverse
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-play"
                    data-tooltip-target="typcn-media-play"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-play"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-play
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-record-outline"
                    data-tooltip-target="typcn-media-record-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-record-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-record-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-record"
                    data-tooltip-target="typcn-media-record"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-record"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-record
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-rewind-outline"
                    data-tooltip-target="typcn-media-rewind-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-rewind-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-rewind-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-rewind"
                    data-tooltip-target="typcn-media-rewind"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-rewind"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-rewind
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-stop-outline"
                    data-tooltip-target="typcn-media-stop-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-stop-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-stop-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-media-stop"
                    data-tooltip-target="typcn-media-stop"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-media-stop"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-media-stop
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-message-typing"
                    data-tooltip-target="typcn-message-typing"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-message-typing"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-message-typing
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-message"
                    data-tooltip-target="typcn-message"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-message"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-message
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-messages"
                    data-tooltip-target="typcn-messages"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-messages"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-messages
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-microphone-outline"
                    data-tooltip-target="typcn-microphone-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-microphone-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-microphone-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-microphone"
                    data-tooltip-target="typcn-microphone"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-microphone"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-microphone
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-minus-outline"
                    data-tooltip-target="typcn-minus-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-minus-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-minus-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-minus"
                    data-tooltip-target="typcn-minus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-minus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-minus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-mortar-board"
                    data-tooltip-target="typcn-mortar-board"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-mortar-board"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-mortar-board
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-news"
                    data-tooltip-target="typcn-news"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-news"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-news
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-notes-outline"
                    data-tooltip-target="typcn-notes-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-notes-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-notes-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-notes"
                    data-tooltip-target="typcn-notes"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-notes"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-notes
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pen"
                    data-tooltip-target="typcn-pen"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pen"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pen
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pencil"
                    data-tooltip-target="typcn-pencil"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pencil"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pencil
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-phone-outline"
                    data-tooltip-target="typcn-phone-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-phone-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-phone-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-phone"
                    data-tooltip-target="typcn-phone"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-phone"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-phone
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pi-outline"
                    data-tooltip-target="typcn-pi-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pi-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pi-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pi"
                    data-tooltip-target="typcn-pi"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pi"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pi
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pin-outline"
                    data-tooltip-target="typcn-pin-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pin-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pin-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pin"
                    data-tooltip-target="typcn-pin"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pin"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pin
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-pipette"
                    data-tooltip-target="typcn-pipette"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-pipette"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-pipette
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-plane-outline"
                    data-tooltip-target="typcn-plane-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-plane-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-plane-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-plane"
                    data-tooltip-target="typcn-plane"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-plane"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-plane
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-plug"
                    data-tooltip-target="typcn-plug"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-plug"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-plug
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-plus-outline"
                    data-tooltip-target="typcn-plus-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-plus-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-plus-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-plus"
                    data-tooltip-target="typcn-plus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-plus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-plus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-point-of-interest-outline"
                    data-tooltip-target="typcn-point-of-interest-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-point-of-interest-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-point-of-interest-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-point-of-interest"
                    data-tooltip-target="typcn-point-of-interest"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-point-of-interest"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-point-of-interest
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-power-outline"
                    data-tooltip-target="typcn-power-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-power-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-power-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-power"
                    data-tooltip-target="typcn-power"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-power"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-power
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-printer"
                    data-tooltip-target="typcn-printer"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-printer"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-printer
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-puzzle-outline"
                    data-tooltip-target="typcn-puzzle-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-puzzle-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-puzzle-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-puzzle"
                    data-tooltip-target="typcn-puzzle"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-puzzle"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-puzzle
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-radar-outline"
                    data-tooltip-target="typcn-radar-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-radar-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-radar-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-radar"
                    data-tooltip-target="typcn-radar"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-radar"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-radar
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-refresh-outline"
                    data-tooltip-target="typcn-refresh-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-refresh-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-refresh-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-refresh"
                    data-tooltip-target="typcn-refresh"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-refresh"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-refresh
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-rss-outline"
                    data-tooltip-target="typcn-rss-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-rss-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-rss-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-rss"
                    data-tooltip-target="typcn-rss"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-rss"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-rss
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-scissors-outline"
                    data-tooltip-target="typcn-scissors-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-scissors-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-scissors-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-scissors"
                    data-tooltip-target="typcn-scissors"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-scissors"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-scissors
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-shopping-bag"
                    data-tooltip-target="typcn-shopping-bag"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-shopping-bag"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-shopping-bag
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-shopping-cart"
                    data-tooltip-target="typcn-shopping-cart"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-shopping-cart"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-shopping-cart
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-at-circular"
                    data-tooltip-target="typcn-social-at-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-at-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-at-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-dribbble-circular"
                    data-tooltip-target="typcn-social-dribbble-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-dribbble-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-dribbble-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-dribbble"
                    data-tooltip-target="typcn-social-dribbble"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-dribbble"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-dribbble
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-facebook-circular"
                    data-tooltip-target="typcn-social-facebook-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-facebook-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-facebook-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-facebook"
                    data-tooltip-target="typcn-social-facebook"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-facebook"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-facebook
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-flickr-circular"
                    data-tooltip-target="typcn-social-flickr-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-flickr-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-flickr-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-flickr"
                    data-tooltip-target="typcn-social-flickr"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-flickr"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-flickr
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-github-circular"
                    data-tooltip-target="typcn-social-github-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-github-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-github-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-github"
                    data-tooltip-target="typcn-social-github"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-github"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-github
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-google-plus-circular"
                    data-tooltip-target="typcn-social-google-plus-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-google-plus-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-google-plus-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-google-plus"
                    data-tooltip-target="typcn-social-google-plus"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-google-plus"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-google-plus
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-instagram-circular"
                    data-tooltip-target="typcn-social-instagram-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-instagram-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-instagram-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-instagram"
                    data-tooltip-target="typcn-social-instagram"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-instagram"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-instagram
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-last-fm-circular"
                    data-tooltip-target="typcn-social-last-fm-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-last-fm-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-last-fm-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-last-fm"
                    data-tooltip-target="typcn-social-last-fm"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-last-fm"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-last-fm
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-linkedin-circular"
                    data-tooltip-target="typcn-social-linkedin-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-linkedin-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-linkedin-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-linkedin"
                    data-tooltip-target="typcn-social-linkedin"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-linkedin"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-linkedin
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-pinterest-circular"
                    data-tooltip-target="typcn-social-pinterest-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-pinterest-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-pinterest-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-pinterest"
                    data-tooltip-target="typcn-social-pinterest"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-pinterest"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-pinterest
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-skype-outline"
                    data-tooltip-target="typcn-social-skype-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-skype-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-skype-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-skype"
                    data-tooltip-target="typcn-social-skype"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-skype"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-skype
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-tumbler-circular"
                    data-tooltip-target="typcn-social-tumbler-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-tumbler-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-tumbler-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-tumbler"
                    data-tooltip-target="typcn-social-tumbler"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-tumbler"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-tumbler
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-twitter-circular"
                    data-tooltip-target="typcn-social-twitter-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-twitter-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-twitter-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-twitter"
                    data-tooltip-target="typcn-social-twitter"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-twitter"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-twitter
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-vimeo-circular"
                    data-tooltip-target="typcn-social-vimeo-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-vimeo-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-vimeo-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-vimeo"
                    data-tooltip-target="typcn-social-vimeo"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-vimeo"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-vimeo
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-youtube-circular"
                    data-tooltip-target="typcn-social-youtube-circular"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-youtube-circular"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-youtube-circular
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-social-youtube"
                    data-tooltip-target="typcn-social-youtube"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-social-youtube"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-social-youtube
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-sort-alphabetically-outline"
                    data-tooltip-target="typcn-sort-alphabetically-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-sort-alphabetically-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-sort-alphabetically-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-sort-alphabetically"
                    data-tooltip-target="typcn-sort-alphabetically"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-sort-alphabetically"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-sort-alphabetically
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-sort-numerically-outline"
                    data-tooltip-target="typcn-sort-numerically-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-sort-numerically-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-sort-numerically-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-sort-numerically"
                    data-tooltip-target="typcn-sort-numerically"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-sort-numerically"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-sort-numerically
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-spanner-outline"
                    data-tooltip-target="typcn-spanner-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-spanner-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-spanner-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-spanner"
                    data-tooltip-target="typcn-spanner"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-spanner"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-spanner
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-spiral"
                    data-tooltip-target="typcn-spiral"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-spiral"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-spiral
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-star-full-outline"
                    data-tooltip-target="typcn-star-full-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-star-full-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-star-full-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-star-half-outline"
                    data-tooltip-target="typcn-star-half-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-star-half-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-star-half-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-star-half"
                    data-tooltip-target="typcn-star-half"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-star-half"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-star-half
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-star-outline"
                    data-tooltip-target="typcn-star-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-star-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-star-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-star"
                    data-tooltip-target="typcn-star"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-star"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-star
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-starburst-outline"
                    data-tooltip-target="typcn-starburst-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-starburst-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-starburst-outline
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-starburst"
                    data-tooltip-target="typcn-starburst"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-starburst"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-starburst
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-stopwatch"
                    data-tooltip-target="typcn-stopwatch"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-stopwatch"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-stopwatch
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-support"
                    data-tooltip-target="typcn-support"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-support"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-support
                    <div className="tooltip-arrow" data-popper-arrow="" />
                  </div>
                </li>
                <li className="icons-list-item">
                  <i
                    className="typcn typcn-tabs-outline"
                    data-tooltip-target="typcn-tabs-outline"
                    data-tooltip-placement="top"
                  />
                  <div
                    id="typcn-tabs-outline"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    typcn typcn-tabs-outline
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

export default IcontTypicon