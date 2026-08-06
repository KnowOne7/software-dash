import { Link } from "react-router";
import CommonDatePicker from "../../../../components/common-date-picker/commonDatePicker";
import CommonSelect from "../../../../components/common-select/commonSelect";
import MemoCommonTagInputs from "../../../../components/common-tag-input/commonTagInputs";
import MemoTextEditor from "../../../../components/text-editor/texteditor";
import { Category, Priority, ResponsiblePersons, StatusActive } from "../../../../core/json/selectOption";
import { all_routes } from "../../../../routes/all_routes";

const TasksModal = () => {

  return (
    <>
      {/* Add Project */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Task</h5>
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
                    Title <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Category </label>
                        <CommonSelect
                          options={Category}
                          className="select"
                          defaultValue={Category[0]}
                        />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Responsible Persons <span className="text-danger">*</span>
                  </label>
                        <CommonSelect
                          options={ResponsiblePersons}
                          className="select"
                          defaultValue={ResponsiblePersons[0]}
                        />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Tags</label>
                  <MemoCommonTagInputs />
                  <span className="fs-13 mt-2">Enter value separated by comma</span>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Priority <span className="text-danger">*</span>
                  </label>
                        <CommonSelect
                          options={Priority}
                          className="select"
                          defaultValue={Priority[0]}
                        />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                        <CommonSelect
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[0]}
                        />
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
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* /Add Project */}
      {/* Edit Project */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Task</h5>
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
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Add images to the cards section"
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Category </label>
                        <CommonSelect
                          options={Category}
                          className="select"
                          defaultValue={Category[1]}
                        />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Responsible Persons <span className="text-danger">*</span>
                  </label>
                        <CommonSelect
                          options={ResponsiblePersons}
                          className="select"
                          defaultValue={ResponsiblePersons[1]}
                        />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Tags</label>
                  <MemoCommonTagInputs />
                  <span className="fs-13 mt-2">Enter value separated by comma</span>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Priority <span className="text-danger">*</span>
                  </label>
                        <CommonSelect
                          options={Priority}
                          className="select"
                          defaultValue={Priority[1]}
                        />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                        <CommonSelect
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[1]}
                        />
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
      {/* /Edit Project */}
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
                Are you sure you want to remove task you selected.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="#"
                  className="btn btn-light z-1 me-2 w-full"
                  data-modal-hide="delete_modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.tasks} className="btn btn-primary z-1 w-full">
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

export default TasksModal;
