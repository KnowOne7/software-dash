import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import { all_routes } from "../../../routes/all_routes"
import CommonSelect from "../../../components/common-select/commonSelect"
import { Cookies_Position } from "../../../core/json/selectOption"

const GdprCookies = () => {
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
              <h5 className="mb-3 text-[17px]">System Settings</h5>
              <div className="flex flex-col">
                <Link
                  to={all_routes.emailSettings}
                  className="d-block p-2 font-medium rounded hover:text-primary transition-all"
                >
                  Email Settings
                </Link>
                <Link
                  to={all_routes.smsGateways}
                  className="d-block p-2 font-medium rounded  hover:text-primary transition-all"
                >
                  SMS Gateways
                </Link>
                <Link
                  to={all_routes.gdprCookies}
                  className="d-block p-2 font-medium hover:text-primary transition-all rounded bg-rose-100 text-primary border-l border-primary"
                >
                  GDPR Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-9">
          <div className="bg-white border border-borderColor rounded p-4">
            <div className="border-b border-borderColor mb-3 pb-3">
              <h5 className="mb-0 text-[17px]">GDPR Cookies</h5>
            </div>
            <form>
              <div className="border-b border-borderColor pb-2 mb-4">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-1 gap-x-4 items-center">
                  <div className="md:col-span-6">
                    <div className="mb-3">
                      <h6 className="text-[14px] font-semibold mb-1">
                        Cookies Content Text
                      </h6>
                      <p className="text-[13px]">
                        You can configure the text here
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="mb-3">
                      <div className="editor pages-editor" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-1 gap-x-4 items-center">
                  <div className="md:col-span-8">
                    <div className="mb-3">
                      <h6 className="text-[14px] font-semibold mb-1">
                        Cookies Position
                      </h6>
                      <p className="text-[13px]">You can configure the type</p>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="mb-3">
                       <CommonSelect
                            options={Cookies_Position}
                            className="select"
                            defaultValue={Cookies_Position[0]}
                          />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-1 gap-x-4 items-center">
                  <div className="md:col-span-8">
                    <div className="mb-3">
                      <h6 className="text-[14px] font-semibold mb-1">
                        Agree Button Text
                      </h6>
                      <p className="text-[13px]">
                        You can configure the text here
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Agree"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-1 gap-x-4 items-center">
                  <div className="md:col-span-8">
                    <div className="mb-3">
                      <h6 className="text-[14px] font-semibold mb-1">
                        Decline Button Text
                      </h6>
                      <p className="text-[13px]">
                        You can configure the text here
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Decline"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-1 gap-x-4 items-center">
                  <div className="md:col-span-8">
                    <div className="mb-3">
                      <h6 className="text-[14px] font-semibold mb-1">
                        Show Decline Button
                      </h6>
                      <p className="text-[13px]">To display decline button</p>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultValue=""
                          className="sr-only peer"
                          defaultChecked
                        />
                        <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-1 gap-x-4 items-center">
                  <div className="md:col-span-8">
                    <div className="mb-3">
                      <h6 className="text-[14px] font-semibold mb-1">
                        Link for Cookies Page
                      </h6>
                      <p className="text-[13px]">
                        You can configure the link here
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <div className="mb-3">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end flex-wrap gap-2">
                <Link
                  to="#"
                  className="btn btn-sm btn-light me-2"
                >
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

export default GdprCookies