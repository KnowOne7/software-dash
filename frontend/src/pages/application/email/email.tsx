import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"
import { useState } from "react"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react"
import CommonTagInputs from "../../../components/common-tag-input/commonTagInputs"


const Email = () => {
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    const [showMore3, setShowMore3] = useState(false);
    const [show, setShow] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    const handleTagsChange = (newTags: string[]) => {
        setTags(newTags);
    };


    const handleToggle = () => {
        setShowMore((prev) => !prev);
    };
    const handleToggle2 = () => {
        setShowMore2((prev) => !prev);
    };
    const handleToggle3 = () => {
        setShowMore3((prev) => !prev);
    };
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-0">
                    <div className="md:flex">
                        <OverlayScrollbarsComponent style={{ height: "calc(100vh - 56px)" }} className="email-sidebar max-w-[300px] border-r border-b border-borderColor">
                            <div className="active slimscroll h-full">
                                <div className="slimscroll-active-sidebar">
                                    <div className="p-4">
                                        <div className="shadow-md bg-white rounded p-2 mb-4">
                                            <div className="flex items-center">
                                                <Link
                                                    to="#"
                                                    className="w-8 h-8 flex flex-shrink-0 me-2"
                                                >
                                                    <ImageWithBasePath
                                                        src="assets/img/profiles/avatar-02.jpg"
                                                        className="rounded-full"
                                                        alt="Img"
                                                    />
                                                </Link>
                                                <div>
                                                    <h6 className="mb-1">
                                                        <Link to="#">James Hong</Link>
                                                    </h6>
                                                    <p>jnh343@example.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="btn bg-primary w-full text-white text-center"
                                            id="compose_mail"
                                            onClick={() => setShow(true)}
                                        >
                                            <i className="ti ti-edit me-2" />
                                            Compose
                                        </Link>
                                        <div className="mt-4">
                                            <h5 className="mb-2">Emails</h5>
                                            <div className="block mb-4 pb-4 border-b border-borderColor email-tags">
                                                <Link
                                                    to={all_routes.email}
                                                    className="flex items-center justify-between p-2 text-gray-900 rounded bg-dark-transparent hover:bg-dark-transparent active"
                                                >
                                                    <span className="flex items-center font-medium">
                                                        <i className="ti ti-inbox text-gray me-2" />
                                                        Inbox
                                                    </span>
                                                    <span className="bg-danger rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">
                                                        56
                                                    </span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent"
                                                >
                                                    <span className="flex items-center font-medium">
                                                        <i className="ti ti-star text-gray me-2" />
                                                        Starred
                                                    </span>
                                                    <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                        46
                                                    </span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent"
                                                >
                                                    <span className="flex items-center font-medium">
                                                        <i className="ti ti-rocket text-gray me-2" />
                                                        Sent
                                                    </span>
                                                    <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                        14
                                                    </span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent"
                                                >
                                                    <span className="flex items-center font-medium">
                                                        <i className="ti ti-file text-gray me-2" />
                                                        Drafts
                                                    </span>
                                                    <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                        12
                                                    </span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent"
                                                >
                                                    <span className="flex items-center font-medium">
                                                        <i className="ti ti-trash text-gray me-2" />
                                                        Deleted
                                                    </span>
                                                    <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                        08
                                                    </span>
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent"
                                                >
                                                    <span className="flex items-center font-medium">
                                                        <i className="ti ti-info-octagon text-gray me-2" />
                                                        Spam
                                                    </span>
                                                    <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                        0
                                                    </span>
                                                </Link>
                                                <div>
                                                    <div className="more-menu"
                                                        style={{
                                                            display: showMore ? "block" : "none",
                                                            marginTop: "10px",
                                                        }}>
                                                        <Link
                                                            to="#"
                                                            className="flex items-center justify-between text-gray-900 p-2 rounded hover:bg-dark-transparent"
                                                        >
                                                            <span className="flex items-center font-medium">
                                                                <i className="ti ti-location-up text-gray me-2" />
                                                                Important
                                                            </span>
                                                            <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                                12
                                                            </span>
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="flex items-center justify-between text-gray-900 p-2 rounded hover:bg-dark-transparent"
                                                        >
                                                            <span className="flex items-center font-medium">
                                                                <i className="ti ti-transition-top text-gray me-2" />
                                                                All Emails
                                                            </span>
                                                            <span className="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">
                                                                34
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="view-all mt-2">
                                                        <Link
                                                            to="#"
                                                            onClick={handleToggle}
                                                            className="viewall-button font-medium"
                                                        >
                                                            <span>{`${showMore ? "Less" : "Show More"}`}</span>
                                                            <i className="fa fa-chevron-down fs-10 ms-2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b border-borderColor mb-4 pb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5>Labels</h5>
                                                <Link to="#">
                                                    <i className="ti ti-square-rounded-plus-filled text-primary fs-16" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-square-rounded text-success me-2" />
                                                    Team Events
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-square-rounded text-warning me-2" />
                                                    Work
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-square-rounded text-danger me-2" />
                                                    External
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-square-rounded text-skyblue me-2" />
                                                    Projects
                                                </Link>
                                                <div>
                                                    <div className="more-menu-2"
                                                        style={{
                                                            display: showMore2 ? "block" : "none",
                                                            marginTop: "10px",
                                                        }}
                                                    >
                                                        <Link
                                                            to="#"
                                                            className="font-medium flex items-center text-dark py-1"
                                                        >
                                                            <i className="ti ti-square-rounded text-purple me-2" />
                                                            Applications
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="font-medium flex items-center text-dark py-1"
                                                        >
                                                            <i className="ti ti-square-rounded text-info me-2" />
                                                            Desgin
                                                        </Link>
                                                    </div>
                                                    <div className="view-all mt-2">
                                                        <Link
                                                            to="#"
                                                            className="viewall-button-2 font-medium"
                                                            onClick={handleToggle2}
                                                        >
                                                            <span>{`${showMore2 ? "Less" : "Show More"}`}</span>
                                                            <i className="fa fa-chevron-down fs-10 ms-2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-b border-borderColor mb-4 pb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5>Folders</h5>
                                                <Link to="#">
                                                    <i className="ti ti-square-rounded-plus-filled text-primary fs-16" />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-folder-filled text-danger me-2" />
                                                    Projects
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-folder-filled text-warning me-2" />
                                                    Personal
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="font-medium flex items-center text-dark py-1"
                                                >
                                                    <i className="ti ti-folder-filled text-success me-2" />
                                                    Finance
                                                </Link>
                                                <div>
                                                    <div className="more-menu-3"
                                                        style={{
                                                            display: showMore3 ? "block" : "none",
                                                            marginTop: "10px",
                                                        }}>
                                                        <Link
                                                            to="#"
                                                            className="font-medium flex items-center text-dark py-1"
                                                        >
                                                            <i className="ti ti-folder-filled text-info me-2" />
                                                            Projects
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            className="font-medium flex items-center text-dark py-1"
                                                        >
                                                            <i className="ti ti-folder-filled text-primary me-2" />
                                                            Personal
                                                        </Link>
                                                    </div>
                                                    <div className="view-all mt-2">
                                                        <Link
                                                            to="#"
                                                            className="viewall-button-3 font-medium"
                                                            onClick={handleToggle3}
                                                        >
                                                            <span>{`${showMore3 ? "Less" : "Show More"}`}</span>
                                                            <i className="fa fa-chevron-down fs-10 ms-2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-dark rounded text-center relative z-[1] p-4">
                                            <span className="w-11 h-11 mx-auto rounded-full flex items-center justify-center bg-white mb-2">
                                                <i className="ti ti-alert-triangle text-dark" />
                                            </span>
                                            <h6 className="text-white mb-3">
                                                Enjoy Unlimited Access on a small price monthly.
                                            </h6>
                                            <Link
                                                to="#"
                                                className="btn bg-white text-gray-900"
                                            >
                                                Upgrade Now <i className="ti ti-arrow-right" />
                                            </Link>
                                            <div className="box-bg">
                                                <span className="absolute top-0 right-0 z-[-1]">
                                                    <ImageWithBasePath src="assets/img/bg/email-bg-01.png" alt="Img" />
                                                </span>
                                                <span className="absolute left-0 bottom-0 z-[-1]">
                                                    <ImageWithBasePath src="assets/img/bg/email-bg-02.png" alt="Img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OverlayScrollbarsComponent>
                        <OverlayScrollbarsComponent style={{ height: "calc(100vh - 56px)" }} className="bg-white flex-1 border-b border-borderColor mail-notifications">
                            <div className="active slimscroll h-full">
                                <div className="slimscroll-active-sidebar">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between flex-wrap gap-y-3">
                                            <div>
                                                <h5 className="mb-1">Inbox</h5>
                                                <div className="flex items-center">
                                                    <span>2345 Emails</span>
                                                    <i className="ti ti-point-filled text-primary mx-1" />
                                                    <span>56 Unread</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="relative input-icon me-3">
                                                    <span className="input-icon-addon absolute left-[10px] top-[10px] text-gray-400">
                                                        <i className="ti ti-search" />
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] ps-8 placeholder:text-gray-400"
                                                        placeholder="Search Email"
                                                    />
                                                </div>
                                                <div className="flex items-center">
                                                    <Link
                                                        to="#"
                                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                                    >
                                                        <i className="ti ti-filter-edit" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                                    >
                                                        <i className="ti ti-settings" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                                    >
                                                        <i className="ti ti-refresh" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group list-group-flush mails-list">
                                        <div className="list-group-item border-b p-4 border-borderColor border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-11 h-11 flex items-center justify-center text-white bg-purple rounded-full me-2"
                                                    >
                                                        <span className="avatar-title">CD</span>
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Justin Lapointe</Link>
                                                                </h6>
                                                                <span className="font-semibold">
                                                                    Client Dashboard
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown1"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown1"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-success" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>It seems that recipients are receiving...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent me-2">
                                                        <i className="ti ti-folder-open me-2" />3
                                                    </span>
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent">
                                                        <i className="ti ti-photo me-2" />
                                                        +24
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span>
                                                        <i className="ti ti-star-filled text-warning" />
                                                    </span>
                                                    <span className="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2">
                                                        <i className="ti ti-square me-1" />
                                                        Projects
                                                    </span>
                                                    <Link
                                                        to="#"
                                                        className="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block"
                                                    >
                                                        +1
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-b p-4 border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-10 h-10 rounded-full me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-01.jpg"
                                                            className="rounded-full"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Rufana</Link>
                                                                </h6>
                                                                <span className="font-semibold">UI project</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown2"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown2"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>Regardless, you can usually expect an increase</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <Link to="#">
                                                    <ImageWithBasePath src="assets/img/icons/google-meet.svg" alt="Img" />
                                                </Link>
                                                <div className="flex items-center">
                                                    <span>
                                                        <i className="ti ti-star-filled text-warning" />
                                                    </span>
                                                    <span className="bg-primary-100 text-purple rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2">
                                                        <i className="ti ti-square me-1" />
                                                        Applications
                                                    </span>
                                                    <Link
                                                        to="#"
                                                        className="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block"
                                                    >
                                                        +1
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-b p-4 border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-10 h-10 rounded-full me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-03.jpg"
                                                            className="rounded-full"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Cameron Drake</Link>
                                                                </h6>
                                                                <span className="font-semibold">
                                                                    You’re missing
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown3"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown3"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>
                                                            Here are a few catchy email subject line
                                                            examples&nbsp;
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent fs-14">
                                                        <i className="ti ti-video me-2" />1
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span>
                                                        <i className="ti ti-star-filled text-warning" />
                                                    </span>
                                                    <span className="bg-danger-100 text-danger rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2">
                                                        <i className="ti ti-square me-1" />
                                                        External
                                                    </span>
                                                    <Link
                                                        to="#"
                                                        className="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block"
                                                    >
                                                        +1
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-b p-4 border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-10 h-10 rounded-full me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-04.jpg"
                                                            className="rounded-full"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Sean Hill</Link>
                                                                </h6>
                                                                <span className="font-semibold">
                                                                    How Have You Progressed
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown4"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown4"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>You can write effective retargeting subject</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent">
                                                        <i className="ti ti-photo me-2" />1
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="bg-success-100 text-success rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs">
                                                        <i className="ti ti-square me-1" />
                                                        Team Events
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-b p-4 border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-10 h-10 rounded-full me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-05.jpg"
                                                            className="rounded-full"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Kevin Alley</Link>
                                                                </h6>
                                                                <span className="font-semibold">
                                                                    Flash. Sale. Alert.
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown5"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown5"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>You can also use casual language,</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent">
                                                        <i className="ti ti-link me-2" />1
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="bg-danger-100 text-danger rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                        <i className="ti ti-square me-1" />
                                                        External
                                                    </span>
                                                    <Link
                                                        to="#"
                                                        className="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block"
                                                    >
                                                        +1
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-b p-4 border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-10 h-10 rounded-full me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-08.jpg"
                                                            className="rounded-full"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Linda Zimmer</Link>
                                                                </h6>
                                                                <span className="font-semibold">
                                                                    Products the celebs are
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown6"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown6"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>It seems that recipients are receiving...</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent">
                                                        <i className="ti ti-link me-2" />1
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="bg-warning-100 text-warning rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2">
                                                        <i className="ti ti-square me-1" />
                                                        Work
                                                    </span>
                                                    <Link
                                                        to="#"
                                                        className="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block"
                                                    >
                                                        +1
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item border-b p-4 border-borderColor">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-11 h-11 rounded-full flex items-center justify-center bg-success text-white me-2"
                                                    >
                                                        <span className="avatar-title">ER</span>
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Emly Reachel</Link>
                                                                </h6>
                                                                <span className="font-semibold">No Subject</span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown7"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown7"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>Announcing Fake Name Generator Premium</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent">
                                                        <i className="ti ti-folder-open me-2" />3
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs">
                                                        <i className="ti ti-square me-1" />
                                                        Projects
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item p-4">
                                            <div className="flex items-center mb-2">
                                                <div className="flex items-center me-3">
                                                    <input
                                                        className="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                                                        type="checkbox"
                                                    />
                                                </div>
                                                <div className="flex items-center flex-wrap gap-y-2 flex-1">
                                                    <Link
                                                        to={all_routes.emailReply}
                                                        className="w-10 h-10 rounded-full me-2"
                                                    >
                                                        <ImageWithBasePath
                                                            src="assets/img/profiles/avatar-07.jpg"
                                                            className="rounded-full"
                                                            alt="Img"
                                                        />
                                                    </Link>
                                                    <div className="flex-1">
                                                        <div className="flex items-start justify-between">
                                                            <div>
                                                                <h6 className="mb-1">
                                                                    <Link to={all_routes.emailReply}>Sean Hill</Link>
                                                                </h6>
                                                                <span className="font-semibold">
                                                                    You’re missing
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <div>
                                                                    <Link
                                                                        to="#"
                                                                        className="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                                                        data-dropdown-placement="bottom-end"
                                                                        data-dropdown-toggle="grid-dropdown8"
                                                                    >
                                                                        <i className="ti ti-dots" />
                                                                    </Link>
                                                                    <ul
                                                                        id="grid-dropdown8"
                                                                        className="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]"
                                                                    >
                                                                        <li>
                                                                            <Link
                                                                                to={all_routes.emailReply}
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Open Email
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Reply All
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Forward As Attachment
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mark As Unread
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move to Junk
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Mute
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Archive
                                                                            </Link>
                                                                        </li>
                                                                        <li>
                                                                            <Link
                                                                                to="#"
                                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                            >
                                                                                Move To
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <span>
                                                                    <i className="ti ti-point-filled text-danger" />
                                                                    3:13 PM
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <p>Regardless, you can usually expect an increase</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent me-2">
                                                        <i className="ti ti-folder-open me-2" />3
                                                    </span>
                                                    <span className="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent">
                                                        <i className="ti ti-photo me-2" />
                                                        +24
                                                    </span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span>
                                                        <i className="ti ti-star-filled text-warning" />
                                                    </span>
                                                    <span className="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2">
                                                        <i className="ti ti-square me-1" />
                                                        Applications
                                                    </span>
                                                    <Link
                                                        to="#"
                                                        className="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block"
                                                    >
                                                        +1
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OverlayScrollbarsComponent>
                    </div>
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
            <>
                {/* Compose Mail */}
                <div id="compose-view" className={show ? "show z-[9999]" : "hidden"}>
                    <div className="bg-white border-0 rounded compose-view max-w-[500px] w-full absolute right-[10px] bottom-[10px] me-10">
                        <div className="compose-header flex items-center justify-between bg-dark p-3">
                            <h5 className="text-white">Compose New Email</h5>
                            <div className="flex items-center">
                                <Link
                                    to="##"
                                    className="inline-flex me-2 text-white fs-16"
                                >
                                    <i className="ti ti-minus" />
                                </Link>
                                <Link
                                    to="#"
                                    className="inline-flex me-2 fs-16 text-white"
                                >
                                    <i className="ti ti-maximize" />
                                </Link>
                                <button
                                    type="button"
                                    className="btn-close custom-btn-close bg-transparent fs-16 text-white position-static"
                                    id="compose-close"
                                    onClick={() => setShow(false)}
                                >
                                    <i className="ti ti-x" />
                                </button>
                            </div>
                        </div>
                        <form>
                            <div className="p-3 relative pb-2 border-b">
                                <div className="tag-with-img flex items-center">
                                    <label className="form-label me-2">To</label>
                                    <CommonTagInputs
                                        initialTags={tags}
                                        onTagsChange={handleTagsChange}
                                    />
                                </div>
                                <div className="d-flex items-center email-cc absolute right-[10px] top-1/2 me-3">
                                    <Link to="#" className="inline-flex me-2">
                                        Cc
                                    </Link>
                                    <Link to="#" className="inline-flex">
                                        Bcc
                                    </Link>
                                </div>
                            </div>
                            <div className="p-3 border-b">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-borderColor w-full text-xs"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="mb-0">
                                    <textarea
                                        rows={7}
                                        className="block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-borderColor w-full text-xs"
                                        placeholder="Compose Email"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="p-3 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-paperclip" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-photo" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-link" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-pencil" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-mood-smile" />
                                    </Link>
                                </div>
                                <div className="flex items-center compose-footer">
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-calendar-repeat" />
                                    </Link>
                                    <Link
                                        to="#"
                                        className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                                    >
                                        <i className="ti ti-trash" />
                                    </Link>
                                    <button
                                        type="submit"
                                        className="btn btn-primary inline-flex items-center ms-2"
                                    >
                                        Send <i className="ti ti-arrow-right ms-2" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* /Compose Mail */}
                {show && <div className="modal-backdrop fade show"></div>}
            </>

        </>

    )
}

export default Email