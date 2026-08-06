import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormGridGutters = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Grid System
          </h4>
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                  Home
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li>
                <Link
                  to="#"
                  className="hover:underline text-gray-700"
                >
                  Forms
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li className="text-dark font-medium" aria-current="page">
                Grid System
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="lg:grid grid-cols-4 gap-x-6">
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header p-5 border-b border-borderColor">
                <h4 className="card-title">Form Grid</h4>
              </div>
              <div className="card-body p-5">
                <div className="md:grid grid-cols-4 gap-x-6">
                  <div className="col-span-2 mb-4">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-span-2 mb-4">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-span-2 mb-4">
                    <label className="form-label">Address</label>
                    <div className="lg:grid grid-cols-4 gap-x-6">
                      <div className="col-span-4 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street"
                        />
                      </div>
                      <div className="col-span-4 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Landmark"
                        />
                      </div>
                      <div className="col-span-2 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                        />
                      </div>
                      <div className="col-span-2 mb-4">
                        <select
                          id="inputState1"
                          className="form-select bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        >
                          <option selected>State</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div className="col-span-2 mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postal/Zip code"
                        />
                      </div>
                      <div className="col-span-2 mb-4">
                        <select
                          id="inputCountry"
                          className="form-select bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                        >
                          <option selected>Country</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="lg:grid grid-cols-4 gap-x-6">
                      <div className="col-span-4 mb-4">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="col-span-4 mb-4">
                        <label className="form-label">DOB</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-span-4 mb-4">
                        <label className="form-label">Maritial Status</label>
                        <div className="md:grid grid-cols-4 gap-x-6">
                          <div className="col-span-2">
                            <div className="form-check flex items-center">
                              <input
                                className="form-check-input me-2 border-borderColor rounded"
                                type="checkbox"
                                defaultValue=""
                                id="status-married"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="status-married"
                              >
                                Married
                              </label>
                            </div>
                          </div>
                          <div className="col-span-2">
                            <div className="form-check flex items-center">
                              <input
                                className="form-check-input me-2 border-borderColor rounded"
                                type="checkbox"
                                defaultValue=""
                                id="status-unmarried"
                                required
                              />
                              <label
                                className="form-check-label"
                                htmlFor="status-unmarried"
                              >
                                Single
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 mb-4">
                    <label className="form-label">Contact Number</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-span-2 mb-4">
                    <label className="form-label">Alternative Contact</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="col-span-4">
                    <div className="form-check flex items-center mb-4">
                      <input
                        className="form-check-input border-borderColor rounded text-primary me-1"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header p-5 border-b border-borderColor">
                <h4 className="card-title">Gutters</h4>
              </div>
              <div className="card-body p-5">
                <form className="lg:grid grid-cols-6 gap-x-6">
                  <div className="col-span-3 mb-4">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-span-3 mb-4">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="col-span-3 mb-4">
                    <label htmlFor="inputEmail4" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-span-3 mb-4">
                    <label htmlFor="inputPassword4" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="col-span-6 mb-4">
                    <label htmlFor="inputAddress" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                    />
                  </div>
                  <div className="col-span-6 mb-4">
                    <label htmlFor="inputAddress2" className="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                    />
                  </div>
                  <div className="col-span-3 mb-4">
                    <label htmlFor="inputCity" className="form-label">
                      City
                    </label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-span-2 mb-4">
                    <label htmlFor="inputState" className="form-label">
                      State
                    </label>
                    <select
                      id="inputState"
                      className="form-select bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                    >
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="col-span-1 mb-4">
                    <label htmlFor="inputZip" className="form-label">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-span-6 mb-4">
                    <div className="form-check flex item-center">
                      <input
                        className="form-check-input rounded border-borderColor text-primary me-2"
                        type="checkbox"
                        id="gridCheck3"
                      />
                      <label className="form-check-label" htmlFor="gridCheck3">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div className="col-span-6">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
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

export default FormGridGutters