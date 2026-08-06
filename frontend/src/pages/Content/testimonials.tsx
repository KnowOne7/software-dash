import { Link } from "react-router";
import CommonFooter from "../../components/common-footer/commonFooter";
import { all_routes } from "../../routes/all_routes";
import HeaderActions from "../../components/header-actions/headerActions";
import ImageWithBasePath from "../../components/image-with-base-path";
import { useState } from "react";
import { testimonialsListData } from "../../core/json/testimonialsListData";
import SearchInput from "../../components/data-table/dataTableSearch";
import Datatable from "../../components/data-table";
import { getActionsForPage } from "../../config/actionConfigs";
import { useActionColumn } from "../../components/data-table/withActions";
import CommonSelect from "../../components/common-select/commonSelect";
import { Ratings } from "../../core/json/selectOption";

const Testimonials = () => {
  const [filledStars, setFilledStars] = useState<{ [key: string]: boolean }>(
    {}
  );
  const handleClick = (key: string) => {
    setFilledStars((prev) => ({
      ...prev,
      [key]: !prev[key], // toggle on/off
    }));
  };
  const [searchText, setSearchText] = useState<string>("");
  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const data = testimonialsListData;
  // Get actions for payments page
  const testimonialsTagsActions = getActionsForPage("testimonialsTags");
  const actionColumn = useActionColumn(testimonialsTagsActions);
  const columns = [
    {
      title: "",
      dataIndex: "Name",
      render: (_: any, record: any) => (
        <div
          className={`set-star rating-select ${
            filledStars[record.key] ? "filled" : ""
          }`}
          onClick={() => handleClick(record.key)}
        >
          <i className="ti ti-star-filled fs-16" />
        </div>
      ),
      sorter: (a: any, b: any) => a.Name.length - b.Name.length,
    },
    {
      title: "Estimation By",
      dataIndex: "EstimationBy",
      render: (text: any, render: any) => (
        <h6 className="flex items-center text-[14px] font-medium mb-0">
          <Link to="#" className="w-10 h-10 me-2 hover:text-primary">
            <ImageWithBasePath
              src={`assets/img/profiles/${render.Image}`}
              alt="User Image"
              className="rounded-full"
            />
          </Link>
          <Link to="#" className="flex flex-col hover:text-primary">
            {text}
            <span className="text-default font-normal text-[13px] inline-block mt-1">
              {render.Role}{" "}
            </span>
          </Link>
        </h6>
      ),
      sorter: (a: any, b: any) => a.EstimationBy.length - b.EstimationBy.length,
    },
    {
      title: "Rating",
      dataIndex: "Rating",
      render: () => (
        <div className="set-star rating-select filled">
          <i className="ti ti-star-filled fs-16 me-1" />
          <i className="ti ti-star-filled fs-16 me-1" />
          <i className="ti ti-star-filled fs-16 me-1" />
          <i className="ti ti-star-filled fs-16 me-1" />
          <i className="ti ti-star-filled fs-16 me-1" />
        </div>
      ),
      sorter: (a: any, b: any) => a.Rating.length - b.Rating.length,
    },
    {
      title: "Content",
      dataIndex: "Content",
      sorter: (a: any, b: any) => a.Content.length - b.Content.length,
    },
    {
      title: "Created Date",
      dataIndex: "CreatedDate",
      sorter: (a: any, b: any) => a.CreatedDate.length - b.CreatedDate.length,
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
          Active
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
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
                Testimonials
                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                  125
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
                    Testimonials
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
                Add Testimonials
              </Link>
            </div>
            <div className="bg-white p-4">
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
        {/* Add Testimonial */}
        <div
          id="add_modal"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Add Testimonial</h5>
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
                      <div className="flex items-center mb-3">
                        <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <i className="ti ti-photo text-dark fs-16" />
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                            <i className="ti ti-file-broken me-1" />
                            Upload file
                            <input
                              type="file"
                              className="opacity-0 absolute start-0 top-0"
                              multiple
                            />
                          </div>
                          <span>JPG, GIF or PNG. Max size of 800K</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        User Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Designation <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Ratings <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        options={Ratings}
                        className="select"
                        defaultValue={Ratings[0]}
                      />
                    </div>
                    <div className="md:col-span-6">
                      <div>
                        <label className="form-label">
                          Status <span className="text-danger">*</span>
                        </label>
                        <div className="flex items-center gap-4">
                          <div className="form-check">
                            <input
                              className="text-primary border-borderColor"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="text-primary border-borderColor"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
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
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* /Add Testimonial */}
        {/* Edit Testimonial */}
        <div
          id="edit_modal"
          className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
        >
          <div className="relative p-4 w-full max-w-[500px] max-h-full">
            <div className="relative bg-white rounded-defaultradius">
              <div className="flex items-center justify-between p-4 border-b border-borderColor">
                <h5 className="font-bold text-[18px]">Edit Testimonial</h5>
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
                      <div className="flex items-center mb-3">
                        <div className="w-[80px] h-[80px] border-borderColor border border-dashed me-3 flex-shrink-0 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <i className="ti ti-photo text-dark fs-16" />
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-start">
                          <div className="drag-upload-btn btn btn-sm bg-primary text-white relative mb-2">
                            <i className="ti ti-file-broken me-1" />
                            Upload file
                            <input
                              type="file"
                              className="opacity-0 absolute start-0 top-0"
                              multiple
                            />
                          </div>
                          <span>JPG, GIF or PNG. Max size of 800K</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        User Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Darlee Robertson"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Designation <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Facility Manager"
                      />
                    </div>
                    <div className="md:col-span-12">
                      <label className="form-label">
                        Ratings <span className="text-danger">*</span>
                      </label>
                      <CommonSelect
                        options={Ratings}
                        className="select"
                        defaultValue={Ratings[1]}
                      />
                    </div>
                    <div className="md:col-span-6">
                      <div>
                        <label className="form-label">
                          Status <span className="text-danger">*</span>
                        </label>
                        <div className="flex items-center gap-4">
                          <div className="form-check">
                            <input
                              className="text-primary border-borderColor"
                              type="radio"
                              name="flexRadioDefault2"
                              id="flexRadioDefault3"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault3"
                            >
                              Active
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="text-primary border-borderColor"
                              type="radio"
                              name="flexRadioDefault2"
                              id="flexRadioDefault4"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault4"
                            >
                              Inactive
                            </label>
                          </div>
                        </div>
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
        {/* /Edit Testimonial */}
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
                  Are you sure you want to remove testimonial you selected.
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
                    to={all_routes.testimonials}
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

export default Testimonials;
