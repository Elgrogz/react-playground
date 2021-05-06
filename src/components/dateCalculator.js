import React from 'react';
import DatePeriod from './datePeriod';
import Trip from './trip';
import AddNewTripButton from './addNewTripButton';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);

    const initialId = Date.now().toString();
    console.log(initialId)

    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
      trips: { initialId:{"startDate": new Date(), "endDate": new Date()}}, // holds data for each trip  
      trip_ids: [initialId], // determines ordering of trips  
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
    // update the start date of the trip corresponding to trip_id  
  }  
  
  handleEndDateChange = (trip_id, date) => {  
    // update the end date of the trip corresponding to trip_id  
  }  
  
  addNewRow = (event) => {  
    // console.log(event.target.value)
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
          {this.state.trip_ids.map((trip_id) => (  
            <div>
            {console.log("specific trip: " + this.state.trips[trip_id])}
            {console.log("trips: " + this.state.trips)}
            {console.log("trip_ids: " + this.state.trip_ids)}
            {console.log("trip found by trip id: " + this.state.trips[trip_id])}
            <Trip 
              // startDate={this.state.trips[trip_id].startDate}  
              // endDate={this.state.trips[trip_id].endDate}  
              onStartDateChange={(date) => this.handleStartDateChange(trip_id, date)}  
              onEndDateChange={(date) => this.handleEndDateChange(trip_id, date)}  
            />         
            <AddNewTripButton onClick={this.addNewRow} />  
          {this.calculation()}  
          </div>
          ))}
        </div>

        <p>Start trip date ranges here</p>

        <p>Output here</p>
      </header>
    </div>
  );
}
}

export default DateCalculator;