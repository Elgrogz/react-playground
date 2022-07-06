import { useState } from "react";

import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";

const TripContainer = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleTripStartDateChange = (date) => {
    setStartDate(date);
    props.handleTripStartDateChange(date);
  };

  const handleTripEndDateChange = (date) => {
    setEndDate(date);
    props.handleTripEndDateChange(date);
  };

  let removeTripButton;
  if (!props.isFirstElement) {
    removeTripButton = (
      <button
        type="submit"
        className="bg-red-300 hover:bg-red-400 p-1 m-2 font-bold border-4 border-red-500 rounded-xl"
        // startIcon={<DeleteIcon />}
        onClick={props.handleTripRemove}
        data-testid={"trip-remove-" + props.index}
      >
        Remove
      </button>
    );
  }

  return (
    <div className="grid grid-cols-6 place-items-center">
      <div
        className="col-start-2 col-span-2 mr-1 mb-1"
        // data-testId="trip-start-date"
      >
        <DatePicker
          controlId="tripStartDate"
          label="Start date of Trip: "
          value={startDate}
          data-testid={"trip-start-date-" + props.index}
          inputFormat="dd/MM/yyyy"
          onChange={handleTripStartDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="col-span-2 ml-1 mb-1">
        <DatePicker
          controlId="tripEndDate"
          label="End date of Trip: "
          value={endDate}
          data-testid={"trip-end-date-" + props.index}
          inputFormat="dd/MM/yyyy"
          onChange={handleTripEndDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <div className="col-span-1 -ml-3">{removeTripButton}</div>
    </div>
  );
};

export default TripContainer;
