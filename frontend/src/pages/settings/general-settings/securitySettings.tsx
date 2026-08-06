import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import { useState } from "react";
import CommonPhoneInput from "../../../components/common-phoneInput/commonPhoneInput";
import { Reason } from "../../../core/json/selectOption";
import CommonSelect from "../../../components/common-select/commonSelect";
type PasswordField = "password" | "confirmPassword";

const SecuritySettings = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  const [phone, setPhone] = useState<string | undefined>();
  const [phone2, setPhone2] = useState<string | undefined>();
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Settings
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                  <li>
                    <Link
                      to={all_routes.dealsDashboard}
                      className="hover:underline text-gray-700"
                    >
                      Home
                    </Link>
                    <span>
                      <i className="ti ti-chevron-right" />
                    </span>
                  </li>
                  <li className="text-dark font-medium" aria-current="page">
                    Settings
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* Refresh Button */}
              <button
                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Refresh"
              >
                <i className="ti ti-refresh" />
              </button>
              {/* Collapse Button */}
              <button
                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                title="Collapse"
                id="collapse-header"
              >
                <i className="ti ti-transition-top" />
              </button>
            </div>
          </div>
          {/* End Page Header */}
          <SettingsTopbar />
          {/* end card */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
            <div className="xl:col-span-3 theiaStickySidebar">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="settings-sidebar">
                  <h5 className="mb-3 text-[17px]">General Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.profile}
                      className="d-block p-2 font-medium active  rounded  hover:text-primary transition-all"
                    >
                      Profile
                    </Link>
                    <Link
                      to={all_routes.security}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
                    >
                      Security
                    </Link>
                    <Link
                      to={all_routes.notification}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Notifications
                    </Link>
                    <Link
                      to={all_routes.connectedApps}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Connected Apps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4 pb-1">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Security Settings</h5>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-6">
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Password
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Last Changed 03 Jan 2025, 09:00 AM
                          </p>
                        </div>
                        <div>
                          <Link
                            to="javascript:void(0)"
                            className="btn btn-xs px-2 py-1 btn-light"
                            data-modal-target="change_password"
                            data-modal-toggle="change_password"
                          >
                            Change Password
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Two Factor
                            </h6>
                            <label className="flex items-center justify-end cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                defaultChecked
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </div>
                          <p className="text-[13px] mb-0">
                            Receive codes via SMS or email every time you login
                          </p>
                        </div>
                        <div>
                          <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex">
                            Enabled
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Google Authenticator
                            </h6>
                            <label className="flex items-center justify-end cursor-pointer">
                              <input
                                type="checkbox"
                                defaultValue=""
                                className="sr-only peer"
                                defaultChecked
                              />
                              <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                            </label>
                          </div>
                          <p className="text-[13px] mb-0">
                            Google Authenticator adds an extra layer of security
                          </p>
                        </div>
                        <div>
                          <span className="text-xs bg-success-100 text-success rounded border-b border-success px-2 py-0.5 me-2">
                            Connected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Phone Number Verification
                              <i className="ti ti-discount-check-filled text-success ms-1" />
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Verified Mobile Number :{" "}
                            <span className="text-dark">+99264710583</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <Link
                              to="javascript:void(0)"
                              className="btn btn-xs px-2 py-1 btn-light me-2"
                              data-modal-target="change_phone_number"
                              data-modal-toggle="change_phone_number"
                            >
                              Change
                            </Link>
                          </div>
                          <Link
                            to="javascript:void(0)"
                            className="text-primary text-[12px] font-medium"
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Email Verification
                              <i className="ti ti-discount-check-filled text-success ms-1" />
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Verified Email :{" "}
                            <span className="text-dark">info@example.com</span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div>
                            <Link
                              to="javascript:void(0)"
                              className="btn btn-xs px-2 py-1 btn-light me-2"
                              data-modal-target="change_email"
                              data-modal-toggle="change_email"
                            >
                              Change
                            </Link>
                          </div>
                          <Link
                            to="javascript:void(0)"
                            className="text-primary text-[12px] font-medium"
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Device Management
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Last Changed 15 Jan 2025, 12:00 AM
                          </p>
                        </div>
                        <div>
                          <Link
                            to="javascript:void(0)"
                            className="btn btn-xs px-2 py-1 btn-light me-2"
                            data-modal-target="device_management"
                            data-modal-toggle="device_management"
                          >
                            Manage
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Account Activity
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Last Changed 20 Jan 2025, 11:30 AM
                          </p>
                        </div>
                        <div>
                          <Link
                            to="javascript:void(0)"
                            className="btn btn-xs px-2 py-1 btn-light me-2"
                            data-modal-target="account_activity"
                            data-modal-toggle="account_activity"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Deactive Account
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Last Changed 04 Mar 2023, 08:40 AM
                          </p>
                        </div>
                        <div>
                          <Link
                            to="javascript:void(0)"
                            className="btn btn-xs px-2 py-1 btn-light me-2"
                            data-modal-target="deactive_account"
                            data-modal-toggle="deactive_account"
                          >
                            Deactive
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-4 md:col-span-6 flex">
                    <div className="border border-borderColor rounded bg-white flex-1 mb-3">
                      <div className="p-4 flex justify-between flex-col">
                        <div className="mb-3">
                          <div className="flex items-center justify-between mb-1">
                            <h6 className="text-[14px] font-semibold mb-0">
                              Delete Account
                            </h6>
                          </div>
                          <p className="text-[13px] mb-0">
                            Last Changed 13 Mar 2023, 02:40 PM
                          </p>
                        </div>
                        <div>
                          <Link
                            to="javascript:void(0)"
                            className="btn btn-xs px-2 py-1 btn-light me-2"
                            data-modal-target="delete_account"
                            data-modal-toggle="delete_account"
                          >
                            Delete Account
                          </Link>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}

      <>
        {/* Change Password */}
        <div
          id="change_password"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Change Password</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="change_password"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div>
                    <div className="mb-3">
                      <label className="form-label">
                        Current Password <span className="text-danger">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        New Password <span className="text-danger">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <input type="password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="change_password"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Change Password */}
        {/* Change Phone Number */}
        <div
          id="change_phone_number"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Phone Number Verify</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="change_phone_number"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div>
                    <div className="mb-3">
                      <div className="input-blocks">
                        <label className="form-label">
                          Current Phone Number{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <CommonPhoneInput
                          value={phone}
                          onChange={setPhone}
                          placeholder="(201) 555-0123"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div>
                        <label className="form-label">
                          New Phone Number{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <CommonPhoneInput
                          value={phone2}
                          onChange={setPhone2}
                          placeholder="(201) 555-0123"
                        />
                      </div>
                      <p className="mt-2">
                        <i className="ti ti-info-circle me-1" />
                        New phone number only updated once you verified{" "}
                      </p>
                    </div>
                    <div>
                      <label className="form-label">
                        Current Password <span className="text-danger">*</span>
                      </label>
                      <div className="input-group input-group-flat pass-group">
                        <input
                          type={
                            passwordVisibility.password ? "text" : "password"
                          }
                          className="shadow-none form-control "
                          placeholder="****************"
                        />
                        <span
                          className={`ti toggle-password input-group-text toggle-password ${
                            passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                          }`}
                          onClick={() => togglePasswordVisibility("password")}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="change_phone_number"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Change Phone Number */}
        {/* Change Email password */}
        <div
          id="change_email"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Change Email Address</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="change_email"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div>
                    <div className="mb-3">
                      <div className="input-blocks">
                        <label className="form-label">
                          Current Email Address{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div>
                        <label className="form-label">
                          New Email Address
                          <span className="text-danger">*</span>
                        </label>
                        <input className="form-control" type="email" />
                      </div>
                      <p className="d-inline-flex align-items-center mt-1 mb-0">
                        <i className="ti ti-info-circle me-1" />
                        New email address only updated once you verified{" "}
                      </p>
                    </div>
                    <div>
                      <label className="form-label">
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <div className="input-group input-group-flat pass-group">
                        <input
                          type={
                            passwordVisibility.password ? "text" : "password"
                          }
                          className="shadow-none form-control "
                          placeholder="****************"
                        />
                        <span
                          className={`ti toggle-password input-group-text toggle-password ${
                            passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                          }`}
                          onClick={() => togglePasswordVisibility("password")}
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="change_email"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Change  Email password */}
        {/* Change Device Password */}
        <div
          id="device_management"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[800px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Device Management</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="device_management"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                {/* Start Table */}
                <div className="table-responsive custom-table">
                  <table className="table table-nowrap w-full">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-left">Device</th>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Location</th>
                        <th className="p-3 text-left">IP Address</th>
                        <th className="p-3 text-left" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">Chrome - Windows</td>
                        <td className="p-3">15 May 2025, 10:30AM</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">232.222.12.72</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded"
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Safari Macos</td>
                        <td className="p-3">10 Apr 2025, 05:15 PM</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">224.111.12.75</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded"
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Firefox Windows</td>
                        <td className="p-3">15 Mar 2025, 02:40 PM</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">111.222.13.28</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded"
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">Safari Macos</td>
                        <td className="p-3">15 Jan 2025, 08:00AM</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">120.517.26.17</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded"
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
        {/* /Change Device Password */}
        {/* Change Account Activity */}
        <div
          id="account_activity"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[800px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Account Activity</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="account_activity"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                {/* Start Table */}
                <div className="table-responsive custom-table">
                  <table className="table table-nowrap w-full">
                    <thead className="table-light">
                      <tr>
                        <th className="p-3 text-left">Date</th>
                        <th className="p-3 text-left">Device</th>
                        <th className="p-3 text-left">IP Address</th>
                        <th className="p-3 text-left">Location</th>
                        <th className="p-3 text-left" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3">15 May 2025, 10:30AM</td>
                        <td className="p-3">Chrome - Windows</td>
                        <td className="p-3">232.222.12.72</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded "
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">10 Apr 2025, 05:15 PM</td>
                        <td className="p-3">Safari Macos</td>
                        <td className="p-3">224.111.12.75</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded "
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">15 Mar 2025, 02:40 PM</td>
                        <td className="p-3">Firefox Windows</td>
                        <td className="p-3">111.222.13.28</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded "
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3">15 Jan 2025, 08:00AM</td>
                        <td className="p-3">Safari Macos</td>
                        <td className="p-3">120.517.26.17</td>
                        <td className="p-3">New York / USA</td>
                        <td className="p-3">
                          <div>
                            <Link
                              to="#"
                              className="w-6 h-6 flex items-center justify-center hover:bg-primary-100 transition-all shadow border border-borderColor rounded "
                            >
                              <i className="ti ti-logout" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
        {/* /Change Account Activity */}
        {/* Deactivate Account modal */}
        <div
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
          id="deactive_account"
        >
          <div className="relative bg-white rounded-defaultradius p-5">
            <div className="modal-content rounded-0">
              <div className="modal-body p-4 text-center">
                <div className="mb-3 relative z-[1]">
                  <span className="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center">
                    <i className="ti ti-trash text-[24px]" />
                  </span>
                </div>
                <h5 className="mb-1">Deactive Account Confirmation</h5>
                <p className="mb-3">
                  Are you sure you want to deactivate your account.
                </p>
                <div className="flex justify-center items-center">
                  <Link
                    to="#"
                    className="btn btn-light z-1 me-2 w-full"
                    data-modal-hide="deactive_account"
                  >
                    Cancel
                  </Link>
                  <Link
                    to={all_routes.security}
                    className="btn btn-primary z-1 w-full"
                  >
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Deactivate Account modal */}
        {/* Delete Account */}
        <div
          id="delete_account"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Deleting Your Account</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="delete_account"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4" data-select2-id={6}>
                  <p className="font-medium text-[16px] mb-1 text-dark">
                    Why Are You Deleting Your Account?
                  </p>
                  <p className="text-[16px] mb-3">
                    We're sorry to see you go! To help us improve, please let us
                    know your reason for deleting your account
                  </p>
                  <div data-select2-id={5}>
                    <div>
                      <div className="mb-3">
                        <label className="form-label">
                          Reason<span className="text-danger ms-1">*</span>
                        </label>
                        <CommonSelect
                          options={Reason}
                          className="select"
                          defaultValue={Reason[0]}
                        />
                      </div>
                    </div>
                    {/* end col */}
                    <div id="otherReasonBox" style={{ display: "none" }}>
                      <label className="form-label">
                        Please Specify
                        <span className="text-danger ms-1">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Description"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="delete_account"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Delete Account */}
      </>
    </>
  );
};

export default SecuritySettings;
