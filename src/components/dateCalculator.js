import React from 'react';
import DatePeriod from './datePeriod';
import Trip from './trip';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
      trips: {"1": {start_date: null, end_date: null} }, // holds data for each trip  
      trip_ids: ["1"], // determines ordering of trips  
    };
  }

  handleDatePeriodChange = (event) => {
    const date = event.target.value;
    this.setState({ 
      endOfPeriodDate: new Date(date),
    });
  }

  handleDatePeriodSubmit = (event) => {
    console.log(event.target.value)
    event.preventDefault();
    this.setState({ 
      startOfPeriodDate: new Date (new Date().setDate(this.state.endOfPeriodDate.getDate()-179))
    });
  }

  // handleStartDateChange = (event) => {
  //   const date = event.target.value;
  //   this.setState({ 
  //     endOfPeriodDate: new Date(date),
  //   });
  // }

  // handleEndDateChange = (event) => {
  //   console.log(event.target.value)
  //   this.setState({ 
  //     startOfPeriodDate: new Date()
  //   });
  // }

  // handleTripSubmit = (event) => {
  //   console.log(event.target.value)
  //   this.setState({ 
  //     startOfPeriodDate: new Date()
  //   });
  // }

  handleStartDateChange = (trip_id, date) => {  
    // update the start date of the trip corresponding to trip_id  
  }  
  
  handleEndDateChange = (trip_id, date) => {  
    // update the end date of the trip corresponding to trip_id  
  }  
  
  addNewRow = () => {  
    // push a new item to this.state.trip_ids with a random id  
    // add a blank trip to this.state.trips with that trip_id just generated  
  }  
  
  calculation = () => {  
    return 123 // some calculation involving this.state.trips  
  }

  render() {
    {console.log("trip ids:" + this.state.trip_ids)}
    {console.log("trips: " + this.state.trips)}
   return (
    <div className="App">
      <header className="App-header">
        <DatePeriod
          data={this.state}
          clickHandler={this.handleDatePeriodChange} 
          submitHandler={this.handleDatePeriodSubmit}
        />
        <p>.</p>
        <div>  
          {this.state.trip_ids.map((trip_id) => (  
            console.log("specific id: " + trip_id),
            <Trip 
              startDate={this.state.trips[trip_id].startDate}  
              endDate={this.state.trips[trip_id].endDate}  
              onStartDateChange={(date) => this.handleStartDateChange(trip_id, date)}  
              onEndDateChange={(date) => this.handleEndDateChange(trip_id, date)}  
            />
          )
          <AddNewRowButton onClick={this.addNewRow} />  
          {this.calculation()}  
          )};
        </div>

        <p>Start trip date ranges here</p>

        <p>Output here</p>
      </header>
    </div>
  );
}
}

export default DateCalculator;