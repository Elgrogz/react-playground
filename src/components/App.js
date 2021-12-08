import React, { useState, useEffect } from "react";
import {
  addDays,
  isAfter,
  isBefore,
  isEqual,
  parseISO,
  differenceInDays,
  startOfDay,
  getUnixTime,
} from "date-fns";

import Container from "react-bootstrap/Container";

import Header from "./Header";
import DateCalculatorContainer from "./DateCalculatorContainer";
import CalculateButton from "./CalculateButton";
import ResultContainer from "./ResultContainer";
import Footer from "./Footer";

const blankTripData = {
  id: getUnixTime(startOfDay(Date.now())),
  startDate: null,
  endDate: null,
};

const App = () => {
  const todaysDate = startOfDay(new Date());

  const [endOfPeriodDate, setEndOfPeriodDate] = useState(todaysDate);
  const [startOfPeriodDate, setStartOfPeriodDate] = useState(
    addDays(todaysDate, -179)
  );
  const [trips, setTrips] = useState([blankTripData]);
  const [totalDaysInTheEu, setTotalDaysInTheEu] = useState(0);

  useEffect(() => {
    // console.log("period date --------> " + endOfPeriodDate);
  });

  const handleDatePeriodChange = (newDate) => {
    const date = new Date(newDate);
    setEndOfPeriodDate(date);
    setStartOfPeriodDate(addDays(date, -179));
  };

  const handleTripStartDateChange = (trip, date) => {
    console.log("date --------> " + date);
    console.log("Trip --------> " + trip);
    const indexToUpdate = trips.indexOf(trip);
    let tempTrips = [...trips];
    const tempTrip = {
      ...trips[indexToUpdate],
      startDate: startOfDay(date),
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
    <div>
      <Header />
      <Container id="app" className="center">
        <DateCalculatorContainer
          endOfPeriodDate={endOfPeriodDate}
          startOfPeriodDate={startOfPeriodDate}
          handleDatePeriodChange={handleDatePeriodChange}
          trips={trips}
          addTrip={addTrip}
          removeTrip={removeTrip}
          handleTripStartDateChange={handleTripStartDateChange}
          handleTripEndDateChange={handleTripEndDateChange}
        />
        <CalculateButton handleCalculation={calculation} />
        <ResultContainer
          totalDaysInTheEu={totalDaysInTheEu}
          dateWarning={dateWarning}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
