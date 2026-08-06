import { Link } from "react-router"
import CommonFooter from "../../components/common-footer/commonFooter"
import { all_routes } from "../../routes/all_routes"

const MembershipAddons = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      {/* start card item */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-start-2 md:col-span-12 w-full">
          <div className="card">
            <div className="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
              <h6 className="text-[18px] mb-0">Membership Addons</h6>
              {/* Add New Button */}
              <Link
                to={all_routes.membershipplan}
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
              >
                Back <i className="ti ti-chevron-right ms-1" />
              </Link>
            </div>
            <div className="bg-white p-4">
              {/* start grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4">
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className=" mb-2">
                      <label className="form-label">
                        Contacts<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Leads<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Companies<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Compaigns<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Projects<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Deals<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Tasks<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div className="mx-2">
                    <div className="mb-2">
                      <label className="form-label">
                        Pipelines<span className="text-danger ms-1">*</span>
                      </label>
                      <div className="flex items-center justify-between gap-3">
                        <input type="text" className="form-control" />
                        <label className="flex items-center gap-3 justify-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span>Unlimited</span>
                    </label>
                  </div>
                </div>
              </div>
              {/* end grid */}
            </div>
            <div className="flex items-center justify-end bg-white p-4 border-t border-borderColor">
              <button type="button" className="btn btn-light me-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end card item */}
    </div>
    {/* Start Footer */}
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default MembershipAddons