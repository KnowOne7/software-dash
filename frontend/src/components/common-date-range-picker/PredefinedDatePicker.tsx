import { DateRangePicker } from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { useState } from "react";
import { useLocation } from "react-router";

// Helper to format date as "11 Jul 25"
function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  });
}

export default function PredefinedDatePicker() {
  const now = new Date();

  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    0,
    0,
    0,
    0
  );
  const endOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    59,
    59,
    999
  );

  const startOfMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
    0,
    0,
    0,
    0
  );
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  const startOfLastMonth = new Date(
    now.getFullYear(),
    now.getMonth() - 1,
    1,
    0,
    0,
    0,
    0
  );
  const endOfLastMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    0,
    23,
    59,
    59,
    999
  );

  const initialSettings = {
    startDate: startOfToday,
    endDate: endOfToday,
    ranges: {
      "Last 30 Days": [
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29),
        endOfToday,
      ],
      "Last 7 Days": [
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6),
        endOfToday,
      ],
      "Last Month": [startOfLastMonth, endOfLastMonth],
      "This Month": [startOfMonth, endOfMonth],
      Today: [startOfToday, endOfToday],
      Yesterday: [
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          0,
          0,
          0,
          0
        ),
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 1,
          23,
          59,
          59,
          999
        ),
      ],
    },
    timePicker: false,
    locale: { format: "DD MMM YY" },
  };

  const [displayValue, setDisplayValue] = useState(
    `${formatDate(startOfToday)} - ${formatDate(endOfToday)}`
  );

  const updateDisplay = (picker: any) => {
    if (picker?.startDate && picker?.endDate) {
      setDisplayValue(
        `${formatDate(picker.startDate.toDate())} - ${formatDate(
          picker.endDate.toDate()
        )}`
      );
    }
  };
const location = useLocation();

  return (
    <div>
      <span className={`absolute inset-y-1/2 flex items-center me-2.5 pointer-events-none ${location.pathname === "/layout-rtl" ? "left-0 end-[10px]" : "start-[10px]"}`}>
        <i className="ti ti-calendar-due text-dark fs-14 me-1"></i>
      </span>
      <div className="block flex-1 border border-borderColor shadow bg-white rounded-[5px] py-1.5 pr-2.5 pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400  date-range bookingrange">
        <DateRangePicker
          initialSettings={initialSettings}
          onApply={(_e, picker) => updateDisplay(picker)}
          onShow={(_e, picker) => updateDisplay(picker)}
        >
          <span className="reportrange-picker-field">{displayValue}</span>
        </DateRangePicker>
      </div>
    </div>
  );
}
