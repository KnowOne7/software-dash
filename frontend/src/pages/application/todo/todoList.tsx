import { Link } from "react-router"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"
import TodoModal from "./modal/todoModal"

const TodoList = () => {
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
                                className="w-7 h-7 flex items-center justify-center rounded text-dark border border-borderColor me-1"
                            >
                                <i className="ti ti-layout-grid" />
                            </Link>
                            <Link
                                to={all_routes.todoList}
                                className="w-7 h-7 flex items-center justify-center rounded bg-primary text-white"
                            >
                                <i className="ti ti-list-tree" />
                            </Link>
                        </div>
                    </div>
                    {/* start table responsive */}
                    <div className="table-responsive custom-table">
                        <table className="table table w-full border-b border-borderColor">
                            <thead className="table-light">
                                <tr>
                                    <th className="no-sort px-5 py-2.5">
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </th>
                                    <th />
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Company Name
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Tags
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Assignee
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Created On
                                    </th>
                                    <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                        Progress
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all1"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select mx-3">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Respond to any pending messages
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-info">Social</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-05.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">14 Jan 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 100%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2 h-1"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-success rounded h-1"
                                                role="progressbar"
                                                style={{ width: "100%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">14 Jan 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all2"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Update calendar and schedule
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-primary">Meetings</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-03.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">21 Jan 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 15%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-danger rounded"
                                                role="progressbar"
                                                style={{ width: "15%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">21 Jan 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-allone"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Respond to any pending messages
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-danger">Research</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-04.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-05.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-06.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">20 Feb 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 45%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-warning rounded"
                                                role="progressbar"
                                                style={{ width: "45%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">20 Feb 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-secondary-100  text-secondary rounded border-b border-secondary px-2 py-0.5 me-2">
                                            Inprogress
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-alltwo"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Attend team meeting at 10:00 AM
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-primary">Web Design</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-05.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-06.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-07.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">15 Mar 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 40%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-warning rounded"
                                                role="progressbar"
                                                style={{ width: "40%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">15 Mar 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-secondary-100  text-secondary rounded border-b border-secondary px-2 py-0.5 me-2">
                                            Inprogress
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Check and respond to emails
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-info">Reminder</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-08.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-09.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-10.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">12 Apr 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 65%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-purple rounded"
                                                role="progressbar"
                                                style={{ width: "65%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">12 Apr 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Coordinate with department head
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-danger">Internal</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-11.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-12.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-13.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">20 Apr 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 85%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-pink rounded"
                                                role="progressbar"
                                                style={{ width: "85%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">20 Apr 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                                            Onhold
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Plan tasks for the next day
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-info">Social</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-14.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-15.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-16.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">06 Jul 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 100%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-success rounded"
                                                role="progressbar"
                                                style={{ width: "100%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">06 Jul 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Finalize project proposal
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-success">Projects</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-17.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-18.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-19.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">02 Sep 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 65%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-danger rounded"
                                                role="progressbar"
                                                style={{ width: "65%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">02 Sep 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                                            Onhold
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Submit to supervisor by EOD
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-info">Reminder</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-03.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">15 Nov 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 75%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-purple rounded"
                                                role="progressbar"
                                                style={{ width: "75%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">15 Nov 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-secondary-100  text-secondary rounded border-b border-secondary px-2 py-0.5 me-2">
                                            Inprogress
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                                        <div className="form-check form-check-md">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="set-star rating-select">
                                            <i className="ti ti-star-filled fs-16" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <p className="fw-medium text-dark mb-0">
                                            Prepare presentation slides
                                        </p>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="badge bg-danger">Research</span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="avatar-list-stacked avatar-group-sm">
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                            <span className="avatar avatar-rounded">
                                                <ImageWithBasePath
                                                    className="border border-white"
                                                    src="assets/img/profiles/avatar-03.jpg"
                                                    alt="img"
                                                />
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">10 Dec 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="d-block mb-1">Progress : 90%</span>
                                        <div
                                            className="progress progress-xs flex-grow-1 mb-2"
                                            style={{ width: 190, height: 5 }}
                                        >
                                            <div
                                                className="progress-bar bg-pink rounded"
                                                role="progressbar"
                                                style={{ width: "90%", height: 5 }}
                                                aria-valuenow={30}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">10 Dec 2024</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <span className="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                                            Pending
                                        </span>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <Link
                                                to="#"
                                                className="btn btn-icon btn-sm btn-outline-white border-0"
                                                data-modal-toggle="edit_todo"
                                                data-modal-target="edit_todo"
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
                            </tbody>
                        </table>
                    </div>
                    {/* end table responsive */}
                </div>
                {/* Start Footer */}
                <footer className="footer block md:flex justify-between md:text-left text-center p-4 bg-white border-t border-borderColor">
                    <p className="mb-0">
                        Copyright ©{" "}
                        <Link to="#" className="text-primary underline">
                            CRMS
                        </Link>
                    </p>
                    <div className="flex items-center gap-2 footer-links justify-center justify-md-end">
                        <Link to="#" className="hover:text-primary">
                            About
                        </Link>
                        <Link to="#" className="hover:text-primary">
                            Terms
                        </Link>
                        <Link to="#" className="hover:text-primary">
                            Contact Us
                        </Link>
                    </div>
                </footer>
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
            <TodoModal />
        </>

    )
}

export default TodoList