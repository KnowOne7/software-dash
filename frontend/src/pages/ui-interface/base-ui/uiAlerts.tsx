import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"



const UiAlerts = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Alerts</h4>
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
              Alerts
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* Start Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-0">Basic Alerts</h5>
          </div>
          <div className="card-body p-5">
            <div className="space-y-4">
              <div
                className="py-2.5 px-3.5 text-[13px] bg-primary rounded text-white mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-secondary rounded text-white mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-success rounded text-white mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-danger rounded text-white mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-warning rounded text-white mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-info rounded text-white mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-light rounded text-default mb-3"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
              <div
                className="py-2.5 px-3.5 text-[13px] bg-dark rounded text-white mb-0"
                role="alert"
              >
                A simple primary alert—check it out!
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-0">Ghost Alerts</h5>
          </div>
          <div className="card-body p-5">
            <div className="space-y-4">
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-primary/10 rounded text-[13px] text-primary mb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-secondary/10 rounded text-[13px] text-secondary mb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-success/10 rounded text-[13px] text-success mb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-danger/10 rounded text-[13px] text-danger mb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-warning/10 rounded text-[13px] text-warning mb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-info/10 rounded text-[13px] text-info mb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-light rounded text-[13px] text-bodymb-3"
              >
                This is a simple primary alert
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 bg-dark/10 rounded text-[13px] text-dark mb-0"
              >
                This is a simple primary alert
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Grid */}
      {/* Start Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-0">Outline Alerts</h5>
          </div>
          <div className="card-body p-5">
            <div className="gap-4">
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-primary rounded text-primary text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-secondary rounded text-secondary text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-success rounded text-success text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-danger rounded text-danger text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-warning rounded text-warning text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-info rounded text-info text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-color rounded text-body text-[13px] mb-3"
              >
                A simple solid primary alert—check it out!
              </div>
              <div
                role="alert"
                className="py-2.5 px-3.5 border border-dark rounded text-dark text-[13px] mb-0"
              >
                A simple solid primary alert—check it out!
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-0">Alerts with Icons</h5>
          </div>
          <div className="card-body p-5">
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-primary/10 border-primary/10 border rounded text-[13px] text-primary mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-secondary/10 border-secondary/10 border rounded text-[13px] text-secondary mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-success/10 border-success/10 border rounded text-[13px] text-success mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-danger/10 border-danger/10 border rounded text-[13px] text-danger mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-warning/10 border-warning/10 border rounded text-[13px] text-warning mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-info/10 border-info/10 border rounded text-[13px] text-info mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-light border-light/10 border rounded text-[13px] text-body mb-3"
            >
              This is a simple primary alert
            </div>
            <div
              role="alert"
              className="py-2.5 px-3.5 bg-dark/10 border-dark/10 border rounded text-[13px] text-dark mb-0"
            >
              This is a simple primary alert
            </div>
          </div>
        </div>
      </div>
      {/* End Grid */}
    </div>
    {/* Start Footer */}
   <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  
  )
}

export default UiAlerts