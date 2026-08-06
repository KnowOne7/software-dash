import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"


const InvoiceDetails = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper relative pt-[50px] ml-[240px]">
      <div className="content p-5">
        <div className="w-full mx-auto lg:w-10/12">
          <h6 className="font-bold text-[14px] mb-4 flex items-center">
            <Link to={all_routes.invoice}>
              <i className="ti ti-arrow-left me-1" />
              Invoices
            </Link>
          </h6>
        </div>
        <div className="w-full mx-auto bg-white shadow rounded-lg p-6 lg:w-10/12">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-borderColor pb-4 mb-4">
            <ImageWithBasePath
              src="assets/img/logo.svg"
              className="block invoice-logo"
              width={200}
              alt="Logo Light"
            />
            <ImageWithBasePath
              src="assets/img/logo-white.svg"
              className="hidden invoice-logo-dark"
              width={200}
              alt="Logo Dark"
            />
            <span className="bg-info-100 text-info rounded text-[12px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2">
              #PRE0025
            </span>
          </div>
          {/* Start Invoice Details Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-borderColor pb-4 mb-4">
            <div>
              <h5 className="text-base font-bold mb-2">Invoice Details</h5>
              <p className="text-sm text-gray-500 mb-1">
                Invoice Number: <span className="text-dark">INV0025</span>
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Issued On: <span className="text-dark">25 Jan 2025</span>
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Due Date: <span className="text-dark">31 Jan 2025</span>
              </p>
              <p className="text-sm text-gray-500">
                Recurring Invoice: <span className="text-dark">Monthly</span>
              </p>
            </div>
            <div>
              <h5 className="text-base font-bold mb-2">Invoice From</h5>
              <p className="text-dark font-medium mb-1">Andrew Fletcher</p>
              <p className="text-sm text-gray-500">
                5754 Airport Rd Coosada, AL, 36020
              </p>
              <p className="text-sm text-gray-500">United States</p>
            </div>
            <div className="text-left md:text-right">
              <h5 className="text-base font-bold mb-2">Invoice To</h5>
              <p className="text-dark font-medium mb-1">Andrew Fletcher</p>
              <p className="text-sm text-gray-500">
                299 Star Trek Drive, Florida, 3240,
              </p>
              <p className="text-sm text-gray-500">United States</p>
            </div>
          </div>
          {/* Product Table */}
          <div className="mb-4">
            <h6 className="text-base font-bold mb-4">Products/Service Items</h6>
            <div className="table-responsive">
              <table className="table table w-full border-b border-borderColor">
                <thead className="table-light">
                  <tr>
                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      #
                    </th>
                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Product/Item
                    </th>
                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Description
                    </th>
                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Unit Cost
                    </th>
                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Quantity
                    </th>
                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-2.5 text-gray-500">1</td>
                    <td className="px-5 py-2.5 text-gray-500">
                      Full body checkup
                    </td>
                    <td className="px-5 py-2.5 text-gray-500">
                      Complete health screening covering all major systems
                    </td>
                    <td className="px-5 py-2.5 text-gray-500">$400</td>
                    <td className="px-5 py-2.5 text-gray-500">1</td>
                    <td className="px-5 py-2.5 text-gray-500">$400</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-2.5 text-gray-500">2</td>
                    <td className="px-5 py-2.5 text-gray-500">Blood Test</td>
                    <td className="px-5 py-2.5 text-gray-500">
                      Routine blood analysis to assess overall health status
                    </td>
                    <td className="px-5 py-2.5 text-gray-500">$250</td>
                    <td className="px-5 py-2.5 text-gray-500">1</td>
                    <td className="px-5 py-2.5 text-gray-500">$250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Summary & Bank Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-borderColor pb-4 mb-4">
            <div>
              <h6 className="text-base font-bold mb-2">Bank Details</h6>
              <p className="text-sm text-gray-500 mb-1">
                Bank Name: <span className="text-dark">ABC Bank</span>
              </p>
              <p className="text-sm text-gray-500 mb-1">
                Account Number: <span className="text-dark">782459739212</span>
              </p>
              <p className="text-sm text-gray-500 mb-1">
                IFSC Code: <span className="text-dark">ABC0001345</span>
              </p>
              <p className="text-sm text-gray-500">
                Payment Reference:{" "}
                <span className="text-dark">INV-20250220-001</span>
              </p>
            </div>
            <div>
              <div className="flex justify-between font-medium text-sm text-gray-500 mb-2">
                <span>Amount</span>
                <span className="font-semibold text-dark">$1,793.12</span>
              </div>
              <div className="flex justify-between font-medium text-sm text-gray-500 mb-2">
                <span>CGST (9%)</span>
                <span className="font-semibold text-dark">$18</span>
              </div>
              <div className="flex justify-between font-medium text-sm text-gray-500 mb-2">
                <span>SGST (9%)</span>
                <span className="font-semibold text-dark">$18</span>
              </div>
              <div className="flex justify-between font-medium text-sm text-gray-500 border-b border-borderColor pb-4 mb-4">
                <span>Discount</span>
                <span className="font-semibold text-red-600">$18</span>
              </div>
              <div className="flex justify-between font-medium text-base font-bold mb-2">
                <h6 className="text-[18px]">Total (USD)</h6>
                <h6 className="text-[18px]">$1,972.43</h6>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total in words</p>
                <p className="font-semibold text-dark">
                  Dollar Six Hundred Fifty
                </p>
              </div>
            </div>
          </div>
          {/* Notes and Signature */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-borderColor pb-4 mb-4">
            <div>
              <h6 className="text-sm font-semibold mb-1">Terms and Conditions</h6>
              <p className="text-sm text-gray-500 mb-3">
                The Payment must be returned in the same condition.
              </p>
              <h6 className="text-sm font-semibold mb-1">Notes</h6>
              <p className="text-sm text-gray-500">
                All charges are final and include applicable taxes, fees, and
                additional costs.
              </p>
            </div>
            <div className="text-center">
              <ImageWithBasePath
                src="assets/img/icons/signature-img.svg"
                alt="Signature"
                className="w-32 mx-auto mb-2"
              />
              <h6 className="text-sm font-semibold">Ted M. Davis</h6>
              <p className="text-xs text-gray-500">Manager</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="#"
              className="flex items-center gap-2 px-4 py-2 bg-dark text-white rounded text-sm font-medium"
            >
              <i className="ti ti-printer" /> Print
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded text-sm font-medium"
            >
              <i className="ti ti-download" /> Download
            </Link>
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

export default InvoiceDetails