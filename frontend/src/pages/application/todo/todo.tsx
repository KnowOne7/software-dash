import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"
import TodoModal from "./modal/todoModal"
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker"


const Todo = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-5">
                    {/* Page Header */}
                    <BreadcrumbHeader
                        title="Todo"
                        items={[
                            { label: "Home", href: all_routes.dealsDashboard },
                            { label: "Applications", href: "#" },
                            { label: "Todo" }, // last item has no link
                        ]}
                    />
                    {/* End Page Header */}
                    <div className="flex items-center justify-between mb-5">
                        <button
                            className="btn bg-primary border-primary text-white text-start"
                            data-modal-toggle="add_new_todo"
                            data-modal-target="add_new_todo"
                        >
                            <i className="ti ti-circle-plus me-1" />
                            Create New
                        </button>
                        <div className="flex items-center rounded gap-2 icon-list">
                            <Link
                                to={all_routes.todo}
                                className="w-7 h-7 flex items-center justify-center rounded bg-primary text-white border border-borderColor me-1"
                            >
                                <i className="ti ti-layout-grid" />
                            </Link>
                            <Link
                                to={all_routes.todoList}
                                className="w-7 h-7 flex items-center justify-center rounded border border-borderColor text-dark"
                            >
                                <i className="ti ti-list-tree" />
                            </Link>
                        </div>
                    </div>
                    <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white">
                        <div className="p-4">
                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 gy-3 gap-2 mb-4">
                                <div className="sm:col-span-4">
                                    <div className="flex items-center">
                                        <h6>Total Todo</h6>
                                    </div>
                                </div>
                                <div className="sm:col-span-8">
                                    <div className="flex items-center justify-end">
                                        <p className="mb-0 me-3 pe-3 border-r text-14">
                                            Total Task : <span className="text-dark"> 55 </span>
                                        </p>
                                        <p className="mb-0 me-3 pe-3 border-r text-14">
                                            Pending : <span className="text-dark"> 15 </span>
                                        </p>
                                        <p className="mb-0 text-14">
                                            Completed : <span className="text-dark"> 40 </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between flex-wrap gap-y-3 mb-4 pb-4 border-borderColor border-b">
                                <div className="me-2">
                                    <div className="relative">
                                    <CommonDatePicker placeholder="DD/MM/YYYY" />

                                    </div>
                                </div>
                                <div className="flex items-center justify-between flex-wrap gap-y-3">
                                    <div className="me-2">
                                        <Link
                                            to="#"
                                            className="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                            data-dropdown-toggle="todo-dropdown"
                                        >
                                            All Tags
                                            <i className="ti ti-chevron-down ml-1" />
                                        </Link>
                                        <ul
                                            id="todo-dropdown"
                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    All Tags
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Internal
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Projects
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Meetings
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Reminder
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Research
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <Link
                                            to="#"
                                            className="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                            data-dropdown-toggle="todo-dropdownone"
                                        >
                                            <span className="text-gray-500 mr-1 focus:text-white">
                                                Sort By :{" "}
                                            </span>{" "}
                                            Recent <i className="ti ti-chevron-down ml-1" />
                                        </Link>
                                        <ul
                                            id="todo-dropdownone"
                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Recently Adding
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Ascending
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Desending
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Last Month
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                                >
                                                    Last 7 days
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="accordion accordions-items-seperate"
                                id="accordionExample"
                                data-accordion="collapse"
                            >
                                <div className="accordion-item mb-3">
                                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center mb-3 gap-y-3">
                                        <div className="lg:col-span-4 sm:col-span-6">
                                            <div className="accordion-header" id="headingTwo">
                                                <div className="accordion-button">
                                                    <div className="flex items-center w-full">
                                                        <div className="me-2">
                                                            <Link
                                                                to="#"
                                                                className="collapsearrow bg-transparent"
                                                                data-accordion-toggle="todoBorderOne"
                                                                data-accordion-target="#todoBorderOne"
                                                                aria-expanded="true"
                                                                aria-controls="todoBorderOne"
                                                            >
                                                                <span>
                                                                    <i className="fas fa-chevron-down arrow-rotate" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span>
                                                                <i className="ti ti-square-rounded text-purple me-2" />
                                                            </span>
                                                            <h5 className="fw-semibold">High</h5>
                                                            <span className="badge bg-light rounded-pill text-dark ms-2">
                                                                15
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-8 sm:col-span-6">
                                            <div className="flex items-center justify-end">
                                                <Link
                                                    to="#"
                                                    className="btn btn-light me-2"
                                                    data-modal-toggle="add_new_todo"
                                                    data-modal-target="add_new_todo"
                                                >
                                                    <i className="ti ti-circle-plus me-2" />
                                                    Add New
                                                </Link>
                                                <Link to="#" className="btn btn-outline-light border">
                                                    See All <i className="ti ti-arrow-right ms-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="todoBorderOne"
                                        className="hidden text-dark"
                                        aria-labelledby="headingTwo"
                                    >
                                        <div className="accordion-body">
                                            <div className="list-group rounded-none border-b pb-2">
                                                <div className="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                                                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                                                        <div className="lg:col-span-6 md:col-span-7">
                                                            <div className="todo-inbox-check flex items-center flex-wrap">
                                                                <span className="me-2 flex items-center">
                                                                    <i className="ti ti-grid-dots text-dark" />
                                                                </span>
                                                                <div className="form-check form-check-md me-2">
                                                                    <input
                                                                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                                        type="checkbox"
                                                                    />
                                                                </div>
                                                                <span className="me-2 flex items-center rating-select">
                                                                    <i className="ti ti-star-filled filled" />
                                                                </span>
                                                                <div className="strike-info">
                                                                    <h4 className="text-[14px] truncate">
                                                                        Finalize project proposal
                                                                    </h4>
                                                                </div>
                                                                <span className="bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2">
                                                                    <i className="ti ti-calendar me-1" />
                                                                    15 Jan 2025
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="lg:col-span-6 md:col-span-5">
                                                            <div className="flex items-center justify-end flex-wrap gap-y-3">
                                                                <span className="py-1 px-2 rounded text-xs leading-none font-semibold bg-success text-white me-1">
                                                                    Projects
                                                                </span>
                                                                <span className="bg-danger-100 text-pink rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                                    <i className="fas fa-circle text-[6px] me-1" />
                                                                    Onhold
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <div className="flex -space-x-2">
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-13.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-14.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-15.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to="#"
                                                                            className="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                                                            data-dropdown-toggle="office-dropdown13"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul
                                                                            id="office-dropdown13"
                                                                            className="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="edit_todo"
                                                                                    data-modal-target="edit_todo"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="delete_modal"
                                                                                    data-modal-target="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-2" />
                                                                                    Delete{" "}
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                >
                                                                                    <i className="ti ti-eye me-2" />
                                                                                    View{" "}
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                                                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                                                        <div className="lg:col-span-6 md:col-span-7">
                                                            <div className="todo-inbox-check flex items-center flex-wrap">
                                                                <span className="me-2 flex items-center">
                                                                    <i className="ti ti-grid-dots text-dark" />
                                                                </span>
                                                                <div className="form-check form-check-md me-2">
                                                                    <input
                                                                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                                        type="checkbox"
                                                                    />
                                                                </div>
                                                                <span className="me-2 rating-select d-flex items-center">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <div className="strike-info">
                                                                    <h4 className="text-[14px] truncate">
                                                                        Submit to supervisor by EOD
                                                                    </h4>
                                                                </div>
                                                                <span className="bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2">
                                                                    <i className="ti ti-calendar me-1" />
                                                                    25 May 2024
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="lg:col-span-6 md:col-span-5">
                                                            <div className="flex items-center justify-end flex-wrap gap-y-3">
                                                                <span className="py-1 px-2 rounded text-xs leading-none font-semibold bg-danger text-white me-1">
                                                                    Internal
                                                                </span>
                                                                <span className="bg-secondary-100 text-purple rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                                    <i className="fas fa-circle text-[6px] me-1" />
                                                                    Inprogress
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <div className="flex -space-x-2">
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-20.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-21.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-22.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to="#"
                                                                            className="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                                                            data-dropdown-toggle="office-dropdown2"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul
                                                                            id="office-dropdown2"
                                                                            className="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="edit_todo"
                                                                                    data-modal-target="edit_todo"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="delete_modal"
                                                                                    data-modal-target="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-2" />
                                                                                    Delete{" "}
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                >
                                                                                    <i className="ti ti-eye me-2" />
                                                                                    View{" "}
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                                                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                                                        <div className="lg:col-span-6 md:col-span-7">
                                                            <div className="todo-inbox-check flex items-center flex-wrap todo-strike-content">
                                                                <span className="me-2 flex items-center">
                                                                    <i className="ti ti-grid-dots text-dark" />
                                                                </span>
                                                                <div className="form-check form-check-md me-2">
                                                                    <input
                                                                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                                        type="checkbox"
                                                                        defaultChecked
                                                                    />
                                                                </div>
                                                                <span className="me-2 rating-select flex items-center">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <div className="strike-info">
                                                                    <h4 className="text-[14px] truncate">
                                                                        Prepare presentation slides
                                                                    </h4>
                                                                </div>
                                                                <span className="bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2">
                                                                    <i className="ti ti-calendar me-1" />
                                                                    15 Jan 2025
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="lg:col-span-6 md:col-span-5">
                                                            <div className="flex items-center justify-end flex-wrap gap-y-3">
                                                                <span className="py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white me-1">
                                                                    Reminder
                                                                </span>
                                                                <span className="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                                    <i className="fas fa-circle text-[6px] me-1" />
                                                                    Pending
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <div className="flex -space-x-2">
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-23.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-24.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-25.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to="#"
                                                                            className="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                                                            data-dropdown-toggle="office-dropdown3"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul
                                                                            id="office-dropdown3"
                                                                            className="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="edit_todo"
                                                                                    data-modal-target="edit_todo"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="delete_modal"
                                                                                    data-modal-target="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-2" />
                                                                                    Delete{" "}
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                >
                                                                                    <i className="ti ti-eye me-2" />
                                                                                    View{" "}
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center mb-3 gap-y-3">
                                        <div className="lg:col-span-4 sm:col-span-6">
                                            <div className="accordion-header" id="headingThree">
                                                <div className="accordion-button">
                                                    <div className="flex items-center w-full">
                                                        <div className="me-2">
                                                            <Link
                                                                to="#"
                                                                className="collapsearrow bg-transparent"
                                                                data-accordion-toggle="todoBorderTwo"
                                                                data-accordion-target="#todoBorderTwo"
                                                                aria-expanded="true"
                                                                aria-controls="todoBorderTwo"
                                                            >
                                                                <span>
                                                                    <i className="fas fa-chevron-down arrow-rotate" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span>
                                                                <i className="ti ti-square-rounded text-warning me-2" />
                                                            </span>
                                                            <h5 className="fw-semibold">Medium</h5>
                                                            <span className="badge bg-light rounded-pill text-dark ms-2">
                                                                05
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-8 sm:col-span-6">
                                            <div className="flex items-center justify-end">
                                                <Link
                                                    to="#"
                                                    className="btn btn-light me-2"
                                                    data-modal-toggle="add_new_todo"
                                                    data-modal-target="add_new_todo"
                                                >
                                                    <i className="ti ti-circle-plus me-2" />
                                                    Add New
                                                </Link>
                                                <Link to="#" className="btn btn-outline-light border">
                                                    See All <i className="ti ti-arrow-right ms-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="todoBorderTwo"
                                        className="hidden text-dark"
                                        aria-labelledby="headingThree"
                                    >
                                        <div className="accordion-body">
                                            <div className="list-group rounded-none border-b pb-2">
                                                <div className="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                                                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                                                        <div className="lg:col-span-6 md:col-span-7">
                                                            <div className="todo-inbox-check flex items-center flex-wrap">
                                                                <span className="me-2 flex items-center">
                                                                    <i className="ti ti-grid-dots text-dark" />
                                                                </span>
                                                                <div className="form-check form-check-md me-2">
                                                                    <input
                                                                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                                        type="checkbox"
                                                                    />
                                                                </div>
                                                                <span className="me-2 rating-select flex items-center">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <div className="strike-info">
                                                                    <h4 className="text-[14px] truncate">
                                                                        Check and respond to emails
                                                                    </h4>
                                                                </div>
                                                                <span className="badge bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2">
                                                                    <i className="ti ti-calendar me-1" />
                                                                    Tomorrow
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="lg:col-span-6 md:col-span-5">
                                                            <div className="flex items-center justify-end flex-wrap gap-y-3">
                                                                <div className="py-1 px-2 rounded text-xs leading-none font-semibold bg-secondary text-white me-1">
                                                                    Reminder
                                                                </div>
                                                                <span className="bg-success-100 text-success rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                                    <i className="fas fa-circle text-[6px] me-1" />
                                                                    Completed
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <div className="flex -space-x-2">
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-12.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-14.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-24.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to="#"
                                                                            className="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                                                            data-dropdown-toggle="office-dropdown4"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul
                                                                            id="office-dropdown4"
                                                                            className="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="edit_todo"
                                                                                    data-modal-target="edit_todo"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="delete_modal"
                                                                                    data-modal-target="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-2" />
                                                                                    Delete{" "}
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                >
                                                                                    <i className="ti ti-eye me-2" />
                                                                                    View{" "}
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                                                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                                                        <div className="lg:col-span-6 md:col-span-7">
                                                            <div className="todo-inbox-check flex items-center flex-wrap">
                                                                <span className="me-2 flex items-center">
                                                                    <i className="ti ti-grid-dots text-dark" />
                                                                </span>
                                                                <div className="form-check form-check-md me-2">
                                                                    <input
                                                                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                                        type="checkbox"
                                                                    />
                                                                </div>
                                                                <span className="me-2 rating-select flex items-center">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <div className="strike-info">
                                                                    <h4 className="text-[14px] truncate">
                                                                        Coordinate with department head on progress
                                                                    </h4>
                                                                </div>
                                                                <span className="badge bg-dark-transparent text-dark rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs ms-2">
                                                                    <i className="ti ti-calendar me-1" />
                                                                    25 May 2024
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="lg:col-span-6 md:col-span-5">
                                                            <div className="flex items-center justify-end flex-wrap gap-y-3">
                                                                <span className="py-1 px-2 rounded text-xs leading-none font-semibold bg-danger text-white me-1">
                                                                    Internal
                                                                </span>
                                                                <span className="bg-secondary-100 text-secondary rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                                    <i className="fas fa-circle text-[6px] me-1" />
                                                                    Inprogress
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <div className="flex -space-x-2">
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-09.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-14.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to="#"
                                                                            className="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                                                            data-dropdown-toggle="office-dropdown5"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul
                                                                            id="office-dropdown5"
                                                                            className="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="edit_todo"
                                                                                    data-modal-target="edit_todo"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="delete_modal"
                                                                                    data-modal-target="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-2" />
                                                                                    Delete{" "}
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                >
                                                                                    <i className="ti ti-eye me-2" />
                                                                                    View{" "}
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-3">
                                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-center mb-3 gap-y-3">
                                        <div className="lg:col-span-4 sm:col-span-6">
                                            <div className="accordion-header" id="headingFour">
                                                <div className="accordion-button">
                                                    <div className="flex items-center w-full">
                                                        <div className="me-2">
                                                            <Link
                                                                to="#"
                                                                className="collapsearrow bg-transparent"
                                                                data-accordion-toggle="todoBorderThree"
                                                                data-accordion-target="#todoBorderThree"
                                                                aria-expanded="true"
                                                                aria-controls="todoBorderThree"
                                                            >
                                                                <span>
                                                                    <i className="fas fa-chevron-down arrow-rotate" />
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <span>
                                                                <i className="ti ti-square-rounded text-success me-2" />
                                                            </span>
                                                            <h5 className="fw-semibold">Low</h5>
                                                            <span className="badge bg-light rounded-pill text-dark ms-2">
                                                                24
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-8 sm:col-span-6">
                                            <div className="flex items-center justify-end">
                                                <Link
                                                    to="#"
                                                    className="btn btn-light me-2"
                                                    data-modal-toggle="add_new_todo"
                                                    data-modal-target="add_new_todo"
                                                >
                                                    <i className="ti ti-circle-plus me-2" />
                                                    Add New
                                                </Link>
                                                <Link to="#" className="btn btn-outline-light border">
                                                    See All <i className="ti ti-arrow-right ms-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="todoBorderThree"
                                        className="hidden text-dark"
                                        aria-labelledby="headingFour"
                                    >
                                        <div className="accordion-body">
                                            <div className="list-group rounded-none border-b pb-2">
                                                <div className="list-group-item border border-white transition-all duration-500 shadow-sm rounded mb-2 p-3">
                                                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-6 items-center gap-y-3">
                                                        <div className="lg:col-span-6 md:col-span-7">
                                                            <div className="todo-inbox-check flex items-center flex-wrap">
                                                                <span className="me-2 flex items-center">
                                                                    <i className="ti ti-grid-dots text-dark" />
                                                                </span>
                                                                <div className="form-check form-check-md me-2">
                                                                    <input
                                                                        className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                                        type="checkbox"
                                                                    />
                                                                </div>
                                                                <span className="me-2 rating-select flex items-center">
                                                                    <i className="ti ti-star" />
                                                                </span>
                                                                <div className="strike-info">
                                                                    <h4 className="text-[14px] truncate">
                                                                        Plan tasks for the next day
                                                                    </h4>
                                                                </div>
                                                                <span className="badge bg-transparent-dark text-dark rounded-pill ms-2">
                                                                    <i className="ti ti-calendar me-1" />
                                                                    Today
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="lg:col-span-6 md:col-span-5">
                                                            <div className="flex items-center justify-end flex-wrap gap-y-3">
                                                                <span className="py-1 px-2 rounded text-xs leading-none font-semibold bg-info text-white me-1">
                                                                    Social
                                                                </span>
                                                                <span className="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                                    <i className="fas fa-circle text-[6px] me-1" />
                                                                    Pending
                                                                </span>
                                                                <div className="flex items-center">
                                                                    <div className="flex -space-x-2">
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-12.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-14.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                        <span className="size-6 flex items-center justify-center rounded-full mx-1">
                                                                            <ImageWithBasePath
                                                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                                                src="assets/img/profiles/avatar-24.jpg"
                                                                                alt="img"
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link
                                                                            to="#"
                                                                            className="p-1 bg-white inline-flex items-center focus:text-primary hover:text-primary text-gray-900"
                                                                            data-dropdown-toggle="office-dropdown6"
                                                                        >
                                                                            <i className="ti ti-dots-vertical" />
                                                                        </Link>
                                                                        <ul
                                                                            id="office-dropdown6"
                                                                            className="hidden z-[9] p-2 w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="edit_todo"
                                                                                    data-modal-target="edit_todo"
                                                                                >
                                                                                    <i className="ti ti-edit me-2" />
                                                                                    Edit
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-toggle="delete_modal"
                                                                                    data-modal-target="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-2" />
                                                                                    Delete{" "}
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                >
                                                                                    <i className="ti ti-eye me-2" />
                                                                                    View{" "}
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to="#" className="btn btn-primary">
                                    <i className="ti ti-loader me-2" />
                                    Load More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
            <TodoModal/>
        </>

    )
}

export default Todo