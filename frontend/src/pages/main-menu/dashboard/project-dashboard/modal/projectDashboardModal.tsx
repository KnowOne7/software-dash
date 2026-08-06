import CommonDatePicker from "../../../../../components/common-date-picker/commonDatePicker";
import CommonSelect from "../../../../../components/common-select/commonSelect";
import {
  Category,
  Client,
  Priority,
  Project_Timing,
  Project_Type,
  ResponsiblePersons,
  StatusActive,
  TeamLeader,
} from "../../../../../core/json/selectOption";

const ProjectDashboardModal = () => {
  return (
    <>
      {/* Add Project */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Project</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            aria-controls="offcanvas_add"
            data-modal-hide="add_new_notes"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" />{" "}
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center p-5 border border-borderColor rounded mb-5">
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project ID <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project Type <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Project_Type}
                    className="select"
                    defaultValue={Project_Type[0]}
                  />
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
                  <label className="form-label">
                    Category <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Category}
                    className="select"
                    defaultValue={Category[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Project Timing <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Project_Timing}
                    className="select"
                    defaultValue={Project_Timing[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Price <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
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
                    Team Leader <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={TeamLeader}
                    className="select"
                    defaultValue={TeamLeader[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <CommonSelect
                    options={Priority}
                    className="select"
                    defaultValue={Priority[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-0">
                  <label className="form-label">Description </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    defaultValue={""}
                  />
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
      {/* /Add Project */}
    </>
  );
};

export default ProjectDashboardModal;
