import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import { all_routes } from "../../../routes/all_routes";

const Prefixes = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Settings
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                  <li>
                    <Link
                      to={all_routes.dealsDashboard}
                      className="hover:underline text-gray-700"
                    >
                      Home
                    </Link>
                    <span>
                      <i className="ti ti-chevron-right" />
                    </span>
                  </li>
                  <li className="text-dark font-medium" aria-current="page">
                    Settings
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Refresh Button */}
              <button
                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Refresh"
              >
                <i className="ti ti-refresh" />
              </button>
              {/* Collapse Button */}
              <button
                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Collapse"
                id="collapse-header"
              >
                <i className="ti ti-transition-top" />
              </button>
            </div>
          </div>
          {/* End Page Header */}
          <SettingsTopbar />
          {/* end card */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
            <div className="xl:col-span-3 theiaStickySidebar">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="settings-sidebar">
                  <h5 className="mb-3 text-[17px]">Website Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.companySettings}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded "
                    >
                      Company Settings
                    </Link>
                    <Link
                      to={all_routes.localization}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Localization
                    </Link>
                    <Link
                      to={all_routes.prefixes}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
                    >
                      Prefixes
                    </Link>
                    <Link
                      to={all_routes.preference}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Preference
                    </Link>
                    <Link
                      to={all_routes.appearance}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Appearance
                    </Link>
                    <Link
                      to={all_routes.languageWeb}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Language
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Prefixes</h5>
                </div>
                <form>
                  <div className="border-b border-borderColor pb-2 mb-4">
                    {/* start row */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Products</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="SKU - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Supplier</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="SUP - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Purchase</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="PU - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Purchase Return</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="PR - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Sales</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="SA - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Sales Return</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="SR -  "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Customer</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="CT - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Expense</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="EX - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Stock Transfer</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="ST -  "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Stock Adjustment</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="SA -  "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Sales Order</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="SO - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Invoice</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="INV -  "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Estimation</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="EST - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Transaction</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="TRN - "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Employee</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="EMP -  "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                      <div className="md:col-span-3 sm:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">Purchase Return</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="PR -  "
                          />
                        </div>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  <div className="flex items-center justify-end flex-wrap gap-2">
                    <Link to="#" className="btn btn-sm btn-light">
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-sm btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Prefixes;
