import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import Datatable from "../../../components/data-table";
import { DataTablesData } from "../../../core/json/dataTablesData";


const DataTables = () => {
    const data = DataTablesData;
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            sorter: (a: any, b: any) => a.Name.length - b.Name.length,
        },
        {
            title: "Position",
            dataIndex: "Position",
            sorter: (a: any, b: any) => a.Position.length - b.Position.length,
        },
        {
            title: "Office",
            dataIndex: "Office",
            sorter: (a: any, b: any) => a.Office.length - b.Office.length,
        },
        {
            title: "Age",
            dataIndex: "Age",
            sorter: (a: any, b: any) => a.Age.length - b.Age.length,
        },
        {
            title: "Start date",
            dataIndex: "Start_date",
            sorter: (a: any, b: any) => a.Start_date.length - b.Start_date.length,
        },
        {
            title: "Salary",
            dataIndex: "Salary",
            sorter: (a: any, b: any) => a.Salary.length - b.Salary.length,
        },
    ];


    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Data Tables
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
                                        Tables
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li className="text-dark font-medium" aria-current="page">
                                    Data Tables
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    {/* start row */}
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card bg-white border-borderColor mb-5 rounded">
                                <div className="card-header border-b border-borderColor p-4">
                                    <h4 className="card-title">Default Datatable</h4>
                                    <p className="card-text">
                                        This is the most basic example of the datatables with zero
                                        configuration. Use the
                                        <code>.datatable</code> class to initialize datatables.
                                    </p>
                                </div>
                                {/* end card header */}
                                <div className="card-body p-4">
                                    <div className="table-search d-flex align-items-center">
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
                                    </div>

                                    <div className="table-responsive">
                                        <Datatable
                                            columns={columns}
                                            dataSource={data}
                                            Selection={false}
                                            searchText=""
                                        />
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center justify-between">
                                        <div className="w-full md:w-1/2">
                                            <div className="datatable-length" />
                                        </div>
                                        <div className="w-full md:w-1/2 mt-4 md:mt-0 text-end">
                                            <div className="datatable-paginate" />
                                        </div>
                                    </div>
                                </div>
                                {/* end card body */}
                            </div>
                            {/* end card */}
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default DataTables