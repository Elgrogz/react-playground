import React from 'react';
// import logo from './logo.svg';

class DateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endOfPeriodDate: null,
      startOfPeriodDate: null,
    };
  }

  handleChange = (event) => {
    const date = event.target.value;
    this.setState({ 
      endOfPeriodDate: new Date(date),
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ 
      startOfPeriodDate: new Date (new Date().setDate(this.state.endOfPeriodDate.getDate()-180))
    });
  }

  // showPeriodDates() {
  //   let endOfPeriodDate;
  //   if (this.state.endOfPeriodDate) {
  //     endOfPeriodDate = <div>
  //       <p>{ this.state.endOfPeriodDate.toLocaleDateString() }</p>
  //       <p>{ this.state.startOfPeriodDate ? this.state.startOfPeriodDate.toLocaleDateString() : "" }</p>
  //       </div>
  //   } else {
  //     endOfPeriodDate = null
  //   }
  //   return endOfPeriodDate;
  // }

  render() {
   return (
    <div className="App">
      <header className="App-header">
        <a>
          <p>{ this.state.endOfPeriodDate ? this.state.endOfPeriodDate.toLocaleDateString() : "" }</p>
          <p>{ this.state.startOfPeriodDate ? this.state.startOfPeriodDate.toLocaleDateString() : "" }</p>
        </a>
        <form onSubmit={this.handleSubmit}>
          <label>
            End of Period Date: 
            <input type="date" 
              onChange={this.handleChange} 
            />
          </label>
          <input type="submit" value="Submit" />
        </form>


        <p>Start trip date ranges here</p>

        <p>Output here</p>
      </header>
    </div>
  );
}
}

export default DateCalculator;