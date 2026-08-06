import { Link } from "react-router"
import { all_routes } from "../../../routes/all_routes"

const UiAccordion = () => {
  return (
 <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Accordions</h4>
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
              Accordions
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* Start Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-2">Basic Accordion</h5>
          </div>
          <div className="card-body p-5">
            <div
              className="border rounded"
              id="accordion-collapse"
              data-accordion="collapse"
              data-active-classes="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <div className="border-b">
                <h2 id="headingOne">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="hidden p-3"
                  aria-labelledby="headingOne"
                >
                  <div className="text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="border-b">
                <h2 id="headingTwo">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="hidden p-3"
                  aria-labelledby="headingTwo"
                >
                  <div className="text-[12px]">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div>
                <h2 id="headingThree">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button"
                    data-accordion-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="hidden p-3"
                  aria-labelledby="headingThree"
                >
                  <div className="text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-2">Always Open Accordion</h5>
            <p>
              Omit the{" "}
              <code className="text-danger">data-accordion="open"</code>{" "}
              attribute on each{" "}
              <code className="text-danger">.accordion-collapse</code> to make
              accordion items stay open when another item is opened.
            </p>
          </div>
          <div className="card-body p-5">
            <div
              className="border rounded"
              id="accordion-open"
              data-accordion="open"
              data-active-classes="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <div className="accordion-item border-b">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start"
                    type="button"
                    data-accordion-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Accordion Item #1
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-1"
                  className="hidden p-3"
                  aria-labelledby="heading-1"
                >
                  <div className="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item border-b">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start"
                    type="button"
                    data-accordion-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    Accordion Item #2
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-2"
                  className="hidden p-3"
                  aria-labelledby="heading-2"
                >
                  <div className="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-3">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start"
                    type="button"
                    data-accordion-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    Accordion Item #3
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-3"
                  className="hidden p-3"
                  aria-labelledby="heading-3"
                >
                  <div className="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Grid */}
      {/* Start Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-2">Bordered Accordions</h5>
          </div>
          <div className="card-body p-5">
            <div
              id="accordion-collapse-2"
              data-accordion="collapse"
              data-active-classes="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <div className="border rounded mb-3">
                <h2 id="heading-4">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    Accordion Item #1
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-4"
                  className="hidden p-3"
                  aria-labelledby="heading-4"
                >
                  <div className="text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="border rounded mb-3">
                <h2 id="heading-5">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapse-5"
                    aria-expanded="false"
                    aria-controls="collapse-5"
                  >
                    Accordion Item #2
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-5"
                  className="hidden p-3"
                  aria-labelledby="heading-5"
                >
                  <div className="text-[12px]">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div className="border rounded">
                <h2 id="heading-6">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapse-6"
                    aria-expanded="false"
                    aria-controls="collapse-6"
                  >
                    Accordion Item #3
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-6"
                  className="hidden p-3"
                  aria-labelledby="heading-6"
                >
                  <div className="text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the{" "}
                    <code className="text-danger">.accordion-body</code>, though
                    the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 className="mb-2">Flush Accordion</h5>
            <p className="subtitle text-muted fs-12 fw-normal">
              Add <code className="text-danger">.accordion-flush</code> to
              remove the default
              <code className="text-danger">background-color</code>, borders,
              and rounded corners.
            </p>
          </div>
          <div className="card-body px-5 py-4">
            <div
              id="accordion-collapse-3"
              data-accordion="collapse"
              data-active-classes="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              <div className="border-b">
                <h2 id="heading-7">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapse-7"
                    aria-expanded="false"
                    aria-controls="collapse-7"
                  >
                    Accordion Item #1
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-7"
                  className="hidden p-3"
                  aria-labelledby="heading-7"
                >
                  <div className="text-[12px]">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the{" "}
                    <code className="text-danger">.accordion-flush</code> class.
                    This is the first item's accordion body.
                  </div>
                </div>
              </div>
              <div className="border-b">
                <h2 id="heading-8">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapse-8"
                    aria-expanded="false"
                    aria-controls="collapse-8"
                  >
                    Accordion Item #2
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-8"
                  className="hidden p-3"
                  aria-labelledby="heading-8"
                >
                  <div className="text-[12px]">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the{" "}
                    <code className="text-danger">.accordion-flush</code> class.
                    This is the second item's accordion body. Let's imagine this
                    being filled with some actual content.
                  </div>
                </div>
              </div>
              <div>
                <h2 id="heading-9">
                  <button
                    className="flex justify-between items-center text-sm w-full p-3 text-start text-gray-500"
                    type="button"
                    data-accordion-target="#collapse-9"
                    aria-expanded="false"
                    aria-controls="collapse-9"
                  >
                    Accordion Item #3
                    <span>
                      <i className="ti ti-chevron-down" />
                    </span>
                  </button>
                </h2>
                <div
                  id="collapse-9"
                  className="hidden p-3"
                  aria-labelledby="heading-9"
                >
                  <div className="text-[12px]">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the{" "}
                    <code className="text-danger">.accordion-flush</code> class.
                    This is the third item's accordion body. Nothing more
                    exciting happening here in terms of content, but just
                    filling up the space to make it look, at least at first
                    glance, a bit more representative of how this would look in
                    a real-world application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Grid */}
    </div>
    {/* Start Footer */}
    <footer className="footer block md:flex justify-between md:text-left text-center p-4 bg-white border-t border-borderColor">
      <p className="mb-0">
        Copyright ©
        <Link to="#" className="text-primary underline">
          CRMS
        </Link>
      </p>
      <div className="flex items-center gap-2 footer-links justify-center justify-md-end">
        <Link to="#" className="hover:text-primary">
          About
        </Link>
        <Link to="#" className="hover:text-primary">
          Terms
        </Link>
        <Link to="#" className="hover:text-primary">
          Contact Us
        </Link>
      </div>
    </footer>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>


  )
}

export default UiAccordion