import { Link } from "react-router";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import HeaderActions from "../../components/header-actions/headerActions";
import { PermissionListData } from "../../core/json/permissionListData";
import Datatable from "../../components/data-table";

const Permission = () => {
  const data = PermissionListData;
  const columns = [
    {
      title: "Modules",
      dataIndex: "Modules",
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "sub Modules",
      dataIndex: "sub_Modules",

      sorter: (a: any, b: any) => a.sub_Modules.length - b.sub_Modules.length,
    },
    {
      title: "Create",
      dataIndex: "Create",
      render: () => (
        <input className="form-check-input" type="checkbox"></input>
      ),
      sorter: (a: any, b: any) => a.Email.length - b.Email.length,
    },
    {
      title: "Edit",
      dataIndex: "Edit",
      render: () => (
        <input className="form-check-input" type="checkbox"></input>
      ),
      sorter: (a: any, b: any) => a.Edit.length - b.Edit.length,
    },
    {
      title: "View",
      dataIndex: "View",
      render: () => (
        <input className="form-check-input" type="checkbox"></input>
      ),
      sorter: (a: any, b: any) => a.View.length - b.View.length,
    },
    {
      title: "Delete",
      dataIndex: "Delete",
      render: () => (
        <input className="form-check-input" type="checkbox"></input>
      ),
      sorter: (a: any, b: any) => a.Delete.length - b.Delete.length,
    },
    {
      title: "Allow All",
      dataIndex: "Allow_All",
      render: () => (
        <input className="form-check-input" type="checkbox"></input>
      ),
      sorter: (a: any, b: any) => a.Allow_All.length - b.Allow_All.length,
    },
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
                Permission
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  152
                </span>
              </h4>
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                  <li>
                    <Link
                      to={all_routes.dealsDashboard}
                      className="hover:underline text-gray-700"
                    >
                      Home
                    </Link>
                    <span>
                      <i className="ti ti-chevron-right" />
                    </span>
                  </li>
                  <li className="text-dark font-medium" aria-current="page">
                    Permission
                  </li>
                </ol>
              </nav>
            </div>
            <HeaderActions />
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">
              <h6>
                Role Name : <span className="text-danger">Admin</span>
              </h6>
              <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                  id="select-all2"
                />
                Allow All Modules
              </label>
            </div>
            <div className="bg-white p-4 pt-0">
              {/* Contact List */}
              <div className="table-responsive custom-table">
                <Datatable
                  columns={columns}
                  dataSource={data}
                  Selection={true}
                  searchText=""
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
    </>
  );
};

export default Permission;
