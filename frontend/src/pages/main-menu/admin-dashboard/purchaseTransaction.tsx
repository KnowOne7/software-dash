import { Link } from "react-router";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { useEffect, useState } from "react";
import { initDropdowns } from "flowbite";
import { getActionsForPage } from "../../../config/actionConfigs";
import { useActionColumn } from "../../../components/data-table/withActions";
import CommonFooter from "../../../components/common-footer/commonFooter";
import HeaderActions from "../../../components/header-actions/headerActions";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import Datatable from "../../../components/data-table";
import { PurchaseTransactionListData } from "../../../core/json/purchaseTransactionListData";
import { all_routes } from "../../../routes/all_routes";
import SearchInput from "../../../components/data-table/dataTableSearch";


const PurchaseTransaction = () => {

  // Get actions for payments page
  const paymentsActions = getActionsForPage('purchaseTransation');
  const actionColumn = useActionColumn(paymentsActions);

  useEffect(() => {
    initDropdowns();
  }, []);


  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const [filledStars, setFilledStars] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleClick = (key: string) => {
    setFilledStars((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle on/off
    }));
  };
  const data = PurchaseTransactionListData;
  const columns = [
    { title: "", dataIndex: "Name", render: (_: any, record: any) => (<div className={`cursor-pointer ${filledStars[record.key] ? "text-yellow-400" : "text-gray-300"}`} onClick={() => handleClick(record.key)} > <i className="ti ti-star-filled text-lg" /> </div>), sorter: (a: any, b: any) => a.Name.length - b.Name.length, },
    { title: "Invoice ID", dataIndex: "InvoiceID", render: (text: string) => (<Link to="#" data-modal-target="view_invoice" data-modal-toggle="view_invoice" className="title-name hover:text-primary" > {text} </Link>), sorter: (a: any, b: any) => a.InvoiceID.length - b.InvoiceID.length, },
    { title: "Customer", dataIndex: "Customer", render: (text: string, render: any) => (<div className="flex items-center"> <Link to="#" className="w-8 h-8 rounded-full border p-1 mr-2"> <ImageWithBasePath className="w-auto h-auto rounded-full" src={`assets/img/icons/${render.Image}`} alt="User Image" /> </Link> <Link to="#" className="flex flex-col font-medium text-gray-900 hover:text-primary"> {text} </Link> </div>), sorter: (a: any, b: any) => a.Customer.length - b.Customer.length, },
    { title: "Email", dataIndex: "Email", sorter: (a: any, b: any) => a.Email.length - b.Email.length, }, { title: "Created Date", dataIndex: "CreatedDate", sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length, },
    { title: "Amount", dataIndex: "Amount", sorter: (a: any, b: any) => a.Amount.length - b.Amount.length, }, { title: "Payment Method", dataIndex: "PaymentMethod", sorter: (a: any, b: any) => a.PaymentMethod.length - b.PaymentMethod.length, },
    { title: "Status", dataIndex: "Status", render: (text: string) => { const color = text === "Paid" ? "bg-success text-white" : text === "pending" ? "bg-info text-white" : "bg-danger text-white"; return (<span className={`${color} text-xs px-2 py-1 rounded capitalize`}> {text} </span>); }, sorter: (a: any, b: any) => a.Status.length - b.Status.length, },
    actionColumn,
  ];

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Purchase Transaction
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  198
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
                  <li className="text-dark font-medium" aria-current="page">
                    Purchase Transaction
                  </li>
                </ol>
              </nav>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <HeaderActions />
            </div>
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">
               <div className="relative">
                <SearchInput value={searchText} onChange={handleSearch} />
              </div>
            </div>
            <div className="bg-white p-4 pb-0">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-4">
                <div className="flex items-center flex-wrap gap-y-3">
                  {/* Dropdown */}
                  <div className="me-3">
                    <Link
                      to="#"
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="sort-dropdown"
                    >
                      <i className="ti ti-sort-ascending-2 me-2" />
                      Sort By
                      <i className="ti ti-chevron-down ml-1" />
                    </Link>
                    <ul
                      id="sort-dropdown"
                      className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
                    >
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          Newest
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        >
                          Oldest
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Date */}
                  <div className="relative">
                    <PredefinedDatePicker />
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-y-3">
                  <div className="me-3">
                    <button
                      className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                      data-dropdown-toggle="filter-dropdown"
                    >
                      <i className="ti ti-filter me-1" />
                      Filter
                      <i className="ti ti-chevron-down ml-1" />
                    </button>
                    <div
                      id="filter-dropdown"
                      className="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]"
                    >
                      <div className="filter-header flex items-center justify-between border-b border-borderColor p-3">
                        <h6 className="mb-0">
                          <i className="ti ti-filter me-1" />
                          Filter
                        </h6>
                        <button
                          data-dropdown-hide="filter-dropdown"
                          className="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"
                        >
                          <i className="ti ti-x" />
                        </button>
                      </div>
                      <div
                        id="accordionExample"
                        data-accordion="collapse"
                        className="p-4"
                      >
                        <div className="mb-4">
                          <h2 id="accordion-heading-1">
                            <button
                              type="button"
                              className="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                              data-accordion-target="#accordion-body-1"
                              aria-expanded="true"
                              aria-controls="accordion-body-1"
                            >
                              <span className="text-dark">
                                <i className="ti ti-chevron-right me-2" />
                                Payment
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-1"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-1"
                            data-accordion-body=""
                          >
                            <ul className="space-y-3 max-h-64 overflow-y-auto">
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Payment Method
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Paypal
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Debit Card
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-4">
                          <h2 id="accordion-heading-2">
                            <button
                              type="button"
                              className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                              data-accordion-target="#accordion-body-2"
                              aria-expanded="true"
                              aria-controls="accordion-body-2"
                            >
                              <span className="text-dark">
                                <i className="ti ti-chevron-right me-2" />
                                Status
                              </span>
                            </button>
                          </h2>
                          <div
                            id="accordion-body-2"
                            className="hidden p-4 bg-light  border border-borderColor rounded"
                            aria-labelledby="accordion-heading-2"
                            data-accordion-body=""
                          >
                            <ul className="space-y-3 max-h-64 overflow-y-auto">
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Paid
                                </label>
                              </li>
                              <li>
                                <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                                  />
                                  Unpaid
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            to="#"
                            className="btn border border-borderColor text-center w-full"
                          >
                            Reset
                          </Link>
                          <Link
                            to="#"
                            className="btn btn-primary w-full"
                          >
                            Filter
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="rounded p-2 bg-[#EBEBFA] inline-flex items-center text-[#3538CD] border-info-200"
                      data-dropdown-toggle="column-dropdown"
                    >
                      <i className="ti ti-columns-3 me-2" />
                      Manage Columns
                    </Link>
                    <ul
                      id="column-dropdown"
                      className="hidden p-3 z-[1] border border-borderColor rounded bg-white shadow-lg w-[250px]"
                    >
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium ">Name</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium ">Domain Url</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-2 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium ">Plan</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                      <li className="flex items-center gap-2 mb-0 p-1">
                        <i className="ti ti-columns text-gray-600" />
                        <label className="flex items-center justify-between w-full cursor-pointer">
                          <input
                            type="checkbox"
                            defaultValue=""
                            className="sr-only peer"
                          />
                          <span className="text-sm font-medium ">Status</span>
                          <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Contact List */}
              <div className="table-responsive custom-table">
                <Datatable
                  columns={columns}
                  dataSource={data}
                  Selection={true}
                  searchText={searchText}
                />
              </div>
              {/* /Contact List */}
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}

      <div
        id="view_modal"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[800px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="p-5">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="max-w-full h-auto"
                    alt="logo"
                  />
                </div>
                <div className="w-full md:w-1/2 text-right">
                  <h5 className="text-gray-900 mb-1 text-lg">Invoice</h5>
                  <p className="mb-1 font-normal text-sm">
                    <i className="ti ti-file-invoice mr-1" />
                    INV0287
                  </p>
                  <p className="mb-1 font-normal text-sm">
                    <i className="ti ti-calendar mr-1" />
                    Issue date: 12 Sep 2024
                  </p>
                  <p className="font-normal text-sm">
                    <i className="ti ti-calendar mr-1" />
                    Due date: 12 Oct 2024
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-between mb-6">
                <div className="w-full md:w-7/12 mb-4 md:mb-0">
                  <p className="text-gray-900 mb-2 font-semibold text-sm">
                    Invoice From:
                  </p>
                  <p className="mb-1">Crms</p>
                  <p className="mb-1">
                    797 Hilltop Street, Springfield
                    <br />
                    New York, United States
                  </p>
                  <p className="mb-1">crms@example.com</p>
                </div>
                <div className="w-full md:w-5/12">
                  <p className="text-gray-900 mb-2 font-semibold text-sm">
                    Invoice To:
                  </p>
                  <p className="mb-1">NovaWave LLC</p>
                  <p className="mb-1">
                    367 Hillcrest Lane, Irvine, California,
                    <br />
                    United States
                  </p>
                  <p className="mb-1">michael@example.com</p>
                </div>
              </div>
              <div className="mb-6 overflow-x-auto table-responsive">
                <table className="table min-w-full table-nowrap table-auto text-left border-collapse">
                  <thead className="table-light text-gray-900">
                    <tr>
                      <th className="p-2 font-medium">Plan</th>
                      <th className="p-2 font-medium">Billing Cycle</th>
                      <th className="p-2 font-medium">Created Date</th>
                      <th className="p-2 font-medium">Expiring On</th>
                      <th className="p-2 font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-800">
                    <tr className="border-t">
                      <td className="p-2">Advanced (Monthly)</td>
                      <td className="p-2">30 Days</td>
                      <td className="p-2">12 Sep 2024</td>
                      <td className="p-2">12 Oct 2024</td>
                      <td className="p-2">$200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-wrap justify-between mb-6">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <h6 className="mb-4 font-medium text-base">Payment info:</h6>
                  <p className="mb-0 text-sm">Credit Card - 123***********789</p>
                  <div className="flex justify-between items-center mb-2 pr-3">
                    <p className="mb-0 text-sm">Amount</p>
                    <p className="text-gray-900 text-sm">$200.00</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="flex justify-between items-center pr-3 mb-2">
                    <p className="text-gray-900 mb-2 text-sm">Sub Total</p>
                    <p className="mb-2 text-sm">$200.00</p>
                  </div>
                  <div className="flex justify-between items-center pr-3 mb-2">
                    <p className="text-gray-900 mb-2 text-sm">Tax</p>
                    <p className="mb-2 text-sm">$0.00</p>
                  </div>
                  <div className="flex justify-between items-center pr-3">
                    <p className="text-gray-900 mb-0 text-sm">Total</p>
                    <p className="text-gray-900 font-medium mb-0 text-sm">
                      $200.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-borderColor rounded bg-white">
                <div className="p-4">
                  <p className="text-gray-900 font-medium mb-2">
                    Terms &amp; Conditions:
                  </p>
                  <p className="text-sm font-normal flex items-start mb-2">
                    <i className="ti ti-point-filled text-primary text-xs mr-2 mt-1" />
                    All payments must be made according to the agreed schedule. Late
                    payments may incur additional fees.
                  </p>
                  <p className="text-sm font-normal flex items-start mb-0">
                    <i className="ti ti-point-filled text-primary text-xs mr-2 mt-1" />
                    We are not liable for any indirect, incidental, or consequential
                    damages, including loss of profits, revenue, or data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                Are you sure you want to remove transaction you selected.
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="#"
                  className="btn btn-light z-1 me-2 w-full"
                  data-modal-hide="delete_modal"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-modal-hide="delete_modal"
                  className="btn btn-primary z-1 w-full"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delete modal */}

    </>
  );
};

export default PurchaseTransaction;
