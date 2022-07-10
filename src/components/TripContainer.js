import { useState } from "react";
import DatePicker from "./DatePicker";

const TripContainer = (props) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
        onClick={props.handleTripRemove}
        data-testid={`trip-remove-${props.index}`}
      >
        Remove
      </button>
    );
  }

  return (
    <div className="grid grid-cols-6 place-items-center">
      <div className="col-start-2 col-span-2 mr-1 mb-1">
        <DatePicker
          dateValue={startDate}
          handleDateChange={handleTripStartDateChange}
          dataTestid={`trip-start-datepicker-${props.index}`}
        />
      </div>
      <div className="col-span-2 ml-1 mb-1">
        <DatePicker
          dateValue={endDate}
          handleDateChange={handleTripEndDateChange}
          dataTestid={`trip-end-datepicker-${props.index}`}
        />
      </div>
      <div className="col-span-1 -ml-3">{removeTripButton}</div>
    </div>
  );
};

export default TripContainer;
