import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiListGroup = () => {
  return (
  <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">List Group</h4>
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
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              List Group
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-4 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Basic example</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p>
                The most basic list group is an unordered list with list items
                and the proper classes. Build upon it with the options that
                follow, or with your own CSS as needed.
              </p>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-borderColor rounded-lg">
                <li className="w-full px-4 py-2 border-b border-borderColor rounded-t-lg">
                  <i className="ti ti-brand-slack me-1 align-middle fs-18" />
                  Slack Collaboration
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-zoom me-1 align-middle fs-18" />
                  Nextcloud File Sharing
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-nextcloud me-1 align-middle fs-18" />
                  Zoom Video Meetings
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  <i className="ti ti-brand-stripe me-1 align-middle fs-18" />
                  Stripe Billing System
                </li>
              </ul>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-4 flex">
          <div className="card card-h-100 flex-1 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Active Items</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p>
                Add .active to a .list-group-item to indicate the current active
                selection.
              </p>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-borderColor rounded-lg">
                <li className="w-full px-4 py-2 border-b border-borderColor bg-primary text-white rounded-t-lg">
                  <i className="ti ti-brand-slack me-1 align-middle fs-18" />
                  Slack Collaboration
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-zoom me-1 align-middle fs-18" />
                  Nextcloud File Sharing
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-nextcloud me-1 align-middle fs-18" />
                  Zoom Video Meetings
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  <i className="ti ti-brand-stripe me-1 align-middle fs-18" />
                  Stripe Billing System
                </li>
              </ul>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-4 flex">
          <div className="card flex-1 card-h-100 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Disabled Items</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p>
                Add .disabled to a .list-group-item to make it appear disabled.
              </p>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-borderColor rounded-lg">
                <li className="w-full px-4 disabled py-2 border-b border-borderColor bg-light rounded-t-lg">
                  <i className="ti ti-brand-slack me-1 align-middle fs-18" />
                  Slack Collaboration
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-zoom me-1 align-middle fs-18" />
                  Nextcloud File Sharing
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-nextcloud me-1 align-middle fs-18" />
                  Zoom Video Meetings
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  <i className="ti ti-brand-stripe me-1 align-middle fs-18" />
                  Stripe Billing System
                </li>
              </ul>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-4 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Links and Buttons</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to
                create <em>actionable</em> list group items with hover,
                disabled, and active states by adding{" "}
                <code>.list-group-item-action</code>.
              </p>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-borderColor rounded-lg">
                <li className="w-full px-4 cursor-pointer hover:bg-light py-2 border-b border-borderColor bg-light rounded-t-lg">
                  <i className="ti ti-brand-slack me-1 align-middle fs-18" />
                  Slack Collaboration
                </li>
                <li className="w-full px-4 cursor-pointer hover:bg-light py-2 border-b border-borderColor">
                  <i className="ti ti-brand-zoom me-1 align-middle fs-18" />
                  Nextcloud File Sharing
                </li>
                <li className="w-full px-4 cursor-pointer hover:bg-light py-2 border-b border-borderColor">
                  <i className="ti ti-brand-nextcloud me-1 align-middle fs-18" />
                  Zoom Video Meetings
                </li>
                <li className="w-full px-4 cursor-pointer hover:bg-light py-2 rounded-b-lg">
                  <i className="ti ti-brand-stripe me-1 align-middle fs-18" />
                  Stripe Billing System
                </li>
              </ul>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-4 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Flush</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p>
                Add .list-group-flush to remove some borders and rounded corners
                to render list group items edge-to-edge in a parent container
                (e.g., cards).
              </p>
              <ul className="w-full text-sm font-medium text-gray-900 bg-white border-borderColor rounded-lg">
                <li className="w-full px-4 py-2 border-b border-borderColor rounded-t-lg">
                  <i className="ti ti-brand-slack me-1 align-middle fs-18" />
                  Slack Collaboration
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-zoom me-1 align-middle fs-18" />
                  Nextcloud File Sharing
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  <i className="ti ti-brand-nextcloud me-1 align-middle fs-18" />
                  Zoom Video Meetings
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  <i className="ti ti-brand-stripe me-1 align-middle fs-18" />
                  Stripe Billing System
                </li>
              </ul>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-4 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Numbered</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                Numbers are generated by <code>counter-reset</code> on the{" "}
                <code>&lt;ol&gt;</code>, and then styled and placed with a{" "}
                <code>::before</code> psuedo-element on the{" "}
                <code>&lt;li&gt;</code> with <code>counter-increment</code> and{" "}
                <code>content</code>.{" "}
              </p>
              <ul className="w-full text-sm font-medium border text-gray-900 bg-white border-borderColor rounded-lg">
                <li className="w-full px-4 py-2 border-b border-borderColor rounded-t-lg">
                  1. Slack Collaboration
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  2. Nextcloud File Sharing
                </li>
                <li className="w-full px-4 py-2 border-b border-borderColor">
                  3. Zoom Video Meetings
                </li>
                <li className="w-full px-4 py-2 rounded-b-lg">
                  4. Stripe Billing System
                </li>
              </ul>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/*end row*/}
    </div>
    {/* Start Footer */}
   <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default UiListGroup