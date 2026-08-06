import { Link } from "react-router";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import CommonSelect from "../../../components/common-select/commonSelect";
import MemoCommonTagInputs from "../../../components/common-tag-input/commonTagInputs";
import MemoTextEditor from "../../../components/text-editor/texteditor";
import { Client, Currency, Estimate_By, Proposal_Project, Status_Accepted } from "../../../core/json/selectOption";
import { all_routes } from "../../../routes/all_routes";



const EstimationModal = () => {

  return (
    <>
      {/* Add Estimation */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Estimation</h5>
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
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
                      data-modal-target="add_project"
                      data-modal-toggle="add_project"
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
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Estimate By <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Estimate_By}
                    className="select"
                    defaultValue={Estimate_By[0]}
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
                    Estimate Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Expiry Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={Status_Accepted}
                    className="select"
                    defaultValue={Status_Accepted[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Tags </label>
                  <MemoCommonTagInputs />
                  <span className="text-[13px] mt-2">
                    Enter value separated by comma
                  </span>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-5">
                  <label className="form-label">
                    Attachment <span className="text-danger">*</span>
                  </label>
                  <div className="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                    <span className="block mb-1">
                      <i className="ti ti-folder-open text-primary fs-16" />
                    </span>
                    <p className="mb-0 tet-[14px] text-dark">
                      Drop your files here or{" "}
                      <Link
                        to="#"
                        className="underline text-primary"
                      >
                        browse
                      </Link>
                    </p>
                    <input
                      type="file"
                      accept="video/image"
                      className="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer"
                    />
                    <p className="text-[13px] mb-0">Maximum size : 50 MB</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <MemoTextEditor />
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
      {/* /Add Estimation */}
      {/* Add Client */}
      <div
        id="add_client"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add Client</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_client"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form >
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">Client Name</label>
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
      {/* Add Project */}
      <div
        id="add_project"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add Project</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_project"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">Project Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_project"
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
      {/* /Add Project */}
      {/* Edit Estimation */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Estimation</h5>
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
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
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
                      data-modal-target="add_project"
                      data-modal-toggle="add_project"
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
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Estimate By <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Estimate_By}
                    className="select"
                    defaultValue={Estimate_By[1]}
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
                    Estimate Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Expiry Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={Status_Accepted}
                    className="select"
                    defaultValue={Status_Accepted[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Tags </label>
                  <MemoCommonTagInputs />
                  <span className="text-[13px] mt-2">
                    Enter value separated by comma
                  </span>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-5">
                  <label className="form-label">
                    Attachment <span className="text-danger">*</span>
                  </label>
                  <div className="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                    <span className="block mb-1">
                      <i className="ti ti-folder-open text-primary fs-16" />
                    </span>
                    <p className="mb-0 tet-[14px] text-dark">
                      Drop your files here or{" "}
                      <Link
                        to="#"
                        className="underline text-primary"
                      >
                        browse
                      </Link>
                    </p>
                    <input
                      type="file"
                      accept="video/image"
                      className="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer"
                    />
                    <p className="text-[13px] mb-0">Maximum size : 50 MB</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Description <span className="text-danger">*</span>
                  </label>
                  <MemoTextEditor />
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
      {/* /Edit Estimation */}
      {/* View Estimation */}
      <div
        id="offcanvas_view"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor flex items-center justify-between">
          <h5 className="inline-flex items-center">
            Estimation
            <span className="text-danger border-b border-danger text-xs font-medium px-2 py-1 rounded bg-danger-100 ms-2">
              #1254057
            </span>
          </h5>
          {/* Dropdown */}
          <div className="flex items-center">
            <div className="me-3">
              <Link
                to="#"
                className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="download-dropdown"
              >
                Download
                <i className="ti ti-chevron-down ml-1" />
              </Link>
              <ul
                id="download-dropdown"
                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
              >
                <li>
                  <Link
                    to="#"
                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  >
                    Download
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  >
                    Download PDF
                  </Link>
                </li>
              </ul>
            </div>
            <button
              type="button"
              data-drawer-hide="offcanvas_view"
              aria-controls="offcanvas_view"
              className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"
            >
              <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="card border border-borderColor rounded shadow">
            <div className="card-body p-4">
              <div className="border-b border-borderColor pb-5 mb-5">
                <h6 className="mb-3">
                  Estimation Details{" "}
                  <span className=" text-xs font-medium px-2 py-1 rounded bg-success text-white ms-2">
                    Accepted
                  </span>
                </h6>
                <ul className="flex items-centers justify-between gap-2 flex-wrap">
                  <li>
                    <p className="text-[13px] font-medium mb-1">Estimate Date</p>
                    <h6 className="text-[14px] font-normal">13 May 2025</h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Expiry Date</p>
                    <h6 className="text-[14px] font-normal">30 May 2025</h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Client</p>
                    <h6 className="text-[14px] font-normal">NovaWave LLC</h6>
                  </li>
                </ul>
              </div>
              <div className="details-propsal">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 gap-x-5">
                  <div className="lg:col-span-4">
                    <div className="proposal-to">
                      <h6 className="mb-2 font-semibold text-[14px]">From</h6>
                      <h6 className="mb-2 font-semibold text-[14px]">CRMS</h6>
                      <p className="mb-1">
                        3338 Marcus Street Birmingham, AL 35211
                      </p>
                      <p className="mb-1">
                        Phone : <span className="text-dark">+1 98789 78788</span>{" "}
                      </p>
                      <p className="mb-1">
                        Email : <span className="text-dark">info@example.com</span>
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="proposal-to">
                      <h6 className="mb-2 font-semibold text-[14px]">Bill To</h6>
                      <h6 className="mb-2 font-semibold text-[14px]">
                        NovaWave LLC{" "}
                      </h6>
                      <p className="mb-1">
                        994 Martine Ranch Suite 900 Candacefort New Hampshire
                      </p>
                      <p className="mb-1">
                        Phone : <span className="text-dark">+1 58478 74646</span>
                      </p>
                      <p className="mb-1">
                        Email : <span className="text-dark">info@example.net</span>
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <div className="proposal-to">
                      <h6 className="mb-2 font-semibold text-[14px]">Ship To</h6>
                      <h6 className="mb-2 font-semibold text-[14px]">
                        NovaWave LLC{" "}
                      </h6>
                      <p className="mb-1">
                        994 Martine Ranch Suite 900 Candacefort New Hampshire
                      </p>
                      <p className="mb-1">
                        Phone : <span className="text-dark">+1 58478 74646</span>
                      </p>
                      <p className="mb-1">
                        Email : <span className="text-dark">info@example.net</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive table-nowrap border-t border-borderColor mt-5 pt-5 mb-4">
                <table className="table table-nowrap w-full border border-borderColor">
                  <thead className="table-light">
                    <tr>
                      <th className="p-3 text-left">Job Description</th>
                      <th className="p-3 text-left">Qty</th>
                      <th className="p-3 text-left">Price</th>
                      <th className="p-3 text-left">Discount</th>
                      <th className="p-3 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3">UX Strategy</td>
                      <td className="p-3">1</td>
                      <td className="p-3">$500</td>
                      <td className="p-3">$100</td>
                      <td className="p-3">$500</td>
                    </tr>
                    <tr>
                      <td className="p-3">Design System</td>
                      <td className="p-3">1</td>
                      <td className="p-3">$5000</td>
                      <td className="p-3">$100</td>
                      <td className="p-3">$5000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-light p-3 rounded mb-4">
                <h6 className="text-[14px] font-medium border-b border-borderColor pb-2 mb-2">
                  Sub Total <span className="float-end">$5500.00</span>
                </h6>
                <h6 className="text-[14px] font-medium border-b border-borderColor pb-2 mb-2">
                  Discount(0%) <span className="float-end">$400.00</span>
                </h6>
                <h6 className="text-[14px] font-medium border-b border-borderColor pb-2 mb-2">
                  Extra Discount(0%) <span className="float-end">$0.00</span>
                </h6>
                <h6 className="text-[14px] font-medium pb-2 mb-2">
                  Tax <span className="float-end">$54.00</span>
                </h6>
                <h6 className="mb-2">
                  Total Amount <span className="float-end">$5775.00</span>
                </h6>
                <p className="mb-0">
                  Amount in Words : Dollar Five thousand Seven Seventy Five
                </p>
              </div>
              <hr className="mb-4 border-borderColor" />
              <h6 className="font-semibold text-[14px] mb-1">
                Terms and Conditions
              </h6>
              <p className="mb-0">
                The products/services listed in this invoice will be
                delivered/provided as per the specifications and schedule detailed
                in the invoice or as agreed upon by both parties in previous
                communications.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /View Estimation */}
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
                Are you sure you want to remove estimation you selected.
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
                  to={all_routes.estimationList}
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

  );
};

export default EstimationModal;
