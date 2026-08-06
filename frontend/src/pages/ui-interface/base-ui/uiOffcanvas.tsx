import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";

const UiOffcanvas = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Offcanvas</h4>
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
                to="javascript:void(0);"
                className="hover:underline text-gray-700"
              >
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Offcanvas
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 gap-x-6">
        <div>
          {/* Offcanvas */}
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header py-4 px-5 border-b border-borderColor">
              <h5>Offcanvas</h5>
            </div>
            <div className="card-body p-5">
              <p className="mb-3">
                You can use a link with the <code>href</code> attribute, or a
                button with the <code>data-drawer-target</code> attribute. In
                both cases, the
                <code>data-drawer-show"</code> is required.
              </p>
              <Link
              to="#"
                className="btn btn-primary me-2"
                data-drawer-target="offcanvasExample"
                data-drawer-show="offcanvasExample"
                aria-controls="offcanvasExample"
              >
                {" "}
                Link with href
              </Link>
              <button
                className="btn btn-primary me-2"
                type="button"
                data-drawer-target="offcanvasExample1"
                data-drawer-show="offcanvasExample1"
                aria-controls="offcanvasExample1"
              >
                {" "}
                Button with offcanvas{" "}
              </button>
              <button
                className="btn bg-primary border border-primary text-white text-center hover:bg-primary-hover hover:text-white"
                type="button"
                data-drawer-target="offcanvasDark"
                data-drawer-show="offcanvasDark"
                aria-controls="offcanvasDark"
              >
                {" "}
                Dark offcanvas{" "}
              </button>
              {/* drawer component */}
              <div
                id="offcanvasExample"
                className="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabIndex={-1}
              >
                <div className="p-4 border-b border-borderColor">
                  <h5 className="inline-flex items-center mb-2">Offcanvas</h5>
                  <button
                    type="button"
                    data-drawer-hide="offcanvasExample"
                    aria-controls="offcanvasExample"
                    className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                  >
                    <i className="ti ti-x" />{" "}
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                <div className="p-4">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-4 mb-2">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              {/* /drawer component */}
              {/* drawer component */}
              <div
                id="offcanvasExample1"
                className="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
                tabIndex={-1}
              >
                <div className="p-4 border-b border-borderColor">
                  <h5 className="inline-flex items-center mb-2">Offcanvas</h5>
                  <button
                    type="button"
                    data-drawer-hide="offcanvasExample1"
                    aria-controls="offcanvasExample1"
                    className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                  >
                    <i className="ti ti-x" />{" "}
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                <div className="p-4">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-4 mb-2">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              {/* /drawer component */}
              {/* drawer component */}
              <div
                id="offcanvasDark"
                className="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-dark w-80"
                tabIndex={-1}
              >
                <div className="p-4 border-b border-gray-700">
                  <h5 className="inline-flex items-center text-white">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    data-drawer-hide="offcanvasDark"
                    aria-controls="offcanvasDark"
                    className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                  >
                    <i className="ti ti-x" />{" "}
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                <div className="p-4 text-white">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-4 text-white">List</h5>
                  <ul>
                    <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                    <li>Neque porro quisquam est, qui dolorem</li>
                    <li>Quis autem vel eum iure qui in ea</li>
                  </ul>
                  <ul>
                    <li>At vero eos et accusamus et iusto odio dignissimos</li>
                    <li>Et harum quidem rerum facilis</li>
                    <li>Temporibus autem quibusdam et aut officiis</li>
                  </ul>
                </div>
              </div>
              {/* /drawer component */}
            </div>
          </div>
          {/* /Offcanvas */}
        </div>
        {/* Offcanvas */}
        <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div className="card-header py-4 px-5 border-b border-borderColor">
            <h5>Positions Offcanvas</h5>
          </div>
          <div className="card-body p-5">
            <ul className="mb-3">
              <li>
                <code>data-drawer-placement="left"</code> places offcanvas on
                the left of the viewport (shown above)
              </li>
              <li>
                <code>data-drawer-placement="right"</code> places offcanvas on
                the right of the viewport
              </li>
              <li>
                <code>data-drawer-placement="top"</code> places offcanvas on the
                top of the viewport
              </li>
              <li>
                <code>data-drawer-placement="left"</code> places offcanvas on
                the bottom of the viewport
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <button
                className="btn btn-primary"
                type="button"
                data-drawer-target="offcanvasTop"
                data-drawer-show="offcanvasTop"
                aria-controls="offcanvasTop"
                data-drawer-placement="top"
              >
                Toggle Top offcanvas
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-drawer-target="offcanvasRight"
                data-drawer-show="offcanvasRight"
                aria-controls="offcanvasRight"
                data-drawer-placement="right"
              >
                Toggle Right offcanvas
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-drawer-target="offcanvasBottom"
                data-drawer-show="offcanvasBottom"
                aria-controls="offcanvasBottom"
                data-drawer-placement="bottom"
              >
                Toggle Bottom offcanvas
              </button>
              <button
                className="btn btn-primary"
                type="button"
                data-drawer-target="offcanvasLeft"
                data-drawer-show="offcanvasLeft"
                aria-controls="offcanvasLeft"
                data-drawer-placement="left"
              >
                Toggle Left offcanvas
              </button>
            </div>
            {/* drawer component */}
            <div
              id="offcanvasTop"
              className="fixed top-0 left-0 right-0 z-[9999] w-full transition-transform -translate-y-full bg-white"
              tabIndex={-1}
            >
              <div className="p-4 border-b border-borderColor">
                <h5 className="inline-flex items-center mb-2">Offcanvas Top</h5>
                <button
                  type="button"
                  data-drawer-hide="offcanvasTop"
                  aria-controls="offcanvasTop"
                  className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                >
                  <i className="ti ti-x" />{" "}
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="p-4">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-4 mb-2">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            {/* /drawer component */}
            {/* drawer component */}
            <div
              id="offcanvasRight"
              className="fixed top-0 right-0 z-[9999] h-screen overflow-y-auto transition-transform translate-x-full bg-white w-80"
              tabIndex={-1}
            >
              <div className="p-4 border-b border-borderColor">
                <h5 className="inline-flex items-center mb-2">Offcanvas</h5>
                <button
                  type="button"
                  data-drawer-hide="offcanvasRight"
                  aria-controls="offcanvasRight"
                  className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                >
                  <i className="ti ti-x" />{" "}
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="p-4">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-4 mb-2">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            {/* /drawer component */}
            {/* drawer component */}
            <div
              id="offcanvasBottom"
              className="fixed bottom-0 left-0 right-0 z-[9999] w-full overflow-y-auto transition-transform bg-white translate-y-full"
              tabIndex={-1}
            >
              <div className="p-4 border-b border-borderColor">
                <h5 className="inline-flex items-center mb-2">Offcanvas</h5>
                <button
                  type="button"
                  data-drawer-hide="offcanvasBottom"
                  aria-controls="offcanvasBottom"
                  className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                >
                  <i className="ti ti-x" />{" "}
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="p-4">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-4 mb-2">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            {/* /drawer component */}
            {/* drawer component */}
            <div
              id="offcanvasLeft"
              className="fixed top-0 left-0 z-[9999] h-screen overflow-y-auto transition-transform -translate-x-full bg-white w-80"
              tabIndex={-1}
            >
              <div className="p-4 border-b border-borderColor">
                <h5 className="inline-flex items-center mb-2">Offcanvas</h5>
                <button
                  type="button"
                  data-drawer-hide="offcanvasLeft"
                  aria-controls="offcanvasLeft"
                  className="text-title bg-transparent hover:text-danger rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center"
                >
                  <i className="ti ti-x" />{" "}
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="p-4">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-4 mb-2">List</h5>
                <ul>
                  <li>Nemo enim ipsam voluptatem quia aspernatur</li>
                  <li>Neque porro quisquam est, qui dolorem</li>
                  <li>Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul>
                  <li>At vero eos et accusamus et iusto odio dignissimos</li>
                  <li>Et harum quidem rerum facilis</li>
                  <li>Temporibus autem quibusdam et aut officiis</li>
                </ul>
              </div>
            </div>
            {/* /drawer component */}
          </div>
        </div>
        {/* /Offcanvas */}
      </div>
    </div>
    {/* Start Footer */}
   <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default UiOffcanvas;
