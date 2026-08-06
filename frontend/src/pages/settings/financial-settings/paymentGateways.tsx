import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import SettingsTopbar from "../settings-topbar/settingsTopbar"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"

const PaymentGateways = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">Settings</h4>
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
                  <h5 className="mb-3 text-[17px]">Financial Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.paymentGateways}
                      className="d-block p-2 font-medium active bg-rose-100 rounded text-primary border-l border-primary hover:text-primary transition-all"
                    >
                      Payment Gateways
                    </Link>
                    <Link
                      to={all_routes.bankAccounts}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Bank Accounts
                    </Link>
                    <Link
                      to={all_routes.taxRates}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Tax Rates
                    </Link>
                    <Link
                      to={all_routes.currencies}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Currencies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Payment Gateways</h5>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-5 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-1.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-modal-target="payment_1"
                            data-modal-toggle="payment_1"
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
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        PHPMailer is a third-party PHP library that provides a simple way
                        to send emails in PHP. It offers a range of features that make it
                        a popular alternative to PHP's built-in mail() function, such as
                        support for HTML emails, attachments, and SMTP authentication.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-2.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-2"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-2"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_2"
                            data-modal-toggle="payment_2"
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
                    id="task-accordion-body-2"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Stripe Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-3.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-3"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-3"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_3"
                            data-modal-toggle="payment_3"
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
                    id="task-accordion-body-3"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Braintree Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-4.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-4"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-4"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_4"
                            data-modal-toggle="payment_4"
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
                    id="task-accordion-body-4"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Skrill Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-5.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-5"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-5"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_5"
                            data-modal-toggle="payment_5"
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
                    id="task-accordion-body-5"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Razorpay Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-6.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-6"
                            aria-expanded="false"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_6"
                            data-modal-toggle="payment_6"
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
                    id="task-accordion-body-6"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Payoneer Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-7.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-7"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-7"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_7"
                            data-modal-toggle="payment_7"
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
                    id="task-accordion-body-7"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Pay Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-8.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-8"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-8"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_8"
                            data-modal-toggle="payment_8"
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
                    id="task-accordion-body-8"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Paytm Holdings, Inc. is an American multinational financial
                        technology company operating an online payments system in the
                        majority of countries that support online money transfers, and
                        serves as an electronic alternative to traditional paper methods
                        such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-9.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-9"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-9"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_9"
                            data-modal-toggle="payment_9"
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
                    id="task-accordion-body-9"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Bank Transfer Holdings, Inc. is an American multinational
                        financial technology company operating an online payments system
                        in the majority of countries that support online money transfers,
                        and serves as an electronic alternative to traditional paper
                        methods such as checks and money orders.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border border-borderColor rounded shadow p-3">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-5">
                      <div className="flex items-center">
                        <span>
                          <ImageWithBasePath src="assets/img/payments/payment-10.svg" alt="Img" />
                        </span>
                        <div className="ms-2">
                          <Link
                            to="#"
                            className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 inline-flex ms-2"
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
                            data-accordion-target="#task-accordion-body-10"
                            aria-expanded="false"
                            aria-controls="task-accordion-body-10"
                            className="border-r border-borderColor bg-white text-[18px] text-dark pr-3 mr-3"
                          >
                            <i className="ti ti-info-circle-filled me-1" />
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-light"
                            data-modal-target="payment_10"
                            data-modal-toggle="payment_10"
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
                    id="task-accordion-body-10"
                    data-accordion-body=""
                  >
                    <div className="mail-collapse mt-2">
                      <p className="mb-0">
                        Cash on delivery Holdings, Inc. is an American multinational
                        financial technology company operating an online payments system
                        in the majority of countries that support online money transfers,
                        and serves as an electronic alternative to traditional paper
                        methods such as checks and money orders.
                      </p>
                    </div>
                  </div>
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

      {/* Payment */}
      <div
        id="payment_1"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Paypal</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_1"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_1"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_2"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Stripe</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_2"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_2"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_3"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">BrainTree</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_3"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_3"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_4"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Skrill</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_4"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_4"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_5"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Razorpay</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_5"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_5"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_6"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Payoneer</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_6"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_6"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_7"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Pay</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_7"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_7"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_8"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Paytm</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_8"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_8"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_9"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Bank Transfer</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_9"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_9"
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
      {/* /Payment */}
      {/* Payment */}
      <div
        id="payment_10"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <h5 className="font-bold text-[18px]">Cash On Delivery</h5>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                data-modal-hide="payment_10"
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
                      API Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="md:col-span-12">
                    <label className="form-label">
                      Secret Key <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-4 border-t border-borderColor">
                <button
                  data-modal-hide="payment_10"
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
      {/* /Payment */}

    </>

  )
}

export default PaymentGateways