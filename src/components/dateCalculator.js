import {addDays, isAfter, isBefore, isEqual, parseISO} from 'date-fns'

import React from 'react';
import DatePeriod from './datePeriod';
import Trip from './trip';
import TripData from '../models/tripData';
import CalculateButton from './calculateButton';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);

    const initialTripData = new TripData(true);
    const todaysDate = new Date();

    this.state = {
      endOfPeriodDate: todaysDate,
      startOfPeriodDate: addDays(todaysDate, -179),
      trips: [initialTripData],
      canTravelToEu: null,
    };
  }

  handleDatePeriodChange = (event) => {
    const date = new Date(event.target.value);
    this.setState({ 
      endOfPeriodDate: date,
      startOfPeriodDate: addDays(date, -179)
    });
  }

  handleStartDateChange = (trip, event) => {  
    const indexToUpdate = this.state.trips.indexOf(trip);
    let trips = [...this.state.trips];
    let tempTrip = {...this.state.trips[indexToUpdate]}
    tempTrip.startDate = parseISO(event.target.value);
    trips[indexToUpdate] = tempTrip;
    this.setState({trips: trips});
  }  
  
  handleEndDateChange = (trip, event) => {  
    const indexToUpdate = this.state.trips.indexOf(trip);
    let trips = [...this.state.trips];
    let tempTrip = {...this.state.trips[indexToUpdate]}
    tempTrip.endDate = parseISO(event.target.value);
    trips[indexToUpdate] = tempTrip;
    this.setState({trips: trips});
  }  
  
  addTrip = (event) => {  
    event.preventDefault();
    let trips = [...this.state.trips];
    trips.push(new TripData());
    this.setState({trips: trips})
  }  

  removeTrip = (trip, event) => {  
    event.preventDefault();
    const indexToUpdate = this.state.trips.indexOf(trip);
    let trips = [...this.state.trips];
    trips.splice(indexToUpdate, 1)
    this.setState({trips: trips})
  } 
  
  calculation = () => {  
    this.setState({canTravelToEu: "helloooooo!"})
    const overlappingTrips = this.state.trips.map((trip) => {
      let tripObject = Object.assign({}, trip)

      if (isBefore(trip.startDate, this.state.startOfPeriodDate) && isAfter(trip.endDate, this.state.startOfPeriodDate)) {
        tripObject = Object.assign({}, trip, {startDate: this.state.startOfPeriodDate})
      }

      if (isBefore(trip.startDate, this.state.endOfPeriodDate) && isAfter(trip.endDate, this.state.endOfPeriodDate)) {
        tripObject = Object.assign({}, trip, {endDate: this.state.endOfPeriodDate})
      }

      return tripObject
    })

    const filteredTrips = overlappingTrips.filter((trip) => {
      console.log(trip)
      if ((isAfter(trip.startDate, this.state.startOfPeriodDate) || isEqual(trip.startDate, this.state.startOfPeriodDate))
          && (isBefore(trip.endDate, this.state.endOfPeriodDate) || isEqual(trip.endDate, this.state.endOfPeriodDate))) {
        return trip
      }
    })

    console.log(filteredTrips)

    // trips.forEach((trip) => {
    //   console.log(trip.startDate)
    //   console.log(trip.endDate)
    // })

    // check dates are valid - 
    //      get each trip
    //      if the trip start date is before the period start and the trip end is greater than the period start, set the start date to the period start
    //      if the trip start date is before the period end and the trip is greater than the period end, set the end date to the period end
    //      filter out trips with start dates after the end date and trips with end dates before the start date
    //      get the number of each valid trip's length
    //      total up each trips length and see if it is over 90 days in the 180 day period

  }

  render() {
    let dateWarning;
    if (this.state.canTravelToEu) {
      dateWarning = <p>{this.state.canTravelToEu}</p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <DatePeriod
            data={this.state}
            clickHandler={this.handleDatePeriodChange} 
            // submitHandler={this.handleDatePeriodSubmit}
          />
          <div>  
            {this.state.trips.map((trip) => (  
              <Trip 
                key={trip.id} 
                handleStartDateChange={(event) => this.handleStartDateChange(trip, event)}  
                handleEndDateChange={(event) => this.handleEndDateChange(trip, event)}  
                handleTripAdd={this.addTrip}
                handleTripRemove={(event) => this.removeTrip(trip, event)}
                isFirstElement={trip.isFirstTrip}
              >
              </Trip>         
            ))}
          </div>

          <CalculateButton handleCalculation={this.calculation} />

          <p>Output here</p>
          
          {dateWarning} 

        </header>
      </div>
    );
  }
}

export default DateCalculator;


// handleTripRemove={(date) => this.removeTrip(trip, date)} WORKS WITH AN EVENT
// handleTripRemove={this.removeTrip(trip)} DOESN'T WORK