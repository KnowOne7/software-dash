import { Link } from "react-router"
import { all_routes } from "../../../../routes/all_routes"
import ImageWithBasePath from "../../../../components/image-with-base-path"


const CallHistoryModal = () => {
  return (
    <>
    {/* Add Expenses */}
    <div
      id="call_history"
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    >
      <div className="relative p-4 w-full max-w-[500px] max-h-full">
        <div className="relative bg-white rounded-defaultradius">
          <div className="flex items-center justify-between p-4 border-b border-borderColor">
            <h4 className="font-semibold">Caller Details</h4>
            <button
              type="button"
              className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
              data-modal-hide="call_history"
            >
              <i className="ti ti-x" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form>
            <div className="p-4">
              <div className="card border border-borderColor rounded-[5px] bg-white mb-4">
                <div className="card-body p-5 ">
                  <div className="flex items-center justify-center">
                    <div className="avatar avatar-xxxl  mb-3">
                      <ImageWithBasePath
                        src="assets/img/users/user-32.jpg"
                        alt="img"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Link
                      to={all_routes.videoCall}
                      className=" bg-borderColor rounded-full w-[40px] h-[40px] call-item p-0 flex items-center justify-center me-3 text-dark hover:text-white  hover:bg-primary"
                    >
                      <i className="ti ti-video text-[14px]" />
                    </Link>
                    <Link
                      to={all_routes.chat}
                      className=" bg-borderColor rounded-full w-[40px] h-[40px] call-item p-0 flex items-center justify-center me-3 text-dark hover:text-white  hover:bg-primary"
                    >
                      <i className="ti ti-message text-[14px]" />
                    </Link>
                    <Link
                      to={all_routes.audioCall}
                      className=" bg-borderColor rounded-full w-[40px] h-[40px] call-item p-0 flex items-center justify-center me-3 text-dark hover:text-white  hover:bg-primary"
                    >
                      <i className="ti ti-phone text-[14px]" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-12 gap-6">
                <div className="md:col-span-6">
                  <div>
                    <p className="mb-1">Name</p>
                    <h6 className="font-medium">Anthony Lewis</h6>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div>
                    <p className="mb-1">Total Calls</p>
                    <h6 className="font-medium">20</h6>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div>
                    <p className="mb-1">Phone</p>
                    <h6 className="font-medium">(123) 4567 890</h6>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div>
                    <p className="mb-1">Average Call Timing</p>
                    <h6 className="font-medium">00:30</h6>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div>
                    <p className="mb-1">Email</p>
                    <h6 className="font-medium">anthony@example.com</h6>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div>
                    <p className="mb-1">Average Waiting Time</p>
                    <h6 className="font-medium">00:05</h6>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /Add expenses */}
    {/* delete Stage */}
    <div
      className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
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
            <h5 className="mb-1">Remove Stage</h5>
            <p className="mb-3">
              Are you sure you want to remove call you selected.
            </p>
            <div className="flex justify-center items-center">
              <Link
                to="#"
                className="btn btn-light z-1 me-2 w-full"
                data-modal-hide="delete_modal"
              >
                Cancel
              </Link>
              <Link to={all_routes.callHistory} className="btn btn-primary z-1 w-full">
                Yes, Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* delete Stage */}
  </>
  
  )
}

export default CallHistoryModal