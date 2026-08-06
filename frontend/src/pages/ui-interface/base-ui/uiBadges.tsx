import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"

const UiBadges = () => {
  return (
<>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Badges</h4>
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
              Badges
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-primary text-white">
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white">
                Secondary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-success text-white">
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-warning text-white">
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-info text-white">
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-light text-dark">
                Light
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-dark text-white">
                Dark
              </span>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-primary text-white">
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-secondary text-white">
                Secondary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-success text-white">
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-warning text-white">
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-info text-white">
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-light text-dark">
                Light
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-dark text-white">
                Dark
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Solid Colored Alerts */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Outline Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-primary text-primary">
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-secondary text-secondary">
                Secondary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-success text-success">
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-warning text-warning">
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-info text-info">
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-light text-dark">
                Light
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-white border border-dark text-dark">
                Dark
              </span>
            </div>
          </div>
        </div>
        {/* Badge Size */}
        {/* Badge Size */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Outline Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-primary text-primary">
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-secondary text-secondary">
                Secondary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-success text-success">
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-warning text-warning">
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-info text-info">
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-light text-dark">
                Light
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-white border border-dark text-dark">
                Dark
              </span>
            </div>
          </div>
        </div>
        {/* Badge Size */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Badge Size */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Outline Soft Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-primary-100 text-primary">
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary-100 text-secondary">
                Secondary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-success-100 text-success">
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-warning-100 text-warning">
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-info-100 text-info">
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-light-100 text-default">
                Light
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-dark/30 text-white">
                Dark
              </span>
            </div>
          </div>
        </div>
        {/* Badge Size */}
        {/* Badge Size */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Soft Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-primary-100 text-primary">
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-secondary-100 text-secondary">
                Secondary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-success-100 text-success">
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-warning-100 text-warning">
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-info-100 text-info">
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-light-100 text-default">
                Light
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs leading-none font-semibold bg-dark/30 text-white">
                Dark
              </span>
            </div>
          </div>
        </div>
        {/* Badge Size */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Badge Size */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Badge Sizes</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-center flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold bg-primary-100 text-primary">
                Default
              </span>
              <span className="inline-flex items-center py-0 px-1 rounded text-[10px] leading-[18px] font-medium bg-secondary-100 text-secondary">
                XS
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-[11px] leading-[11px] font-semibold bg-success text-white">
                SM
              </span>
              <span className="inline-flex items-center py-1 px-3 rounded text-xs leading-normal font-semibold bg-success text-white">
                MD
              </span>
              <span className="inline-flex items-center py-0 px-2.5 rounded text-sm leading-[30px] font-semibold bg-danger text-white">
                LG
              </span>
              <span className="inline-flex items-center py-0 px-4 rounded text-base leading-9 font-semibold bg-warning text-white">
                XL
              </span>
            </div>
          </div>
        </div>
        {/* /Badge Size */}
        {/* Badge Usage */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Soft Badge Sizes</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-center flex-wrap gap-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold border border-primary/10 bg-primary/10 text-primary">
                Default
              </span>
              <span className="inline-flex items-center py-0 px-1 rounded text-[10px] leading-[18px] font-medium border border-secondary/10 bg-secondary/10 text-secondary">
                XS
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-[11px] leading-[11px] font-semibold border border-success/10 bg-success/10 text-success">
                SM
              </span>
              <span className="inline-flex items-center py-1 px-3 rounded text-xs leading-normal font-semibold border border-success/10 bg-success/10 text-success">
                MD
              </span>
              <span className="inline-flex items-center py-0 px-2.5 rounded text-sm leading-[30px] font-semibold border border-danger/10 bg-danger/10 text-danger">
                LG
              </span>
              <span className="inline-flex items-center py-0 px-4 rounded text-base leading-9 font-semibold border border-warning/10 bg-warning/10 text-warning">
                XL
              </span>
            </div>
          </div>
        </div>
        {/* /Badge Usage */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Buttons With Badges */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Default Badge with Image</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-primary text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-xs"
                  alt="avatar"
                />{" "}
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-dark text-white dark:text-white!">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-xs"
                  alt="avatar"
                />{" "}
                Dark
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-success text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-xs"
                  alt="avatar"
                />{" "}
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-warning text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-xs"
                  alt="avatar"
                />{" "}
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-info text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-xs"
                  alt="avatar"
                />{" "}
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-danger text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-xs"
                  alt="avatar"
                />{" "}
                Error
              </span>
            </div>
          </div>
        </div>
        {/* /Buttons With Badges */}
        {/* Buttons With Badges */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Badge with Image</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-primary text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-full"
                  alt="avatar"
                />{" "}
                Primary
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-dark text-white dark:text-white!">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-full"
                  alt="avatar"
                />{" "}
                Dark
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-success text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-full"
                  alt="avatar"
                />{" "}
                Success
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-warning text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-full"
                  alt="avatar"
                />{" "}
                Warning
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-info text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-full"
                  alt="avatar"
                />{" "}
                Info
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-danger text-white">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-01.jpg"
                  className="w-3 h-3 me-1 rounded-full"
                  alt="avatar"
                />{" "}
                Error
              </span>
            </div>
          </div>
        </div>
        {/* /Buttons With Badges */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Buttons With Badges */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Icon With Badges</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-primary text-white">
                Primary <i className="ti ti-check text-white ms-2" />
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-dark text-white dark:text-white!">
                Dark <i className="ti ti-check text-white ms-2" />
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-success text-white">
                Success <i className="ti ti-check text-white ms-2" />
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-warning text-white">
                Warning <i className="ti ti-check text-white ms-2" />
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-info text-white">
                Info <i className="ti ti-check text-white ms-2" />
              </span>
              <span className="inline-flex items-center py-1 px-2 rounded text-xs font-medium bg-danger text-white">
                Error <i className="ti ti-check text-white ms-2" />
              </span>
            </div>
          </div>
        </div>
        {/* /Buttons With Badges */}
        {/* Badge with icons */}
        <div>
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Icon With Rounded Badges</h5>
            </div>
            <div className="card-body p-5">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-primary text-white">
                  Primary <i className="ti ti-check text-white ms-2" />
                </span>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-dark text-white dark:text-white!">
                  Dark <i className="ti ti-check text-white ms-2" />
                </span>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-success text-white">
                  Success <i className="ti ti-check text-white ms-2" />
                </span>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-warning text-white">
                  Warning <i className="ti ti-check text-white ms-2" />
                </span>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-info text-white">
                  Info <i className="ti ti-check text-white ms-2" />
                </span>
                <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-danger text-white">
                  Error <i className="ti ti-check text-white ms-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* /Badge with icons */}
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

export default UiBadges