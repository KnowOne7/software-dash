import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiSpinner = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Spinners</h4>
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
                to="javascript:void(0);"
                className="hover:underline text-gray-700"
              >
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Spinners
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Spinner */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Border Spinner</h5>
          </div>
          <div className="card-body p-5">
            <div
              className="spinner-border border-gray-200"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
        {/* /Spinner */}
        {/* Color Spinner */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Spinner</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <div
                className="spinner-border border-primary"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-secondary"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-success"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-danger"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-warning"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-info"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-light"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-dark"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* /Color Spinner */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Grow Spinner */}
        <div className="col-md-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Grow Spinner</h5>
            </div>
            <div className="card-body p-5">
              <div className="spinner-grow bg-gray-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* /Grow Spinner */}
        {/* Colored Grow Spinner */}
        <div className="col-md-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Colored Grow Spinner</h5>
            </div>
            <div className="card-body flex items-center p-5">
              <div className="spinner-grow bg-primary me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-secondary me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-success me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-danger me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-warning me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-info me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-light me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-dark me-0" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* /Colored Grow Spinner */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/*Flex Alignment */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Alignment</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex justify-center">
              <div
                className="spinner-border border-gray-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* /Flex Alignment */}
        {/* Float Alignment */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Placement</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-center justify-between">
              <strong>Loading...</strong>
              <div
                className="spinner-border border-gray-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* /Float Alignment */}
        {/* Different Sizes */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Size</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-end flex-wrap gap-2">
              <div
                className="spinner-border spinner-border-sm border-gray-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-grow spinner-grow-sm bg-gray-500 me-3"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border border-gray-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow bg-gray-500 me-3" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-border spinner-border-lg border-gray-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <div
                className="spinner-grow spinner-grow-lg bg-gray-500"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        {/* /Different Sizes */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Buttons Spinner</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button
                className="btn btn-primary-light flex items-center"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm border-primary"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-primary-light border border-primary text-primary text-sm flex items-center"
                disabled
              >
                <svg
                  className="spinner-border spinner-border-sm border-primary mr-2"
                  viewBox="0 0 24 24"
                />
                Loading...
              </button>
              <button
                className="btn btn-primary-light flex items-center"
                type="button"
                disabled
              >
                <span
                  className="spinner-grow spinner-grow-sm bg-primary"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </span>
              </button>
              <button
                type="button"
                className="btn btn-primary-light border border-primary text-primary flex items-center"
                disabled
              >
                <svg
                  className="spinner-grow spinner-grow-sm bg-primary mr-2"
                  viewBox="0 0 24 24"
                />
                Loading...
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
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

export default UiSpinner