import { Link } from "react-router"
import { all_routes } from "../../../routes/all_routes"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"


const Blogs = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 className="mb-1 text-xl font-bold flex items-center">
            All Blogs
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
              <li>
                <Link
                  to="#"
                  className="hover:underline text-gray-700"
                >
                  Blogs
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li className="text-dark font-medium" aria-current="page">
                All Blogs
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Dropdown */}
          <div>
            <Link
              to="#"
              className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
              data-dropdown-toggle="export-dropdown"
            >
              <i className="ti ti-package-export me-2" />
              Export
              <i className="ti ti-chevron-down ml-1" />
            </Link>
            <ul
              id="export-dropdown"
              className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
            >
              <li>
                <Link
                  to="#"
                  className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                >
                  <i className="ti ti-file-type-pdf me-1" />
                  Export as PDF
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                >
                  <i className="ti ti-file-type-xls me-1" />
                  Export as Excel{" "}
                </Link>
              </li>
            </ul>
          </div>
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
      <div className="border border-borderColor rounded mb-5">
        <div className="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">
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
            to={all_routes.addblog}
            className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
          >
            <i className="ti ti-square-rounded-plus-filled" />
            Add Blog
          </Link>
        </div>
      </div>
      {/* start row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-5">
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-1.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Sales Optimization
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    40 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    27 May 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Improve Efficiency for Sales
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Discover how to optimize tools to boost your sales team’s
                    productivity and track important metrics.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-2.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Automation
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    123 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    15 May 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Automation Benefits for Growth
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Learn how automation features can streamline workflows and
                    accelerate your business’s growth effortlessly.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-3.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Marketing
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    54 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    04 May 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Marketing Integration Guide
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Explore seamless integration strategies between customer
                    management and marketing tools to enhance outreach and
                    engagement.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-4.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Implementation
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    152 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    29 Apr 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Avoid Setup Mistakes
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Identify common pitfalls in implementation and learn
                    proactive steps to avoid costly mistakes during setup.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-5.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Product Features
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    58 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    17 Apr 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Top Features for 2025
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Uncover must-have features for 2025 that improve customer
                    relationships and operational efficiency.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-6.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Data &amp; Analytics
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    78 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    03 Apr 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Data Insights Success{" "}
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Leverage data insights to enhance customer engagement,
                    identify opportunities, and make data-driven decisions.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-7.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Customization
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    56 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    26 Mar 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Customizing Effectively
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Tailor your system to fit your business processes, improving
                    usability, adoption, and productivity across teams.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-8.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Customization
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    97 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    13 Mar 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      Future Trends &amp; Innovations
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Explore emerging trends and innovations that are shaping the
                    future of customer relationship management.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">
                    Inactive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
        <div className="md:col-span-6 lg:col-span-4">
          <div className="card blog-item border border-borderColor rounded bg-white mb-0">
            <div className="card-body p-4">
              <div className="blog-img rounded relative mb-3">
                <Link to={all_routes.blogDetails}>
                  <ImageWithBasePath
                    src="assets/img/blogs/blog-9.jpg"
                    alt="img"
                    className="img-fluid relative rounded"
                  />
                </Link>
                <Link
                  to="#"
                  className="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2"
                >
                  Training &amp; Adoption
                </Link>
              </div>
              <div className="blog-content">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span>
                    <i className="ti ti-message-minus me-1" />
                    34 Comments
                  </span>
                  <span>
                    <i className="ti ti-calendar me-1" />
                    06 Mar 2025
                  </span>
                </div>
                <div className="mb-3">
                  <h6 className="mb-2">
                    <Link to={all_routes.blogDetails} className="hover:text-primary">
                      User Training Tips
                    </Link>
                  </h6>
                  <p className="mb-0 truncate">
                    Ensure your team’s success with essential training
                    strategies and onboarding tips to boost adoption rates.
                  </p>
                </div>
                <hr className="border-borderColor my-3" />
                <div className="flex items-center justify-between">
                  <Link
                    to={all_routes.editblog}
                    className="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"
                  >
                    <i className="ti ti-edit me-1" />
                    Edit
                  </Link>
                  <span className="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end col */}
      </div>
      {/* end row */}
    </div>
    {/* Start Footer */}
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
  {/* delete modal */}
  <div
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal"
  >
    <div className="relative bg-white rounded-defaultradius p-5">
      <div className="modal-content rounded-0">
        <div className="modal-body p-4 text-center">
          <div className="mb-3 relative z-[1]">
            <span className="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center">
              <i className="ti ti-trash text-[24px]" />
            </span>
          </div>
          <h5 className="mb-1">Delete Confirmation</h5>
          <p className="mb-3">
            Are you sure you want to remove faq you selected.
          </p>
          <div className="flex justify-center items-center">
            <Link
              to="#"
              className="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.faq} className="btn btn-primary z-1 w-full">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* delete modal */}
</>

  )
}

export default Blogs