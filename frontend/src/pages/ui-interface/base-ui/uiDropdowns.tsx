import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import { useEffect } from "react";
import { initDropdowns } from "flowbite";


const UiDropdowns = () => {
    // Initialize Flowbite dropdowns when component mounts
    useEffect(() => {
      initDropdowns();
    }, []);
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Dropdowns</h4>
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
              Dropdowns
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* Start::row-1 */}
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-12">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <div className="card-title">Dropdowns</div>
            </div>
            <div className="card-body p-4 flex items-center">
              <div className="dropdown me-2">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown1"
                  aria-expanded="false"
                >
                  Dropdowns
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown1"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <Link
                  className="btn btn-secondary dropdown-toggle"
                  to="#"
                  role="button"
                  data-dropdown-toggle="dropdown2"
                  aria-expanded="false"
                >
                  Dropdown Link
                  <i className="ti ti-chevron-down ml-1" />
                </Link>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown2"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End::row-1 */}
      {/* Start:: row-2 */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <div className="card-title">Single dropdown buttons</div>
            </div>
            <div className="card-body flex gap-3 items-center flex-wrap p-4">
              <div className="dropdown me-2">
                <button
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown3"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown3"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown4"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown4"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-warning dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown5"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown5"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-success dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown6"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown6"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-info dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown7"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown7"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-danger dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown8"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown8"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <div className="card-title">Rounded Button Dropdowns</div>
            </div>
            <div className="card-body flex gap-3 items-center flex-wrap p-4">
              <div className="dropdown me-2">
                <button
                  className="btn btn-primary rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown9"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown9"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-secondary rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown10"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown10"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-warning rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown11"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown11"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-success rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown12"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown12"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-info rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown13"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown13"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-danger rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown14"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown14"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <div className="card-title">Outline Button Dropdowns</div>
            </div>
            <div className="card-body flex gap-3 items-center flex-wrap p-4">
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown15"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown15"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown16"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown16"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-warning dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown17"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown17"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-success dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown18"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown18"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown19"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown19"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-danger dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown20"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown20"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <div className="card-title">Rounded Outline Dropdowns</div>
            </div>
            <div className="card-body flex gap-3 items-center flex-wrap p-4">
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-primary rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown21"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown21"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-secondary rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown22"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown22"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-warning rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown23"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown23"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-success rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown24"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown24"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-info rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown25"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown25"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown me-2">
                <button
                  className="btn btn-outline-danger rounded-s-full rounded-e-full dropdown-toggle"
                  type="button"
                  data-dropdown-toggle="dropdown26"
                  aria-expanded="false"
                >
                  Action
                  <i className="ti ti-chevron-down ml-1" />
                </button>
                <ul
                  className="dropdown-menu border rounded bg-white shadow-lg w-40 z-[1] hidden"
                  id="dropdown26"
                >
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Something else here
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      to="#"
                    >
                      Separated link
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End:: row-2 */}
    </div>
    {/* Start Footer */}
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default UiDropdowns