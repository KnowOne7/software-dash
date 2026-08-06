import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import SettingsTopbar from "../settings-topbar/settingsTopbar";
import CommonSelect from "../../../components/common-select/commonSelect";
import { Countries_Restriction, Currency, Currency_Position, Currency_Symbol, Date_Format, Decimal_Seperator, Financial_Year, Language, Starting_Month, Time_Format, Time_zone } from "../../../core/json/selectOption";

const Localization = () => {
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
                  <h5 className="mb-3 text-[17px]">Website Settings</h5>
                  <div className="flex flex-col">
                    <Link
                      to={all_routes.companySettings}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded "
                    >
                      Company Settings
                    </Link>
                    <Link
                      to={all_routes.localization}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded text-primary border-l border-primary bg-rose-100"
                    >
                      Localization
                    </Link>
                    <Link
                      to={all_routes.prefixes}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Prefixes
                    </Link>
                    <Link
                      to={all_routes.preference}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Preference
                    </Link>
                    <Link
                      to={all_routes.appearance}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Appearance
                    </Link>
                    <Link
                      to={all_routes.languageWeb}
                      className="d-block p-2 font-medium hover:text-primary transition-all rounded"
                    >
                      Language
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="bg-white border border-borderColor rounded p-4">
                <div className="border-b border-borderColor mb-3 pb-3">
                  <h5 className="mb-0 text-[17px]">Localization</h5>
                </div>
                <form>
                  <div className="mb-3">
                    <h6 className="mb-1">Basic Information</h6>
                    <p className="mb-0">Provide the basic information below</p>
                  </div>
                  <div className="border-b border-borderColor mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Language
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select Language of the website
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                           <CommonSelect
                            options={Language}
                            className="select"
                            defaultValue={Language[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Language Switcher
                          </h6>
                          <p className="text-[13px] mb-0">
                            To display in all the pages
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
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
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Timezone
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select date format to display in website
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                           <CommonSelect
                            options={Time_zone}
                            className="select"
                            defaultValue={Time_zone[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Date Format
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select Language of the website
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <CommonSelect
                            options={Date_Format}
                            className="select"
                            defaultValue={Date_Format[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Time Format
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select time format to display in website
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                         <CommonSelect
                            options={Time_Format}
                            className="select"
                            defaultValue={Time_Format[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Financial Year
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select year for finance
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <CommonSelect
                            options={Financial_Year}
                            className="select"
                            defaultValue={Financial_Year[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Starting Month
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select starting month to display
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                         <CommonSelect
                            options={Starting_Month}
                            className="select"
                            defaultValue={Starting_Month[0]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Currency Settings</h6>
                    <p>Provide the currency information below</p>
                  </div>
                  <div className="border-b border-borderColor mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Currency
                          </h6>
                          <p className="text-[13px] mb-0">Select currency</p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                         <CommonSelect
                            options={Currency}
                            className="select"
                            defaultValue={Currency[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Currency Symbol
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select currency symbol
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                         <CommonSelect
                            options={Currency_Symbol}
                            className="select"
                            defaultValue={Currency_Symbol[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Currency Position
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select currency position
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                        <CommonSelect
                            options={Currency_Position}
                            className="select"
                            defaultValue={Currency_Position[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Decimal Seperator
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select decimal seperator
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <CommonSelect
                            options={Decimal_Seperator}
                            className="select"
                            defaultValue={Decimal_Seperator[0]}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Thousand Seperator
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select thousand seperator
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                         <CommonSelect
                            options={Decimal_Seperator}
                            className="select"
                            defaultValue={Decimal_Seperator[0]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">Country Settings</h6>
                    <p className="mb-0">
                      Provide the country information below
                    </p>
                  </div>
                  <div className="border-b border-borderColor mb-3">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Countries Restriction
                          </h6>
                          <p className="mb-0">Select restricted countries</p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <CommonSelect
                            options={Countries_Restriction}
                            className="select"
                            defaultValue={Countries_Restriction[0]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="mb-1">File Settings</h6>
                    <p className="mb-0">Provide the files information below</p>
                  </div>
                  <div className="border-b border-borderColor mb-3 border-0">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Allowed Files
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select allowed files
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <input
                            className="input-tags form-control"
                            placeholder="Add new"
                            type="text"
                            data-role="tagsinput"
                            name="Label"
                            defaultValue="JPG, PNG, GIF"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 gap-x-4">
                      <div className="md:col-span-8">
                        <div className="mb-3">
                          <h6 className="text-[14px] font-semibold mb-1">
                            Max File Size
                          </h6>
                          <p className="text-[13px] mb-0">
                            Select size of the files
                          </p>
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="mb-3">
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="5000MB"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end flex-wrap gap-2">
                    <Link to="#" className="btn btn-sm btn-light">
                      Cancel
                    </Link>
                    <button type="submit" className="btn btn-sm btn-primary">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default Localization;
