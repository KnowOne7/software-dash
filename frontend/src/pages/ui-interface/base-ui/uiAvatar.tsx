import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"


const UiAvatar = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Avatars</h4>
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
              Avatars
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        {/* Avatars */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatars</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-center flex-wrap gap-2">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xl rounded-full"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xl rounded-none"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xl rounded"
                alt="img"
              />
              <span className="avatar-xl rounded-full bg-primary text-white text-xl leading-normal inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar-xl rounded-none bg-success text-xl text-white leading-normal inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar-xl rounded bg-danger text-white text-xl leading-normal inline-flex items-center justify-center">
                SR
              </span>
            </div>
          </div>
        </div>
        {/* /Avatars */}
        {/* Avatar Sizes */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar Sizes</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-end flex-wrap gap-2">
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xs rounded"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-sm rounded"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-md rounded"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-lg rounded"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xl rounded"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xxl rounded"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/profiles/avatar-02.jpg"
                className="avatar-xxxl rounded"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* /Avatar Sizes */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-end flex-wrap gap-2">
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-xs rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-0 absolute  size-2 bg-success border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-sm rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-0 absolute  size-2 bg-success border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-md rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-0 absolute  size-3 bg-success border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-lg rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-0 absolute  size-3.5 bg-success border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-xl rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-0 absolute  size-4 bg-success border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-xxl rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-1 absolute  size-4 bg-success border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="size-24 rounded-full"
                  alt="img"
                />
                <span className="bottom-0 end-1 absolute  size-[17px] bg-success border-2 border-white rounded-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-end flex-wrap gap-2">
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-xs rounded-full"
                  alt="img"
                />
                <span className="-top-1/4 -end-2 absolute  size-4 text-white bg-primary inline-flex items-center justify-center text-[8px] rounded-full">
                  2
                </span>
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-sm rounded-full"
                  alt="img"
                />
                <span className="-top-1/4 -end-2 absolute  size-[18px] text-white bg-secondary inline-flex items-center justify-center text-[8px] rounded-full">
                  5
                </span>
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-md rounded-full"
                  alt="img"
                />
                <span className="-top-[6%] -end-[13%] absolute  size-5 text-white bg-warning inline-flex items-center justify-center text-[8px] rounded-full">
                  1
                </span>
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-lg rounded-full"
                  alt="img"
                />
                <span className="-top-[15%] -end-[0.25%] absolute  size-6 text-white bg-info inline-flex items-center justify-center text-[8px] rounded-full">
                  7
                </span>
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-xl rounded-full"
                  alt="img"
                />
                <span className="-top-[8%] -end-[0.2%] absolute  size-6 text-white bg-success inline-flex items-center justify-center text-[8px] rounded-full">
                  3
                </span>
              </div>
              <div className="relative">
                <ImageWithBasePath
                  src="assets/img/profiles/avatar-02.jpg"
                  className="avatar-xxl rounded-full"
                  alt="img"
                />
                <span className="-top-[4%] end-0 absolute  size-6 text-white bg-danger  inline-flex items-center justify-center text-[8px] rounded-full">
                  9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="avatar rounded-full bg-primary text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-danger text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-success text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-warning text-sm leading-normal text-whitel inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-info text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div className="card-body p-5">
            <div className="flex items-start flex-wrap gap-2">
              <span className="avatar rounded-full bg-secondary-300 text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-danger-300 text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-success-300 text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-warning-300 text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
              <span className="avatar rounded-full bg-info-300 text-sm leading-normal text-white inline-flex items-center justify-center">
                SR
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div className="card-body p-5">
            <div className="avatar-list-stacked avatar-group-lg mb-6">
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <Link
                className="avatar bg-primary text-fixed-white"
                to="#"
              >
                +8
              </Link>
            </div>
            <div className="avatar-list-stacked mb-6">
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <Link
                className="avatar bg-primary text-fixed-white"
                to="#"
              >
                +8
              </Link>
            </div>
            <div className="avatar-list-stacked avatar-group-sm">
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <span className="avatar">
                <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
              </span>
              <Link
                className="avatar bg-primary text-fixed-white"
                to="#"
              >
                +8
              </Link>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Avatar With Badge</h5>
          </div>
          <div className="card-body p-5">
            <div className="avatar-list-stacked avatar-group-lg mb-6">
              <span className="avatar avatar-rounded">
                <ImageWithBasePath
                  className="border border-white"
                  src="assets/img/profiles/avatar-05.jpg"
                  alt="img"
                />
              </span>
              <span className="avatar avatar-rounded">
                <ImageWithBasePath
                  className="border border-white"
                  src="assets/img/profiles/avatar-05.jpg"
                  alt="img"
                />
              </span>
              <span className="avatar avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
              </span>
              <Link
                className="avatar bg-primary avatar-rounded text-fixed-white"
                to="#"
              >
                +8
              </Link>
            </div>
            <div className="avatar-list-stacked mb-6">
              <span className="avatar avatar-rounded">
                <ImageWithBasePath
                  className="border border-white"
                  src="assets/img/profiles/avatar-05.jpg"
                  alt="img"
                />
              </span>
              <span className="avatar avatar-rounded">
                <ImageWithBasePath
                  className="border border-white"
                  src="assets/img/profiles/avatar-05.jpg"
                  alt="img"
                />
              </span>
              <span className="avatar avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
              </span>
              <Link
                className="avatar bg-primary avatar-rounded text-fixed-white"
                to="#"
              >
                +8
              </Link>
            </div>
            <div className="avatar-list-stacked avatar-group-sm">
              <span className="avatar avatar-rounded">
                <ImageWithBasePath
                  className="border border-white"
                  src="assets/img/profiles/avatar-05.jpg"
                  alt="img"
                />
              </span>
              <span className="avatar avatar-rounded">
                <ImageWithBasePath
                  className="border border-white"
                  src="assets/img/profiles/avatar-05.jpg"
                  alt="img"
                />
              </span>
              <span className="avatar avatar-rounded">
                <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
              </span>
              <Link
                className="avatar bg-primary avatar-rounded text-fixed-white"
                to="#"
              >
                +8
              </Link>
            </div>
          </div>
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

export default UiAvatar