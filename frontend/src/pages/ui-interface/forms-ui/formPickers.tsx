import { useState } from "react";
import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import { DatePicker, Button } from "antd";
import { ClockCircleOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const FormPickers = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  
  const handleFastNow = () => {
    setSelectedDate(dayjs());
  };

  return (
    <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
      <div className="content p-5 pb-0">
        {/* Page Header */}
        <div className="mb-7">
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Form Picker
          </h4>
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
                <Link to="#" className="hover:underline text-gray-700">
                  Forms
                </Link>
                <span>
                  <i className="ti ti-chevron-right" />
                </span>
              </li>
              <li className="text-dark font-medium" aria-current="page">
                Form Picker
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Date Picker Section */}
        <div className="row">
          <div className="col-xl-12">
            <div className="card border bg-white border-borderColor mb-5 rounded">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title mb-0">Date Picker with Fast Now</h5>
              </div>
              <div className="card-body p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-6">
                    <div>
                      <h6 className="text-base font-medium mb-3">Date Picker with Fast Now</h6>
                      <p className="text-muted mb-3">
                        Select a date or click "Now" to select current date
                      </p>
                      <DatePicker
                        className="w-full"
                        value={selectedDate}
                        onChange={(date) => setSelectedDate(date || dayjs())}
                        format="DD MMM, YYYY"
                        renderExtraFooter={() => (
                          <div className="p-2 text-right">
                            <Button 
                              type="link" 
                              icon={<ClockCircleOutlined />} 
                              onClick={handleFastNow}
                              className="text-primary hover:bg-gray-100 px-2"
                            >
                              Now
                            </Button>
                          </div>
                        )}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    {/* Other form elements */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <CommonFooter />
    </div>
  );
};

export default FormPickers;