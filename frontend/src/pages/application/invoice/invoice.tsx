import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"


const Invoice = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-5">
                    {/* Page Header */}
                    <BreadcrumbHeader
                        title="Invoices"
                        items={[
                            { label: "Home", href: all_routes.dealsDashboard },
                            { label: "Applications", href: "#" },
                            { label: "Invoices" }, // last item has no link
                        ]}
                    />
                    {/* End Page Header */}
                    {/* start row */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
                        {/* Item 1 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex flex-col items-center">
                                        <p className="mb-1 d-block">Total Invoice</p>
                                        <h5 className="text-[16px] mb-0">$3,237.94</h5>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[100px] bg-pink"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <p className="flex items-center text-truncate mb-0">
                                    <span className="text-success text-[12px] flex items-center me-1">
                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                        +32.40%
                                    </span>
                                    from last month
                                </p>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex flex-col items-center">
                                        <p className="mb-1 d-block">Outstanding</p>
                                        <h5 className="text-[16px] mb-0">$3,237.94</h5>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[100px] bg-purple"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <p className="flex items-center text-truncate mb-0">
                                    <span className="text-success text-[12px] flex items-center me-1">
                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                        +32.40%
                                    </span>
                                    from last month
                                </p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex flex-col items-center">
                                        <p className="mb-1 d-block">Draft</p>
                                        <h5 className="text-[16px] mb-0">$3,237.94</h5>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[100px] bg-warning"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <p className="flex items-center text-truncate mb-0">
                                    <span className="text-success text-[12px] flex items-center me-1">
                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                        +12.40%
                                    </span>
                                    from last month
                                </p>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex flex-col items-center">
                                        <p className="mb-1 d-block">Total Overdue</p>
                                        <h5 className="text-[16px] mb-0">$3,237.94</h5>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[200px] bg-danger"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <p className="flex items-center text-dangermb-0">
                                    <span className="text-success text-[12px] flex items-center me-1">
                                        <i className="ti ti-arrow-wave-right-up me-1" />
                                        +12.40%
                                    </span>
                                    from last month
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <h5 className="flex items-center mb-0">
                            Invoices
                            <span className="badge bg-gray-100 ms-2 text-dark text-[12px] font-medium">
                                2000 Invoices
                            </span>
                        </h5>
                        <Link
                            to={all_routes.addInvoices}
                            className="btn btn-md btn-primary flex items-center"
                        >
                            <i className="ti ti-circle-plus me-2" />
                            Add Invoices
                        </Link>
                    </div>
                    {/* start table */}
                    <div className="table-responsive">
                        <table className="table table w-full border-b border-borderColor">
                            <thead className="table-light">
                                <tr>
                                    <th>
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </th>
                                    <th />
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Invoice
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Name
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Created On
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Total
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Amount Due
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Due Date
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Status
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-1454</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-01.jpg"
                                                    className="rounded-full w-full h-full object-cover"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link
                                                        to={all_routes.invoice_details}
                                                        className="hover:underline"
                                                    >
                                                        Anthony Lewis
                                                    </Link>
                                                </h6>
                                                <span className="text-[12px] text-gray-500">
                                                    anthony@example.com
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM{" "}
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$300</td>
                                    <td className="px-5 py-2.5 text-gray-500">$0</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                                            Paid
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-6571</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-09.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Brian Villalobos</Link>
                                                </h6>
                                                <span className="text-[12px]">brian@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        21 Jan 2024, 03:19 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$547</td>
                                    <td className="px-5 py-2.5 text-gray-500">$200</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        21 Jan 2024, 03:19 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                                            Overdue
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-2245</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-01.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Harvey Smith</Link>
                                                </h6>
                                                <span className="text-[12px]">harvey@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        20 Feb 2024, 12:15 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$325</td>
                                    <td className="px-5 py-2.5 text-gray-500">$65</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        20 Feb 2024, 12:15 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-primary-100  text-primary rounded border-b border-primary px-2 py-0.5 me-2y">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-1456</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-02.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Stephan Peralt</Link>
                                                </h6>
                                                <span className="text-[12px]">peral@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        15 Mar 2024, 12:11 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$471</td>
                                    <td className="px-5 py-2.5 text-gray-500">$145</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        15 Mar 2024, 12:11 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-primary-100  text-primary rounded border-b border-primary px-2 py-0.5 me-2">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-0045</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-03.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Doglas Martini</Link>
                                                </h6>
                                                <span className="text-[12px]">martniwr@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        12 Apr 2024, 05:48 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$147</td>
                                    <td className="px-5 py-2.5 text-gray-500">$32</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        12 Apr 2024, 05:48 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                                            Overdue
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-6244</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-02.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Linda Ray</Link>
                                                </h6>
                                                <span className="text-[12px]">ray456@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        20 Apr 2024, 06:11 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$654</td>
                                    <td className="px-5 py-2.5 text-gray-500">$140</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        20 Apr 2024, 06:11 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                                            Draft
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-9565</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-06.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Elliot Murray</Link>
                                                </h6>
                                                <span className="text-[12px]">murray@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM{" "}
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$300</td>
                                    <td className="px-5 py-2.5 text-gray-500">$0</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                                            Paid
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-6874</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-07.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Rebecca Smtih</Link>
                                                </h6>
                                                <span className="text-[12px]">smtih@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        02 Sep 2024, 09:21 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$654</td>
                                    <td className="px-5 py-2.5 text-gray-500">$65</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        02 Sep 2024, 09:21 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                                            Paid
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-1454</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-08.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Anthony Lewis</Link>
                                                </h6>
                                                <span className="text-[12px]">anthony@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM{" "}
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$300</td>
                                    <td className="px-5 py-2.5 text-gray-500">$0</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                                            Draft
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-6587</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-09.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Connie Waters</Link>
                                                </h6>
                                                <span className="text-[12px]">connie@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        15 Nov 2024, 12:44 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$987</td>
                                    <td className="px-5 py-2.5 text-gray-500">$47</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        15 Nov 2024, 12:44 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-primary-100  text-primary rounded border-b border-primary px-2 py-0.5 me-2">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="form-check form-check-md px-5 py-2.5">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <Link to={all_routes.invoice_details}>INV-5879</Link>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link to={all_routes.invoice_details} className="w-10 h-10 mr-2">
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-10.jpg"
                                                    className="rounded-full"
                                                    alt="user"
                                                />
                                            </Link>
                                            <div>
                                                <h6 className="font-medium mb-0 text-[14px]">
                                                    <Link to={all_routes.invoice_details}>Lori Broaddus</Link>
                                                </h6>
                                                <span className="text-[12px]">broaddus@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        10 Dec 2024, 11:23 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">$365</td>
                                    <td className="px-5 py-2.5 text-gray-500">$21</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        10 Dec 2024, 11:23 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                                            Overdue
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Link
                                                to={all_routes.invoice_details}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to={all_routes.editInvoices}
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                            >
                                                <i className="ti ti-edit" />
                                            </Link>
                                            <Link
                                                to="#delete_modal"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-target="delete_modal"
                                                data-modal-toggle="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* end table*/}
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default Invoice