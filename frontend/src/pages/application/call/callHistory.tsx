import { Link } from "react-router"

import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import CallHistoryModal from "./modal/callHistoryModal"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"
import { all_routes } from "../../../routes/all_routes"



const CallHistory = () => {

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-5">
                    {/* Page Header */}
                    <BreadcrumbHeader
                        title="Call History"
                        items={[
                            { label: "Home", href: all_routes.dealsDashboard },
                            { label: "Applications", href: "#" },
                            { label: "Call History" }, // last item has no link
                        ]}
                    />
                    {/* End Page Header */}
                    <div className="table-responsive custom-table">
                        <table className="table table-nowrap border w-full border-borderColor">
                            <thead className="thead-light">
                                <tr>
                                    <th className="text-left no-sort text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor hover:outline-none">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                                id="select-all"
                                            />
                                        </div>
                                    </th>
                                    <th className="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                                        Name
                                    </th>
                                    <th className="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                                        Phone
                                    </th>
                                    <th className="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                                        Call Type
                                    </th>
                                    <th className="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                                        Duration
                                    </th>
                                    <th className="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                                        Date &amp; Time
                                    </th>
                                    <th className="text-left text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-borderColor">
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-32.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Anthony Lewis
                                                    </Link>
                                                </p>
                                                <span className="fs-12">anthony@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(123) 4567 890</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-incoming text-success me-2" />
                                            Incoming
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.25</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        14 Jan 2024, 04:27 AM{" "}
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-09.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Brian Villalobos
                                                    </Link>
                                                </p>
                                                <span className="fs-12">brian@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(179) 7382 829</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-outgoing text-success me-2" />
                                            Outgoing
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.10</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        21 Jan 2024, 03:19 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-01.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Harvey Smith
                                                    </Link>
                                                </p>
                                                <span className="fs-12">harvey@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(184) 2719 738</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-video text-success me-2" />
                                            Incoming
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.40</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        20 Feb 2024, 12:15 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-33.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        peral@example.com
                                                    </Link>
                                                </p>
                                                <span className="fs-12">peral@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(193) 7839 748</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-x text-danger me-2" />
                                            Missed Call
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.00</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        15 Mar 2024, 12:11 AM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-33.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Doglas Martini
                                                    </Link>
                                                </p>
                                                <span className="fs-12">martniwr@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(183) 9302 890</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-video text-success me-2" />
                                            Outgoing
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.35</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        12 Apr 2024, 05:48 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-02.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Linda Ray
                                                    </Link>
                                                </p>
                                                <span className="fs-12">ray456@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(120) 3728 039</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-incoming text-success me-2" />
                                            Incomiing
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">01.40</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        20 Apr 2024, 06:11 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-35.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Elliot Murray
                                                    </Link>
                                                </p>
                                                <span className="fs-12">murray@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(102) 8480 832</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-video text-danger me-2" />
                                            Missed call
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.00</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        06 Jul 2024, 07:15 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-36.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Rebecca Smtih
                                                    </Link>
                                                </p>
                                                <span className="fs-12">smtih@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(162) 8920 713</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-outgoing text-success me-2" />
                                            Outgoing
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.45</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        02 Sep 2024, 09:21 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-37.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Connie Waters
                                                    </Link>
                                                </p>
                                                <span className="fs-12">connie@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(189) 0920 723</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-incoming text-success me-2" />
                                            Incoming
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.50</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        15 Nov 2024, 12:44 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="even:bg-white dark:even-bg-white">
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <input
                                                className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                type="checkbox"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="flex items-center">
                                            <Link
                                                to="#"
                                                className="avatar avatar-md"
                                                data-bs-toggle="modal"
                                                data-bs-target="#view_details"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-38.jpg"
                                                    className="rounded-full size-8 img-fluid"
                                                    alt="img"
                                                />
                                            </Link>
                                            <div className="ms-2">
                                                <p className="text-dark font-medium mb-0">
                                                    <Link
                                                        className="hover:text-primary"
                                                        to="#"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#view_details"
                                                    >
                                                        Lori Broaddus
                                                    </Link>
                                                </p>
                                                <span className="fs-12">broaddus@example.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">(168) 8392 823</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="inline-flex items-center">
                                            <i className="ti ti-phone-x text-danger me-2" />
                                            Missed call
                                        </div>
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">00.00</td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        10 Dec 2024, 11:23 PM
                                    </td>
                                    <td className="px-5 py-2.5 text-gray-500">
                                        <div className="action-icon inline-flex">
                                            <Link
                                                to="#"
                                                className="me-2 size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="call_history"
                                                data-modal-target="call_history"
                                            >
                                                <i className="ti ti-eye" />
                                            </Link>
                                            <Link
                                                to="#"
                                                className="size-[26px] flex items-center justify-center rounded-[5px] hover:bg-light-900 hover:text-gray-900"
                                                data-modal-toggle="delete_modal"
                                                data-modal-target="delete_modal"
                                            >
                                                <i className="ti ti-trash" />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
            <CallHistoryModal />
        </>

    )
}

export default CallHistory