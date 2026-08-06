import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { useRef, useState } from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalendarModal from "./modal/calendarModal"

const Calendar = () => {
    const calendarRef = useRef(null);
    const [, setShowEventDetailsModal] = useState(false);
    const [, setEventDetails] = useState<string>("");
    const handleEventClick = (info: any) => {
        setEventDetails(info.event.title);
        setShowEventDetailsModal(true);
    };
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[50px] ml-[240px]">
                <div className="content p-5">

                    {/* Page Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
                        <div>
                            <h4 className="mb-1 text-xl font-bold flex items-center">Calendar</h4>
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
                                    <li>
                                        <Link
                                            to="#"
                                            className="hover:underline text-gray-700"
                                        >
                                            Applications
                                        </Link>
                                        <span>
                                            <i className="ti ti-chevron-right" />
                                        </span>
                                    </li>
                                    <li className="text-dark font-medium" aria-current="page">
                                        Calendar
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                            {/* Refresh Button */}
                            <button
                                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                                title="Refresh"
                            >
                                <i className="ti ti-refresh" />
                            </button>
                            {/* Collapse Button */}
                            <button
                                className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
                                title="Collapse"
                                id="collapse-header"
                            >
                                <i className="ti ti-transition-top" />
                            </button>
                            <Link
                                to="#"
                                className="flex items-center bg-primary text-sm font-medium py-2 rounded text-white px-3 hover:bg-primary-900 hover:text-white"
                                data-modal-toggle="add_event"
                                data-modal-target="add_event"
                            >
                                <i className="ti ti-circle-plus me-2" />
                                Create
                            </Link>
                        </div>
                    </div>
                    {/* End Page Header */}

                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                        {/* Calendar Sidebar */}
                        <div className="xxl:col-span-3 xl:col-span-4">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white">
                                <div className="card-body p-4">
                                    {/* Event */}
                                    <div className="border-b pb-5 mb-5">
                                        <div className="flex items-center justify-between mb-2">
                                            <h5>Event </h5>
                                            <Link
                                                to="#"
                                                className="text-primary"
                                                data-modal-toggle="add_event"
                                                data-modal-target="add_event"
                                            >
                                                <i className="ti ti-square-rounded-plus-filled fs-16" />
                                            </Link>
                                        </div>
                                        <p className="fs-12 mb-2">
                                            Drag and drop your event or click in the calendar
                                        </p>
                                        <div id="external-events">
                                            <div
                                                className="fc-event bg-success-transparent rounded p-2 cursor-move mb-1"
                                                data-event='{ "title": "Team Events" }'
                                                data-event-classname="bg-transparent-success"
                                            >
                                                <i className="ti ti-square-rounded text-success me-2" />
                                                Team Events
                                            </div>
                                            <div
                                                className="fc-event bg-warning-transparent rounded p-2 cursor-move mb-1"
                                                data-event='{ "title": "Team Events" }'
                                                data-event-classname="bg-transparent-warning"
                                            >
                                                <i className="ti ti-square-rounded text-warning me-2" />
                                                Work
                                            </div>
                                            <div
                                                className="fc-event bg-danger-transparent rounded p-2 cursor-move mb-1"
                                                data-event='{ "title": "External" }'
                                                data-event-classname="bg-transparent-danger"
                                            >
                                                <i className="ti ti-square-rounded text-danger me-2" />
                                                External
                                            </div>
                                            <div
                                                className="fc-event bg-skyblue-transparent rounded p-2 cursor-move mb-1"
                                                data-event='{ "title": "Projects" }'
                                                data-event-classname="bg-transparent-skyblue"
                                            >
                                                <i className="ti ti-square-rounded text-skyblue me-2" />
                                                Projects
                                            </div>
                                            <div
                                                className="fc-event bg-purple-100 rounded p-2 cursor-move mb-1"
                                                data-event='{ "title": "Applications" }'
                                                data-event-classname="bg-transparent-purple"
                                            >
                                                <i className="ti ti-square-rounded text-purple me-2" />
                                                Applications
                                            </div>
                                            <div
                                                className="fc-event bg-info-transparent rounded p-2 cursor-move mb-0"
                                                data-event='{ "title": "Desgin" }'
                                                data-event-classname="bg-transparent-info"
                                            >
                                                <i className="ti ti-square-rounded text-info me-2" />
                                                Desgin
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Event */}
                                    {/* Upcoming Event */}
                                    <div className="border-b pb-2 mb-4">
                                        <h5 className="mb-5 flex items-center">
                                            Upcoming Event
                                            <span className="bg-success text-white rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2 ms-2">
                                                15
                                            </span>
                                        </h5>
                                        <div className="border-s-4 border-purple mb-3">
                                            <div className="ps-3">
                                                <h6 className="font-medium mb-1">Meeting with Team Dev</h6>
                                                <p className="fs-12">
                                                    <i className="ti ti-calendar-check text-info me-2" />
                                                    15 Mar 2025
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border-s-4 border-pink mb-3">
                                            <div className="ps-3">
                                                <h6 className="font-medium mb-1">
                                                    Design System With Client
                                                </h6>
                                                <p className="fs-12">
                                                    <i className="ti ti-calendar-check text-info me-2" />
                                                    24 Mar 2025
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border-s-4 border-success mb-3">
                                            <div className="ps-3">
                                                <h6 className="font-medium mb-1">UI/UX Team Call</h6>
                                                <p className="fs-12">
                                                    <i className="ti ti-calendar-check text-info me-2" />
                                                    28 Mar 2025
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Upcoming Event */}
                                    {/* Upgrade Details */}
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
                                    {/* /Upgrade Details */}
                                </div>
                            </div>
                        </div>
                        {/* /Calendar Sidebar */}
                        <div className="xxl:col-span-9 xl:col-span-8">
                            <div className="card border-borderColor rounded-[5px] shadow-xs bg-white">
                                <div className="card-body p-4">
                                    <div id="calendar">
                                        <FullCalendar
                                            plugins={[
                                                dayGridPlugin,
                                                timeGridPlugin,
                                                interactionPlugin,
                                            ]}
                                            initialView="dayGridMonth"
                                            headerToolbar={{
                                                start: "today,prev,next",
                                                center: "title",
                                                end: "dayGridMonth,dayGridWeek,dayGridDay",
                                            }}
                                            eventClick={handleEventClick}
                                            ref={calendarRef}
                                        />
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
            <CalendarModal/>
        </>

    )
}

export default Calendar