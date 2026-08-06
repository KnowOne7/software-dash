import { Link } from "react-router";
import CommonDatePicker from "../../../../components/common-date-picker/commonDatePicker";
import MemoCommonTagInputs from "../../../../components/common-tag-input/commonTagInputs";
import CommonSelect from "../../../../components/common-select/commonSelect";
import { Assignee, City, Contacts, Country, Currency, Deals, Industry, Language, Owner, Period, Pipeine, Priority, Source, State, StatusActive } from "../../../../core/json/selectOption";
import MemoTextEditor from "../../../../components/text-editor/texteditor";
import { all_routes } from "../../../../routes/all_routes";


const CompaniesModals = () => {
  return (
    <>
      {/* Add Company */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Company</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_add"
            aria-controls="offcanvas_add"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
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
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                    <div className="md:col-span-12">
                      <div className="flex items-center mb-3">
                        <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <i className="ti ti-photo text-dark fs-16" />
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                            <i className="ti ti-file-broken me-1" />
                            Upload file
                            <input
                              type="file"
                              className="opacity-0 absolute start-0 top-0"
                            />
                          </div>
                          <span>JPG, GIF or PNG. Max size of 800K</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Company Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
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
                          <label className="form-label">Website</label>
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
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="md:col-span-6">
                      <div className="mb-3 position-relative">
                        <label className="form-label">Reviews </label>
                        <div className="input-group w-auto input-group-flat">
                          <input type="text" className="form-control" />
                          <span className="custom-input-group-text">
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
                        <input
                          className="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                          placeholder="Add new"
                          type="text"
                          data-role="tagsinput"
                          name="Label"
                          defaultValue="Collab,VIP"
                        />
                        <span className="fs-13 mt-2">
                          Enter value separated by comma
                        </span>
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
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
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
                        name="flexRadioDefault"
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
                        name="flexRadioDefault"
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
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault3"
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
      {/* /Add Company */}
      {/* Edit Company */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Edit Company</h5>
          <button
            type="button"
            data-drawer-hide="offcanvas_edit"
            aria-controls="offcanvas_edit"
            className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
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
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                    <div className="md:col-span-12">
                      <div className="flex items-center mb-3">
                        <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <i className="ti ti-photo text-dark fs-16" />
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                            <i className="ti ti-file-broken me-1" />
                            Upload file
                            <input
                              type="file"
                              className="opacity-0 absolute start-0 top-0"
                            />
                          </div>
                          <span>JPG, GIF or PNG. Max size of 800K</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Company Name<span className="text-danger ms-1">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="NovaWave LLC"
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
                          defaultValue="+1 989757485"
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
                          defaultValue="+1 989757485"
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
                          <label className="form-label">Website</label>
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
                        <input type="text" className="form-control" />
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
                        <input
                          className="input-tags bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                          placeholder="Add new"
                          type="text"
                          data-role="tagsinput"
                          name="Label"
                          defaultValue="Collab,VIP"
                        />
                        <span className="fs-13 mt-2">
                          Enter value separated by comma
                        </span>
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
                          defaultValue={Industry[1]}
                        />
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
                          defaultValue={Contacts[1]}
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
                          defaultValue={Language[1]}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <div className="mb-0">
                        <label className="form-label">
                          Description <span className="text-danger">*</span>
                        </label>
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
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
                  <div className="flex items-center gap-4">
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault4"
                      >
                        Public
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault5"
                      >
                        Private
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="text-primary border-borderColor"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault6"
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
      {/* /Edit Company */}
      {/* Add Deals */}
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
                    Deal Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
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
                          options={StatusActive}
                          className="select"
                          defaultValue={StatusActive[0]}
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
                  <input
                    className="input-tags form-control border-0 h-100"
                    placeholder="Add new"
                    type="text"
                    data-role="tagsinput"
                    name="Label"
                    defaultValue="Devops Design, MargrateDesign"
                  />
                  <MemoCommonTagInputs/>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Due Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker/>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Expected Closing Date <span className="text-danger">*</span>
                  </label>
                  <CommonDatePicker/>
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
                          defaultValue={Assignee[0]}
                        />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Follow Up Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat">
                    <CommonDatePicker placeholder="dd/mm/yyyy" />
                  </div>
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
                  <MemoCommonTagInputs/>
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
                  <MemoTextEditor/>
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
      {/* /Add Deals */}
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
                Are you sure you want to remove company you selected.
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
                  to={all_routes.companies}
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

export default CompaniesModals;
