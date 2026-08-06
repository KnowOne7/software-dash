import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"
import Dragger from "antd/es/upload/Dragger";
import { message } from "antd";
import ImageWithBasePath from "../../../../components/image-with-base-path";


const FormFileupload = () => {
    const uploadProps = {
        name: "file",
        multiple: true,
        showUploadList: true,
        action: "/", // Set your upload endpoint here
        onChange(info: { file: { name?: any; status?: any; }; fileList: any; }) {
          const { status } = info.file;
          if (status !== "uploading") {
            console.log(info.file, info.fileList);
          }
          if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e: { dataTransfer: { files: any; }; }) {
          console.log("Dropped files", e.dataTransfer.files);
        },
      };
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            File Uploads
          </h4>
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
                  Forms
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li className="text-dark font-medium" aria-current="page">
                File Uploads
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        <div className="card bg-white border border-borderColor rounded mb-5">
          <div className="card-header border-b border-borderColor p-4">
            <h5 className="card-title">Dropzone File Upload</h5>
          </div>
          <div className="card-body p-4">
            <p className="text-muted mb-4">
              DropzoneJS is an open source library that provides drag’n’drop file
              uploads with image previews.
            </p>
            <form
              action="/"
              method="post"
              className="dropzone border-2 border-dashed border-borderColor rounded min-h-[150px] p-5 cursor-pointer"
              id="myAwesomeDropzone"
              data-plugin="dropzone"
              data-previews-container="#file-previews"
              data-upload-preview-template="#uploadPreviewTemplate"
            >
              
              <Dragger {...uploadProps}>
              <div className="dz-message text-center my-4 needsclick">
                <i className="ti ti-cloud-upload h1 text-muted text-[24px]" />
                <h3 className="my-3 text-[28px]">
                  Drop files here or click to upload.
                </h3>
                <span className="text-muted fs-13">
                  (This is just a demo dropzone. Selected files are{" "}
                  <strong>not</strong> actually uploaded.)
                </span>
              </div>
              </Dragger>
            </form>
            {/* Preview */}
            <div className="dropzone-previews" id="file-previews" />
          </div>{" "}
          {/* end card-body */}
        </div>{" "}
        {/* end card */}
        {/* file preview template */}
        <div className="hidden" id="uploadPreviewTemplate">
          <div className="card mt-2 mb-0 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <ImageWithBasePath
                    data-dz-thumbnail=""
                    src="#"
                    className="avatar-sm rounded bg-light"
                    alt="Img"
                  />
                </div>
                <div className="col ps-0">
                  <Link
                    to="#"
                    className="text-muted fw-bold"
                    data-dz-name=""
                  />
                  <p className="mb-0" data-dz-size="" />
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <Link
                    to="#"
                    className="btn btn-link btn-lg text-muted"
                    data-dz-remove=""
                  >
                    <i className="ti ti-x" />
                  </Link>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end card */}
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

export default FormFileupload