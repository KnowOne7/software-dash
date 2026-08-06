import { Link } from "react-router";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";
import CommonSelect from "../../../components/common-select/commonSelect";
import MemoTextEditor from "../../../components/text-editor/texteditor";
import { Client, Contract_Type } from "../../../core/json/selectOption";
import { all_routes } from "../../../routes/all_routes";


const ContractsModal = () => {
  return (
<>
  {/* Add Contract */}
  <div
    id="offcanvas_add"
    className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabIndex={-1}
  >
    <div className="p-4 border-b border-borderColor">
      <h5 className="inline-flex items-center">Add New Contract</h5>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Subject <span className="text-danger"> *</span>
              </label>
              <input className="form-control" type="text" />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Start Date <span className="text-danger">*</span>
              </label>
              <CommonDatePicker />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                End Date <span className="text-danger">*</span>
              </label>
              <CommonDatePicker />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Client <span className="text-danger"> *</span>
              </label>
                  <CommonSelect
                    options={Client}
                    className="select"
                    defaultValue={Client[0]}
                  />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Contract Type <span className="text-danger"> *</span>
              </label>
                  <CommonSelect
                    options={Contract_Type}
                    className="select"
                    defaultValue={Contract_Type[0]}
                  />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Contract Value <span className="text-danger"> *</span>
              </label>
              <input className="form-control" type="text" />
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
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <MemoTextEditor />
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
  {/* /Add Contract */}
  {/* Edit Contract */}
  <div
    id="offcanvas_edit"
    className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabIndex={-1}
  >
    <div className="p-4 border-b border-borderColor">
      <h5 className="inline-flex items-center">Edit Contract</h5>
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Subject <span className="text-danger"> *</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="SEO Proposal"
              />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                Start Date <span className="text-danger">*</span>
              </label>
              <CommonDatePicker />
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="mb-3">
              <label className="form-label">
                End Date <span className="text-danger">*</span>
              </label>
              <CommonDatePicker />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Client <span className="text-danger"> *</span>
              </label>
                  <CommonSelect
                    options={Client}
                    className="select"
                    defaultValue={Client[1]}
                  />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Contract Type <span className="text-danger"> *</span>
              </label>
                  <CommonSelect
                    options={Contract_Type}
                    className="select"
                    defaultValue={Contract_Type[1]}
                  />
            </div>
          </div>
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Contract Value <span className="text-danger"> *</span>
              </label>
              <input
                className="form-control"
                type="text"
                defaultValue="$2,15,000"
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
          <div className="md:col-span-12">
            <div className="mb-3">
              <label className="form-label">
                Description <span className="text-danger">*</span>
              </label>
              <MemoTextEditor />
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
  {/* /Edit Contract */}
  {/* View Contract */}
  <div
    id="offcanvas_view"
    className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabIndex={-1}
  >
    <div className="p-4 border-b border-borderColor flex items-center justify-between">
      <h5 className="inline-flex items-center">
        Contract
        <span className="text-danger border-b border-danger text-xs font-medium px-2 py-1 rounded bg-danger-100 ms-2">
          #1254057
        </span>
      </h5>
      {/* Dropdown */}
      <div className="flex items-center">
        <div className="me-3">
          <Link
            to="#"
            className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
            data-dropdown-toggle="download-dropdown"
          >
            Mark as Signed
            <i className="ti ti-chevron-down ml-1" />
          </Link>
          <ul
            id="download-dropdown"
            className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
          >
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-file-type-pdf me-1" />
                View PDF
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-checks me-1" />
                Mark as Signed
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-file-download me-1" />
                Download
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-copy me-1" />
                Clone
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
              >
                <i className="ti ti-printer me-1" />
                Print
              </Link>
            </li>
          </ul>
        </div>
        <button
          type="button"
          data-drawer-hide="offcanvas_view"
          aria-controls="offcanvas_view"
          className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"
        >
          <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
        </button>
      </div>
    </div>
    <div className="p-4">
      <ul
        className="flex flex-wrap text-sm font-medium text-center mb-3"
        id="default-styled-tab3"
        data-tabs-toggle="#company-tab-content3"
        data-tabs-active-classes="text-primary hover:text-primary border-primary"
        data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
        role="tablist"
      >
        <li className="me-3" role="presentation">
          <button
            className="inline-block py-2 px-4 border-b-2"
            data-tabs-target="#company-basic3"
            type="button"
            role="tab"
            aria-selected="false"
          >
            Contract Details
          </button>
        </li>
        <li role="presentation">
          <button
            className="inline-block py-2 px-4 border-b-2"
            data-tabs-target="#company-address3"
            type="button"
            role="tab"
            aria-selected="false"
          >
            Renewal History
          </button>
        </li>
      </ul>
      <div id="company-tab-content3">
        <div className="hidden " id="company-basic3" role="tabpanel">
          <div className="flex items-center justify-end mb-3">
            <Link to="#" className="btn btn-light me-3">
              Download
            </Link>
            <Link
              to="#"
              className="btn btn-primary"
              data-drawer-target="offcanvas_signup"
              data-drawer-show="offcanvas_signup"
              aria-controls="offcanvas_signup"
              data-drawer-placement="right"
            >
              Sign Now
            </Link>
          </div>
          <h6 className="mb-2">Web Design Contract</h6>
          <p className="mb-3">
            Where's the other side. The further off from England the nearer is
            to find my way into a tree. By the use of a well--' 'What did they
            draw?' said Alice, in a sorrowful tone, 'I'm afraid I've offended it
            again
          </p>
          <div className="card border border-borderColor rounded mb-4">
            <div className="card-body p-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
                <div className="md:col-span-6">
                  <div>
                    <h6 className="font-medium text-[14px] mb-2">
                      Contract Value : $25,25,000
                    </h6>
                    <p className="mb-1">
                      Type : <span>Contracts under Seal</span>
                    </p>
                    <p className="mb-1">
                      Start Date : <span>24 Apr 2025</span>
                    </p>
                    <p className="mb-1">
                      End Date : <span>30 Apr 2025</span>
                    </p>
                    <p className="mb-0">
                      Client : <span>Harbor View</span>
                    </p>
                  </div>
                </div>
                <div className="md:col-span-6">
                  <div>
                    <h6 className="font-semibold text-[14px] mb-2">CRMS</h6>
                    <p className="mb-1">
                      3338 Marcus Street Birmingham, AL 35211
                    </p>
                    <p className="mb-1">
                      Phone : <span>+1 98789 78788</span>
                    </p>
                    <p className="mb-0">
                      Email : <span> info@example.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h6 className="mb-3">Attachment</h6>
          <div className="card border border-borderColor rounded">
            <div className="card-body p-2 flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-10 h-10 text-white rounded flex items-center justify-center bg-danger me-2">
                  <i className="ti ti-file-type-pdf" />
                </span>
                <div>
                  <h6 className="font-medium text-[14px] mb-1">
                    Proposal_webdesign.pdf
                  </h6>
                  <span className="text-[13px]">15.2 MB</span>
                </div>
              </div>
              <Link
                to="#"
                className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark"
              >
                <i className="ti ti-download fs-16" />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden" id="company-address3" role="tabpanel">
          <h6 className="mb-3">Renewal History</h6>
          <div className="card border border-borderColor rounded mb-4">
            <div className="card-body flex items-center justify-between p-4">
              <div>
                <h6 className="font-medium fs-14 mb-2">
                  Contract Value : $25,25,000
                </h6>
                <div className="flex items-center gap-3">
                  <p className="mb-0">
                    Start Date : <span className="text-dark">24 Apr 2025</span>
                  </p>
                  <p className="mb-0">
                    End Date : <span className="text-dark">30 Apr 2025</span>
                  </p>
                </div>
              </div>
              <Link
                to="#"
                className="btn btn-primary"
                data-drawer-target="offcanvas_signup"
                data-drawer-show="offcanvas_signup"
                aria-controls="offcanvas_signup"
                data-drawer-placement="right"
              >
                Sign Now
              </Link>
            </div>
          </div>
          <div className="card border border-borderColor rounded">
            <div className="card-body flex items-center justify-between p-4">
              <div>
                <h6 className="font-medium fs-14 mb-2">
                  Contract Value : $25,25,000
                </h6>
                <div className="flex items-center gap-3">
                  <p className="mb-0">
                    Start Date : <span className="text-dark">24 Apr 2025</span>
                  </p>
                  <p className="mb-0">
                    End Date : <span className="text-dark">30 Apr 2025</span>
                  </p>
                </div>
              </div>
              <span className="text-xs bg-success-100 text-success rounded border-b border-success px-2 py-0.5 me-2">
                Renewed On : 24 Apr 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /View Contract */}
  {/* Signup */}
  <div
    id="offcanvas_signup"
    className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
    tabIndex={-1}
  >
    <div className="p-4 border-b border-borderColor flex items-center justify-between">
      <h5>Signature &amp; Confirmation of Identity</h5>
      <div className="flex items-center">
        <button
          type="button"
          data-drawer-hide="offcanvas_signup"
          aria-controls="offcanvas_signup"
          className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"
        >
          <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
        </button>
      </div>
    </div>
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
        <div className="md:col-span-6">
          <div className="mb-3">
            <label className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="mb-3">
            <label className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="md:col-span-12">
          <div className="mb-3">
            <label className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="md:col-span-12">
          <div>
            <label className="form-label">
              Signature <span className="text-danger">*</span>
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
            <div className="flex items-center my-5 pb-5 border-b border-borderColor">
              <Link
                to="#"
                className="text-xs bg-danger-100 text-danger rounded border-b border-danger px-2 py-0.5 me-2"
              >
                Clear
              </Link>
              <Link
                to="#"
                className="text-xs bg-info-100 text-info rounded border-b border-info px-2 py-0.5"
              >
                Undo
              </Link>
            </div>
            <p className="mb-0">
              By Clicking on “Sign”, I consent to be legally bound by this
              electronic representation of my signature
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Signup */}
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
            Are you sure you want to remove contract you selected.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="#"
              className="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
            >
              Cancel
            </Link>
            <Link
              to={all_routes.contactList}
              className="btn btn-primary z-1 w-full"
            >
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* delete modal */}
</>

  );
};

export default ContractsModal;
