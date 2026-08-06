import CommonDatePicker from "../../../../components/common-date-picker/commonDatePicker"
import CommonSelect from "../../../../components/common-select/commonSelect"
import { Category_Color } from "../../../../core/json/selectOption"


const CalendarModal = () => {
    return (
        <>
            {/* Add New Event */}
            <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
                id="add_event"
            >
                <div className="relative p-4 w-full max-w-[500px] max-h-full">
                    <div className="relative bg-white rounded-defaultradius">
                        <div className="flex items-center justify-between p-4 border-b border-borderColor">
                            <h4 className="font-semibold">Add New Event</h4>
                            <button
                                type="button"
                                className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                                data-modal-hide="add_event"
                            >
                                <i className="ti ti-x" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form >
                            <div className="p-4">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="col-span-12">
                                        <div className="mb-3">
                                            <label className="form-label">Event Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="mb-3">
                                            <label className="form-label">Event Date</label>
                                            <div className="w-auto input-group-flat">
                                                <CommonDatePicker placeholder="dd/mm/yyyy" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div>
                                            <label className="form-label">
                                                Category Color <span className="text-danger">*</span>
                                            </label>
                                            <CommonSelect
                                                options={Category_Color}
                                                className="select"
                                                defaultValue={Category_Color[0]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end p-4 border-t border-borderColor">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Add Event
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add New Event */}
            {/* Event */}
            <div
                className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
                id="event_modal"
            >
                <div className="relative p-4 w-full max-w-[500px] max-h-full">
                    <div className="relative bg-white rounded-defaultradius">
                        <div className="flex items-center justify-between p-4 bg-dark rounded-t">
                            <div className="modal-title text-white">
                                <span id="eventTitle" className="text-lg font-semibold" />
                            </div>
                            <button
                                type="button"
                                className="end-2.5 text-white bg-gray-500 hover:bg-danger hover:text-white rounded-full text-xs leading-normal size-5 ms-auto inline-flex justify-center items-center"
                                data-modal-hide="event_modal"
                            >
                                <i className="ti ti-x" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className="p-4">
                            <p className="flex items-center font-medium text-black mb-3">
                                <i className="ti ti-calendar-check text-default me-2" />
                                26 Jul,2024 to 31 Jul,2024
                            </p>
                            <p className="flex items-center font-medium text-black mb-3">
                                <i className="ti ti-calendar-check text-default me-2" />
                                11:00 AM to 12:15 PM
                            </p>
                            <p className="flex items-center font-medium text-black mb-3">
                                <i className="ti ti-map-pin-bolt text-default me-2" />
                                Las Vegas, US
                            </p>
                            <p className="flex items-center font-medium text-black mb-0">
                                <i className="ti ti-calendar-check text-default me-2" />A recurring
                                or repeating event is simply any event that you will occur more than
                                once on your calendar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Event */}
        </>
    )
}

export default CalendarModal