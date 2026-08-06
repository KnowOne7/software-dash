import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import SettingsTopbar from "../settings-topbar/settingsTopbar";

const Notification = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Settings
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                  <li>
                    <Link
                      to={all_routes.dealsDashboard}
                      className="hover:underline text-gray-700"
                    >
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
                  <h5 className="mb-3 text-[17px]">General Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.profile}
                      className="d-block p-2 font-medium active  rounded  hover:text-primary transition-all"
                    >
                      Profile
                    </Link>
                    <Link
                      to={all_routes.security}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded "
                    >
                      Security
                    </Link>
                    <Link
                      to={all_routes.notification}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
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
                  <h5 className="mb-0 text-[17px]">Notification Settings</h5>
                </div>
                <div>
                  <div className="mb-3">
                    <h6 className="mb-1">General Notifications</h6>
                    <p className="mb-0">Select notifications</p>
                  </div>
                  <div className="border-b border-borderColor mb-3 pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <label
                        className="form-check-label text-dark font-medium"
                        htmlFor="checkebox-sm"
                      >
                        Mobile Push Notifications
                      </label>
                      <input
                        className="text-primary rounded border-borderColor me-1"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-sm"
                        
                      />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <label
                        className="form-check-label text-dark font-medium"
                        htmlFor="checkebox-sm-2"
                      >
                        Desktop Notifications
                      </label>
                      <input
                        className="text-primary rounded border-borderColor me-1"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-sm-2"
                        
                      />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <label
                        className="form-check-label text-dark font-medium"
                        htmlFor="checkebox-sm-3"
                      >
                        Email Notifications
                      </label>
                      <input
                        className="text-primary rounded border-borderColor me-1"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-sm-3"
                        
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label
                        className="form-check-label text-dark font-medium"
                        htmlFor="checkebox-sm-4"
                      >
                        SMS Notifications
                      </label>
                      <input
                        className="text-primary rounded border-borderColor me-1"
                        type="checkbox"
                        defaultValue=""
                        id="checkebox-sm-4"
                        
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Custom Notifications</h6>
                    <p className="mb-0">
                      Select when you will be notified when the following
                      changes occur
                    </p>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-borderless notification-table w-full border-0">
                      <thead className="bg-white">
                        <tr>
                          <th className="bg-white p-3 text-left" />
                          <th className="bg-white p-3 text-left">Push</th>
                          <th className="bg-white p-3 text-left">SMS</th>
                          <th className="bg-white p-3 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="fw-medium text-dark py-2 border-0">
                            Payment
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-dark py-2 border-0">
                            Transaction
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-dark py-2 border-0">
                            Email Verification
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-dark py-2 border-0">
                            OTP
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-dark py-2 border-0">
                            Activity
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td className="fw-medium text-dark py-2 border-0">
                            Account
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                          <td className="py-2 border-0">
                            <label className="flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>{" "}
                  {/* end table responsive */}
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
  );
};

export default Notification;
