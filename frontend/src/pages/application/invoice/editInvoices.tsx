import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import { Customer, Discount, Payment_Method, PaymentStatus, Tax } from "../../../core/json/selectOption"
import CommonSelect from "../../../components/common-select/commonSelect"
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker"


const EditInvoices = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[252px]">
                <div className="content p-5">
                    <h6 className="font-bold mb-4 flex items-center">
                        <Link to={all_routes.invoice}>
                            <i className="ti ti-chevron-left me-1 fs-14" />
                            Invoices
                        </Link>
                    </h6>
                    <div className="card rounded-0 mb-0 bg-white border border-borderColor rounded">
                        <div className="card-header p-4 border-b border-borderColor">
                            <h6 className="fw-bold m-0"> Edit Invoice </h6>
                        </div>{" "}
                        {/* end card-header */}
                        <form >
                            <div className="card-body p-5">
                                {/* start grid */}
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div>
                                            <label className="form-label">
                                                Patient Name <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="search"
                                                className="form-control border-0"
                                                defaultValue="Bernardo James"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div>
                                            <label className="form-label">
                                                Email <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="search"
                                                className="form-control border-0"
                                                defaultValue="bernando@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div>
                                            <label className="form-label">
                                                Customer <span className="text-danger">*</span>
                                            </label>
                                            <CommonSelect
                                                options={Customer}
                                                className="select"
                                                defaultValue={Customer[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div>
                                            <label className="form-label">
                                                Tax <span className="text-danger">*</span>
                                            </label>
                                            <CommonSelect
                                                options={Tax}
                                                className="select"
                                                defaultValue={Tax[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <label className="form-label">
                                            Invoice Date<span className="text-danger ms-1">*</span>
                                        </label>
                                        <div className="w-auto input-group-flat">
                                        <CommonDatePicker placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <label className="form-label">
                                            Due Date<span className="text-danger ms-1">*</span>
                                        </label>
                                        <div className="w-auto input-group-flat">
                                        <CommonDatePicker placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <label className="form-label">
                                            Patient Address<span className="text-danger ms-1">*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            defaultValue={"5754 Airport Rd, Coosada, AL, 36020"}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <label className="form-label">
                                            Billing Address <span className="text-danger ms-1">*</span>
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            defaultValue={"5754 Airport Rd, Coosada, AL, 36020"}
                                        />
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div>
                                            <label className="form-label">
                                                Payment Method <span className="text-danger">*</span>
                                            </label>
                                            <CommonSelect
                                                options={Payment_Method}
                                                className="select"
                                                defaultValue={Payment_Method[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6">
                                        <div>
                                            <label className="form-label">
                                                Payment Status <span className="text-danger">*</span>
                                            </label>
                                            <CommonSelect
                                                options={PaymentStatus}
                                                className="select"
                                                defaultValue={PaymentStatus[1]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                                        <div className="table-responsive">
                                            <table className="table table w-full border-b border-borderColor">
                                                <thead className="bg-white">
                                                    <tr>
                                                        <th className="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                                                            Item
                                                        </th>
                                                        <th className="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                                                            Description
                                                        </th>
                                                        <th className="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                                                            Unit Cost
                                                        </th>
                                                        <th className="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                                                            Qty
                                                        </th>
                                                        <th className="text-[13px] bg-white leading-normal px-5 py-2.5 text-gray-900 border-b border-borderColor font-medium text-start">
                                                            Amount
                                                        </th>
                                                        <th />
                                                    </tr>
                                                </thead>
                                                <tbody className="invoices-list bg-white">
                                                    <tr className="invoices-list-item">
                                                        <td className="px-3 py-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Full Body Checkup"
                                                            />
                                                        </td>
                                                        <td className="px-3 py-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="Complete health screening covering all major systems"
                                                            />
                                                        </td>
                                                        <td className="px-3 py-4">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                defaultValue={155}
                                                            />
                                                        </td>
                                                        <td className="px-3 py-4">
                                                            <input
                                                                type="number"
                                                                className="form-control"
                                                                defaultValue={1}
                                                            />
                                                        </td>
                                                        <td className="px-3 py-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                defaultValue="$150"
                                                            />
                                                        </td>
                                                        <td className="px-2 py-4">
                                                            <button className="btn remove-invoices btn-sm border border-borderColor py-2.5 px-3 flex items-center justify-center rounded text-[14px]">
                                                                <i className="ti ti-trash" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-5 px-3">
                                                            <Link
                                                                to="#"
                                                                className="font-medium add-invoices text-dark flex items-center text-[14px] pl-0"
                                                            >
                                                                <i className="ti ti-circle-plus text-primary me-1" />{" "}
                                                                Add Invoice
                                                            </Link>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-8" />
                                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4">
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h6 className="text-[14px] font-normal text-dark">
                                                    Amount
                                                </h6>
                                                <h6 className="text-[14px] font-semibold text-dark">$0</h6>
                                            </div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h6 className="text-[14px] font-normal text-dark">
                                                    Tax (0%)
                                                </h6>
                                                <h6 className="text-[14px] font-semibold text-dark">$0</h6>
                                            </div>
                                            <div className="flex items-center justify-between mb-4">
                                                <h6 className="text-[14px] font-normal text-dark">
                                                    Discount
                                                </h6>
                                                <div>
                                                <CommonSelect
                                                options={Discount}
                                                className="select"
                                                defaultValue={Discount[1]}
                                            />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between mb-4 pb-4 border-b border-borderColor">
                                                <div>
                                                    <label className="flex gap-2 items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            defaultValue=""
                                                            className="sr-only peer"
                                                        />
                                                        <span className="relative w-8 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] peer-checked:after:start-[-2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary" />
                                                        <span className="text-[14px] font-normal text-dark">
                                                            Round Off Total
                                                        </span>
                                                    </label>
                                                </div>
                                                <h6 className="text-[14px] font-semibold text-dark">$0</h6>
                                            </div>
                                            <div className="flex items-center justify-between mb-2">
                                                <h6 className="text-[18px] font-bold">Total (USD)</h6>
                                                <h6 className="text-[18px] font-bold">$0</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
                                        <div>
                                            <label className="form-label">
                                                Other Information<span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>{" "}
                            {/* end card-body */}
                            <div className="card-footer p-5 text-end border-t border-borderColor">
                                <div className="flex gap-2 items-center justify-end mb-0">
                                    <button type="button" className="btn btn-light">
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save changes
                                    </button>
                                </div>
                            </div>{" "}
                            {/* end card footer */}
                        </form>
                    </div>{" "}
                    {/* end card */}
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default EditInvoices