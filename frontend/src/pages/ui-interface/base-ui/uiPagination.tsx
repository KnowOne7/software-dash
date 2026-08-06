import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiPagination = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Pagination</h4>
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
              Pagination
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* start grid */}
      <div className="grid md:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Default</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                Pre
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Default With Icons</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                <i className="ti ti-chevron-left" />
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                <i className="ti ti-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Default with Active</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                Pre
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-primary text-white hover:bg-primary hover:text-white"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Default with Active Ghost</h5>
          </div>
          <div className="card-body p-4">
            <div className="grid w-full grid-cols-1">
              <div className="inline-flex">
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  Pre
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"
                >
                  01
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  02
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  03
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Left Align</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                <i className="ti ti-chevron-left" />
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                <i className="ti ti-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Center Align</h5>
          </div>
          <div className="card-body p-4">
            <div className="flex justify-center items-center">
              <div className="inline-flex">
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  <i className="ti ti-chevron-left" />
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  01
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  02
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  03
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Right Align</h5>
          </div>
          <div className="card-body p-4">
            <div className="flex justify-end items-end">
              <div className="inline-flex">
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-semibold first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  <i className="ti ti-chevron-left" />
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  01
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  02
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  03
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
                >
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Custom Pagination</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex flex-wrap gap-1">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium rounded-lg border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                <i className="ti ti-chevron-left me-1" /> Pre
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor bg-primary text-white hover:bg-primary hover:text-white"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                ...
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                10
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium rounded-lg border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                Next <i className="ti ti-chevron-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Soft Pagination</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex gap-1">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium rounded-lg border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                <i className="ti ti-chevron-left" />
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                ...
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium rounded-lg border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                10
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium rounded-lg border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                <i className="ti ti-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Pagination 1</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex flex-wrap gap-1">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                <i className="ti ti-chevron-left me-1" /> Pre
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-borderColor bg-primary text-white hover:bg-primary hover:text-white"
              >
                01
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                02
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                03
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                ...
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                10
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor bg-light text-dark hover:bg-primary hover:text-white"
              >
                Next <i className="ti ti-chevron-right ms-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Pagination 2</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex gap-1">
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                <i className="ti ti-chevron-left" />
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-primary hover:border-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"
              >
                01
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                02
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                03
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                ...
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                10
              </Link>
              <Link
                to="#"
                className="w-7.5 h-7.5 inline-flex items-center justify-center text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                <i className="ti ti-chevron-right" />
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Pagination 3</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex">
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                Pre
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor border-b-primary hover:border-b-primary bg-primary-50 text-primary hover:bg-primary-50 hover:text-primary"
              >
                01
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                02
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                03
              </Link>
              <Link
                to="#"
                className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-lg last:rounded-e-lg rounded-none border border-borderColor hover:border-b-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Pagination 4</h5>
          </div>
          <div className="card-body p-4">
            <div className="inline-flex flex-wrap gap-1">
              <div>
                <Link
                  to="#"
                  className="px-2 py-2 inline-flex text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  <i className="ti ti-chevrons-left" />
                </Link>
                <Link
                  to="#"
                  className="px-2 py-2 inline-flex text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  <i className="ti ti-chevron-left" />
                </Link>
              </div>
              <div className="flex">
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-borderColor bg-light text-dark  hover:text-primary"
                >
                  01
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-s-0 border-borderColor bg-light text-primary hover:text-primary"
                >
                  02
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-e-0 border-s-0 border-borderColor bg-light text-dark hover:text-primary"
                >
                  03
                </Link>
                <Link
                  to="#"
                  className="px-2 py-1.5 inline-flex text-xs font-medium first:rounded-s-full last:rounded-e-full rounded-none border border-s-0 border-borderColor bg-light text-dark  hover:text-primary"
                >
                  04
                </Link>
              </div>
              <div>
                <Link
                  to="#"
                  className="px-2 py-2 inline-flex text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  <i className="ti ti-chevron-right" />
                </Link>
                <Link
                  to="#"
                  className="px-2 py-2 inline-flex text-xs font-medium rounded-full border border-borderColor hover:border-primary bg-light text-dark hover:bg-primary-50 hover:text-primary"
                >
                  <i className="ti ti-chevrons-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end grid */}
    </div>
    {/* Start Footer */}
 <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>


  )
}

export default UiPagination