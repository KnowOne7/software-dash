import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import { all_routes } from "../../../routes/all_routes"
import { Bank_Name } from "../../../core/json/selectOption"
import CommonSelect from "../../../components/common-select/commonSelect"

const BankAccounts = () => {
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
                  <h5 className="mb-3 text-[17px]">Financial Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.paymentGateways}
                      className="d-block p-2 font-medium rounded hover:text-primary transition-all"
                    >
                      Payment Gateways
                    </Link>
                    <Link
                      to={all_routes.bankAccounts}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded bg-rose-100 text-primary border-l border-primary"
                    >
                      Bank Accounts
                    </Link>
                    <Link
                      to={all_routes.taxRates}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Tax Rates
                    </Link>
                    <Link
                      to={all_routes.currencies}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Currencies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Bank Accounts</h5>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                    data-modal-target="add_modal"
                    data-modal-toggle="add_modal"
                  >
                    <i className="ti ti-square-rounded-plus-filled me-1" />
                    Add New Account
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4">
                  {/* Card 1 */}
                  <div className="xxl:col-span-4 md:col-span-6">
                    <input
                      type="radio"
                      id="option-1"
                      defaultValue=""
                      name="status-2"
                      className="hidden peer"
                      defaultChecked
                    />
                    <div
                      className="bank-info bg-light flex flex-col justify-between p-5 text-dark relative border-2 border-borderColor rounded-lg cursor-pointer
												peer-checked:border-success peer-checked:bg-white"
                      onClick={() => {
                        const el = document.getElementById('option-1') as HTMLInputElement | null;
                        if (el) el.checked = true;
                      }}
                    >
                      <div className="check-icon text-success absolute top-[-5px] left-[-5px] opacity-0 peer-checked:opacity-100">
                        <i className="ti ti-circle-check-filled" />
                      </div>
                      <div className="mb-4">
                        <h5 className="font-bold mb-1 text-[16px]">HDFC</h5>
                        <p className="mb-0 fs-14">**** **** 4872</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold mb-1 text-[14px]">Holder Name</h6>
                          <p className="text-[13px]">Darlee Robertson</p>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle bg-white w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-1"
                          >
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
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="xxl:col-span-4 md:col-span-6">
                    <input
                      type="radio"
                      id="option-2"
                      defaultValue=""
                      name="status-2"
                      className="hidden peer"
                    />
                    <div
                      className="bank-info bg-light flex flex-col justify-between p-5 text-dark relative border-2 border-borderColor rounded-lg cursor-pointer
												peer-checked:border-success peer-checked:bg-white"
                      onClick={() => {
                        const input = document.getElementById('option-2') as HTMLInputElement | null;
                        if (input) input.checked = true;
                      }}
                    >
                      <div className="check-icon text-success absolute top-[-5px] left-[-5px] opacity-0 peer-checked:opacity-100">
                        <i className="ti ti-circle-check-filled" />
                      </div>
                      <div className="mb-4">
                        <h5 className="font-bold mb-1 text-[16px]">SBI</h5>
                        <p className="mb-0 fs-14">**** **** 2495</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold mb-1 text-[14px]">Holder Name</h6>
                          <p className="text-[13px]">Sharon Roy</p>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle bg-white w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-2"
                          >
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
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="xxl:col-span-4 md:col-span-6">
                    <input
                      type="radio"
                      id="option-3"
                      defaultValue=""
                      name="status-2"
                      className="hidden peer"
                    />
                    <div
                      className="bank-info bg-light flex flex-col justify-between p-5 text-dark relative border-2 border-borderColor rounded-lg cursor-pointer
													peer-checked:border-success peer-checked:bg-white"
                      onClick={() => {
                        const input = document.getElementById('option-3') as HTMLInputElement | null;
                        if (input) input.checked = true;
                      }}
                    >
                      <div className="check-icon text-success absolute top-[-5px] left-[-5px] opacity-0 peer-checked:opacity-100">
                        <i className="ti ti-circle-check-filled" />
                      </div>
                      <div className="mb-4">
                        <h5 className="font-bold mb-1 text-[16px]">KVB</h5>
                        <p className="mb-0 fs-14">**** **** 3948</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h6 className="font-semibold mb-1 text-[14px]">Holder Name</h6>
                          <p className="text-[13px]">Vaughan Lewis</p>
                        </div>
                        <div className="dropdown relative table-action">
                          <Link
                            to="#"
                            className="dropdown-toggle bg-white w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                            data-dropdown-toggle="dropdown-menu-3"
                          >
                            <i className="ti ti-dots-vertical" />
                          </Link>
                          <div id="dropdown-menu-3" className="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu hidden">
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
                    </div>
                  </div>
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

      {/* Add Account */}
      <div
        id="add_modal"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add Bank Account</h5>
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
                      Bank Name <span className="text-danger">*</span>
                    </label>
                  <CommonSelect
                    options={Bank_Name}
                    className="select"
                    defaultValue={Bank_Name[0]}
                  />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Account Holder Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Account Number <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Branch Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      ABA Number <span className="text-danger">*</span>
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
                  Add New
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Account */}
      {/* Edit Account */}
      <div
        id="edit_modal"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Edit Bank Account</h5>
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
                      Bank Name <span className="text-danger">*</span>
                    </label>
                  <CommonSelect
                    options={Bank_Name}
                    className="select"
                    defaultValue={Bank_Name[1]}
                  />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Account Holder Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Darlee Robertson"
                    />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Account Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="**** **** 4872"
                    />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Branch Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="HDFC"
                    />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      ABA Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1234567}
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
      {/* /Edit Account */}
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
                Are you sure you want to remove account you selected.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="#"
                  className="btn btn-light z-1 me-2 w-full"
                  data-modal-hide="delete_modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary z-1 w-full">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}


    </>

  )
}

export default BankAccounts