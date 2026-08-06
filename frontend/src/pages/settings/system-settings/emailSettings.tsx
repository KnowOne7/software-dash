import { Link } from "react-router";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";
import CommonFooter from "../../../components/common-footer/commonFooter";

const EmailSettings = () => {
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
                  <h5 className="mb-3 text-[17px]">System Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.emailSettings}
                      className="d-block p-2 font-medium active bg-rose-100 rounded text-primary border-l border-primary hover:text-primary transition-all"
                    >
                      Email Settings
                    </Link>
                    <Link
                      to={all_routes.smsGateways}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      SMS Gateways
                    </Link>
                    <Link
                      to={all_routes.gdprCookies}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      GDPR Cookies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor flex items-center justify-between mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Email Settings</h5>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                    data-modal-target="add_mail"
                    data-modal-toggle="add_mail"
                  >
                    <i className="ti ti-send me-1" />
                    Send Test Mail
                  </Link>
                </div>
                {/* PHP Mailer */}
                <div className="border border-borderColor rounded shadow p-3 mb-3">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span className="avatar avatar-lg border border-borderColor rounded flex items-center justify-center me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/icons/mail-01.svg"
                            className="w-auto h-auto rounded-0"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium mb-1">PHP Mailer</h6>
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex"
                          >
                            Connected
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <div
                        className="flex items-center justify-between"
                        data-accordion="collapse"
                      >
                        <div>
                          <Link
                            to="#"
                            data-accordion-target="#task-accordion-body-1"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-1"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="add_phpmail"
                            data-modal-toggle="add_phpmail"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </Link>
                        </div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden"
                    id="task-accordion-body-1"
                    aria-labelledby="task-accordion-heading-1"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        PHPMailer is a third-party PHP library that provides a
                        simple way to send emails in PHP. It offers a range of
                        features that make it a popular alternative to PHP's
                        built-in mail() function, such as support for HTML
                        emails, attachments, and SMTP authentication.
                      </p>
                    </div>
                  </div>
                </div>
                {/* /PHP Mailer */}
                {/* SMTP */}
                <div className="border border-borderColor rounded shadow p-3 mb-3">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span className="avatar avatar-lg border-borderColor rounded flex items-center justify-center border me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/icons/mail-02.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium mb-1">SMTP</h6>
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex"
                          >
                            Connected
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link
                            to="#"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="add_smtp"
                            data-modal-toggle="add_smtp"
                          >
                            <i className="ti ti-tool me-1" />
                            View Integration
                          </Link>
                        </div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /SMTP */}
                {/* SendGrid */}
                <div className="border border-borderColor rounded shadow p-3">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span className="avatar avatar-lg border-borderColor rounded flex items-center justify-center border me-2 flex-shrink-0">
                          <ImageWithBasePath
                            src="assets/img/icons/mail-03.svg"
                            className="w-auto h-auto"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fs-14 fw-medium mb-1">SendGrid</h6>
                          <Link
                            to="#"
                            className="text-xs bg-light  text-dark rounded px-2 py-0.5 inline-flex"
                          >
                            Not Connected
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <div className="flex items-center justify-between">
                        <div>
                          <Link
                            to="#"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link to="#" className="btn btn-light">
                            <i className="ti ti-plug-connected me-1" />
                            Connect
                          </Link>
                        </div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                            defaultChecked
                          />
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /SendGrid */}
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
      {/* Test Mail */}
      <div
        id="add_mail"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Test Mail</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_mail"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Enter Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_mail"
                  type="button"
                  className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Test Mail */}
      {/* PHP Mailer */}
      <div
        id="add_phpmail"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">PHP Mailer</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_phpmail"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">
                      From Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Email Password <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      From Email Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_phpmail"
                  type="button"
                  className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /PHP Mailer */}
      {/* SMTP */}
      <div
        id="add_smtp"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">SMTP</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="add_smtp"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-12">
                    <label className="form-label">
                      From Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Email Password <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      From Host <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="add_smtp"
                  type="button"
                  className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /SMTP */}
    </>
  );
};

export default EmailSettings;
