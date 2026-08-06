import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"
import MemoTextEditor from "../../../components/text-editor/texteditor"


const TicketDetails = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      <h4 className="mb-4">Ticket Details</h4>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-10 lg:col-start-2">
          <div className="mb-3">
            <Link
              to={all_routes.tickets}
              className="inline-flex items-center font-medium text-gray-900 hover:text-primary"
            >
              <i className="ti ti-arrow-left me-1" />
              Back to Tickets
            </Link>
          </div>
          {/* Ticket Details */}
          <div className="card bg-white rounded-defaultradius mb-0">
            <div className="p-4">
              <div className="border border-borderColor br-5 mb-3">
                <div className="p-3 bg-light flex items-center justify-between flex-wrap gap-3">
                  <h6>
                    #TK0020 -{" "}
                    <span className="text-body">Support for Theme</span>
                  </h6>
                  <div className="dropdown">
                    <Link
                      to="#"
                      className="border border-borderColor btn rounded py-2 px-3 bg-white inline-flex items-center text-gray-500"
                      data-dropdown-toggle="ticket-dropdown"
                    >
                      <i className="ti ti-badge me-1" />
                      Resolved
                    </Link>
                    <ul
                      id="ticket-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg min-w-[170px]"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Resolved
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Inprogress
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Open
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-500"
                        >
                          Closed
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="p-3">
                  <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-3">
                    <div>
                      <h6 className="text-[13px] font-medium mb-1">
                        Created By
                      </h6>
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="avatar avatar-xs rounded-full me-1"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-03.jpg"
                            className="flex-shrink-0 rounded-full"
                            alt="img"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-truncate text-gray-900 hover:text-primary"
                        >
                          Michael Dawson
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-[13px] font-medium mb-1">Priority</h6>
                      <span className="badge bg-danger inline-flex items-center badge-sm">
                        High
                      </span>
                    </div>
                    <div>
                      <h6 className="text-[13px] font-medium mb-1">
                        Assigned To
                      </h6>
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="avatar avatar-xs rounded-full me-1"
                        >
                          <ImageWithBasePath
                            src="assets/img/users/user-07.jpg"
                            className="flex-shrink-0 rounded-full"
                            alt="img"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-truncate text-gray-900 hover:text-primary"
                        >
                          Michael Dawson
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h6 className="text-[13px] font-medium mb-1">
                        Created at
                      </h6>
                      <p className="text-[13px]">20 Jan 2025</p>
                    </div>
                    <div>
                      <h6 className="text-[13px] font-medium mb-1">
                        Last Updated
                      </h6>
                      <p className="text-[13px]">18 Feb 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <h6 className="mb-2">Description</h6>
                <p className="mb-2">
                  After applying the updated CRM theme, I am experiencing
                  significant layout and design problems that affect my
                  workflow. I urgently need assistance to resolve these display
                  issues and compatibility challenges with the existing modules
                  and plugins to ensure smooth operations and a consistent user
                  experience.
                </p>
                <p className="mb-0">
                  I’ve made several attempts to adjust theme settings and
                  configurations, but the layout issues persist. The theme
                  appears to conflict with essential CRM modules and custom
                  workflows I heavily depend on.
                </p>
              </div>
              <div className="mb-3">
                <h6 className="mb-2">Attachments</h6>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="bg-light p-3 flex items-center border border-borderColor">
                    <span className="avatar rounded-md flex items-center justify-center bg-danger me-2">
                      <ImageWithBasePath
                        src="assets/img/icons/pdf-1.svg"
                        alt="img"
                        className="w-auto h-auto"
                      />
                    </span>
                    <div className="me-2">
                      <h6 className="text-[14px] font-medium">Report1.pdf</h6>
                      <p className="text-[12px] mb-0">45 KB</p>
                    </div>
                    <Link
                      to="#"
                      className="avatar avatar-sm avatar-rounded download-icon flex items-center justify-center"
                    >
                      <i className="ti ti-download fs-16" />
                    </Link>
                  </div>
                  <div className="bg-light p-3 flex items-center border border-borderColor">
                    <span className="avatar flex items-center justify-center bg-success rounded-md me-2">
                      <ImageWithBasePath
                        src="assets/img/icons/jpg-1.svg"
                        alt="img"
                        className="w-auto h-auto"
                      />
                    </span>
                    <div className="me-2">
                      <h6 className="text-[14px] font-medium">Image2.jpg</h6>
                      <p className="text-[12px] mb-0">38 KB</p>
                    </div>
                    <Link
                      to="#"
                      className="avatar avatar-sm avatar-rounded download-icon flex items-center justify-center"
                    >
                      <i className="ti ti-download fs-16" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="flex items-center">
                  <div>
                    <Link
                      to="#"
                      className="avatar rounded-full me-2 block"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-27.jpg"
                        alt="img"
                        className="avatar rounded-full"
                      />
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium text-dark mb-0 me-1">Rely To :</p>
                    <Link
                      to="#"
                      className="py-1 px-2 bg-danger-100 text-danger text-[12px] font-medium rounded"
                    >
                      Michael Dawson (michael123@example.com){" "}
                      <i className="ti ti-x ms-1" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-0">
                <h6 className="mb-2">Message</h6>
                <div className="editor pages-editor">
                 <MemoTextEditor/>
                </div>
              </div>
            </div>
            <div className="p-4 border-borderColor border-t">
              <div className="flex items-center justify-end">
                <Link to="#" className="btn btn-light me-3">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Send Reply
                </Link>
              </div>
            </div>
          </div>
          {/* /Ticket Details */}
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

export default TicketDetails