import {
  addDays,
  isAfter,
  isBefore,
  isEqual,
  parseISO,
  differenceInDays,
  startOfDay,
} from "date-fns";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import React, { useState } from "react";
import DatePeriod from "./datePeriod";
import Trip from "./trip";
import CalculateButton from "./calculateButton";

const blankTripData = {
  id: startOfDay(Date.now()),
  startDate: null,
  endDate: null,
};

function DateCalculatorApp() {
  const todaysDate = startOfDay(new Date());

  const [endOfPeriodDate, setEndOfPeriodDate] = useState(todaysDate);
  const [startOfPeriodDate, setStartOfPeriodDate] = useState(
    addDays(todaysDate, -179)
  );
  const [trips, setTrips] = useState([blankTripData]);
  const [totalDaysInTheEu, setTotalDaysInTheEu] = useState(0);

  const handleDatePeriodChange = (event) => {
    const date = new Date(event.target.value);
    setEndOfPeriodDate(date);
    setStartOfPeriodDate(addDays(date, -179));
  };

  const handleTripStartDateChange = (trip, event) => {
    const indexToUpdate = trips.indexOf(trip);
    let tempTrips = [...trips];
    const tempTrip = {
      ...trips[indexToUpdate],
      startDate: parseISO(event.target.value),
    };
    tempTrips[indexToUpdate] = tempTrip;
    setTrips(tempTrips);
  };

  const handleTripEndDateChange = (trip, event) => {
    const indexToUpdate = trips.indexOf(trip);
    let tempTrips = [...trips];
    const tempTrip = {
      ...trips[indexToUpdate],
      endDate: parseISO(event.target.value),
    };
    tempTrips[indexToUpdate] = tempTrip;
    setTrips(tempTrips);
  };

  const addTrip = (event) => {
    event.preventDefault();
    let tempTrips = [...trips];
    tempTrips.push(blankTripData);
    setTrips(tempTrips);
  };

  const removeTrip = (trip, event) => {
    event.preventDefault();
    const indexToUpdate = trips.indexOf(trip);
    let tempTrips = [...trips];
    tempTrips.splice(indexToUpdate, 1);
    setTrips(tempTrips);
  };

  const calculation = () => {
    const overlappingTrips = trips.map((trip) => {
      let tripObject = Object.assign({}, trip);

      if (
        isBefore(trip.startDate, startOfPeriodDate) &&
        isAfter(trip.endDate, startOfPeriodDate)
      ) {
        tripObject = Object.assign({}, trip, {
          startDate: startOfPeriodDate,
        });
      }

      if (
        isBefore(trip.startDate, endOfPeriodDate) &&
        isAfter(trip.endDate, endOfPeriodDate)
      ) {
        tripObject = Object.assign({}, trip, {
          endDate: endOfPeriodDate,
        });
      }

      return tripObject;
    });

    const filteredTrips = overlappingTrips.filter((trip) => {
      return trip
        ? (isAfter(trip.startDate, startOfPeriodDate) ||
            isEqual(trip.startDate, startOfPeriodDate)) &&
            (isBefore(trip.endDate, endOfPeriodDate) ||
              isEqual(trip.endDate, endOfPeriodDate))
        : null;
    });

    const daysInEu = filteredTrips.reduce((acc, trip) => {
      return acc + differenceInDays(trip.endDate, trip.startDate) + 1;
    }, 0);

    daysInEu > 0 ? setTotalDaysInTheEu(daysInEu) : setTotalDaysInTheEu(0);
  };

  let dateWarning;
  totalDaysInTheEu > 90
    ? (dateWarning = (
        <h2>You've spent more than 90 days in the EU! Leave now! 💩</h2>
      ))
    : (dateWarning = (
        <h2>You've spent less than 90 days in the EU! Stick around!</h2>
      ));

  return (
    <Container className="center">
      <h1 className="p-3 center">EU Travel Calculator</h1>
      <DatePeriod
        periodEndDate={endOfPeriodDate}
        periodStartDate={startOfPeriodDate}
        clickHandler={handleDatePeriodChange}
      />
      <Button className="m-1" variant="success" type="submit" onClick={addTrip}>
        Add New Trip
      </Button>
      <div id="trip-container">
        {trips.map((trip, index) => (
          <Trip
            key={trip.id}
            handleTripStartDateChange={(event) =>
              handleTripStartDateChange(trip, event)
            }
            handleTripEndDateChange={(event) =>
              handleTripEndDateChange(trip, event)
            }
            handleTripAdd={addTrip}
            handleTripRemove={(event) => removeTrip(trip, event)}
            isFirstElement={index === 0}
          />
        ))}
      </div>
      <CalculateButton handleCalculation={calculation} />
      <h1>Days spent in the EU: {totalDaysInTheEu}</h1>
      {dateWarning}
    </Container>
  );
}

export default DateCalculatorApp;
