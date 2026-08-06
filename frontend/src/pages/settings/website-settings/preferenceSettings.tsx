import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import ImageWithBasePath from "../../../components/image-with-base-path";

const PreferenceSettings = () => {
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
                  <h5 className="mb-3 text-[17px]">Website Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.companySettings}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded "
                    >
                      Company Settings
                    </Link>
                    <Link
                      to={all_routes.localization}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Localization
                    </Link>
                    <Link
                      to={all_routes.prefixes}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Prefixes
                    </Link>
                    <Link
                      to={all_routes.preference}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
                    >
                      Preference
                    </Link>
                    <Link
                      to={all_routes.appearance}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Appearance
                    </Link>
                    <Link
                      to={all_routes.languageWeb}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Language
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Preference</h5>
                </div>
                <form>
                  <div className="border-b border-borderColor mb-3">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-01.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Contact
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-02.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Deals
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-03.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Leads
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-04.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Pipelines
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-02.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Campaign
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-06.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Projects
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-07.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Tasks
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-08.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Acivities
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-09.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Company
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-10.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Analytics
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-11.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Clients
                              </h6>
                            </div>
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
                      <div className="xxl:col-span-4 sm:col-span-6">
                        <div className="border border-borderColor rounded mb-3">
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center">
                              <ImageWithBasePath
                                src="assets/img/icons/preference-12.svg"
                                alt="Img"
                              />
                              <h6 className="text-[14px] font-semibold ms-2 mb-0">
                                Customers
                              </h6>
                            </div>
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
                    </div>
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
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default PreferenceSettings;
