import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"
import { useState } from "react"
import CommonTagInputs from "../../../components/common-tag-input/commonTagInputs"


const EmailReply = () => {
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
        <div className="email-sidebar max-w-[300px] border-r border-b border-borderColor">
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
                      <div className="view-all mt-2"
                      onClick={handleToggle}
                      >
                        <Link
                          to="#"
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
                    }}>
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
                      <div className="view-all mt-2"
                      onClick={handleToggle2}
                      >
                        <Link
                          to="#"
                          className="viewall-button-2 font-medium"
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
                      <div className="view-all mt-2"
                      onClick={handleToggle3}
                      >
                        <Link
                          to="#"
                          className="viewall-button-3 font-medium"
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
        </div>
        <div className="mail-detail bg-white border-b border-borderColor flex-1 p-4">
          <div className="active slimscroll h-full">
            <div className="slimscroll-active-sidebar">
              <div className="flex items-center justify-between flex-wrap gap-y-2 border-b mb-3 pb-3">
                <div>
                  <Link
                    to="#"
                    className="border border-borderColor rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="days-dropdown"
                  >
                    <span className="bg-dark rounded-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block me-2">
                      5
                    </span>
                    Peoples
                    <i className="ti ti-chevron-down ml-1" />
                  </Link>
                  <ul
                    id="days-dropdown"
                    className="hidden p-4 border border-borderColor rounded bg-white shadow-lg w-40 z-[1]"
                  >
                    <li>
                      <Link
                        to="#"
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      >
                        Peoples
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      >
                        Rufana
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      >
                        Sean Hill
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      >
                        Cameron Drake
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center">
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-arrow-back-up" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-arrow-back-up-double" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-arrow-forward" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-bookmarks-filled" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-archive-filled" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-mail-opened-filled" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-printer" />
                  </Link>
                  <Link
                    to="#"
                    className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                  >
                    <i className="ti ti-star-filled text-warning" />
                  </Link>
                </div>
              </div>
              <div className="bg-light-500 rounded p-3 mb-3">
                <div className="flex items-center flex-1 border-b border-borderColor mb-3 pb-3">
                  <Link
                    to="#"
                    className="w-8 h-8 flex flex-shrink-0 me-2"
                  >
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-01.jpg"
                      className="rounded-full"
                      alt="Img"
                    />
                  </Link>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-y-2">
                      <div>
                        <h6 className="mb-1">
                          <Link to="#">Angela Thomas</Link>
                        </h6>
                        <p>Subject: Client Dashboard</p>
                      </div>
                      <div className="flex items-center">
                        <p className="me-2 mb-0">12:45 AM</p>
                        <Link
                          to="#"
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                        >
                          <i className="ti ti-arrow-back-up" />
                        </Link>
                        <Link
                          to="#"
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                        >
                          <i className="ti ti-arrow-back-up-double" />
                        </Link>
                        <Link
                          to="#"
                          className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                        >
                          <i className="ti ti-printer" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center flex-wrap gap-y-2">
                  <p className="text-[12px] mb-0 text-dark me-3">
                    <span className="text-gray">From: </span> Arman Janes
                  </p>
                  <p className="text-[12px] mb-0 text-dark me-3">
                    <span className="text-gray">To: </span> Angela Thomas
                  </p>
                  <p className="text-[12px] mb-0 text-dark">
                    <span className="text-gray">Cc: </span> Angela Thomas,
                    Justin Lapointe
                  </p>
                </div>
              </div>
              <div className="card border rounded shadow-none mb-4">
                <div className="card-body p-5">
                  <div>
                    <h6 className="mb-3">Dear Angela</h6>
                    <p className="text-dark">
                      I am writing to request a meeting to discuss the progress
                      and next steps for Project. We have reached a critical
                      milestone, and I believe a discussion will help align our
                      efforts and ensure we are on track to meet our goals.
                    </p>
                    <p className="text-dark">
                      am available on Tuesday and Thursday afternoons, but I am
                      flexible and can adjust to a time that suits you best
                    </p>
                    <p className="text-dark">
                      Looking forward to your response.
                    </p>
                    <p className="text-dark">
                      Best regards, <br />
                      <b className="font-medium flex mt-1">Arman</b>{" "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between my-3 pt-3 border-t">
                    <h5>Attachments</h5>
                    <Link
                      to="#"
                      className="text-primary font-medium"
                    >
                      Download All
                    </Link>
                  </div>
                  <div className="flex items-center email-attach">
                    <Link
                      to="#"
                      data-fancybox="gallery"
                      className="w-16 h-16 me-3 relative gallery-item"
                    >
                      <ImageWithBasePath
                        src="assets/img/media/email-attach-01.jpg"
                        className=" rounded"
                        alt="img"
                      />
                      <span className="w-7 h-7 rounded-full items-center justify-center absolute top-0 opacity-0 bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all">
                        <i className="ti ti-eye" />
                      </span>
                    </Link>
                    <Link
                      to="#"
                      data-fancybox="gallery"
                      className="w-16 h-16 me-3 relative gallery-item"
                    >
                      <ImageWithBasePath
                        src="assets/img/media/email-attach-02.jpg"
                        className="rounded"
                        alt="img"
                      />
                      <span className="w-7 h-7 rounded-full items-center justify-center absolute top-0 opacity-0 bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all">
                        <i className="ti ti-eye" />
                      </span>
                    </Link>
                    <Link
                      to="#"
                      data-fancybox="gallery"
                      className="w-16 h-16 me-3 relative gallery-item"
                    >
                      <ImageWithBasePath
                        src="assets/img/media/email-attach-03.jpg"
                        className="rounded"
                        alt="img"
                      />
                      <span className="w-7 h-7 rounded-full items-center justify-center absolute top-0 opacity-0 bg-white left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all">
                        <i className="ti ti-eye" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card border rounded shadow-none mb-4">
                <div className="card-body p-5">
                  <div className="bg-light-500 rounded p-3 mb-3">
                    <div className="flex items-center flex-wrap gap-y-2 flex-1">
                      <Link
                        to="#"
                        className="w-7 h-7 flex flex-shrink-0 me-2"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-01.jpg"
                          className="rounded-full"
                          alt="Img"
                        />
                      </Link>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-y-2">
                          <div>
                            <h6 className="mb-1">
                              <Link to="#">Arman Janes</Link>
                            </h6>
                            <div className="flex items-center">
                              <p className="mb-0">
                                <span>To: </span> Me
                              </p>
                              <div>
                                <Link
                                  to="#"
                                  className="rounded-full bg-transparent inline-flex items-center justify-center  text-gray-900 ms-2"
                                  data-dropdown-placement="bottom-end"
                                  data-dropdown-toggle="grid-dropdowns"
                                >
                                  <i className="ti ti-chevron-down" />
                                </Link>
                                <ul
                                  id="grid-dropdowns"
                                  className="hidden p-4 border rounded bg-white shadow-lg w-100 z-[1]"
                                >
                                  <li>
                                    <Link
                                      to="#"
                                      className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                      <span className="text-gray me-1">
                                        From :{" "}
                                      </span>{" "}
                                      Arman Janes arman343@example.com
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                      <span className="text-gray me-1">
                                        To :{" "}
                                      </span>{" "}
                                      Angela Thomas ange4565@example.com
                                    </Link>
                                  </li>
                                  <li>
                                    <Link
                                      to="#"
                                      className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                    >
                                      <span className="text-gray me-1">
                                        Date :{" "}
                                      </span>{" "}
                                      12 May 2025, 09:45 PM{" "}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <p className="me-2 mb-0">Yesterday 01:22 AM</p>
                            <Link
                              to="#"
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                            >
                              <i className="ti ti-arrow-back-up" />
                            </Link>
                            <Link
                              to="#"
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                            >
                              <i className="ti ti-arrow-back-up-double" />
                            </Link>
                            <Link
                              to="#"
                              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"
                            >
                              <i className="ti ti-printer" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 className="mb-2">Dear Arman</h6>
                    <p className="text-dark mb-5">
                      Introduction Mail from Techsolutions!!!
                    </p>
                    <p className="text-dark">
                      Best regards <br />
                      <b className="font-medium inline-flex mt-1">Arman</b>
                    </p>
                  </div>
                  <form>
                    <div className="border rounded mt-3">
                      <div className="p-3 relative pb-2 border-b border-borderColor">
                        <div className="tag-with-img flex items-center">
                          <label className="form-label me-2">To</label>
                          <input
                            className="input-tags form-control border-0 h-100"
                            id="inputBox"
                            type="text"
                            data-role="tagsinput"
                            name="Label"
                            defaultValue="Angela Thomas"
                          />
                        </div>
                        <div className="flex items-center email-cc absolute right-[10px] me-5 top-1/2 transform -translate-y-1/2">
                          <Link
                            to="#"
                            className="inline-flex me-2"
                          >
                            Cc
                          </Link>
                          <Link to="#" className="inline-flex">
                            Bcc
                          </Link>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="mb-3">
                          <textarea
                            rows={2}
                            className="form-control border-0 w-full focus:ring-0 outline-0 p-0"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t p-3">
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
                        <div className="flex items-center">
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
                            className="btn bg-primary inline-flex items-center text-white ms-2"
                          >
                            Send <i className="ti ti-arrow-right ms-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-center">
                <Link
                  to="#"
                  className="bg-dark rounded px-2 py-1 text-white text-[14px]"
                >
                  View Older Messages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer */}
   <CommonFooter/>
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

export default EmailReply