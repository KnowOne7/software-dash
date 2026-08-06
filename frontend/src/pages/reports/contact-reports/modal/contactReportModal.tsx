import CommonSelect from "../../../../components/common-select/commonSelect";
import { File_Type, File_Type_2, Position, Select_Year, Source } from "../../../../core/json/selectOption";


const ContactReportModal = () => {
  return (
    <>
      {/* start modal */}
      <div
        id="download_report"
        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4"
      >
        <div className="relative p-4 w-full max-w-[500px] max-h-full">
          <div className="relative bg-white rounded-defaultradius">
            <div className="flex items-center justify-between p-4 border-b border-borderColor">
              <div className="flex item-center gap-2">
                <h5 className="font-bold text-[18px]">Download Report</h5>
              </div>
              <button
                type="button"
                className="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
                data-modal-hide="download_report"
              >
                <i className="ti ti-x" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-3">
                  <div className="md:col-span-12">
                    <div>
                      <label className="form-label">
                        File Type<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={File_Type}
                        className="select"
                        defaultValue={File_Type[0]}
                      />
                    </div>
                  </div>
                  <h5 className="my-2">Filters</h5>
                  <div className="md:col-span-12">
                    <div>
                      <label className="form-label">
                        File Type<span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={File_Type_2}
                        className="select"
                        defaultValue={File_Type_2[0]}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div>
                      <label className="form-label">
                        Position <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Position}
                        className="select"
                        defaultValue={Position[0]}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div>
                      <label className="form-label">
                        Source <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Source}
                        className="select"
                        defaultValue={Source[0]}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-12">
                    <div>
                      <label className="form-label">
                        Select Year <span className="text-danger ms-1">*</span>
                      </label>
                      <CommonSelect
                        options={Select_Year}
                        className="select"
                        defaultValue={Select_Year[0]}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
              <button
                type="button"
                data-modal-hide="download_report"
                className="btn btn-sm btn-light"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-sm btn-primary">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end modal */}
    </>

  );
};

export default ContactReportModal;
