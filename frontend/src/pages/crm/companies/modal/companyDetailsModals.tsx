import { Link } from "react-router";
import ImageWithBasePath from "../../../../components/image-with-base-path";
import CommonDatePicker from "../../../../components/common-date-picker/commonDatePicker";
import MemoCommonTagInputs from "../../../../components/common-tag-input/commonTagInputs";
import CommonSelect from "../../../../components/common-select/commonSelect";
import { AccountType, Assignee, City, Company_Name, Contacts, Country, Currency, Deals, DocumentType, Industry, Language, Leads, Owner, Period, Pipeine, Priority, Source, State, Status_Busy, Status_Open, StatusActive } from "../../../../core/json/selectOption";
import MemoTextEditor from "../../../../components/text-editor/texteditor";
import { all_routes } from "../../../../routes/all_routes";


const CompaniesDetailsModals = () => {
  return (
    <>
      {/* start add notes  modal */}
      <div
        id="add_new_notes"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Add New Notes</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="add_new_notes"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="form-label">
                    Title<span className="text-danger ms-1">*</span>
                  </label>
                  <input className="form-control" type="text" />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Notes<span className="text-danger ms-1">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Attachment<span className="text-danger ms-1">*</span>
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
                {/* start row */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="border border-borderColor rounded p-4 rounded relative">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
                          <i className="ti ti-file-spreadsheet  text-[18px] text-white" />
                        </div>
                        <div>
                          <h6 className="font-medium text-[14px] mb-1">
                            Project Specs.xls.
                          </h6>
                          <p className="mb-0">365 KB</p>
                        </div>
                      </div>
                      <button className="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                        <i className="ti ti-arrow-down" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </form>
            </div>
            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
              <button
                type="button"
                data-modal-hide="add_new_notes"
                className="btn btn-light"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end add new modal */}
      {/* start edit notes  modal */}
      <div
        id="edit_notes"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Edit Notes</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="edit_notes"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="form-label">
                    Title<span className="text-danger ms-1">*</span>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Team meet at Starbucks"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Notes<span className="text-danger ms-1">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"
                    placeholder="A project review evaluates the success of an initiative and identifies areas for improvement. "
                    defaultValue={""}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Attachment<span className="text-danger ms-1">*</span>
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
                {/* start row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-7">
                    <div className="border border-borderColor rounded p-4 rounded relative">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0">
                          <i className="ti ti-file-spreadsheet  text-[18px] text-white" />
                        </div>
                        <div>
                          <h6 className="font-medium text-[14px] mb-1">
                            Project Specs.xls.
                          </h6>
                          <p className="mb-0">365 KB</p>
                        </div>
                      </div>
                      <button className="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200">
                        <i className="ti ti-arrow-down" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* end row */}
              </form>
            </div>
            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
              <button
                type="button"
                data-modal-hide="edit_notes"
                className="btn btn-light"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end edit new modal */}
      {/* start add call modal */}
      <div
        id="add_call"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Create Call Log</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="add_call"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="form-label">
                    Status<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={StatusActive}
                    className="select"
                    defaultValue={StatusActive[0]}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Follow Up Date<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Notes<span className="text-danger ms-1">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2 text-body gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    />
                    Create a follow up task
                  </label>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
              <button
                type="button"
                data-modal-hide="add_call"
                className="btn btn-light"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create New
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end add call modal */}
      {/* start edit call modal */}
      <div
        id="edit_call"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Edit Call Log</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="edit_call"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="form-label">
                    Status<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={Status_Busy}
                    className="select"
                    defaultValue={Status_Busy[0]}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Follow Up Date<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label">
                    Notes<span className="text-danger ms-1">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-900"
                    placeholder="A project review evaluates the success of an initiative and identifies areas for improvement. "
                    defaultValue={""}
                  />
                </div>
                <div>
                  <label className="flex items-center space-x-2 text-body gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    />
                    Create a follow up task
                  </label>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
              <button
                type="button"
                data-modal-hide="edit_call"
                className="btn btn-light"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end edit call modal */}
      {/* start add call modal */}
      <div
        id="create_account"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[800px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Create New File</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="create_account"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <div className="add-info-fieldset">
                <div className="add-details-wizard mb-4 flex items-center">
                  <ul className="progress-bar-wizard flex gap-3 items-center border-borderColor">
                    <li>
                      <button className="active btn btn-primary rounded multi-step-info">
                        <i className="ti ti-file me-2" />
                        Basic Info
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-light rounded multi-step-info">
                        <i className="ti ti-circle-plus me-2" />
                        Add Recipient
                      </button>
                    </li>
                  </ul>
                </div>
                <fieldset id="first-field-file">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4 mb-4">
                      <div className="md:col-span-12">
                        <div>
                          <label className="form-label">
                            Choose Leads<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Leads}
                            className="select"
                            defaultValue={Leads[0]}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div>
                          <label className="form-label">
                            Document Type<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={DocumentType}
                            className="select"
                            defaultValue={DocumentType[0]}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div>
                          <label className="form-label">
                            Owner<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Owner}
                            className="select"
                            defaultValue={Owner[0]}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-12">
                        <div>
                          <label className="form-label">
                            Title<span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="md:col-span-12">
                        <div className="bg-light border border-borderColor rounded p-4">
                          <h6 className="mb-3 font-semibold">Signature</h6>
                          <ul
                            className="nav"
                            data-tabs-toggle="#sign-tab-content"
                            data-tabs-active-classes="text-default hover:text-default"
                          >
                            <li className="nav-item block mb-2" role="presentation">
                              <span
                                className="flex"
                                role="tab"
                                data-tabs-target="#nosign"
                                aria-selected="false"
                              >
                                <input
                                  type="radio"
                                  className="text-primary border border-borderColor mt-1"
                                  id="sign1"
                                  name="email"
                                  defaultChecked
                                />
                                <label
                                  htmlFor="sign1"
                                  className="form-check-label ms-2 font-medium"
                                >
                                  <span className="block font-medium text-dark mb-1">
                                    No Signature
                                  </span>
                                  This document does not require a signature before
                                  acceptance.
                                </label>
                              </span>
                            </li>
                            <li className="nav-item block mb-0" role="presentation">
                              <span
                                className="active flex mb-0"
                                role="tab"
                                data-tabs-target="#use-esign"
                                aria-selected="true"
                              >
                                <input
                                  type="radio"
                                  className="text-primary border border-borderColor mt-1"
                                  id="sign2"
                                  name="email"
                                />
                                <label
                                  htmlFor="sign2"
                                  className="form-check-label ms-2"
                                >
                                  <span className="block font-medium text-dark mb-1">
                                    Use e-signature
                                  </span>
                                  This document require e-signature before
                                  acceptance.
                                </label>
                              </span>
                            </li>
                          </ul>
                          <div id="sign-tab-content" className="sign-tab-content">
                            <div className="hidden" id="nosign" role="tabpanel" />
                            <div
                              className="hidden mt-4"
                              id="use-esign"
                              role="tabpanel"
                            >
                              <div className="mb-0">
                                <label className="form-label">
                                  Document Signers
                                  <span className="text-danger ms-1">*</span>
                                </label>
                              </div>
                              <div className="sign-content1">
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                                  <div className="md:col-span-6">
                                    <input
                                      type="text"
                                      className="form-control placeholder:text-gray-400"
                                    />
                                  </div>
                                  <div className="md:col-span-6">
                                    <div className="flex items-center">
                                      <div className="flex-1 me-2">
                                        <input
                                          type="text"
                                          className="form-control placeholder:text-gray-400"
                                        />
                                      </div>
                                      <Link
                                        to="#"
                                        className="size-7 flex items-center justify-center add-sign1 rounded text-dark hover:bg-dark-transparent hover:text-primary"
                                      >
                                        <i className="ti ti-circle-plus" />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-12">
                        <div>
                          <label className="form-label">
                            Content<span className="text-danger ms-1">*</span>
                          </label>
                          <textarea
                            rows={3}
                            className="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-600"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-end form-wizard-button pt-4 gap-x-2 border-t border-borderColor">
                      <button className="btn btn-light me-2" type="reset">
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary wizard-next-btn"
                        type="button"
                      >
                        Next
                      </button>
                    </div>
                  </form>
                </fieldset>
                <fieldset>
                  <form>
                    <div className="contact-input-set">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4 mb-4">
                        <div className="md:col-span-12">
                          <div className="bg-light border border-borderColor rounded p-4">
                            <h6 className="mb-1 font-semibold text-[14px]">
                              Send the document to following signers
                            </h6>
                            <p className="mb-4">
                              In order to send the document to the signers
                            </p>
                            <div className="sign-content">
                              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                                <div className="md:col-span-6">
                                  <div className="mb-0">
                                    <label className="form-label">
                                      Document Signers
                                      <span className="text-danger ms-1">*</span>
                                    </label>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control placeholder:text-gray-400"
                                  />
                                </div>
                                <div className="md:col-span-6">
                                  <div className="mb-0">
                                    <label className="form-label">
                                      Recipients Email
                                      <span className="text-danger ms-1">*</span>
                                    </label>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="flex-1 me-2">
                                      <input
                                        type="text"
                                        className="form-control placeholder:text-gray-400"
                                      />
                                    </div>
                                    <Link
                                      to="#"
                                      className="size-7 flex items-center justify-center add-sign rounded text-dark hover:bg-dark-transparent hover:text-primary"
                                    >
                                      <i className="ti ti-circle-plus" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:col-span-12">
                          <div>
                            <label className="form-label">
                              Message Subject
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Subject"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-12">
                          <div>
                            <label className="form-label">
                              Message Text
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <textarea
                              rows={3}
                              className="block w-full p-2.5 bg-white border border-borderColor rounded focus:ring-primary focus:border-primary text-sm text-gray-600"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="md:col-span-6">
                          <button className="btn btn-light" type="reset">
                            Send Now
                          </button>
                        </div>
                        <div className="md:col-span-12">
                          <div className="bg-success-100 text-success border border border-success rounded p-3">
                            <p className="mb-0">
                              <i className="ti ti-circle-check-filled me-1" />{" "}
                              Document sent successfully to the selected recipients
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 text-end form-wizard-button pt-4 gap-x-2 border-t border-borderColor">
                        <button className="btn btn-light me-2" type="reset">
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-dismiss="modal"
                        >
                          Save &amp; Next
                        </button>
                      </div>
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end add call modal */}
      {/* start Manage Email */}
      <div
        id="manage_email"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Connect Account</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="manage_email"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="mb-4">
                  <label className="form-label">
                    Account type<span className="text-danger ms-1">*</span>
                  </label>
                  <CommonSelect
                    options={AccountType}
                    className="select"
                    defaultValue={AccountType[0]}
                  />
                </div>
                <div>
                  <label className="form-label mb-3">
                    Sync emails from<span className="text-danger ms-1">*</span>
                  </label>
                  <div className="form-check mb-2">
                    <input
                      className="text-primary border-borderColor me-2"
                      type="radio"
                      name="flexRadioDefaulttwo"
                      id="flexRadioDefaulttwo"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefaulttwo"
                    >
                      Now
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="text-primary border-borderColor me-2"
                      type="radio"
                      name="flexRadioDefaultfour"
                      id="flexRadioDefaultfour"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefaultfour"
                    >
                      1 Month Ago
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="text-primary border-borderColor me-2"
                      type="radio"
                      name="flexRadioDefaultseven"
                      id="flexRadioDefaultseven"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefaultseven"
                    >
                      3 Month Ago
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input
                      className="text-primary border-borderColor me-2"
                      type="radio"
                      name="flexRadioDefaulteight"
                      id="flexRadioDefaulteight"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefaulteight"
                    >
                      6 Month Ago
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
              <button
                type="button"
                data-modal-hide="manage_email"
                className="btn btn-light"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Connect Account
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end edit call modal */}
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
                  to={all_routes.contactDetails}
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
      {/* Start Add Contact */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Contact</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            aria-controls="offcanvas_add"
            className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
          </button>
        </div>
        <form>
          <div id="accordion-collapse-2" className="p-4" data-accordion="collapse">
            <div className="accordion-item border border-borderColor rounded mb-3">
              <h2 className="accordion-header" id="heading-4">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-4"
                  aria-expanded="false"
                  aria-controls="collapse-4"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-user-plus" />
                    </span>
                    Basic Info
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-4"
                className="hidden p-4 border-t border-borderColor "
                aria-labelledby="heading-4"
              >
                <div className="accordion-body text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-4">
                    <div className="md:col-span-12">
                      <div className="flex items-center mb-4">
                        <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <i className="ti ti-photo text-dark text-[16px]" />
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                            <i className="ti ti-file-broken me-1" />
                            Upload file
                            <input
                              type="file"
                              className="opacity-0 absolute start-0 top-0"
                              multiple
                            />
                          </div>
                          <span>JPG, GIF or PNG. Max size of 800K</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-4">
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
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Job Title <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Company Name<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Company_Name}
                          className="select"
                          defaultValue={Company_Name[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-3">
                        <div className="flex justify-between items-center">
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <label className="flex items-center cursor-pointer mb-2">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="text-sm font-medium me-2">
                              Email Opt Out
                            </span>
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </div>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Phone 1</label>
                        <input
                          type="text"
                          className="form-control phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Phone 2</label>
                        <input
                          type="text"
                          className="form-control phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Fax</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <div className="flex items-center justify-between">
                          <label className="form-label">Deals</label>
                          <Link
                            to="#"
                            className="label-add text-primary mb-1"
                            data-drawer-target="offcanvas_add2"
                            data-drawer-show="offcanvas_add2"
                            aria-controls="offcanvas_add2"
                            data-drawer-placement="right"
                          >
                            <i className="ti ti-plus me-1" />
                            Add New
                          </Link>
                        </div>
                        <CommonSelect
                          options={Deals}
                          className="select"
                          defaultValue={Deals[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <CommonDatePicker />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 position-relative">
                        <label className="form-label">Reviews </label>
                        <div className="input-group w-auto input-group-flat">
                          <input type="text" className="form-control" />
                          <span className="input-group-text">
                            <i className="ti ti-star" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Owner</label>
                        <CommonSelect
                          options={Owner}
                          className="select"
                          defaultValue={Owner[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Tags </label>
                        <MemoCommonTagInputs />
                        <span className="text-[13px] mt-2">
                          Enter value separated by comma
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Source <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Source}
                          className="select"
                          defaultValue={Source[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Industry <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Industry}
                          className="select"
                          defaultValue={Industry[0]}
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
                          defaultValue={Currency[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Language <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Language}
                          className="select"
                          defaultValue={Language[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-0">
                        <label className="form-label">
                          Description <span className="text-danger">*</span>
                        </label>
                        <MemoTextEditor />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border border-borderColor rounded mb-3">
              <h2 className="accordion-header" id="heading-7">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-7"
                  aria-expanded="false"
                  aria-controls="collapse-7"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-map-pin-cog" />
                    </span>
                    Address Info
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-7"
                className="hidden p-4  border-t border-borderColor"
                aria-labelledby="heading-7"
              >
                <div className="accordion-body text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                    <div className="md:col-span-12">
                      <div className="mb-3">
                        <label className="form-label">Street Address </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Country</label>
                        <CommonSelect
                          options={Country}
                          className="select"
                          defaultValue={Country[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">State / Province </label>
                        <CommonSelect
                          options={State}
                          className="select"
                          defaultValue={State[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 mb-md-0">
                        <label className="form-label">City </label>
                        <CommonSelect
                          options={City}
                          className="select"
                          defaultValue={City[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-0">
                        <label className="form-label">Zipcode </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border border-borderColor rounded mb-3">
              <h2 className="accordion-header" id="heading-5">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-5"
                  aria-expanded="false"
                  aria-controls="collapse-5"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-social" />
                    </span>
                    Social Profile
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-5"
                className="hidden p-4  border-t border-borderColor"
                aria-labelledby="heading-5"
              >
                <div className="accordion-body text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Facebook</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Skype </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Linkedin </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Twitter</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 mb-md-0">
                        <label className="form-label">Whatsapp</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-0">
                        <label className="form-label">Instagram</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border border-borderColor rounded">
              <h2 className="accordion-header" id="heading-6">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white  text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-6"
                  aria-expanded="false"
                  aria-controls="collapse-6"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-accessible" />
                    </span>
                    Access
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-6"
                className="hidden p-4  border-t border-borderColor"
                aria-labelledby="heading-6"
              >
                <div className="accordion-body text-[12px]">
                  <div className="flex items-center gap-4">
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefault1"
                        id="flexRadioDefault1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Public
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefault2"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Private
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefaultone"
                        id="flexRadioDefaultone"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefaultone"
                      >
                        Select Pepole
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 pt-0">
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
      {/* End Add Contact */}
      {/* Start Edit Contact Offcanvas */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Contact</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_edit"
            aria-controls="offcanvas_edit"
            className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
          >
            <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
          </button>
        </div>
        <form>
          <div id="accordion-collapse" className="p-4" data-accordion="collapse">
            <div className="accordion-item border border-borderColor rounded mb-3">
              <h2 className="accordion-header" id="heading-14">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-14"
                  aria-expanded="false"
                  aria-controls="collapse-14"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-user-plus" />
                    </span>
                    Basic Info
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-14"
                className="hidden p-4 border-t border-borderColor "
                aria-labelledby="heading-14"
              >
                <div className="accordion-body text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                    <div className="md:col-span-12">
                      <div className="flex items-center mb-3">
                        <div className="w-[80px] h-[80px] me-3 flex-shrink-0 flex items-center justify-center relative">
                          <div className="relative flex items-center justify-center">
                            <ImageWithBasePath
                              src="./assets/img/users/avatar-1.jpg"
                              className="rounded"
                              alt="img"
                            />
                          </div>
                          <Link
                            to="#"
                            className="text-[12px] text-danger border-0 w-5 h-5 rounded-full bg-danger-100 flex items-center justify-center absolute right-0 top-0"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                            <i className="ti ti-file-broken me-1" />
                            Upload file
                            <input
                              type="file"
                              className="opacity-0 absolute start-0 top-0"
                              multiple
                            />
                          </div>
                          <span>JPG, GIF or PNG. Max size of 800K</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="William"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Anderson"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Job Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Data Analytics"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Company Name<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Company_Name}
                          className="select"
                          defaultValue={Company_Name[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-3">
                        <div className="flex justify-between items-center">
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <label className="flex items-center cursor-pointer mb-2">
                            <input
                              type="checkbox"
                              defaultValue=""
                              className="sr-only peer"
                              defaultChecked
                            />
                            <span className="text-sm font-medium me-2">
                              Email Opt Out
                            </span>
                            <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                          </label>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="william@example.com"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Phone 1</label>
                        <input
                          type="text"
                          className="form-control phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Phone 2</label>
                        <input
                          type="text"
                          className="form-control phone"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Fax</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <div className="flex items-center justify-between">
                          <label className="form-label">Deals</label>
                          <Link
                            to="#"
                            className="label-add text-primary mb-1"
                            data-drawer-target="offcanvas_add2"
                            data-drawer-show="offcanvas_add2"
                            aria-controls="offcanvas_add2"
                            data-drawer-placement="right"
                          >
                            <i className="ti ti-plus me-1" />
                            Add New
                          </Link>
                        </div>
                        <CommonSelect
                          options={Deals}
                          className="select"
                          defaultValue={Deals[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <CommonDatePicker />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 position-relative">
                        <label className="form-label">Reviews </label>
                        <div className="input-group w-auto input-group-flat">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="4.5"
                          />
                          <span className="input-group-text">
                            <i className="ti ti-star" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Owner</label>
                        <CommonSelect
                          options={Owner}
                          className="select"
                          defaultValue={Owner[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Tags </label>
                        <MemoCommonTagInputs />
                        <span className="text-[13px] mt-2">
                          Enter value separated by comma
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Source <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Source}
                          className="select"
                          defaultValue={Source[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Industry <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Industry}
                          className="select"
                          defaultValue={Industry[0]}
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
                          defaultValue={Currency[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Language <span className="text-danger">*</span>
                        </label>
                        <CommonSelect
                          options={Language}
                          className="select"
                          defaultValue={Language[0]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-0">
                        <label className="form-label">
                          Description <span className="text-danger">*</span>
                        </label>
                        <MemoTextEditor />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border border-borderColor rounded mb-3">
              <h2 className="accordion-header" id="heading-17">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-17"
                  aria-expanded="false"
                  aria-controls="collapse-17"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-map-pin-cog" />
                    </span>
                    Address Info
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-17"
                className="hidden p-4  border-t border-borderColor"
                aria-labelledby="heading-17"
              >
                <div className="accordion-body text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                    <div className="md:col-span-12">
                      <div className="mb-3">
                        <label className="form-label">Street Address </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Country</label>
                        <CommonSelect
                          options={Country}
                          className="select"
                          defaultValue={Country[1]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">State / Province </label>
                        <CommonSelect
                          options={State}
                          className="select"
                          defaultValue={State[1]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 mb-md-0">
                        <label className="form-label">City </label>
                        <CommonSelect
                          options={City}
                          className="select"
                          defaultValue={City[1]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-0">
                        <label className="form-label">Zipcode </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={1019}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border border-borderColor rounded mb-3">
              <h2 className="accordion-header" id="heading-15">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-15"
                  aria-expanded="false"
                  aria-controls="collapse-15"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-social" />
                    </span>
                    Social Profile
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-15"
                className="hidden p-4  border-t border-borderColor"
                aria-labelledby="heading-15"
              >
                <div className="accordion-body text-[12px]">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Facebook</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Skype </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Linkedin </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3">
                        <label className="form-label">Twitter</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 mb-md-0">
                        <label className="form-label">Whatsapp</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-0">
                        <label className="form-label">Instagram</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border border-borderColor rounded">
              <h2 className="accordion-header" id="heading-16">
                <button
                  className="flex justify-between items-center w-full p-4 bg-white  text-start text-dark font-bold text-[16px]"
                  type="button"
                  data-accordion-target="#collapse-16"
                  aria-expanded="false"
                  aria-controls="collapse-16"
                >
                  <span className="flex items-center">
                    <span className="w-8 h-8 rounded flex items-center justify-center me-1">
                      <i className="ti ti-accessible" />
                    </span>
                    Access
                  </span>
                  <span>
                    <i className="ti ti-chevron-down" />
                  </span>
                </button>
              </h2>
              <div
                id="collapse-16"
                className="hidden p-4  border-t border-borderColor"
                aria-labelledby="heading-16"
              >
                <div className="accordion-body text-[12px]">
                  <div className="flex items-center gap-4 gap-y-1">
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefaultfive"
                        id="flexRadioDefaultfive"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefaultfive"
                      >
                        Public
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefaultsix"
                        id="flexRadioDefaultsix"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefaultsix"
                      >
                        Private
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefaultnine"
                        id="flexRadioDefaultnine"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefaultnine"
                      >
                        Select Pepole
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 pt-0">
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
      {/* End Edit Contact Offcanvas */}
      {/* Start Add Deals Offcanvas */}
      <div
        id="offcanvas_add2"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Deals</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add2"
            aria-controls="offcanvas_add2"
            className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
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
                    Deal Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">
                      Pipeine <span className="text-danger">*</span>
                    </label>
                  </div>
                  <CommonSelect
                    options={Pipeine}
                    className="select"
                    defaultValue={Pipeine[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Status <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Status_Open}
                    className="select"
                    defaultValue={Status_Open[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Deal Value<span className="text-danger"> *</span>
                  </label>
                  <input className="form-control" type="text" />
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
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Contacts <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Contacts}
                    className="select"
                    defaultValue={Contacts[0]}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Project <span className="text-danger">*</span>
                  </label>
                  <MemoCommonTagInputs />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Expected Closing Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Assignee <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Assignee}
                    className="select"
                    defaultValue={Assignee[1]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Follow Up Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Source <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Source}
                    className="select"
                    defaultValue={Source[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Tags <span className="text-danger">*</span>
                  </label>
                  <MemoCommonTagInputs />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Priority <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Priority}
                    className="select"
                    defaultValue={Priority[0]}
                  />
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
                data-drawer-hide="offcanvas_add2"
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
      {/* End Add Deals Offcanvas */}
    </>

  );
};

export default CompaniesDetailsModals;
