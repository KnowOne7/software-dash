import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import { all_routes } from "../../../routes/all_routes"

const DatabaseBackup = () => {
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
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded bg-rose-100 text-primary border-l border-primary"
                    >
                      Database Backup
                    </Link>
                    <Link
                      to={all_routes.systemUpdate}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      System Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Database Backup</h5>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                    data-modal-target="add_modal"
                    data-modal-toggle="add_modal"
                  >
                    <i className="ti ti-folder-open me-1" />
                    Generate Backup
                  </Link>
                </div>
                <div className="table-responsive custom-table">
                  <table className="table table-nowrap w-full">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-dark text-left">Name</th>
                        <th className="p-3 text-dark text-left">Created On</th>
                        <th className="p-3 text-dark text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">contacts_db_backup_20250312.sql</td>
                        <td className="p-3">22 Feb 2025</td>
                        <td className="p-3">
                          <div className="dropdown relative table-action">
                            <Link
                              to="#"
                              className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              data-dropdown-toggle="dropdown-menu-1"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div id="dropdown-menu-1" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                              <Link
                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                to="#"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                              >
                                <i className="ti ti-trash me-1" /> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">customers_db_backup_20250312.sql</td>
                        <td className="p-3">10 Feb 2025</td>
                        <td className="p-3">
                          <div className="dropdown relative table-action">
                            <Link
                              to="#"
                              className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              data-dropdown-toggle="dropdown-menu-2"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div id="dropdown-menu-2" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                              <Link
                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                to="#"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                              >
                                <i className="ti ti-trash me-1" /> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">companies_db_backup_20250312.sql</td>
                        <td className="p-3">17 Jan 2025</td>
                        <td className="p-3">
                          <div className="dropdown relative table-action">
                            <Link
                              to="#"
                              className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              data-dropdown-toggle="dropdown-menu-3"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div id="dropdown-menu-3" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                              <Link
                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                to="#"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                              >
                                <i className="ti ti-trash me-1" /> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">payments_db_backup_20250312.sql</td>
                        <td className="p-3">07 Jan 2025</td>
                        <td className="p-3">
                          <div className="dropdown relative table-action">
                            <Link
                              to="#"
                              className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              data-dropdown-toggle="dropdown-menu-4"
                            >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div id="dropdown-menu-4" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                              <Link
                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                to="#"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                              >
                                <i className="ti ti-trash me-1" /> Delete
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

      <>
        {/* delete modal */}
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
          id="delete_modal"
        >
          <div className="relative bg-white rounded-defaultradius p-5">
            <div className="modal-content rounded-0">
              <div className="modal-body p-4 text-center">
                <div className="mb-3 relative z-[1]">
                  <span className="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center">
                    <i className="ti ti-trash text-[24px]" />
                  </span>
                </div>
                <h5 className="mb-1">Delete Confirmation</h5>
                <p className="mb-3">
                  Are you sure you want to remove backup file you selected.
                </p>
                <div className="flex justify-center items-center">
                  <Link
                    to="#"
                    className="btn btn-light z-1 me-2 w-full"
                    data-modal-hide="delete_modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary z-1 w-full"
                  >
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* delete modal */}
        {/* Generate Backup */}
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
          id="add_modal"
        >
          <div className="relative bg-white rounded-defaultradius p-5">
            <div className="modal-content rounded-0">
              <div className="modal-body p-4 text-center">
                <div className="mb-3 relative z-[1]">
                  <span className="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center">
                    <i className="ti ti-folder-open text-[24px]" />
                  </span>
                </div>
                <h5 className="mb-1">Generate Backup</h5>
                <p className="mb-3">
                  Are you sure you want to generate Database backup?
                </p>
                <div className="flex justify-center items-center">
                  <Link
                    to="#"
                    className="btn btn-light z-1 me-2 w-full"
                    data-modal-hide="add_modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary z-1 w-full"
                  >
                    Generate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Generate Backup */}
      </>



    </>

  )
}

export default DatabaseBackup;