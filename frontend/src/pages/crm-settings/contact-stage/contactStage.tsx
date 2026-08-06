import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import HeaderActions from "../../../components/header-actions/headerActions"
import { ContactStageListData } from "../../../core/json/contactStageListData"
import { useState } from "react"
import { getActionsForPage } from "../../../config/actionConfigs"
import { useActionColumn } from "../../../components/data-table/withActions"
import SearchInput from "../../../components/data-table/dataTableSearch"
import Datatable from "../../../components/data-table"
import ContactStageModal from "./modal/contactStageModal"


const ContactStage = () => {
      const data = ContactStageListData;
        // Get actions for payments page
          const contactStageActions = getActionsForPage('contactStage');
          const actionColumn = useActionColumn(contactStageActions);
  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
      sorter: (a: any, b: any) => a.Title.length - b.Title.length,
    },
    {
      title: "Created at",
      dataIndex: "Createdat",

      sorter: (a: any, b: any) => a.Createdat.length - b.Createdat.length,
    },

    {
      title: "Status",
      dataIndex: "Status",
      render: (text: any) => (
        <span
          className={`badge badge-pill badge-status ${
            text === "Active" ? "bg-success" : "bg-danger"
          } `}
        >
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.Status.length - b.Status.length,
    },
   actionColumn
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
            Contact Stages
            <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
              125
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
                Contact Stages
              </li>
            </ol>
          </nav>
        </div>
       <HeaderActions/>
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
            Add New Stage
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
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
  <ContactStageModal/>
</>

  )
}

export default ContactStage