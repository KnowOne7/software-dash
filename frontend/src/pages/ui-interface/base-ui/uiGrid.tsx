import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiGrid = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
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
              Grid System
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div className="card-header border-b p-4">
          <h5 className="card-title">Grid Example</h5>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-6 p-3 text-white bg-primary rounded-lg dark:text-title-dark">
            1 of 2
          </div>
          <div className="md:col-span-6 p-3 text-white bg-primary rounded-lg dark:text-title-dark">
            2 of 2
          </div>
          <div className="md:col-span-4 p-3 text-white bg-primary rounded-lg dark:text-title-dark">
            1 of 3
          </div>
          <div className="md:col-span-4 p-3 text-white bg-primary rounded-lg dark:text-title-dark">
            2 of 3
          </div>
          <div className="md:col-span-4 p-3 text-white bg-primary rounded-lg dark:text-title-dark">
            3 of 3
          </div>
        </div>
      </div>
      <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div className="card-header border-b p-4">
          <h5 className="card-title">Grid Example 2</h5>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-1 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-1</span>
          </div>
          <div className="md:col-span-2 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-2</span>
          </div>
          <div className="md:col-span-2 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-2</span>
          </div>
          <div className="md:col-span-3 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-3</span>
          </div>
          <div className="md:col-span-4 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-4</span>
          </div>
          <div className="md:col-span-5 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-5</span>
          </div>
          <div className="md:col-span-7 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-7</span>
          </div>
          <div className="md:col-span-6 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-6</span>
          </div>
          <div className="md:col-span-6 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-6</span>
          </div>
          <div className="md:col-span-8 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-8</span>
          </div>
          <div className="md:col-span-4 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-4</span>
          </div>
          <div className="md:col-span-9 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-9</span>
          </div>
          <div className="md:col-span-3 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-3</span>
          </div>
          <div className="md:col-span-10 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-10</span>
          </div>
          <div className="md:col-span-2 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-2</span>
          </div>
          <div className="md:col-span-12 text-center bg-primary text-white p-2 rounded-lg">
            <span>col-span-12</span>
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

export default UiGrid