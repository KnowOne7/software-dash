import { Link } from "react-router";
import CommonFooter from "../../components/common-footer/commonFooter";
import HeaderActions from "../../components/header-actions/headerActions";
import { all_routes } from "../../routes/all_routes";
import { RolesPermissionsListData } from "../../core/json/rolesPermissionsListData";
import SearchInput from "../../components/data-table/dataTableSearch";
import Datatable from "../../components/data-table";
import { useState } from "react";
import { getActionsForPage } from "../../config/actionConfigs";
import { useActionColumn } from "../../components/data-table/withActions";

const RolesPermissions = () => {
  const data = RolesPermissionsListData;

  // Get actions for payments page
  const roleActions = getActionsForPage("role");
  const actionColumn = useActionColumn(roleActions);

  const columns = [
    {
      title: "Role Name",
      dataIndex: "RoleName",
      sorter: (a: any, b: any) => a.RoleName.length - b.RoleName.length,
    },
    {
      title: "Created",
      dataIndex: "Created",

      sorter: (a: any, b: any) => a.Created.length - b.Created.length,
    },
    actionColumn,
  ];

  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5">
          {/* Page Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
            <div>
              <h4 className="mb-1 text-xl font-bold flex items-center">
                Roles &amp; Permissions
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
                    Roles &amp; Permissions
                  </li>
                </ol>
              </nav>
            </div>
            <HeaderActions />
          </div>
          {/* End Page Header */}
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">
              <div className="relative">
                <SearchInput value={searchText} onChange={handleSearch} />
              </div>
              {/* Add New Button */}
              <Link
                to="#"
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                data-modal-target="add_role"
                data-modal-toggle="add_role"
              >
                <i className="ti ti-square-rounded-plus-filled" />
                Add New Role
              </Link>
            </div>
            <div className="bg-white p-4 pt-0">
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
      <>
        {/* add modal */}
        <div
          id="add_role"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Add Role</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="add_role"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Role Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="add_role"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Create New
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* add modal */}
        {/* edit modal */}
        <div
          id="edit_role"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[10000] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Edit Role</h5>
                <button
                  type="button"
                  className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
                  data-modal-hide="edit_role"
                >
                  <i className="ti ti-x" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form>
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-6">
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Role Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Admin"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-borderColor">
                  <button
                    data-modal-hide="edit_role"
                    type="button"
                    className="btn bg-light border border-light text-gray-900 text-center hover:bg-light-900 hover:text-gray-900 font-medium me-2"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn bg-primary border border-primary text-white text-center hover:bg-primary-900 hover:text-white font-medium"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* edit modal */}
      </>
    </>
  );
};

export default RolesPermissions;
