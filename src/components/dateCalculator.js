import { addDays, isAfter, isBefore, isEqual, parseISO, differenceInDays, startOfDay } from 'date-fns'

import React from 'react'
import DatePeriod from './datePeriod'
import Trip from './trip'
import TripData from '../models/tripData'
import CalculateButton from './calculateButton'

class DateCalculator extends React.Component {
  constructor(props) {
    super(props)

    const initialTripData = new TripData()
    const initialTripId = Date.now().toString();
    const todaysDate = startOfDay(new Date())

    this.state = {
      endOfPeriodDate: todaysDate,
      startOfPeriodDate: addDays(todaysDate, -179),
      tripIds: [initialTripId],
      tripData: { [initialTripId]: initialTripData},
      totalDaysInEu: 0,
    };
  }

  handleDatePeriodChange = (event) => {
    const date = new Date(event.target.value)
    this.setState({ 
      endOfPeriodDate: date,
      startOfPeriodDate: addDays(date, -179)
    });
  }

  handleStartDateChange = (tripId, event) => {  
    const trips = {
      ...this.state.tripData,
      [tripId]: { ...this.state.tripData[tripId], startDate: parseISO(event.target.value) }
    }
    this.setState({ tripData: trips})

    // const indexToUpdate = this.state.trips.indexOf(trip)
    // let trips = [...this.state.trips]
    // let tempTrip = {
    //   ...this.state.trips[indexToUpdate],
    //   startDate: parseISO(event.target.value)
    // }
    // trips[indexToUpdate] = tempTrip
    // this.setState({trips: trips})
  }  
  
  handleEndDateChange = (tripId, event) => {  
    const trips = {
      ...this.state.tripData,
      [tripId]: { ...this.state.tripData[tripId], endDate: parseISO(event.target.value) }
    }
    this.setState({ tripData: trips})


    // const indexToUpdate = this.state.trips.indexOf(trip)
    // let trips = [...this.state.trips]
    // let tempTrip = {
    //   ...this.state.trips[indexToUpdate],
    //   endDate: parseISO(event.target.value)
    // }
    // trips[indexToUpdate] = tempTrip
    // this.setState({trips: trips})
  }  
  
  addTrip = (event) => {  
    event.preventDefault()

    const newTrip = new TripData();
    const tripId = Date.now().toString();
    const newTripIds = [...this.state.tripIds, tripId];
    const newTrips = { ...this.state.tripData, [tripId]: { newTrip } }
    this.setState({ tripIds: newTripIds, tripData: newTrips })

    // let trips = [...this.state.trips]
    // trips.push(new TripData())
    // this.setState({trips: trips})
  }  

  removeTrip = (tripId, event) => {  
    event.preventDefault();

    const newTripIds = [...this.state.tripIds].splice(tripId)
    const newTrips = delete { ...this.state.tripData[tripId]}
    // const indexToUpdate = this.state.tripsIds.indexOf(trip)
    // let trips = [...this.state.trips]
    // trips.splice(indexToUpdate, 1)
    // this.setState({trips: trips})
  } 
  
  calculation = () => {  
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
      return trip ? (
             (isAfter(trip.startDate, this.state.startOfPeriodDate) || isEqual(trip.startDate, this.state.startOfPeriodDate))
          && (isBefore(trip.endDate, this.state.endOfPeriodDate) || isEqual(trip.endDate, this.state.endOfPeriodDate))
          ) : null
    });

    const daysInEu = filteredTrips.reduce((acc, trip) => {
      return acc + differenceInDays(trip.endDate, trip.startDate) + 1
    }, 0)

    daysInEu > 0 ? this.setState({totalDaysInEu: daysInEu}) : this.setState({totalDaysInEu: 0})
  }

  render() {   
    let dateWarning;
    this.state.totalDaysInEu > 90 ? 
        dateWarning = <p>The user has spent more than 90 days in the EU! Leave now!</p> : 
        dateWarning = <p>The user has spent less than 90 days in the EU! Stick around!</p> 

    return (
      <div className="App">
        <header className="App-header">
          <DatePeriod
            data={this.state}
            clickHandler={this.handleDatePeriodChange} 
          />
          <div>  
            {this.state.tripIds.map((tripId, index) => (  
              <Trip 
                key={tripId} 
                handleStartDateChange={(event) => this.handleStartDateChange(tripId, event)}  
                handleEndDateChange={(event) => this.handleEndDateChange(tripId, event)}  
                handleTripAdd={this.addTrip}
                handleTripRemove={(event) => this.removeTrip(tripId, event)}
                isFirstElement={index === 0}
              >
              </Trip>         
            ))}
          </div>

          <CalculateButton handleCalculation={this.calculation} />

          <p>Days spent in the EU: {this.state.totalDaysInEu}</p>
          
          {dateWarning} 

        </header>
      </div>
    );
  }
}

export default DateCalculator;
