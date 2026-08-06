import { Link } from "react-router"
import CommonFooter from "../../components/common-footer/commonFooter"
import { all_routes } from "../../routes/all_routes"
import ImageWithBasePath from "../../components/image-with-base-path"

const Notifications = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper relative pt-[50px] ml-[240px]">
      <div className="content p-5">
        {/* Page Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
          <div>
            <h4 className="mb-1 text-xl font-bold flex items-center">
              Notifications
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                <li>
                  <Link to="index.html" className="hover:underline text-gray-700">
                    Home
                  </Link>
                  <span>
                    <i className="ti ti-chevron-right" />
                  </span>
                </li>
                <li className="text-dark font-medium" aria-current="page">
                  Notifications
                </li>
              </ol>
            </nav>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Refresh Button */}
            <button
              className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
              title="Refresh"
            >
              <i className="ti ti-refresh" />
            </button>
            {/* Collapse Button */}
            <button
              className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
              title="Collapse"
              id="collapse-header"
            >
              <i className="ti ti-transition-top" />
            </button>
          </div>
        </div>
        {/* End Page Header */}
        {/* card start */}
        <div className="card border border-borderColor rounded bg-white mb-0">
          <div className="card-header border-b border-borderColor p-4 flex items-center flex-wrap gap-2 justify-between">
            <h6 className="d-inline-flex align-items-center mb-0">
              Total Notifications{" "}
              <span className="badge bg-danger ms-2">658</span>
            </h6>
            <div className="flex items-center gap-2 flex-wrap">
              <Link to="#" className="btn btn-light">
                <i className="ti ti-checks me-1" />
                Mark all as read
              </Link>
              <Link to="#" className="btn btn-danger">
                <i className="ti ti-trash me-1" />
                Delete All
              </Link>
            </div>
          </div>
          <div className="card-body p-4">
            <div className="card notication-card border border-borderColor rounded bg-white mb-4">
              <div className="card-body p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.contactDetails}
                      className="avatar flex-shrink-0"
                    >
                      <ImageWithBasePath
                        src="./assets/img/users/user-07.jpg"
                        alt="img"
                        className="rounded-full"
                      />
                    </Link>
                    <div className="ms-2">
                      <div>
                        <p className="mb-1">
                          <Link to={all_routes.contactDetails} className="fw-medium">
                            Daniel Martinz
                          </Link>{" "}
                          requested Sick Leave from{" "}
                          <span className="text-dark fw-medium">May 28 2025</span>{" "}
                          to{" "}
                          <span className="text-dark fw-medium">
                            {" "}
                            May 29 2025
                          </span>
                        </p>
                        <p className="fs-12 mb-0 d-inline-flex align-items-center">
                          <i className="ti ti-clock me-1" /> 4 min ago
                          <span className="ms-2">
                            <i className="ti ti-point-filled text-danger fs-16 lh-sm" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="noti-btn">
                    <Link
                      to="#"
                      className="btn btn-danger d-inline-flex align-items-center"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card notication-card border border-borderColor rounded bg-white mb-4">
              <div className="card-body p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.contactDetails}
                      className="avatar flex-shrink-0"
                    >
                     <ImageWithBasePath
                        src="./assets/img/users/user-02.jpg"
                        alt="img"
                        className="rounded-full"
                      />
                    </Link>
                    <div className="ms-2">
                      <div>
                        <p className="mb-1">
                          Leave for{" "}
                          <Link to={all_routes.contactDetails} className="fw-medium">
                            Emily Clark
                          </Link>{" "}
                          <span className="text-dark fw-medium">
                            (May 26 2025)
                          </span>{" "}
                          has been approved.
                        </p>
                        <p className="fs-12 mb-0 d-inline-flex align-items-center">
                          <i className="ti ti-clock me-1" /> 15 min ago
                          <span className="ms-2">
                            <i className="ti ti-point-filled text-danger fs-16 lh-sm" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="noti-btn">
                    <Link
                      to="#"
                      className="btn btn-danger d-inline-flex align-items-center"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card notication-card border border-borderColor rounded bg-white mb-4">
              <div className="card-body p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.contactDetails}
                      className="avatar flex-shrink-0"
                    >
                     <ImageWithBasePath
                        src="./assets/img/users/user-04.jpg"
                        alt="img"
                        className="rounded-full"
                      />
                    </Link>
                    <div className="ms-2">
                      <div>
                        <p className="mb-1">
                          Leave request from{" "}
                          <Link to={all_routes.contactDetails} className="fw-medium">
                            David Anderson
                          </Link>{" "}
                          <span className="text-dark fw-medium">
                            (May 30 2025)
                          </span>{" "}
                          has been rejected.
                        </p>
                        <p className="fs-12 mb-0 d-inline-flex align-items-center">
                          <i className="ti ti-clock me-1" /> 45 Min Ago
                          <span className="ms-2">
                            <i className="ti ti-point-filled text-danger fs-16 lh-sm" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="noti-btn">
                    <Link
                      to="#"
                      className="btn btn-danger d-inline-flex align-items-center"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="card notication-card border border-borderColor rounded bg-white">
              <div className="card-body p-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center">
                    <Link
                      to={all_routes.contactDetails}
                      className="avatar flex-shrink-0"
                    >
                     <ImageWithBasePath
                        src="./assets/img/users/user-24.jpg"
                        alt="img"
                        className="rounded-full"
                      />
                    </Link>
                    <div className="ms-2">
                      <div>
                        <p className="mb-1">
                          <Link to={all_routes.contactDetails} className="fw-medium">
                            Ann McClure
                          </Link>{" "}
                          cancelled her appointment scheduled for{" "}
                          <span className="text-dark fw-medium">
                            February 5, 2024
                          </span>
                        </p>
                        <p className="fs-12 mb-0 d-inline-flex align-items-center">
                          <i className="ti ti-clock me-1" /> 58 Min Ago
                          <span className="ms-2">
                            <i className="ti ti-point-filled text-danger fs-16 lh-sm" />
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="noti-btn">
                    <Link
                      to="#"
                      className="btn btn-danger d-inline-flex align-items-center"
                    >
                      <i className="ti ti-trash me-1" />
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* card start */}
      </div>
      {/* Start Footer */}
     <CommonFooter/>
      {/* End Footer */}
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default Notifications