import React from 'react';
import DatePeriod from './datePeriod';
import Trip from './trip';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
      trips: [null]
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

  // handleStartDate = (event) => {
  //   const date = event.target.value;
  //   this.setState({ 
  //     endOfPeriodDate: new Date(date),
  //   });
  // }

  handleTripSubmit = date => (event) => {
    console.log(event);
    console.log(date);
    event.preventDefault();
    const dateArray = [
      new Date().setDate(date.startDate.toLocaleDateString()), 
      new Date().setDate(date.endDate.toLocaleDateString())
    ]
    this.setState({
      trips: this.state.trips.push(dateArray)
    });
    console.log(this.state.trips)
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
        <p>.</p>
        <Trip 
          submitHandler={this.handleTripSubmit}/>
        <p>Start trip date ranges here</p>

        <p>Output here</p>
      </header>
    </div>
  );
}
}

export default DateCalculator;