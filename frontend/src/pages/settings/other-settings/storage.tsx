import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"

const Storage = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">Settings</h4>
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
                  <h5 className="mb-3 text-[17px]">Other Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.sitemap}
                      className="d-block p-2 font-medium rounded hover:text-primary transition-all"
                    >
                      Sitemap
                    </Link>
                    <Link
                      to={all_routes.clearCache}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Clear Cache
                    </Link>
                    <Link
                      to={all_routes.storage}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded bg-rose-100 text-primary border-l border-primary"
                    >
                      Storage
                    </Link>
                    <Link
                      to={all_routes.cronjob}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Cronjob
                    </Link>
                    <Link
                      to={all_routes.banIpAddrress}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Ban IP Address
                    </Link>
                    <Link
                      to={all_routes.systemBackup}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      System Backup
                    </Link>
                    <Link
                      to={all_routes.databaseBackup}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Database Backup
                    </Link>
                    <Link
                      to={all_routes.systemUpdate}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      System Update
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Storage</h5>
                </div>
                {/* start row */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-4 gap-x-4">
                  {/* Storage */}
                  <div className="sm:col-span-6">
                    <div className="border border-borderColor rounded p-3 flex items-center justify-between shadow">
                      <div className="flex items-center">
                        <span className="avatar avatar-lg bg-light-100 border rounded border-borderColor flex items-center justify-center flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/icons/storage-icon-01.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </span>
                        <h6 className="font-medium fs-14 mb-0">Local Storage</h6>
                      </div>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultValue=""
                          className="sr-only peer"
                          defaultChecked
                        />
                        <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                      </label>
                    </div>
                  </div>
                  {/* /Storage */}
                  {/* Storage */}
                  <div className="sm:col-span-6">
                    <div className="border border-borderColor rounded p-3 flex items-center justify-between shadow">
                      <div className="flex items-center">
                        <span className="avatar avatar-lg bg-light-100 border rounded border-borderColor flex items-center justify-center flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/icons/storage-icon-02.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </span>
                        <h6 className="font-medium fs-14 mb-0">AWS</h6>
                      </div>
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="me-2 flex text-[22px] items-center"
                          data-modal-target="add_modal"
                          data-modal-toggle="add_modal"
                        >
                          <i className="ti ti-settings fs-24" />
                        </Link>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* /Storage */}
                </div>
                {/* end row */}
              </div>
            </div>
          </div>


        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}

      <>
        {/* Add AWS */}
        <div
          id="add_modal"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">AWS</h5>
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
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4">
                    <div className="md:col-span-12">
                      <label className="form-label">
                        AWS Access Key <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Secret Key <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Bucket Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Region <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Base URL <span className="text-danger">*</span>
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
        {/* /Add AWS */}
      </>


    </>

  )
}

export default Storage;