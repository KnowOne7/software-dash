import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { useState } from "react"

const VideoCall = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
        setIsFullscreen(false);
      }
    }
  };
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper relative pt-[50px] ml-[240px]">
      <div className="content p-5">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">Chat</h4>
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
                Chat
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="grid grid-cols-1 xl:grid-cols-12">
          {/* Call */}
          <div className="xl:col-span-12 md:col-span-12">
            <div className="single-video  flex">
              <div className="join-video w-full flex-fill">
                <ImageWithBasePath
                  src="assets/img/social/video.jpg"
                  className="w-full h-full img-fluid"
                  alt="video"
                />
                <div className="chat-active-users ">
                  <div className="video-avatar">
                    <ImageWithBasePath
                      src="assets/img/social/video.jpg"
                      className="img-fluid"
                      alt="video"
                    />
                    <div className="user-name">
                      <span>Joanne Conner</span>
                    </div>
                  </div>
                </div>
                <div className="record-item flex items-center">
                  <div className="record-time me-2">
                    <span>40:12</span>
                  </div>
                  <Link
                    to="#"
                    className="video-expand flex items-center justify-center bg-white btnFullscreen avatar-sm rounded hover:bg-primary hover:text-white Z-[9]"
                    onClick={toggleFullscreen}>
                    <i className="ti ti-maximize" />
                  </Link>
                </div>
                <div className="call-overlay-bottom flex justify-between items-center flex-wrap w-full">
                  <Link
                    to="#"
                    className="options-icon flex items-center justify-center guest-off rounded"
                  >
                    <i className="ti ti-user-off" />
                  </Link>
                  <div className="call-option rounded-full flex justify-center items-center">
                    <Link
                      to="#"
                      className="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary me-2"
                    >
                      <i className="ti ti-microphone" />
                    </Link>
                    <Link
                      to="#"
                      className="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary me-2"
                    >
                      <i className="ti ti-video" />
                    </Link>
                    <Link
                      to="#"
                      className="call-icon bg-danger text-white flex justify-center items-center rounded hover:text-dark"
                    >
                      <i className="ti ti-phone" />
                    </Link>
                    <Link
                      to="#"
                      className="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary mx-2"
                    >
                      <i className="ti ti-volume" />
                    </Link>
                    <Link
                      to="#"
                      className="options-icon bg-light flex justify-center items-center rounded text-dark hover:text-primary"
                    >
                      <i className="ti ti-device-imac-share" />
                    </Link>
                  </div>
                  <Link
                    to="#"
                    className="options-icon bg-light flex items-center justify-center rounded"
                    id="show-message"
                  >
                    <i className="ti ti-dots" />
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

export default VideoCall