import React from "react";

import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import DatePeriodContainer from "./DatePeriodContainer";
import TripContainer from "./TripContainer";
import AddNewTripButton from "./AddNewTripButton";

const DateCalculatorContainer = (props) => {
  return (
    <div className="flex justify-center">
      <div className="bg-green-200 w-1500 place-content-center p-4 m-2 font-bold border-4 border-green-400 rounded-xl">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePeriodContainer
            periodEndDate={props.endOfPeriodDate}
            periodStartDate={props.startOfPeriodDate}
            handleDatePeriodChange={props.handleDatePeriodChange}
          />
          <AddNewTripButton addTrip={props.addTrip} />
          <div data-testid="trips-container">
            {props.trips.map((trip, index) => (
              <TripContainer
                key={trip.id}
                index={index}
                handleTripStartDateChange={(event) =>
                  props.handleTripStartDateChange(trip, event)
                }
                handleTripEndDateChange={(event) =>
                  props.handleTripEndDateChange(trip, event)
                }
                handleTripAdd={props.addTrip}
                handleTripRemove={(event) => props.removeTrip(trip, event)}
                isFirstElement={index === 0}
              />
            ))}
          </div>
        </LocalizationProvider>
      </div>
    </div>
    // </Container>
  );
};

export default DateCalculatorContainer;
