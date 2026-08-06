import { Link } from "react-router";
import CommonDatePicker from "../../../../components/common-date-picker/commonDatePicker";
import CommonSelect from "../../../../components/common-select/commonSelect";
import CommonTimePicker from "../../../../components/common-time-pickers/CommonTimePicker";
import ImageWithBasePath from "../../../../components/image-with-base-path";
import MemoTextEditor from "../../../../components/text-editor/texteditor";
import { Company_Name, Contacts, Deals, Guests, Owner,  Reminder } from "../../../../core/json/selectOption";
import { all_routes } from "../../../../routes/all_routes";

const ActivitiesModal = () => {

  return (
    <>
      {/* Add Activity */}
      <div
        id="offcanvas_add"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">Add New Activity</h5>
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
                    Title <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-12">
                <div className="mb-3">
                  <label className="form-label">
                    Activity Type <span className="text-danger">*</span>
                  </label>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div>
                      <input
                        type="radio"
                        id="option-1"
                        defaultValue=""
                        name="status"
                        className="hidden peer"
                        defaultChecked
                      />
                      <label
                        htmlFor="option-1"
                        className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                      >
                        <i className="ti ti-phone me-2" />
                        Calls
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="option-2"
                        defaultValue=""
                        name="status"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-2"
                        className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                      >
                        <i className="ti ti-mail me-2" />
                        Email
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="option-3"
                        defaultValue=""
                        name="status"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-3"
                        className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                      >
                        <i className="ti ti-subtask me-2" />
                        Task
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="option-4"
                        defaultValue=""
                        name="status"
                        className="hidden peer"
                      />
                      <label
                        htmlFor="option-4"
                        className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                      >
                        <i className="ti ti-user-share me-2" />
                        Meeting
                      </label>
                    </div>
                  </div>
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
                  <label className="form-label">Time</label>
                  <CommonTimePicker />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Reminder <span className="text-danger">*</span>
                  </label>
                  <div className="input-group w-auto input-group-flat relative">
                    <input type="text" className="form-control" />
                    <span className="custom-input-group-text">
                      <i className="ti ti-bell-ringing" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="flex items-center">
                  <div className="mb-3 w-full flex-1">
                    <label className="form-label min-h-[20px]">&nbsp;</label>
                    <CommonSelect
                      options={Reminder}
                      className="select"
                      defaultValue={Reminder[0]}
                    />
                  </div>
                  <div className="mb-3 time-text flex-shrink-0 ms-2">
                    <label className="form-label">&nbsp;</label>
                    <p className="mb-0">Before Due</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Owner <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Owner}
                    className="select"
                    defaultValue={Owner[0]}
                  />
                </div>
              </div>
              <div className="md:col-span-6">
                <div className="mb-3">
                  <label className="form-label">
                    Guests <span className="text-danger">*</span>
                  </label>
                  <CommonSelect
                    options={Guests}
                    className="select"
                    defaultValue={Guests[0]}
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
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Deals</label>
                    <Link
                      to="#"
                      className="label-add text-primary"
                      data-modal-target="add_deal"
                      data-modal-toggle="add_deal"
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
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Contacts</label>
                    <Link
                      to="#"
                      className="label-add text-primary"
                      data-modal-target="add_contacts"
                      data-modal-toggle="add_contacts"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Contacts}
                    className="select"
                    defaultValue={Contacts[0]}
                  />
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between">
                    <label className="form-label">Companies</label>
                    <Link
                      to="#"
                      className="label-add text-primary"
                      data-modal-target="add_company"
                      data-modal-toggle="add_company"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New
                    </Link>
                  </div>
                  <CommonSelect
                    options={Company_Name}
                    className="select"
                    defaultValue={Company_Name[0]}
                  />
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
      {/* /Add Activity */}
      {/* Edit Activity */}
      <div
        id="offcanvas_edit"
        className="offcanvas-popup fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform translate-x-full bg-white"
        tabIndex={-1}
      >
        <div className="p-4 border-b border-borderColor">
          <h5 className="inline-flex items-center">
            We scheduled a meeting for next week
          </h5>
          <p>Commented by Aeron on 15 Sep 2025, 11:15 PM</p>
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
                    Title <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="md:col-span-12">
                <ul
                  className="flex flex-wrap text-sm font-medium text-center mb-3 border-b border-borderColor"
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
                      Activity
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
                      Comments
                    </button>
                  </li>
                </ul>
                <div id="company-tab-content3">
                  <div className="hidden " id="company-basic3" role="tabpanel">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 items-center">
                      <div className="md:col-span-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Activity Type <span className="text-danger">*</span>
                          </label>
                          <div className="flex items-center gap-3 flex-wrap">
                            <div>
                              <input
                                type="radio"
                                id="option-5"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                                defaultChecked
                              />
                              <label
                                htmlFor="option-5"
                                className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                              >
                                <i className="ti ti-phone me-2" />
                                Calls
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="option-6"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="option-6"
                                className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                              >
                                <i className="ti ti-mail me-2" />
                                Email
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="option-7"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="option-7"
                                className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                              >
                                <i className="ti ti-subtask me-2" />
                                Task
                              </label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                id="option-8"
                                defaultValue=""
                                name="status-2"
                                className="hidden peer"
                              />
                              <label
                                htmlFor="option-8"
                                className="inline-flex items-center justify-between px-3 py-2 text-dark bg-white border border-borderColor rounded-lg cursor-pointer peer-checked:border-primary peer-checked:text-primary hover:text-gray-600 hover:bg-gray-50"
                              >
                                <i className="ti ti-user-share me-2" />
                                Meeting
                              </label>
                            </div>
                          </div>
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
                          <label className="form-label">Time</label>
                          <CommonTimePicker />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Reminder <span className="text-danger">*</span>
                          </label>
                          <div className="input-group w-auto input-group-flat">
                            <input type="text" className="form-control" />
                            <span className="input-group-text">
                              <i className="ti ti-bell-ringing" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="flex items-center">
                          <div className="mb-3 w-full flex-1">
                            <label className="form-label min-h-[20px]">
                              &nbsp;
                            </label>
                            <CommonSelect
                              options={Reminder}
                              className="select"
                              defaultValue={Reminder[1]}
                            />
                          </div>
                          <div className="mb-3 time-text flex-shrink-0 ms-2">
                            <label className="form-label">&nbsp;</label>
                            <p className="mb-0">Before Due</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Owner <span className="text-danger">*</span>
                          </label>
                          <CommonSelect
                            options={Owner}
                            className="select"
                            defaultValue={Owner[1]}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Guests <span className="text-danger">*</span>
                          </label>
                          <CommonSelect
                            options={Guests}
                            className="select"
                            defaultValue={Guests[1]}
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
                        <div className="mb-3">
                          <div className="flex items-center justify-between">
                            <label className="form-label">Deals</label>
                            <Link
                              to="#"
                              className="label-add text-primary"
                              data-modal-target="add_deal"
                              data-modal-toggle="add_deal"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <CommonSelect
                            options={Deals}
                            className="select"
                            defaultValue={Deals[1]}
                          />
                        </div>
                        <div className="mb-3">
                          <div className="flex items-center justify-between">
                            <label className="form-label">Contacts</label>
                            <Link
                              to="#"
                              className="label-add text-primary"
                              data-modal-target="add_contacts"
                              data-modal-toggle="add_contacts"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <CommonSelect
                            options={Contacts}
                            className="select"
                            defaultValue={Contacts[0]}
                          />
                        </div>
                        <div className="mb-3">
                          <div className="flex items-center justify-between">
                            <label className="form-label">Companies</label>
                            <Link
                              to="#"
                              className="label-add text-primary"
                              data-modal-target="add_company"
                              data-modal-toggle="add_company"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <CommonSelect
                            options={Company_Name}
                            className="select"
                            defaultValue={Company_Name[1]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden" id="company-address3" role="tabpanel">
                  <div className="border border-borderColor p-3 rounded shadow mb-5">
                    <p className="mb-3">
                      The best way to get a project done faster is to start sooner.
                      A goal without a timeline is just a dream.The goal you set
                      must be challenging. At the same time, it should be realistic
                      and attainable, not impossible to reach.
                    </p>
                    <p>
                      Commented by <span className="text-primary">Aeron</span> on 15
                      Sep 2023, 11:15 pm
                    </p>
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
      {/* /Edit Activity */}
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
                Are you sure you want to remove activity you selected.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="#"
                  className="btn btn-light z-1 me-2 w-full"
                  data-modal-hide="delete_modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.activities} className="btn btn-primary z-1 w-full">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}
      {/* Add Deal */}
      <div
        id="add_deal"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add Deals</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_deal"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form >
              <div className="p-6">
                <div className="relative mb-4">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-1.5 border w-full border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                  />
                </div>
                <ul className="space-y-3 max-h-64 overflow-y-auto">
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Collins
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Konopelski
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Adams
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Schumm
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Wisozk
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                      />
                      Dawn Mercha
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_deal"
                  type="button"
                  className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Deal */}
      {/* Add Contacts */}
      <div
        id="add_contacts"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add Contacts</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_contacts"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-6">
                <div className="relative mb-4">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-1.5 border w-full border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                  />
                </div>
                <ul className="space-y-3 max-h-64 overflow-y-auto">
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-06.jpg"
                          alt="user-06"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Elizabeth Morgan</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-40.jpg"
                          alt="user-40"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Katherine Brooks</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-05.jpg"
                          alt="user-05"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Sophia Lopez</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-10.jpg"
                          alt="user-10"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>John Michael</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-15.jpg"
                          alt="Katherine"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Natalie Brooks</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/users/user-01.jpg"
                          alt="user-01"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>William Turner</span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_contacts"
                  type="button"
                  className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Contacts */}
      {/* Add Company */}
      <div
        id="add_company"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Add Company</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_company"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-6">
                <div className="relative mb-4">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-9 pr-4 py-1.5 border w-full border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                  />
                </div>
                <ul className="space-y-3 max-h-64 overflow-y-auto">
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-01.svg"
                          alt="company-icon-01"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>NovaWave LLC</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-02.svg"
                          alt="company-icon-02"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>BlueSky Industries</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-03.svg"
                          alt="company-icon-03"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Silver Hawk</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-04.svg"
                          alt="company-icon-04"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Summit Peak</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-05.svg"
                          alt="company-icon-05"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>RiverStone Ventur</span>
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                      <input
                        type="checkbox"
                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                      />
                      <span className="flex items-center space-x-2">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-06.svg"
                          alt="company-icon-06"
                          className="h-6 w-6 rounded-full"
                        />
                        <span>Bright Bridge Grp</span>
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_company"
                  type="button"
                  className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Company */}
    </>


  );
};

export default ActivitiesModal;
