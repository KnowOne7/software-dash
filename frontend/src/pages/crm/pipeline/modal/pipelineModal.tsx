import { Link } from "react-router";
import ImageWithBasePath from "../../../../components/image-with-base-path";
import { all_routes } from "../../../../routes/all_routes";

const PipelineModal = () => {
  return (
    <>
      {/* Add Pipeline */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Pipeline</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            aria-controls="offcanvas_add"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" />{" "}
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Pipeline Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="pipe-title flex items-center justify-between mb-2">
                    <label className="form-label m-0">Pipeline Stages</label>
                    <Link
                      to="#"
                      className="add-stage text-primary"
                      data-modal-target="add_stage"
                      data-modal-toggle="add_stage"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <div className="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                    <p className="mb-0 font-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Inpipeline
                    </p>
                    <div className="inline-flex items-center">
                      <Link
                        to="#"
                        data-modal-target="edit_stage"
                        data-modal-toggle="edit_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                      <Link
                        to="#"
                        data-modal-target="delete_stage"
                        data-modal-toggle="delete_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                  <div className="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                    <p className="mb-0 font-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Follow Up
                    </p>
                    <div className="inline-flex items-center">
                      <Link
                        to="#"
                        data-modal-target="edit_stage"
                        data-modal-toggle="edit_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                      <Link
                        to="#"
                        data-modal-target="delete_stage"
                        data-modal-toggle="delete_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                  <div className="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                    <p className="mb-0 font-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Schedule
                      Service
                    </p>
                    <div className="inline-flex items-center">
                      <Link
                        to="#"
                        data-modal-target="edit_stage"
                        data-modal-toggle="edit_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                      <Link
                        to="#"
                        data-modal-target="delete_stage"
                        data-modal-toggle="delete_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Access</label>
                  <ul
                    className="nav flex items-center gap-3"
                    data-tabs-toggle="#sign-tab-content"
                    data-tabs-active-classes="text-default hover:text-default"
                  >
                    <li className="nav-item block" role="presentation">
                      <span
                        className="flex"
                        role="tab"
                        data-tabs-target="#nosign"
                        aria-selected="false"
                      >
                        <input
                          type="radio"
                          className="text-primary border border-borderColor mt-1"
                          id="sign1"
                          name="email"
                          defaultChecked
                        />
                        <label
                          htmlFor="sign1"
                          className="form-check-label ms-2 text-dark font-medium"
                        >
                          All
                        </label>
                      </span>
                    </li>
                    <li className="nav-item block mb-0" role="presentation">
                      <span
                        className="flex mb-0"
                        role="tab"
                        data-tabs-target="#use-esign"
                        aria-selected="false"
                      >
                        <input
                          type="radio"
                          className="text-primary border border-borderColor mt-1"
                          id="sign2"
                          name="email"
                        />
                        <label
                          htmlFor="sign2"
                          className="form-check-label ms-2 text-dark font-medium"
                        >
                          Select Person
                        </label>
                      </span>
                    </li>
                  </ul>
                  <div id="sign-tab-content" className="sign-tab-content">
                    <div className="hidden" id="nosign" role="tabpanel" />
                    <div className="hidden mt-4" id="use-esign" role="tabpanel">
                      <div className="access-wrapper mb-5">
                        <div className="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-21.jpg"
                                alt="Image"
                                className="rounded-full"
                              />
                            </div>
                            <span>Vaughan Lewis</span>
                          </div>
                          <Link to="#" className="text-primary">
                            Remove
                          </Link>
                        </div>
                        <div className="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-08.jpg"
                                alt="Image"
                                className="rounded-full"
                              />
                            </div>
                            <span>Katherine Brooks</span>
                          </div>
                          <Link to="#" className="text-primary">
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
      {/* /Add Pipeline */}
      {/* Edit Pipeline */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Pipeline</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_edit"
            aria-controls="offcanvas_edit"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" />{" "}
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <div className="p-4">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Pipeline Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Inpipeline"
                  />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <div className="pipe-title flex items-center justify-between mb-2">
                    <label className="form-label m-0">Pipeline Stages</label>
                    <Link
                      to="#"
                      className="add-stage text-primary"
                      data-modal-target="add_stage"
                      data-modal-toggle="add_stage"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <div className="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                    <p className="mb-0 font-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Inpipeline
                    </p>
                    <div className="inline-flex items-center">
                      <Link
                        to="#"
                        data-modal-target="edit_stage"
                        data-modal-toggle="edit_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                      <Link
                        to="#"
                        data-modal-target="delete_stage"
                        data-modal-toggle="delete_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                  <div className="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                    <p className="mb-0 font-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Follow Up
                    </p>
                    <div className="inline-flex items-center">
                      <Link
                        to="#"
                        data-modal-target="edit_stage"
                        data-modal-toggle="edit_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                      <Link
                        to="#"
                        data-modal-target="delete_stage"
                        data-modal-toggle="delete_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                  <div className="pipeline-item flex items-center justify-between p-3 shadow-sm bg-white mb-1 border-l-4 border-warning">
                    <p className="mb-0 font-semibold me-3 text-dark">
                      <i className="ti ti-grip-vertical text-body" /> Schedule
                      Service
                    </p>
                    <div className="inline-flex items-center">
                      <Link
                        to="#"
                        data-modal-target="edit_stage"
                        data-modal-toggle="edit_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                      <Link
                        to="#"
                        data-modal-target="delete_stage"
                        data-modal-toggle="delete_stage"
                        className="btn btn-sm btn-outline-light border-0 text-dark font-medium"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">Access</label>
                  <ul
                    className="nav flex items-center gap-3"
                    data-tabs-toggle="#sign-tab-content2"
                    data-tabs-active-classes="text-default hover:text-default"
                  >
                    <li className="nav-item block" role="presentation">
                      <span
                        className="flex"
                        role="tab"
                        data-tabs-target="#nosign2"
                        aria-selected="false"
                      >
                        <input
                          type="radio"
                          className="text-primary border border-borderColor mt-1"
                          id="sign3"
                          name="email"
                          defaultChecked
                        />
                        <label
                          htmlFor="sign3"
                          className="form-check-label ms-2 text-dark font-medium"
                        >
                          All
                        </label>
                      </span>
                    </li>
                    <li className="nav-item block mb-0" role="presentation">
                      <span
                        className="flex mb-0"
                        role="tab"
                        data-tabs-target="#use-esign2"
                        aria-selected="false"
                      >
                        <input
                          type="radio"
                          className="text-primary border border-borderColor mt-1"
                          id="sign4"
                          name="email"
                        />
                        <label
                          htmlFor="sign4"
                          className="form-check-label ms-2 text-dark font-medium"
                        >
                          Select Person
                        </label>
                      </span>
                    </li>
                  </ul>
                  <div id="sign-tab-content2" className="sign-tab-content">
                    <div className="hidden" id="nosign2" role="tabpanel" />
                    <div
                      className="hidden mt-4"
                      id="use-esign2"
                      role="tabpanel"
                    >
                      <div className="access-wrapper mb-5">
                        <div className="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-21.jpg"
                                alt="Image"
                                className="rounded-full"
                              />
                            </div>
                            <span>Vaughan Lewis</span>
                          </div>
                          <Link to="#" className="text-primary">
                            Remove
                          </Link>
                        </div>
                        <div className="flex items-center mb-2 justify-between rounded p-2 bg-white border border-borderColor">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-08.jpg"
                                alt="Image"
                                className="rounded-full"
                              />
                            </div>
                            <span>Katherine Brooks</span>
                          </div>
                          <Link to="#" className="text-primary">
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
      {/* /Edit Pipeline */}
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
                Are you sure you want to remove pipeline you selected.
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
                  to={all_routes.pipeline}
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
      {/* delete Stage */}
      <div
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
        id="delete_stage"
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
                Are you sure you want to remove stage you selected.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="#"
                  className="btn btn-light z-1 me-2 w-full"
                  data-modal-hide="delete_stage"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.pipeline}
                  className="btn btn-primary z-1 w-full"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete Stage */}
      {/* Add Stage */}
      <div
        id="add_stage"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add New Stage</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_stage"
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
                      Stage Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_stage"
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
        id="edit_stage"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Edit Stage</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="edit_stage"
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
                      Stage Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Inpipeline"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="edit_stage"
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
    </>
  );
};

export default PipelineModal;
