import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"


const UiTooltip = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Tooltips</h4>
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
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Tooltips
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 gap-x-6">
        {/* Tooltip */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Tooltips</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button
                data-tooltip-target="tooltip-primary"
                type="button"
                className="btn btn-primary"
              >
                Primary tooltip
              </button>
              <div
                id="tooltip-primary"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-primary rounded-lg shadow-sm opacity-0 tooltip"
              >
                Primary Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-secondary"
                type="button"
                className="btn btn-secondary"
              >
                Secondary tooltip
              </button>
              <div
                id="tooltip-secondary"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-secondary rounded-lg shadow-sm opacity-0 tooltip"
              >
                Secondary Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-warning"
                type="button"
                className="btn btn-warning"
              >
                Warning tooltip
              </button>
              <div
                id="tooltip-warning"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-warning rounded-lg shadow-sm opacity-0 tooltip"
              >
                Warning Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-info"
                type="button"
                className="btn btn-info"
              >
                Info tooltip
              </button>
              <div
                id="tooltip-info"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-info rounded-lg shadow-sm opacity-0 tooltip"
              >
                Info Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-success"
                type="button"
                className="btn btn-success"
              >
                Success tooltip
              </button>
              <div
                id="tooltip-success"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-success rounded-lg shadow-sm opacity-0 tooltip"
              >
                Success Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-danger"
                type="button"
                className="btn btn-danger"
              >
                Danger tooltip
              </button>
              <div
                id="tooltip-danger"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-danger rounded-lg shadow-sm opacity-0 tooltip"
              >
                Danger Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-light"
                type="button"
                className="btn btn-light"
              >
                Light tooltip
              </button>
              <div
                id="tooltip-light"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-gray-900 transition-opacity duration-300 bg-light rounded-lg shadow-sm opacity-0 tooltip"
              >
                Light Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-dark"
                type="button"
                className="btn btn-dark"
              >
                Light Dark
              </button>
              <div
                id="tooltip-dark"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-dark rounded-lg shadow-sm opacity-0 tooltip"
              >
                Dark Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
        </div>
        {/* /Tooltip */}
        {/* Tooltip */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Html Element</h5>
          </div>
          <div className="card-body p-5">
            <button
              data-tooltip-target="tooltip-primary5"
              type="button"
              className="btn btn-primary"
            >
              Hover me
            </button>
            <div
              id="tooltip-primary5"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
            >
              Popover Title
              <div className="tooltip-arrow" data-popper-arrow="" />
            </div>
          </div>
        </div>
        {/* /Tooltip */}
        {/* Tooltip */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Direction Tooltip</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button
                data-tooltip-target="tooltip-top"
                data-tooltip-placement="top"
                type="button"
                className="btn btn-primary"
              >
                Hover me
              </button>
              <div
                id="tooltip-top"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Tooltip on top
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-right"
                data-tooltip-placement="right"
                type="button"
                className="btn btn-primary"
              >
                Hover me
              </button>
              <div
                id="tooltip-right"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Tooltip on right
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-bottom"
                data-tooltip-placement="bottom"
                type="button"
                className="btn btn-primary"
              >
                Hover me
              </button>
              <div
                id="tooltip-bottom"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Tooltip on bottom
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-left"
                data-tooltip-placement="left"
                type="button"
                className="btn btn-primary"
              >
                Hover me
              </button>
              <div
                id="tooltip-left"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Tooltip on left
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
        </div>
        {/* /Tooltip */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6">
        {/* Tooltip */}
        <div className="md:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Html Element</h5>
            </div>
            <div className="card-body p-5">
              <button
                data-tooltip-target="tooltip-hover"
                type="button"
                className="btn btn-primary"
              >
                {" "}
                Tooltip with HTML
              </button>
              <div
                id="tooltip-hover"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                <em>Tooltip</em> <u>with</u> <b>HTML</b>
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <button
                data-tooltip-target="tooltip-click"
                data-tooltip-trigger="click"
                type="button"
                className="btn btn-primary"
              >
                Click Me
              </button>
              <div
                id="tooltip-click"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                <em>Tooltip</em> <u>with</u> <b>HTML</b>
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
        </div>
        {/* /Tooltip */}
        {/* Tooltip */}
        <div className="md:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Disabled Elements</h5>
            </div>
            <div className="card-body p-5">
              <span className="inline-block" data-tooltip-target="tooltip-disable">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled
                >
                  Disabled button
                </button>
              </span>
              <div
                id="tooltip-disable"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
              >
                Disabled tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
        </div>
        {/* /Tooltip */}
        {/* Tooltip */}
        <div className="md:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Tooltips on Links</h5>
            </div>
            <div className="card-body p-5">
              <p className="text-muted mb-0">
                Hover on the link to view the{" "}
                <Link
                  to="#"
                  data-tooltip-target="tooltip-link"
                  className="text-primary"
                >
                  Tooltip
                </Link>
              </p>
              <div
                id="tooltip-link"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-primary rounded-lg shadow-sm opacity-0 tooltip"
              >
                Link Tooltip
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
        </div>
        {/* /Tooltip */}
        {/* Tooltip */}
        <div className="md:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Tooltip For Images</h5>
            </div>
            <div className="card-body p-5">
              <div className="flex items-end flex-wrap gap-2">
                <div className="relative" data-tooltip-target="tooltip-image1">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-01.jpg"
                    className="size-8 rounded-full"
                    alt="avatar-01"
                  />
                  <span className="bottom-0 end-0 absolute  size-3 bg-success border-2 border-white rounded-full" />
                </div>
                <div
                  id="tooltip-image1"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                >
                  Marina Kai
                  <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                <div className="relative" data-tooltip-target="tooltip-image2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="size-[45px] rounded-full"
                    alt="avatar-02"
                  />
                  <span className="bottom-0 end-0 absolute  size-3.5 bg-success border-2 border-white rounded-full" />
                </div>
                <div
                  id="tooltip-image2"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                >
                  Alex Carey
                  <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
                <div className="relative" data-tooltip-target="tooltip-image3">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-03.jpg"
                    className="size-[58px] rounded-full"
                    alt="avatar-03"
                  />
                  <span className="bottom-0 end-0 absolute  size-4 bg-success border-2 border-white rounded-full" />
                </div>
                <div
                  id="tooltip-image3"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                >
                  Maria John
                  <div className="tooltip-arrow" data-popper-arrow="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Tooltip */}
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

export default UiTooltip