import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiTypography = () => {
  return (
<>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Typography</h4>
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
              Typography
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* Line Tabs */}
      <div className="grid grid-cols-1 grid-cols-12 gap-6">
        <div className="md:col-span-6">
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor p-4 border-b">
              <h5 className="card-title">Headings Tags</h5>
            </div>
            <div className="card-body p-4">
              <h1 className="mb-3">h1. Bootstrap heading</h1>
              <h2 className="mb-3">h2. Bootstrap heading</h2>
              <h3 className="mb-3">h3. Bootstrap heading</h3>
              <h4 className="mb-3">h4. Bootstrap heading</h4>
              <h5 className="mb-3">h5. Bootstrap heading</h5>
              <h6 className="mb-0">h6. Bootstrap heading</h6>
            </div>
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor p-4 border-b">
              <h5 className="card-title">Heading Class Names</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-4xl font-bold text-gray-900 mb-3">
                h1. Bootstrap heading
              </p>
              <p className="text-3xl font-bold text-gray-900 mb-3">
                h2. Bootstrap heading
              </p>
              <p className="text-2xl font-bold text-gray-900 mb-3">
                h3. Bootstrap heading
              </p>
              <p className="text-lg font-bold text-gray-900 mb-3">
                h4. Bootstrap heading
              </p>
              <p className="text-md font-bold text-gray-900 mb-3">
                h5. Bootstrap heading
              </p>
              <p className="text-sm font-bold text-gray-900 mb-0">
                h6. Bootstrap heading
              </p>
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

export default UiTypography