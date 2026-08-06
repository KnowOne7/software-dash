import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import HeaderActions from "../../../components/header-actions/headerActions";
import CommonFooter from "../../../components/common-footer/commonFooter";
import CompaniesDetailsModals from "./modal/companyDetailsModals";
import { Assigned_To, Reminder, Task_Priority } from "../../../core/json/selectOption";
import CommonSelect from "../../../components/common-select/commonSelect";

const CompaniesDetails = () => {

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Companies
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  125
                </span>
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
                  <li className="text-dark font-medium" aria-current="page">
                    Companies
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Dropdown */}
              <HeaderActions />
            </div>
          </div>
          {/* End Page Header */}
          <>
            {/* End Page Header */}
            <>
              <div className="mb-4">
                <Link to={all_routes.companiesGrid} className="inline-flex items-center text-dark">
                  <i className="ti ti-arrow-narrow-left mr-1" />
                  Back to Companies
                </Link>
              </div>
              {/* start user */}
              <div className="bg-white border border-borderColor rounded mb-4">
                <div className="card-body p-4 pb-3">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="flex items-center mb-2">
                      <div className="w-[80px] h-[80px] rounded-full me-3 flex-shrink-0">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-01.svg"
                          className="rounded-full w-full"
                          alt="company-icon-01"
                        />
                      </div>
                      <div>
                        <h5 className="mb-1">Jackson Daniel</h5>
                        <p className="mb-2">Facility Manager, Global INC</p>
                        <div className="flex items-center">
                          <span className="px-1.5 py-0.5 rounded text-[12px] text-danger inline-flex bg-danger-100 items-center me-2">
                            <i className="ti ti-lock me-1" />
                            Private
                          </span>
                          <p className="inline-flex items-center mb-0">
                            <i className="ti ti-star-filled text-warning me-1" /> 5.0
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                      <Link
                        to="#"
                        className="w-8 h-8 border-borderColor rounded flex items-center justify-center border shadow text-dark"
                      >
                        <i className="ti ti-star-filled text-[16px] text-warning" />
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-dark"
                        data-drawer-target="offcanvas_add2"
                        data-drawer-show="offcanvas_add2"
                        aria-controls="offcanvas_add2"
                        data-drawer-placement="right"
                      >
                        <i className="ti ti-plus me-1" />
                        Add Deal
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#add_compose"
                      >
                        <i className="ti ti-mail me-1" />
                        Send Email
                      </Link>
                      <Link
                        to={all_routes.chat}
                        className="w-8 h-8 border-borderColor rounded flex items-center justify-center border shadow"
                      >
                        <i className="ti ti-brand-hipchat" />
                      </Link>
                      <Link
                        to="#"
                        className="w-8 h-8 border-borderColor rounded flex items-center justify-center border shadow"
                        data-drawer-target="offcanvas_edit"
                        data-drawer-show="offcanvas_edit"
                        aria-controls="offcanvas_edit"
                        data-drawer-placement="right"
                      >
                        <i className="ti ti-edit-circle" />
                      </Link>
                      <div className="dropdown relative table-action">
                        <Link
                          to="#"
                          className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                        >
                          <i className="ti ti-dots-vertical" />
                        </Link>
                        <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                          <Link
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                            to="#"
                            data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"
                          >
                            <i className="ti ti-trash me-1" /> Delete
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end user */}
              {/* start grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
                <div className="xl:col-span-3">
                  <div className="w-full">
                    <div className="bg-white border border-borderColor rounded">
                      <div className="p-4">
                        <h6 className="mb-3 font-semibold">Basic Information</h6>
                        <div className="border-b border-borderColor mb-5 pb-5">
                          <div className="flex items-center mb-2">
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-mail text-[14px]" />
                            </span>
                            <p className="mb-0">darleeo@example.com</p>
                          </div>
                          <div className="flex items-center mb-2">
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-phone text-[14px]" />
                            </span>
                            <p className="mb-0">+1 12445-47878</p>
                          </div>
                          <div className="flex items-center mb-3">
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-map-pin text-[14px]" />
                            </span>
                            <p className="mb-0">22, Ave Street, Newyork, USA</p>
                          </div>
                          <div className="flex items-center">
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-calendar-exclamation text-[14px]" />
                            </span>
                            <p className="mb-0">Created on 27 Sep 2025, 11:45 PM</p>
                          </div>
                        </div>
                        <h6 className="mb-3 font-semibold">Other Information</h6>
                        <ul className="border-b border-borderColor mb-5 pb-5">
                          <li className="grid grid-cols-12 mb-2">
                            <span className="col-span-6">Language</span>
                            <span className="col-span-6 text-dark">English</span>
                          </li>
                          <li className="grid grid-cols-12 mb-2">
                            <span className="col-span-6">Currency</span>
                            <span className="col-span-6 text-dark">
                              United States dollar
                            </span>
                          </li>
                          <li className="grid grid-cols-12 mb-2">
                            <span className="col-span-6">Last Modified</span>
                            <span className="col-span-6 text-dark">
                              27 Sep 2023, 11:45 pm
                            </span>
                          </li>
                          <li className="grid grid-cols-12">
                            <span className="col-span-6">Source</span>
                            <span className="col-span-6 text-dark">Paid Campaign</span>
                          </li>
                        </ul>
                        <h6 className="mb-3 font-semibold">Tags</h6>
                        <div className="border-b border-borderColor mb-5 pb-5">
                          <Link
                            to="#"
                            className="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-success-100 text-success border-b border-success inline-flex me-2"
                          >
                            Collab
                          </Link>
                          <Link
                            to="#"
                            className="badge badge-tag px-1.5 py-0.5 rounded text-[12px] bg-warning-100 text-warning border-b border-warning inline-fle mb-0"
                          >
                            Rated
                          </Link>
                        </div>
                        <div className="flex items-center justify-between flex-wrap">
                          <h6 className="mb-3 font-semibold">Company</h6>
                          <Link
                            to="#"
                            className="text-primary mb-3"
                            data-drawer-target="offcanvas_add"
                            data-drawer-show="offcanvas_add"
                            aria-controls="offcanvas_add"
                            data-drawer-placement="right"
                          >
                            <i className="ti ti-circle-plus me-1" />
                            Add New
                          </Link>
                        </div>
                        <div className="mb-3">
                          <div>
                            <h6 className="flex text-[14px] align-items-center font-medium mb-3">
                              <Link
                                to={all_routes.companiesDetails}
                                className="avatar w-10 h-10 rounded-full border border-borderColor flex items-center justify-center p-1 me-2"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/company/company-01.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to={all_routes.companiesDetails} className="flex flex-col">
                                Summit Peak
                                <span className="text-default text-[13px] font-normal mt-1">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  5.0
                                </span>
                              </Link>
                            </h6>
                            <h6 className="flex text-[14px] align-items-center font-medium mb-3">
                              <Link
                                to={all_routes.companiesDetails}
                                className="avatar w-10 h-10 rounded-full border border-borderColor flex items-center justify-center p-1 me-2"
                              >
                                <ImageWithBasePath
                                  className="w-auto h-auto"
                                  src="assets/img/company/company-02.svg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to={all_routes.companiesDetails} className="flex flex-col">
                                RiverStone Ltd
                                <span className="text-default text-[13px] font-normal mt-1">
                                  <i className="ti ti-star-filled text-warning me-1" />
                                  4.0
                                </span>
                              </Link>
                            </h6>
                          </div>
                        </div>
                        <hr className="border-borderColor my-5" />
                        <h6 className="mb-3 font-semibold">Social Profile</h6>
                        <ul className="flex items-center">
                          <li>
                            <Link
                              to="#"
                              className="w-8 h-8 hover:bg-light  flex items-center justify-center rounded-full text-[14px] text-dark"
                            >
                              <i className="ti ti-brand-youtube" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="w-8 h-8 hover:bg-light  flex items-center justify-center rounded-full text-[14px] text-dark"
                            >
                              <i className="ti ti-brand-facebook" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="w-8 h-8 hover:bg-light  flex items-center justify-center rounded-full text-[14px] text-dark"
                            >
                              <i className="ti ti-brand-instagram" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="w-8 h-8 hover:bg-light  flex items-center justify-center rounded-full text-[14px] text-dark"
                            >
                              <i className="ti ti-brand-whatsapp" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="w-8 h-8 hover:bg-light  flex items-center justify-center rounded-full text-[14px] text-dark"
                            >
                              <i className="ti ti-brand-pinterest" />
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="w-8 h-8 hover:bg-light  flex items-center justify-center rounded-full text-[14px] text-dark"
                            >
                              <i className="ti ti-brand-linkedin" />
                            </Link>
                          </li>
                        </ul>
                        <hr className="border-borderColor my-5" />
                        <h6 className="mb-3 font-semibold">Settings</h6>
                        <div className="mb-0">
                          <Link to="#" className="flex items-center mb-2">
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-share-2" />
                            </span>
                            Share Contact
                          </Link>
                          <Link to="#" className="flex items-center mb-2">
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-star" />
                            </span>
                            Add to Favourite
                          </Link>
                          <Link
                            to="#"
                            className="flex items-center mb-0"
                            data-modal-target="delete_modal"
                            data-modal-toggle="delete_modal"
                          >
                            <span className="w-6 h-6 flex items-center justify-center bg-light p-0 flex-shrink-0 rounded-full text-dark me-2">
                              <i className="ti ti-trash-x" />
                            </span>
                            Delete Contact
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Start right column */}
                <div className="xl:col-span-9">
                  <div className="w-full">
                    {/* start tab */}
                    <ul
                      className="flex-wrap flex bg-white rounded border border-borderColor gap-x-2 px-3 py-4 mb-4"
                      id="default-styled-tab3"
                      data-tabs-toggle="#company-tab-content3"
                      data-tabs-active-classes="text-primary hover:text-primary border-primary"
                      data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
                      role="tablist"
                    >
                      <li className="me-3" role="presentation">
                        <button
                          className="inline-block py-2 px-4 border-b-2 font-medium"
                          data-tabs-target="#activities"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ti ti-alarm-minus me-1" />
                          Activities
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          className="inline-block py-2 px-4 border-b-2 font-medium"
                          data-tabs-target="#notes-list"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ti ti-notes me-1" />
                          Notes
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          className="inline-block py-2 px-4 border-b-2 font-medium"
                          data-tabs-target="#calls"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ti ti-phone me-1" />
                          Calls
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          className="inline-block py-2 px-4 border-b-2 font-medium"
                          data-tabs-target="#files"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ti ti-file me-1" />
                          Files
                        </button>
                      </li>
                      <li role="presentation">
                        <button
                          className="inline-block py-2 px-4 border-b-2 font-medium"
                          data-tabs-target="#email"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ti ti-mail me-1" />
                          Email
                        </button>
                      </li>
                    </ul>
                    {/* start tab content */}
                    <div id="company-tab-content3">
                      {/* Item 1 */}
                      <div className="hidden" id="activities" role="tabpanel">
                        <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                          <div className="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                            <h5 className="m-0 font-semibold">Activities</h5>
                            {/* Dropdown */}
                            <div>
                              <Link
                                to="#"
                                className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="sort-dropdown"
                              >
                                <i className="ti ti-sort-ascending-2 me-2" />
                                Sort By
                                <i className="ti ti-chevron-down ml-1" />
                              </Link>
                              <ul
                                id="sort-dropdown"
                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
                              >
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >
                                    Newest
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >
                                    Oldest
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="p-4">
                            {/* Item 1 */}
                            <p className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info mb-4">
                              {" "}
                              <i className="ti ti-calendar me-1 inline-flex items-center" />{" "}
                              28 May 2025
                            </p>
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                <div className="flex items-center justify-center w-10 h-10 rounded bg-info shrink-0">
                                  <i className="ti ti-mail-code text-[18px] text-white" />
                                </div>
                                <div>
                                  <h6 className="font-medium text-[14px] mb-1">
                                    You sent 1 Message to the contact.
                                  </h6>
                                  <p className="mb-0">10:25 pm</p>
                                </div>
                              </div>
                            </div>
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                <div className="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0">
                                  <i className="ti ti-phone text-[18px] text-white" />
                                </div>
                                <div>
                                  <h6 className="font-medium text-[14px] mb-1">
                                    Denwar responded to your appointment schedule by call at
                                    09:30pm.
                                  </h6>
                                  <p className="mb-0">9:25 pm</p>
                                </div>
                              </div>
                            </div>
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                  <i className="ti ti-notes text-[18px] text-white" />
                                </div>
                                <div>
                                  <h6 className="font-medium text-[14px] mb-1">
                                    Notes added by Antony.
                                  </h6>
                                  <p className="mb-1">
                                    Please accept my apologies for the inconvenience caused.
                                    It would be much appreciated if it's possible to
                                    reschedule to 6:00 PM, or any other day that week.
                                  </p>
                                  <p className="mb-0">10:25 pm</p>
                                </div>
                              </div>
                            </div>
                            {/* Item 2 */}
                            <p className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info mb-4">
                              {" "}
                              <i className="ti ti-calendar me-1 inline-flex items-center" />{" "}
                              27 May 2025
                            </p>
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                <div className="flex items-center justify-center w-10 h-10 rounded bg-warning shrink-0">
                                  <i className="ti ti-user-pin text-[18px] text-white" />
                                </div>
                                <div>
                                  <h6 className="font-medium text-[14px] mb-1 flex items-center gap-3">
                                    Meeting With
                                    <span className="flex items-center justify-center w-5 h-5 shrink-0 ms-8">
                                      <ImageWithBasePath
                                        src="assets/img/users/avatar-1.jpg"
                                        alt="avatar-1"
                                        className="img-fluid me-2 rounded"
                                      />{" "}
                                      Abraham
                                    </span>
                                  </h6>
                                  <p className="mb-0">Schedueled on 05:00 pm</p>
                                </div>
                              </div>
                            </div>
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                <div className="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0">
                                  <i className="ti ti-notes text-[18px] text-white" />
                                </div>
                                <div>
                                  <h6 className="font-medium text-[14px] mb-1">
                                    Drain responded to your appointment schedule question.
                                  </h6>
                                  <p className="mb-0">9:25 pm</p>
                                </div>
                              </div>
                            </div>
                            {/* Item 3 */}
                            <p className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info-100 text-info border-info mb-4">
                              {" "}
                              <i className="ti ti-calendar me-1 inline-flex items-center" />{" "}
                              Upcoming Activity
                            </p>
                            <div className="border border-borderColor rounded p-4">
                              <div className="flex items-start gap-3 lg:flex-nowrap flex-wrap">
                                <div className="flex items-center justify-center w-10 h-10 rounded bg-warning shrink-0">
                                  <i className="ti ti-user-pin text-[18px] text-white" />
                                </div>
                                <div>
                                  <h6 className="font-medium text-[14px] mb-1">
                                    Product Meeting
                                  </h6>
                                  <p className="mb-1">
                                    {" "}
                                    A product team meeting is a gathering of the
                                    cross-functional product team — ideally including team
                                    members from product, engineering, marketing, and
                                    customer support.
                                  </p>
                                  <p className="mb-4">Schedueled on 05:00 pm</p>
                                  {/* start row */}
                                  <div className="grid grid-cols-1 lg:grid-cols-12 p-4 border border-borderColor rounded flex items-center gap-4 flex-wrap">
                                    <div className="xl:col-span-4 lg:col-span-4">
                                      <div>
                                        <label className="form-label">
                                          Reminder <span className="text-danger">*</span>
                                        </label>
                                        <CommonSelect
                                          options={Reminder}
                                          className="select"
                                          defaultValue={Reminder[0]}
                                        />
                                      </div>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-4">
                                      <div>
                                        <label className="form-label">
                                          Task Priority{" "}
                                          <span className="text-danger">*</span>
                                        </label>
                                        <CommonSelect
                                          options={Task_Priority}
                                          className="select"
                                          defaultValue={Task_Priority[0]}
                                        />
                                      </div>
                                    </div>
                                    <div className="xl:col-span-4 lg:col-span-4">
                                      <div>
                                        <label className="form-label">
                                          Assigned To <span className="text-danger">*</span>
                                        </label>
                                        <CommonSelect
                                          options={Assigned_To}
                                          className="select"
                                          defaultValue={Assigned_To[0]}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  {/* end row */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Item 2 */}
                      <div className="hidden" id="notes-list" role="tabpanel">
                        <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                          <div className="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                            <h5 className="m-0 font-semibold">Notes</h5>
                            {/* Dropdown */}
                            <div className="flex items-center gap-3 flex-wrap">
                              <div>
                                <Link
                                  to="#"
                                  className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                  data-dropdown-toggle="notes-dropdown"
                                >
                                  <i className="ti ti-sort-ascending-2 me-2" />
                                  Sort By
                                  <i className="ti ti-chevron-down ms-2" />
                                </Link>
                                <ul
                                  id="notes-dropdown"
                                  className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                >
                                  <li>
                                    <Link
                                      to="#"
                                      className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                      Newest
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                      Oldest
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <button
                                className="inline-flex items-center font-medium text-danger hover:text-dark"
                                data-modal-target="add_new_notes"
                                data-modal-toggle="add_new_notes"
                              >
                                <i className="ti ti-circle-plus me-1" />
                                Add New
                              </button>
                            </div>
                          </div>
                          <div className="p-4">
                            {/* Item 1 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/users/avatar-1.jpg"
                                      alt="avatar-1"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <h6 className="font-medium text-[14px] mb-0 flex flex-col gap-1">
                                    Darlee Robertson{" "}
                                    <span className="text-[14px] font-normal text-body">
                                      15 Sep 2023, 12:10 pm
                                    </span>
                                  </h6>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="edit_notes"
                                        data-modal-toggle="edit_notes"
                                      >
                                        <i className="ti ti-edit me-1" /> Edit
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <h6 className="font-medium text-[14px] mb-1">
                                Notes added by Antony
                              </h6>
                              <p>
                                A project review evaluates the success of an initiative and
                                identifies areas for improvement. It can also evaluate a
                                current project to determine whether it's on the right
                                track. Or, it can determine the success of a completed
                                project.
                              </p>
                              {/* start row */}
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                                <div className="lg:col-span-5">
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
                                <div className="lg:col-span-5">
                                  <div className="border border-borderColor rounded p-4 rounded relative">
                                    <div className="flex items-center gap-3 flex-wrap">
                                      <div className="flex items-center justify-center w-10 h-10 rounded bg-info shrink-0">
                                        <ImageWithBasePath
                                          src="assets/img/users/avatar-10.jpg"
                                          alt="avatar-10"
                                          className="img-fluid rounded"
                                        />
                                      </div>
                                      <div>
                                        <h6 className="font-medium text-[14px] mb-1">
                                          637.jpg
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
                              <div className="mt-4 notes-editor">
                                <div className="mb-4 note-edit-wrap">
                                  <div className="editor pages-editor" />
                                  <div className="flex items-center justify-end mt-3">
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-light me-3 hover:bg-primary add-cancel"
                                    >
                                      Cancel
                                    </Link>
                                    <Link
                                      to="#"
                                      className="btn btn-sm btn-primary hover:bg-danger"
                                    >
                                      Save
                                    </Link>
                                  </div>
                                </div>
                                <div>
                                  <Link
                                    to="#"
                                    className="flex items-center justify-end text-primary font-medium hover:text-dark add-comment"
                                  >
                                    <i className="ti ti-circle-plus me-1" />
                                    Add Comment
                                  </Link>
                                </div>
                              </div>
                            </div>
                            {/* Item 2 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/users/avatar-1.jpg"
                                      alt="avatar-1"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <h6 className="font-medium text-[14px] mb-0 flex flex-col gap-1">
                                    Sharon Roy
                                    <span className="text-[14px] font-normal text-body">
                                      18 Sep 2023, 12:10 pm
                                    </span>
                                  </h6>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="edit_notes"
                                        data-modal-toggle="edit_notes"
                                      >
                                        <i className="ti ti-edit me-1" /> Edit
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <h6 className="font-medium text-[14px] mb-1">
                                Notes added by Antony
                              </h6>
                              <p>
                                A project plan typically contains a list of the essential
                                elements of a project, such as stakeholders, scope,
                                timelines, estimated cost and communication methods. The
                                project manager typically lists the information based on the
                                assignment.
                              </p>
                              {/* start row */}
                              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                                <div className="lg:col-span-5">
                                  <div className="border border-borderColor rounded p-4 rounded relative">
                                    <div className="flex items-center gap-3 flex-wrap">
                                      <div className="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0">
                                        <i className="ti ti-file-spreadsheet  text-[18px] text-white" />
                                      </div>
                                      <div>
                                        <h6 className="font-medium text-[14px] mb-1">
                                          Andewpass.txt
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
                              <div className="p-4 bg-light rounded mt-4">
                                <p className="mb-2">
                                  The best way to get a project done faster is to start
                                  sooner. A goal without a timeline is just a dream.The goal
                                  you set must be challenging. At the same time, it should
                                  be realistic and attainable, not impossible to reach.
                                </p>
                                <p className="mb-4">
                                  Commented by{" "}
                                  <Link to="#" className="text-info">
                                    Aeron
                                  </Link>{" "}
                                  on 15 Sep 2024, 11:15 pm
                                </p>
                                <Link
                                  to="#"
                                  className="btn border border-borderColor bg-white btn-sm"
                                >
                                  <i className="ti ti-arrow-back-up-double me-1" />
                                  Reply
                                </Link>
                              </div>
                            </div>
                            {/* Item 3 */}
                            <div className="border border-borderColor rounded p-4">
                              <div className="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/users/avatar-1.jpg"
                                      alt="avatar-1"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <h6 className="font-medium text-[14px] mb-0 flex flex-col gap-1">
                                    Vaughan Lewis{" "}
                                    <span className="text-[14px] font-normal text-body">
                                      20 Sep 2023, 10:26 pm
                                    </span>
                                  </h6>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="edit_notes"
                                        data-modal-toggle="edit_notes"
                                      >
                                        <i className="ti ti-edit me-1" /> Edit
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>
                                Projects play a crucial role in the success of
                                organizations, and their importance cannot be overstated.
                                Whether it's launching a new product, improving an existing
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Item 3 */}
                      <div className="hidden " id="calls" role="tabpanel">
                        <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                          <div className="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                            <h5 className="m-0 font-semibold">Calls</h5>
                            {/* Dropdown */}
                            <Link
                              to="#"
                              className="inline-flex items-center font-medium text-danger hover:text-dark transition"
                              data-modal-target="add_call"
                              data-modal-toggle="add_call"
                            >
                              <i className="ti ti-circle-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <div className="p-4">
                            {/* Item 1 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/users/avatar-1.jpg"
                                      alt="avatar-1"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <h6 className="font-medium text-[14px] mb-0">
                                    Darlee Robertson{" "}
                                    <span className="text-[14px] font-normal text-body">
                                      logged a call on 23 Jul 2023, 10:00 pm
                                    </span>
                                  </h6>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div>
                                    <Link
                                      to="#"
                                      className="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                      data-dropdown-toggle="call-dropdown"
                                    >
                                      Busy
                                      <i className="ti ti-chevron-down ms-2" />
                                    </Link>
                                    <ul
                                      id="call-dropdown"
                                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                    >
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Busy
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          No Answer
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Unavailable
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Wrong Number
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Left Voice Message
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Moving Forward
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="edit_call"
                                        data-modal-toggle="edit_call"
                                      >
                                        <i className="ti ti-edit me-1" /> Edit
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>
                                A project review evaluates the success of an initiative and
                                identifies areas for improvement. It can also evaluate a
                                current project to determine whether it's on the right
                                track. Or, it can determine the success of a completed
                                project.
                              </p>
                            </div>
                            {/* Item 2 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/users/avatar-2.jpg"
                                      alt="avatar-1"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <h6 className="font-medium text-[14px] mb-0">
                                    Sharon Roy{" "}
                                    <span className="text-[14px] font-normal text-body">
                                      logged a call on 18 Sep 2025, 09:52AM
                                    </span>
                                  </h6>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div>
                                    <Link
                                      to="#"
                                      className="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                      data-dropdown-toggle="call-dropdown2"
                                    >
                                      No Answer
                                      <i className="ti ti-chevron-down ms-2" />
                                    </Link>
                                    <ul
                                      id="call-dropdown2"
                                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                    >
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          No Answer
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Unavailable
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Wrong Number
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Left Voice Message
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Moving Forward
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="edit_call"
                                        data-modal-toggle="edit_call"
                                      >
                                        <i className="ti ti-edit me-1" /> Edit
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>
                                A project plan typically contains a list of the essential
                                elements of a project, such as stakeholders, scope,
                                timelines, estimated cost and communication methods. The
                                project manager typically lists the information based on the
                                assignment.
                              </p>
                            </div>
                            {/* Item 3 */}
                            <div className="border border-borderColor rounded p-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div className="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0">
                                    <ImageWithBasePath
                                      src="assets/img/users/avatar-3.jpg"
                                      alt="avatar-1"
                                      className="img-fluid rounded"
                                    />
                                  </div>
                                  <h6 className="font-medium text-[14px] mb-0">
                                    Vaughan{" "}
                                    <span className="text-[14px] font-normal text-body">
                                      logged a call on 20 Sep 2025, 10:26 PM
                                    </span>
                                  </h6>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div>
                                    <Link
                                      to="#"
                                      className="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                      data-dropdown-toggle="call-dropdown3"
                                    >
                                      No Answer
                                      <i className="ti ti-chevron-down ms-2" />
                                    </Link>
                                    <ul
                                      id="call-dropdown3"
                                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                    >
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          No Answer
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Unavailable
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Wrong Number
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Left Voice Message
                                        </Link>
                                      </li>
                                      <li>
                                        <Link
                                          to="#"
                                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        >
                                          Moving Forward
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="edit_call"
                                        data-modal-toggle="edit_call"
                                      >
                                        <i className="ti ti-edit me-1" /> Edit
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <p>
                                Projects play a crucial role in the success of
                                organizations, and their importance cannot be overstated.
                                Whether it's launching a new product, improving an existing.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Item 4 */}
                      <div className="hidden " id="files" role="tabpanel">
                        <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                          <div className="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                            <h5 className="m-0 font-semibold">Files</h5>
                          </div>
                          <div className="p-4">
                            {/* Item 1 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                                <div>
                                  <h6 className="mb-1">Manage Documents</h6>
                                  <p>
                                    Send customizable quotes, proposals and contracts to
                                    close deals faster
                                  </p>
                                </div>
                                <Link
                                  className="btn btn-primary rounded"
                                  to="#"
                                  data-modal-target="create_account"
                                  data-modal-toggle="create_account"
                                >
                                  Create Account
                                </Link>
                              </div>
                            </div>
                            {/* Item 2 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                                <div className="flex items-center gap-3 xl:flex-nowrap flex-wrap">
                                  <div>
                                    <h6 className="mb-1 text-[14px] font-semibold">
                                      Collier-Turner Proposal
                                    </h6>
                                    <p className="mb-3">
                                      Send customizable quotes, proposals and contracts to
                                      close deals faster.
                                    </p>
                                    <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                      <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
                                        <ImageWithBasePath
                                          src="assets/img/users/avatar-2.jpg"
                                          alt="avatar-1"
                                          className="img-fluid rounded-full"
                                        />
                                      </div>
                                      <h6 className="font-medium text-[14px] mb-0">
                                        Sharon Roy{" "}
                                        <span className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body">
                                          Owner
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap ">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="badge badge-pill badge-status  px-1.5 py-0.5 rounded text-[12px] bg-danger-100 border-b text-danger">
                                      Proposal
                                    </span>
                                    <span className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info text-white">
                                      Draft
                                    </span>
                                  </div>
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                        to="#"
                                      >
                                        <i className="ti ti-download me-1" /> Download
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Item 3 */}
                            <div className="border border-borderColor rounded p-4 mb-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div>
                                    <h6 className="mb-1 text-[14px] font-semibold">
                                      Collier-Turner Proposal
                                    </h6>
                                    <p className="mb-3">
                                      Send customizable quotes, proposals and contracts to
                                      close deals faster.
                                    </p>
                                    <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                      <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
                                        <ImageWithBasePath
                                          src="assets/img/users/avatar-4.jpg"
                                          alt="avatar-1"
                                          className="img-fluid rounded-full"
                                        />
                                      </div>
                                      <h6 className="font-medium text-[14px] mb-0">
                                        Jessica Louise{" "}
                                        <span className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body">
                                          Owner
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div>
                                    <span className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-success text-white">
                                      sent
                                    </span>
                                  </div>
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                        to="#"
                                      >
                                        <i className="ti ti-download me-1" /> Download
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Item 4 */}
                            <div className="border border-borderColor rounded p-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                                <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                  <div>
                                    <h6 className="mb-1 text-[14px] font-semibold">
                                      Collier-Turner Proposal
                                    </h6>
                                    <p className="mb-3">
                                      Send customizable quotes, proposals and contracts to
                                      close deals faster.
                                    </p>
                                    <div className="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                                      <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0">
                                        <ImageWithBasePath
                                          src="assets/img/users/avatar-5.jpg"
                                          alt="avatar-1"
                                          className="img-fluid rounded-full"
                                        />
                                      </div>
                                      <h6 className="font-medium text-[14px] mb-0">
                                        Dawn Merhca
                                        <span className="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body ms-2">
                                          Owner
                                        </span>
                                      </h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <div className="dropdown relative table-action">
                                    <Link
                                      to="#"
                                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    >
                                      <i className="ti ti-dots-vertical" />
                                    </Link>
                                    <div className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                        to="#"
                                        data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"
                                      >
                                        <i className="ti ti-trash me-1" /> Delete
                                      </Link>
                                      <Link
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                        to="#"
                                      >
                                        <i className="ti ti-download me-1" /> Download
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Item 5 */}
                      <div className="hidden " id="email" role="tabpanel">
                        <div className="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                          <div className="flex items-center justify-between gap-3 p-4 border-b border-borderColor">
                            <h5 className="m-0 font-semibold">Email</h5>
                            <Link
                              to="#"
                              className="inline-flex items-center font-medium text-danger hover:text-dark transition"
                            >
                              <i className="ti ti-circle-plus me-1" />
                              Add New
                            </Link>
                          </div>
                          <div className="p-4">
                            {/* Item 1 */}
                            <div className="border border-borderColor rounded p-4">
                              <div className="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                                <div>
                                  <h6 className="mb-1">Manage Email</h6>
                                  <p>
                                    You can send and reply to emails directly via this
                                    section.
                                  </p>
                                </div>
                                <Link
                                  className="btn btn-primary rounded"
                                  to="#"
                                  data-modal-target="manage_email"
                                  data-modal-toggle="manage_email"
                                >
                                  Connect Account
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end tab content */}
                  </div>
                </div>
              </div>
              {/* end grid */}
            </>

          </>

        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      <CompaniesDetailsModals />
    </>


  );
};

export default CompaniesDetails;
