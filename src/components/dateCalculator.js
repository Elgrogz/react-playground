import {addDays, isAfter, isBefore, isEqual, parseISO, differenceInDays, startOfDay} from 'date-fns'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import React from 'react'
import DatePeriod from './datePeriod'
import Trip from './trip'
import TripData from '../models/tripData'
import CalculateButton from './calculateButton'

class DateCalculator extends React.Component {
  constructor(props) {
    super(props)

    const initialTripData = new TripData()
    const todaysDate = startOfDay(new Date())

    this.state = {
      endOfPeriodDate: todaysDate,
      startOfPeriodDate: addDays(todaysDate, -179),
      trips: [initialTripData],
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

  handleStartDateChange = (trip, event) => {  
    const indexToUpdate = this.state.trips.indexOf(trip)
    let trips = [...this.state.trips]
    const tempTrip = {
      ...this.state.trips[indexToUpdate],
      startDate: parseISO(event.target.value)
    }
    trips[indexToUpdate] = tempTrip
    this.setState({trips: trips})
  }  
  
  handleEndDateChange = (trip, event) => {  
    const indexToUpdate = this.state.trips.indexOf(trip)
    let trips = [...this.state.trips]
    const tempTrip = {
      ...this.state.trips[indexToUpdate],
      endDate: parseISO(event.target.value)
    }
    trips[indexToUpdate] = tempTrip
    this.setState({trips: trips})
  }  
  
  addTrip = (event) => {  
    event.preventDefault()
    let trips = [...this.state.trips]
    trips.push(new TripData())
    this.setState({trips: trips})
  }  

  removeTrip = (trip, event) => {  
    event.preventDefault();
    const indexToUpdate = this.state.trips.indexOf(trip)
    let trips = [...this.state.trips]
    trips.splice(indexToUpdate, 1)
    this.setState({trips: trips})
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
    dateWarning = <h2>You've spent more than 90 days in the EU! Leave now!</h2> : 
    dateWarning = <h2>You've spent less than 90 days in the EU! Stick around!</h2> 
    
    return (
      <Container className="center">
        <Row className="p-3 center">
          <h1>EU Travel Calculator</h1>
        </Row>
        <DatePeriod 
          periodEndDate={this.state.endOfPeriodDate} 
          periodStateDate={this.state.startOfPeriodDate}
          clickHandler={this.handleDatePeriodChange} 
        />
        <Row className="p-1 center">
            {this.state.trips.map((trip, index) => (  
              <Trip 
                key={trip.id} 
                handleStartDateChange={(event) => this.handleStartDateChange(trip, event)}  
                handleEndDateChange={(event) => this.handleEndDateChange(trip, event)}  
                handleTripAdd={this.addTrip}
                handleTripRemove={(event) => this.removeTrip(trip, event)}
                isFirstElement={index === 0}
              />
              ))
            }
        </Row>
        <CalculateButton handleCalculation={this.calculation} />     
          <h1>Days spent in the EU: {this.state.totalDaysInEu}</h1>
          {dateWarning} 
      </Container>
    );
  }
}

export default DateCalculator;
