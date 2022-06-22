import React from "react";

import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const DatePeriodContainer = (props) => {
  const [date, setDate] = React.useState(props.periodEndDate);

  const handleDateChange = (date) => {
    setDate(date);
    props.handleDatePeriodChange(date);
  };

  return (
    <div>
      <div className="grid grid-cols-2 justify-center gap-1">
        <div className="">
          <DatePicker
            className="mx-3"
            label="End of Period Date: "
            data-testid="period-end-date"
            inputFormat="dd/MM/yyyy"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
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
    </div>
  );
};

export default DatePeriodContainer;
