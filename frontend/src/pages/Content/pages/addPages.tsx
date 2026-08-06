import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const AddPages = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      <div className="flex justify-center">
        <div className="w-full lg:w-10/12 mx-auto">
          <div className="bg-white">
            <div className="p-4 border-b border-borderColor flex items-center justify-between gap-2 flex-wrap">
              <h6 className="fs-18 mb-0">Add New Page</h6>
              <Link to={all_routes.pages}className="btn btn-primary btn-sm">
                Back
                <i className="ti ti-chevron-right ms-1" />
              </Link>
            </div>
            <form>
              <div className="p-4 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
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
                      <label className="form-label">
                        Slug <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Keywords <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <div className="flex items-center gap-4">
                        <div className="form-check">
                          <input
                            className="text-primary border-borderColor"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Active
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="text-primary border-borderColor"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Inactive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Visibility</label>
                      <div className="flex items-center gap-4">
                        <div className="form-check">
                          <input
                            className="text-primary border-borderColor"
                            type="radio"
                            name="flexRadioDefault2"
                            id="flexRadioDefault3"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault3"
                          >
                            Show
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="text-primary border-borderColor"
                            type="radio"
                            name="flexRadioDefault2"
                            id="flexRadioDefault4"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault4"
                          >
                            Hide
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button type="button" className="btn btn-light me-2">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create New
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer */}
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default AddPages