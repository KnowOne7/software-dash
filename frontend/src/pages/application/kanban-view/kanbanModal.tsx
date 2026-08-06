import { Link } from "react-router"
import { all_routes } from "../../../routes/all_routes"
import { Employee, Priority } from "../../../core/json/selectOption"
import CommonSelect from "../../../components/common-select/commonSelect"
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker"
import MemoTextEditor from "../../../components/text-editor/texteditor"


const KanbanModal = () => {
  return (
    <>
    {/* start add notes  modal */}
    <div
      id="add_new_project"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
    >
      <div className="relative p-4 w-full max-w-[500px] max-h-full">
        <div className="relative bg-white rounded-defaultradius">
          <div className="flex items-center justify-between p-4 border-b border-borderColor">
            <div className="flex item-center gap-2">
              <h5 className="font-bold text-[18px]">Add Project</h5>
            </div>
            <button
              type="button"
              className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
              data-modal-hide="add_new_project"
            >
              <i className="ti ti-x" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                <div className="md:col-span-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Task Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="md:col-span-12">
                  <div className="mb-3">
                    <div className="flex items-center justify-between">
                      <label className="form-label">
                        Select Employee <span className="text-danger">*</span>
                      </label>
                    </div>
                    <CommonSelect
                            options={Employee}
                            className="select"
                            defaultValue={Employee[0]}
                          />
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Status <span className="text-danger">*</span>
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
                      Start Date<span className="text-danger ms-1">*</span>
                    </label>
                    <div className=" w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />

                    </div>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Due Date<span className="text-danger ms-1">*</span>
                    </label>
                    <div className=" w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-12">
                  <div>
                    <label className="form-label">Descriptions</label>
                    <div className="editor pages-editor">
                        <MemoTextEditor/>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
            <button
              type="button"
              data-modal-hide="add_new_project"
              className="btn btn-light"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* end add new modal */}
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
              Are you sure you want to remove contract you selected.
            </p>
            <div className="flex justify-center items-center">
              <Link
                to="#"
                className="btn btn-light z-1 me-2 w-full"
                data-modal-hide="delete_modal"
              >
                Cancel
              </Link>
              <Link to={all_routes.kanbanview} className="btn btn-primary z-1 w-full">
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

export default KanbanModal