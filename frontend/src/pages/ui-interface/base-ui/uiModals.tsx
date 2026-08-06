import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiModals = () => {
  return (
 <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Modals</h4>
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
              Modals
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
        {/* Basic Modal */}
        <div className="col-xl-4">
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor p-4 border-b">
              <h5 className="card-title">Basic Modal</h5>
            </div>
            <div className="card-body p-4">
              <div
                id="standard-modal"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="standard-modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="standard-modalLabel">
                        Modal Heading
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="standard-modal"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h6 className="mb-2">Text in a modal</h6>
                      <p className="mb-4 pb-3 border-b border-color">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </p>
                      <h6 className="mb-2">
                        Overflowing text to show scroll behavior
                      </h6>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        data-modal-hide="standard-modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-list">
                {/* Standard  modal */}
                <button
                  type="button"
                  className="btn btn-primary mt-1"
                  data-modal-toggle="standard-modal"
                  data-modal-target="standard-modal"
                >
                  Launch Demo Modal
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /Basic Modal */}
        {/* Static Backdrop */}
        <div className="col-xl-4">
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor p-4 border-b">
              <h5 className="card-title">Static Backdrop</h5>
            </div>
            <div className="card-body p-4 card-buttons">
              <button
                type="button"
                className="btn btn-primary"
                data-modal-toggle="staticBackdrop"
                data-modal-target="staticBackdrop"
              >
                Launch static backdrop modal
              </button>
              {/* Modal */}
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="staticBackdrop"
                data-modal-backdrop="static"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="staticBackdrop"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et.
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        data-modal-hide="staticBackdrop"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Understood
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Static Backdrop */}
        {/* Toggle Between Modals */}
        <div>
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor border-b p-4">
              <h5 className="card-title">Toggle Between Modals</h5>
            </div>
            <div className="card-body p-4">
              {/* Modal */}
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalToggle"
                aria-hidden="true"
                tabIndex={-1}
              >
                <div className="modal-dialog w-full max-w-[500px] max-h-full modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Modal 1</h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalToggle"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Show a second modal and hide this one with the button
                      below.
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-modal-target="exampleModalToggle2"
                        data-modal-toggle="exampleModalToggle2"
                      >
                        Open second modal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
              {/* Modal */}
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalToggle2"
                aria-hidden="true"
                tabIndex={-1}
              >
                <div className="modal-dialog w-full max-w-[500px] max-h-full modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Modal 2</h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalToggle2"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      Hide this modal and show the first with the button below.
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-primary"
                        data-modal-target="exampleModalToggle"
                        data-modal-toggle="exampleModalToggle"
                        data-modal-hide="exampleModalToggle2"
                      >
                        Back to first
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
              <Link
                className="btn btn-primary"
                data-modal-toggle="exampleModalToggle"
                data-modal-target="exampleModalToggle"
                to="#"
                role="button"
              >
                Open first modal
              </Link>
            </div>
          </div>
        </div>
        {/* /Toggle Between Modals */}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
        {/* Using the Grid */}
        <div>
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor justify-between p-4 border-b">
              <div className="card-title">
                <h5 className="card-title">Extra Large Modal</h5>
              </div>
            </div>
            <div className="card-body p-4">
              <button
                type="button"
                className="btn btn-primary mt-1"
                data-modal-toggle="exampleModalLg"
                data-modal-target="exampleModalLg"
              >
                Extra Large Modal
              </button>
              {/*  Modal */}
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="bs-example-modal-lg"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myLargeModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[800px] max-h-full modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="myLargeModalLabel">
                        Large modal
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="bs-example-modal-lg"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
            </div>
          </div>
        </div>
        {/* /Using the Grid */}
        {/* Toggle Between Modals */}
        <div>
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor border-b p-4">
              <h5 className="card-title">Large Modals</h5>
            </div>
            <div className="card-body p-4">
              <button
                type="button"
                className="btn btn-primary mt-1"
                data-modal-toggle="bs-example-modal-lg"
                data-modal-target="bs-example-modal-lg"
              >
                Large Modal
              </button>
              {/* Modal */}
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalLg"
                tabIndex={-1}
                aria-labelledby="exampleModalLgLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[800px] max-h-full modal-lg">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="exampleModalLgLabel">
                        Extra Large Modal
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalLg"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
            </div>
          </div>
        </div>
        {/* /Toggle Between Modals */}
        {/* Optional Sizes */}
        <div>
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor p-4 border-b">
              <h5 className="card-title">Small Modal</h5>
            </div>
            <div className="card-body p-4">
              <button
                type="button"
                className="btn btn-primary mt-1"
                data-modal-toggle="bs-example-modal-sm"
                data-modal-target="bs-example-modal-sm"
              >
                Small Modal
              </button>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="bs-example-modal-sm"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="mySmallModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[300px] max-h-full modal-sm">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="mySmallModalLabel">
                        Small modal
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="bs-example-modal-sm"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                  </div>
                </div>
              </div>
              {/* /Modal */}
            </div>
          </div>
        </div>
        {/* /Optional Sizes */}
      </div>
      <div className="grid gdid-cols-1">
        {/* Fullscreen Modal */}
        <div className="col-xl-12">
          <div className="border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor justify-between p-4 border-b">
              <div className="card-title">
                <h5 className="card-title">Fullscreen Modal</h5>
              </div>
            </div>
            <div className="card-body p-4">
              <div className="bd-example">
                <button
                  type="button"
                  className="btn btn-primary mb-1"
                  data-modal-toggle="exampleModalFullscreen"
                  data-modal-target="exampleModalFullscreen"
                >
                  Full screen
                </button>
                <button
                  type="button"
                  className="btn btn-secondary mb-1"
                  data-modal-toggle="exampleModalFullscreenSm"
                  data-modal-target="exampleModalFullscreenSm"
                >
                  Full screen below sm
                </button>
                <button
                  type="button"
                  className="btn btn-warning mb-1"
                  data-modal-toggle="exampleModalFullscreenMd"
                  data-modal-target="exampleModalFullscreenMd"
                >
                  Full screen below md
                </button>
                <button
                  type="button"
                  className="btn btn-info mb-1"
                  data-modal-toggle="exampleModalFullscreenLg"
                  data-modal-target="exampleModalFullscreenLg"
                >
                  Full screen below lg
                </button>
                <button
                  type="button"
                  className="btn btn-success mb-1"
                  data-modal-toggle="exampleModalFullscreenXl"
                  data-modal-target="exampleModalFullscreenXl"
                >
                  Full screen below xl
                </button>
              </div>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreen"
                tabIndex={-1}
                aria-labelledby="exampleModalFullscreenLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen modal-dialog-scrollable w-full max-w-full h-full max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalFullscreenLabel"
                      >
                        Full screen modal
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreen"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreen"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenSm"
                tabIndex={-1}
                aria-labelledby="exampleModalFullscreenSmLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen-sm-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalFullscreenSmLabel"
                      >
                        Full screen below sm
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenSm"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenSm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenMd"
                tabIndex={-1}
                aria-labelledby="exampleModalFullscreenMdLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen-md-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalFullscreenMdLabel"
                      >
                        Full screen below md
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenMd"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenMd"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenLg"
                tabIndex={-1}
                aria-labelledby="exampleModalFullscreenLgLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen-lg-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalFullscreenLgLabel"
                      >
                        Full screen below lg
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenLg"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenLg"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenXl"
                tabIndex={-1}
                aria-labelledby="exampleModalFullscreenXlLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen-xl-down modal-dialog-scrollable w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalFullscreenXlLabel"
                      >
                        Full screen below xl
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenXl"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenXl"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                id="exampleModalFullscreenXxl"
                tabIndex={-1}
                aria-labelledby="exampleModalFullscreenXxlLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-fullscreen-xxl-down modal-dialog-scrollable w-full max-w-full max-h-full h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4
                        className="modal-title"
                        id="exampleModalFullscreenXxlLabel"
                      >
                        Full screen below xxl
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="exampleModalFullscreenXxl"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">...</div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-modal-hide="exampleModalFullscreenXxl"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Fullscreen Modal */}
      </div>
      <div className="grid gdid-cols-1">
        {/* Varying Modal Content */}
        <div className="col-xl-12">
          <div className="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-borderColor justify-between border-b p-4">
              <div className="card-title">
                <h5 className="card-title">Modal Directions</h5>
              </div>
            </div>
            <div className="card-body p-4">
              <button
                type="button"
                className="btn btn-primary mb-1"
                data-modal-toggle="center_modal"
                data-modal-target="center_modal"
                data-modal-whatever="@mdo"
              >
                Center Modal
              </button>
              <button
                type="button"
                className="btn btn-secondary mb-1"
                data-modal-toggle="top_modal"
                data-modal-target="top_modal"
                data-modal-whatever="@fat"
              >
                Top Modal
              </button>
              <button
                type="button"
                className="btn btn-dark mb-1"
                data-modal-toggle="bottom_modal"
                data-modal-target="bottom_modal"
                data-modal-whatever="@getbootstrap"
              >
                Bottom Modal
              </button>
              <div
                id="center_modal"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="center_modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[500px] max-h-full">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="center_modalLabel">
                        Modal Heading
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="center_modal"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h6 className="mb-2">Text in a modal</h6>
                      <p className="mb-4 pb-3 border-b border-color">
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </p>
                      <h6 className="mb-2">
                        Overflowing text to show scroll behavior
                      </h6>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                      <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        data-modal-hide="center_modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="top_modal"
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 z-[1055] justify-center items-start flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="top_modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[500px] mt-0">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="top_modalLabel">
                        Modal Heading
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="top_modal"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h6 className="mb-2">Top positioned modal</h6>
                      <p className="mb-4 pb-3 border-b border-color">
                        This modal appears at the top of the screen.
                      </p>
                      <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        data-modal-hide="top_modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="bottom_modal"
                className="hidden overflow-y-auto overflow-x-hidden fixed bottom-0  z-[1055] justify-center items-end flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="bottom_modalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog w-full max-w-[500px] max-h-full mb-0">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title" id="bottom_modalLabel">
                        Modal Heading
                      </h4>
                      <button
                        type="button"
                        className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                        data-modal-hide="bottom_modal"
                      >
                        <i className="ti ti-x" />
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <h6 className="mb-2">Bottom positioned modal</h6>
                      <p className="mb-4 pb-3 border-b border-color">
                        This modal appears at the bottom of the screen.
                      </p>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                      </p>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-light me-2"
                        data-modal-hide="bottom_modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Varying Modal Content */}
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

export default UiModals