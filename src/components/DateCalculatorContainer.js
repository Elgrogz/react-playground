import React from "react";

import DatePeriodContainer from "./DatePeriodContainer";
import TripContainer from "./TripContainer";
import AddNewTripButton from "./AddNewTripButton";

import Container from "@mui/material/Container";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DateCalculatorContainer = (props) => {
  return (
    <Container
      sx={{
        bgcolor: "#c8e3d4",
        boxShadow: 1,
        border: 3,
        borderRadius: 10,
        borderColor: "#87aaaa",
        p: 5,
        width: 500,
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePeriodContainer
          periodEndDate={props.endOfPeriodDate}
          periodStartDate={props.startOfPeriodDate}
          handleDatePeriodChange={props.handleDatePeriodChange}
        />
        <AddNewTripButton addTrip={props.addTrip} />
        <Container id="trip-container">
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
        </Container>
      </LocalizationProvider>
    </Container>
  );
};

export default DateCalculatorContainer;
