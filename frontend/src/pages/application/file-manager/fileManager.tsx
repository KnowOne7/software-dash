import { Link } from "react-router"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"

const FileManager = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-5">
                    {/* start page header */}
                    <BreadcrumbHeader
                        title="File Manager"
                        items={[
                            { label: "Home", href: all_routes.dealsDashboard },
                            { label: "Applications", href: "#" },
                            { label: "File Manager" }, // last item has no link
                        ]}
                    />
                    {/* end page header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                        <div>
                            <Link
                                to="#"
                                className="border border-borderColor rounded p-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                data-dropdown-toggle="export-dropdown"
                            >
                                All Files <i className="ti ti-chevron-down ms-1" />
                            </Link>
                            <ul
                                id="export-dropdown"
                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                            >
                                <li>
                                    <Link
                                        to="#"
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                        All Files
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                        Music
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                        Video
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#"
                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                        Doduments
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <Link
                                to="#"
                                data-modal-target="create_folder"
                                data-modal-toggle="create_folder"
                                className="btn btn btn-primary d-flex align-items-center"
                            >
                                <i className="ti ti-circle-plus me-1" />
                                Create Folder
                            </Link>
                        </div>
                    </div>
                    {/* start row */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-5">
                        {/* Item 1 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <ImageWithBasePath
                                            src="assets/img/icons/dropbox.svg"
                                            alt="img"
                                            className="w-6 h-6"
                                        />
                                        <h5 className="text-[16px] ml-2 mb-0">Dropbox</h5>
                                    </div>
                                    <div>
                                        <Link
                                            to="#"
                                            data-dropdown-toggle="dropbox-dropdown-1"
                                        >
                                            <i className="ti ti-dots text-dark" />
                                        </Link>
                                        <ul
                                            id="dropbox-dropdown-1"
                                            className="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-folder-open me-2" />
                                                    Open
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    data-modal-target="delete_modal"
                                                    data-modal-toggle="delete_modal"
                                                >
                                                    <i className="ti ti-trash me-1" />
                                                    Delete All
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-status-change me-1" />
                                                    Reset
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[100px] bg-pink"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="mb-0 text-sm">200 Files</p>
                                    <p className="mb-0 text-sm text-dark">28GB</p>
                                </div>
                            </div>
                        </div>
                        {/* Item 2 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <ImageWithBasePath
                                            src="assets/img/icons/drive.svg"
                                            alt="img"
                                            className="w-6 h-6"
                                        />
                                        <h5 className="text-[16px] ml-2 mb-0">Google Drive</h5>
                                    </div>
                                    <div>
                                        <Link
                                            to="#"
                                            data-dropdown-toggle="drive-dropdown-1"
                                        >
                                            <i className="ti ti-dots text-dark" />
                                        </Link>
                                        <ul
                                            id="drive-dropdown-1"
                                            className="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-folder-open me-2" />
                                                    Open
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    data-modal-target="delete_modal"
                                                    data-modal-toggle="delete_modal"
                                                >
                                                    <i className="ti ti-trash me-1" />
                                                    Delete All
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-status-change me-1" />
                                                    Reset
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[100px] bg-pink"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="mb-0 text-sm">144 Files</p>
                                    <p className="mb-0 text-sm text-dark">56GB</p>
                                </div>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <ImageWithBasePath
                                            src="assets/img/icons/cloud.svg"
                                            alt="img"
                                            className="w-6 h-6"
                                        />
                                        <h5 className="text-[16px] ml-2 mb-0">Cloud Storage</h5>
                                    </div>
                                    <div>
                                        <Link
                                            to="#"
                                            data-dropdown-toggle="storage-dropdown-1"
                                        >
                                            <i className="ti ti-dots text-dark" />
                                        </Link>
                                        <ul
                                            id="storage-dropdown-1"
                                            className="hidden p-2 z-[1]  w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-folder-open me-2" />
                                                    Open
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    data-modal-target="delete_modal"
                                                    data-modal-toggle="delete_modal"
                                                >
                                                    <i className="ti ti-trash me-1" />
                                                    Delete All
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-status-change me-1" />
                                                    Reset
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[100px] bg-pink"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="mb-0 text-sm">200 Files</p>
                                    <p className="mb-0 text-sm text-dark">28GB</p>
                                </div>
                            </div>
                        </div>
                        {/* Item 4 */}
                        <div className="bg-white rounded border border-borderColor flex flex-col flex-1">
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <ImageWithBasePath
                                            src="assets/img/icons/storage.svg"
                                            alt="img"
                                            className="w-6 h-6"
                                        />
                                        <h5 className="text-[16px] ml-2 mb-0">Internal Storage</h5>
                                    </div>
                                    <div>
                                        <Link
                                            to="#"
                                            data-dropdown-toggle="internal-dropdown-1"
                                        >
                                            <i className="ti ti-dots text-dark" />
                                        </Link>
                                        <ul
                                            id="internal-dropdown-1"
                                            className="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex text-body items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-folder-open me-2" />
                                                    Open
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex text-bodyitems-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    data-modal-target="delete_modal"
                                                    data-modal-toggle="delete_modal"
                                                >
                                                    <i className="ti ti-trash me-1" />
                                                    Delete All
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex text-body items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    <i className="ti ti-status-change me-1" />
                                                    Reset
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pipeline-progress flex items-center mb-2">
                                    <div className="h-1 rounded-[50px] w-full flex-shrink-0 me-3 bg-light">
                                        <div
                                            className="h-1 rounded-[50px] w-[200px] bg-pink"
                                            role="progressbar"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="mb-0 text-sm">144 Files</p>
                                    <p className="mb-0 text-sm text-dark">54GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end row */}
                    {/* start row */}
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 xl:col-span-3">
                            {/* Item 1 */}
                            <div className="bg-white rounded border border-borderColor flex flex-col flex-1 mb-4">
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex items-center overflow-hidden mb-4">
                                        <span className="avatar flex-shrink-0">
                                            <ImageWithBasePath
                                                src="assets/img/profiles/avatar-01.jpg"
                                                alt="img"
                                                className="rounded-full"
                                            />
                                        </span>
                                        <div className="overflow-hidden ms-2">
                                            <h5 className="text-[16px] mb-1">James Hong</h5>
                                            <p className="text-[13px] mb-0">jameshong@example.com</p>
                                        </div>
                                    </div>
                                    <div className="border border-borderColor rounded relative p-5 mb-4 text-center">
                                        <span className="inline-flex items-center justify-center bg-primary text-white mb-2 w-6 h-6 rounded">
                                            <i className="ti ti-upload text-[16px]" />
                                        </span>
                                        <h6 className="mb-2">Drop files here</h6>
                                        <p className="text-[13px] mb-0">Select files to upload</p>
                                        <input
                                            type="file"
                                            className="absolute top-0 start-0 opacity-0 w-full h-full"
                                        />
                                    </div>
                                    <div className="files-list nav d-block">
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 bg-light text-gray-900 rounded active"
                                        >
                                            <i className="ti ti-folder-up me-2" />
                                            All Folder / Files
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-star me-2" />
                                            Drive
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-octahedron me-2" />
                                            Dropbox
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-share-2 me-2" />
                                            Shared with Me
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-file me-2" />
                                            Document
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-clock-hour-11 me-2" />
                                            Recent File
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-star me-2" />
                                            Important
                                        </Link>
                                        <Link
                                            to="javscript:void(0);"
                                            className="flex items-center font-medium p-2 text-gray-900"
                                        >
                                            <i className="ti ti-music me-2" />
                                            Media
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Storage Details */}
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white w-full mb-6">
                                <div className="card-body p-5">
                                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                                        <h5 className="text-[16px] mb-1">Storage Details</h5>
                                        <span className="bg-success text-white text-[12px] px-1.5 py-0.5 rounded flex-shrink-0">
                                            Used 77%
                                        </span>
                                    </div>
                                    <div id="storage-chart" />
                                    <div className="flex items-center flex-wrap gap-2 justify-between mb-4">
                                        <div className="flex items-center flex-wrap gap-2 overflow-hidden">
                                            <span className="avatar avatar-lg rounded bg-info-100 flex justify-center items-center">
                                                <i className="ti ti-music text-[20px] text-info" />
                                            </span>
                                            <div className="overflow-hidden ms-2">
                                                <h6 className="text-truncate text-[14px] mb-1">Music</h6>
                                                <p className="text-truncate">35 Files</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-900">8.5 GB</p>
                                    </div>
                                    <div className="flex items-center flex-wrap gap-2 justify-between mb-4">
                                        <div className="flex items-center flex-wrap gap-2 overflow-hidden">
                                            <span className="avatar avatar-lg rounded bg-warning-100 flex justify-center items-center">
                                                <i className="fa-regular fa-file-audio text-[20px] text-warning" />
                                            </span>
                                            <div className="overflow-hidden ms-2">
                                                <h6 className="text-truncate text-[14px] mb-1">Video</h6>
                                                <p className="text-truncate">145 Files</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-900">2 GB</p>
                                    </div>
                                    <div className="flex items-center flex-wrap gap-2 justify-between mb-4">
                                        <div className="flex items-center flex-wrap gap-2 overflow-hidden">
                                            <span className="avatar avatar-lg rounded bg-secondary-100 flex justify-center items-center">
                                                <i className="ti ti-file-description text-[20px] text-secondary" />
                                            </span>
                                            <div className="overflow-hidden ms-2">
                                                <h6 className="text-truncate text-[14px] mb-1">
                                                    Documents
                                                </h6>
                                                <p className="text-truncate">487 Files</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-900">24.5 GB</p>
                                    </div>
                                    <div className="flex items-center flex-wrap gap-2 justify-between mb-4">
                                        <div className="flex items-center flex-wrap gap-2 overflow-hidden">
                                            <span className="avatar avatar-lg rounded bg-primary-100 flex justify-center items-center">
                                                <i className="ti ti-photo text-[20px] text-primary" />
                                            </span>
                                            <div className="overflow-hidden ms-2">
                                                <h6 className="text-truncate text-[14px] mb-1">Photos</h6>
                                                <p className="text-truncate">35 Files</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-900">8.5 GB</p>
                                    </div>
                                    <div className="flex items-center flex-wrap gap-2 justify-between mb-0">
                                        <div className="flex items-center flex-wrap gap-2 overflow-hidden">
                                            <span className="avatar avatar-lg rounded bg-danger-100 flex justify-center items-center">
                                                <i className="ti ti-file-type-doc text-[20px] text-danger" />
                                            </span>
                                            <div className="overflow-hidden ms-2">
                                                <h6 className="text-truncate text-[14px] mb-1">Other</h6>
                                                <p className="text-truncate">487 Files</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-900">16.2 GB</p>
                                    </div>
                                </div>
                            </div>
                            {/* /Storage Details */}
                        </div>
                        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 xl:col-span-9">
                            {/* Item 1 */}
                            <div className="border-b border-borderColor pb-4 mb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h6 className="mb-2">Quick Access</h6>
                                    <div>
                                        <Link
                                            to="#"
                                            className="mb-2 font-medium link-default text-dark"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 flex items-center justify-center w-full">
                                    <div className="xl:col-span-1 flex">
                                        <div className="card bg-white rounded border border-borderColor flex-1 relative">
                                            <div className="card-body p-5 text-center">
                                                <div className="flex justify-center items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/file.svg"
                                                        alt="img"
                                                        className="mb-3"
                                                    />
                                                </div>
                                                <h6 className="mb-2 font-medium">
                                                    <Link to="#">Final.doc</Link>
                                                </h6>
                                                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                                                    2.4GB
                                                </span>
                                            </div>
                                            <span className="access-rate rating-select absolute top-2 right-2 ">
                                                <i className="ti ti-star-filled text-warning" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className=" xl:col-span-1 flex">
                                        <div className="card bg-white rounded border border-borderColor flex-1 relative">
                                            <div className="card-body p-5 text-center">
                                                <div className="flex justify-center items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/pdf-icon.svg"
                                                        alt="img"
                                                        className="mb-3"
                                                    />
                                                </div>
                                                <h6 className="mb-2 font-medium">
                                                    <Link to="#">Marklist.pdf</Link>
                                                </h6>
                                                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                                                    2.4GB
                                                </span>
                                            </div>
                                            <span className="access-rate rating-select absolute top-2 right-2 ">
                                                <i className="ti ti-star" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className=" xl:col-span-1 flex">
                                        <div className="card bg-white rounded border border-borderColor flex-1 relative">
                                            <div className="card-body p-5 text-center">
                                                <div className="flex justify-center items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/image.svg"
                                                        alt="img"
                                                        className="mb-3"
                                                    />
                                                </div>
                                                <h6 className="mb-2 font-medium">
                                                    <Link to="#">Nature.png</Link>
                                                </h6>
                                                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                                                    2.4GB
                                                </span>
                                            </div>
                                            <span className="access-rate rating-select absolute top-2 right-2 ">
                                                <i className="ti ti-star-filled text-warning" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-1 flex">
                                        <div className="card bg-white rounded border border-borderColor flex-1 relative">
                                            <div className="card-body p-5 text-center">
                                                <div className="flex justify-center items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/xls-icon.svg"
                                                        alt="img"
                                                        className="mb-3"
                                                    />
                                                </div>
                                                <h6 className="mb-2 font-medium">
                                                    <Link to="#">List.xlsx</Link>
                                                </h6>
                                                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                                                    2.4GB
                                                </span>
                                            </div>
                                            <span className="access-rate rating-select absolute top-2 right-2 ">
                                                <i className="ti ti-star-filled text-warning" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-1 flex justify-center">
                                        <div className="card bg-white rounded border border-borderColor flex-1 relative">
                                            <div className="card-body p-5 text-center">
                                                <div className="flex justify-center items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/folder-icon.svg"
                                                        alt="img"
                                                        className="mb-3"
                                                    />
                                                </div>
                                                <h6 className="mb-2 font-medium">
                                                    <Link to="#">Group Photos</Link>
                                                </h6>
                                                <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                                                    2.4GB
                                                </span>
                                            </div>
                                            <span className="access-rate rating-select absolute top-2 right-2 ">
                                                <i className="ti ti-star-filled text-warning" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="border-b border-borderColor pb-4 mb-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h6 className="{0}">Recent Folders</h6>
                                    <div>
                                        <Link
                                            to="#"
                                            className="border border-borderColor rounded py-1 px-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                            data-dropdown-toggle="Last-dropdown"
                                        >
                                            Last 7 Days <i className="ti ti-chevron-down ms-1" />
                                        </Link>
                                        <ul
                                            id="Last-dropdown"
                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    Last 7 Days
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    Last Month
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    Last year
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex items-center justify-center w-full">
                                    <div className="lg:col-span-1">
                                        <div className="folder-wrap flex-wrap gap-2 border border-borderColor rounded mb-4 hover:shadow-md bg-white p-4 flex justify-between items-center">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <span className="text-warning text-[30px]">
                                                    <i className="ti ti-folder-filled" />
                                                </span>
                                                <div className="ms-2">
                                                    <h6 className="mb-1">
                                                        <Link
                                                            to="#"
                                                            data-drawer-target="offcanvas_add2"
                                                            data-drawer-show="offcanvas_add2"
                                                            aria-controls="offcanvas_add2"
                                                            data-drawer-placement="right"
                                                        >
                                                            Assets
                                                        </Link>
                                                    </h6>
                                                    <div className="flex items-center">
                                                        <p className="text-[12px] mb-0 me-2">2.4 GB</p>
                                                        <p className="text-[12px] mb-0 flex items-center">
                                                            <i className="ti ti-circle-filled text-[6px] me-2 text-gray-900" />
                                                            135&nbsp;files
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="avatar-list-stacked avatar-group-sm">
                                                    <span className="avatar avatar-rounded">
                                                        <ImageWithBasePath
                                                            className="border border-white"
                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                <div>
                                                    <div className="ml-2">
                                                        <Link
                                                            to="#"
                                                            className="text-gray-900"
                                                            data-dropdown-toggle="folder-dropdown"
                                                        >
                                                            <i className="ti ti-dots" />
                                                        </Link>
                                                        <ul
                                                            id="folder-dropdown"
                                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]"
                                                        >
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#preview"
                                                                    data-drawer-target="offcanvas_add2"
                                                                    data-drawer-show="offcanvas_add2"
                                                                    aria-controls="offcanvas_add2"
                                                                    data-drawer-placement="right"
                                                                >
                                                                    <i className="ti ti-folder-open me-2" />
                                                                    Preview
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-copy me-2" />
                                                                    Duplicate
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-arrow-left-right me-2" />
                                                                    Move
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-user-plus me-2" />
                                                                    Invite
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-share-3 me-2" />
                                                                    Share Link
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <hr className="dropdown-divider border border-borderColor my-2" />
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-eye me-2" />
                                                                    View Details
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-download me-2" />
                                                                    Download
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    data-modal-target="delete_modal"
                                                                    data-modal-toggle="delete_modal"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-trash-x me-2" />
                                                                    Delete
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1">
                                        <div className="folder-wrap flex-wrap gap-2 border border-borderColor rounded mb-4 hover:shadow-md bg-white p-4 flex justify-between items-center">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <span className="text-warning text-[30px]">
                                                    <i className="ti ti-folder-filled" />
                                                </span>
                                                <div className="ms-2">
                                                    <h6 className="mb-1">
                                                        <Link
                                                            to="#"
                                                            data-drawer-target="offcanvas_add2"
                                                            data-drawer-show="offcanvas_add2"
                                                            aria-controls="offcanvas_add2"
                                                            data-drawer-placement="right"
                                                        >
                                                            Document
                                                        </Link>
                                                    </h6>
                                                    <div className="flex items-center">
                                                        <p className="text-[12px] mb-0 me-2">2.4 GB</p>
                                                        <p className="text-[12px] mb-0 flex items-center">
                                                            <i className="ti ti-circle-filled text-[6px] me-2 text-gray-900" />
                                                            135&nbsp;files
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="avatar-list-stacked avatar-group-sm">
                                                    <span className="avatar avatar-rounded">
                                                        <ImageWithBasePath
                                                            className="border border-white"
                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                <div>
                                                    <div className="ml-2">
                                                        <Link
                                                            to="#"
                                                            className="text-gray-900"
                                                            data-dropdown-toggle="folderone-dropdown"
                                                        >
                                                            <i className="ti ti-dots" />
                                                        </Link>
                                                        <ul
                                                            id="folderone-dropdown"
                                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]"
                                                        >
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#preview"
                                                                    className="dropdown-item rounded-1"
                                                                    data-drawer-target="offcanvas_add2"
                                                                    data-drawer-show="offcanvas_add2"
                                                                    aria-controls="offcanvas_add2"
                                                                    data-drawer-placement="right"
                                                                >
                                                                    <i className="ti ti-folder-open me-2" />
                                                                    Preview
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-copy me-2" />
                                                                    Duplicate
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-arrow-left-right me-2" />
                                                                    Move
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-user-plus me-2" />
                                                                    Invite
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-share-3 me-2" />
                                                                    Share Link
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <hr className="dropdown-divider border border-borderColor my-2" />
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-eye me-2" />
                                                                    View Details
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-download me-2" />
                                                                    Download
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    data-modal-target="delete_modal"
                                                                    data-modal-toggle="delete_modal"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-trash-x me-2" />
                                                                    Delete
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1">
                                        <div className="folder-wrap flex-wrap gap-2 border border-borderColor rounded mb-4 hover:shadow-md bg-white p-4 flex justify-between items-center">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <span className="text-warning text-[30px]">
                                                    <i className="ti ti-folder-filled" />
                                                </span>
                                                <div className="ms-2">
                                                    <h6 className="mb-1">
                                                        <Link
                                                            to="#"
                                                            data-drawer-target="offcanvas_add2"
                                                            data-drawer-show="offcanvas_add2"
                                                            aria-controls="offcanvas_add2"
                                                            data-drawer-placement="right"
                                                        >
                                                            Handyimages
                                                        </Link>
                                                    </h6>
                                                    <div className="flex items-center">
                                                        <p className="text-[12px] mb-0 me-2">2.4 GB</p>
                                                        <p className="text-[12px] mb-0 flex items-center">
                                                            <i className="ti ti-circle-filled text-[6px] me-2 text-gray-900" />
                                                            135&nbsp;files
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="avatar-list-stacked avatar-group-sm">
                                                    <span className="avatar avatar-rounded">
                                                        <ImageWithBasePath
                                                            className="border border-white"
                                                            src="assets/img/profiles/avatar-19.jpg"
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
                                                <div>
                                                    <div className="ml-2">
                                                        <Link
                                                            to="#"
                                                            className="text-gray-900"
                                                            data-dropdown-toggle="foldertwo-dropdown"
                                                        >
                                                            <i className="ti ti-dots" />
                                                        </Link>
                                                        <ul
                                                            id="foldertwo-dropdown"
                                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]"
                                                        >
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#preview"
                                                                    className="dropdown-item rounded-1"
                                                                    data-drawer-target="offcanvas_add2"
                                                                    data-drawer-show="offcanvas_add2"
                                                                    aria-controls="offcanvas_add2"
                                                                    data-drawer-placement="right"
                                                                >
                                                                    <i className="ti ti-folder-open me-2" />
                                                                    Preview
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-copy me-2" />
                                                                    Duplicate
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-arrow-left-right me-2" />
                                                                    Move
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-user-plus me-2" />
                                                                    Invite
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-share-3 me-2" />
                                                                    Share Link
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <hr className="dropdown-divider border border-borderColor my-2" />
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-eye me-2" />
                                                                    View Details
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-download me-2" />
                                                                    Download
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    data-modal-target="delete_modal"
                                                                    data-modal-toggle="delete_modal"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-trash-x me-2" />
                                                                    Delete
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
                            {/* Item 3 */}
                            <div className="border-b border-borderColor pb-4 mb-4">
                                <div className="flex items-center justify-between mb-3">
                                    <h6 className="{0}">Recent Files</h6>
                                    <div>
                                        <Link
                                            to="#"
                                            className="border border-borderColor rounded py-1 px-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                            data-dropdown-toggle="Modified-dropdown"
                                        >
                                            Last Modified
                                            <i className="ti ti-chevron-down ms-1" />
                                        </Link>
                                        <ul
                                            id="Modified-dropdown"
                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                                        >
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    Newest to Oldest
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    Last Modified
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="#"
                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                >
                                                    Oldest to Newest
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                                    <div className="col-span-1">
                                        <div className="files-wrap border border-borderColor rounded hover:shadow-md ">
                                            <div className="bg-dark-transparent p-12 flex items-center justify-center  files-icon">
                                                <i className="ti ti-file-description text-[24px] text-gray-900" />
                                            </div>
                                            <div className="bg-white flex items-center justify-between p-3 files-content">
                                                <h6 className="font-medium">customer_data.txt</h6>
                                                <div>
                                                    <div className="ml-2">
                                                        <Link
                                                            to="#"
                                                            className="text-gray-900"
                                                            data-dropdown-toggle="recent-dropdown"
                                                        >
                                                            <i className="ti ti-dots" />
                                                        </Link>
                                                        <ul
                                                            id="recent-dropdown"
                                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]"
                                                        >
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#preview"
                                                                    className="dropdown-item rounded-1"
                                                                    data-drawer-target="offcanvas_add2"
                                                                    data-drawer-show="offcanvas_add2"
                                                                    aria-controls="offcanvas_add2"
                                                                    data-drawer-placement="right"
                                                                >
                                                                    <i className="ti ti-folder-open me-2" />
                                                                    Preview
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-copy me-2" />
                                                                    Duplicate
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-arrow-left-right me-2" />
                                                                    Move
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-user-plus me-2" />
                                                                    Invite
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-share-3 me-2" />
                                                                    Share Link
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <hr className="dropdown-divider border border-borderColor my-2" />
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-eye me-2" />
                                                                    View Details
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-download me-2" />
                                                                    Download
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    data-modal-target="delete_modal"
                                                                    data-modal-toggle="delete_modal"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-trash-x me-2" />
                                                                    Delete
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1">
                                        <div className="files-wrap border border-borderColor rounded hover:shadow-md ">
                                            <div className="bg-dark-transparent p-12 flex items-center justify-center  files-icon">
                                                <i className="ti ti-file-description text-[24px] text-gray-900" />
                                            </div>
                                            <div className="bg-white flex items-center justify-between p-3 files-content">
                                                <h6 className="font-medium">customer_data.txt</h6>
                                                <div>
                                                    <div className="ml-2">
                                                        <Link
                                                            to="#"
                                                            className="text-gray-900"
                                                            data-dropdown-toggle="recentone-dropdown"
                                                        >
                                                            <i className="ti ti-dots" />
                                                        </Link>
                                                        <ul
                                                            id="recentone-dropdown"
                                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]"
                                                        >
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#preview"
                                                                    className="dropdown-item rounded-1"
                                                                    data-drawer-target="offcanvas_add2"
                                                                    data-drawer-show="offcanvas_add2"
                                                                    aria-controls="offcanvas_add2"
                                                                    data-drawer-placement="right"
                                                                >
                                                                    <i className="ti ti-folder-open me-2" />
                                                                    Preview
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-copy me-2" />
                                                                    Duplicate
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-arrow-left-right me-2" />
                                                                    Move
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-user-plus me-2" />
                                                                    Invite
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-share-3 me-2" />
                                                                    Share Link
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <hr className="dropdown-divider border border-borderColor my-2" />
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-eye me-2" />
                                                                    View Details
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-download me-2" />
                                                                    Download
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    data-modal-target="delete_modal"
                                                                    data-modal-toggle="delete_modal"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-trash-x me-2" />
                                                                    Delete
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-1">
                                        <div className="files-wrap border border-borderColor rounded hover:shadow-md ">
                                            <div className="bg-dark-transparent p-12 flex items-center justify-center  files-icon">
                                                <i className="ti ti-file-description text-[24px] text-gray-900" />
                                            </div>
                                            <div className="bg-white flex items-center justify-between p-3 files-content">
                                                <h6 className="font-medium">customer_data.txt</h6>
                                                <div>
                                                    <div className="ml-2">
                                                        <Link
                                                            to="#"
                                                            className="text-gray-900"
                                                            data-dropdown-toggle="recenttwo-dropdown"
                                                        >
                                                            <i className="ti ti-dots" />
                                                        </Link>
                                                        <ul
                                                            id="recenttwo-dropdown"
                                                            className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[200px]"
                                                        >
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    data-bs-toggle="offcanvas"
                                                                    data-bs-target="#preview"
                                                                    className="dropdown-item rounded-1"
                                                                    data-drawer-target="offcanvas_add2"
                                                                    data-drawer-show="offcanvas_add2"
                                                                    aria-controls="offcanvas_add2"
                                                                    data-drawer-placement="right"
                                                                >
                                                                    <i className="ti ti-folder-open me-2" />
                                                                    Preview
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-copy me-2" />
                                                                    Duplicate
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-arrow-left-right me-2" />
                                                                    Move
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-user-plus me-2" />
                                                                    Invite
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-share-3 me-2" />
                                                                    Share Link
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <hr className="dropdown-divider border border-borderColor my-2" />
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-eye me-2" />
                                                                    View Details
                                                                </Link>
                                                            </li>
                                                            <li className="mb-3">
                                                                <Link
                                                                    to="#"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-download me-2" />
                                                                    Download
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    data-modal-target="delete_modal"
                                                                    data-modal-toggle="delete_modal"
                                                                    className="dropdown-item rounded-1"
                                                                >
                                                                    <i className="ti ti-trash-x me-2" />
                                                                    Delete
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
                            {/* Item 4 */}
                            <div>
                                <div className="flex flex-wrap gap-2 items-center justify-between mb-3">
                                    <h6 className="{0}">Files</h6>
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <div>
                                            <Link
                                                to="#"
                                                className="border border-borderColor rounded py-1 px-2 flex align-items-center bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                                                data-dropdown-toggle="table-dropdown"
                                            >
                                                Sort By : Docs Type{" "}
                                                <i className="ti ti-chevron-down ms-2" />
                                            </Link>
                                            <ul
                                                id="table-dropdown"
                                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                            >
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    >
                                                        Docs
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    >
                                                        Pdf
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    >
                                                        Image
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    >
                                                        Folder
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to="#"
                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                    >
                                                        Xml
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <Link
                                            to="#"
                                            className="text-danger font-medium link-default ms-2"
                                        >
                                            View All
                                        </Link>
                                    </div>
                                </div>
                                <div className="custom-datatable-filter">
                                    <table className="table w-full border-b border-borderColor">
                                        <thead className="thead-light">
                                            <tr>
                                                <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                                    Name
                                                </th>
                                                <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                                    Size
                                                </th>
                                                <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                                    Type
                                                </th>
                                                <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                                                    Modified
                                                </th>
                                                <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200  text-gray-900 border-borderColor font-medium text-start">
                                                    Share
                                                </th>
                                                <th className="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start" />
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-borderColor">
                                            <tr className="even:bg-white dark:even-bg-white">
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex justify-start items-center file-name-icon">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center "
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/file-01.svg"
                                                                className="img-fluid w-[20px] h-[20px]"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <div className="ms-2">
                                                            <p className="text-gray-900 font-medium  mb-0">
                                                                <Link to="#">Secret</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">7.6 MB</td>
                                                <td className="px-5 py-2.5 text-gray-500">Doc</td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <p className="text-gray-900 mb-0">Mar 15, 2025</p>
                                                    <span>05:00:14 PM</span>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <ImageWithBasePath
                                                                className="border "
                                                                src="assets/img/profiles/avatar-27.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <ImageWithBasePath
                                                                className="border "
                                                                src="assets/img/profiles/avatar-11.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <ImageWithBasePath
                                                                className="border "
                                                                src="assets/img/profiles/avatar-12.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex items-center">
                                                        <div className="rating-select me-1">
                                                            <Link to="#">
                                                                <i className="ti ti-star" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="#"
                                                                className="text-gray-900"
                                                                data-dropdown-toggle="tableone-dropdown"
                                                            >
                                                                <i className="ti ti-dots ms-1" />
                                                            </Link>
                                                            <ul
                                                                id="tableone-dropdown"
                                                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                                            >
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                        data-modal-target="delete_modal"
                                                                        data-modal-toggle="delete_modal"
                                                                    >
                                                                        <i className="ti ti-trash me-2" />
                                                                        Permanent Delete
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Restore File
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white dark:even-bg-white">
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex justify-start items-center file-name-icon">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center "
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/file-02.svg"
                                                                className="img-fluid w-[20px] h-[20px]"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <div className="ms-2">
                                                            <p className="text-gray-900 font-medium  mb-0">
                                                                <Link to="#">Sophie Headrick</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">7.4 MB</td>
                                                <td className="px-5 py-2.5 text-gray-500">PDF</td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <p className="text-gray-900 mb-0">Jan 8, 2025</p>
                                                    <span>08:20:13 PM</span>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded">
                                                            <ImageWithBasePath
                                                                className="border "
                                                                src="assets/img/profiles/avatar-15.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded">
                                                            <ImageWithBasePath
                                                                className="border "
                                                                src="assets/img/profiles/avatar-16.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex items-center">
                                                        <div className="rating-select me-2">
                                                            <Link to="#">
                                                                <i className="ti ti-star" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="#"
                                                                className="text-gray-900"
                                                                data-dropdown-toggle="tabletwo-dropdown"
                                                            >
                                                                <i className="ti ti-dots ms-1" />
                                                            </Link>
                                                            <ul
                                                                id="tabletwo-dropdown"
                                                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                                            >
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                        data-modal-target="delete_modal"
                                                                        data-modal-toggle="delete_modal"
                                                                    >
                                                                        <i className="ti ti-trash me-2" />
                                                                        Permanent Delete
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Restore File
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white dark:even-bg-white">
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex justify-start items-center file-name-icon">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center "
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/file-03.svg"
                                                                className="img-fluid w-[20px] h-[20px]"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <div className="ms-2">
                                                            <p className="text-gray-900 font-medium  mb-0">
                                                                <Link to="#">Gallery</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">6.1 MB</td>
                                                <td className="px-5 py-2.5 text-gray-500">Image</td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <p className="text-gray-900 mb-0">Aug 6, 2025</p>
                                                    <span>04:10:12 PM</span>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-02.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-03.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-05.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded rounded-full bg-primary">
                                                            <span className="rounded-full">+1</span>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex items-center">
                                                        <div className="rating-select me-2">
                                                            <Link to="#">
                                                                <i className="ti ti-star" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="#"
                                                                className="text-gray-900"
                                                                data-dropdown-toggle="tablethree-dropdown"
                                                            >
                                                                <i className="ti ti-dots ms-1" />
                                                            </Link>
                                                            <ul
                                                                id="tablethree-dropdown"
                                                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                                            >
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                        data-modal-target="delete_modal"
                                                                        data-modal-toggle="delete_modal"
                                                                    >
                                                                        <i className="ti ti-trash me-2" />
                                                                        Permanent Delete
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Restore File
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white dark:even-bg-white">
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex justify-start items-center file-name-icon">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/file-04.svg"
                                                                className="img-fluid w-[20px] h-[20px]"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <div className="ms-2">
                                                            <p className="text-gray-900 font-medium  mb-0">
                                                                <Link to="#">Doris Crowley</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">5.2 MB</td>
                                                <td className="px-5 py-2.5 text-gray-500">Folder</td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <p className="text-gray-900 mb-0">Jan 6, 2025</p>
                                                    <span>03:40:14 PM</span>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-06.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-10.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-15.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex items-center">
                                                        <div className="rating-select me-2">
                                                            <Link to="#">
                                                                <i className="ti ti-star" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="#"
                                                                className="text-gray-900"
                                                                data-dropdown-toggle="tablefour-dropdown"
                                                            >
                                                                <i className="ti ti-dots ms-1" />
                                                            </Link>
                                                            <ul
                                                                id="tablefour-dropdown"
                                                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                                            >
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                        data-modal-target="delete_modal"
                                                                        data-modal-toggle="delete_modal"
                                                                    >
                                                                        <i className="ti ti-trash me-2" />
                                                                        Permanent Delete
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Restore File
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="even:bg-white dark:even-bg-white">
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex justify-start items-center file-name-icon">
                                                        <Link
                                                            to="#"
                                                            className="avatar avatar-md avatar-rounded  bg-light flex justify-center items-center"
                                                        >
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/file-05.svg"
                                                                className="img-fluid w-[20px] h-[20px]"
                                                                alt="img"
                                                            />
                                                        </Link>
                                                        <div className="ms-2">
                                                            <p className="text-gray-900 font-medium  mb-0">
                                                                <Link to="#">Cheat_codez</Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">8 MB</td>
                                                <td className="px-5 py-2.5 text-gray-500">Xml</td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <p className="text-gray-900 mb-0">Oct 12, 2025</p>
                                                    <span>05:00:14 PM</span>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="avatar-list-stacked avatar-group-sm">
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-04.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-11.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-14.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                        <span className="avatar avatar-rounded border-0">
                                                            <ImageWithBasePath
                                                                src="assets/img/profiles/avatar-15.jpg"
                                                                alt="img"
                                                            />
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-2.5 text-gray-500">
                                                    <div className="flex items-center">
                                                        <div className="rating-select me-2">
                                                            <Link to="#">
                                                                <i className="ti ti-star" />
                                                            </Link>
                                                        </div>
                                                        <div>
                                                            <Link
                                                                to="#"
                                                                className="text-gray-900"
                                                                data-dropdown-toggle="tablefive-dropdown"
                                                            >
                                                                <i className="ti ti-dots ms-1" />
                                                            </Link>
                                                            <ul
                                                                id="tablefive-dropdown"
                                                                className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                                                            >
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                        data-modal-target="delete_modal"
                                                                        data-modal-toggle="delete_modal"
                                                                    >
                                                                        <i className="ti ti-trash me-2" />
                                                                        Permanent Delete
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        to="#"
                                                                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                    >
                                                                        <i className="ti ti-edit-circle me-2" />
                                                                        Restore File
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                {/* start Create Folder */}
                <div
                    id="create_folder"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                >
                    <div className="relative p-4 w-full max-w-[500px] max-h-full">
                        <div className="relative bg-white rounded-defaultradius">
                            <div className="flex items-center justify-between p-4 border-b border-borderColor">
                                <div className="flex item-center gap-2">
                                    <h5 className="font-bold text-[18px]">Create Folder</h5>
                                </div>
                                <button
                                    type="button"
                                    className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                                    data-modal-hide="create_folder"
                                >
                                    <i className="ti ti-x" />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <form>
                                    <div className="mb-4">
                                        <label className="form-label">Folder Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
                                <button
                                    type="button"
                                    data-modal-hide="create_folder"
                                    className="btn btn-light"
                                >
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Add New Folder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end edit call modal */}
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
                                    <Link
                                        to="#"
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
                {/* start Add Memnber Folder */}
                <div
                    id="add_member"
                    className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
                >
                    <div className="relative p-4 w-full max-w-[500px] max-h-full">
                        <div className="relative bg-white rounded-defaultradius">
                            <div className="flex items-center justify-between p-4 border-b border-borderColor">
                                <div className="flex item-center gap-2">
                                    <h5 className="font-bold text-[18px]">Add Members</h5>
                                </div>
                                <button
                                    type="button"
                                    className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                                    data-modal-hide="add_member"
                                >
                                    <i className="ti ti-x" />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <form>
                                    <div className="relative mb-4 w-full">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                                            <i className="ti ti-search" />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="pl-9 w-full pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                                        />
                                    </div>
                                    <ul className="space-y-3 max-h-64 gap-4 overflow-y-auto">
                                        <li className="mb-3">
                                            <label className="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                                                <span className="flex items-center space-x-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/users/user-06.jpg"
                                                        alt="Elizabeth"
                                                        className="h-6 w-6 rounded-full"
                                                    />
                                                    <span>Elizabeth Morgan</span>
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                />
                                            </label>
                                        </li>
                                        <li className="mb-3">
                                            <label className="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                                                <span className="flex items-center space-x-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/users/user-40.jpg"
                                                        alt="Katherine"
                                                        className="h-6 w-6 rounded-full"
                                                    />
                                                    <span>Katherine Brooks</span>
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                />
                                            </label>
                                        </li>
                                        <li className="mb-3">
                                            <label className="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                                                <span className="flex items-center space-x-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/users/user-05.jpg"
                                                        alt="Katherine"
                                                        className="h-6 w-6 rounded-full"
                                                    />
                                                    <span>Sophia Lopez</span>
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                />
                                            </label>
                                        </li>
                                        <li className="mb-3">
                                            <label className="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                                                <span className="flex items-center space-x-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/users/user-10.jpg"
                                                        alt="Katherine"
                                                        className="h-6 w-6 rounded-full"
                                                    />
                                                    <span>John Michael</span>
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                />
                                            </label>
                                        </li>
                                        <li className="mb-3">
                                            <label className="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                                                <span className="flex items-center space-x-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/users/user-15.jpg"
                                                        alt="Katherine"
                                                        className="h-6 w-6 rounded-full"
                                                    />
                                                    <span>Natalie Brooks</span>
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                />
                                            </label>
                                        </li>
                                        <li>
                                            <label className="flex items-center justify-between space-x-2 text-gray-700 cursor-pointer">
                                                <span className="flex items-center space-x-2">
                                                    <ImageWithBasePath
                                                        src="assets/img/users/user-01.jpg"
                                                        alt="Katherine"
                                                        className="h-6 w-6 rounded-full"
                                                    />
                                                    <span>William Turner</span>
                                                </span>
                                                <input
                                                    type="checkbox"
                                                    className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                />
                                            </label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end edit call modal */}
                {/* Start Preview Offcanvs */}
                <div
                    id="offcanvas_add2"
                    className="fixed top-0 right-0 z-[9999] h-screen overflow-y-auto transition-transform translate-x-full bg-white w-100 dark:bg-gray-800"
                    tabIndex={-1}
                >
                    <div className="flex items-center justify-between bg-dark p-4">
                        <div>
                            <h4
                                className="mb-1 text-white"
                                data-drawer-target="offcanvas_add2"
                                data-drawer-show="offcanvas_add2"
                                aria-controls="offcanvas_add2"
                                data-drawer-placement="right"
                            >
                                Preview
                            </h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <Link to="#" className="flex items-center justify-center me-3">
                                <i className="ti ti-star-filled filled text-warning" />
                            </Link>
                            <Link
                                to="#"
                                className="flex items-center justify-center text-white me-3"
                            >
                                <i className="ti ti-trash" />
                            </Link>
                            <Link
                                to="#"
                                className="custom-btn-close text-white"
                                data-drawer-hide="offcanvas_add2"
                                aria-controls="offcanvas_add2"
                            >
                                <i className="ti ti-x" />
                            </Link>
                        </div>
                    </div>
                    <div className="offcanvas-body p-0">
                        <div className="bg-light document-wrap text-center p-5">
                            <div className="mb-2 flex justify-center">
                                <ImageWithBasePath src="assets/img/icons/pdf-icon.svg" alt="icon" />
                            </div>
                            <h6 className="mb-1">
                                Document Final Proof Read
                                <span className="badge bg-warning font-normal text-[12px] text-white ms-2">
                                    2.4 GB
                                </span>
                            </h6>
                            <p>Last Accessed on 15 Mar 2025, 08:15:23 PM</p>
                        </div>
                        <div className="preview-content p-4">
                            <h6 className="mb-3">File Info</h6>
                            <div className="border rounded flex items-center justify-between p-2 pb-0 gx-2 mb-4">
                                <div className="text-center mb-2 border-r pe-5">
                                    <p className="text-[12px] mb-0">File Type</p>
                                    <p className="text-dark mb-0">PDF</p>
                                </div>
                                <div className="text-center mb-2 border-r pe-5">
                                    <p className="text-[12px] mb-0">Created on</p>
                                    <p className="text-dark table-nowrap mb-0">22 Feb 2025, 08:30 PM</p>
                                </div>
                                <div className="text-center mb-2 border-0">
                                    <p className="text-[12px] mb-0">Location</p>
                                    <p className="text-dark mb-0">Drive</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6 className="mb-2 fw-medium">Description</h6>
                                <div className="editor pages-editor" />
                            </div>
                            <h6 className="mb-3">Recent Activity</h6>
                            <div className="card shadow-0 border border-borderColor rounded mb-5">
                                <div className="card-body p-4 pb-0">
                                    <h6 className="mb-3 text-[16px]">Today</h6>
                                    <ul className="recent-activity mb-3">
                                        <li className="flex mb-4 flex-wrap gap-3 relative">
                                            <span className="avatar avatar-rounded avatar-lg">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2 flex-1">
                                                <p className="mb-0">
                                                    <span className="text-gray-900">Mercy</span> Added New File
                                                    in <span className="text-gray-900">Drive</span>
                                                </p>
                                                <p className="mb-0">05:22 PM</p>
                                                <div className="bg-light rounded p-2 flex items-center justify-between mt-2 flex-1">
                                                    <div className="flex items-center">
                                                        <i className="ti ti-video text-gray-900 text-[16px]" />
                                                        <p className="ms-2">All_files.mp4</p>
                                                    </div>
                                                    <span className="text-[12px]">8.2 MB</span>
                                                </div>
                                            </div>
                                            <span className="absolute border-dashed border border-1 border-borderColor w-[45px] rotate-90 top-[56px] left-[-5px] z-0" />
                                        </li>
                                        <li className="flex mb-4 flex-wrap gap-3 relative">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-15.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="mb-0">
                                                    <span className="text-gray-900">Druman</span> Added New File
                                                    in <span className="text-gray-900">ROOT FOLDER</span>
                                                </p>
                                                <p className="mb-0">05:23 PM</p>
                                                <div className="bg-light rounded p-2 flex items-center justify-between mt-2">
                                                    <div className="flex items-center">
                                                        <i className="ti ti-photo text-gray-900 text-[16px]" />
                                                        <p className="ms-2">WebsiteBackupScreen.png</p>
                                                    </div>
                                                    <span className="text-[12px]">3.2 MB</span>
                                                </div>
                                                <div className="bg-light rounded p-2 flex items-center justify-between mt-2">
                                                    <div className="flex items-center">
                                                        <i className="ti ti-file-zip text-gray-900 text-[16px]" />
                                                        <p className="ms-2">Finaldraft.zip</p>
                                                    </div>
                                                    <span className="text-[12px]">4 MB</span>
                                                </div>
                                                <div className="bg-light rounded p-2 flex items-center justify-between mt-1">
                                                    <div className="flex items-center">
                                                        <i className="ti ti-photo text-gray-900 text-[16px]" />
                                                        <p className="ms-2">Photo.jpg</p>
                                                    </div>
                                                    <span className="text-[12px]">6.5 MB</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 className="mb-3">28 Jan 2025</h6>
                                    <ul className="recent-activity mb-3">
                                        <li className="flex mb-4 flex-wrap gap-3 relative">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-12.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="mb-0">
                                                    <span className="text-gray-900">Mercy</span> Added New File
                                                    in <span className="text-gray-900">Personal Assets</span>
                                                </p>
                                                <p className="mb-0">05:22 PM</p>
                                                <div className="bg-light rounded p-2 flex items-center justify-between mt-2">
                                                    <div className="flex items-center">
                                                        <i className="ti ti-photo text-gray-900 text-[16px]" />
                                                        <p className="ms-2">Photo_12.jpg</p>
                                                    </div>
                                                    <span className="text-[12px]">6.2 MB</span>
                                                </div>
                                            </div>
                                            <span className="absolute border-dashed border border-1 border-borderColor w-[45px] rotate-90 top-[56px] left-[-5px] z-0" />
                                        </li>
                                        <li className="flex mb-4 flex-wrap gap-3">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-25.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2 flex-grow-1">
                                                <p className="mb-0">
                                                    <span className="text-gray-900">Jackson</span> Added New
                                                    File in <span className="text-gray-900">Drive</span>
                                                </p>
                                                <p className="mb-0">05:23 PM</p>
                                                <div className="bg-light rounded p-2 flex items-center justify-between mt-2">
                                                    <div className="flex items-center">
                                                        <i className="ti ti-photo text-gray-900 text-[16px]" />
                                                        <p className="ms-2">Photo.jpg</p>
                                                    </div>
                                                    <span className="text-[12px]">15.5 MB</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <h6 className="mb-3">Members</h6>
                                <Link
                                    to="#"
                                    className="text-[12px] mb-3 text-danger"
                                    data-modal-target="add_member"
                                    data-modal-toggle="add_member"
                                >
                                    Add Members
                                </Link>
                            </div>
                            <div className="card shadow-0 border border-borderColor rounded mb-0">
                                <div className="card-body p-5 pb-0">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-16.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="font-medium">Anthony Lewis</h6>
                                                <p className="text-[12px]">Finance</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="user-icon mb-2 p-1 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-user-x text-[16px]" />
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-06.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="font-medium">Harvey Smith</h6>
                                                <p className="text-[12px]">Developer</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="user-icon mb-2 p-1 rounded hover:bg-dark-transparent "
                                        >
                                            <i className="ti ti-user-x text-[16px]" />
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="font-medium">Stephan Peralt</h6>
                                                <p className="text-[12px]">Executive Officer</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="user-icon mb-2 p-1 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-user-x text-[16px]" />
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-26.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="font-medium">Doglas Martini</h6>
                                                <p className="text-[12px]">Manager</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="user-icon mb-2 p-1 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-user-x text-[16px]" />
                                        </Link>
                                    </div>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    className="rounded-full"
                                                    alt="img"
                                                />
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="font-medium">Linda Ray</h6>
                                                <p className="text-[12px]">Finance</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="user-icon mb-2 p-1 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-user-x text-[16px]" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Preview Offcanvs */}
            </>

        </>

    )
}

export default FileManager