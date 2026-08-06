
import { Link } from "react-router";

import { Client, Currency, Payment_Method, Proposal_Project, State, Status_Paid } from "../../../core/json/selectOption";
import CommonSelect from "../../../components/common-select/commonSelect";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";

const InvoicesModals = () => {


  return (
    <>
      {/* Add Invoices */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Invoice</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            aria-controls="offcanvas_add"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Client</label>
                    <Link
                      to="#"
                      className="mb-2 text-primary"
                      data-modal-target="add_client"
                      data-modal-toggle="add_client"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Client}
                    className="select"
                    defaultValue={Client[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Bill To <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Ship To <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Project</label>
                    <Link
                      to="#"
                      className="mb-2 text-primary"
                      data-modal-target="add_client"
                      data-modal-toggle="add_client"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Proposal_Project}
                    className="select"
                    defaultValue={Proposal_Project[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Amount <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Currency <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Currency}
                    className="select"
                    defaultValue={Currency[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Open Till <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Payment Method </label>
                  <CommonSelect
                    options={Payment_Method}
                    className="select"
                    defaultValue={Payment_Method[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={State}
                    className="select"
                    defaultValue={State[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Description </label>
                  <div className="editor pages-editor" />
                </div>
              </div>
              <div className="md:col-span-12 mb-4">
                <div className="table-responsive mb-3">
                  <table className="table table-borderless table-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-left">Item</th>
                        <th className="p-3 text-left">Quantity</th>
                        <th className="p-3 text-left">Price</th>
                        <th className="p-3 text-left">Discount</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-left" />
                      </tr>
                    </thead>
                    <tbody className="invoices-list-two">
                      <tr>
                        <td className="p-3">
                          <div className="input-table input-table-descripition">
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <select className="select">
                              <option>0%</option>
                              <option>5%</option>
                            </select>
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link to="#" className="text-primary add-invoices-two mb-3">
                  <i className="ti ti-plus me-1" />
                  Add New
                </Link>
              </div>
              <div className="md:col-span-12">
                <div className="card border border-borderColor rounded mb-4">
                  <div className="card-body p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">Subtotal</h6>
                      <h6 className="text-[14px] font-semibold mb-0">$0.00</h6>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">
                        Discount 2%
                      </h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">
                        Extra Discount 0%
                      </h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">Tax</h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                    <div className="flex items-center justify-between">
                      <h6 className="text-[14px] font-semibold mb-0">Total</h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Terms &amp; Conditions</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                data-drawer-hide="offcanvas_add"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create New
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Add Invoices */}
      {/* Add Client */}
      <div
        id="add_client"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_client"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_client"
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
      {/* /Add Client */}
      {/* Edit Proposal */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Invoice</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_edit"
            aria-controls="offcanvas_edit"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Client</label>
                    <Link
                      to="#"
                      className="mb-2 text-primary"
                      data-modal-target="add_client"
                      data-modal-toggle="add_client"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Client}
                    className="select"
                    defaultValue={Client[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Bill To <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Ship To <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Project</label>
                    <Link
                      to="#"
                      className="mb-2 text-primary"
                      data-modal-target="add_client"
                      data-modal-toggle="add_client"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Proposal_Project}
                    className="select"
                    defaultValue={Proposal_Project[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Amount <span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Currency <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Currency}
                    className="select"
                    defaultValue={Currency[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                   <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Open Till <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Payment Method </label>
                  <CommonSelect
                    options={Payment_Method}
                    className="select"
                    defaultValue={Payment_Method[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={Status_Paid}
                    className="select"
                    defaultValue={Status_Paid[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Description </label>
                  <div className="editor pages-editor">
                    Key decision-maker overseeing operations and strategic planning.
                    Responsible for approving major deals and partnerships. Prefers
                    direct communication via email.
                  </div>
                </div>
              </div>
              <div className="md:col-span-12 mb-4">
                <div className="table-responsive mb-3">
                  <table className="table table-borderless table-nowrap">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-left">Item</th>
                        <th className="p-3 text-left">Quantity</th>
                        <th className="p-3 text-left">Price</th>
                        <th className="p-3 text-left">Discount</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-left" />
                      </tr>
                    </thead>
                    <tbody className="invoices-list-3">
                      <tr>
                        <td className="p-3">
                          <div className="input-table input-table-descripition">
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <select className="select">
                              <option>0%</option>
                              <option>5%</option>
                            </select>
                          </div>
                        </td>
                        <td className="p-3">
                          <div>
                            <input type="text" className="form-control" />
                          </div>
                        </td>
                        <td className="p-3"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link to="#" className="text-primary add-invoices-3 mb-3">
                  <i className="ti ti-plus me-1" />
                  Add New
                </Link>
              </div>
              <div className="md:col-span-12">
                <div className="card border border-borderColor rounded mb-4">
                  <div className="card-body p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">Subtotal</h6>
                      <h6 className="text-[14px] font-semibold mb-0">$0.00</h6>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">
                        Discount 2%
                      </h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">
                        Extra Discount 0%
                      </h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h6 className="text-[14px] font-semibold mb-0">Tax</h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                    <div className="flex items-center justify-between">
                      <h6 className="text-[14px] font-semibold mb-0">Total</h6>
                      <h6 className="text-[14px] font-semibold mb-0">$18</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Notes</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Terms &amp; Conditions</label>
                  <textarea className="form-control" rows={3} defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                data-drawer-hide="offcanvas_edit"
                className="btn btn-light me-2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Edit Proposal */}
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
                Are you sure you want to remove Invoice you selected.
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

  );
};

export default InvoicesModals;
