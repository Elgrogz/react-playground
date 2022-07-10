import { useState } from "react";

import DatePicker from "./DatePicker";

const DatePeriodContainer = (props) => {
  const [date, setDate] = useState(props.periodEndDate);

  const handleDateChange = (date) => {
    setDate(date);
    props.handleDatePeriodChange(date);
  };

  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="flex justify-center">
        <DatePicker dateValue={date} handleDateChange={handleDateChange} />
      </div>
      <div className="date-box">
        <p>
          End of 180 day travel period:{" "}
          <b data-testid="period-end-date-label">
            {props.periodEndDate.toLocaleDateString()}
          </b>
        </p>
        <p>
          Start of 180 day travel period:{" "}
          <b data-testid="period-start-date-label">
            {props.periodStartDate.toLocaleDateString()}
          </b>
        </p>
      </div>
    </div>
  );
};

export default DatePeriodContainer;
