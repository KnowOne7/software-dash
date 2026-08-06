import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { all_routes } from "../../../routes/all_routes";
import SettingsTopbar from "../settings-topbar/settingsTopbar";

const LanguageSettings = () => {
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
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Appearance
                    </Link>
                    <Link
                      to={all_routes.languageWeb}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
                    >
                      Language
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3 flex items-center justify-between flex-wrap gap-y-3">
                  <h5 className="mb-0 text-[17px]">Language</h5>
                  <div className="flex items-center flex-wrap gap-3">
                    {/* Dropdown */}
                    <div>
                      <Link
                        to="#"
                        className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                        data-dropdown-toggle="lang-dropdown"
                      >
                        <i className="ti ti-language me-2" />
                        Language
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="lang-dropdown"
                        className="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/us.svg"
                              className="me-2"
                              alt="Img"
                              width={16}
                              height={16}
                            />
                            English
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/de.svg"
                              className="me-2"
                              alt="Img"
                              width={16}
                              height={16}
                            />
                            German
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/ae.svg"
                              alt="Img"
                              className="me-2"
                              width={16}
                              height={16}
                            />
                            Arabic
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/fr.svg"
                              alt="Img"
                              className="me-2"
                              width={16}
                              height={16}
                            />
                            French
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Link
                      to="#"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                      data-modal-target="add_lang"
                      data-modal-toggle="add_lang"
                    >
                      <i className="ti ti-square-rounded-plus-filled" />
                      Add Language
                    </Link>
                  </div>
                </div>
                {/* Contact List */}
                <div className="table-responsive custom-table mb-4">
                  <table className="table table-nowrap w-full">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-dark text-left">Language</th>
                        <th className="p-3 text-dark text-left">Code</th>
                        <th className="p-3 text-dark text-left">RTL</th>
                        <th className="p-3 text-dark text-left">Total</th>
                        <th className="p-3 text-dark text-left">Done</th>
                        <th className="p-3 text-dark text-left">Progress</th>
                        <th className="p-3 text-dark text-left">Status</th>
                        <th className="p-3 text-dark text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="flex items-center gap-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/us.svg"
                              alt="Img"
                              width={16}
                              height={16}
                            />
                            English
                          </Link>
                        </td>
                        <td className="p-3">en</td>
                        <td className="p-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </td>
                        <td className="p-3">3481</td>
                        <td className="p-3">2861</td>
                        <td className="p-3">
                          <div className="pipeline-progress flex items-center">
                            <div className="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                              <div className="h-1 rounded-[50px] w-[50px] bg-warning" />
                            </div>
                            <span className="font-medium text-dark">80%</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                          >
                            Connected
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2 ">
                            <div>
                              <Link
                                to={all_routes.languageWeb}
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Web
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                App
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Admin
                              </Link>
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                                <Link
                                  className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  to="#"
                                  data-modal-target="edit_modal"
                                  data-modal-toggle="edit_modal"
                                >
                                  <i className="ti ti-edit me-1" /> Edit
                                </Link>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="flex items-center gap-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/de.svg"
                              alt="Img"
                              width={16}
                              height={16}
                            />
                            German
                          </Link>
                        </td>
                        <td className="p-3">de</td>
                        <td className="p-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </td>
                        <td className="p-3">4815</td>
                        <td className="p-3">4815</td>
                        <td className="p-3">
                          <div className="pipeline-progress flex items-center">
                            <div className="h-1 rounded-[50px] w-[63px] flex-shrink-0 me-3">
                              <div className="h-1 rounded-[50px] bg-success" />
                            </div>
                            <span className="font-medium text-dark">100%</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                          >
                            Connected
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2 ">
                            <div>
                              <Link
                                to={all_routes.languageWeb}
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Web
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                App
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Admin
                              </Link>
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                                <Link
                                  className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  to="#"
                                  data-modal-target="edit_modal"
                                  data-modal-toggle="edit_modal"
                                >
                                  <i className="ti ti-edit me-1" /> Edit
                                </Link>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="flex items-center gap-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/ae.svg"
                              alt="Img"
                              width={16}
                              height={16}
                            />
                            Arabic
                          </Link>
                        </td>
                        <td className="p-3">ar</td>
                        <td className="p-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </td>
                        <td className="p-3">2590</td>
                        <td className="p-3">20</td>
                        <td className="p-3">
                          <div className="pipeline-progress flex items-center">
                            <div className="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                              <div className="h-1 rounded-[50px] w-[30px] bg-danger" />
                            </div>
                            <span className="font-medium text-dark">50%</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                          >
                            Connected
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2 ">
                            <div>
                              <Link
                                to={all_routes.languageWeb}
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Web
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                App
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Admin
                              </Link>
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                                <Link
                                  className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  to="#"
                                  data-modal-target="edit_modal"
                                  data-modal-toggle="edit_modal"
                                >
                                  <i className="ti ti-edit me-1" /> Edit
                                </Link>
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
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="flex items-center gap-2"
                          >
                            <ImageWithBasePath
                              src="assets/img/flags/fr.svg"
                              alt="Img"
                              width={16}
                              height={16}
                            />
                            English
                          </Link>
                        </td>
                        <td className="p-3">fr</td>
                        <td className="p-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </td>
                        <td className="p-3">1892</td>
                        <td className="p-3">387</td>
                        <td className="p-3">
                          <div className="pipeline-progress flex items-center">
                            <div className="h-1 rounded-[50px] w-[63px] bg-light flex-shrink-0 me-3">
                              <div className="h-1 rounded-[50px] w-[28px] bg-info" />
                            </div>
                            <span className="font-medium text-dark">40%</span>
                          </div>
                        </td>
                        <td className="p-3">
                          <Link
                            to="#"
                            className="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-success"
                          >
                            Connected
                          </Link>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-2 ">
                            <div>
                              <Link
                                to={all_routes.languageWeb}
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Web
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                App
                              </Link>
                              <Link
                                to="#"
                                className="px-1.5 py-0.5 rounded text-[12px] inline-flex bg-light text-dark hover:bg-gray-100 me-2"
                              >
                                Admin
                              </Link>
                            </div>
                            <div className="dropdown relative table-action">
                              <Link
                                to="#"
                                className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              >
                                <i className="ti ti-dots-vertical" />
                              </Link>
                              <div className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
                                <Link
                                  className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  to="#"
                                  data-modal-target="edit_modal"
                                  data-modal-toggle="edit_modal"
                                >
                                  <i className="ti ti-edit me-1" /> Edit
                                </Link>
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
    </>
  );
};

export default LanguageSettings;
