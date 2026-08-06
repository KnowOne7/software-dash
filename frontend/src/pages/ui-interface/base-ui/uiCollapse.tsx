import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";

const UiCollapse = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Collapse</h4>
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
              Collapse
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* start row*/}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
        <div className="xl:col-span-6">
          <div className="card bg-white border border-borderColor rounded mb-4">
            <div className="card-header border-b border-borderColor p-4">
              <h5 className="card-title">Collapse</h5>
            </div>
            <div className="card-body p-4" data-accordion="collapse">
              <p className="text-muted mb-3">
                Bootstrap's collapse provides the way to toggle the visibility
                of any content or element. Please read the official{" "}
                <Link
                  to="https://getbootstrap.com/docs/5.2/components/collapse/"
                  target="_blank"
                >
                  Bootstrap
                </Link>{" "}
                documentation for a full list of options.
              </p>
              <p className="mb-0 d-flex align-items-center gap-2 flex-wrap">
                <Link
                to="#"
                  className="btn btn-primary text-white bg-primary"
                  data-accordion-target="#collapse-67"
                  aria-expanded="true"
                  aria-controls="collapse-67"
                >
                  Link with href
                </Link>
                <button
                  className="btn btn-primary bg-primary text-white ms-1"
                  type="button"
                  data-accordion-target="#collapse-67"
                  aria-expanded="true"
                  aria-controls="collapse-67"
                >
                  Button with data-bs-target
                </button>
              </p>
              <div
                className="hidden mt-3"
                id="collapse-67"
                aria-labelledby="heading-67"
              >
                <div className="card card-body text-dark mb-0 border border-borderColor p-3 shadow rounded">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
        <div className="xl:col-span-6">
          <div className="card bg-white border border-borderColor rounded mb-4">
            <div className="card-header border-b border-borderColor p-4">
              <h5 className="card-title">Collapse Horizontal</h5>
            </div>
            <div className="card-body p-4" data-accordion="collapse">
              <p className="text-muted mb-3">
                Bootstrap's collapse provides the way to toggle the visibility
                of any content or element. Please read the official{" "}
                <Link
                  to="https://getbootstrap.com/docs/5.2/components/collapse/"
                  target="_blank"
                >
                  Bootstrap
                </Link>{" "}
                documentation for a full list of options.
              </p>
              <p className="mb-0 d-flex align-items-center gap-2 flex-wrap">
                <Link
                to="#"
                  className="btn btn-primary bg-primary text-white"
                  data-accordion-target="#collapse-6"
                  aria-expanded="true"
                  aria-controls="collapse-6"
                >
                  Toggle width collapse
                </Link>
              </p>
              <div
                className="hidden mt-3"
                id="collapse-6"
                aria-labelledby="heading-6"
              >
                <div className="card card-body text-dark mb-0 border border-borderColor p-3 shadow rounded">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </div>
              </div>
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col*/}
      </div>
      {/* end row*/}
    </div>
    {/* Start Footer */}
   <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default UiCollapse;
