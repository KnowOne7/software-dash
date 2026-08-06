import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";
import CommonSelect from "../../../components/common-select/commonSelect";
import { Font_Family, Sidebar_Size } from "../../../core/json/selectOption";

const AppearanceSettings = () => {
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
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Preference
                    </Link>
                    <Link
                      to={all_routes.appearance}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
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
                  <h5 className="mb-0 text-[17px]">Appearance</h5>
                </div>
                <form>
                  <div className="border-b border-borderColor mb-3">
                    {/* start row */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Select Theme
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select theme of the website
                          </p>
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
                            <div>
                              <input
                                type="radio"
                                id="option-5"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                                defaultChecked
                              />
                              <label
                                htmlFor="option-5"
                                className="inline-flex flex-col items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary"
                              >
                                <ImageWithBasePath
                                  src="assets/img/theme/theme-01.jpg"
                                  alt="Img"
                                />
                                <span className="font-medium">Light</span>
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="option-6"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="option-6"
                                className="inline-flex flex-col items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary"
                              >
                                <ImageWithBasePath
                                  src="assets/img/theme/theme-02.jpg"
                                  alt="Img"
                                />
                                <span className="font-medium">Dark</span>
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="option-7"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="option-7"
                                className="inline-flex flex-col items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary"
                              >
                                <ImageWithBasePath
                                  src="assets/img/theme/theme-03.jpg"
                                  alt="Img"
                                />
                                <span className="font-medium">Automatic</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
                    {/* start col */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Accent Color
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select accent color of website
                          </p>
                        </div>
                      </div>
                      {/* end col */}
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <div className="theme-colors">
                            <div className="flex items-center gap-2">
                              <div>
                                <input
                                  type="radio"
                                  id="option-1"
                                  defaultValue=""
                                  name="theme"
                                  className="hidden peer"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="option-1"
                                  className="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-primary-100 peer-checked:p-0.5 peer-checked:text-primary"
                                >
                                  <span className="bg-primary flex w-full h-full rounded-full" />
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  id="option-2"
                                  defaultValue=""
                                  name="theme"
                                  className="hidden peer"
                                />
                                <label
                                  htmlFor="option-2"
                                  className="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-secondary-100 peer-checked:p-0.5 peer-checked:text-primary"
                                >
                                  <span className="bg-secondary flex w-full h-full rounded-full" />
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  id="option-3"
                                  defaultValue=""
                                  name="theme"
                                  className="hidden peer"
                                />
                                <label
                                  htmlFor="option-3"
                                  className="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-info-100 peer-checked:p-0.5 peer-checked:text-primary"
                                >
                                  <span className="bg-info flex w-full h-full rounded-full" />
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  id="option-4"
                                  defaultValue=""
                                  name="theme"
                                  className="hidden peer"
                                />
                                <label
                                  htmlFor="option-4"
                                  className="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-teal-100 peer-checked:p-0.5 peer-checked:text-primary"
                                >
                                  <span className="bg-teal flex w-full h-full rounded-full" />
                                </label>
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  id="option-8"
                                  defaultValue=""
                                  name="theme"
                                  className="hidden peer"
                                />
                                <label
                                  htmlFor="option-8"
                                  className="w-8 h-8 flex items-center justify-center border border-transparent rounded-full cursor-pointer peer-checked:bg-success-100 peer-checked:p-0.5 peer-checked:text-primary"
                                >
                                  <span className="bg-success flex w-full h-full rounded-full" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Expand Sidebar
                          </h6>
                          <p className="text-[13px] mb-0">
                            To display in all the pages
                          </p>
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Sidebar Size
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select size of sidebar to display
                          </p>
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-4">
                        <div className="mb-3">
                           <CommonSelect
                            options={Sidebar_Size}
                            className="select"
                            defaultValue={Sidebar_Size[0]}
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Font Family
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select font family of website
                          </p>
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-4">
                        <div className="mb-3">
                           <CommonSelect
                            options={Font_Family}
                            className="select"
                            defaultValue={Font_Family[0]}
                          />
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
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default AppearanceSettings;
