import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import { all_routes } from "../../../routes/all_routes";

const Printers = () => {
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
                  <h5 className="mb-3 text-[17px]">App Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.invoiceSettings}
                      className="d-block p-2 font-medium rounded hover:text-primary transition-all"
                    >
                      Invoice Settings
                    </Link>
                    <Link
                      to={all_routes.printers}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded bg-rose-100 text-primary border-l border-primary"
                    >
                      Printer
                    </Link>
                    <Link
                      to={all_routes.customFields}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Custom Fields
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Printer</h5>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                    data-modal-target="add_modal"
                    data-modal-toggle="add_modal"
                  >
                    <i className="ti ti-square-rounded-plus-filled" />
                    Add New Printer
                  </Link>
                </div>
                <div className="table-responsive custom-table mb-4">
                  <table className="table table-nowrap w-full">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-dark text-left">
                          Printer Name
                        </th>
                        <th className="p-3 text-dark text-left">
                          Connection Type
                        </th>
                        <th className="p-3 text-dark text-left">IP Address</th>
                        <th className="p-3 text-dark text-left">Port</th>
                        <th className="p-3 text-dark text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">HD Printer</td>
                        <td className="p-3">Network</td>
                        <td className="p-3">151.00.1.22</td>
                        <td className="p-3">900</td>
                        <td className="p-3">
                          <div className="dropdown relative table-action">
                            <Link
                              to="#"
                              className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                           data-dropdown-toggle="dropdown-menu-1" >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div id="dropdown-menu-1" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Epson</td>
                        <td className="p-3">Network</td>
                        <td className="p-3">151.00.1.20</td>
                        <td className="p-3">500 </td>
                        <td className="p-3">
                          <div className="dropdown relative table-action">
                            <Link
                              to="#"
                              className="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                           data-dropdown-toggle="dropdown-menu-2" >
                              <i className="ti ti-dots-vertical" />
                            </Link>
                            <div id="dropdown-menu-2" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
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
        {/* Add Printer */}
        <div
          id="add_modal"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Add Printer</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="add_modal"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Printer Company <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Printer Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Connection Type <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        IP Address <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Port <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="add_modal"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Printer */}
        {/* Edit Printer */}
        <div
          id="edit_modal"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Edit Printer</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="edit_modal"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Printer Company <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Hp"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Printer Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Hp printer"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Connection Type <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Network"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        IP Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="198.162.0.1"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Port <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={900}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="edit_modal"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Edit Printer */}
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
                  Are you sure you want to remove printer you selected.
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
                    to={all_routes.printers}
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
      </>
    </>
  );
};

export default Printers;
