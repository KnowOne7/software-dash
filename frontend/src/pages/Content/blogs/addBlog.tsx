import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import CommonSelect from "../../../components/common-select/commonSelect"
import { Category } from "../../../core/json/selectOption"
import { useState } from "react"
import CommonTagInputs from "../../../components/common-tag-input/commonTagInputs"
import MemoTextEditor from "../../../components/text-editor/texteditor"

const AddBlog = () => {
        const [tags, setTags] = useState<string[]>([]);
const handleTagsChange = (newTags: string[]) => {
setTags(newTags);
};

  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      <h4 className="mb-4">Add Blog</h4>
      <div className="flex justify-center">
        <div className="w-full lg:w-10/12 mx-auto">
          <div className="mb-3">
            <Link
              to={all_routes.blog}
              className="d-inline-flex align-items-center fw-medium hover:text-primary"
            >
              <i className="ti ti-arrow-left me-1" />
              All Blogs
            </Link>
          </div>
          <div className="bg-white">
            <form>
              <div className="p-4 pb-2">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Category <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                            options={Category}
                            className="select"
                            defaultValue={Category[0]}
                          />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Tags <span className="text-danger">*</span>
                      </label>
                      <CommonTagInputs
                            initialTags={tags}
                            onTagsChange={handleTagsChange}
                          />
                      <span className="fs-13 mt-2">
                        Enter value separated by comma
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Content</label>
                      <div className="editor pages-editor">
                        <MemoTextEditor/>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Featured Image</label>
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
                  <div className="md:col-span-12">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <div className="flex items-center gap-4">
                        <div className="form-check">
                          <input
                            className="text-primary border-borderColor"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault1"
                          >
                            Active
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="text-primary border-borderColor"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexRadioDefault2"
                          >
                            Inactive
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button type="button" className="btn btn-light me-2">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create New
                </button>
              </div>
            </form>
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

export default AddBlog