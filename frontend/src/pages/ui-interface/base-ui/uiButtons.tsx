import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";

const UiButtons = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Buttons</h4>
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
              Buttons
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Primary Buttons Sizes</h5>
          </div>
          <div className="card-body p-5">
            <button type="button" className="btn btn-primary btn-sm me-2">
              Button
            </button>
            <button type="button" className="btn btn-primary me-2">
              Button
            </button>
            <button type="button" className="btn btn-primary btn-lg">
              Button
            </button>
          </div>
        </div>
        {/* /Buttons */}
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Icon Buttons</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button className="btn btn-icon btn-primary">
                <i className="fas fa-bell" />
              </button>
              <button className="btn btn-icon btn-success">
                <i className="fas fa-bell" />
              </button>
              <button className="btn btn-icon btn-soft-primary rounded-full">
                <i className="fas fa-bell" />
              </button>
              <button className="btn btn-icon btn-soft-success rounded-full">
                <i className="fas fa-bell" />
              </button>
              <button className="btn btn-icon btn-outline-primary rounded-full">
                <i className="fas fa-bell" />
              </button>
              <button className="btn btn-icon btn-outline-success rounded-full">
                <i className="fas fa-bell" />
              </button>
              <button type="button" className="btn btn-primary">
                <i className="fas fa-bell me-2" />
                Like
              </button>
              <button type="button" className="btn btn-success">
                <i className="fas fa-bell me-2" />
                Like
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Default Buttons</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn btn-primary">
                Primary
              </button>
              <button type="button" className="btn btn-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-success">
                Success
              </button>
              <button type="button" className="btn btn-danger">
                Danger
              </button>
              <button type="button" className="btn btn-warning">
                Warning
              </button>
              <button type="button" className="btn btn-info">
                Info
              </button>
              <button type="button" className="btn btn-light">
                Light
              </button>
              <button type="button" className="btn btn-dark">
                Dark
              </button>
              <button type="button" className="btn btn-link">
                Link
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline Buttons</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
              <button type="button" className="btn btn-outline-danger">
                Danger
              </button>
              <button type="button" className="btn btn-outline-warning">
                Warning
              </button>
              <button type="button" className="btn btn-outline-info">
                Info
              </button>
              <button type="button" className="btn btn-outline-light">
                Light
              </button>
              <button type="button" className="btn btn-outline-dark">
                Dark
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Rounded Outline Buttons</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-outline-primary rounded-full"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-full"
              >
                Secondary
              </button>
              <button
                type="button"
                className="btn btn-outline-success rounded-full"
              >
                Success
              </button>
              <button
                type="button"
                className="btn btn-outline-danger rounded-full"
              >
                Danger
              </button>
              <button
                type="button"
                className="btn btn-outline-warning rounded-full"
              >
                Warning
              </button>
              <button
                type="button"
                className="btn btn-outline-info rounded-full"
              >
                Info
              </button>
              <button
                type="button"
                className="btn btn-outline-light rounded-full"
              >
                Light
              </button>
              <button
                type="button"
                className="btn btn-outline-dark rounded-full"
              >
                Dark
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Soft Buttons</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn btn-soft-primary">
                Primary
              </button>
              <button type="button" className="btn btn-soft-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-soft-success">
                Success
              </button>
              <button type="button" className="btn btn-soft-danger">
                Danger
              </button>
              <button type="button" className="btn btn-soft-warning">
                Warning
              </button>
              <button type="button" className="btn btn-soft-info">
                Info
              </button>
              <button type="button" className="btn btn-soft-light">
                Light
              </button>
              <button type="button" className="btn btn-soft-dark">
                Dark
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Soft Rounded Button</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-soft-primary rounded-full"
              >
                Primary
              </button>
              <button
                type="button"
                className="btn btn-soft-secondary rounded-full"
              >
                Secondary
              </button>
              <button
                type="button"
                className="btn btn-soft-success rounded-full"
              >
                Success
              </button>
              <button
                type="button"
                className="btn btn-soft-danger rounded-full"
              >
                Danger
              </button>
              <button
                type="button"
                className="btn btn-soft-warning rounded-full"
              >
                Warning
              </button>
              <button type="button" className="btn btn-soft-info rounded-full">
                Info
              </button>
              <button type="button" className="btn btn-soft-light rounded-full">
                Light
              </button>
              <button type="button" className="btn btn-soft-dark rounded-full">
                Dark
              </button>
            </div>
          </div>
        </div>
        {/* /Buttons */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-x-6">
        {/* Buttons */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button Loader</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn btn-primary">
                <i className="fas fa-spinner fa-spin me-2" />
                Loading...
              </button>
              <button type="button" className="btn btn-secondary">
                <i className="fas fa-spinner fa-spin me-2" />
                Loading...
              </button>
              <button type="button" className="btn btn-warning">
                <i className="fas fa-spinner fa-spin me-2" />
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

  );
};

export default UiButtons; 
