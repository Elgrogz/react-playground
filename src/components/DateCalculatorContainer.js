import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import React from "react";
import DatePeriodContainer from "./DatePeriodContainer";
import TripContainer from "./TripContainer";
import AddNewTripButton from "./AddNewTripButton";

const DateCalculatorContainer = (props) => {
  return (
    <Row>
      <Col></Col>
      <Col xs={10}>
        <DatePeriodContainer
          periodEndDate={props.endOfPeriodDate}
          periodStartDate={props.startOfPeriodDate}
          clickHandler={props.handleDatePeriodChange}
        />
        <AddNewTripButton addTrip={props.addTrip} />
        <Row>
          <Col xs={12} className="center">
            <Col xs={0} lg={2} />
            <div id="trip-container">
              {props.trips.map((trip, index) => (
                <TripContainer
                  key={trip.id}
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
          <Col xs={0} lg={2} />
        </Row>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default DateCalculatorContainer;
