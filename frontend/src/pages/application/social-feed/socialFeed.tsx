import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb";

const SocialFeed = () => {

    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-5">
                    {/* Page Header */}
                    <BreadcrumbHeader
                        title="Social Feed"
                        items={[
                            { label: "Home", href: all_routes.dealsDashboard },
                            { label: "Applications", href: "#" },
                            { label: "Social Feed" }, // last item has no link
                        ]}
                    />
                    {/* End Page Header */}
                    <div className="grid xl:grid-cols-12 gap-x-6">
                        {/* Start Left Sidebar */}
                        <div className="xl:col-span-3 theiaStickySidebar">
                            <div className="card border border-borderColor rounded bg-white filemanager-left-sidebar">
                                <div className="card-body p-5">
                                    <div className="bg-light rounded p-5 mb-4">
                                        <div className="text-center mb-4">
                                            <Link
                                                to="#"
                                                className="relative avatar size-[57.6px] inline-flex online avatar-rounded before:[content:''] before:unset"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/users/user-11.jpg"
                                                    className="size-[57.6px]"
                                                    alt="Img"
                                                />
                                                <span className="right-0 bottom-0 absolute  w-4 h-4 bg-success border-2 border-white  rounded-full" />
                                            </Link>
                                            <h6 className="mb-1">
                                                <Link to="#">James Hong </Link>
                                            </h6>
                                            <p className="text-[13px]">@James Hong324</p>
                                        </div>
                                        <div className="grid sm:grid-cols-2 gap-2">
                                            <div className="sm:col-span-1">
                                                <div className="rounded bg-white text-center p-2">
                                                    <h6 className="mb-1">89K</h6>
                                                    <p className="text-[12px]">Followers</p>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-1">
                                                <div className="rounded bg-white text-center p-2">
                                                    <h6 className="mb-1">45</h6>
                                                    <p className="text-[12px]">Follows</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <Link
                                            to="#"
                                            className="btn btn-primary inline-flex items-center justify-center w-full"
                                        >
                                            <i className="ti ti-circle-plus me-2" />
                                            Create Post
                                        </Link>
                                    </div>
                                    {/* submenu Item */}
                                    <div className="border-b border-borderColor pb-2 mb-4">
                                        <Link
                                            to="#"
                                            className="bg-light rounded text-dark flex align-center justify-between active font-medium p-2"
                                        >
                                            <span>
                                                <i className="ti ti-brand-feedly me-2" />
                                                All Feeds
                                            </span>
                                            <span className="w-6 h-6 bg-danger rounded-full text-white text-[10px] flex items-center justify-center">
                                                56
                                            </span>
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-mood-search me-2" />
                                            Explore
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-mail-check me-2" />
                                            Messages
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-list me-2" />
                                            Lists
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-bookmark me-2" />
                                            Bookmark
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-coffee me-2" />
                                            Marketplace
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center justify-between font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <span>
                                                <i className="ti ti-file-text me-2" />
                                                Files
                                            </span>
                                            <span className="w-6 h-6 bg-info rounded-full text-white text-[10px] flex items-center justify-center">
                                                14
                                            </span>
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-music me-2" />
                                            Media
                                        </Link>
                                        <Link
                                            to="#"
                                            className="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"
                                        >
                                            <i className="ti ti-user-share me-2" />
                                            Profile
                                        </Link>
                                    </div>
                                    <div>
                                        <div className="mb-4">
                                            <h6>Pages You Liked</h6>
                                        </div>
                                        <div>
                                            <Link
                                                to="#"
                                                className="font-medium flex items-center justify-between text-dark py-1 mb-2"
                                            >
                                                <span className="inline-flex items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/liked-page-01.svg"
                                                        className="me-2"
                                                        alt="Img"
                                                    />
                                                    Dribble
                                                </span>
                                                <span className="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary">
                                                    <i className="ti ti-thumb-down text-[12px]" />
                                                </span>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="font-medium flex items-center justify-between text-dark py-1 mb-2"
                                            >
                                                <span className="inline-flex items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/liked-page-02.svg"
                                                        className="me-2"
                                                        alt="Img"
                                                    />
                                                    UI/UX Designs
                                                </span>
                                                <span className="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary">
                                                    <i className="ti ti-thumb-down text-[12px]" />
                                                </span>
                                            </Link>
                                            <Link
                                                to="#"
                                                className="font-medium flex items-center justify-between text-dark py-1"
                                            >
                                                <span className="inline-flex items-center">
                                                    <ImageWithBasePath
                                                        src="assets/img/icons/liked-page-03.svg"
                                                        className="me-2"
                                                        alt="Img"
                                                    />
                                                    Figma Update
                                                </span>
                                                <span className="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary">
                                                    <i className="ti ti-thumb-down text-[12px]" />
                                                </span>
                                            </Link>
                                            <div>
                                                <div className="more-menu-3">
                                                    <Link
                                                        to="#"
                                                        className="font-medium flex items-center justify-between text-dark py-1 mb-2"
                                                    >
                                                        <span className="inline-flex items-center">
                                                            <ImageWithBasePath
                                                                src="assets/img/icons/liked-page-04.svg"
                                                                className="me-2"
                                                                alt="Img"
                                                            />
                                                            I Am Techie
                                                        </span>
                                                        <span className="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary">
                                                            <i className="ti ti-thumb-down text-[12px]" />
                                                        </span>
                                                    </Link>
                                                </div>
                                                <div className="view-all mt-2">
                                                    <Link
                                                        to="#"
                                                        className="viewall-button-3 text-dark font-medium"
                                                    >
                                                        <span>Show More</span>
                                                        <i className="fa fa-chevron-down text-[10px] ms-2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Left Sidebar */}
                        {/* Start middle content */}
                        <div className="xl:col-span-6">
                            <div>
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-body p-5">
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label text-[16px]">
                                                    Create Post
                                                </label>
                                                <div className="relative">
                                                    <textarea
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full placeholder:text-gray-400"
                                                        rows={3}
                                                        placeholder="What's on your mind?"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between flex-wrap gap-x-3">
                                                <div className="flex items-center">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-photo text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-link text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-paperclip text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-video text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-hash text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-map-pin-heart text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-mood-smile text-[16px]" />
                                                    </Link>
                                                </div>
                                                <div className="flex items-center">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-refresh text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-trash text-[16px]" />
                                                    </Link>
                                                    <Link
                                                        to="#"
                                                        className="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"
                                                    >
                                                        <i className="ti ti-world text-[16px]" />
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary inline-flex items-center ms-2"
                                                    >
                                                        <i className="ti ti-circle-plus text-[16px] me-2" />
                                                        Share Post
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-body p-5">
                                        <div className="flex items-center mb-4">
                                            <h6 className="mb-0">Popular Channels</h6>
                                        </div>
                                        <div className="flex flex-wrap gap-3 items-center justify-between">
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-01.svg"
                                                    alt="channel-01"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-02.svg"
                                                    alt="channel-02"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-03.svg"
                                                    alt="channel-03"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-04.svg"
                                                    alt="channel-04"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-05.svg"
                                                    alt="channel-05"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-06.svg"
                                                    alt="channel-06"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-07.svg"
                                                    alt="channel-07"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <ImageWithBasePath
                                                    src="assets/img/icons/channel-08.svg"
                                                    alt="channel-08"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-header border-0 pb-0 p-5">
                                        <div className="flex items-center justify-between border-b border-borderColor flex-wrap gap-3 gap-x-3 pb-4">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <Link
                                                    to="#"
                                                    className="avatar size-[45px] avatar-rounded flex flex-shrink-0 me-2"
                                                >
                                                    <ImageWithBasePath src="assets/img/users/user-03.jpg" alt="Img" />
                                                </Link>
                                                <div>
                                                    <h6 className="mb-1">
                                                        <Link to="#">
                                                            Richard Smith{" "}
                                                            <i className="ti ti-circle-check-filled text-success" />
                                                        </Link>
                                                    </h6>
                                                    <p className="flex items-center">
                                                        <span className="text-info">@richard442</span>
                                                        <i className="ti ti-circle-filled text-[5px] mx-2" />
                                                        United Kingdom
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center flex-wrap gap-3">
                                                <p className="mb-0 text-dark">About 1 hr ago</p>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        data-dropdown-toggle="world-dropdown"
                                                    >
                                                        <i className="ti ti-world pe-1 text-dark" />
                                                        <i className="ti ti-chevron-down text-dark" />
                                                    </Link>
                                                    <ul
                                                        id="world-dropdown"
                                                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Private
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                High
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown">
                                                    <Link
                                                        to="#"
                                                        className="flex items-center justify-center text-gray-500 rounded-[5px]  hover:text-primary "
                                                        data-dropdown-toggle="feed-menu"
                                                        aria-expanded="true"
                                                    >
                                                        <i className="ti ti-dots-vertical" />
                                                    </Link>
                                                    <ul
                                                        id="feed-menu"
                                                        className="z-10 hidden bg-white  divide-gray-100 rounded-[5px] shadow w-40 dark:bg-gray-700 p-2"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent "
                                                            >
                                                                <i className="ti ti-edit me-2" />
                                                                Edit
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
                                                            >
                                                                <i className="ti ti-eye me-2" />
                                                                Hide Post
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
                                                            >
                                                                <i className="ti ti-report me-2" />
                                                                Report
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
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
                                    <div className="card-body p-5">
                                        <div className="mb-3">
                                            <p className="text-dark font-medium">
                                                "Believe in yourself and all that you are. Know that there
                                                is something inside you that is greater than any obstacle.
                                                <Link
                                                    to="#"
                                                    className="text-info link-hover"
                                                >
                                                    #MotivationMonday
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="text-info link-hover"
                                                >
                                                    #Inspiration
                                                </Link>
                                                🌟"
                                            </p>
                                        </div>
                                        <div className="mb-2">
                                            <ImageWithBasePath
                                                src="assets/img/social/social-feed-01.jpg"
                                                className="rounded-lg"
                                                alt="Img"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between gap-3 mb-3">
                                            <Link
                                                to="assets/img/social/gallery-big-01.jpg"
                                                data-fancybox="gallery"
                                                className="gallery-item relative"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/social/gallery-01.jpg"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </Link>
                                            <Link
                                                to="assets/img/social/gallery-big-02.jpg"
                                                data-fancybox="gallery"
                                                className="gallery-item"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/social/gallery-02.jpg"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </Link>
                                            <Link
                                                to="assets/img/social/gallery-big-03.jpg"
                                                data-fancybox="gallery"
                                                className="gallery-item"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/social/gallery-03.jpg"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </Link>
                                            <Link
                                                to="assets/img/social/gallery-big-04.jpg"
                                                data-fancybox="gallery"
                                                className="gallery-item"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/social/gallery-04.jpg"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </Link>
                                            <Link
                                                to="assets/img/social/gallery-big-01.jpg"
                                                data-fancybox="gallery"
                                                className="gallery-item"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/social/gallery-01.jpg"
                                                    className="rounded"
                                                    alt="img"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between flex-wrap gap-x-3 mb-4">
                                            <div className="flex items-center flex-wrap gap-x-3 gap-2">
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-heart me-2" />
                                                    340K Likes
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-message-dots me-2" />
                                                    45 Comments
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-share-3 me-2" />
                                                    28 Share
                                                </Link>
                                            </div>
                                            <div className="flex items-center">
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-heart-filled text-danger" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-share" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-message-star" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <Link
                                                to="#"
                                                className="avatar avatar-rounded me-2 flex-shrink-0"
                                            >
                                                <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user-11" />
                                            </Link>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Comments"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-header border-0 pb-0 p-5">
                                        <div className="flex items-center justify-between border-b border-borderColor gap-3 flex-wrap gap-x-3 pb-3">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <Link
                                                    to="#"
                                                    className="avatar avatar-lg flex avatar-rounded flex-shrink-0 me-2"
                                                >
                                                    <ImageWithBasePath src="assets/img/users/user-05.jpg" alt="user-05" />
                                                </Link>
                                                <div>
                                                    <h6 className="mb-1">
                                                        <Link to="#">
                                                            Jason Heier{" "}
                                                            <i className="ti ti-circle-check-filled text-success" />
                                                        </Link>
                                                    </h6>
                                                    <p className="flex items-center">
                                                        <span className="text-info">@jason118</span>
                                                        <i className="ti ti-circle-filled text-[5px] mx-2" />
                                                        United Kingdom
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 flex-wrap items-center">
                                                <p className="mb-0 text-dark">About 1 hr ago</p>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        data-dropdown-toggle="world-dropdownone"
                                                    >
                                                        <i className="ti ti-world pe-1 text-dark" />
                                                        <i className="ti ti-chevron-down text-dark" />
                                                    </Link>
                                                    <ul
                                                        id="world-dropdownone"
                                                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Private
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                High
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown">
                                                    <Link
                                                        to="#"
                                                        className="flex items-center justify-center text-gray-500 rounded-[5px]  hover:text-primary "
                                                        data-dropdown-toggle="feed-menu2"
                                                        aria-expanded="true"
                                                    >
                                                        <i className="ti ti-dots-vertical" />
                                                    </Link>
                                                    <ul
                                                        id="feed-menu2"
                                                        className="z-10 hidden bg-white  divide-gray-100 rounded-[5px] shadow w-40 dark:bg-gray-700 p-2"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent "
                                                            >
                                                                <i className="ti ti-edit me-2" />
                                                                Edit
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
                                                            >
                                                                <i className="ti ti-eye me-2" />
                                                                Hide Post
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
                                                            >
                                                                <i className="ti ti-report me-2" />
                                                                Report
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
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
                                    <div className="card-body p-5">
                                        <div className="mb-3">
                                            <p className="text-dark font-medium">
                                                Drinking water boosts skin health and beauty. Stay hydrated!
                                                <Link
                                                    to="#"
                                                    className="text-info link-hover"
                                                >
                                                    #HealthTips{" "}
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="text-info link-hover"
                                                >
                                                    {" "}
                                                    #Wellness
                                                </Link>
                                                💧
                                            </p>
                                        </div>
                                        <div className="card shadow-none mb-3">
                                            <div className="card-img card-img-hover border border-borderColor overflow-hidden rounded-0">
                                                <Link to="#" className="rounded-t ">
                                                    <ImageWithBasePath
                                                        src="assets/img/social/social-feed-02.jpg"
                                                        className="rounded-t"
                                                        alt="social-feed-02"
                                                    />
                                                </Link>
                                            </div>
                                            <div className="card-body border border-borderColor rounded-b p-2">
                                                <h6 className="mb-1 text-truncate">
                                                    <Link to="#">
                                                        Drinking water boosts skin health and beauty. Stay
                                                        hydrated!💧
                                                    </Link>
                                                </h6>
                                                <Link to="#">Health.com</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between flex-wrap gap-x-3">
                                            <div className="flex items-center flex-wrap gap-x-3 gap-2">
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-heart me-2" />
                                                    340K Likes
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-message-dots me-2" />
                                                    45 Comments
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-share-3 me-2" />
                                                    28 Share
                                                </Link>
                                            </div>
                                            <div className="flex items-center">
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-heart-filled text-danger" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-share" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-message-star" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                    <div className="card-header border-0 pb-0 p-5">
                                        <div className="flex items-center justify-between border-b border-borderColor flex-wrap gap-3 gap-x-3 pb-3">
                                            <div className="flex items-center flex-wrap gap-2">
                                                <span className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                                                    <ImageWithBasePath src="assets/img/users/user-04.jpg" alt="user-04" />
                                                </span>
                                                <div>
                                                    <h6 className="mb-1">
                                                        <Link to="#">
                                                            Sophie Headrick{" "}
                                                            <i className="ti ti-circle-check-filled text-success" />
                                                        </Link>
                                                    </h6>
                                                    <p className="flex items-center">
                                                        <span className="text-info">@sophie241</span>
                                                        <i className="ti ti-circle-filled text-[5px] mx-2" />
                                                        United Kingdom
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-3 items-center">
                                                <p className="mb-0 text-dark">About 1 hr ago</p>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        data-dropdown-toggle="world-dropdowntwo"
                                                    >
                                                        <i className="ti ti-world pe-1 text-dark" />
                                                        <i className="ti ti-chevron-down text-dark" />
                                                    </Link>
                                                    <ul
                                                        id="world-dropdowntwo"
                                                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Private
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                High
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown">
                                                    <Link
                                                        to="#"
                                                        className="flex items-center justify-center text-gray-500 rounded-[5px]  hover:text-primary "
                                                        data-dropdown-toggle="feed-menu3"
                                                        aria-expanded="true"
                                                    >
                                                        <i className="ti ti-dots-vertical" />
                                                    </Link>
                                                    <ul
                                                        id="feed-menu3"
                                                        className="z-10 hidden bg-white  divide-gray-100 rounded-[5px] shadow w-40 dark:bg-gray-700 p-2"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent "
                                                            >
                                                                <i className="ti ti-edit me-2" />
                                                                Edit
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
                                                            >
                                                                <i className="ti ti-eye me-2" />
                                                                Hide Post
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
                                                            >
                                                                <i className="ti ti-report me-2" />
                                                                Report
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"
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
                                    <div className="card-body p-5">
                                        <div className="mb-3">
                                            <p className="text-dark font-medium">
                                                Excited to announce the launch of our new product! Get yours
                                                now and enjoy a special discount.
                                                <Link
                                                    to="#"
                                                    className="text-info link-hover"
                                                >
                                                    #NewRelease{" "}
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="text-info link-hover"
                                                >
                                                    {" "}
                                                    #Innovation
                                                </Link>
                                                🎉
                                            </p>
                                        </div>
                                        <div className="mb-2">
                                            <ImageWithBasePath
                                                src="assets/img/social/social-feed-03.jpg"
                                                className="rounded-lg"
                                                alt="social-feed-03"
                                            />
                                        </div>
                                        <div className="flex items-center justify-between flex-wrap gap-x-3 mb-4">
                                            <div className="flex items-center flex-wrap gap-x-3 gap-2">
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-heart me-2" />
                                                    340K Likes
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-message-dots me-2" />
                                                    45 Comments
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900 hover:text-primary"
                                                >
                                                    <i className="ti ti-share-3 me-2" />
                                                    28 Share
                                                </Link>
                                            </div>
                                            <div className="flex items-center">
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-heart-filled text-danger" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-share" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-message-star" />
                                                </Link>
                                                <Link
                                                    to="#"
                                                    className="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"
                                                >
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-start mb-3">
                                            <Link
                                                to="#"
                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-02.jpg"
                                                    alt="avatar-02"
                                                />
                                            </Link>
                                            <div className="bg-light rounded-lg flex-fill p-3">
                                                <div className="flex items-center mb-1">
                                                    <h6>
                                                        <Link to="#">Frank Hoffman</Link>
                                                    </h6>
                                                    <span className="ms-2">12:45 PM</span>
                                                </div>
                                                <p className="mb-1">
                                                    Congratulations on the launch! I've been eagerly waiting
                                                    for this product, and the special discount makes it even
                                                    more exciting.
                                                </p>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900"
                                                >
                                                    <i className="ti ti-share-3 me-2" />
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-start mb-3 ms-4 ps-2">
                                            <Link
                                                to="#"
                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-01.jpg"
                                                    alt="avatar-01"
                                                />
                                            </Link>
                                            <div className="bg-light rounded-lg flex-fill p-3">
                                                <div className="flex items-center mb-1">
                                                    <h6>
                                                        <Link to="#">Sophie Headrick</Link>
                                                    </h6>
                                                    <span className="ms-2">12:45 PM</span>
                                                </div>
                                                <p className="mb-1">
                                                    Thank you so much for your enthusiasm and support!
                                                </p>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900"
                                                >
                                                    <i className="ti ti-share-3 me-2" />
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-start mb-3">
                                            <Link
                                                to="#"
                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/profiles/avatar-04.jpg"
                                                    alt="avatar-04"
                                                />
                                            </Link>
                                            <div className="bg-light rounded-lg flex-fill p-3">
                                                <div className="flex items-center mb-1">
                                                    <h6>
                                                        <Link to="#">Samuel Butler</Link>
                                                    </h6>
                                                    <span className="ms-2">12:40 PM</span>
                                                </div>
                                                <p className="mb-1">
                                                    So thrilled to see this product finally launched! I've
                                                    heard amazing things about it and am excited to see how it
                                                    lives up to the hype.
                                                </p>
                                                <Link
                                                    to="#"
                                                    className="inline-flex items-center text-gray-900"
                                                >
                                                    <i className="ti ti-share-3 me-2" />
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="view-all text-center mb-3">
                                                <Link
                                                    to="#"
                                                    className="viewall-button text-primary font-medium"
                                                >
                                                    <span>View All 200 Comments</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="avatar avatar-rounded me-2 flex flex-shrink-0">
                                                <ImageWithBasePath src="assets/img/users/user-11.jpg" alt="user-11" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Comments"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End middle content */}
                        {/* Start Right content */}
                        <div className="xl:col-span-3 theiaStickySidebar">
                            <div className="filemanager-left-sidebar">
                                {/* Item one */}
                                <div className="card card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-body p-5">
                                        <h6 className="mb-4">Peoples</h6>
                                        <ul
                                            className="flex w-full mb-4 gap-2 text-sm font-medium text-center"
                                            id="default-styled-tab1"
                                            data-tabs-toggle="#default-styled-tab-content3"
                                            data-tabs-active-classes="text-white bg-primary hover:text-primary border-primary"
                                            data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
                                            role="tablist"
                                        >
                                            <li className="flex-1" role="presentation">
                                                <button
                                                    className="inline-block py-2 btn w-full"
                                                    id="basic-tab1"
                                                    data-tabs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    General
                                                </button>
                                            </li>
                                            <li className="flex-1" role="presentation">
                                                <button
                                                    className="inline-block py-2 btn w-full"
                                                    id="dashboard-styled-tab1"
                                                    data-tabs-target="#pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Primary
                                                </button>
                                            </li>
                                        </ul>
                                        <div id="default-styled-tab-content3">
                                            {/* Item 1 */}
                                            <div className="hidden " id="pills-home" role="tabpanel">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-14.jpg"
                                                                    alt="avatar-14"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Anthony Lewis
                                                                    </Link>
                                                                    <i className="ti ti-circle-check-filled text-success ms-1" />
                                                                </h6>
                                                                <span className="text-[12px] block">
                                                                    United States
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-01.jpg"
                                                                    alt="user-01"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Harvey Smith
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Ukrain</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-33.jpg"
                                                                    alt="user-33"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Stephan Peralt
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Isreal</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-34.jpg"
                                                                    alt="user-34"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Doglas Martini
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Belgium</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-09.jpg"
                                                                    alt="user-09"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Brian Villalobos
                                                                    </Link>
                                                                    <i className="ti ti-circle-check-filled text-success ms-1" />
                                                                </h6>
                                                                <span className="text-[12px] block">
                                                                    United Kingdom
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-02.jpg"
                                                                    alt="user-02"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Linda Ray
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Argentina</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="btn border border-borderColor flex items-center justify-center w-full text-dark"
                                                    >
                                                        View All <i className="ti ti-arrow-right ms-2" />
                                                    </Link>
                                                </div>
                                            </div>
                                            {/* Item 2 */}
                                            <div className="hidden " id="pills-profile" role="tabpanel">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/profiles/avatar-11.jpg"
                                                                    alt="avatar-11"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Anthony Lewis
                                                                    </Link>
                                                                    <i className="ti ti-circle-check-filled text-success ms-1" />
                                                                </h6>
                                                                <span className="text-[12px] block">
                                                                    United States
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-12.jpg"
                                                                    alt="user-12"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Harvey Smith
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Ukrain</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-13.jpg"
                                                                    alt="user-13"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Stephan Peralt
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Isreal</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-14.jpg"
                                                                    alt="user-14"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Doglas Martini
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Belgium</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-15.jpg"
                                                                    alt="user-15"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Brian Villalobos
                                                                    </Link>
                                                                    <i className="ti ti-circle-check-filled text-success ms-1" />
                                                                </h6>
                                                                <span className="text-[12px] block">
                                                                    United Kingdom
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <div className="flex items-center">
                                                            <Link
                                                                to="#"
                                                                className="avatar avatar-rounded flex flex-shrink-0 me-2"
                                                            >
                                                                <ImageWithBasePath
                                                                    src="assets/img/users/user-16.jpg"
                                                                    alt="user-16"
                                                                />
                                                            </Link>
                                                            <div>
                                                                <h6 className="inline-flex items-center font-medium mb-1 text-[14px]">
                                                                    <Link
                                                                        to="#"
                                                                        className="hover:text-primary"
                                                                    >
                                                                        Linda Ray
                                                                    </Link>
                                                                </h6>
                                                                <span className="text-[12px] block">Argentina</span>
                                                            </div>
                                                        </div>
                                                        <Link
                                                            to="#"
                                                            className="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"
                                                        >
                                                            <i className="ti ti-user-x text-[12px]" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="btn border border-borderColor w-full text-dark flex items-center justify-center"
                                                    >
                                                        View All <i className="ti ti-arrow-right ms-2" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Item two */}
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-body p-5">
                                        <h6 className="mb-4">Saved Feeds</h6>
                                        <div className="bg-light-500 rounded p-2 mb-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <Link to="#" className="flex items-center">
                                                    <span>
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/feeds-01.svg"
                                                            className="me-2"
                                                            alt="feeds-01"
                                                        />
                                                    </span>
                                                    <p className="text-[13px] font-medium text-gray-900 hover:text-primary">
                                                        World Health
                                                    </p>
                                                </Link>
                                                <Link to="#">
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                            <p className="text-dark font-medium hover:text-primary">
                                                <Link to="#">
                                                    Retail investor party continues even as
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="bg-light-500 rounded p-2 mb-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <Link to="#" className="flex items-center">
                                                    <span>
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/feeds-02.svg"
                                                            className="me-2"
                                                            alt="feeds-02"
                                                        />
                                                    </span>
                                                    <p className="text-[13px] font-medium text-gray-900 hover:text-primary">
                                                        T3 Tech
                                                    </p>
                                                </Link>
                                                <Link to="#">
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                            <p className="text-dark font-medium hover:text-primary">
                                                <Link to="#">
                                                    Ipad Air (2020) vs Samsung Galaxy Tab
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="bg-light-500 rounded p-2 mb-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <Link to="#" className="flex items-center">
                                                    <span>
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/feeds-03.svg"
                                                            className="me-2"
                                                            alt="feeds-03"
                                                        />
                                                    </span>
                                                    <p className="text-[13px] font-medium text-gray-900 hover:text-primary">
                                                        Fstoppers
                                                    </p>
                                                </Link>
                                                <Link to="#">
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                            <p className="text-dark font-medium hover:text-primary">
                                                <Link to="#">
                                                    Beyond capital gains tax! Top 50 stock
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="bg-light-500 rounded p-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <Link to="#" className="flex items-center">
                                                    <span>
                                                        <ImageWithBasePath
                                                            src="assets/img/icons/feeds-04.svg"
                                                            className="me-2"
                                                            alt="feeds-04"
                                                        />
                                                    </span>
                                                    <p className="text-[13px] font-medium text-gray-900 hover:text-primary">
                                                        Evernote
                                                    </p>
                                                </Link>
                                                <Link to="#">
                                                    <i className="ti ti-bookmark-filled text-warning" />
                                                </Link>
                                            </div>
                                            <p className="text-dark font-medium hover:text-primary">
                                                <Link to="#">
                                                    Sony Just Destroyed the Competition
                                                </Link>
                                            </p>
                                        </div>
                                        <div className="mt-3">
                                            <Link
                                                to="#"
                                                className="btn btn-outline-light w-full border"
                                            >
                                                View All <i className="ti ti-arrow-right ms-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Item three */}
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-body p-5">
                                        <h6 className="mb-4">Trending Hastags</h6>
                                        <div className="d-flex items-center flex-wrap gap-1">
                                            <Link
                                                to="#"
                                                className="text-info inline-flex hover:text-primary"
                                            >
                                                #HealthTips
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-info inline-flex hover:text-primary"
                                            >
                                                #Wellness
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-info inline-flex hover:text-primary"
                                            >
                                                #Motivation
                                            </Link>
                                            <Link
                                                to="#"
                                                className="text-info inline-flex hover:text-primary"
                                            >
                                                #Inspiration{" "}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Item four */}
                                <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
                                    <div className="card-body p-5">
                                        <div className="card-img card-img-hover overflow-hidden mb-4">
                                            <Link to="#" className="rounded">
                                                <ImageWithBasePath
                                                    src="assets/img/social/social-feed-04.jpg"
                                                    className="rounded"
                                                    alt="social-feed-04"
                                                />
                                            </Link>
                                        </div>
                                        <h6 className="text-center text-[14px]">
                                            <Link to="#">
                                                Enjoy Unlimited Access on a small price monthly.
                                            </Link>
                                        </h6>
                                        <div className="mt-4">
                                            <Link
                                                to="#"
                                                className="btn border border-borderColor flex items-center justify-center w-full text-dark"
                                            >
                                                Upgrade Now <i className="ti ti-arrow-right ms-2" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* Item five */}
                                <div className="flex items-center flex-wrap justify-center template-more-links mb-4">
                                    <Link
                                        to="#"
                                        className="inline-flex relative text-gray-900 hover:text-primary"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        to="#"
                                        className="inline-flex relative text-gray-900 ml-3 ps-3 hover:text-primary"
                                    >
                                        Privacy
                                    </Link>
                                    <Link
                                        to="#"
                                        className="inline-flex relative text-gray-900 ml-3 ps-3 hover:text-primary"
                                    >
                                        Terms
                                    </Link>
                                    <Link
                                        to="#"
                                        className="inline-flex relative text-gray-900 ml-3 ps-3 hover:text-primary"
                                    >
                                        Help
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* End Right content */}
                    </div>
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default SocialFeed