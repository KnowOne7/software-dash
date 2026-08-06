import { Link } from "react-router"
import { all_routes } from "../../../../routes/all_routes"

const ContactStageModal = () => {
  return (
    <>
  {/* Add Stage */}
  <div
    id="add_modal"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div className="relative p-4 w-full max-w-[500px] max-h-full">
      <div className="relative bg-white rounded-defaultradius">
        <div className="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 className="font-bold text-[18px]">Add New Contact Stage</h5>
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
                  Contact Stage <span className="text-danger">*</span>
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
  {/* /Add Stage */}
  {/* Edit Stage */}
  <div
    id="edit_modal"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div className="relative p-4 w-full max-w-[500px] max-h-full">
      <div className="relative bg-white rounded-defaultradius">
        <div className="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 className="font-bold text-[18px]">Edit Contact Stage</h5>
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
                  Contact Stage <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Contacted"
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
  {/* /Edit Stage */}
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
            Are you sure you want to remove contact stage you selected.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="#"
              className="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.contactStage} className="btn btn-primary z-1 w-full">
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

export default ContactStageModal