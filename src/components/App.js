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

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Header from "./Header";
import DateCalculatorContainer from "./DateCalculatorContainer";
import CalculateButton from "./CalculateButton";
import ResultContainer from "./ResultContainer";
import Footer from "./Footer";

const App = () => {
  const theme = createTheme();

  // const [tripCount, setTripCount] = useState(1);
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
    console.dir("useEffect ---- before trip count: " + countRef.current);
    console.dir("useEffect ---- before trip count: " + blankTripData.id);
    countRef.current += 1;
    console.dir("useEffect ---- after trip count: " + countRef.current);
    console.dir("useEffect ---- after trip count: " + blankTripData.id);
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
    // console.log("tripcount before: " + countRef.current);
    // setTripCount((previousTripCount) => previousTripCount + 1);
    // countRef.current += 1;
    // console.log("tripcount after: " + countRef.current);
    // console.log("blank trip data: " + blankTripData.id);

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
    <ThemeProvider theme={theme}>
      <Box className="bg-blue-400">
        <Header />
        <Container id="app">
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
      </Box>
    </ThemeProvider>
  );
};

export default App;
