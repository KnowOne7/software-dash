import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormCheckboxRadios = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">
          Checkbox &amp; Radios
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
            <li>
              <Link
                to="#"
                className="hover:underline text-gray-700"
              >
                Forms
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Checkbox &amp; Radios
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div>
        <div className="lg:grid grid-cols-4 gap-x-6">
          <div className="col-span-2">
            <div className="card border w-full border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Checkbox</h4>
              </div>
              <div className="card-body p-5">
                <div className="form-check">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Default checkbox
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckChecked"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Checked checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border w-full border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Disabled</h4>
              </div>
              <div className="card-body p-5">
                <div className="form-check">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDisabled"
                    disabled
                  />
                  <label className="text-gray-300" htmlFor="flexCheckDisabled">
                    Disabled checkbox
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckCheckedDisabled"
                    defaultChecked
                    disabled
                  />
                  <label
                    className="text-gray-300"
                    htmlFor="flexCheckCheckedDisabled"
                  >
                    Disabled checked checkbox
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Radios</h4>
              </div>
              <div className="card-body p-5">
                <div className="form-check">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Default radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Default checked radio
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Radios</h4>
              </div>
              <div className="card-body p-5">
                <div className="form-check">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioDisabled"
                    disabled
                  />
                  <label className="text-gray-300" htmlFor="flexRadioDisabled">
                    Disabled radio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioCheckedDisabled"
                    defaultChecked
                    disabled
                  />
                  <label
                    className="text-gray-300"
                    htmlFor="flexRadioCheckedDisabled"
                  >
                    Disabled checked radio
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Default (stacked)</h4>
              </div>
              <div className="card-body p-5">
                <div className="form-check">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Default checkbox
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="defaultCheck2"
                    disabled
                  />
                  <label className="text-gray-300" htmlFor="defaultCheck2">
                    Disabled checkbox
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    Default radio
                  </label>
                </div>
                <div className="form-check mb-0">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios3"
                    defaultValue="option3"
                    disabled
                  />
                  <label className="text-gray-300" htmlFor="exampleRadios3">
                    Disabled radio
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between py-4 px-5 border-b border-borderColor">
                <h4 className="card-title">Switches</h4>
              </div>
              <div className="card-body p-5">
                <div className="form-check form-switch">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Default switch checkbox input
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Checked switch checkbox input
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDisabled"
                    disabled
                  />
                  <label
                    className="text-gray-300"
                    htmlFor="flexSwitchCheckDisabled"
                  >
                    Disabled switch checkbox input
                  </label>
                </div>
                <div className="form-check form-switch mb-0">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckCheckedDisabled"
                    defaultChecked
                    disabled
                  />
                  <label
                    className="text-gray-300"
                    htmlFor="flexSwitchCheckCheckedDisabled"
                  >
                    Disabled checked switch checkbox input
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-6 gap-5">
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between p-5 border-b border-borderColor">
                <h4 className="card-title">Checkbox Sizes</h4>
              </div>
              <div className="card-body flex items-center justify-between p-5">
                <div className="flex items-center">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    defaultValue=""
                    id="checkebox-sm"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="checkebox-sm">
                    Default
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="text-primary rounded border-borderColor size-5 me-1"
                    type="checkbox"
                    defaultValue=""
                    id="checkebox-md"
                    defaultChecked
                  />
                  <label className="text-base" htmlFor="checkebox-md">
                    Medium
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="text-primary rounded border-borderColor size-6 me-1"
                    type="checkbox"
                    defaultValue=""
                    id="checkebox-lg"
                    defaultChecked
                  />
                  <label className="text-lg" htmlFor="checkebox-lg">
                    Large
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between p-5 border-b border-borderColor">
                <h4 className="card-title">Radio Sizes</h4>
              </div>
              <div className="card-body flex items-center justify-between p-5">
                <div className="flex items-center">
                  <input
                    className="text-primary border-borderColor me-1"
                    type="radio"
                    name="Radio"
                    id="Radio-sm"
                  />
                  <label htmlFor="Radio-sm">Default</label>
                </div>
                <div className="flex items-center">
                  <input
                    className="text-primary border-borderColor size-5 me-1"
                    type="radio"
                    name="Radio"
                    id="Radio-md"
                  />
                  <label className="text-base" htmlFor="Radio-md">
                    Medium
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="text-primary border-borderColor size-6 me-1"
                    type="radio"
                    name="Radio"
                    id="Radio-lg"
                    defaultChecked
                  />
                  <label className="text-lg" htmlFor="Radio-lg">
                    Large
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between p-5 border-b border-borderColor">
                <h4 className="card-title">Switch Sizes</h4>
              </div>
              <div className="card-body flex items-center justify-between p-5">
                <div className="flex items-center">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="switch-sm"
                  />
                  <label htmlFor="switch-sm">Default</label>
                </div>
                <div className="flex items-center">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="switch-md"
                  />
                  <label className="text-base" htmlFor="switch-md">
                    Medium
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="text-primary rounded border-borderColor me-1"
                    type="checkbox"
                    role="switch"
                    id="switch-lg"
                  />
                  <label className="text-lg" htmlFor="switch-lg">
                    Large
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-4 gap-5">
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between p-5 border-b border-borderColor">
                <h4 className="card-title">Inline</h4>
              </div>
              <div className="card-body flex items-center justify-between p-5">
                <div className="form-check form-check-inline">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="checkbox"
                    id="inlineCheckbox1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="checkbox"
                    id="inlineCheckbox2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    2
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="checkbox"
                    id="inlineCheckbox3"
                    defaultValue="option3"
                    disabled
                  />
                  <label className="text-gray-300" htmlFor="inlineCheckbox3">
                    3 (disabled)
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    2
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    defaultValue="option3"
                    disabled
                  />
                  <label className="text-gray-300" htmlFor="inlineRadio3">
                    3 (disabled)
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header justify-between p-5 border-b border-borderColor">
                <h4 className="card-title">Without labels</h4>
              </div>
              <div className="card-body p-5">
                <span className="me-3">
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="checkbox"
                    id="checkboxNoLabel"
                    defaultValue=""
                    aria-label="..."
                  />
                </span>
                <span>
                  <input
                    className="border-borderColor text-primary rounded me-1"
                    type="radio"
                    name="radioNoLabel"
                    id="radioNoLabel1"
                    defaultValue=""
                    aria-label="..."
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer */}
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default FormCheckboxRadios