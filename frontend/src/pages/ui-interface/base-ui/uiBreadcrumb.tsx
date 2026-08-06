import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";

const UiBreadcrumb = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Breadcrumb</h4>
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
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Breadcrumb
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b p-4  border-borderColor">
            <h5 className="card-title">Default Breadcrumb</h5>
          </div>
          <div className="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center mb-2">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Library
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center mb-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Library</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b p-4  border-borderColor">
            <h5 className="card-title">Arrow Style</h5>
          </div>
          <div className="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center breadcrumb-arrow  mb-2">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Library
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center breadcrumb-arrow mb-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Library</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b p-4  border-borderColor">
            <h5 className="card-title">Pipe Style</h5>
          </div>
          <div className="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center breadcrumb-pipe mb-2">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Library
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center breadcrumb-pipe mb-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Library</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b p-4  border-borderColor">
            <h5 className="card-title">Line Style</h5>
          </div>
          <div className="card-body p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-2">
                <li className="breadcrumb-item active" aria-current="page">
                  Home
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center breadcrumb-line mb-2">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Library
                </li>
              </ol>
            </nav>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb flex items-center breadcrumb-line mb-0">
                <li className="breadcrumb-item">
                  <Link to="#">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="#">Library</Link>
                </li>
                <li
                  className="breadcrumb-item text-gray-900 active"
                  aria-current="page"
                >
                  Data
                </li>
              </ol>
            </nav>
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

export default UiBreadcrumb;
