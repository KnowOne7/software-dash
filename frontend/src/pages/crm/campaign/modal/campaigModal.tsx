import { Link } from "react-router"
import ImageWithBasePath from "../../../../components/image-with-base-path"
import CommonSelect from "../../../../components/common-select/commonSelect"
import { Campaign_Type, Currency, Period } from "../../../../core/json/selectOption"
import { useState } from "react"
import CommonTagInputs from "../../../../components/common-tag-input/commonTagInputs"
import { all_routes } from "../../../../routes/all_routes"


const CampaigModal = () => {
      const [tags, setTags] = useState<string[]>(["Small Business", "Corporate Companies"," Urban Apartment"]);
 const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };

  return (
   <>
  {/* Add Campaign */}
  <div
    id="offcanvas_add"
    className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabIndex={-1}
  >
    <div className="p-4 border-b border-borderColor">
      <h5 className="inline-flex items-center">Add New Campaign</h5>
      <button
        type="button"
        data-drawer-hide="offcanvas_add"
        aria-controls="offcanvas_add"
        className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
      </button>
    </div>
    <div className="p-4">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Campaign Type <span className="text-danger">*</span>
              </label>
               <CommonSelect
                            options={Campaign_Type}
                            className="select"
                            defaultValue={Campaign_Type[0]}
                          />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Deal Value <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Currency <span className="text-danger">*</span>
              </label>
             <CommonSelect
                            options={Currency}
                            className="select"
                            defaultValue={Currency[0]}
                          />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Period <span className="text-danger">*</span>
              </label>
              <CommonSelect
                            options={Period}
                            className="select"
                            defaultValue={Period[0]}
                          />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Period Value <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Target Audience <span className="text-danger">*</span>
              </label>
              <CommonTagInputs
                            initialTags={tags}
                            onTagsChange={handleTagsChange}
                          />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                rows={3}
                className="form-control"
                placeholder="Description"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-5">
              <label className="form-label">
                Attachment <span className="text-danger">*</span>
              </label>
              <div className="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span className="block mb-1">
                  <i className="ti ti-folder-open text-primary fs-16" />
                </span>
                <p className="mb-0 tet-[14px] text-dark">
                  Drop your files here or{" "}
                  <Link
                    to="#"
                    className="underline text-primary"
                  >
                    browse
                  </Link>
                </p>
                <input
                  type="file"
                  accept="video/image"
                  className="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer"
                />
                <p className="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card border border-borderColor rounded  shadow mb-4">
              <div className="card-body p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0">
                      <i className="ti ti-file-spreadsheet" />
                    </span>
                    <div>
                      <h6 className="mb-1 text-[14px] font-medium">
                        Project Specs.xls
                      </h6>
                      <p className="mb-0">365 KB</p>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"
                  >
                    <i className="ti ti-download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card border border-borderColor rounded  shadow bg-light mb-4">
              <div className="card-body p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0">
                      <ImageWithBasePath src="./assets/img/blogs/blog-1.jpg" alt="img" />
                    </span>
                    <div>
                      <h6 className="mb-1 text-[14px] font-medium">637.jpg</h6>
                      <p className="mb-0">365 KB</p>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"
                  >
                    <i className="ti ti-download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            className="btn btn-light me-2"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Create New
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* /Add Campaign */}
  {/* Edit Campaign */}
  <div
    id="offcanvas_edit"
    className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabIndex={-1}
  >
    <div className="p-4 border-b border-borderColor">
      <h5 className="inline-flex items-center">Edit Campaign</h5>
      <button
        type="button"
        data-drawer-hide="offcanvas_edit"
        aria-controls="offcanvas_edit"
        className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
      >
        <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
      </button>
    </div>
    <div className="p-4">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Distribution"
              />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Campaign Type <span className="text-danger">*</span>
              </label>
             <CommonSelect
                            options={Campaign_Type}
                            className="select"
                            defaultValue={Campaign_Type[1]}
                          />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Deal Value <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="$04,51,000"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Currency <span className="text-danger">*</span>
              </label>
             <CommonSelect
                            options={Currency}
                            className="select"
                            defaultValue={Currency[1]}
                          />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Period <span className="text-danger">*</span>
              </label>
             <CommonSelect
                            options={Period}
                            className="select"
                            defaultValue={Period[1]}
                          />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Period Value <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Collins"
              />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Target Audience <span className="text-danger">*</span>
              </label>
              <CommonTagInputs
                            initialTags={tags}
                            onTagsChange={handleTagsChange}
                          />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <textarea
                rows={3}
                className="form-control"
                placeholder="Description"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-5">
              <label className="form-label">
                Attachment <span className="text-danger">*</span>
              </label>
              <div className="w-100 flex bg-light border border-borderColor rounded p-6 shadow items-center justify-center flex-col relative">
                <span className="block mb-1">
                  <i className="ti ti-folder-open text-primary fs-16" />
                </span>
                <p className="mb-0 tet-[14px] text-dark">
                  Drop your files here or{" "}
                  <Link
                    to="#"
                    className="underline text-primary"
                  >
                    browse
                  </Link>
                </p>
                <input
                  type="file"
                  accept="video/image"
                  className="opacity-0 absolute start-0 top-0 w-full h-full cursor-pointer"
                />
                <p className="text-[13px] mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card border border-borderColor rounded  shadow mb-4">
              <div className="card-body p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0">
                      <i className="ti ti-file-spreadsheet" />
                    </span>
                    <div>
                      <h6 className="mb-1 text-[14px] font-medium">
                        Project Specs.xls
                      </h6>
                      <p className="mb-0">365 KB</p>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"
                  >
                    <i className="ti ti-download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="card border border-borderColor rounded  shadow bg-light mb-4">
              <div className="card-body p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-10 h-10 flex items-center justify-center rounded bg-success text-[24px] text-white flex-shrink-0">
                      <ImageWithBasePath src="./assets/img/blogs/blog-1.jpg" alt="img" />
                    </span>
                    <div>
                      <h6 className="mb-1 text-[14px] font-medium">637.jpg</h6>
                      <p className="mb-0">365 KB</p>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="w-5 h-5 border border-borderColor rounded-full flex items-center justify-center flex-shrink-0 hover:bg-danger-100 hover:text-danger"
                  >
                    <i className="ti ti-download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button
            type="button"
            data-drawer-hide="offcanvas_edit"
            className="btn btn-light me-2"
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* /Edit Campaign */}
  {/* delete modal */}
  <div
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal"
  >
    <div className="relative bg-white rounded-defaultradius p-5">
      <div className="modal-content rounded-0">
        <div className="modal-body p-4 text-center">
          <div className="mb-3 relative z-[1]">
            <span className="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center">
              <i className="ti ti-trash text-[24px]" />
            </span>
          </div>
          <h5 className="mb-1">Delete Confirmation</h5>
          <p className="mb-3">
            Are you sure you want to remove campaign you selected.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="#"
              className="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.campaign} className="btn btn-primary z-1 w-full">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* delete modal */}
</>

  )
}

export default CampaigModal