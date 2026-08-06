import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"
import { all_routes } from "../../../routes/all_routes"
import { useState } from "react"
import CommonSelect from "../../../components/common-select/commonSelect"
import { Assignee, bulkOptions, Priority, StatusActive } from "../../../core/json/selectOption"
import CommonDatePicker from "../../../components/common-date-picker/commonDatePicker"
import CommonTagInputs from "../../../components/common-tag-input/commonTagInputs"
import MemoTextEditor from "../../../components/text-editor/texteditor"

const Notes = () => {
    const [tags, setTags] = useState<string[]>(["Pending", "Done"]);
    const handleTagsChange = (newTags: string[]) => {
        setTags(newTags);
    };


    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[56px] ml-[240px] lg:ml-[240px] md:ml-0">
                <div className="content p-5 lg:p-6">
                    {/* start page header */}
                    <BreadcrumbHeader
                        title="Notes"
                        items={[
                            { label: "Home", href: all_routes.dealsDashboard },
                            { label: "Applications", href: "#" },
                            { label: "Notes" }, // last item has no link
                        ]}
                    />
                    {/* end page header */}
                    <div className="grid xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-1 gap-6">
                        {/* Sidebar */}
                        <div className="xl:col-span-3 lg:col-span-4 md:col-span-1">
                            <div className="w-full bg-white border border-borderColor rounded-lg p-4 shadow-sm">
                                <div className="mb-6 pb-4 border-b border-borderColor">
                                    <h6 className="flex items-center text-lg font-semibold text-gray-900">
                                        <i className="ti ti-file-text mr-3 text-primary" />
                                        Notes List
                                    </h6>
                                </div>
                                <div className="border-b border-borderColor mb-2 pb-2">
                                    <div
                                        className="flex flex-col space-y-1"
                                        data-tabs-toggle="#default-styled-tab-content"
                                        data-tabs-active-classes="text-white bg-primary hover:text-white"
                                        data-tabs-inactive-classes="text-gray-600 hover:text-primary hover:bg-gray-50"
                                        role="tablist"
                                    >
                                        <button
                                            className="flex items-center text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 active hover:text-white"
                                            id="basic-tab"
                                            data-tabs-target="#basic"
                                            type="button"
                                            role="tab"
                                        >
                                            <i className="ti ti-inbox mr-3" />
                                            All Notes
                                        </button>
                                        <button
                                            className="flex items-center text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:text-white"
                                            data-tabs-target="#styled-dashboard"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            <i className="ti ti-star mr-3" />
                                            Important
                                        </button>
                                        <button
                                            className="flex items-center text-left font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:text-white"
                                            data-tabs-target="#styled-settings"
                                            type="button"
                                            role="tab"
                                            aria-selected="false"
                                        >
                                            <i className="ti ti-trash mr-3" />
                                            Trash
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="px-2">
                                        <h6 className="mb-3 text-sm font-semibold text-gray-900">
                                            Tags
                                        </h6>
                                        <div className="flex flex-col space-y-1">
                                            <Link
                                                to="#"
                                                className="text-info flex items-center py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
                                            >
                                                <span className="text-info mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                Pending
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-danger flex items-center py-2 px-3 rounded-lg hover:bg-red-50 transition-colors"
                                            >
                                                <span className="text-danger mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                Onhold
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-warning flex items-center py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors"
                                            >
                                                <span className="text-warning mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                Inprogress
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-success flex items-center py-2 px-3 rounded-lg hover:bg-green-50 transition-colors"
                                            >
                                                <span className="text-success mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                Done
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="px-2">
                                        <h6 className="mb-3 text-sm font-semibold text-gray-900">
                                            Priority
                                        </h6>
                                        <div className="flex flex-col space-y-1">
                                            <Link
                                                to="#"
                                                className="text-warning flex items-center py-2 px-3 rounded-lg hover:bg-yellow-50 transition-colors"
                                            >
                                                <span className="text-warning mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                Medium
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-success flex items-center py-2 px-3 rounded-lg hover:bg-green-50 transition-colors"
                                            >
                                                <span className="text-success mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                High
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-danger flex items-center py-2 px-3 rounded-lg hover:bg-red-50 transition-colors"
                                            >
                                                <span className="text-danger mr-3">
                                                    <i className="ti ti-square-filled text-xs" />
                                                </span>
                                                Low
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Main Content */}
                        <div className="xl:col-span-9 lg:col-span-8 md:col-span-1">
                            {/* Action Bar */}
                            <div className="bg-white flex flex-wrap gap-4 items-center justify-between mb-6 p-6 rounded-lg border border-borderColor shadow-sm">
                                <div>
                                    <CommonSelect
                                        options={bulkOptions}
                                        className="select"
                                        defaultValue={bulkOptions[0]}
                                    />
                                </div>
                                <div className="flex items-center flex-wrap gap-3">
                                    {/* Drop Down Button */}
                                    <div className="relative">
                                        <Link
                                            to="#"
                                            className="border border-borderColor rounded-lg px-4 py-2 bg-white shadow-sm inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900 hover:bg-gray-50 transition-colors"
                                            data-dropdown-toggle="export-dropdown"
                                        >
                                            <i className="ti ti-package-export mr-2" />
                                            Export
                                            <i className="ti ti-chevron-down ml-2" />
                                        </Link>
                                        <ul
                                            id="export-dropdown"
                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[200px]"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                >
                                                    <i className="ti ti-file-type-pdf mr-3" />
                                                    Export as PDF
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                >
                                                    <i className="ti ti-file-type-xls mr-3" />
                                                    Export as Excel{" "}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link
                                        to="#"
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors font-medium"
                                        data-modal-target="add_new_notes"
                                        data-modal-toggle="add_new_notes"
                                    >
                                        <i className="ti ti-circle-plus" />
                                        Add Notes
                                    </Link>
                                </div>
                            </div>
                            {/* Tab Content */}
                            <div id="default-styled-tab-content">
                                {/* first tab Item */}
                                <div className="hidden" id="basic" role="tabpanel">
                                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-6">
                                        {/* Item 1 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-warning border border-warning flex items-center bg-yellow-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Medium
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown7"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown7"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Plan a trip to another country
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        20 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Space, the final frontier. of the Starship Enterprise.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-05.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Personal
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 2 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Low
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notesone-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notesone-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Improve touch typing
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        22 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Well, the way they make shows is, they make one show.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-danger flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Work
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 3 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Low
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notestwo-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notestwo-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Learn calligraphy
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        22 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Calligraphy, the art of beautiful handwriting. It derive
                                                        from Greek.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-03.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Social
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 4 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-success border border-success flex items-center bg-green-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        High
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notesthree-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notesthree-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Backup Files EOD
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        22 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Project files should be took backup before end of the
                                                        day.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-05.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Personal
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 5 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Low
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notesfour-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notesfour-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Download Server Logs
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        22 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Server log is a text document that contains a record of
                                                        all activity.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-danger flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Work
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 6 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-warning border border-warning flex items-center bg-yellow-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Medium
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notesfive-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notesfive-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Team meet at Starbucks
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        26 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Meeting all teamets at Starbucks for identifying them
                                                        all.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-07.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-warning flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Social
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 7 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-success border border-success flex items-center bg-green-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        High
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notessix-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notessix-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Create a compost pile
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        27 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Compost pile refers to fruit and vegetable scraps, used
                                                        tea etc.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-08.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-warning flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Social
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 8 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-danger border border-danger flex items-center bg-red-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Low
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="notesseven-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="notesseven-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Take a hike at a local park
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        26 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Hiking involves a long energetic walk in a natural
                                                        environment.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-08.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Personal
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Item 9 */}
                                        <div className="bg-white border border-borderColor rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="py-1 px-3 text-xs font-semibold rounded text-info border border-info flex items-center bg-blue-50">
                                                        <i className="ti ti-circle-filled text-[6px] mr-2" />
                                                        Medium
                                                    </span>
                                                    <div className="relative">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-dark p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="noteseight-dropdown"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="noteseight-dropdown"
                                                            className="hidden absolute right-0 mt-2 p-2 z-10 border border-borderColor rounded-lg bg-white shadow-lg min-w-[160px]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit mr-3" />
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="delete_modal"
                                                                    data-modal-target="delete_modal"
                                                                >
                                                                    <i className="ti ti-trash mr-3" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                >
                                                                    <i className="ti ti-star mr-3" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded-lg p-3 flex items-center hover:bg-gray-50 hover:text-primary text-gray-900 transition-colors"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye mr-3" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <h6 className="text-lg font-semibold mb-2 text-gray-900 truncate">
                                                        <Link
                                                            to="#"
                                                            className="hover:text-primary transition-colors"
                                                        >
                                                            Research a topic interested
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-3 flex items-center text-gray-600 text-sm">
                                                        <i className="ti ti-calendar mr-2" />
                                                        28 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Research a topic interested by listen actively and
                                                        attentively.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t border-borderColor pt-4">
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-3">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-07.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full object-cover"
                                                            />
                                                        </Link>
                                                        <span className="text-success flex items-center text-sm">
                                                            <i className="ti ti-square-filled text-[10px] mr-2" />
                                                            Work
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-star text-warning" />
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                                                        >
                                                            <i className="ti ti-trash text-danger" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* second tab Item */}
                                <div className="hidden" id="styled-dashboard" role="tabpanel">
                                    <div className="grid xl:grid-cols-12 md:grid-cols-12 gap-6 mb-6">
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-success border border-success flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        High
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown13"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown13"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">Backup Files EOD</Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        20 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Project files should be took backup before end of the
                                                        day.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-05.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Personal
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        Medium
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown14"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown14"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">Download Server Logs</Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        25 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Server log is a text document that contains a record of
                                                        all activity.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-danger flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Work
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-warning border border-warning flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        Medium
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown15"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown15"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">Team meet at Starbucks</Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        26 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Meeting all teamets at Starbucks for identifying them
                                                        all.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-07.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-warning flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Social
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-success border border-success flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        High
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown16"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown16"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">Create a compost pile</Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        27 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Compost pile refers to fruit and vegetable scraps, used
                                                        tea, coffee..
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-08.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-warning flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Social
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        Low
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown17"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown17"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">
                                                            Take a hike at a local park
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        28 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Hiking involves a long energetic walk in a natural
                                                        environment.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-09.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Personal
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-info border border-info flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        Medium
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown18"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown18"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">
                                                            Research a topic interested
                                                        </Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        28 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Research a topic interested by listen actively and
                                                        attentively.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-10.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-success flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Work
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* third tab Item */}
                                <div className="hidden" id="styled-settings" role="tabpanel">
                                    <div className="grid xl:grid-cols-12 md:grid-cols-12 gap-6 mb-3">
                                        <div className="xl:col-span-12 md:col-span-12 w-full flex items-center justify-end">
                                            <Link
                                                to="#"
                                                className="bg-danger text-white py-2 px-4 rounded-md flex items-center font-medium"
                                            >
                                                <span className="mr-2">
                                                    <i className="ti ti-trash text-md" />
                                                </span>
                                                Restore all
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="grid xl:grid-cols-12 md:grid-cols-12 gap-6 mb-6">
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-success border border-success flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        High
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown19"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown19"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h6 className="truncate mb-1">
                                                        <Link to="#">Create a compost pile</Link>
                                                    </h6>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        27 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Compost pile refers to fruit and vegetable scraps, used
                                                        tea, coffee..
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-08.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-warning flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Social
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        Low
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown20"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown20"
                                                            className="hidden p-2 border rounded bg-white shadow-lg w-40 z-[1]"
                                                            style={{
                                                                position: "absolute",
                                                                inset: "0px 0px auto auto",
                                                                margin: 0,
                                                                transform: "translate3d(-664.8px, 296px, 0px)"
                                                            }}
                                                            data-popper-placement="bottom-end"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h5 className="truncate mb-1">
                                                        <Link to="#">
                                                            Take a hike at a local park
                                                        </Link>
                                                    </h5>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        28 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Hiking involves a long energetic walk in a natural
                                                        environment.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-09.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-info flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Personal
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 md:col-span-4 card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                            <div className="p-5">
                                                <div className="flex items-center justify-between">
                                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-info border border-info flex items-center">
                                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                                        Medium
                                                    </span>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="size-1 rounded-full bg-white inline-flex items-center justify-center"
                                                            data-dropdown-placement="bottom-end"
                                                            data-dropdown-toggle="grid-dropdown21"
                                                        >
                                                            <i className="ti ti-dots-vertical" />
                                                        </Link>
                                                        <ul
                                                            id="grid-dropdown21"
                                                            className="hidden p-4 border rounded bg-white shadow-lg w-40 z-[1]"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-target="edit_notes"
                                                                    data-modal-toggle="edit_notes"
                                                                >
                                                                    <i className="ti ti-edit me-1" />
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
                                                                    <i className="ti ti-trash me-1" />
                                                                    Delete{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    <i className="ti ti-star me-1" />
                                                                    Not Important{" "}
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    data-modal-toggle="view_notes"
                                                                    data-modal-target="view_notes"
                                                                >
                                                                    <i className="ti ti-eye me-1" />
                                                                    View{" "}
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="my-4">
                                                    <h5 className="truncate mb-1">
                                                        <Link to="#">
                                                            Research a topic interested
                                                        </Link>
                                                    </h5>
                                                    <p className="mb-4 flex items-center text-gray-700">
                                                        <i className="ti ti-calendar mr-1" />
                                                        28 Jan 2024
                                                    </p>
                                                    <p className="text-gray-600">
                                                        Research a topic interested by listen actively and
                                                        attentively.
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-between border-t pt-4">
                                                    <div className="flex items-center">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md mr-2"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-10.jpg"
                                                                alt="Profile"
                                                                className="w-8 h-8 rounded-full"
                                                            />
                                                        </Link>
                                                        <span className="text-success flex items-center">
                                                            <i className="ti ti-square-filled text-[10px] mr-1" />
                                                            Work
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Link to="#" className="mr-2">
                                                            <span>
                                                                <i className="ti ti-star text-warning" />
                                                            </span>
                                                        </Link>
                                                        <Link to="#">
                                                            <span>
                                                                <i className="ti ti-trash text-danger" />
                                                            </span>
                                                        </Link>
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
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
            <>
                {/* start add notes  modal */}
                <div
                    id="add_new_notes"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                >
                    <div className="relative p-4 w-full max-w-[500px] max-h-full">
                        <div className="relative bg-white rounded-defaultradius">
                            <div className="flex items-center justify-between p-4 border-b border-borderColor">
                                <div className="flex item-center gap-2">
                                    <h5 className="font-bold text-[18px]">Add New Notes</h5>
                                </div>
                                <button
                                    type="button"
                                    className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                                    data-modal-hide="add_new_notes"
                                >
                                    <i className="ti ti-x" />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <form>
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                                        <div className="md:col-span-12">
                                            <div className="mb-3">
                                                <label className="form-label">Note Title</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <div className="flex items-center justify-between">
                                                    <label className="form-label">Assignee</label>
                                                </div>
                                                <CommonSelect
                                                    options={Assignee}
                                                    className="select"
                                                    defaultValue={Assignee[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <label className="form-label">Tag</label>
                                                <CommonTagInputs
                                                    initialTags={tags}
                                                    onTagsChange={handleTagsChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <label className="form-label">Priority</label>
                                                <CommonSelect
                                                    options={Priority}
                                                    className="select"
                                                    defaultValue={Priority[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <label className="form-label">Due Date</label>
                                                <div className="input-group w-auto input-group-flat">
                                                    <CommonDatePicker placeholder="dd/mm/yyyy" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-12">
                                            <div className="mb-3">
                                                <label className="form-label">Status</label>
                                                <CommonSelect
                                                    options={StatusActive}
                                                    className="select"
                                                    defaultValue={StatusActive[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-12">
                                            <div className="mb-3">
                                                <label className="form-label">Descriptions</label>
                                                <div className="editor pages-editor">
                                                    <MemoTextEditor />
                                                </div>
                                                <p className="text-[12px]">Maximum 60 Characters</p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
                                <button
                                    type="button"
                                    data-modal-hide="add_new_notes"
                                    className="btn btn-light"
                                >
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end add new modal */}
                {/* start edit notes  modal */}
                <div
                    id="edit_notes"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                >
                    <div className="relative p-4 w-full max-w-[500px] max-h-full">
                        <div className="relative bg-white rounded-defaultradius">
                            <div className="flex items-center justify-between p-4 border-b border-borderColor">
                                <div className="flex item-center gap-2">
                                    <h5 className="font-bold text-[18px]">Edit Notes</h5>
                                </div>
                                <button
                                    type="button"
                                    className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                                    data-modal-hide="edit_notes"
                                >
                                    <i className="ti ti-x" />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <form >
                                    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
                                        <div className="md:col-span-12">
                                            <div className="mb-3">
                                                <label className="form-label">Note Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Team meet at Starbucks"
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <div className="flex items-center justify-between">
                                                    <label className="form-label">Assignee</label>
                                                </div>
                                                <CommonSelect
                                                    options={Assignee}
                                                    className="select"
                                                    defaultValue={Assignee[1]}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <label className="form-label">Tag</label>
                                                <CommonTagInputs
                                                    initialTags={tags}
                                                    onTagsChange={handleTagsChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <label className="form-label">Priority</label>
                                                <CommonSelect
                                                    options={Priority}
                                                    className="select"
                                                    defaultValue={Priority[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-6">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Due Date<span className="text-danger">*</span>
                                                </label>
                                                <div className="input-group w-auto input-group-flat">
                                                    <CommonDatePicker placeholder="dd/mm/yyyy" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:col-span-12">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    Status<span className="text-danger">*</span>
                                                </label>
                                                <CommonSelect
                                                    options={StatusActive}
                                                    className="select"
                                                    defaultValue={StatusActive[0]}
                                                />
                                            </div>
                                        </div>
                                        <div className="md:col-span-12">
                                            <div className="mb-3">
                                                <label className="form-label">Descriptions</label>
                                                <div className="editor pages-editor">
                                                    <MemoTextEditor />
                                                </div>
                                                <p className="text-[12px]">Maximum 60 Characters</p>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
                                <button
                                    type="button"
                                    data-modal-hide="add_new_notes"
                                    className="btn btn-light"
                                >
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end edit new modal */}
                {/* start view notes  modal */}
                <div
                    id="view_notes"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                >
                    <div className="relative p-4 w-full max-w-[500px] max-h-full">
                        <div className="relative bg-white rounded-defaultradius">
                            <div className="flex items-center justify-between p-4 border-b border-borderColor">
                                <div className="flex item-center gap-2">
                                    <h6 className="font-bold">Notes</h6>
                                </div>
                                <button
                                    type="button"
                                    className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                                    data-modal-hide="view_notes"
                                >
                                    <i className="ti ti-x" />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <form>
                                    <h4 className="mb-2">Meet Lisa to discuss project details</h4>
                                    <p className="mb-3">
                                        Hiking is a long, vigorous walk, usually on trails or footpaths in
                                        the countryside. Walking for pleasure developed in Europe during
                                        the eighteenth century. Religious pilgrimages have existed much
                                        longer but they involve walking long distances for a spiritual
                                        purpose associated with specific religions and also we achieve
                                        inner peace while we hike at a local park.
                                    </p>
                                    <span className="py-1 px-2 text-xs leading-none font-semibold rounded text-danger border border-danger inline-flex items-center">
                                        <i className="ti ti-circle-filled text-[6px] me-1" />
                                        High
                                    </span>
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
                                <button
                                    type="button"
                                    data-modal-hide="view_notes"
                                    className="btn btn-primary"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end view new modal */}
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
                                    Are you sure you want to remove contract you selected.
                                </p>
                                <div className="flex justify-center items-center">
                                    <Link
                                        to="#"
                                        className="btn btn-light z-1 me-2 w-full"
                                        data-modal-hide="delete_modal"
                                    >
                                        Cancel
                                    </Link>
                                    <Link to={all_routes.notes} className="btn btn-primary z-1 w-full">
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

    )
}

export default Notes