import { Link } from "react-router";
import { Assigned_To, Client, Currency, Deals,  Proposal_Project, Related_TO, Status_Accepted } from "../../../core/json/selectOption";
import CommonSelect from "../../../components/common-select/commonSelect";
import MemoCommonTagInputs from "../../../components/common-tag-input/commonTagInputs";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import MemoTextEditor from "../../../components/text-editor/texteditor";

const ProposalsModal = () => {

  return (
    <>
      {/* Add Proposal */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Proposal</h5>
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
                  <label className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Open Till <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Client <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Client}
                    className="select"
                    defaultValue={Client[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Project<span className="text-danger">*</span>
                    </label>
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
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Related to <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Related_TO}
                    className="select"
                    defaultValue={Related_TO[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Deals<span className="text-danger">*</span>
                    </label>
                    <Link
                      to="#"
                      className="text-primary mb-2"
                      data-modal-target="add_deal"
                      data-modal-toggle="add_deal"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Deals}
                    className="select"
                    defaultValue={Deals[0]}
                  />
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
                    Status <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Status_Accepted}
                    className="select"
                    defaultValue={Status_Accepted[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Assigned to <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Assigned_To}
                    className="select"
                    defaultValue={Assigned_To[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
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
                  <label className="form-label">Tags</label>
                  <MemoCommonTagInputs />
                  <span className="fs-13 mt-2">Enter value separated by comma</span>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Description </label>
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
      {/* /Add Proposal */}
      {/* Add Project */}
      <div
        id="add_project"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add New Project</h5>
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
      {/* Add Deal */}
      <div
        id="add_deal"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add New Deal</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_deal"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">Deal Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_deal"
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
      {/* /Add Deal */}
      {/* Edit Proposal */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Proposal</h5>
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
                  <label className="form-label">
                    Subject <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="SEO Proposals"
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Open Till <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Client <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Client}
                    className="select"
                    defaultValue={Client[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Project<span className="text-danger">*</span>
                    </label>
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
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Related to <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Related_TO}
                    className="select"
                    defaultValue={Related_TO[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Deals<span className="text-danger">*</span>
                    </label>
                    <Link
                      to="#"
                      className="text-primary mb-2"
                      data-modal-target="add_deal"
                      data-modal-toggle="add_deal"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Deals}
                    className="select"
                    defaultValue={Deals[1]}
                  />
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
                    Status <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Status_Accepted}
                    className="select"
                    defaultValue={Status_Accepted[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Assigned to <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Assigned_To}
                    className="select"
                    defaultValue={Assigned_To[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
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
                  <label className="form-label">Tags</label>
                  <MemoCommonTagInputs />
                  <span className="fs-13 mt-2">Enter value separated by comma</span>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Description </label>
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
                Are you sure you want to remove project you selected.
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

export default ProposalsModal;
