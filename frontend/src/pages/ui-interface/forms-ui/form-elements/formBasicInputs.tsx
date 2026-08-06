import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormBasicInputs = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Form Elements
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
                Form Elements
              </li>
            </ol>
          </nav>
        </div>
        {/* End Page Header */}
        {/* start row */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
          <div className="xl:col-span-12">
            <div className="card border border-borderColor bg-white rounded mb-5">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Input Types</h5>
              </div>
              <div className="card-body p-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-5">
                  <div className="lg:col-span-6">
                    <div className="mb-3">
                      <label htmlFor="input-label" className="form-label">
                        Text
                      </label>
                      <input type="text" className="form-control" id="input" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-label" className="form-label">
                        Form Input With Label
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-label"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-placeholder" className="form-label">
                        Form Input With Placeholder
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-placeholder"
                        placeholder="Placeholder"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-text" className="form-label">
                        Type Text
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="input-text"
                        placeholder="Text"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-number" className="form-label">
                        Type Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="input-number"
                        placeholder="Number"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-password" className="form-label">
                        Type Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="input-password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-email" className="form-label">
                        Type Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="input-email"
                        placeholder="email@xyz.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-tel" className="form-label">
                        Type Tel
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="input-tel"
                        placeholder="+1100-2031-1233"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-date" className="form-label">
                        Type Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="input-date"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-week" className="form-label">
                        Type Week
                      </label>
                      <input
                        type="week"
                        className="form-control"
                        id="input-week"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-month" className="form-label">
                        Type Month
                      </label>
                      <input
                        type="month"
                        className="form-control"
                        id="input-month"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-time" className="form-label">
                        Type Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="input-time"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="input-datetime-local"
                        className="form-label"
                      >
                        Type Datetime Local
                      </label>
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="input-datetime-local"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text-area" className="form-label">
                        Textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="text-area"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-0">
                      <label htmlFor="example-range" className="form-label">
                        Range
                      </label>
                      <input
                        className="form-range"
                        id="example-range"
                        type="range"
                        name="range"
                        min={0}
                        max={100}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
                    <div className="mb-3">
                      <label htmlFor="input-search" className="form-label">
                        Type Search
                      </label>
                      <input
                        type="search"
                        className="form-control"
                        id="input-search"
                        placeholder="Search"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-submit" className="form-label">
                        Type Submit
                      </label>
                      <input
                        type="submit"
                        className="form-control"
                        id="input-submit"
                        defaultValue="Submit"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-reset" className="form-label">
                        Type Reset
                      </label>
                      <input
                        type="reset"
                        className="form-control"
                        id="input-reset"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-button" className="form-label">
                        Type Button
                      </label>
                      <input
                        type="button"
                        className="form-control btn btn-primary"
                        id="input-button"
                        defaultValue="Button"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Type Color</label>
                      <input
                        className="form-control form-input-color"
                        type="color"
                        defaultValue="#136bd0"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-file" className="form-label">
                        Type File
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="input-file"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Type Url</label>
                      <input
                        className="form-control"
                        type="url"
                        name="website"
                        placeholder="http://example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-disabled" className="form-label">
                        Type Disabled
                      </label>
                      <input
                        type="text"
                        id="input-disabled"
                        className="form-control"
                        placeholder="Disabled input"
                        disabled
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-readonlytext" className="form-label">
                        Input Readonly Text
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        id="input-readonlytext"
                        defaultValue="email@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="disabled-readonlytext"
                        className="form-label"
                      >
                        Disabled Readonly Input
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Disabled readonly input"
                        id="disabled-readonlytext"
                        aria-label="Disabled input example"
                        disabled
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Type Readonly Input</label>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue="Readonly input here..."
                        aria-label="readonly input example"
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="input-DataList" className="form-label">
                        Datalist example
                      </label>
                      <input
                        className="form-control"
                        list="datalistOptions"
                        id="input-DataList"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="example-select" className="form-label">
                        Input Select
                      </label>
                      <select className="form-select" id="example-select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="example-multiselect" className="form-label">
                        Multiple Select
                      </label>
                      <select
                        id="example-multiselect"
                        multiple
                        className="form-control"
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="mb-0">
                      <label htmlFor="example-helping" className="form-label">
                        Helping text
                      </label>
                      <input
                        type="text"
                        id="example-helping"
                        className="form-control mb-1"
                        placeholder="Helping text"
                      />
                      <span className="help-block">
                        <small>
                          A block of help text that breaks onto a new line and may
                          extend beyond one line.
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* end card-body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
          <div className="xl:col-span-6 flex">
            <div className="card border flex-1 border-borderColor bg-white rounded mb-5 card-h-100">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Input Shapes</h5>
              </div>
              <div className="card-body p-4">
                <div className="grid grid-cols-12 gap-y-4">
                  <div className="col-span-12">
                    <label htmlFor="input-noradius" className="form-label">
                      Input With No Radius
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      id="input-noradius"
                      placeholder="No Radius"
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="input-rounded" className="form-label">
                      Input With Radius
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input-rounded"
                      placeholder="Default Radius"
                    />
                  </div>
                  <div className="col-span-12">
                    <label htmlFor="input-rounded-pill" className="form-label">
                      Rounded Input
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      id="input-rounded-pill"
                      placeholder="Rounded"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* end card-body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
          <div className="xl:col-span-6 flex">
            <div className="card border flex-1 border-borderColor bg-white rounded mb-5">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Disabled forms</h5>
              </div>
              <div className="card-body p-4">
                <form>
                  <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">
                      Disabled Input
                    </label>
                    <input
                      type="text"
                      id="disabledTextInput"
                      className="form-control"
                      placeholder="Disabled input"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="disabledSelect" className="form-label">
                      Disabled Select Menu
                    </label>
                    <select id="disabledSelect" className="form-select">
                      <option>Disabled select</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="disabledFieldsetCheck"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="disabledFieldsetCheck"
                      >
                        Can't check this
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="disabledFieldsetRadio"
                        disabled
                      />
                      <label
                        className="form-check-label"
                        htmlFor="disabledFieldsetRadio"
                      >
                        Can't check this
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>{" "}
              {/* end card-body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
          <div className="xl:col-span-6 flex">
            <div className="card card-h-100 flex-1 border border-borderColor bg-white rounded mb-5">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Input Sizing</h5>
              </div>
              <div className="card-body p-4">
                <input
                  className="form-control form-control-sm mb-3"
                  type="text"
                  placeholder=".form-control-sm"
                  aria-label=".form-control-sm example"
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Default input"
                  aria-label="default input example"
                />
                <input
                  className="form-control form-control-lg"
                  type="text"
                  placeholder=".form-control-lg"
                  aria-label=".form-control-lg example"
                />
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

export default FormBasicInputs