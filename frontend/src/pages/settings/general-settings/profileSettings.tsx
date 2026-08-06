import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import CommonSelect from "../../../components/common-select/commonSelect"
import { City, Country, State } from "../../../core/json/selectOption"
import { all_routes } from "../../../routes/all_routes"

const ProfileSettings = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 className="mb-1 text-xl font-bold flex items-center">Settings</h4>
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
              <li className="text-dark font-medium" aria-current="page">
                Settings
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Refresh Button */}
          <button
            className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh"
          >
            <i className="ti ti-refresh" />
          </button>
          {/* Collapse Button */}
          <button
            className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse"
            id="collapse-header"
          >
            <i className="ti ti-transition-top" />
          </button>
        </div>
      </div>
      {/* End Page Header */}
     <SettingsTopbar/>
      {/* end card */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <div className="xl:col-span-3 theiaStickySidebar">
          <div className="bg-white border border-borderColor rounded p-4">
            <div className="settings-sidebar">
              <h5 className="mb-3 text-[17px]">General Settings</h5>
              <div className="flex flex-col">
                <Link
                  to={all_routes.profile}
                  className="d-block p-2 font-medium active bg-rose-100 rounded text-primary border-l border-primary hover:text-primary transition-all"
                >
                  Profile
                </Link>
                <Link
                  to={all_routes.security}
                  className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                >
                  Security
                </Link>
                <Link
                  to={all_routes.notification}
                  className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                >
                  Notifications
                </Link>
                <Link
                  to={all_routes.connectedApps}
                  className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                >
                  Connected Apps
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-9">
          <div className="bg-white border border-borderColor rounded p-4">
            <div className="border-b border-borderColor mb-3 pb-3">
              <h5 className="mb-0 text-[17px]">Profile</h5>
            </div>
            <form>
              <div className="mb-3">
                <h6 className="mb-1">Employee Information</h6>
                <p className="mb-0">Provide the information below</p>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <i className="ti ti-photo text-dark fs-16" />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start">
                  <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                    <i className="ti ti-file-broken me-1" />
                    Upload file
                    <input
                      type="file"
                      className="opacity-0 absolute start-0 top-0"
                      multiple
                    />
                  </div>
                  <span>JPG, GIF or PNG. Max size of 800K</span>
                </div>
              </div>
              <div className="border-b border-borderColor mb-4 pb-1">
                {/* start row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <label className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <label className="form-label">
                        User Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              <div className="border-b border-borderColor mb-4 pb-1">
                <div className="mb-3">
                  <h6 className="mb-1">Address</h6>
                  <p className="mb-0">Please enter the address details</p>
                </div>
                {/* start row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-6">
                    <div className="mb-3">
                      <label className="form-label">Country</label>
                      <CommonSelect
                            options={Country}
                            className="select"
                            defaultValue={Country[0]}
                          />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-6">
                    <div className="mb-3">
                      <label className="form-label">State / Province</label>
                      <CommonSelect
                            options={State}
                            className="select"
                            defaultValue={State[0]}
                          />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-6">
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <CommonSelect
                            options={City}
                            className="select"
                            defaultValue={City[0]}
                          />
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="md:col-span-6">
                    <div className="mb-3">
                      <label className="form-label">Postal Code</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>{" "}
                  {/* end col */}
                </div>
                {/* end row */}
              </div>
              <div className="flex items-center justify-end flex-wrap gap-2">
                <Link to="#" className="btn btn-sm btn-light">
                  Cancel
                </Link>
                <button type="submit" className="btn btn-sm btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
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

export default ProfileSettings