import React from 'react';
import DatePeriod from './datePeriod';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
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
        <AddTrip />
        <p>Start trip date ranges here</p>

        <p>Output here</p>
      </header>
    </div>
  );
}
}

export default DateCalculator;