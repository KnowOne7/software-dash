import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import { all_routes } from "../../../routes/all_routes"

const SystemUpdate = () => {
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
          <SettingsTopbar />
          {/* end card */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
            <div className="xl:col-span-3 theiaStickySidebar">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="settings-sidebar">
                  <h5 className="mb-3 text-[17px]">Other Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.sitemap}
                      className="d-block p-2 font-medium rounded hover:text-primary transition-all"
                    >
                      Sitemap
                    </Link>
                    <Link
                      to={all_routes.clearCache}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Clear Cache
                    </Link>
                    <Link
                      to={all_routes.storage}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Storage
                    </Link>
                    <Link
                      to={all_routes.cronjob}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Cronjob
                    </Link>
                    <Link
                      to={all_routes.banIpAddrress}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Ban IP Address
                    </Link>
                    <Link
                      to={all_routes.systemBackup}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      System Backup
                    </Link>
                    <Link
                      to={all_routes.databaseBackup}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Database Backup
                    </Link>
                    <Link
                      to={all_routes.systemUpdate}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded bg-rose-100 text-primary border-l border-primary"
                    >
                      System Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">System Update</h5>
                </div>
                <div className="mb-4">
                  <div className="flex items-center flex-wrap gap-2">
                    <div className="relative z-[1]">
                      <span className="w-10 h-10 bg-success-100 text-success flex items-center justify-center rounded-full">
                        <i className="ti ti-circle-check-filled text-[24px]" />
                      </span>
                    </div>
                    <div>
                      <h6 className="text-[14px] mb-1 font-semibold">
                        {" "}
                        You are up to date{" "}
                        <span className="text-xs bg-info-100 text-info rounded border-b border-info px-2 py-0.5 inline-flex ms-2">
                          Default
                        </span>{" "}
                      </h6>
                      <p className="text-[13px] mb-0">Last Checked : Today 10:30AM</p>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="w-100">
                    <label className="form-label">
                      Purchase Key<span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="bg-light border border-borderColor rounded p-2 d-flex align-items-center">
                  <p className="mb-0">
                    {" "}
                    <i className="ti ti-info-circle me-2 text-info" /> Before updating,
                    it's best to back up your files and database and review the changelog.
                  </p>
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

export default SystemUpdate;