import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";

const UiImage = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Images</h4>
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
              Images
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        {/* Images Shape */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Rounded Image</h5>
          </div>
          <div className="p-5">
            <ImageWithBasePath
              className="rounded-lg"
              src="assets/img/media/img-01.jpg"
              alt="img"
            />
          </div>
        </div>
        {/* /Images Shape */}
        {/* Image Left Align */}
        <div>
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 w-full">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Thumbnail</h5>
            </div>
            <div className="p-5">
              <ImageWithBasePath
                className="border-4 border-border-color rounded-lg"
                src="assets/img/media/img-01.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* /Image Left Align */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
        {/* Image Center Align */}
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Rounded Circle</h5>
            </div>
            <div className="flex items-center justify-center p-5">
              <ImageWithBasePath
                className="rounded-full w-50"
                src="assets/img/profiles/avatar-14.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* /Image Center Align */}
        {/* Image Right Align */}
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Rounded Bordered</h5>
            </div>
            <div className="flex items-center justify-center p-5">
              <ImageWithBasePath
                className="rounded-full border-4 border-border-color w-50"
                src="assets/img/profiles/avatar-03.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* /Image Right Align */}
        {/* Figures */}
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Left Align</h5>
            </div>
            <div className="p-5">
              <ImageWithBasePath
                className="rounded-lg w-46"
                src="assets/img/media/img-01.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        {/* /Figures */}
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Center Align</h5>
            </div>
            <div className="flex items-center justify-center p-5">
              <ImageWithBasePath
                className="rounded-lg w-46"
                src="assets/img/media/img-01.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Image Right Align</h5>
            </div>
            <div className="flex items-end justify-end p-5">
              <ImageWithBasePath
                className="rounded-lg w-46"
                src="assets/img/media/img-01.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5>Figures</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-5">
              <div>
                <ImageWithBasePath
                  className="rounded-lg w-auto mb-2"
                  src="assets/img/media/img-01.jpg"
                  alt="img"
                />
                <p className="text-start">A caption for the above image.</p>
              </div>
              <div>
                <ImageWithBasePath
                  className="rounded-lg w-auto mb-2"
                  src="assets/img/media/img-01.jpg"
                  alt="img"
                />
                <p className="text-center">A caption for the above image.</p>
              </div>
              <div>
                <ImageWithBasePath
                  className="rounded-lg w-auto mb-2"
                  src="assets/img/media/img-01.jpg"
                  alt="img"
                />
                <p className="text-end">A caption for the above image.</p>
              </div>
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

  );
};

export default UiImage;
