import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const FormSelect = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Form Select
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
                Form Select
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        {/* start row */}
        <div className="row">
          <div className="col-12">
            <div className="card border bg-white border-borderColor mb-5 rounded">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Select2</h5>
              </div>
              <div className="card-body p-4">
                <p className="text-muted mb-4">
                  Select2 gives you a customizable select box with support for
                  searching, tagging, remote data sets, infinite scrolling, and
                  many other highly used options.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  <div className="lg:col-span-6">
                    <p className="mb-1 font-bold text-muted">Single Select</p>
                    <p className="text-muted text-[14px]">
                      Select2 can take a regular select box like this...
                    </p>
                    <select
                      className="form-control select2"
                      data-toggle="select2"
                    >
                      <option>Select</option>
                      <optgroup label="Alaskan/Hawaiian Time Zone">
                        <option value="AK">Alaska</option>
                        <option value="HI">Hawaii</option>
                      </optgroup>
                      <optgroup label="Pacific Time Zone">
                        <option value="CA">California</option>
                        <option value="NV">Nevada</option>
                        <option value="OR">Oregon</option>
                        <option value="WA">Washington</option>
                      </optgroup>
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NM">New Mexico</option>
                        <option value="ND">North Dakota</option>
                        <option value="UT">Utah</option>
                        <option value="WY">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="IL">Illinois</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="OK">Oklahoma</option>
                        <option value="SD">South Dakota</option>
                        <option value="TX">Texas</option>
                        <option value="TN">Tennessee</option>
                        <option value="WI">Wisconsin</option>
                      </optgroup>
                      <optgroup label="Eastern Time Zone">
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="IN">Indiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="OH">Ohio</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WV">West Virginia</option>
                      </optgroup>
                    </select>
                  </div>{" "}
                  {/* end col */}
                  <div className="lg:col-span-6">
                    <p className="mb-1 font-bold text-muted">Multiple Select</p>
                    <p className="text-muted text-[14px]">
                      Select2 can take a regular select box like this...
                    </p>
                    <select
                      className="select2 form-control select2-multiple"
                      data-toggle="select2"
                      multiple
                      data-placeholder="Choose ..."
                    >
                      <optgroup label="Alaskan/Hawaiian Time Zone">
                        <option value="AK">Alaska</option>
                        <option value="HI">Hawaii</option>
                      </optgroup>
                      <optgroup label="Pacific Time Zone">
                        <option value="CA">California</option>
                        <option value="NV">Nevada</option>
                        <option value="OR">Oregon</option>
                        <option value="WA">Washington</option>
                      </optgroup>
                      <optgroup label="Mountain Time Zone">
                        <option value="AZ">Arizona</option>
                        <option value="CO">Colorado</option>
                        <option value="ID">Idaho</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NM">New Mexico</option>
                        <option value="ND">North Dakota</option>
                        <option value="UT">Utah</option>
                        <option value="WY">Wyoming</option>
                      </optgroup>
                      <optgroup label="Central Time Zone">
                        <option value="AL">Alabama</option>
                        <option value="AR">Arkansas</option>
                        <option value="IL">Illinois</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="OK">Oklahoma</option>
                        <option value="SD">South Dakota</option>
                        <option value="TX">Texas</option>
                        <option value="TN">Tennessee</option>
                        <option value="WI">Wisconsin</option>
                      </optgroup>
                      <optgroup label="Eastern Time Zone">
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="IN">Indiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="OH">Ohio</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WV">West Virginia</option>
                      </optgroup>
                    </select>
                  </div>{" "}
                  {/* end col */}
                </div>
                {/* end row */}
              </div>{" "}
              {/* end card body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
        </div>
        {/* end row */}
        {/* start row */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card border bg-white border-borderColor mb-5 rounded">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Choices</h5>
              </div>
              <div className="card-body p-4">
                <div>
                  <h5 className="text-[14px] mb-2">
                    Single Select Input Example
                  </h5>
                  {/* start row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-default"
                          className="form-label text-muted"
                        >
                          Default
                        </label>
                        <p className="text-muted">
                          Set <code className="text-[#DD2590]">data-choices</code>{" "}
                          attribute to set a default single select.
                        </p>
                        <select
                          className="form-control"
                          data-choices=""
                          name="choices-single-default"
                          id="choices-single-default"
                        >
                          <option value="">This is a placeholder</option>
                          <option value="Choice 1">Choice 1</option>
                          <option value="Choice 2">Choice 2</option>
                          <option value="Choice 3">Choice 3</option>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-groups"
                          className="form-label text-muted"
                        >
                          Option Groups
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-groups
                          </code>{" "}
                          attribute to set option group
                        </p>
                        <select
                          className="form-control"
                          id="choices-single-groups"
                          data-choices=""
                          data-choices-groups=""
                          data-placeholder="Select City"
                          name="choices-single-groups"
                        >
                          <option value="">Choose a city</option>
                          <optgroup label="UK">
                            <option value="London">London</option>
                            <option value="Manchester">Manchester</option>
                            <option value="Liverpool">Liverpool</option>
                          </optgroup>
                          <optgroup label="FR">
                            <option value="Paris">Paris</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Marseille">Marseille</option>
                          </optgroup>
                          <optgroup label="DE" disabled>
                            <option value="Hamburg">Hamburg</option>
                            <option value="Munich">Munich</option>
                            <option value="Berlin">Berlin</option>
                          </optgroup>
                          <optgroup label="US">
                            <option value="New York">New York</option>
                            <option value="Washington" disabled>
                              Washington
                            </option>
                            <option value="Michigan">Michigan</option>
                          </optgroup>
                          <optgroup label="SP">
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Malaga">Malaga</option>
                          </optgroup>
                          <optgroup label="CA">
                            <option value="Montreal">Montreal</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Vancouver">Vancouver</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-no-search"
                          className="form-label text-muted"
                        >
                          Options added via config with no search
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-search-false
                            data-choices-removeItem
                          </code>
                        </p>
                        <select
                          className="form-control"
                          id="choices-single-no-search"
                          name="choices-single-no-search"
                          data-choices=""
                          data-choices-search-false=""
                          data-choices-removeitem=""
                        >
                          <option value="Zero">Zero</option>
                          <option value="One">One</option>
                          <option value="Two">Two</option>
                          <option value="Three">Three</option>
                          <option value="Four">Four</option>
                          <option value="Five">Five</option>
                          <option value="Six">Six</option>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-single-no-sorting"
                          className="form-label text-muted"
                        >
                          Options added via config with no sorting
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-sorting-false
                          </code>{" "}
                          attribute.
                        </p>
                        <select
                          className="form-control"
                          id="choices-single-no-sorting"
                          name="choices-single-no-sorting"
                          data-choices=""
                          data-choices-sorting-false=""
                        >
                          <option value="Madrid">Madrid</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Vancouver">Vancouver</option>
                          <option value="London">London</option>
                          <option value="Manchester">Manchester</option>
                          <option value="Liverpool">Liverpool</option>
                          <option value="Paris">Paris</option>
                          <option value="Malaga">Malaga</option>
                          <option value="Washington" disabled>
                            Washington
                          </option>
                          <option value="Lyon">Lyon</option>
                          <option value="Marseille">Marseille</option>
                          <option value="Hamburg">Hamburg</option>
                          <option value="Munich">Munich</option>
                          <option value="Barcelona">Barcelona</option>
                          <option value="Berlin">Berlin</option>
                          <option value="Montreal">Montreal</option>
                          <option value="New York">New York</option>
                          <option value="Michigan">Michigan</option>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                <div className="mt-4">
                  <h5 className="text-[14px] mb-3">Multiple Select Input</h5>
                  {/* start row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-multiple-default"
                          className="form-label text-muted"
                        >
                          Default
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices multiple
                          </code>{" "}
                          attribute.
                        </p>
                        <select
                          className="form-control"
                          id="choices-multiple-default"
                          data-choices=""
                          name="choices-multiple-default"
                          multiple
                        >
                          <option value="Choice 1" selected>
                            Choice 1
                          </option>
                          <option value="Choice 2">Choice 2</option>
                          <option value="Choice 3">Choice 3</option>
                          <option value="Choice 4" disabled>
                            Choice 4
                          </option>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-multiple-remove-button"
                          className="form-label text-muted"
                        >
                          With remove button
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-removeItem multiple
                          </code>{" "}
                          attribute.
                        </p>
                        <select
                          className="form-control"
                          id="choices-multiple-remove-button"
                          data-choices=""
                          data-choices-removeitem=""
                          name="choices-multiple-remove-button"
                          multiple
                        >
                          <option value="Choice 1" selected>
                            Choice 1
                          </option>
                          <option value="Choice 2">Choice 2</option>
                          <option value="Choice 3">Choice 3</option>
                          <option value="Choice 4">Choice 4</option>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-multiple-groups"
                          className="form-label text-muted"
                        >
                          Option groups
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-multiple-groups="true"
                            multiple
                          </code>{" "}
                          attribute.{" "}
                        </p>
                        <select
                          className="form-control"
                          id="choices-multiple-groups"
                          name="choices-multiple-groups"
                          data-choices=""
                          data-choices-multiple-groups="true"
                          multiple
                        >
                          <option value="">Choose a city</option>
                          <optgroup label="UK">
                            <option value="London">London</option>
                            <option value="Manchester">Manchester</option>
                            <option value="Liverpool">Liverpool</option>
                          </optgroup>
                          <optgroup label="FR">
                            <option value="Paris">Paris</option>
                            <option value="Lyon">Lyon</option>
                            <option value="Marseille">Marseille</option>
                          </optgroup>
                          <optgroup label="DE" disabled>
                            <option value="Hamburg">Hamburg</option>
                            <option value="Munich">Munich</option>
                            <option value="Berlin">Berlin</option>
                          </optgroup>
                          <optgroup label="US">
                            <option value="New York">New York</option>
                            <option value="Washington" disabled>
                              Washington
                            </option>
                            <option value="Michigan">Michigan</option>
                          </optgroup>
                          <optgroup label="SP">
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Malaga">Malaga</option>
                          </optgroup>
                          <optgroup label="CA">
                            <option value="Montreal">Montreal</option>
                            <option value="Toronto">Toronto</option>
                            <option value="Vancouver">Vancouver</option>
                          </optgroup>
                        </select>
                      </div>
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
                <div className="mt-4">
                  <h5 className="text-[14px] mb-3">Text Inputs</h5>
                  {/* start row */}
                  <div className="row">
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-text-remove-button"
                          className="form-label text-muted"
                        >
                          Set limit values with remove button
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-limit="Required Limit"
                            data-choices-removeItem
                          </code>{" "}
                          attribute.
                        </p>
                        <input
                          className="form-control"
                          id="choices-text-remove-button"
                          data-choices=""
                          data-choices-limit={3}
                          data-choices-removeitem=""
                          type="text"
                          defaultValue="Task-1"
                        />
                      </div>
                    </div>{" "}
                    {/* end col */}
                    <div className="lg:col-span-4 md:col-span-6">
                      <div className="mb-3">
                        <label
                          htmlFor="choices-text-unique-values"
                          className="form-label text-muted"
                        >
                          Unique values only, no pasting
                        </label>
                        <p className="text-muted">
                          Set{" "}
                          <code className="text-[#DD2590]">
                            data-choices data-choices-text-unique-true
                          </code>{" "}
                          attribute.
                        </p>
                        <input
                          className="form-control"
                          id="choices-text-unique-values"
                          data-choices=""
                          data-choices-text-unique-true=""
                          type="text"
                          defaultValue="Project-A, Project-B"
                        />
                      </div>
                    </div>{" "}
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div>
                    <label
                      htmlFor="choices-text-disabled"
                      className="form-label text-muted"
                    >
                      Disabled
                    </label>
                    <p className="text-muted">
                      Set{" "}
                      <code className="text-[#DD2590]">
                        data-choices data-choices-text-disabled-true
                      </code>{" "}
                      attribute.
                    </p>
                    <input
                      className="form-control"
                      id="choices-text-disabled"
                      data-choices=""
                      data-choices-text-disabled-true=""
                      type="text"
                      defaultValue="alex@example.com, laura@example.com"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* end card-body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* Start Footer */}
      <CommonFooter/>
      {/* End Footer */}
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default FormSelect