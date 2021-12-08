import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import React from "react";
import DatePeriodContainer from "./DatePeriodContainer";
import TripContainer from "./TripContainer";
import AddNewTripButton from "./AddNewTripButton";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const DateCalculatorContainer = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Row>
        <Col />
        <Col xs={8} className="container-box">
          <DatePeriodContainer
            periodEndDate={props.endOfPeriodDate}
            periodStartDate={props.startOfPeriodDate}
            handleDatePeriodChange={props.handleDatePeriodChange}
          />
          <AddNewTripButton addTrip={props.addTrip} />
          <Row>
            <Col xs={12} className="center">
              <div id="trip-container">
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
            </Col>
          </Row>
        </Col>
        <Col />
      </Row>
    </LocalizationProvider>
  );
};

export default DateCalculatorContainer;
