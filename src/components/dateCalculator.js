import addDays from 'date-fns/addDays';

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
      calculatedDates: null,
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
    tempTrip.startDate = event.target.value;
    trips[indexToUpdate] = tempTrip;
    this.setState({trips: trips});
  }  
  
  handleEndDateChange = (trip, event) => {  
    const indexToUpdate = this.state.trips.indexOf(trip);
    let trips = [...this.state.trips];
    let tempTrip = {...this.state.trips[indexToUpdate]}
    tempTrip.endDate = event.target.value;
    trips[indexToUpdate] = tempTrip;
    this.setState({trips: trips});
  }  
  
  addTrip = (event) => {  
    console.log(event.target.value)
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
    this.setState({calculatedDates: "helloooooo!"})
    return 123 // some calculation involving this.state.trips  
  }

  render() {
    let dateWarning;
    if (this.state.calculatedDates) {
      dateWarning = <p>{this.state.calculatedDates}</p>
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