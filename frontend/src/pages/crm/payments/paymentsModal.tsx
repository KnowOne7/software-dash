import { Link } from "react-router"
import { all_routes } from "../../../routes/all_routes"
import { useEffect } from "react"
import { hideOffcanvas } from "../../../utils/modalUtils"

const PaymentsModal = () => {
  useEffect(() => {
    // Reinitialize Flowbite after component mounts to ensure
    // data attributes work properly with dynamically rendered content
    const initFlowbite = async () => {
      try {
        const { initFlowbite } = await import('flowbite');
        initFlowbite();
      } catch (error) {
        console.error('Failed to initialize Flowbite:', error);
      }
    };

    // Small delay to ensure DOM is fully rendered
    const timer = setTimeout(initFlowbite, 100);

    return () => clearTimeout(timer);
  }, []);

  return (

    <>

      {/* Payment View Offcanvas */}
      <div
        id="offcanvas_view"
        className="fixed top-0 right-0 z-[9999] w-[800px] h-screen overflow-y-auto transition-transform duration-300 translate-x-full bg-white shadow-sm"
        tabIndex={-1}
        data-drawer-target="offcanvas_view"
        data-drawer-show="offcanvas_view"
        data-drawer-placement="right"
        aria-labelledby="offcanvas_view_label"
      >
        <div className="p-4 border-b border-borderColor flex items-center justify-between">
          <h5 className="inline-flex items-center" id="offcanvas_view_label">
            Payment for Invoice<span className="text-danger ms-2">#274738</span>
          </h5>
          {/* Dropdown */}
          <div className="flex items-center">
            <div className="me-3">
              <Link
                to="#"
                className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="download-dropdown"
              >
                Download
                <i className="ti ti-chevron-down ml-1" />
              </Link>
              <ul
                id="download-dropdown"
                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
              >
                <li>
                  <Link
                    to="#"
                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  >
                    Download
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  >
                    Download PDF
                  </Link>
                </li>
              </ul>
            </div>
            <button
              type="button"
              data-drawer-hide="offcanvas_view"
              aria-controls="offcanvas_view"
              className="text-title bg-transparent hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"
              onClick={() => {
                hideOffcanvas('offcanvas_view');
              }}
            >
              <i className="ti ti-x" /> <span className="sr-only">Close menu</span>
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="card border border-borderColor rounded shadow">
            <div className="card-body p-4">
              <div className="details-propsal">
                <h6 className="mb-3">Proposal From &amp; To</h6>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                  <div className="md:col-span-6">
                    <div className="proposal-to">
                      <h6 className="mb-2 font-semibold text-[14px]">CRMS</h6>
                      <p className="mb-1">
                        3338 Marcus Street Birmingham, AL 35211
                      </p>
                      <p className="mb-1">
                        Phone : <span className="text-dark">+1 98789 78788</span>{" "}
                      </p>
                      <p className="mb-1">
                        Email : <span className="text-dark">info@example.com</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="proposal-to">
                      <h6 className="mb-2 font-semibold text-[14px]">
                        NovaWave LLC{" "}
                      </h6>
                      <p className="mb-1">
                        994 Martine Ranch Suite 900 Candacefort New Hampshire
                      </p>
                      <p className="mb-1">
                        Phone : <span className="text-dark">+1 58478 74646</span>
                      </p>
                      <p className="mb-1">
                        Email : <span className="text-dark">info@example.net</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-borderColor my-4" />
              <div className="details-propsal details-propsals border-b border-borderColor pb-4 mb-4">
                <h6 className="mb-3">Payment Details</h6>
                <ul className="flex items-centers justify-between gap-2 flex-wrap">
                  <li>
                    <p className="text-[13px] font-medium mb-1">Payment Date</p>
                    <h6 className="text-[14px] font-normal">13 May 2024</h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Payment Method</p>
                    <h6 className="text-[14px] font-normal">Cash</h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Total Amount</p>
                    <h6 className="text-[14px] font-normal">$96</h6>
                  </li>
                </ul>
              </div>
              <div className="details-propsal">
                <div className="flex items-center justify-between">
                  <h6 className="mb-3">Invoice Details</h6>
                  <h6 className="d-flex text-[14px] font-normal">
                    <span className="text-danger"> Amount Due : </span> $100
                  </h6>
                </div>
                <ul className="m-0 border-0 flex items-centers justify-between gap-2 flex-wrap">
                  <li>
                    <p className="text-[13px] font-medium mb-1">Invoice Number</p>
                    <h6 className="mb-0">
                      <span className="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                        #1254057
                      </span>
                    </h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Invoice Date</p>
                    <h6 className="text-[14px] font-normal">13 May 2024</h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Invoice Amount</p>
                    <h6 className="text-[14px] font-normal">$196</h6>
                  </li>
                  <li>
                    <p className="text-[13px] font-medium mb-1">Payment Amount</p>
                    <h6 className="text-[14px] font-normal">$96</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Payment View */}
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
                Are you sure you want to remove payment you selected.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="#"
                  className="btn btn-light z-1 me-2 w-full"
                  data-modal-hide="delete_modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.payments} className="btn btn-primary z-1 w-full">
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
export default PaymentsModal