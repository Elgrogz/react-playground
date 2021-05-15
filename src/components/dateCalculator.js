import React from 'react';
import DatePeriod from './datePeriod';
import Trip from './trip';
import TripData from '../models/tripData';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);

    const initialTripData = new TripData();

    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
      trips: [initialTripData],
    };
  }

  handleDatePeriodChange = (event) => {
    const date = event.target.value;
    this.setState({ 
      endOfPeriodDate: new Date(date),
    });
  }

  handleDatePeriodSubmit = (event) => {
    event.preventDefault();
    this.setState({ 
      startOfPeriodDate: new Date (new Date().setDate(this.state.endOfPeriodDate.getDate()-179))
    });
  }

  handleStartDateChange = (trip_id, date) => {  
    console.log("start date change")
    // update the start date of the trip corresponding to trip_id  
  }  
  
  handleEndDateChange = (trip_id, date) => {  
    console.log("end date change")
    // update the end date of the trip corresponding to trip_id  
  }  
  
  addNewRow = (event) => {  
    console.log(event.target.value)
    event.preventDefault();
    // push a new item to this.state.trip_ids with a random id  
    // add a blank trip to this.state.trips with that trip_id just generated  
  }  
  
  calculation = () => {  
    // return 123 // some calculation involving this.state.trips  
  }

  render() {
   return (
    <div className="App">
      <header className="App-header">
        <DatePeriod
          data={this.state}
          clickHandler={this.handleDatePeriodChange} 
          submitHandler={this.handleDatePeriodSubmit}
        />
        <div>  
          {this.state.trips.map((trip) => (  
            <Trip 
              // startDate={this.state.trips[trip_id].startDate}  
              // endDate={this.state.trips[trip_id].endDate} 
              key={trip.id} 
              onStartDateChange={(date) => this.handleStartDateChange(trip, date)}  
              onEndDateChange={(date) => this.handleEndDateChange(trip, date)}  
              onTripSubmit={this.addNewRow}
            >
             {/* {console.log(trip.key)} */}
            </Trip>         
          ))}
        </div>

        {this.calculation()} 

        <p>Start trip date ranges here</p>

        <p>Output here</p>
      </header>
    </div>
  );
}
}

export default DateCalculator;


// const trips = []
// const trip1 = { "key": Date.now().toString(), "startDate": nil, "endDate": nil }