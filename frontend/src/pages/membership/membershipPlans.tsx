import { Link } from "react-router";
import CommonFooter from "../../components/common-footer/commonFooter";
import HeaderActions from "../../components/header-actions/headerActions";
import { all_routes } from "../../routes/all_routes";
import CommonSelect from "../../components/common-select/commonSelect";
import { Plan_Price, PlanType } from "../../core/json/selectOption";

const MembershipPlans = () => {
   
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Membership Plans
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  152
                </span>
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
                    Membership Plans
                  </li>
                </ol>
              </nav>
            </div>
            <HeaderActions />
          </div>
          {/* End Page Header */}
          {/* start card item */}
          <div className="card">
            <div className="flex items-center justify-between flex-wrap gap-2 p-4 border-b border-borderColor bg-white rounded-t">
            <div className="relative">
  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
    <i className="ti ti-search" />
  </span>
  <input
    type="text"
    placeholder="Search"
    className="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
  />
</div>

              {/* Add New Button */}
              <Link
                to="#"
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                data-drawer-target="offcanvas_add"
                data-drawer-show="offcanvas_add"
                aria-controls="offcanvas_add"
                data-drawer-placement="right"
              >
                <i className="ti ti-square-rounded-plus-filled me-1" />
                Add Membership
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="mb-6">
                <label className="flex items-center gap-3 justify-center w-full cursor-pointer">
                  <span className="text-sm text-dark">Yearly</span>
                  <input
                    type="checkbox"
                    defaultValue=""
                    className="sr-only peer"
                  />
                  <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                  <span className="text-sm text-dark">Monthly</span>
                </label>
              </div>
              <div className="flex justify-center gap-4 lg:flex-nowrap flex-wrap">
                <div className="w-full max-w-md md:w-1/2 lg:w-1/3">
                  <div className="border border-borderColor rounded">
                    <div className="p-6">
                      <div className="text-center border-b border-borderColor pb-4 mb-4">
                        <span className="text-sm font-normal mb-1">Basic</span>
                        <h5 className="flex items-center justify-center">
                          $50
                          <span className="text-sm font-medium ms-1">
                            / month
                          </span>
                        </h5>
                      </div>
                      <div>
                        <div>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            10 Contacts
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            10 Leads
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            20 Companies
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            50 Campaigns
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            100 Projects
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-gray-500" />
                            </span>
                            <del>Deals</del>
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-gray-500" />
                            </span>
                            <del>Tasks</del>
                          </p>
                          <p className="flex items-center text-base font-medium text-dark">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-gray-500" />
                            </span>
                            <del>Pipelines</del>
                          </p>
                        </div>
                        <div className="text-center mt-4">
                          <Link
                            to="#"
                            className="btn btn-primary w-full rounded"
                          >
                            Choose
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-md md:w-1/2 lg:w-1/3">
                  <div className="border border-borderColor rounded">
                    <div className="p-6">
                      <div className="text-center border-b border-borderColor pb-4 mb-4">
                        <span className="text-sm font-normal mb-1">
                          Business
                        </span>
                        <h5 className="flex items-center justify-center">
                          $200
                          <span className="text-sm font-medium ms-1">
                            / month
                          </span>
                        </h5>
                      </div>
                      <div>
                        <div>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            20 Contacts
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            20 Leads
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            50 Companies
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Compaigns
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Projects
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-gray-500" />
                            </span>
                            <del>Deals</del>
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-gray-500" />
                            </span>
                            <del>Tasks</del>
                          </p>
                          <p className="flex items-center text-base font-medium text-dark">
                            <span className="me-1">
                              <i className="ti ti-xbox-x-filled text-gray-500" />
                            </span>
                            <del>Pipelines</del>
                          </p>
                        </div>
                        <div className="text-center mt-4">
                          <Link
                            to="#"
                            className="btn btn-primary w-full rounded"
                          >
                            Choose
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-md md:w-1/2 lg:w-1/3">
                  <div className="border border-borderColor rounded">
                    <div className="p-6">
                      <div className="text-center border-b border-borderColor pb-4 mb-4">
                        <span className="text-sm font-normal mb-1">
                          Enterprise
                        </span>
                        <h5 className="flex items-center justify-center">
                          $400
                          <span className="text-sm font-medium ms-1">
                            / month
                          </span>
                        </h5>
                      </div>
                      <div>
                        <div>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Contacts
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Leads
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Companies
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Compaigns
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Unlimited Projects
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Deals
                          </p>
                          <p className="flex items-center text-base font-medium text-dark mb-2">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Tasks
                          </p>
                          <p className="flex items-center text-base font-medium text-dark">
                            <span className="me-1">
                              <i className="ti ti-circle-check-filled text-green-500" />
                            </span>
                            Pipelines
                          </p>
                        </div>
                        <div className="text-center mt-4">
                          <Link
                            to="#"
                            className="btn btn-primary w-full rounded"
                          >
                            Choose
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end card item */}
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}

      <>
        {/* Add Contact */}
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
              <i className="ti ti-x" />{" "}
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <form>
            <div
              id="accordion-collapse-2"
              className="p-4"
              data-accordion="collapse"
            >
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
                        <i className="ti ti-file-description" />
                      </span>
                      Plan Info
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
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-4">
                      <div className="md:col-span-12">
                        <div>
                          <label className="form-label">
                            Street Address
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Plan Type<span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={PlanType}
                            className="select"
                            defaultValue={PlanType[0]}
                          />
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Plan Price
                            <span className="text-danger ms-1">*</span>
                          </label>
                          <CommonSelect
                            options={Plan_Price}
                            className="select"
                            defaultValue={Plan_Price[0]}
                          />
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
                        <i className="ti ti-settings" />
                      </span>
                      Plan Settings
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
                    {/* start grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-4">
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className=" mb-2">
                            <label className="form-label">
                              Contacts
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Leads<span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Companies
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Compaigns
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Projects
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Deals<span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Tasks<span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <div className="mx-2">
                          <div className="mb-2">
                            <label className="form-label">
                              Pipelines
                              <span className="text-danger ms-1">*</span>
                            </label>
                            <div className="flex items-center justify-between gap-3">
                              <input type="text" className="form-control" />
                              <label className="flex items-center gap-3 justify-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  defaultValue=""
                                  className="sr-only peer"
                                />
                                <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                              </label>
                            </div>
                          </div>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span>Unlimited</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* end grid */}
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
        {/* /Add Contact */}
      </>
    </>
  );
};

export default MembershipPlans;
