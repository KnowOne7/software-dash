import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiButtonsGroup = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">
          Button Group
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
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Button Group
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Default Buttons</h5>
          </div>
          <div className="card-body btn-group-showcase p-4">
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group inline-flex"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-primary" type="button">
                    Left
                  </button>
                  <button className="btn btn-primary rounded-0" type="button">
                    Middle
                  </button>
                  <button className="btn btn-primary rounded-s-0" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-secondary" type="button">
                    Left
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Middle
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-success" type="button">
                    Left
                  </button>
                  <button className="btn btn-success" type="button">
                    Middle
                  </button>
                  <button className="btn btn-success" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-info" type="button">
                    Left
                  </button>
                  <button className="btn btn-info" type="button">
                    Middle
                  </button>
                  <button className="btn btn-info" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-warning" type="button">
                    Left
                  </button>
                  <button className="btn btn-warning" type="button">
                    Middle
                  </button>
                  <button className="btn btn-warning" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-danger" type="button">
                    Left
                  </button>
                  <button className="btn btn-danger" type="button">
                    Middle
                  </button>
                  <button className="btn btn-danger" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-light" type="button">
                    Left
                  </button>
                  <button className="btn btn-light" type="button">
                    Middle
                  </button>
                  <button className="btn btn-light" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-dark" type="button">
                    Left
                  </button>
                  <button className="btn btn-dark" type="button">
                    Middle
                  </button>
                  <button className="btn btn-dark" type="button">
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Buttons */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline button group</h5>
          </div>
          <div className="card-body btn-group-showcase p-4">
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-primary" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-primary border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-primary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-secondary" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-secondary border-l-0 border-r-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-success" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-success border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-success" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-info" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-info border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-info" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-warning" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-warning border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-warning" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-danger" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-danger border-l-0 border-r-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-danger" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-outline-light txt-dark"
                    type="button"
                  >
                    Left
                  </button>
                  <button
                    className="btn btn-outline-light txt-dark border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button
                    className="btn btn-outline-light txt-dark"
                    type="button"
                  >
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-outline-dark hover:text-white"
                    type="button"
                  >
                    Left
                  </button>
                  <button
                    className="btn btn-outline-dark border-x-0 hover:text-white"
                    type="button"
                  >
                    Middle
                  </button>
                  <button
                    className="btn btn-outline-dark hover:text-white"
                    type="button"
                  >
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Buttons */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Edges button group</h5>
          </div>
          <div className="card-body btn-group-showcase p-4">
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-primary" type="button">
                    Left
                  </button>
                  <button className="btn btn-primary" type="button">
                    Middle
                  </button>
                  <button className="btn btn-primary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-secondary" type="button">
                    Left
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Middle
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-success" type="button">
                    Left
                  </button>
                  <button className="btn btn-success" type="button">
                    Middle
                  </button>
                  <button className="btn btn-success" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-info" type="button">
                    Left
                  </button>
                  <button className="btn btn-info" type="button">
                    Middle
                  </button>
                  <button className="btn btn-info" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-warning" type="button">
                    Left
                  </button>
                  <button className="btn btn-warning" type="button">
                    Middle
                  </button>
                  <button className="btn btn-warning" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-danger" type="button">
                    Left
                  </button>
                  <button className="btn btn-danger" type="button">
                    Middle
                  </button>
                  <button className="btn btn-danger" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-light" type="button">
                    Left
                  </button>
                  <button className="btn btn-light" type="button">
                    Middle
                  </button>
                  <button className="btn btn-light" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-dark" type="button">
                    Left
                  </button>
                  <button className="btn btn-dark" type="button">
                    Middle
                  </button>
                  <button className="btn btn-dark" type="button">
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Buttons */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline Edges button</h5>
          </div>
          <div className="card-body btn-group-showcase p-4">
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-primary" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-primary border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-primary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-secondary" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-secondary border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-success" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-success border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-success" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-info" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-info border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-info" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-warning" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-warning border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-warning" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-danger" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-danger !border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-danger" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-outline-light txt-dark"
                    type="button"
                  >
                    Left
                  </button>
                  <button
                    className="btn btn-outline-light txt-dark border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button
                    className="btn btn-outline-light txt-dark"
                    type="button"
                  >
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div
                  className="btn-group btn-group-pill"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-outline-dark hover:text-white"
                    type="button"
                  >
                    Left
                  </button>
                  <button
                    className="btn btn-outline-dark border-x-0 hover:text-white"
                    type="button"
                  >
                    Middle
                  </button>
                  <button
                    className="btn btn-outline-dark hover:text-white"
                    type="button"
                  >
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Buttons */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Flat button group</h5>
          </div>
          <div className="card-body btn-group-showcase p-4">
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-primary" type="button">
                    Left
                  </button>
                  <button className="btn btn-primary" type="button">
                    Middle
                  </button>
                  <button className="btn btn-primary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-secondary" type="button">
                    Left
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Middle
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-success" type="button">
                    Left
                  </button>
                  <button className="btn btn-success" type="button">
                    Middle
                  </button>
                  <button className="btn btn-success" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-info" type="button">
                    Left
                  </button>
                  <button className="btn btn-info" type="button">
                    Middle
                  </button>
                  <button className="btn btn-info" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-warning" type="button">
                    Left
                  </button>
                  <button className="btn btn-warning" type="button">
                    Middle
                  </button>
                  <button className="btn btn-warning" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-danger" type="button">
                    Left
                  </button>
                  <button className="btn btn-danger" type="button">
                    Middle
                  </button>
                  <button className="btn btn-danger" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-light" type="button">
                    Left
                  </button>
                  <button className="btn btn-light" type="button">
                    Middle
                  </button>
                  <button className="btn btn-light" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-dark" type="button">
                    Left
                  </button>
                  <button className="btn btn-dark" type="button">
                    Middle
                  </button>
                  <button className="btn btn-dark" type="button">
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Buttons */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline flat button</h5>
          </div>
          <div className="card-body btn-group-showcase p-4">
            <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-primary" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-primary border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-primary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-secondary" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-secondary border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-secondary" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-success" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-success border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-success" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-info" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-info border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-info" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-warning" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-warning border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-warning" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button className="btn btn-outline-danger" type="button">
                    Left
                  </button>
                  <button
                    className="btn btn-outline-danger border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button className="btn btn-outline-danger" type="button">
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-outline-light txt-dark"
                    type="button"
                  >
                    Left
                  </button>
                  <button
                    className="btn btn-outline-light txt-dark border-x-0"
                    type="button"
                  >
                    Middle
                  </button>
                  <button
                    className="btn btn-outline-light txt-dark"
                    type="button"
                  >
                    Right
                  </button>
                </div>
              </div>
              <div className="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div
                  className="btn-group btn-group-square"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-outline-dark hover:text-white"
                    type="button"
                  >
                    Left
                  </button>
                  <button
                    className="btn btn-outline-dark border-x-0 hover:text-white"
                    type="button"
                  >
                    Middle
                  </button>
                  <button
                    className="btn btn-outline-dark hover:text-white"
                    type="button"
                  >
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
        <div className="col-span-3">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b">
              <h5 className="card-title">Default Buttons</h5>
            </div>
            <div className="card-body p-4">
              <div className="btn-group">
                <button type="button" className="btn btn-primary">
                  Left
                </button>
                <button type="button" className="btn btn-primary border-x-0">
                  Middle
                </button>
                <button type="button" className="btn btn-primary">
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b">
              <h5 className="card-title">Default Buttons</h5>
            </div>
            <div className="card-body p-4">
              <div className="btn-group">
                <button type="button" className="btn btn-outline-primary">
                  Left
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary border-x-0"
                >
                  Middle
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b">
              <h5 className="card-title">Default Buttons</h5>
            </div>
            <div className="card-body p-4">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-soft-danger btn-outline-danger"
                >
                  Left
                </button>
                <button
                  type="button"
                  className="btn btn-soft-danger btn-outline-danger border-x-0"
                >
                  Middle
                </button>
                <button
                  type="button"
                  className="btn btn-soft-danger btn-outline-danger"
                >
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b">
              <h5 className="card-title">Default Buttons</h5>
            </div>
            <div className="card-body p-4">
              <div className="btn-group">
                <button type="button" className="btn btn-soft-danger">
                  Left
                </button>
                <button type="button" className="btn btn-soft-danger">
                  Middle
                </button>
                <button type="button" className="btn btn-soft-danger">
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header justify-between border-b p-4">
              <div className="card-title">Mixed styles</div>
            </div>
            <div className="card-body p-4">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn btn-danger">
                  Left
                </button>
                <button type="button" className="btn btn-warning">
                  Middle
                </button>
                <button type="button" className="btn btn-success">
                  Right
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 justify-between">
              <div className="card-title">Nesting</div>
            </div>
            <div className="card-body p-4">
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-primary">
                  1
                </button>
                <button type="button" className="btn btn-primary">
                  2
                </button>
                <div className="" role="group">
                  <button
                    type="button"
                    className="btn btn-primary rounded-s-none dropdown-toggle"
                    data-dropdown-toggle="btn-dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </button>
                  <ul
                    className="dropdown-menu p-4 border rounded bg-white shadow-lg block"
                    id="btn-dropdown"
                  >
                    <li>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        Dropdown link
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        to="#"
                      >
                        Dropdown link
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="btn-group me-2">
                <button className="btn btn-primary">
                  <i className="fa fa-bold" />
                </button>
                <button className="btn btn-secondary">
                  <i className="fa fa fa-italic" />
                </button>
                <button className="btn btn-success rounded-none">
                  <i className="fa fa-file-image" />
                </button>
                <button className="btn btn-info">
                  <i className="fa fa-paperclip" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 justify-between">
              <div className="card-title">Checkbox button groups</div>
            </div>
            <div className="card-body p-4">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <label className="btn btn-outline-primary" htmlFor="btncheck1">
                  Checkbox 1
                </label>
                <input
                  type="checkbox"
                  className="btn-check hidden"
                  id="btncheck1"
                />
                <label
                  className="btn btn-outline-primary rounded-none border-x-0"
                  htmlFor="btncheck2"
                >
                  Checkbox 2
                </label>
                <input
                  type="checkbox"
                  className="btn-check hidden"
                  id="btncheck2"
                />
                <input
                  type="checkbox"
                  className="btn-check  hidden"
                  id="btncheck3"
                />
                <label className="btn btn-outline-primary" htmlFor="btncheck3">
                  Checkbox 3
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 justify-between">
              <div className="card-title">Radio button groups</div>
            </div>
            <div className="card-body p-4 radio-button-group">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <label className="btn btn-outline-primary" htmlFor="btnradio1">
                  Radio 1
                </label>
                <input
                  type="radio"
                  className="btn-check hidden"
                  name="btnradio"
                  id="btnradio1"
                  defaultChecked
                />
                <label
                  className="btn btn-outline-primary rounded-none border-x-0"
                  htmlFor="btnradio2"
                >
                  Radio 2
                </label>
                <input
                  type="radio"
                  className="btn-check hidden"
                  name="btnradio"
                  id="btnradio2"
                />
                <input
                  type="radio"
                  className="btn-check hidden"
                  name="btnradio"
                  id="btnradio3"
                />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">
                  Radio 3
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button toolbar</h5>
          </div>
          <div className="card-body p-4">
            <div
              className="btn-toolbar flex mb-4"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2 my-1"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-primary">
                  1
                </button>
                <button type="button" className="btn btn-primary">
                  2
                </button>
                <button type="button" className="btn btn-primary rounded-none">
                  3
                </button>
                <button type="button" className="btn btn-primary">
                  4
                </button>
              </div>
              <div
                className="btn-group me-2 my-1"
                role="group"
                aria-label="Second group"
              >
                <button type="button" className="btn btn-secondary">
                  5
                </button>
                <button type="button" className="btn btn-secondary">
                  6
                </button>
                <button type="button" className="btn btn-secondary">
                  7
                </button>
              </div>
              <div className="my-1" role="group" aria-label="Third group">
                <button type="button" className="btn btn-info rounded">
                  8
                </button>
              </div>
            </div>
            <div
              className="btn-toolbar flex items-center mb-3"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2 my-1"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-outline-secondary">
                  1
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-x-0"
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-none border-r-0"
                >
                  3
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  4
                </button>
              </div>
              <div className="input-group flex items-center relative my-1">
                <span className="py-2 px-3 border border-borderColor rounded-s-lg text-gray-900">
                  @
                </span>
                <input
                  type="text"
                  className="form-control rounded-s-none"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon"
                />
              </div>
            </div>
            <div
              className="btn-toolbar flex items-center justify-between"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group me-2 my-1"
                role="group"
                aria-label="First group"
              >
                <button type="button" className="btn btn-outline-secondary">
                  1
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary border-x-0"
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-none border-r-0"
                >
                  3
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  4
                </button>
              </div>
              <div className="input-group flex items-center my-1">
                <span className="py-2 px-3 border border-borderColor rounded-s-lg text-gray-900">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Input group example"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Vertical</h5>
          </div>
          <div className="card-body p-4">
            <div className="grid grid-cols-2 xl:grid-cols-12 gap-6">
              <div className="col-span-3">
                <div
                  className="btn-group-vertical flex flex-col"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <button
                    type="button"
                    className="btn btn-primary rounded-b-none"
                  >
                    Button
                  </button>
                  <div className="" role="group">
                    <button
                      type="button"
                      className="btn bg-primary text-white flex items-center justify-center w-full rounded-none dropdown-toggle"
                      data-dropdown-toggle="dropdown6"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul
                      className="dropdown-menu p-4 border rounded bg-white shadow-lg hidden"
                      id="dropdown6"
                      style={{}}
                    >
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropstart" role="group">
                    <button
                      type="button"
                      className="btn btn-primary flex items-center justify-center rounded-none w-full dropdown-toggle"
                      data-dropdown-toggle="dropdown3"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul
                      className="dropdown-menu  p-4 border rounded bg-white shadow-lg hidden"
                      id="dropdown3"
                      style={{}}
                    >
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="dropend" role="group">
                    <button
                      type="button"
                      className="btn btn-primary flex items-center justify-center rounded-none w-full dropdown-toggle"
                      data-dropdown-toggle="dropdown4"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul
                      className="dropdown-menu  p-4 border rounded bg-white shadow-lg hidden"
                      id="dropdown4"
                      style={{}}
                    >
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="" role="group">
                    <button
                      type="button"
                      className="btn btn-primary flex items-center justify-center rounded-t-none w-full dropdown-toggle"
                      data-dropdown-toggle="dropdown5"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul
                      className="dropdown-menu p-4 border rounded bg-white shadow-lg hidden"
                      id="dropdown5"
                      style={{}}
                    >
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                        >
                          Dropdown link
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div
                  className="btn-group-vertical flex flex-col"
                  role="group"
                  aria-label="Vertical button group"
                >
                  <button
                    type="button"
                    className="btn btn-primary rounded-b-none"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-none"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-none"
                  >
                    Button
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-t-none"
                  >
                    Button
                  </button>
                </div>
              </div>
              <div className="col-span-3">
                <div
                  className="btn-group-vertical flex flex-col"
                  role="group"
                  aria-label="Vertical radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check hidden"
                    name="vbtn-radio"
                    id="vbtn-radio1"
                    defaultChecked
                  />
                  <label
                    className="btn btn-outline-primary rounded-b-none"
                    htmlFor="vbtn-radio1"
                  >
                    Radio 1
                  </label>
                  <input
                    type="radio"
                    className="btn-check hidden"
                    name="vbtn-radio"
                    id="vbtn-radio2"
                  />
                  <label
                    className="btn btn-outline-primary rounded-none border-t-0 border-b-0"
                    htmlFor="vbtn-radio2"
                  >
                    Radio 2
                  </label>
                  <input
                    type="radio"
                    className="btn-check hidden"
                    name="vbtn-radio"
                    id="vbtn-radio3"
                  />
                  <label
                    className="btn btn-outline-primary rounded-t-none"
                    htmlFor="vbtn-radio3"
                  >
                    Radio 3
                  </label>
                </div>
              </div>
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

export default UiButtonsGroup