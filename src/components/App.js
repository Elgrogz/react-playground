import React, { useState, useEffect } from "react";
import {
  addDays,
  isAfter,
  isBefore,
  isEqual,
  differenceInDays,
  startOfDay,
  getUnixTime,
} from "date-fns";

import Header from "./Header";
import DateCalculatorContainer from "./DateCalculatorContainer";
import CalculateButton from "./CalculateButton";
import ResultContainer from "./ResultContainer";
import Footer from "./Footer";

const App = () => {
  const countRef = React.useRef(1);

  const blankTripData = {
    id: getUnixTime(startOfDay(Date.now())) + countRef.current,
    startDate: null,
    endDate: null,
  };

  const todaysDate = startOfDay(new Date());

  const [endOfPeriodDate, setEndOfPeriodDate] = useState(todaysDate);
  const [startOfPeriodDate, setStartOfPeriodDate] = useState(
    addDays(todaysDate, -179)
  );
  const [trips, setTrips] = useState([blankTripData]);
  const [totalDaysInTheEu, setTotalDaysInTheEu] = useState(0);

  useEffect(() => {
    countRef.current += 1;
  }, [trips]);

  const handleDatePeriodChange = (newDate) => {
    const date = new Date(newDate);
    setEndOfPeriodDate(date);
    setStartOfPeriodDate(addDays(date, -179));
  };

  const handleTripStartDateChange = (trip, date) => {
    const indexToUpdate = trips.indexOf(trip);
    let tempTrips = [...trips];
    const tempTrip = {
      ...trips[indexToUpdate],
      startDate: startOfDay(date),
    };
    tempTrips[indexToUpdate] = tempTrip;
    setTrips(tempTrips);
  };

  const handleTripEndDateChange = (trip, date) => {
    const indexToUpdate = trips.indexOf(trip);
    let tempTrips = [...trips];
    const tempTrip = {
      ...trips[indexToUpdate],
      endDate: startOfDay(date),
    };
    tempTrips[indexToUpdate] = tempTrip;
    setTrips(tempTrips);
  };

  const addTrip = (event) => {
    event.preventDefault();

    const blankTripData = {
      id: getUnixTime(startOfDay(Date.now())) + countRef.current,
      startDate: null,
      endDate: null,
    };

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
    <div class="min-h-screen bg-blue-400">
      <Header />
      <div id="app">
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
        <CalculateButton
          className="justify-center"
          handleCalculation={calculation}
        />
        <ResultContainer
          totalDaysInTheEu={totalDaysInTheEu}
          dateWarning={dateWarning}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
