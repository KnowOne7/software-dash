import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";


const UiProgress = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Progress</h4>
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
              Progress
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Basic Progress</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                style={{ width: "0%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                style={{ width: "25%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                style={{ width: "50%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                style={{ width: "75%" }}
              />
            </div>
            <div className="progress mb-0">
              <div
                className="progress-bar bg-primary"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Colored Progress</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-secondary"
                style={{ width: "20%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-warning"
                style={{ width: "40%" }}
              />
            </div>
            <div className="progress mb-4">
              <div className="progress-bar bg-info" style={{ width: "60%" }} />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success"
                style={{ width: "80%" }}
              />
            </div>
            <div className="progress mb-0">
              <div
                className="progress-bar bg-danger"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Striped Progress</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary progress-bar-striped"
                style={{ width: "10%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-secondary progress-bar-striped"
                style={{ width: "20%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-info progress-bar-striped"
                style={{ width: "60%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success progress-bar-striped"
                style={{ width: "80%" }}
              />
            </div>
            <div className="progress mb-0">
              <div
                className="progress-bar bg-danger progress-bar-striped"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Progress Height</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress progress-xs mb-4">
              <div
                className="progress-bar progress-bar-xs bg-primary"
                style={{ width: "10%" }}
              />
            </div>
            <div className="progress progress-sm mb-4">
              <div
                className="progress-bar progress-bar-sm bg-primary"
                style={{ width: "25%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary"
                style={{ width: "50%" }}
              />
            </div>
            <div className="progress progress-lg mb-4">
              <div
                className="progress-bar progress-bar-lg bg-primary"
                style={{ width: "75%" }}
              />
            </div>
            <div className="progress progress-xl mb-0">
              <div
                className="progress-bar progress-bar-xl bg-primary"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Progress With Labels</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style={{ width: "10%" }}
              >
                10%
              </div>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-secondary text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style={{ width: "20%" }}
              >
                20%
              </div>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style={{ width: "40%" }}
              >
                40%
              </div>
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-info text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style={{ width: "60%" }}
              >
                60%
              </div>
            </div>
            <div className="progress mb-0">
              <div
                className="progress-bar bg-warning text-white text-center p-0.5 text-xs leading-none flex flex-col justify-center overflow-hidden"
                style={{ width: "80%" }}
              >
                80%
              </div>
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Multiple bars With Sizes</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress-stacked progress-xs flex mb-4">
              <div
                className="progress-bar bg-primary rounded-s"
                style={{ width: "5%" }}
              />
              <div
                className="progress-bar bg-secondary"
                style={{ width: "10%" }}
              />
              <div
                className="progress-bar bg-success"
                style={{ width: "15%" }}
              />
            </div>
            <div className="progress-stacked progress-sm flex mb-4">
              <div
                className="progress-bar bg-warning rounded-s"
                style={{ width: "10%" }}
              />
              <div className="progress-bar bg-info" style={{ width: "15%" }} />
              <div
                className="progress-bar bg-danger"
                style={{ width: "20%" }}
              />
            </div>
            <div className="progress-stacked flex mb-4">
              <div
                className="progress-bar bg-info rounded-s"
                style={{ width: "15%" }}
              />
              <div
                className="progress-bar bg-success"
                style={{ width: "20%" }}
              />
              <div
                className="progress-bar bg-primary"
                style={{ width: "25%" }}
              />
            </div>
            <div className="progress-stacked progress-lg flex mb-4">
              <div
                className="progress-bar bg-purple rounded-s"
                style={{ width: "20%" }}
              />
              <div
                className="progress-bar bg-success"
                style={{ width: "25%" }}
              />
              <div
                className="progress-bar bg-primary"
                style={{ width: "30%" }}
              />
            </div>
            <div className="progress-stacked progress-xl flex mb-0">
              <div
                className="progress-bar bg-success rounded-s"
                style={{ width: "25%" }}
              />
              <div
                className="progress-bar bg-danger"
                style={{ width: "30%" }}
              />
              <div
                className="progress-bar bg-warning"
                style={{ width: "35%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Striped Progress</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary progress-bar-striped animate-progress-bar-animated"
                style={{ width: "10%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-secondary progress-bar-striped animate-progress-bar-animated"
                style={{ width: "20%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-info progress-bar-striped animate-progress-bar-animated"
                style={{ width: "60%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success progress-bar-striped animate-progress-bar-animated"
                style={{ width: "80%" }}
              />
            </div>
            <div className="progress mb-0">
              <div
                className="progress-bar bg-danger progress-bar-striped animate-progress-bar-animated"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
        {/* Progress */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Gradient Progress</h5>
          </div>
          <div className="card-body p-5">
            <div className="progress mb-4">
              <div
                className="progress-bar bg-primary-gradient"
                style={{ width: "10%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-secondary-gradient"
                style={{ width: "20%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-success-gradient"
                style={{ width: "40%" }}
              />
            </div>
            <div className="progress mb-4">
              <div
                className="progress-bar bg-info-gradient"
                style={{ width: "60%" }}
              />
            </div>
            <div className="progress mb-0">
              <div
                className="progress-bar bg-warning-gradient"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        {/* /Progress */}
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

export default UiProgress;
