import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"


const AudioCall = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper relative pt-[50px] ml-[240px]">
      <div className="content p-5">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">Audio Call</h4>
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
                  Applications
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li className="text-dark font-medium" aria-current="page">
                Audio Call
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="grid grid-cols-1 xl:grid-cols-12">
          {/* Call */}
          <div className="xl:col-span-12 md:col-span-12">
            <div className="card border-borderColor rounded-[5px] shadow-xs flex flex-col justify-between relative h-[calc(100vh-174px)] overflow-y-auto bg-white mb-0">
              <div className="card-header py-4 px-5 border-borderColor border-b">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center">
                    <span className="me-2">
                      <ImageWithBasePath
                        src="assets/img/users/user-01.jpg"
                        className="avatar-lg rounded-full"
                        alt="img"
                      />
                    </span>
                    <div>
                      <h5 className="mb-1">
                        <Link className="hover:text-primary" to="#">
                          Anthony Lewis
                        </Link>
                      </h5>
                      <span className="block">Online</span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="avatar-md rounded-full flex items-center justify-center bg-gray-200 text-dark"
                  >
                    <i className="ti ti-user-plus text-[20px]" />
                  </Link>
                </div>
              </div>
              <div className="card-body p-5 relative items-center flex flex-col justify-center">
                <div className="voice-call-img mb-3">
                  <ImageWithBasePath
                    src="assets/img/users/user-01.jpg"
                    className="w-[100px] h-[100px] rounded-full animate-ripple"
                    alt="img"
                  />
                </div>
                <h4 className="display-4">Anthony Lewis</h4>
                <p>00:24</p>
                <Link to="#" className="  absolute end-0 bottom-0 m-3">
                  <ImageWithBasePath
                    src="assets/img/users/user-05.jpg"
                    className="avatar-xl rounded"
                    alt="Img"
                  />
                </Link>
              </div>
              <div className="card-footer border-t border-borderColor py-4 px-5">
                <div className="flex items-center justify-center">
                  <Link
                    to="#"
                    className="btn btn-light w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full me-3 hover:btn-gray"
                  >
                    <i className="ti ti-video text-[20px]" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-danger w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full me-3 hover:btn-danger-400"
                  >
                    <i className="ti ti-phone text-[20px]" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-light w-[40px] h-[40px] p-0 flex items-center justify-center rounded-full hover:btn-gray"
                  >
                    <i className="ti ti-microphone text-[20px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* /Call */}
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

export default AudioCall