import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import HeaderActions from "../../../components/header-actions/headerActions";
import PredefinedDatePicker from "../../../components/common-date-range-picker/PredefinedDatePicker";
import { useState } from "react";
import { BlogCategoriesListData } from "../../../core/json/blogCategoriesListData";
import SearchInput from "../../../components/data-table/dataTableSearch";
import Datatable from "../../../components/data-table";
import { getActionsForPage } from "../../../config/actionConfigs";
import { useActionColumn } from "../../../components/data-table/withActions";
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker";

const BlogCategories = () => {
  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const data = BlogCategoriesListData;
    // Get actions for payments page
    const blogcateogoriesActions = getActionsForPage("blogcateogories");
    const actionColumn = useActionColumn(blogcateogoriesActions);
  const columns = [
    {
      title: "Category Name",
      dataIndex: "Category_Name",
      sorter: (a: any, b: any) =>
        a.Category_Name.length - b.Category_Name.length,
    },
    {
      title: "Created Date",
      dataIndex: "Created_Date",
      sorter: (a: any, b: any) => a.Created_Date.length - b.Created_Date.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge badge-pill badge-status ${
            text === "Active" ? "bg-success" : "bg-danger"
          }`}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
 actionColumn
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
                Blog Categories
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
                  <li>
                    <Link to="#" className="hover:underline text-gray-700">
                      Blogs
                    </Link>
                    <span>
                      <i className="ti ti-chevron-right" />
                    </span>
                  </li>
                  <li className="text-dark font-medium" aria-current="page">
                    Blog Categories
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
                data-modal-target="add_modal"
                data-modal-toggle="add_modal"
              >
                <i className="ti ti-square-rounded-plus-filled" />
                Add Blog Category
              </Link>
            </div>
            <div className="bg-white p-4">
              <div className="flex items-center justify-between flex-wrap gap-y-3 mb-3">
                <div className="flex items-center flex-wrap gap-y-3">
                  {/* Search Input with Icon */}
                  <div className="relative">
                    <PredefinedDatePicker />
                  </div>
                </div>
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
      <>
  {/* Add Blog Category */}
  <div
    id="add_modal"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div className="relative p-4 w-full max-w-[500px] max-h-full">
      <div className="relative bg-white rounded-defaultradius">
        <div className="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 className="font-bold text-[18px]">Add Blog Category</h5>
          <button
            type="button"
            className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="add_modal"
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
                  Category <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="md:col-span-12">
                <label className="form-label">
                  Created Date <span className="text-danger">*</span>
                </label>
                <div className="input-group w-auto input-group-flat">
                  <CommonDatePicker placeholder="dd/mm/yyyy" />

                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 border-t border-borderColor">
            <button
              data-modal-hide="add_modal"
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
  {/* /Add Blog Category */}
  {/* Edit Blog Category */}
  <div
    id="edit_modal"
    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
  >
    <div className="relative p-4 w-full max-w-[500px] max-h-full">
      <div className="relative bg-white rounded-defaultradius">
        <div className="flex items-center justify-between p-4 border-b border-borderColor">
          <h5 className="font-bold text-[18px]">Edit Blog Category</h5>
          <button
            type="button"
            className="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full absolute top-3 end-3 flex items-center justify-center"
            data-modal-hide="edit_modal"
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
                  Category <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Sales Optimization"
                />
              </div>
              <div className="md:col-span-12">
                <label className="form-label">
                  Created Date <span className="text-danger">*</span>
                </label>
                <div className="input-group w-auto input-group-flat">
                  <CommonDatePicker placeholder="dd/mm/yyyy" />

                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end p-4 border-t border-borderColor">
            <button
              data-modal-hide="edit_modal"
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
  {/* /Edit Blog Category */}
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
            Are you sure you want to remove blog category you selected.
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
              to={all_routes.blogCategories}
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

    </>
  );
};

export default BlogCategories;
